const PortfolioManagement = () => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(e)
  }

  const handleChange = () => {

  }

  return (
    <div>
      <input type='search' onChange={handleChange} placeholder="Search Contracts"/>
    </div>

  )
}

export default PortfolioManagement