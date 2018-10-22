import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
          <div className="Header">
           <ul>
             <li>
                <NaveLink to= "/dashboard" exact activeStyle={
                   {color:'green'}
                }>Dashboard</NaveLink>
              </li>
              <li>
                <NaveLink to= "/play" exact activeStyle={
                   {color:'green'}
                }>Play</NaveLink>
              </li>
              <li>
                <NaveLink to= "/contact" exact activeStyle={
                   {color:'green'}
                }>Contact</NaveLink>
              </li>
            </ul>
         </div>

        );
    }
}


export default Header;
