import React from "react";
import "./signup.css";

function Signup() {
    return (
        <div className="signup-page">
            <div className="signup-container">
                <h1>Open a Zerodha account</h1>
                <p className="subtitle">
                    Modern platform for all your investment needs
                </p>

                <div className="signup-card">
                    <div className="signup-logo">
                        <img src="/media/images/logo.svg" alt="Zerodha" />
                    </div>

                    <h2>Sign up</h2>
                    <p className="account-text">
                        Enter your mobile number to get started
                    </p>

                    <div className="input-group">
                        <div className="country-code">+91</div>
                        <input
                            type="tel"
                            placeholder="Mobile number"
                            maxLength="10"
                        />
                    </div>

                    <button className="signup-btn">Continue</button>

                    <p className="terms">
                        By continuing, you agree to Zerodha's
                        <a href="#"> Terms & Conditions</a> and
                        <a href="#"> Privacy Policy</a>.
                    </p>

                    <div className="login-text">
                        Already have an account?
                        <a href="#"> Login</a>
                    </div>
                </div>

                <div className="benefits">
                    <div>
                        <span>✓</span>
                        No account opening charges
                    </div>
                    <div>
                        <span>✓</span>
                        Simple and secure platform
                    </div>
                    <div>
                        <span>✓</span>
                        Start investing easily
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
