import React, { useState } from 'react'
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io"
import './header.css'

function ProfileInfo() {
    const [isClicked, setIsClicked] = useState(false)


    // User data comes through API 
    // example data
    const userData = {
        firstName: "Max",
        lastName: "Smith",
        image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000",
        lastLoggedTime: "19/08/2022",
        email: "maxsmith@gmail.com"
    }

    return (
        <>
            <div className='userInfo'>
                <img src={userData.image} title={`${userData.firstName}'s profile picture`} alt={`${userData.firstName}'s profile picture`} />
                <div className='helloUser'>
                    <h2>Hello, {userData.firstName}!</h2>
                    <p>Last login: {userData.lastLoggedTime}</p>
                </div>
                <button className='showMore' onClick={() => setIsClicked((prev) => !prev)}>
                    {!isClicked ? <IoIosArrowDropdown /> : <IoIosArrowDropup />}
                </button>
            </div>
            {
                isClicked && (
                    <div className='openedInfo'>
                        <h2>{userData.firstName} {userData.lastName}</h2>
                        <p>Email: {userData.email}</p>
                        <button>Log Out</button>
                    </div>
                )
            }
        </>
    )
}

export default ProfileInfo 