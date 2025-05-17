import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        // creating state variable in class Component
        this.state = {
            count: 0,
            count2: 1
        }
    }
    render() {
        const {count, count2} = this.state
        const {name} = this.props
        return (
            <div className="user-card">
                <h2>Count : {count}</h2>
                <h2>Count2 : {count2}</h2>
                <h2>Name : Praveen, {name}</h2>
                <h3>E-mail : praveen@gmail.com</h3>
                <h3>Location : Kochi</h3>
            </div>
        )
    }
}


export default UserClass;