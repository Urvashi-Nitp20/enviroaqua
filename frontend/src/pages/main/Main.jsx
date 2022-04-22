import React from "react";
import Header from "../../components/header/Header";
import "./Main.css";
import { FaWater , FaHandHoldingWater } from "react-icons/fa"
import {IoMdWater} from "react-icons/io"
import ChartLine from "../../components/chart/Chart";


const Main = () => {
  const Waterdata = [
  {
    location: "January",
    Demand: "1",
    Supply: "0.7",
  },
  {
    location: "february",
    Demand: "0.8",
    Supply: "0.8",
  },
  {
    location: "March",
    Demand: "1.2",
    Supply: "1.4",
  },
  {
    location: "April",
    Demand: "1",
    Supply: "0.7",
  },
  {
    location: "May",
    Demand: "1",
    Supply: "0.8",
  },
  {
    location: "June",
    Demand: "1.2",
    Supply: "1.4",
  },
];

  return (
    <div className="main-container">
      <Header />
      <div className="main">
        <div className="main-up">
          <div className="main-location">
            <h2>NIT More</h2>
            <p>Population : 0.6 Mn</p>
          </div>
          <div className="select-container">
            <form>
              <label htmlFor="location">Choose location:</label>
              <select name="location" id="location">
                {Waterdata.map((data, index) => (
                  <option value={data.location} key={index}>
                    {data.location}
                  </option>
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
                stroke="skyblue"
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
                <h2>0.6</h2>
                <p>Million</p>
              </div>
            </div>
          </div>

          <div className="data-card">
            <div className="icon">
              <FaWater className="fa-icon"/>
            </div>
            <div className="card-text">
              <div className="data">
                <h2>1mn gallons</h2>
                <p>demand</p>
              </div>
            </div>
          </div>

          <div className="data-card">
            <div className="icon">
              <FaHandHoldingWater className="fa-icon"/>
            </div>
            <div className="card-text">
              <div className="data">
                <h2>0.7mn gallons</h2>
                <p>supply</p>
              </div>
            </div>
          </div>

          <div className="data-card">
            <div className="icon">
              <IoMdWater className="fa-icon"/>
            </div>
            <div className="card-text">
              <div className="data">
                <h2>Water</h2>
                <p>Scarcity</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mid-foot">
          <div className="left">
            <ChartLine Waterdata={Waterdata} width={600} height={300}/>
          </div>
          <div className="right">
            <label htmlFor="text">Mail Template</label>
            <br />
            <textarea name="text" id="mail" cols="30" rows="10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, rem praesentium placeat tempora minus, obcaecati aut
              magnam consequatur nulla modi temporibus error? Blanditiis eum
              molestias quidem corporis sint voluptatem ducimus quibusdam esse,
              dignissimos, fugiat animi deserunt a culpa beatae voluptatibus
              vitae magnam itaque alias id ipsa rerum obcaecati sunt.
              Distinctio!
            </textarea>
          </div>
        </div>

        <div className="bottom">
          <label for="points">Varying Water Supply(between 0 and 10):</label>
          <input type="range" id="points" name="points" min="-10" max="10"/>
        </div>
      </div>
    </div>
  );
};

export default Main;
