import React from "react";
import mastercard from "@/assets/images/pay3.png";
import paypal from "@/assets/icons/paypal-svgrepo-com.svg";
import visa from "@/assets/icons/visa-svgrepo-com.svg";

const Payment: React.FC<{
  onPrevStep: () => void;
  onPaymentComplete: () => void;
}> = ({ onPrevStep, onPaymentComplete }) => {
  const handlePayment = () => {
    // Call the onPaymentComplete function directly when the user clicks "Submit"
    onPaymentComplete();
  };

  return (
    <div className="h-full w-full">
      {/* <Header /> */}
      <div className="">
        <div>
          {/* Adding icons with space */}
          <div className="container-pay">
            <div className="title">Private competition form</div>{" "}
            <h5 className="h">Select payment method</h5>
            <div className="icons">
              <img className="icon" src={mastercard} alt="Mastercard" />
              <img className="icon" src={paypal} alt="Paypal" />
              <img className="icon" src={visa} alt="Visa" />
            </div>
            <div className="input-pay-box">
              <input type="text" placeholder="CARDHOLDER NAME" />
            </div>
            <div className="input-pay-box">
              <input type="password" placeholder="CARD NUMBER" />
            </div>
            <div className="input-pay-row">
              <div className="input-pay-box">
                <input type="text" placeholder="VALID THROUGH" />
              </div>
              <div className="input-pay-box">
                <input type="text" placeholder="CVV" />
              </div>
            </div>
            <div className="button-pay-row">
              <button
                className="button-pay"
                onClick={onPrevStep}
                style={{ backgroundColor: "#C4C4C4" }}
              >
                Back
              </button>
              <button
                className="button-pay"
                style={{ backgroundColor: "#52AB98" }}
                onClick={handlePayment}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Payment;
