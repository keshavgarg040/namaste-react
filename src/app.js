import React from "react";
import ReactDOM from "react-dom/client";


import Header from "./components/Header";
import Body from "./components/Body";


export const syle = {
  backgroundColor: "#f0f0f0",
};




const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
