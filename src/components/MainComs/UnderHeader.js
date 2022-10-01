import React, {useState} from 'react'
import { AiFillHeart } from 'react-icons/ai'
import './header.css'
function UnderHeader() {
    const [added, setAdded] = useState(false)
    return (
        <div className='underheader' >
            <div className={`addToFave ${added && "liked" }`} onClick={() => setAdded((prev) => !prev)}>
                <span><AiFillHeart /></span><p> ADD THIS PAGE TO FAVORITES</p>
            </div>
        </div>
    )
}

export default UnderHeader