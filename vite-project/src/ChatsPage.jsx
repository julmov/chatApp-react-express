import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
      "740f078b-8a46-4eb6-9660-7d41bb52c541",
      props.user.username,
      props.user.secret
    );
    return (
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{ height: '100%'}}/>
    </div>
    )
} 

export default  ChatsPage;