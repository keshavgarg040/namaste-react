{/* <div id="parent">
<div id "child">
<h1>I'm h1 tag</h1>
</div>
</div> */}



const heading = React.createElement("h1",{id:"heaading",xyz:"abc"},"Hello World in React");
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(heading);


const div=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"I'm h1 tag"),
            React.createElement("h2",{},"I am h2 tag")])
        ,React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I'm h1 tag"),
            React.createElement("h2",{},"I am h2 tag")]
        )]);
root.render(div);

console.log(heading);
