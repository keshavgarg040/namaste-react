{
  /* <div id="parent">
<div id "child">
<h1>I'm h1 tag</h1>
</div>
</div> */
}
import React from "react";
import ReactDOM from "react-dom/client";
const Heading=()=>{return<h2>hello all keshav this side </h2>;};
const HeadingComponent=() => (<div id = "container"><Heading/>  
<h1 id ="heaading">
  
  NAmaste React12 Functionl Component
  </h1></div>);
const root = ReactDOM.createRoot(document.getElementById("root"));
//jsx => transpiled by babel => React.createElement => React Element (js object) =>Html element(render)
const jsxheading = <h1 className="heaading">Namaste react using jsx gyugyg</h1>;
console.log(jsxheading);
root.render(<HeadingComponent/>);
   