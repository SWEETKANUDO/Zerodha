import React from "react";
import '../app.css'

const Apps = () => {
    const openKite = () => {
        window.open(
            "https://zerodha-tau-ten.vercel.app/",
            "_blank"
        );
    };

    return (
        <div className="apps-page">

            <div className="apps-header">
                <h2>Apps</h2>
                <p>
                    Access your trading applications
                </p>
            </div>

            <div className="apps-grid">

                <div
                    className="kite-card"
                    onClick={openKite}
                >
                    <div className="kite-logo">
                        <span>K</span>
                    </div>

                    <div className="kite-info">
                        <h3>Zerodha</h3>

                        <p>
                            Zerodha Trading Platform
                        </p>

                        <span className="kite-type">
                            Trading
                        </span>
                    </div>

                    <div className="open-app">
                        Open App
                        <span>→</span>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Apps;

