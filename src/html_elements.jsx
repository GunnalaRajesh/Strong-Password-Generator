import React, { useState } from 'react';

function Html() {
    const [generatedPassword, setGeneratedPassword] = useState(""); // State to hold generated password

    // Function to handle generation of password
    const handleGeneratePassword = () => {
        const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const LowerCase = "abcdefghijlkmnopqrstuvwxyz";
        const Numerals = "1234567890";
        const Special = "!@#$%^&*()[]{}" 
        const UC = UpperCase[Math.floor(Math.random()*UpperCase.length)];
        const LC = LowerCase[Math.floor(Math.random()*LowerCase.length)];
        const N = Numerals[Math.floor(Math.random()*Numerals.length)];
        const S = Special[Math.floor(Math.random()*Special.length)];
        const words = "apple china dance eagle frank golfs happy india japan kings loves money nancy opera queen rainy sally teams uncle vacat winds xrays yummy zebra actor bread candy";
        const arrwords = words.split(" ");
        const word1 = arrwords[Math.floor(Math.random()*arrwords.length)];
        const Str = UpperCase+LowerCase+Numerals+Special;

        setGeneratedPassword(`${UC}${Str[Math.floor(Math.random()*Str.length)]}${LC}${Str[Math.floor(Math.random()*Str.length)]}${N}${Str[Math.floor(Math.random()*Str.length)]}${S}${Str[Math.floor(Math.random()*Str.length)]}${word1}`); // Set the generated password
    };

    // Function to handle copying the generated password to clipboard
    const handleCopyPassword = () => {
        const passwordInput = document.getElementById('password');
        passwordInput.select();
        document.execCommand('copy');
    };

    return (
        <>
            <div className="body">
                <div className="container">
                    <h1>Strong Password Generator</h1>
                    <div className="display">
                        <input type="text" id="password" placeholder="Password" value={generatedPassword} readOnly />
                        <button onClick={handleCopyPassword}>Copy</button>
                    </div>
                    <button className="generate" onClick={handleGeneratePassword}>Generate</button>
                </div>
            </div>
        </>
    )
}

export default Html;
