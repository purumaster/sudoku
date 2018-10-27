import React, { Component } from 'react';
// import {NavLink} from 'react-router-dom'


class Header extends Component {
    render() {
        return (

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <a className="navbar-brand" href="/">Sudoku</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link active" href="/dashboard">Dashbaord <span className="sr-only">(current)</span></a>
                  <a className="nav-item nav-link" href="/play">Play</a>
                  <a className="nav-item nav-link" href="/contact">Contact</a>
                </div>
            </div>
          </nav>
         //  <div>
         //   <ul>
         //     <li>
         //        <NavLink to= "/dashboard" exact activeStyle={
         //           {color:'red'}
         //        }>Dashboard</NavLink>
         //      </li>
         //      <li>
         //        <NavLink to= "/play" exact activeStyle={
         //           {color:'red'}
         //        }>Play</NavLink>
         //      </li>
         //      <li>
         //        <NavLink to= "/contact" exact activeStyle={
         //           {color:'red'}
         //        }>Contact</NavLink>
         //      </li>
         //    </ul>
         // </div>

        );
    }
}


export default Header;
