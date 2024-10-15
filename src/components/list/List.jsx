import ChatList from "./ChatList"
import UserInfo from "./UserInfo"

const List = () => {
  return (
    <div className="flex-[1] flex flex-col h-full">
       <UserInfo />
       <ChatList /> 
    </div>
  )
}

export default List