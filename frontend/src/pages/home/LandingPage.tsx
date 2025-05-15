import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../defaultNavLinks.css'

const LandingPage = () => {

  const [hover, setHover] = useState(false)

  const style: { [key: string]: React.CSSProperties } = {
    headerContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1em 3em',
      fontSize: '20px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
      marginBottom: '1em'
    },
    headerLogo: {
      display: 'flex',
      alignItems: 'center',
      color: 'black'
    },
    headerSignup: {
      display: 'flex',
      alignItems: 'center',
      color: hover ? 'white' : 'black',
      borderRadius: '5px',
      padding: '.5em',
      cursor: 'pointer',
      background: hover ? 'linear-gradient(135deg, #2f80ed, #56ccf2)' : '',
    },
    nav: {
      marginRight: '2em',
      fontFamily: '"Martian Mono", sans-serif',
      cursor: 'pointer',
    },
    main: {
      backgroundColor: '#eef3f9',
    },
    mainSection: {
      background: 'linear-gradient(135deg, #2f80ed, #56ccf2)',
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
      borderRadius: '1em',
      boxShadow: '0 25px 40px rgba(0, 0, 0, 0.3)',
      transition: 'box-shadow 0.3s ease',
      paddingBottom: '5em',
      textAlign: 'center',
      background: 'white',
      border: '1px solid lightgray'
    },
    sectionTailH3: {
      margin: '1em 0',
      color: 'rgb(37, 123, 227)',
    },
    sectionTailP: {
      margin: '2em 2em',
      textDecoration: 'underline'
    },
    sectionTailSecondP: {
      margin: '2em 2em',
    },
    footer: {
      background: 'linear-gradient(135deg, #2f80ed, #56ccf2)',
      padding: '5em 0',
      color: 'white'
    },
    footerSection: {
      display: 'flex',
      justifyContent: 'space-around',
      fontSize: '24px',
    },
    footerSectionDiv: {
      marginRight: '5em',
    },
    footerLogo: {
      marginRight: '35em',
      marginLeft: '5em',
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
          <NavLink className='nav-link' to='/signup'>
            <div
              style={style.headerSignup}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Sign Up
            </div>
          </NavLink>
        </div>
      </nav>
      <main style={style.main}>
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
            <NavLink to='/signup' className='nav-link'>
              <button>
                Get Started With N8C
              </button>
            </NavLink>
          </div>
        </section>
        <section>
          <div style={style.sectionTail}>
            <div style={style.sectionTailDiv}>
              <h3 style={style.sectionTailH3}>
                Analyze Credit Risk Instantly
              </h3>
              <p style={style.sectionTailP}>
                Uncover risk factors buried in 10-K filings.
              </p>
              <p style={style.sectionTailSecondP}>
                Let AI scan complex financial documents and highlight red flags like debt exposure, liquidity issues, or revenue dips — all in seconds.
              </p>
            </div>
            <div style={style.sectionTailDiv}>
              <h3 style={style.sectionTailH3}>
                Surface Key Insights Automatically
              </h3>
              <p style={style.sectionTailP}>
                No more manual digging through pages of data.
              </p>
              <p style={style.sectionTailSecondP}>
                Our platform extracts and summarizes the most relevant sections of filings — from cash flow trends to covenant breaches — tailored to what matters to you.
              </p>
            </div>
            <div style={style.sectionTailDiv}>
              <h3 style={style.sectionTailH3}>
                Make Smarter Lending Decisions
              </h3>
              <p style={style.sectionTailP}>
                Back your credit decisions with data, not guesswork.
              </p>
              <p style={style.sectionTailSecondP}>
                With enriched insights and smart tagging, you can confidently approve, decline, or flag loan applications based on real financial health.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer style={style.footer}>
        <section style={style.footerSection}>
          <div style={style.footerLogo}>N8C</div>
          <section style={style.footerSection}>
            <div style={style.footerSectionDiv}>About</div>
            <div style={style.footerSectionDiv}>Contact</div>
            <div style={style.footerSectionDiv}>Terms and Conditions</div>
          </section>
        </section>
      </footer>
    </>
  )
}

export default LandingPage