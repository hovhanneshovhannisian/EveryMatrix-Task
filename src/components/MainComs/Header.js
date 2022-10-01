import React from 'react'
import ReactCountryFlag from "react-country-flag"
import ProfileInfo from './ProfileInfo'
import './header.css'
import UnderHeader from './UnderHeader'
function Header() {
    return (
        <>
            <div className='header'>
                <div className='flag'>
                    <p><ReactCountryFlag countryCode='gb' svg /> EN</p>
                </div>
                <ProfileInfo />
            </div>
            <div><UnderHeader /></div>
        </>
    )
}

export default Header