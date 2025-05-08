import axios from "axios"
import { useState } from 'react'

const PortfolioManagement = () => {

  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    axios
      .get('api/userCompany')
      .then(response => {
        console.log(response.data)
      })

    // get all of the contracts from the database and compare it to the search Query
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='search'
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Contracts"
        />
        <button>
          Search
        </button>
      </form>
    </div>

  )
}

export default PortfolioManagement