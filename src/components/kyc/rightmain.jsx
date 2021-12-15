import React from "react";

const Rightmain = () => {
    return (
        <div className="rightMain">
            <h1 className="rmh1">BUSINESS DETAILS</h1>
            <div className="pan">
                <span className="panh1">PAN</span><span style={{ color: "red", marginLeft: "0px", backgroundColor: "#E5E5E5" }}>*</span>
                <input className="pani" type="text" placeholder="Busniness Owner’S PAN" />
            </div>
            <div className="panholder">
                <span className="panhh1">PAN Holder's Name</span><span style={{ color: "red", marginLeft: "0px", backgroundColor: "#E5E5E5" }}>*</span>
                <input className="panhi" type="text" placeholder="Name as per PAN" />
                <h2 className="panhh2">We verify the details with the central PAN database. Please ensure you enter the correct details</h2>
            </div>
            <div className="billing">
                <span className="billh1">Billing Label</span><span style={{ color: "red", marginLeft: "0px", backgroundColor: "#E5E5E5" }}>*</span>
                <input className="billi" type="text" />
            </div>
            <div className="address">
                <span className="addh1">Address</span><span style={{ color: "red", marginLeft: "0px", backgroundColor: "#E5E5E5" }}>*</span>
                <input className="addi" type="text" placeholder="Enter Street Address" />
            </div>
            <div className="pincode">
                <span className="pch1">Pin Code</span><span style={{ color: "red", marginLeft: "0px", backgroundColor: "#E5E5E5" }}>*</span>
                <input className="pci" type="text" />
            </div>
            <div className="city">
                <span className="ch1">City</span><span style={{ color: "red", marginLeft: "0px", backgroundColor: "#E5E5E5" }}>*</span>
                <input className="ci" type="text" />
            </div>
            <div className="state">
                <span className="stateh1">State</span><span style={{ color: "red", marginLeft: "0px", backgroundColor: "#E5E5E5" }}>*</span>
                <select className="statei" name="State" id="State" placeholder="state">
                    <option value="">State</option>
                </select>
            </div>
            <div className="button">
                <input type="checkbox" className="checkbox" />
                <span className="terms"> I agree to Razorpay <a href="" style={{ textDecoration: "none", backgroundColor: " #E5E5E5" }}>Terms and Conditions</a></span>
                <button className="submit">Submit and Verify</button>
            </div>
        </div>
    )
}

export default Rightmain;