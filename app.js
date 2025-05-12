
import React from "react";
import ReactDOM from "react-dom/client"

// React.createElement => ReactElemet-JS Object => HTMLElement(render)
const heading = React.createElement("h1", {id : "heading"}, "Nmasthe React !")

console.log(heading)

//JSX => (Babel translies) React.createElement => ReactElemet-JS Object => HTMLElement(render)

const Elem = <span>react Element</span>

const title = (
    <h1 className="head" tabIndex="1">
        {Elem}
        Nmasthe react from JSX / React Element
    </h1>
)

// React functional Components    // Component composition
const HeadingComponent = () => (
    <div id="container">
    {title} 
        <h1 className="heading"> Namasthe React component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)
