import Layout from "@/components/Layout";
import "@/styles/globals.css";

import { CartProvider } from "use-shopping-cart";

export default function App({ Component, pageProps }) {
  return (
    
    <CartProvider
    mode="payment"
    cartMode="client-only"
    stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
    successUrl={`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}/success`}
    cancelUrl={`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}/?success=false`}
    currency="GBP"
    allowedCountries={['US', 'GB', 'CA', 'FR']}
    // enables local storage
    shouldPersist={true}
  >
    
  
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}
