import React, { useState } from "react";
import "./passwordGenerator.css"; // 

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const lettersAndNumbers =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    let chars = includeSymbols ? lettersAndNumbers + symbols : lettersAndNumbers;

    let pass = "";
    for (let i = 0; i < Number(length); i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  };

  const copyPassword = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
    setPassword("");
  };

  return (
    <div className="pg-wrapper">
      <div className="pg-card">
        <h1 className="pg-title">🔐 Password Generator</h1>

        <div className="pg-row">
          <label className="pg-label" htmlFor="len">Length</label>
          <input
            id="len"
            type="number"
            min="6"
            max="30"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="pg-input"
          />
        </div>

        <label className="pg-checkbox">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          <span>Include Special Characters</span>
        </label>

        <div className="pg-actions">
          <button className="pg-btn pg-btn-primary" onClick={generatePassword}>
            Generate
          </button>
          <button className="pg-btn pg-btn-secondary" onClick={copyPassword}>
            Copy
          </button>
        </div>

        <div className="pg-output">
          {password || "Your password will appear here"}
        </div>
      </div>
    </div>
  );
}
