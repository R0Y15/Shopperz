# Shopperz

All new shopping experience, A fresh take on online shopping and experience the difference.
Link: 

[![mediamodifier-image.jpg](https://i.postimg.cc/c4hK90dB/mediamodifier-image.jpg)](https://postimg.cc/QHBxVL9F)

## Built Using
- Next.js
- Sanity.io
- Stripe

## Installation

1. Clone the repository.
```
bash
git clone
```
2. Install the dependencies using
```
bash
npm install
```
3. Create a `.env.local` file in the root directory of the project and add the following environment variables. also please note that the emailJs environment variables are optional and only required if you want to use the contact form.
```
bash
NEXT_PUBLIC_SANITY_PROJECT_ID= '<Your_Sanity_project_ID>'
NEXT_PUBLIC_SANITY_DATASET="<Your_Sanity_Production>"
NEXT_PUBLIC_SANITY_TOKEN='<Your_Sanity_Token>'

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = '<Your_Stripe_Publishable_Key>'
NEXT_PUBLIC_STRIPE_SECRET_KEY = '<Your_Stripe_Secret_Key>'

NEXT_PUBLIC_EMAILJS_SERVICE_ID = '<Your_EmailJS_Service_ID>'
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = '<Your_EmailJS_Template_ID>'
NEXT_PUBLIC_EMAILJS_USER_ID = '<Your_EmailJS_Public_key>'
```

## Usage

1. Run the application using
```
bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:3000`.


## License

This project is licensed under the [MIT License](LICENSE).
