export default function connectChat(roomId,serverUrl){
    return {
        connect : ()=>{
            console.log(`Connected at ${serverUrl} to chat room ${roomId}`)
        },
        disConnect:()=>{
            console.log(`Disconnected at ${serverUrl} from chat room ${roomId}`)
        }
    }
}