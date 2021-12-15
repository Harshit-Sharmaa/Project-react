import React from "react";

const Rightmain = () => {
    return (
        <div className="rightMain-kyc">
            <h1 className="rmh1-kyc">BUSINESS DETAILS</h1>
            <div className="pan-kyc">
                <span className="panh1-kyc">PAN</span><span style={{ color: "red", marginLeft: "0px", backgroundColor: "#E5E5E5" }}>*</span>
                <input className="pani-kyc" type="text" placeholder="Busniness Owner’S PAN" />
            </div>
            <div className="panholder-kyc">
                <span className="panhh1-kyc">PAN Holder's Name</span><span style={{ color: "red", marginLeft: "0px", backgroundColor: "#E5E5E5" }}>*</span>
                <input className="panhi-kyc" type="text" placeholder="Name as per PAN" />
                <h2 className="panhh2-kyc">We verify the details with the central PAN database. Please ensure you enter the correct details</h2>
            </div>
            <div className="billing-kyc">
                <span className="billh1-kyc">Billing Label</span><span style={{ color: "red", marginLeft: "0px", backgroundColor: "#E5E5E5" }}>*</span>
                <input className="billi-kyc" type="text" />
            </div>
            <div className="address-kyc">
                <span className="addh1-kyc">Address</span><span style={{ color: "red", marginLeft: "0px", backgroundColor: "#E5E5E5" }}>*</span>
                <input className="addi-kyc" type="text" placeholder="Enter Street Address" />
            </div>
            <div className="pincode-kyc">
                <span className="pch1-kyc">Pin Code</span><span style={{ color: "red", marginLeft: "0px", backgroundColor: "#E5E5E5" }}>*</span>
                <input className="pci-kyc" type="text" />
            </div>
            <div className="city-kyc">
                <span className="ch1-kyc">City</span><span style={{ color: "red", marginLeft: "0px", backgroundColor: "#E5E5E5" }}>*</span>
                <input className="ci-kyc" type="text" />
            </div>
            <div className="state-kyc">
                <span className="stateh1-kyc">State</span><span style={{ color: "red", marginLeft: "0px", backgroundColor: "#E5E5E5" }}>*</span>
                <select className="statei-kyc" name="State" id="State" placeholder="state">
                    <option value="">State</option>
                </select>
            </div>
            <div className="button-kyc">
                <input type="checkbox" className="checkbox-kyc" />
                <span className="terms-kyc"> I agree to Razorpay <a href="" style={{ textDecoration: "none", backgroundColor: " #E5E5E5" }}>Terms and Conditions</a></span>
                <button className="submit-kyc">Submit and Verify</button>
            </div>
        </div>
    )
}

export default Rightmain;