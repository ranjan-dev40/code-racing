import React, {useState} from 'react'
import socket from '../SocketConfig'

const JoinGame = (props) => {
    const [userInput, setUserInput] = useState({gameID: "", userName: ""})

    const onChange = (e) => {
        setUserInput({...userInput, [e.target.name] : e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(userInput)
        socket.emit('join-game', userInput)
    }

    return (
        <>
            <div className='row'>
                <div className="col-sm"></div>
                <div className="col-sm-8">
                    <h1 className="text-center">Join Game</h1>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="GameID">Enter Game ID</label>
                            <input className='form-control' type="text" name="gameID" value={userInput.gameID} onChange={onChange} placeholder="Enter Game ID"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Enter User Name</label>
                            <input className='form-control' type="text" name="userName" value={userInput.userName} onChange={onChange} placeholder="Enter User Name"/>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
                <div className="col-sm"></div>
            </div>
        </>
    )
}

export default JoinGame