import Chat from "./components/chat/Chat"
import Details from "./components/details/Datails"
import List from "./components/list/List"
import Login from "./components/login/Login"

const App = () => {

  const user = true

  return (
    <div className="w-[90vw] h-[90vh] bg-blue-900/30 backdrop-blur-md rounded-lg p-6 shadow-lg flex gap-x-2 overflow-hidden">
      {user? (
<>
        <List />
        <Chat />
        <Details />
        </>
      ): (
        <>
        <Login />
        </>
      )
      }
    </div>
  )
}

export default App