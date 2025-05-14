const LandingPage = () => {

  const style: { [key: string]: React.CSSProperties } = {
    headerContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1em 3em',
      fontSize: '20px',
      boxShadow: '0 25px 40px rgba(0, 0, 0, 0.1)',
      marginBottom: '1em'
    },
    headerLogo: {
      display: 'flex',
      alignItems: 'center',
      color: 'rgb(37, 123, 227)',
    },
    headerSignup: {
      display: 'flex',
      alignItems: 'center',
      background: 'rgb(37, 123, 227)',
      color: "white",
      borderRadius: '5px',
      padding: '.5em',
      cursor: 'pointer',
    },
    nav: {
      marginRight: '2em',
      fontFamily: '"Martian Mono", sans-serif',
      cursor: 'pointer',
    },
    mainSection: {
      background: 'rgb(37, 123, 227)',
      color: 'white',
      textAlign: 'center',
      padding: '10em 0em',
      margin: '0 2em',
      borderRadius: '1em',
      fontFamily: '"Martian Mono", sans-serif'
    },
    mainSectionP: {
      margin: '1em',
      fontSize: '24px',
    },
    mainSectionH1: {
      fontSize: '40px'
    },
    bodySection: {
      textAlign: 'center',
      marginTop: '5em',
      fontFamily: '"Martian Mono", sans-serif',
      color: 'rgb(37, 123, 227)',
    },
    bodySectionH2: {
      margin: '0 10em',
      fontSize: '2rem',
    },
    bodySectionP: {
      fontSize: '12px',
      margin: '1em 30em',
    },
    sectionTail: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2em',
      padding: '4em 2em',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: '"Martian Mono", sans-serif',
    },
    sectionTailDiv: {
      border: '1px solid rgb(37, 123, 227)',
      borderRadius: '1em',
      boxShadow: '0 25px 40px rgba(0, 0, 0, 0.3)',
      transition: 'box-shadow 0.3s ease',
    }
  }

  return (
    <>
      <nav>
        <div style={style.headerContainer}>
          <div style={style.headerLogo}>
            <div style={style.nav}>
              <h2>
                N8C
              </h2>
            </div>
            <div style={style.nav}>
              Home
            </div>
            <div style={style.nav}>
              About
            </div>
            <div style={style.nav}>
              Contact Us
            </div>
          </div>
          <div style={style.headerSignup}>
            Sign Up
          </div>
        </div>
      </nav>
      <main>
        <section style={style.mainSection}>
          <div>
            <h1 style={style.mainSectionH1}>
              Effortless Credit Solutions Driven by AI Intelligence
            </h1>
            <p style={style.mainSectionP}>
              Transforming Credit Analysis — Extract Key Insights from 10-K Filings to Navigate Risk, Opportunity, and Lending Potential.
            </p>
            <form>
              <input type="email" placeholder="Enter your work email..." />
              <button>Get A Demo</button>
            </form>
          </div>
        </section>
        <section style={style.bodySection}>
          <div>
            <h2 style={style.bodySectionH2}>
              All the tools you need to decode filings and make smarter credit decisions.
            </h2>
            <p style={style.bodySectionP}>
              Streamline your review process with intelligent tools built for analysts and investors. Quickly identify financial red flags and lending opportunities buried in complex disclosures.
            </p>
            <button>Get Started With N8C</button>
          </div>
        </section>
        <section>
          <div style={style.sectionTail}>
            <div style={style.sectionTailDiv}>
              <h3>
                Analyze Credit Risk Instantly
              </h3>
              <p>
                Uncover risk factors buried in 10-K filings.
              </p>
              <p>
                Let AI scan complex financial documents and highlight red flags like debt exposure, liquidity issues, or revenue dips — all in seconds.
              </p>
            </div>
            <div style={style.sectionTailDiv}>
              <h3>
                Surface Key Insights Automatically
              </h3>
              <p>
                No more manual digging through pages of data.
              </p>
              <p>
                Our platform extracts and summarizes the most relevant sections of filings — from cash flow trends to covenant breaches — tailored to what matters to you.
              </p>
            </div>
            <div style={style.sectionTailDiv}>
              <h3>
                Make Smarter Lending Decisions
              </h3>
              <p>
                Make Smarter Lending Decisions
              </p>
              <p>
                With enriched insights and smart tagging, you can confidently approve, decline, or flag loan applications based on real financial health.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default LandingPage