import React, { useState } from 'react'
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io"
import Table from './Table'
import './tables.css'

function TablesCombiner() {
    const [top, setTop] = useState(false)
    const [middle, setMiddle] = useState(false)
    const [bottom, setBottom] = useState(false)
    return (
        <div className='tables'>
            <div className='eachTBL'>
                <div className='subDiv'>
                    <h2>Top Affiliates</h2>
                    <button className='displayed-btn' onClick={() => setTop((prev) => !prev)}>
                        {top ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
                    </button>
                </div>
                <div className='displayedTable' >
                    <Table />
                </div>
                {
                    top && (
                        <div >
                            <Table />
                        </div>
                    )
                }
            </div>
            <div className='eachTBL'>
                <div className='subDiv'>
                    <h2>Signups</h2>
                    <button className='displayed-btn' onClick={() => setMiddle((prev) => !prev)}>
                        {middle ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
                    </button>
                </div>
                <div className='displayedTable' >
                    <Table />
                </div>
                {
                    middle && (
                        <div >
                            <Table />
                        </div>
                    )
                }
            </div>
            <div className='eachTBL'>
                <div className='subDiv'>
                    <h2>Pending Commissions</h2>
                    <button className='displayed-btn' onClick={() => setBottom((prev) => !prev)}>
                        {bottom ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
                    </button>
                </div>
                <div className='displayedTable' >
                    <Table />
                </div>
                {
                    bottom && (
                        <div >
                            <Table />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default TablesCombiner