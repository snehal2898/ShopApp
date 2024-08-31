import { useEffect } from "react";
import connectChat from "./connectChat";

// custom Hook (user defined hook)

export function useChatRoom(roomId,serverUrl){

    // wrapping effect's logic inside custom hook

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





}