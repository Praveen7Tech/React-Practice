
// const heading = React.createElement("h1", {}, "Hello World from React...")

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)

////////////////////

const parent = React.createElement("div", { id: "parent" },[
    React.createElement("div",{ id: "child" },[
            React.createElement("h1",{},"Im H1 tag..."),
            React.createElement("h2",{},"Im H2 tag...")
        ]),
    React.createElement( "div",{ id: "child" },[
            React.createElement("h1",{},"Im H1 tag..."),
            React.createElement("h2",{},"Im H2 tag...")
        ]),
    ]);
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)