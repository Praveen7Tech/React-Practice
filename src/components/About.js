
import User from "./User";
import UserClass from "./UserClass"
import { Component } from "react";

// const About = () => {
//     return (
//         <div className="about">
//             <h1>About Page</h1>
//             <h3>Namasthe React...</h3>
//             < User name={"Name props from (function)"}/>
//         </div>
//     );
// };

class About extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        console.log("parent comp did mount")
    }

    render() {
        return (
            <div className="about">
                <h1>About Page</h1>
                <h3>Namasthe React...</h3>
                < UserClass name={"Name props from (class)"}/>
            </div>
        );
    }
}


export default About;