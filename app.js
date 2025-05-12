
import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement("div", { id: "parent" },[
    React.createElement("div",{ id: "child" },[
            React.createElement("h1",{},"Namasthe react"),
            React.createElement("h2",{},"i am  praveen")
        ]),
    React.createElement( "div",{ id: "child" },[
            React.createElement("h1",{},"Im H1 tag..."),
            React.createElement("h2",{},"Im H2 tag...")
        ]),
    ]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)