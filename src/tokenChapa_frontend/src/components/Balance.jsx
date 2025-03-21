"use client"
import React, {useState} from "react";
import { Principal } from "@dfinity/principal";
import { tokenChapa_backend } from '../../../declarations/tokenChapa_backend';

export default function Balance() {
    const [inputValue, setInput] = useState("");
    const [balanceResult, setBalance] = useState("");
    const [balanceCompute, setBalanceCompute] = useState("");
    const [symbolToken, setSymbol] = useState("");
    const [isHidden, setHidden] = useState(true);

    const handleClick = async () => {
        // console.log(inputValue)
        const principal = Principal.fromText(inputValue);
        const balance = await tokenChapa_backend.balanceOf(principal);
        const symbol = await tokenChapa_backend.getSymbol();
        setSymbol(symbol)
        setBalance(balance.toLocaleString());
        setBalanceCompute(Number(balance));
        setHidden(false);
    }

    return (
        <div>
            <h2>
                <span role="img" aria-label="balance emoji">
                💰
                </span>
                Balance
            </h2>
            <label>Ingresa la cuenta para consultar el balance de tokens:</label>
            <p>
                <input 
                    id="balance-principal-id"
                    type="text"
                    placeholder="Escribe un Principal ID"
                    value={inputValue}
                    onChange={(e)=> setInput(e.target.value)}
                />
            </p>
            <p className="trade-buttons">
                <button
                    id="btn-request-balance"
                    onClick={handleClick}
                >
                Consultar Balance
                </button>
            </p>
            <p className="balance-display" hidden={isHidden}>
                Esta cuenta tiene un balance de <strong>{balanceResult}</strong> {symbolToken}{balanceCompute>1?"S":""}
            </p>
        </div>
    );
};