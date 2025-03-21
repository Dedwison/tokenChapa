"use client"
import React, {useState} from "react";

export default function Balance() {
    const [balance, setBalance] = useState(null)

    const handleClick = async () => {
        console.log("boton cliqueado")
        // Simulate balance check (replace with actual implementation)
        setBalance("10,000")
    }

    return (
        <div>
            <h2>
                <span role="img" aria-label="balance emoji">
                💰
                </span>
                Balance
            </h2>
            <label>ingresa la cuenta para revisar el balance de tokens:</label>
            <p>
                <input 
                    id="balance-principal-id"
                    type="text"
                    placeholder="Escribe un Principal ID"
                />
            </p>
            <p className="trade-buttons">
                <button
                    id="btn-request-balance"
                    onClick={handleClick}
                >
                Revisar Balance
                </button>
            </p>
            {balance && (
                <p className="balance-display">
                    Esta cuenta tiene un balance de <strong>{balance}</strong> CHAPA
                </p>
            )}
        </div>
    );
};