import React from 'react'

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
                    <h5 className="text-left">{player.userName}</h5>
                    <div className="progress my-1" key={player._id}>
                        <div className="progress-bar" role="progressbar" style={{width: percentage}}>{percentage}</div>
                    </div>
                </>
            }
            {
                players.map(playerObj => {
                    const percentage = calculatePercentage(playerObj, wordsLength)
                    return (playerObj._id !== player._id ? 
                    <>
                        <h5 className="text-left">{playerObj.userName}</h5>
                        <div className="progress my-1" key={playerObj._id}>
                            <div className="progress-bar" role="progressbar" style={{width: percentage}}>{percentage}</div>
                        </div>
                    </> : null
                    )
                })
            }
        </>
  )
}

export default ProgressBar