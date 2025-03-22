"use client"
import React, {useState} from "react";
import { tokenChapa_backend, canisterId, createActor } from '../../../declarations/tokenChapa_backend';
// import { AuthClient } from "@dfinity/auth-client";

export default function Faucet(props) {
    const [buttonText, setButtonText] = useState("Obtener")
    const [isDisabled, setDisabled] = useState(false)

    const handleClick = async (e) => {
        setDisabled(true)

        // const authClient = await AuthClient.create();
        // const identity = await authClient.getIdentity();

        // const authenticatedCanister = createActor(canisterId, {
        //     agentOptions: {
        //         identity,

        //     },
        // });

        // const response =await authenticatedCanister.payOut()
        const response =await tokenChapa_backend.payOut()
        const result = response == "Success" ? "Depositados" : "Ya has recibido tus tokens"
        setButtonText(result)
        setDisabled(false)
    }
    return (
        <div>
            <h2>
                <span>
                    🚰
                </span>
                Faucet
            </h2>
            <p>Obtén GRATIS tus primeras CHAPA tokens!</p>
            {/* <label><i>Solicita 10.000 CHAPA tokens en tu cuenta de identidad {props.userPrincipal}</i></label> */}
            <label><i>Solicita 10.000 CHAPA tokens en tu cuenta de identidad</i></label>
            <p className="trade-buttons">
                <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>{buttonText}</button>
            </p>
        </div>
    )
}