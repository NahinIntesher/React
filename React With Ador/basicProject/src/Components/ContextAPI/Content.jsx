import React from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "./ThemeContext";
import { useContext } from "react";

// For functional component:
export default function Content() {
  const context = useContext(ThemeContext);
  const { theme, switchTheme } = context;
  return (
    <div>
      <h1>This is a content</h1>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
            theme={theme}
            switchTheme={switchTheme}
          />
        )}
      </Counter>
    </div>
  );
}

// For Class Component:
// export default class Content extends React.Component {
//   // state contextType = ThemeContext;
//   render() {
//     const { theme, switchTheme } = this.context;
//     return (
//       <div>
//         <h1>This is a content</h1>
//         <Counter>
//           {(counter, incrementCount) => (
//             <HoverCounter
//               count={counter}
//               incrementCount={incrementCount}
//               theme={theme}
//               switchTheme={switchTheme}
//             />
//           )}
//         </Counter>
//       </div>
//     );
//   }
// }
// Content.contextType = ThemeContext;
