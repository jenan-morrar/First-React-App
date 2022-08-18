import React from "react";
import { NavLink } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { AiFillDashboard } from "react-icons/ai";
import { MdOutlineContactSupport, MdImportContacts, MdOutlineMiscellaneousServices } from "react-icons/md";
import { BiLogIn, BiLogOut} from "react-icons/bi";
import "./Navbar.css"

const Navbar = ({ loginState, Logout }) => {

    return (
        <div>
            <header>
                <img src={process.env.PUBLIC_URL + '/images/reactImage.png'} className="brand" alt="react-logo" />
                <nav className="menu">
                    <input type="checkbox" id="menuToggle" />
                    <label htmlFor="menuToggle" className="menu-icon"><CgMenu /></label>
                    <ul>
                        <NavLink className={({ isActive }) => (isActive ? ' selected' : 'nav-link')} to='/'><AiFillDashboard className='nav-icon' />Dashboard</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? ' selected' : 'nav-link')} to='/about'><MdOutlineContactSupport className='nav-icon' />About</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? ' selected' : 'nav-link')} to='/services'><MdOutlineMiscellaneousServices className='nav-icon' />Services</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? ' selected' : 'nav-link')} to='/contact'><MdImportContacts className='nav-icon' />Contact</NavLink>
                        {(loginState !== "logged") ? (<NavLink className={({ isActive }) => (isActive ? ' selected' : 'nav-link')} to='/login'><BiLogIn className='nav-icon' />Login</NavLink>
                        ) : (<NavLink className={({ isActive }) => (isActive ? ' selected' : 'nav-link')} onClick={Logout} to='/logout'><BiLogOut className='nav-icon' />LogOut</NavLink>
                        )}
                    </ul>
                </nav>
            </header>

        </div>
    )
}

export default Navbar;