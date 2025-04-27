const PortfolioManagement = () => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

  }

  return (
    <div>
      <h2>Portfolio Management</h2>
      <div>
        <h3>Upload 10-K Filing PDF</h3>
        <form onSubmit={handleSubmit}>
          <input type='file'></input>
          <button>Upload</button>
        </form>
      </div>
    </div>

  )
}

export default PortfolioManagement