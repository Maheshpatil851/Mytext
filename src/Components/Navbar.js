import React from 'react'
import { Link } from 'react-router-dom'




export default function Navbar(props) {
    


    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `} >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            </li>
                        </ul>
                        <div className='d-flex'>
                            <div className='bg-primary rounded mx-2' onClick={()=>props.togglemode2('primary')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                            <div className='bg-danger rounded mx-2' onClick={()=>props.togglemode2('danger')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                            <div className='bg-warning rounded mx-2' onClick={()=>props.togglemode2('warning')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                            <div className='bg-success rounded mx-2' onClick={()=>props.togglemode2('success')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                            <div className='bg-info rounded mx-2' onClick={()=>props.togglemode2('primary')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>

                        </div>
                        <div className={`form-check 'd-flex' form-switch text-${props.mode==='light'?'dark':'light'}` }>
                            <input className="form-check-input" onClick={props.togglemode2} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable bluish Mode </label>
                        </div>

                        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode </label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

// Navbar.propTypes = {
//     title: propTypes.string ,
//     aboutText: propTypes.string ,

// }
Navbar.defaultProps = {
    title: 'TITLE',
    aboutText: 'ABOUT',
}