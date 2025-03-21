"use client"
import React, {useState} from "react";

export default function Faucet() {
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleClick = (e) => {
        setIsLoading(true)
        // Simulate API call
        setTimeout(() => {
        setIsLoading(false)
        setSuccess(true)
        // Reset success message after 3 seconds
        setTimeout(() => setSuccess(false), 3000)
        }, 1000)
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
                <button id="btn-payout" onClick={handleClick} disabled={isLoading}>{isLoading ? "Procesando..." : "Obtener"}</button>
            </p>
            {success && <p className="balance-display">¡Éxito! Has recibido 10.000 CHAPA tokens.</p>}
        </div>
    )
}