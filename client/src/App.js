// main scss
import './App.scss';

// components
import './components/header/Header'
import Header from './components/header/Header';
import List from './components/list/List';

// utilities
import React, { useEffect, useState } from "react"

function App() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const api = 'jobs.json';

    fetch(api)
      .then(response => response.json())
      .then(json => {
        setJobs([...json.jobs])
      })
  }, [])


  return (
    <div className="app theme">
      <div className="container">
       <Header />
        <main className="main">
          <div className="hero-component">
            <form action="" id="search" className="search-component">
              <div className="icon"></div>
              <input type="text" name="" id="" className="input" placeholder="Title, companies, expertise or benefits"/>
              <button type="submit" className="button">Search</button>
            </form>
          </div>
          <section className="main-structure">
            <div className="menu-component">
              <form id="menu" action="" className="form">
                <span className="filter-name">Hours</span>
                <div className="label-wrapper">
                    <label htmlFor="full-time" className="label">
                    <input type="checkbox" name="" id="full-time" className="check-input"/>
                    <span>Full time</span> 
                    </label>
                </div>
                <span className="filter-name">Location</span>
                <input type="text" name="" id="" className="input"/>
                <div className="label-wrapper">
                    <label htmlFor="london" className="label">
                    <input type="radio" name="radio-input" id="london" className="check-input"/>
                    <span>London</span>
                    </label>
                </div>
                <div className="label-wrapper">
                    <label htmlFor="amsterdam" className="label">
                    <input type="radio" name="radio-input" id="amsterdam" className="check-input"/>
                    <span>Amsterdam</span>
                    </label>
                </div>
                <div className="label-wrapper">
                    <label htmlFor="new-york" className="label">
                    <input type="radio" name="radio-input" id="new-york" className="check-input"/>
                    <span>New York</span>
                    </label>
                </div>
                <div className="label-wrapper">
                    <label htmlFor="berlin" className="label">
                    <input type="radio" name="radio-input" id="berlin" className="check-input"/>
                    <span>Berlin</span>
                    </label>
                </div>
              </form>
            </div>
            <List jobs={jobs}/>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
