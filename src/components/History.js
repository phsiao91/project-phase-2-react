import React from 'react'
import NavBar from './NavBar';
import HistoryTab from './HistoryTab';



function History (props) {
    console.log(props)

    const mapHistory = () => {
        let mappedHistory = props.renderMyHistory.map(eachHistory=> {
            return(
                <HistoryTab 
                    key={eachHistory.id}
                    myHistory={eachHistory}
                />
            )
        })
        return mappedHistory
    }

    return(
        <>
            <NavBar />
            {mapHistory()}
            <div></div>
        </>
    )
}

export default History;
