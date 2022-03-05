import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer(){
    return (
        <div>
            <footer>
                <p>
                    copyright @{year}
                </p>
            </footer>
        </div>
    );
}

export default Footer;