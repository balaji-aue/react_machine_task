import React, { Component } from "react";
import { LOGIN_SUCCESS, LOGIN_FAILED } from "../constants/action_type";
import { connect } from "react-redux";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }
    render() {
        const { username, password } = this.state;
        return <form className="login-form" onSubmit={e => {
            e.preventDefault();
            this.props.login(username, password);
        }}>
            <div className="form-group">
                <label for="username">User name:</label>
                <input type="text" name="username" value={username} onChange={e=>this.setState({username: e.target.value})} autoFocus />
            </div>
            <div className="form-group">
                <label for="password">Password:</label>
                <input type="password" name="password" value={password} onChange={e=>this.setState({password: e.target.value})} />
            </div>
            <div className="form-group">
                <input className="submit-button" type="submit" value="Login user" />
            </div>
            <div className="form-group">
                {this.props.loginError ? <span className="error">{this.props.loginError}</span>:null}
            </div>
        </form>
    }
}

const loginUser = (dispatch, username, password) => {
    const loginDetails = {
        "username": "hruday@gmail.com",
        "password": 'hruday123'
    }
    if (loginDetails.username === username && loginDetails.password === password) {
        dispatch({ type: LOGIN_SUCCESS, payload: { username: loginDetails.username } });
    } else {
        dispatch({ type: LOGIN_FAILED, payload: { loginError: 'Given credentials are invalid' } });
    }
}

const mapStateToProps = state => {
    return {
        loginError: state.user.loginError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => loginUser(dispatch, username, password)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
