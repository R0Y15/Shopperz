# Shopperz

All new shopping experience, A fresh take on online shopping and experience the difference.

### Link to Site: https://shopperz-r0y15.vercel.app/

<p align='center'>
    <img src="https://i.postimg.cc/c4hK90dB/mediamodifier-image.jpg" />
</p>

## Built Using
- Next.js
- Sanity.io
- Stripe

## Full Page
<p align='center'>
    <img src="https://i.postimg.cc/h4nznpPj/screencapture-localhost-3000-2023-12-17-20-06-47.png" />
</p>

## Installation

1. Clone the repository.
```
git clone
```
2. Install the dependencies using
```
npm install
```
3. Create a `.env` file in the root directory of the project and add the following environment variables. also please note that the emailJs environment variables are optional and only required if you want to use the contact form.
```
NEXT_PUBLIC_SANITY_PROJECT_ID= '<Your_Sanity_project_ID>'
NEXT_PUBLIC_SANITY_DATASET="<Your_Sanity_Production>"
NEXT_PUBLIC_SANITY_TOKEN='<Your_Sanity_Token>'

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = '<Your_Stripe_Publishable_Key>'
NEXT_PUBLIC_STRIPE_SECRET_KEY = '<Your_Stripe_Secret_Key>'

NEXT_PUBLIC_EMAILJS_SERVICE_ID = '<Your_EmailJS_Service_ID>'
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = '<Your_EmailJS_Template_ID>'
NEXT_PUBLIC_EMAILJS_USER_ID = '<Your_EmailJS_Public_key>'
```
4. Run the application using
```
npm run dev
```
5. Open your browser and navigate to `http://localhost:3000`


## License

This project is licensed under the [MIT License](LICENSE).
