import React from "react";
import Header from "../../components/header/Header";
import "./Dashboard.css";
import map from "../../resources/patna-river-map.jpg";

const Dashboard = () => {
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

  var totalSupply = 0;
  var totalDemand = 0;

  const Result = (demand, supply) => {
    totalDemand += parseFloat(demand);
    totalSupply += parseFloat(supply);

    if (demand > supply) {
      return "Water Surplus";
    } else if (demand < supply) {
      return "Water Scarcity";
    }

    return "Water Sufficient";
  };

  return (
    <div className="dashboard-container">
      <Header />
      <div className="heading">
        <h1>DashBoard</h1>
      </div>
      <div className="dashboard">
        <div className="map">
          <img src={map} alt="water-map" />
        </div>
        <div className="table">
          <table class="paleBlueRows">
            <caption>Water Demand-Supply Table</caption>
            <thead>
              <tr>
                <th>Location</th>
                <th>Demand (in mn Gallons)</th>
                <th>Supply (in mn Gallons)</th>
                <th>Remarks</th>
              </tr>
            </thead>
            {Waterdata.map((data, index) => (
              <tr>
                <td>{data.location} </td>
                <td>{data.demand}</td>
                <td>{data.supply}</td>
                <td>{Result(data.demand, data.supply)}</td>
              </tr>
            ))}
            <tfoot>
              <tr>
                <td>Total</td>
                <td>{totalDemand.toFixed(2)}</td>
                <td>{totalSupply.toFixed(2)}</td>
                <td>
                  {totalSupply === totalDemand
                    ? "Sufficient Water"
                    : totalDemand > totalSupply
                    ? "Water Scarcity"
                    : "Water Surplus"}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
