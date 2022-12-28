import { useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="header">
        <div className="title-text">
          <h1 className="first-title">Simple, traffic-based pricing</h1>
          <p className="second-title">
            Sign-up for our 30-day trail. No credit card required.
          </p>
        </div>
        <div className="main-comp">
          <div className="main-text">
            <p>100K PAGEVIEWS</p>
            <span className="price-month">
              <h1>$16.00</h1>
              <p>/ month</p>
            </span>
          </div>
          <div className="main-slider">
            <input type="range" />

            <div className="secondary-text">
              <p>monthly billing</p>
              <label class="switch">
                <input type="checkbox" checked />
                <span class="slider round"></span>
              </label>
              <p>Yearly Billing</p>
              <p>25% discount</p>
            </div>
          </div>
          <div className="third-comp">
            <div >
              <ul className="trial">
                <li>Unlimited websites</li>
                <li>100% data ownership</li>
                <li>Email reports</li>
              </ul>
            </div>
            <div>
              <button>Start my trial</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
