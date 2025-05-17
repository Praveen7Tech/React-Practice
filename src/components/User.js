import { useEffect, useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0)
    console.log("fun child")
    useEffect(()=> {
        console.log("fun useEffect")
    })
    return (
        <div className="user-card">
            <h2>Count : {count}</h2>
            <button onClick={()=> {
                setCount(count + 1)
            }}>Increase</button>
            <button onClick={(()=> {
                setCount(count - 1)
            })}>Decrement</button>
            <button onClick={(() => {
                setCount(0)
            })}>Clear</button>
            <h2>Name : Praveen, {props.name}</h2>
            <h3>E-mail : praveen@gmail.com</h3>
            <h3>Location : Kochi</h3>
        </div>
    )
}


export default User;