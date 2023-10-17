import React from 'react'

const PlayerInfo = (props) => {
    return (
        <>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <h5 style={{fontWeight: "700"}} className="text-left">{props.userName} :&nbsp;</h5>
                <div className="progress my-1" style={{width: "90%"}}key={props._id}>
                    <div className="progress-bar" role="progressbar" style={{width: props.percentage}}>{props.percentage}</div>
                </div>  
            </div> 
        </>
    )
}

const ProgressBar = ({player, players, wordsLength}) => {

    const calculatePercentage = (player, wordsLength) => {
        if (player.currWordInd !== 0) {
            return ((player.currWordInd / wordsLength) * 100).toFixed(2) + "%"
        }
        return 0;
    }
    const percentage = calculatePercentage(player, wordsLength)

    return (
        <>
            {
                <>
                    <PlayerInfo userName={player.userName} _id={player._id} percentage={percentage}/>
                </>
            }
            {
                players.map(playerObj => {
                    const percentage = calculatePercentage(playerObj, wordsLength)
                    return (playerObj._id !== player._id ? 
                    <>
                        <PlayerInfo userName={playerObj.userName} _id={playerObj._id} percentage={percentage}/>
                    </> : null
                    )
                })
            }
        </>
    )
}

export default ProgressBar