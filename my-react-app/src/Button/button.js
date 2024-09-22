import React, { useEffect, useState } from "react";

export default function Button() {
    const [buttonText, setButtonText] = useState("Click me, please");
    useEffect(() => {
        console.log(`Button Value is ${buttonText}`)
    }, [buttonText])
    return (
      <button onClick={() => setButtonText("Thanks, been clicked!")}>
        {buttonText}
      </button>
    );
  }