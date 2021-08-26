import React from 'react'


function HistoryTab({ myHistory }) {




    return (
        <>
        <h2>My Trip History</h2>
            <ol>
                <li>
                    <div className="description">
                        <h4>{myHistory.name}</h4>
                    </div>
                    <div className="place-image">
                    <img src={myHistory.image}/>
                    </div>
                 
               
                </li>

            </ol>
        </>
    )
}

export default HistoryTab;