import React from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "./ThemeContext";
// export default function Content() {
//   return (
//     <div>
//       <h1>This is a content</h1>
//       <Counter>
//         {(count, incrementCount) => (
//           <ThemeContext.Consumer>
//             {({ theme, switchTheme }) => (
//               <HoverCounter
//                 count={count}
//                 incrementCount={incrementCount}
//                 theme={theme}
//                 switchTheme={switchTheme}
//               />
//             )}
//           </ThemeContext.Consumer>
//         )}
//       </Counter>
//     </div>
//   );
// }
export default class Content extends React.Component {
  static contextType = ThemeContext;
  render() {
    const { theme, switchTheme } = this.context;
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
}
// Content.contextType = ThemeContext;
