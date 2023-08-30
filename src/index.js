import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CreateCards } from "./components/Card";

const root = document.getElementById("root");

// const paragraph = React.createElement("p", {
//   id: "test-P-Id",
//   children: ["I am P"],
// });

// const p = <p id="test-id">I am P</p>;

// const divEl = (
//   <div name="Andrew" id="test-id-idv" className="test-class">
//     {p}
//   </div>
// );

// const divEl = React.createElement("div", {
//   name: "Andrew",
//   id: "test-id",
//   className: "test-class",
//   children: p,
// });

// console.log(divEl);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <CreateCards />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode></React.StrictMode>);
