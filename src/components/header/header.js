import React from 'react'
import './header.css'

const Header = () => {
    return (
             <nav className="navbar navbar-expand-md navbar-dark">
                <a className="navbar-brand brandHead" href="/">Star DB</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                  <ul className="navbar-nav mr-auto tableHeader">
                    <li className="nav-item active">
                      <a className="nav-link" href="/">People
                        <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">Planets</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">Starships</a>
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