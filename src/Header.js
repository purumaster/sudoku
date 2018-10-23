import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


class Header extends Component {
    render() {
        return (
          <div className="Header">
           <ul>
             <li>
                <NavLink to= "/dashboard" exact activeStyle={
                   {color:'red'}
                }>Dashboard</NavLink>
              </li>
              <li>
                <NavLink to= "/play" exact activeStyle={
                   {color:'red'}
                }>Play</NavLink>
              </li>
              <li>
                <NavLink to= "/contact" exact activeStyle={
                   {color:'red'}
                }>Contact</NavLink>
              </li>
            </ul>
         </div>

        );
    }
}


export default Header;
