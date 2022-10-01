import React from 'react'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './tables.css'
function Table() {
    //These data come from backend
    const data = [
        {
            id: 1007,
            username: 'Simona',
            profit: 55,
            commission: 'Simona'
        },
        {
            id: 1008,
            username: 'Ariana',
            profit: 45,
            commission: 'Adelina'
        },
        {
            id: 1009,
            username: 'Adam',
            profit: 35,
            commission: 'Adam'
        },
        {
            id: 1010,
            username: 'John',
            profit: 25,
            commission: 'John'
        },
        {
            id: 1011,
            username: 'Garry',
            profit: 15,
            commission: 'Garry'
        }
    ]

    return (
        <div className='tableDiv'>
            <table>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Username</td>
                        <td>Profit($)</td>
                        <td>Commission($)</td>
                        {/* For 'View' td I am used 'id' property to route its own page, in this case it will route to '/' */}
                        <td>View</td>
                    </tr>
                    {
                        data.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.profit}</td>
                                    <td>{user.commission}</td>
                                    <td><Link to='/'><AiOutlineUnorderedList /></Link></td>  {/* To route to own page have to change the 'to' attribte to this '/something/${user.id}' */}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table