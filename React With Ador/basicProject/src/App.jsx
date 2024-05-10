import React from "react";
// import Logged from '.Components/Logged.jsx';
// import Unlogged from './Components/Unlogged.jsx';
import Box from "./Components/box.jsx";

const items = [
  { code: 1101, name: "English I", color: "red" },
  { code: 1102, name: "OPP", color: "blue" },
  { code: 1103, name: "SPL", color: "purple" },
  { code: 2203, name: "DLD", color: "green" },
];
export default function App(obj) {
  return (
    <div>
      {items.map(function (el) {
        return (
          <Box
            key={el.code}
            color={el.color}
            name={el.name}
            code={el.code}
          ></Box>
        );
      })}
    </div>
  );
  // if(obj.isLogged == true) {
  //     return <Logged/>
  // }
  // else {
  //     return <Unlogged/>
  // }
  // return(
  //   <>
  //     {
  //       obj.isLogged && <Logged/>
  //     }
  //   </>
  // );
}
