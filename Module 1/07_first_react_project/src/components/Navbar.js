import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <div style={{ border: '1px solid grey' }}>
            <nav className={`navbar navbar-expand-lg navbar-${props.colorTheme} bg-${props.colorTheme}`} style={{ color: `${props.colorTheme === 'light' ? 'black' : 'white'}` }}>

                <div className="container-fluid">
                    <Link className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/about">{props.about}</Link>
                            </li>
                        </ul>

                        <div className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <div className="form-check form-check-inline" onClick={props.setWarmColor}>
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineRadio1">Warm Mode</label>
                            </div>
                            <div className="form-check form-check-inline" onClick={props.setCoolColor}>
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label className="form-check-label" htmlFor="inlineRadio2">Cool Mode</label>
                            </div>
                            <div className="form-check form-check-inline" onClick={props.setHotColor}>
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                <label className="form-check-label" htmlFor="inlineRadio3">Hot Mode</label>
                            </div>
                        </div>

                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

// // adding important checks
// Navbar.propTypes = {
//     title: PropTypes.string,
//     about: PropTypes.string.isRequired  // so if we don't pass a prop it will show error
// }

// // setting default values - if we don't pass props
// Navbar.defaultProps = {
//     about: "Default About"
// }

export default Navbar