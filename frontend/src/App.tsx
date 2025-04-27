import PortfolioManagement from "./components/PortfolioManagement"
import Sidebar from "./components/sidebar/Sidebar"

function App() {

  return (
    <>
      <div style={{ display: 'flex'}}>
        <Sidebar />
        <PortfolioManagement />
      </div>
    </>
  )
}

export default App
