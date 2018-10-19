import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
          <div>
            <ul>
            <li>Dashboard</li>
            <li>display</li>
            <li>Contact</li>
            </ul>
            {this.props.children}
         </div>

        );
    }
}


export default Header;
