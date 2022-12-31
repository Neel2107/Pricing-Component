import { useRef, useState } from "react";
import "./App.css";

function App() {
    const slidervalue = useRef();
    const [display, setDisplay] = useState(16);
    const [isToggled, toggle] = useState(true);

    const setInputValue = () => {
        if (isToggled == true) {
            if (
                slidervalue.current.value >= 10 &&
                slidervalue.current.value < 50
            ) {
                setDisplay(8);
            } else if (
                slidervalue.current.value >= 50 &&
                slidervalue.current.value < 100
            ) {
                setDisplay(12);
            } else if (
                slidervalue.current.value >= 100 &&
                slidervalue.current.value < 500
            ) {
                setDisplay(16);
            } else if (
                slidervalue.current.value >= 500 &&
                slidervalue.current.value < 1000
            ) {
                setDisplay(24);
            } else if (slidervalue.current.value >= 1000) {
                setDisplay(36);
            }
        } else {
            if (
                slidervalue.current.value >= 10 &&
                slidervalue.current.value < 50
            ) {
                setDisplay(6);
            } else if (
                slidervalue.current.value >= 50 &&
                slidervalue.current.value < 100
            ) {
                setDisplay(9);
            } else if (
                slidervalue.current.value >= 100 &&
                slidervalue.current.value < 500
            ) {
                setDisplay(12);
            } else if (
                slidervalue.current.value >= 500 &&
                slidervalue.current.value < 1000
            ) {
                setDisplay(18);
            } else if (slidervalue.current.value >= 1000) {
                setDisplay(27);
            }
        }
    };

    return (
        <div className="App">
            <div className="header">
                <div className="title-text">
                    <h1 className="first-title">
                        Simple, traffic-based pricing
                    </h1>
                    <p className="second-title">
                        Sign-up for our 30-day trail. No credit card required.
                    </p>
                </div>
                <div className="main-comp">
                    <div className="main-text">
                        <p>100K PAGEVIEWS</p>
                        <span className="price-month">
                            <h1>${display}.00</h1>
                            <p>/month</p>
                        </span>
                    </div>
                    <div className="main-slider">
                        <input
                            ref={slidervalue}
                            onChange={setInputValue}
                            className="input-range"
                            min="1"
                            max="1000"
                            type="range"
                        />

                        <div className="secondary-text">
                            <p>monthly billing</p>

                            <label class="switch">
                                <input
                                    type="checkbox"
                                    onClick={() => toggle(!isToggled)}
                                />
                                <span class="slider round"></span>
                            </label>
                            <p>Yearly Billing</p>
                            <p className="discount">25% discount</p>
                        </div>
                    </div>
                    <div className="third-comp">
                        <ul className="trial">
                            <li>Unlimited websites</li>
                            <li>100% data ownership</li>
                            <li>Email reports</li>
                        </ul>

                        <button>Start my trial</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
