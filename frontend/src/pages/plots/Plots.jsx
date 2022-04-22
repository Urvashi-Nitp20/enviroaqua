import React from 'react'
import Chart from '../../components/chart/Chart'
import Header from '../../components/header/Header'
import "./Plots.css"

const Plots = () => {

  const Waterdata = [
  {
    location: "Patna City",
    Demand: "1",
    Supply: "0.7",
  },
  {
    location: "Patliputra",
    Demand: "0.8",
    Supply: "0.8",
  },
  {
    location: "Kankarbagh",
    Demand: "1.2",
    Supply: "1.4",
  },
  {
    location: "Mahendru",
    Demand: "1",
    Supply: "0.7",
  },
  {
    location: "Boring road",
    Demand: "1",
    Supply: "0.8",
  },
  {
    location: "Barh",
    Demand: "1.2",
    Supply: "1.4",
  },
  {
    location: "Bihta",
    Demand: "1.7",
    Supply: "1.1",
  },
  {
    location: "Danapur",
    Demand: "1.4",
    Supply: "1.0", 
  }
  ]

  return (
    <div>
        <Header/>
         <div className="plot">
           <p>Water data of different location of Patna</p>
           <Chart Waterdata={Waterdata} width={900} height={400}/>
         </div>
    </div>
  )
}

export default Plots