export default {
    name: 'banner',
    Title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'buttontext',
            title: 'Buttontext',
            type: 'string'
        },
        {
            name: 'product',
            title: 'Product',
            type: 'string'
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string'
        },
        {
            name: 'smallText',
            title: 'SmallText',
            type: 'string'
        },
        {
            name: 'midText',
            title: 'Midtext',
            type: 'string'
        },
        {
            name: 'largeText1',
            title: 'LargeText2',
            type: 'string'
        },
        {
            name: 'largeText2',
            title: 'LargeText2',
            type: 'string'
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'string'
        },
        {
            name: 'saleTime',
            title: 'SaleTime',
            type: 'string'
        }
    ]
}