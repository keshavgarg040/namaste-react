{
  /* <div id="parent">
<div id "child">
<h1>I'm h1 tag</h1>
</div>
</div> */
}
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heaading" }, "NaMAsteReact");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//jsx => transpiled by babel => React.createElement => React Element (js object) =>Html element(render)
const jsxheading = <h1 className="heaading">Namaste react using jsx gyugyg</h1>;
console.log(jsxheading);
root.render(jsxheading);
