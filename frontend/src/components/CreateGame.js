import React, {useState} from 'react'
import socket from '../SocketConfig'

const CreateGame = (props) => {
    const [userName, setUserName] = useState("")

    const onChange = (e) => {
        setUserName(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        socket.emit('create-game', userName)
    }

    return (
        <>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <div style={{width: "80%"}}>
                    <h1 className="text-center">Create Game</h1>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Enter User Name</label>
                            <input className='form-control' type="text" name="userName" value={userName} onChange={onChange} placeholder="Enter User Name"/>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateGame