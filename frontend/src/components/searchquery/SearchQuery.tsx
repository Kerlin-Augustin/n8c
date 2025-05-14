import { useState, useEffect } from "react"
import axios from 'axios'

const SearchQuery = () => {

  const [searchQuery, setSearchQuery] = useState('')
  const [queriedContracts, setQueriedContracts] = useState<React.ReactNode[]>([])

  const style: { [key: string]: React.CSSProperties } = {
    queryContainer: {
      margin: "1em",
    },
    queryInput: {
      width: '50em',
      height: '2em',
    }
  }

  useEffect(() => {

    const timeout = setTimeout(() => {
      if (searchQuery) {
        axios.get('/api/userCompany').then(res => {
          const { userCompanies, users } = res.data;
  
          console.log('users', users);
          console.log('user companies', userCompanies);
  
          const match = users.find(
            (user: any) =>
              user.loanTypes?.toLowerCase() === searchQuery.toLowerCase()
          );
  
          if (match) {
            setQueriedContracts(users);
          } else {
            setQueriedContracts([]);
          }
        });
      } else {
        setQueriedContracts([]);
      }
    }, 300)
    return () => clearTimeout(timeout)
  }, [searchQuery])

  const handleChange = (e: any) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div style={style.queryContainer}>
      <h3>Find Contracts</h3>
      <input
        type='search'
        style={style.queryInput}
        onChange={handleChange}
        placeholder="Search for contracts..."
      />
      {queriedContracts?.length > 0 &&
        <div>
          <h2>hello</h2>
        </div>}
    </div>
  )
}

export default SearchQuery