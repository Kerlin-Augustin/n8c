import './signupPage.css';
import '../../../components/sidebar/sidebarNavLinks.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const SignupPage = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const createAccount = (e: any) => {
    e.preventDefault()

  }

  return (
    <div className='landingContainer'>
      <section className='primarySection'>
        <NavLink to='/' className='nav-link'>
          <div className='logo'>
            N8C
          </div>
        </NavLink>
        <h1 className='h1'>
          Navigating your credit filings faster and better
        </h1>
        <ul>
          <li className='li'>
            <h4 className='h4'>Start your free 30 day trial</h4>
            <p className='p'>Bridge the gap between filings and forecasts with intelligent tools for precise credit and investment decisions. Let AI read the filings, you focus on making smart, informed lending and investment choices. Start analyzing filings and making smarter credit decisions today.</p>
          </li>
          <li className='li'>
            <h4 className='h4'>Upload your 10k filings</h4>
            <p className='p'>Transform complex 10-Ks into clear signals for smarter lending and investment calls.</p>
          </li>
          <li className='li'>
            <h4 className='h4'>Smarter credit decisions start here</h4>
            <p className='p'>Have all of your company's credit reports and leads all in one place.</p>
          </li>
          <li className='li'>
            <h4 className='h4'>Navigate Credit with Precision</h4>
            <p className='p'>Intelligent Analytics That Turn Complex 10-K Filings Into Clear, Actionable Insights.</p>
          </li>
        </ul>
      </section>
      <div>
        <form onSubmit={createAccount} className='heroForm'>
          <h4>
            Create your N8C Account
          </h4>
          <label
            className='inputLabel'
            htmlFor='name'
          >
            Full Name</label>
          <input
            type="text"
            className='inputFields'
            onChange={(e) => setName(e.target.value)}
            id='name'
            required
          />
          <label
            className='inputLabel'
            htmlFor='email'
          >
            Email</label>
          <input
            type="text"
            className='inputFields'
            onChange={(e) => setEmail(e.target.value)}
            id='email'
            required
          />
          <label
            className='inputLabel'
            htmlFor='password'
          >
            Password</label>
          <input
            type="password"
            className='inputFields'
            onChange={(e) => setPassword(e.target.value)}
            id='password'
            required
          />
          <br />
          <button>Submit</button>
          <p>Have an account? <NavLink to='/login'>Sign in</NavLink></p>
        </form>
      </div>
    </div>
  )
}

export default SignupPage