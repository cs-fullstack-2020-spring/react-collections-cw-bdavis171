import React, { Component } from 'react';
import { Fragment } from 'react';
import Userinformation from './UserInformation.jsx';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        //reference the rawData file
        const rawData = require('../rawData.js');
        return (<Fragment>
            <h1>User Collection App</h1>
            {/* map through the array */}
            {rawData.map(
                (user) => {
                    return (
                        // input user as a property to UserInformation. Use user.id as the key
                        <Userinformation key = {user.id} user = {user}/>
                    )
                }
            )}
        </Fragment>);
    }
}

export default AppContainer;