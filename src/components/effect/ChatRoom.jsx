import { useState } from "react";
import ChatServer from "./ChatServer";

const ChatRoom = ({serverUrl})=>{
    const [roomId,setRoomId] = useState('music')
    const [showMore,setShowMore] = useState(false)

    // event handler
    const handleChatRoom = e => setRoomId(e.target.value)


    // rendering logic

    return (
        <div>
            <label htmlFor="cid">Select Chat Room</label>
            <select value={roomId} onChange={handleChatRoom}>
                <option value="music">Music</option>
                <option value="news">News</option>
                <option value="weather">Weather</option>
                <option value="education">Education</option>
            </select>

            <button onClick={()=>setShowMore(!showMore)} > {showMore ? 'Close Chat' : 'Open Chat'} </button>
            
            { showMore && <ChatServer roomId={roomId} /> }


        </div>
    )



}

export default ChatRoom;