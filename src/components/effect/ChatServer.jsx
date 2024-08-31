import { useEffect, useState } from "react";
import connectChat from "./connectChat";
import { useChatRoom } from "./useChatRoom";

const ChatServer = ({roomId})=>{

    const [serverUrl,setServerUrl] = useState("http://hostname:50001")
/* 

    // call useEffect to connect or disconnect to chat room server
    useEffect(()=>{
        // setup function
        // call connectChat function
        const connection = connectChat(roomId,serverUrl)
        connection.connect()   // connecting to new chatroom


        // cleanup function returned from setup function
        return ()=>{
            connection.disConnect();   // disconnecting from previous chatroom
        }

    },[roomId,serverUrl]);  // dependencies passed as second parameter to useEffect 
    
    
    */



    // call custom hook or user-defined hook
    useChatRoom(roomId,serverUrl)




    // rendering logic
    return (
        <div>
            <label htmlFor="in">Enter Chat Server Url of {roomId} chat room</label>
            <input id="in" value={serverUrl} onChange={(e)=>setServerUrl(e.target.value)} />
            <h2>Welcome to Chat Room {roomId} </h2>
        </div>
    )

}

export default ChatServer;