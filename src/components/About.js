import User from "./User";
import UserClass from "./UserClass"

const About = () => {
    return (
        <div className="about">
            <h1>About Page</h1>
            <h3>Namasthe React...</h3>
            < User name={"Name props from (function)"}/>
            < UserClass name={"Name props from (class)"}/>
        </div>
    );
};


export default About;