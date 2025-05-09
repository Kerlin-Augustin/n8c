import PortfolioManagement from "./components/PortfolioManagement"
import SearchQuery from "./components/searchquery/SearchQuery"
import Sidebar from "./components/sidebar/Sidebar"

function App() {

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Sidebar />
        {/* <PortfolioManagement /> */}
        <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <SearchQuery />
        </div>
      </div>
    </>
  )
}

export default App
