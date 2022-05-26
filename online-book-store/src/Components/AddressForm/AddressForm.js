import React from "react";
import "./AddressForm.css";

export const AddressForm = () => {
  return (
    <>
      <div className="form-group">
        <div>
          <input type="street" id="inputStreet" placeholder="Street" />
          <input type="city" id="inputCity" placeholder="City" />
          <input type="state" id="inputState" placeholder="State" />
          <input type="zip" id="inputZip" placeholder="Zip" />
          <input type="country" id="inputCountry" placeholder="Country" />
          <input type="ContactNumber" id="inputContactNumber" placeholder="Contact Number" />
        </div>
        <button>Edit Address</button>
        <button>Save Address</button>
      </div>
    </>
  );
};
