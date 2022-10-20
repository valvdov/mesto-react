import React from "react";
import headerLogo from "../images/logo_white.svg";

function Header() {
    return (
        <header className="header">
            <img
                src={headerLogo}
                className="logo"
                alt="ЛОГО МЕСТО"
            />
        </header>
    );
}

export default Header;