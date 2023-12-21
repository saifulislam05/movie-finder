import React, { useState } from "react";

const ColorCard = (props) => {
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(props.hex);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div
      className="w-32 shadow-md cursor-pointer"
      onClick={handleCopyToClipboard}
      
    >
      <div
        className={`w-full h-36`}
        style={{ backgroundColor: props.hex }}
      ></div>
      <p>{copied ? "Copied!" : props.hex}</p>
      <p>{props.name}</p>
    </div>
  );
};

export default ColorCard;
