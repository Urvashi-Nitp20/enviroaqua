import React from "react";
import Header from "../../components/header/Header";
import "./Main.css";

const Main = () => {
  const Waterdata = [
    {
      location: "NIT",
      demand: "1",
      supply: "0.7",
    },
    {
      location: "AIIMS",
      demand: "0.8",
      supply: "0.8",
    },
    {
      location: "IIT",
      demand: "1.2",
      supply: "1.4",
    },
    {
      location: "NIT",
      demand: "1",
      supply: "0.7",
    },
    {
      location: "AIIMS",
      demand: "1",
      supply: "0.8",
    },
    {
      location: "IIT",
      demand: "1.2",
      supply: "1.4",
    },
  ];

  return (
    <div className="main-container">
      <Header />
      <div className="main">
        <div className="main-up">
          <div className="main-location">
            <h2>Patna</h2>
            <p>Population : 4.5 Million</p>
          </div>
          <div className="select-container">
            <form>
              <label htmlFor="location">Choose location:</label>
              <select name="location" id="location">
                {Waterdata.map((data, index) => (
                  <option value={data.location} key={index}>{data.location}</option>
                ))}
              </select>
              <br />
            </form>
          </div>
        </div>

        <div className="main-mid">
          <div className="data-card">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-users"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#6f32be"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
            </div>
            <div className="card-text">
              <div className="data">
                <h2>4.5</h2>
                <p>Million</p>
              </div>
            </div>
          </div>

          <div className="data-card">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-users"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#6f32be"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
            </div>
            <div className="card-text">
              <div className="data">
                <h2>4.5</h2>
                <p>Million</p>
              </div>
            </div>
          </div>

          <div className="data-card">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-users"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#6f32be"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
            </div>
            <div className="card-text">
              <div className="data">
                <h2>4.5</h2>
                <p>Million</p>
              </div>
            </div>
          </div>

          <div className="data-card">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-users"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#6f32be"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
            </div>
            <div className="card-text">
              <div className="data">
                <h2>4.5</h2>
                <p>Million</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
