import './App.scss';

import './components/header/Header'
import Header from './components/header/Header';
import List from './components/list/List';

import React, { useEffect, useState, useRef } from "react"

function App() {
  const [jobs, setJobs] = useState([])
  const menuComponent = useRef();

  useEffect(() => {
    const api = 'jobs.json';

    fetch(api)
      .then(response => response.json())
      .then(json => {
        setJobs([...json.jobs])
      })
  }, [])

  const toggleMenu = () => {
    if(menuComponent.current.classList.contains('active')) {
      menuComponent.current.classList.remove('active')
    } else {
      menuComponent.current.classList.add('active')
    }
  }

  useEffect(() => {
    menuComponent.current.addEventListener('click', () => toggleMenu())
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
            <div className="menu-component" ref={menuComponent}>
              <form id="menu" action="" className="form">
                <span className="filter-name">Hours</span>
                <div className="label-list">
                  <div className="label-wrapper">
                      <label className="label">
                        <input type="checkbox" className="check-input"/>
                        <span>Full time</span> 
                      </label>
                  </div>
                  <div className="label-wrapper">
                      <label className="label">
                        <input type="checkbox" className="check-input"/>
                        <span>Part time</span> 
                      </label>
                  </div>
                  <div className="label-wrapper">
                      <label className="label">
                        <input type="checkbox" className="check-input"/>
                        <span>Cand pot shio</span> 
                      </label>
                  </div>
                </div>
                <span className="filter-name">Location</span>
                <input type="text" name="" id="" className="input" placeholder="Type a location"/>
                <div className="label-list">
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
