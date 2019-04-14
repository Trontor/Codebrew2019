import React from "react";
import StripeCheckout from "react-stripe-checkout";
import favicon from "./favicon.ico";

export default class Checkout extends React.Component {
  onToken = (token, addresses) => {
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. How this is done is up to you. Using
    // XHR, fetch, or a GraphQL mutation is typical.
    console.log(token);
    console.log(addresses);
  };

  render() {
    return (
      <StripeCheckout
        amount={this.props.paymentamt}
        billingAddress="Kwong Lee Dow"
        description="Support your local artists"
        image={favicon}
        locale="auto"
        name="buskie.com.au"
        stripeKey={"pk_test_B99vYtSnYSRsjN3YnHowMagJ00YsELVzyu"}
        token={"sk_test_KGs7Ux8mQtXHxj5IsNWfNQ2f00Ru2u1BZu"}
      />
    );
  }
}
