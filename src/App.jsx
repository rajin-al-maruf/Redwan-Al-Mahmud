import Sidebar from "./components/Sidebar"
import Page from "./Page/Page"

function App() {

  return (
    <div className="flex">
      <div className='sticky top-0 bg-gray-300 w-[25%] h-screen'>
        <Sidebar />
      </div>
      <div className="w-[75%]">
        <Page />
      </div>
      
    </div>
  )
}

export default App
