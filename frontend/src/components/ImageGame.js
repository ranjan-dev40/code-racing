import React, { useState } from 'react';
import StartBtn from './StartBtn';
import ProgressBar from './ProgressBar';
import ScoreBoard from './ScoreBoard';


const ImageGame = (props) => {
    const [data,setData]=useState("");
    const [results,setResults]=useState();
    const [success,setSuccess]=useState(false);
    const submitData=async()=>{
        setSuccess(true);
        try{
            await fetch(`https://typing-game-yl62.onrender.com/game/serpapi?param1=${data}`)
                .then((res)=>{
                    return res.json();
                })
                .then((d)=>{
                    setResults(d);
                });
            setSuccess('true');
        }catch(err){
            console.error(err.message);
            setSuccess('false');
        }
        setSuccess(false);
    }

    const changeData=(e)=>{
        const temp=e.target.value;
        if(temp.length<=200){
            setData(e.target.value);
        }
    }
    
    return (
        <div className='d-flex flex-column justify-content-center align-items-center gap-3'>
            <div className='rounded rounded-4 border' style={{height: "34vh",width: "80vw",backgroundRepeat: "no-repeat",backgroundSize: "80vw 34vh",backgroundImage: "url(https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg)"}}>
            </div>
            <div>
                <div className='d-flex flex-column pb-1 align-items-end'>
                    <p style={{margin:0}}>{data.length}/200</p>
                </div>
                <textarea autoFocus name='paragraph' value={data} onChange={(e)=>changeData(e)} className='form-control' style={{resize: "none",height:"14vh",width: "80vw"}}></textarea>
            </div>
            <div>
                {(success===false && !results) &&
                    <button className='btn btn-primary btn-sm' onClick={submitData}>Submit</button>
                }
                {(success===true) &&
                    <button className='btn btn-primary btn-sm' >
                        Loading
                        <span className="ms-1 spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    </button>
                }
                {(success===false && results) &&
                    <button className='btn btn-primary btn-sm' onClick={submitData}>Retry</button>
                }
            </div>
            {results && 
                <div className='shadow d-flex flex-column gap-2 align-items-center border border-1'>
                    <p style={{fontSize: "18px",margin: 0}} className='font-monospace pt-1'>Results: </p>
                    <div className=' d-flex flex-column bg-light border-top' style={{height: "24vh",width: "80vw"}}>
                        <div className='d-flex scroller flex-grow-1 justify-content-between align-items-start'>
                            <div className='p-2' style={{height: "25vh",width: "40vw",overflowY: "auto"}}>
                                <div className='d-flex flex-column align-items-center mb-2'>
                                    <p style={{margin: 0,overflow: "hidden",whiteSpace: "nowrap"}} className='border-bottom border-2 font-monospace'>Suggested : </p>
                                </div>
                                <p>{results.suggested_text}</p>
                                <div className='d-flex flex-column align-items-center mb-2'>
                                    <p style={{margin: 0,overflow: "hidden",whiteSpace: "nowrap"}} className='border-bottom border-2 font-monospace'>Replacement : </p>
                                </div>
                                {results.suggested_replacements.map((item)=>{
                                    return <div key={item}>
                                        <li style={{margin: 0}}>{item}</li>
                                    </div>
                                })}
                            </div>
                            <div className='p-2 scroller border-start border-2' style={{height: "24vh",width: "40vw",overflowY: "auto"}}>
                                <div className='d-flex flex-column align-items-center mb-2'>
                                    <p style={{margin: 0,overflow: "hidden",whiteSpace: "nowrap"}} className='border-bottom border-2 font-monospace'>Typing Data :</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p style={{margin: 3,overflow: "hidden",whiteSpace: "nowrap"}}>Wpm: </p>
                                    <p style={{margin: 3,overflow: "hidden",whiteSpace: "nowrap"}}>data</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p style={{margin: 3,overflow: "hidden",whiteSpace: "nowrap"}}>Characters: </p>
                                    <p style={{margin: 3,overflow: "hidden",whiteSpace: "nowrap"}}>{data.length}</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p style={{margin: 3,overflow: "hidden",whiteSpace: "nowrap"}}>Imaginative: </p>
                                    <p style={{margin: 3,overflow: "hidden",whiteSpace: "nowrap"}}>data</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
 
export default ImageGame;
