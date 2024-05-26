import React from "react";
export default function Text({ addEmoji, addBracket }) {
  let text = "I am JavaScript Programming Language Developer";
  if (addEmoji) text = addEmoji(text, "💜");
  if (addBracket) text = addBracket(text);
  return <div style={{ color: "white" }}>{text}</div>;
}

/* Without changing the  const to let-> 
export default function Text({ addEmoji, addBracket }) {
  const text = "I am JavaScript Programming Language Developer";
  const withEmoji = addEmoji ? addEmoji(text, "💜") : text;
  const withBracket = addBracket ? addBracket(withEmoji) : withEmoji;
  return <div>{withBracket}</div>;
}
*/
