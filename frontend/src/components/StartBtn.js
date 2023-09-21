import React, {useState} from 'react'
import socket from '../SocketConfig'

const StartBtn = (props) => {

    const {player, gameID} = props

    const [showBtn, setShowBtn] = useState(true)

    const onClickHandler = (e) => {
        socket.emit('timer', {playerID: player._id, gameID: gameID})
        setShowBtn(false)
    }

    return (
        player.isCreator && showBtn ? <>
            <button type="button" onClick={onClickHandler} className="btn btn-primary">Start Game</button>
        </>    : null
  )
}

export default StartBtn