import React, { Component } from "react";
import { connect } from 'react-redux';

class Dashboard extends Component {

    render() {
        return <div className="dashboard">
            <h1>Dashboard</h1>
            <table id="users">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone No</th>
                </tr>
                {this.props.userDetails && this.props.userDetails.map(user =>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.gender}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNo}</td>
                    </tr>
                )}
            </table>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        userDetails: state.user.userDetails
    }
}

export default connect(mapStateToProps, () => ({}))(Dashboard);
