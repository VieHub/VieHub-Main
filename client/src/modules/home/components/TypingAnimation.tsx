import { useEffect, useState } from "react";

const TypingAnimation: React.FC<{ text: string }> = ({ text }) => {
  const [typedText, setTypedText] = useState<string>("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust speed here

    return () => clearInterval(interval);
  }, [text]);

  return <h1 className="tit">{typedText}</h1>;
};
export default TypingAnimation;
