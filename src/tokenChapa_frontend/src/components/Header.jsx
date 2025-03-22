import React from "react";
import bottlecap from "../bottlecap.png"
import chapa from "../chapa.png"

export default function Header() {
    return(
        <header>
            <div className="blue window" id="logo">
                <h1>
                    <span role="img" aria-label="tap emoji">
                        <img src={bottlecap} alt="chapa" />
                        {/* <img src={chapa} alt="chapa" /> */}
                    </span>
                    <span><strong>CHAPA</strong></span> <span><i>Oferta Inicial</i></span>
                </h1>
            </div>
        </header>
    )
}