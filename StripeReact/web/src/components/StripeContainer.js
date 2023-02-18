import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51McozPSI053csSB71BAlLdrkVzNfnYrZGijKaGVm1aN69pvoXPLAyrNz3tLC1fUwDfXv3AqoCDjHSiB1EPcWTSUM00JaHckuBX"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}