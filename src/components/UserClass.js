import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        // creating state variable in class Component
        this.state = {
            userInfo : {
                name : "dummmy name",
                location : "location",
                avatar_url:""
            }
        }
    }

    // api call
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Pr4veeen")
        const json = await data.json()

        // updted local state variable
        this.setState({
            userInfo: json
        })
        console.log(json)
    }

    render() {
        const {login, avatar_url, html_url} = this.state.userInfo
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name : {login} </h2>
                <h3>E-mail : {html_url}</h3>
            </div>
        )
    }
}


export default UserClass;