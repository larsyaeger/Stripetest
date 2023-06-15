import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51MTwy8JF36VQpvu3utb7yOYmnOVOkOmmdp3n7o7eQqXPlE6H9ZEorFQNxRlRV9tLqFwveNM7eje0bnUWEFjuJNMc00rORpnvKU";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
