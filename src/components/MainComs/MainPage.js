import React from 'react'
import Charts from '../DiagramCom/Charts';
import GeneralInfo from './GeneralInfo';
import Header from './Header';
import TablesCombiner from './TablesCombiner';

function MainPage() {
    return (
        <div>
            <Header />
            <GeneralInfo />
            <Charts />
            <TablesCombiner />
            {/* <div style={{height: '600px', width: '600px'}}></div> */}
        </div>
    )
}

export default MainPage