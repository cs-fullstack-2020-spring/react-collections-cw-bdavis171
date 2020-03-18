import React, { Component, Fragment } from 'react';
import '../App.css'

class Userinformation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    //console.log the key and change the background color when a line is clicked
    printKey = (event) => {
        console.log(this.props.user.id);
        console.log(event.target)
        event.target.classList.toggle('red-background')
    }

    render() { 
        return ( <Fragment>
            {/* display object properties */}
            <div onClick = {this.printKey}>
                <p>Id: {this.props.user.id}</p>
                <p>Name: {this.props.user.name}</p>
                <p>Username: {this.props.user.username}</p>
                <p>Email: {this.props.user.email}</p>
                <p>Street: {this.props.user.address.street}</p>
                <p>Suite: {this.props.user.address.suite}</p>
                <p>City: {this.props.user.address.city}</p>
                <p>Zipcode: {this.props.user.address.zipcode}</p>
                <p>Geo: Latitude: {this.props.user.address.geo.lat}, Longitude: {this.props.user.address.geo.lng}</p>
                <p>Phone: {this.props.user.phone}</p>
                <p>Website: {this.props.user.website}</p>
                <p>Company Name: {this.props.user.company.name}</p>
                <p>Company Catch Phrase: {this.props.user.company.catchPhrase}</p>
                <p>Company Bs: {this.props.user.company.bs}</p>
            </div>
            <hr/>
        </Fragment> );
    }
}
 
export default Userinformation;