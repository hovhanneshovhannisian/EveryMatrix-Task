import React from 'react'
import Charts from '../DiagramCom/Charts';
import GeneralInfo from './GeneralInfo';
import Header from './Header';
import TablesCombine from './TablesCombine';

function MainPage() {
    return (
        <div>
            <Header />
            <GeneralInfo />
            <Charts />
            <TablesCombine />
        </div>
    )
}

export default MainPage