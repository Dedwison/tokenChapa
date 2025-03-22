"use client"
import React, {useState} from "react";
import { Principal } from "@dfinity/principal";
import { tokenChapa_backend, canisterId, createActor } from '../../../declarations/tokenChapa_backend';
// import { AuthClient } from "@dfinity/auth-client";

export default function Tranfer() {
    const [recipientId, setId] = useState("")
    const [amount, setAmount] = useState("")
    const [isDisabled, setDisabled] = useState(false)
    const [feedback, setFeedback] = useState("")
    const [isHidden, setHidden] = useState(true)

    const handleClick = async () => {
        setHidden(true)
        setDisabled(true);

        const recipient = Principal.fromText(recipientId);
        const amountToTransfer = Number(amount);

         // const authClient = await AuthClient.create();
        // const identity = await authClient.getIdentity();

        // const authenticatedCanister = createActor(canisterId, {
        //     agentOptions: {
        //         identity,

        //     },
        // });

        // const result = await authenticatedCanister.transfer(recipient, amountToTransfer);
        const result = await tokenChapa_backend.transfer(recipient, amountToTransfer);
        console.log(result)
        setFeedback(result);
        setHidden(false)
        setDisabled(false);
        
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
                                value={recipientId}
                                onChange={(e) => setId(e.target.value)}
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
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                />
                        </li>
                    </ul>
                </fieldset>
                <p className="trade-buttons">
                    <button id="btn-transfer" onClick={handleClick} disabled={isDisabled}>
                        Transferir
                    </button>
                </p>
            
                <p className="balance-display" hidden={isHidden}>{feedback == "Success" ? "¡Transferencia completada con éxito!" : "No tienes fondo suficiente"}</p>

            </div>
    )
};