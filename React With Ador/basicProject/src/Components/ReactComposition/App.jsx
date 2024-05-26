import React from "react";
import Text from "./Text";
import Bracket from "./Bracket";
import Emoji from "./Emoji";
export default function App() {
  return (
    <Emoji>
      {({ addEmoji }) => (
        <Bracket>
          {({ addBracket }) => (
            <Text addEmoji={addEmoji} addBracket={addBracket} />
          )}
        </Bracket>
      )}
    </Emoji>
  );
}
