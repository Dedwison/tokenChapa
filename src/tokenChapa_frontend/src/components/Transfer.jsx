"use client"
import React, {useState} from "react";

export default function Tranfer() {
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleClick = () => {
        setIsLoading(true)
        // Simulate API call
        setTimeout(() => {
          setIsLoading(false)
          setSuccess(true)
          // Reset success message after 3 seconds
          setTimeout(() => setSuccess(false), 3000)
        }, 1000)
    };

    return(
            <div className="transfer">
                <h2>
                    <span role="img" aria-label="transfer emoji">
                    📤
                    </span>
                    Transferir
                </h2>
                <fieldset>
                    <legend>Trasferir a la cuenta:</legend>
                    <ul>
                        <li>
                            <input 
                                type="text"
                                id="transfer-to-id"
                                />
                        </li>
                    </ul>
                </fieldset>
                <fieldset>
                    <legend>Cantidad:</legend>
                    <ul>
                        <li>
                            <input 
                                type="text"
                                id="amount"
                                />
                        </li>
                    </ul>
                </fieldset>
                <p className="trade-buttons">
                    <button id="btn-transfer" onClick={handleClick} disabled={isLoading}>
                        {isLoading ? "Procesando..." : "Transferir"}
                    </button>
                </p>
                {success && <p className="balance-display">¡Transferencia completada con éxito!</p>}
            </div>
    )
};