import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">UseContext</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           <NavLink className={ 
                                (args)=>{
                                    return `nav-link ${ args.isActive ? 'active':''}`
                                }
                            }
                            to={"/"} >
                            Home
                           </NavLink>
                           <NavLink className={ 
                                (args)=>{
                                    return `nav-link ${ args.isActive ? 'active':''}`
                                }
                            }
                            to={"/login"} >
                            Login
                           </NavLink>
                           <NavLink className={ 
                                (args)=>{
                                    return `nav-link ${ args.isActive ? 'active':''}`
                                }
                            }
                            to={"/about"} >
                            About
                           </NavLink>
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>

                </div>
            </nav>
        </>
    )
}
