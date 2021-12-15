import React from "react"

const Leftmain = () => {
    return (

        <div className="leftMain">
            <div className="lcontent">
                <h1 className="lmh1">Create an Account</h1>
                <div className="details">
                    <input type="text" className="mobile" placeholder="Enter Mobile" />
                    <input type="email" className="email" placeholder="Enter Email" />
                    <div className="pass">
                        <input type="password" className="password" placeholder="Enter Password" />
                        <span className="eye"><i class="fas fa-eye"></i></span>
                    </div>
                    <div className="pass">
                        <input type="password" className="password" placeholder="Confirm Password" />
                        <span className="eye"><i class="fas fa-eye"></i></span>
                    </div>
                </div>
                <div>
                    <input type="checkbox" checked="checked" className="checkbox" />
                    <span className="checking">I hearby confirm that I am above 18 years old.</span>
                </div>
                <button className="OTP">Verify OTP</button>
                <h2 className="terms" >By creating this account, you agree to our <a href="" style={{ textDecoration: "none" }}>Privacy Policy</a> and <a href="" style={{ textDecoration: "none" }}>Terms of Use</a> </h2>
            </div>
        </div>
    )
}
export default Leftmain;