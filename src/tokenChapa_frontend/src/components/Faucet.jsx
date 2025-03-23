"use client"
import React, {useState} from "react";
import Confetti from 'react-confetti';
import { tokenChapa_backend, canisterId, createActor } from '../../../declarations/tokenChapa_backend';
// import { AuthClient } from "@dfinity/auth-client";

export default function Faucet(props) {
    const [buttonText, setButtonText] = useState("Obtener")
    const [isDisabled, setDisabled] = useState(false)
    const [showConfetti, setShowConfetti] = useState(false);

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
        if (response == "Success"){
            console.log("CONFETTI")
            setShowConfetti(true); 
            setTimeout(() => setShowConfetti(false), 3000);
        }
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
            <label><i>Solicita 10.000 CHAPA tokens en tu cuenta de identidad <span style={{color:"white"}}>{props.userPrincipal}</span></i></label>
            {/* <label><i>Solicita 10.000 CHAPA tokens en tu cuenta de identidad</i></label> */}
            <p className="trade-buttons">
                <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>{buttonText}</button>
            </p>
            {showConfetti && (
                <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={300}
                gravity={0.3}
                decay={0.95}
                />
            )}
        </div>
    )
}