import './App.scss';

function App() {
  return (
    <div className="app theme">
      <div className="container">
        <header className="header">
          <h1 className="logo"><strong>Github</strong> Jobs</h1>
        </header>

        <main className="main">
          <div className="hero-component">
            <div className="search-component">
              <div className="icon"></div>
              <input type="text" name="" id="" className="input" placeholder="Title, companies, expertise or benefits"/>
              <button type="submit" className="button">Search</button>
            </div>  
          </div>
          <section className="main-structure">
            <aside className="menu-component">
              <form action="" className="form">
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
            </aside>

            <div className="list">
              <div className="card-component">
                <div className="content-container">
                  <div className="logo-wrapper">
                    <img src="//placehold.it/300x300" alt="" className="logo"/>
                  </div>
                  <div className="info">
                    <span className="title">Kasisto</span>
                    <span className="description">Front-End-Software</span>
                    <span className="tag">Full time</span>
                  </div>
                </div>
                <div className="details">
                  <div className="details-wrapper">
                    <img src="" alt="" className="icon"/>
                    <span className="highlight">New York</span>
                  </div>
                  <div className="details-wrapper">
                    <img src="" alt="" className="icon"/>
                    <span className="highlight">5 days ago</span>
                  </div>
                </div>
              </div>
              <div className="card-component">
                <div className="content-container">
                  <div className="logo-wrapper">
                    <img src="//placehold.it/300x300" alt="" className="logo"/>
                  </div>
                  <div className="info">
                    <span className="title">Kasisto</span>
                    <span className="description">Front-End-Software</span>
                    <span className="tag">Full time</span>
                  </div>
                </div>
                <div className="details">
                  <div className="details-wrapper">
                    <img src="" alt="" className="icon"/>
                    <span className="highlight">New York</span>
                  </div>
                  <div className="details-wrapper">
                    <img src="" alt="" className="icon"/>
                    <span className="highlight">5 days ago</span>
                  </div>
                </div>
              </div>
              <div className="card-component">
                <div className="content-container">
                  <div className="logo-wrapper">
                    <img src="//placehold.it/300x300" alt="" className="logo"/>
                  </div>
                  <div className="info">
                    <span className="title">Kasisto</span>
                    <span className="description">Front-End-Software</span>
                    <span className="tag">Full time</span>
                  </div>
                </div>
                <div className="details">
                  <div className="details-wrapper">
                    <img src="" alt="" className="icon"/>
                    <span className="highlight">New York</span>
                  </div>
                  <div className="details-wrapper">
                    <img src="" alt="" className="icon"/>
                    <span className="highlight">5 days ago</span>
                  </div>
                </div>
              </div>
              <div className="card-component">
                <div className="content-container">
                  <div className="logo-wrapper">
                    <img src="//placehold.it/300x300" alt="" className="logo"/>
                  </div>
                  <div className="info">
                    <span className="title">Kasisto</span>
                    <span className="description">Front-End-Software</span>
                    <span className="tag">Full time</span>
                  </div>
                </div>
                <div className="details">
                  <div className="details-wrapper">
                    <img src="" alt="" className="icon"/>
                    <span className="highlight">New York</span>
                  </div>
                  <div className="details-wrapper">
                    <img src="" alt="" className="icon"/>
                    <span className="highlight">5 days ago</span>
                  </div>
                </div>
              </div>
              <div className="card-component">
                <div className="content-container">
                  <div className="logo-wrapper">
                    <img src="//placehold.it/300x300" alt="" className="logo"/>
                  </div>
                  <div className="info">
                    <span className="title">Kasisto</span>
                    <span className="description">Front-End-Software</span>
                    <span className="tag">Full time</span>
                  </div>
                </div>
                <div className="details">
                  <div className="details-wrapper">
                    <img src="" alt="" className="icon"/>
                    <span className="highlight">New York</span>
                  </div>
                  <div className="details-wrapper">
                    <img src="" alt="" className="icon"/>
                    <span className="highlight">5 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
