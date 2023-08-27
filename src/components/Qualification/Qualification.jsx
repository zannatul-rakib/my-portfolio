import { useState } from "react";
import './Qualification.css'


const Qualification = () => {
    const [active, setActive] = useState(1);

    const activeToggle = (index) => {
      setActive(index);
    };
  
    return (
      <section className="qualification section" id="qualification">
        <h2 className="section-title">Qualification</h2>
        <span className="section-subtitle">What I have Done In my Life</span>
  
        <div className="qualification-container container">
          <div className="qualification-tabs">
            <div
              className={
                active === 1
                  ? "qualification-button qualification-active button-flex"
                  : "qualification-button button-flex"
              }
              onClick={() => activeToggle(1)}
            >
              <i className="uil uil-graduation-cap qualification-icon"></i>{" "}
              Education
            </div>
  
            <div
              className={
                active === 2
                  ? "qualification-button qualification-active button-flex"
                  : "qualification-button button-flex"
              }
              onClick={() => activeToggle(2)}
            >
              <i className="uil uil-briefcase-alt qualification-icon"></i>{" "}
              Course
            </div>
          </div>
  
          <div className="qualification-section">
            <div
              className={
                active === 1
                  ? "qualification-content qualification-content-active"
                  : "qualification-content"
              }
            >
              <div className="qualification-data">
                <div>
                  <h3 className="qualification-title">Higher Secondary School Certificate (HSC)</h3>
                  <span className="qualification-subtitle">
                    Border Guard School & College
                  </span>
                  <div className="qualification-calendar">
                    <i className="uil uil-calendar-alt"></i> 2015 - 2017
                  </div>
                </div>
  
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
              </div>
  
              <div className="qualification-data">
                <div></div>
  
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
  
                <div>
                  <h3 className="qualification-title">
                    Secondary School Certificate (SSC)
                  </h3>
                  <span className="qualification-subtitle">
                    Deuty School and College
                  </span>
                  <div className="qualification-calendar">
                    <i className="uil uil-calendar-alt"></i> 2013 - 2015
                  </div>
                </div>
              </div>
  
              {/* <div className="qualification-data">
                <div>
                  <h3 className="qualification-title">SSC</h3>
                  <span className="qualification-subtitle">Deuty school</span>
                  <div className="qualification-calendar">
                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                  </div>
                </div>
  
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
              </div> */}
  
              {/* <div className="qualification-data">
                <div></div>
  
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
  
                <div>
                  <h3 className="qualification-title">SSC</h3>
                  <span className="qualification-subtitle">Deuty school</span>
                  <div className="qualification-calendar">
                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                  </div>
                </div>
              </div> */}
            </div>
  
            <div
              className={
                active === 2
                  ? "qualification-content qualification-content-active"
                  : "qualification-content"
              }
            >
              <div className="qualification-data">
                <div></div>
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
                <div>
                  <h3 className="qualification-title">Web Development with Jhankar Mahbub</h3>
                  <span className="qualification-subtitle">
                    Programming Hero
                  </span>
                  <div className="qualification-calendar">
                    <i className="uil uil-calendar-alt"></i> Jul 2020 - Jan 2021
                  </div>
                </div>
              </div>
  
              <div className="qualification-data">
                <div>
                  <h3 className="qualification-title">Programming With Javascript</h3>
                  <span className="qualification-subtitle">Free Code Camp</span>
                  <div className="qualification-calendar">
                    <i className="uil uil-calendar-alt"></i> Jan 2020 - Apr 2020
                  </div>
                </div>
  
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
              </div>
  
              {/* <div className="qualification-data">
                <div></div>
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
  
                <div>
                  <h3 className="qualification-title">SSC</h3>
                  <span className="qualification-subtitle">Deuty school</span>
                  <div className="qualification-calendar">
                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                  </div>
                </div>
              </div> */}
  
              {/* <div className="qualification-data">
                <div>
                  <h3 className="qualification-title">SSC</h3>
                  <span className="qualification-subtitle">Deuty school</span>
                  <div className="qualification-calendar">
                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                  </div>
                </div>
  
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Qualification;