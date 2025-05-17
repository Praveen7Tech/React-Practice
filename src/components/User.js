import { useState } from "react";

const User = (props) => {
    const [count] = useState(0)
    const [count2] = useState(1)
    return (
        <div className="user-card">
            <h2>Count : {count}</h2>
            <h2>Count2 : {count2}</h2>
            <h2>Name : Praveen, {props.name}</h2>
            <h3>E-mail : praveen@gmail.com</h3>
            <h3>Location : Kochi</h3>
        </div>
    )
}


export default User;