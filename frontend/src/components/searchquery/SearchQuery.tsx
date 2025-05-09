import { useState, useEffect } from "react"
import axios from 'axios'

const SearchQuery = () => {

  const [searchQuery, setSearchQuery] = useState('')

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
        axios
          .get('/api/userCompany')
          .then(res => {
            console.log(searchQuery)
            if (searchQuery.toLowerCase() === res.data[0].companyName.toLowerCase()) {
              console.log(res.data[0]._id)
            }
          })
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
      />
    </div>
  )
}

export default SearchQuery