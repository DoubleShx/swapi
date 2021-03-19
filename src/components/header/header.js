import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
             <nav className="navbar navbar-expand-md navbar-dark">
                <NavLink className="navbar-brand brandHead" to="/">Star DB</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                  <ul className="navbar-nav mr-auto tableHeader">
                    <li className="nav-item active">
                      <NavLink className="nav-link" to="/people">People
                        <span className="sr-only">(current)</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/planets">Planets</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/starships">Starships</NavLink>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-md-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </div>
              </nav>
    )
}

export default Header;