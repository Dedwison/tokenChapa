"use client"
import React, {useState} from "react";
import { tokenChapa_backend } from '../../../declarations/tokenChapa_backend';

export default function Faucet() {
    const [buttonText, setButtonText] = useState("Obtener")
    const [success, setSuccess] = useState(false)
    const [isDisabled, setDisabled] = useState(false)

    const handleClick = async (e) => {
        setDisabled(true)
        const result =await tokenChapa_backend.payOut()
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
            <label>Obtén GRATIS tus primeras CHAPA tokens aquí! Solicita 10.000 CHAPA tokens en tu cuenta de identidad</label>
            <p className="trade-buttons">
                <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>{buttonText}</button>
            </p>
            {success && <p className="balance-display">¡Éxito! Has recibido 10.000 CHAPA tokens.</p>}
        </div>
    )
}