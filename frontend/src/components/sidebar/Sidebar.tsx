import { NavLink } from "react-router-dom";
import SidebarButton from "./SidebarButton"
import "../../defaultNavLinks.css"

const Sidebar = () => {

  const tabs = [
    <NavLink className="nav-link" to="prospecting"><SidebarButton buttonText="Prospecting" /></NavLink>,
    <NavLink className="nav-link" to="screening"><SidebarButton buttonText="Screening" /></NavLink>,
    <NavLink className="nav-link" to="modeling"><SidebarButton buttonText="Modeling" /></NavLink>,
    <SidebarButton buttonText="Structure" />,
    <SidebarButton buttonText="Concept" />,
    <SidebarButton buttonText="Term Sheet" />,
    <SidebarButton buttonText="Credit Memo" />,
    <SidebarButton buttonText="Loan Docs" />,
    <SidebarButton buttonText="Portfolio Review" />,
    <SidebarButton buttonText="Portfolio Analysis" />,]

  const allTabs = tabs.map((tab, index) => {
    return (
      <div key={index}>
        {tab}
      </div>
    )
  })

  const style: { [key: string]: React.CSSProperties } = {
    sideBarContainer: {
      background: 'rgb(37, 123, 227)',
      width: '200px',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logoAndTabs: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    logoText: {
      color: 'white',
    },
    tabs: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch'
    },
    profile: {
      display: 'flex',
      justifyContent: 'center',
      background: 'white',
      textAlign: 'center',
      border: '1px solid black',
      borderRadius: '0.5em',
      marginBottom: '1em',
      cursor: 'pointer',
    },
    profileText: {
      marginLeft: '1em',
      marginRight: '1em',
      marginTop: '0.5em',
      marginBottom: '0.5em',
      fontSize: '14px'
    }
  }

  return (
    <aside style={style.sideBarContainer}>
      <div style={style.logoAndTabs}>
        <NavLink className="nav-link" to="">
          <h2 style={style.logoText}>
            N8C
          </h2>
        </NavLink>
        <div style={style.tabs}>
          {allTabs}
        </div>
      </div>
      <NavLink to="/" className="nav-link">
        <div style={style.profile}>
          <h3 style={style.profileText}>
            Sign Out
          </h3>
        </div>
      </NavLink>
    </aside>
  )
}

export default Sidebar