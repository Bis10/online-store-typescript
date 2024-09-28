import React, { useState } from "react";
import { reverseStringToUpperCase } from "../utils/utils";


//  React.FC is a shorthand for defining the type of a functional component.
// It ensures that the component:
// Returns JSX (the UI that will be rendered).
// Can accept children as props automatically (though this can be overridden).
const StringReverse: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  // Handle the button click to reverse and uppercase the string
  const handleReverse = () => {
    const reversed = reverseStringToUpperCase(userInput);
    setResult(reversed);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Reverse String and Convert to Uppercase</h2>

      {/* Input field to get user input */}
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter a string"
        style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
      />

      {/* Button to trigger string conversion */}
      <button onClick={handleReverse} style={{ padding: "10px 20px" }}>
        Convert
      </button>

      {/* Display the result */}
      {result && (
        <div
          style={{ marginTop: "20px", fontWeight: "bold", fontSize: "20px" }}
        >
          Result: {result}
        </div>
      )}
    </div>
  );
};

export default StringReverse;
