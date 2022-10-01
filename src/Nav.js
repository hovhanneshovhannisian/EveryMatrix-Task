import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillDashboard, AiFillSetting, AiFillHeart, AiFillEye } from 'react-icons/ai'
import { RiKey2Fill, RiArrowLeftRightFill, RiAccountCircleFill, RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import { ImStatsDots } from 'react-icons/im'
import { BiTime } from 'react-icons/bi'
import './nav.css'

function Nav() {

    const [isOpened, setIsOpened] = useState(false)
    return (
        <div className='asideNav'>
            <div>
                <div className='logo'>
                    <img src='https://bookmaker-ratings.ru/wp-content/uploads/2018/02/2018-02-22-12.46.50.png' />
                </div>
                <ul className='navList'>
                    {/* To these all "to" attributes of Link elements should be written the path of the individual route
                    In this case all the links are forward to the same route  (/)*/}
                    <li>
                        <div className='navOpener'>
                            <Link to="/" className='link'> <AiFillDashboard /></Link>
                            <button style={{ display: isOpened ? "none" : "block" }} onClick={() => setIsOpened(true)}><RiArrowRightSLine /></button>
                        </div>
                    </li>
                    <Link to="/" className='link'><li><RiKey2Fill /></li></Link>
                    <Link to="/" className='link'><li><RiAccountCircleFill /></li></Link>
                    <Link to="/" className='link'><li><HiOutlineSpeakerphone /></li></Link>
                    <Link to="/" className='link'><li><ImStatsDots /></li></Link>
                    <Link to="/" className='link'><li><RiArrowLeftRightFill /></li></Link>
                    <Link to="/" className='link'><li><AiFillSetting /></li></Link>
                </ul>
                <ul className='underNav'>
                    <Link to="/" className='link'><li><AiFillHeart /></li></Link>
                    <Link to="/" className='link'><li><BiTime /></li></Link>
                    {!isOpened && <Link to="/" className='link'><li><AiFillEye /></li></Link>}
                </ul>
            </div>
            {
                isOpened && (
                    <div className='openedNav'>
                        <h2>BIGWIN365 AFFILIATES</h2>
                        <button onClick={() => setIsOpened(false)} > <RiArrowLeftSLine /></button>
                        <ul>
                            <Link to="/" className='link'><li>Dashboard</li></Link>
                            <Link to="/" className='link'><li>Account Managment</li></Link>
                            <Link to="/" className='link'><li>My Account</li></Link>
                            <Link to="/" className='link'><li>Marketing Tools</li></Link>
                            <Link to="/" className='link'><li>Reports</li></Link>
                            <Link to="/" className='link'><li>Payments</li></Link>
                            <Link to="/" className='link'><li>Settings</li></Link>
                            <Link to="/" className='link'><li>Favorites</li></Link>
                            <Link to="/" className='link'><li>Recently Used</li></Link>
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default Nav