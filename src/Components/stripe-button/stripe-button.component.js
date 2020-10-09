import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({price})=>{
   const priceForStripe =  price * 100;
   const publishableKey =
     "pk_test_51HaH5mIBlFkwVZwmzYIX6bFRZdTuYyrNnRKYVOLmC2dFWMcnESQa0AyIm8eMcI6FVs2YTAkEhXgvixve7myXqk0m00qV8gjyAD";

     const onToken = token =>{
       console.log(token);
       alert("Payment Successful")
     }

     return (
       <StripeCheckout 
       label ="PAY NOW"
       name ="Clothing Ltd"
       billingAddress
       shippingAddress
       image ="https://svgshare.com/i/CUz.svg"
       description={`Your total is R${price}`}
       amount ={priceForStripe}
       panelLabel ="Pay Now"
       token={onToken}
       stripeKey ={publishableKey}
        />
     )
}

export default StripeCheckoutButton;