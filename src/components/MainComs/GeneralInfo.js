import React from 'react'
import {BsCheckLg} from 'react-icons/bs'
import {ImStatsBars} from 'react-icons/im'
import {BiMoney} from 'react-icons/bi'
import {AiFillQuestionCircle} from 'react-icons/ai'
import '../../app.css'
function GeneralInfo() {
    // The data in this section comes from databases so I have just done hard code in this part 
    const signups = 25;
    const profit = 1000;
    const commissions = 350;
    const pendingCommission = 300;

  return (
    <div className='genInfo'>
        <div className='each signs'>
            <h2>{signups}</h2>
            <p><span  className='signSvg'><BsCheckLg/></span> SIGNUPS</p> 
        </div>
        <div className='each profit'>
            <h2>${profit}</h2>
            <p><span className='proSvg'><ImStatsBars/></span> PROFIT</p> 
        </div>
        <div className='each comms'>
            <h2>${commissions}</h2>
            <p><span  className='commsSvg'><BiMoney/></span> COMMISSISONS</p> 
        </div>
        <div className='each pends'>
            <h2>${pendingCommission}</h2>
            <p><span  className='pendSvg'><AiFillQuestionCircle/></span> PENDING COMMISSISON</p> 
        </div>
        
    </div>
  )
}

export default GeneralInfo