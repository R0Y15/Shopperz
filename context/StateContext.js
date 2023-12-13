import product from "@/sanity_shopperz/schemas/product";
import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQty, setTotalQty] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {
        const checkProductsInCart = cartItems.find((item) => item._id === product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQty((prevTotalQty) => prevTotalQty + quantity);

        if (checkProductsInCart) {
            const updateCartItems = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) return {
                    ...cartProduct,
                    qty: cartProduct.qty + quantity
                }
            })
            setCartItems(updateCartItems);
        } else {
            product.quantity = quantity;

            setCartItems([...cartItems, { ...product }]);
        }

        toast.success(` ${qty} ${product.name} Added to the Cart `);
    }

    const onremove = (id) => {
        foundProduct = cartItems.find((item) => item._id === id);
        const newCartItem = cartItems.filter((item) => item._id !== id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
        setTotalQty((prevTotalQty) => prevTotalQty - foundProduct.quantity);
        setCartItems(newCartItem);
    }

    const removeAll = () => {
        setCartItems([]);
        setTotalPrice(0);
        setTotalQty(0);
    }

    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id);
        index = cartItems.findIndex((product) => product._id === id);

        if (value === 'inc') {
            if (foundProduct.quantity >= 5) {
                toast.error('You cannot add more than 5 items');
                return; // return if the quantity is already 5
            }
            const updatedData = cartItems.map(item => (item._id === id ? { ...item, quantity: item.quantity + 1 } : item));
            setCartItems(updatedData);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQty(prevTotalQty => prevTotalQty + 1)
        } else if (value === 'dec') {
            if (foundProduct.quantity > 1) {
                const updatedData = cartItems.map(item => (item._id === id ? { ...item, quantity: item.quantity - 1 } : item));
                setCartItems(updatedData);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQty(prevTotalQty => prevTotalQty - 1)
            }
        }
    }

    const incQty = () => {
        if (qty < 5) {
            setQty((prevQty) => prevQty + 1);
        } else {
            toast.error('You cannot add more than 5 items');
            return; // return if the quantity is already 5
        }
    }
    const decQty = () => {
        setQty((prevQty) => {
            if ((prevQty - 1) < 1) return 1;

            return prevQty - 1;
        });
    }

    return (
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                cartItems,
                qty,
                totalQty,
                totalPrice,
                incQty,
                decQty,
                onAdd,
                toggleCartItemQuantity,
                onremove,
                removeAll
            }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);