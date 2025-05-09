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

    const currentQuery = searchQuery

    const timeout = setTimeout(() => {
      if (currentQuery) {
        axios
          .get('/api/userCompany')
          .then(res => {
            const contractsFor10KFiling = res.data.map((contracts: any, index: number) => {
              return
            })
            if (currentQuery.toLowerCase() === res.data[0].companyName.toLowerCase()) {
              // console.log(res.data)
              setQueriedContracts(res.data)
            } else {
              setQueriedContracts([])
            }
          })
      } else {
        setQueriedContracts([])
      }
    }, 300)
    return () => clearTimeout(timeout)
  }, [searchQuery])

  useEffect(() => {
    console.log('contracts', queriedContracts)
  },[queriedContracts])

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