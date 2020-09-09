import React, {useState, useEffect} from 'react';
import Card from './components/Card';
//import {getData} from './api/api';
import Axios from 'axios'; 
import './App.css'

function App() {
  
  //const [apiData, setApiData] = useState({})
  const [error, setError] = useState(false)
  const [launches, setLaunches] = useState([])
  const [successfulLanding, setSuccessfulLanding] = useState(false)
  const [successfulLaunch, setSuccessfulLaunch] = useState(false)

  const apiUrl = `https://api.spacexdata.com/v3/launches?limit=100`;  
  const getData = async(url) =>{
    const result = await Axios.get(url) 
    //setApiData(result)
    setLaunches(result.data)
    return result;
  }


  const onChangeSuccessfulLanding = (e) =>{
    setSuccessfulLanding(e)
    
  }

  const onChangeSuccessfulLaunch = (e) =>{
    setSuccessfulLaunch(e)
    
  }
  
  useEffect( () => {
    getData(apiUrl)
  }, [])


  return (
    <div className="App">
     <div className="container-fluid">
        <div className="row">
            <div className="col-md-2 text-center" id="filter">
                <h3>Filter</h3>                
                <br/>
                
                <h6>Launch Date</h6>
                <hr/>
                <div className="text-center"> 
                  <button className="btn btn-success m-2">2006</button>
                  <button className="btn btn-success m-2">2007</button>
                  <br/>
                  <button className="btn btn-success m-2">2006</button>
                  <button className="btn btn-success m-2">2007</button>
                  <br/>
                  <button className="btn btn-success m-2">2006</button>
                  <button className="btn btn-success m-2">2007</button>
                  <br/>
                </div>
                
                <h6>Successful Launch</h6>
                <hr/>
                <div className="text-center"> 
                  <button className="btn btn-success m-2">True</button>
                  <button className="btn btn-success m-2">False</button>
                  <br/>
                </div>
                <h6>Successful Landing</h6>
                <hr />
                <div className="text-center"> 
                  <button className="btn btn-success m-2" onClick={() => onChangeSuccessfulLanding(true)}>True</button>
                  <button className="btn btn-success m-2" onClick={() => onChangeSuccessfulLanding(false)}>False</button>
                  <br/>
                </div>
            </div>
            <div className="col-md-10">
              <div className="row">
              { launches!==[] && launches.map( (launche, index) =>{
                return <Card key={index} launche={launche} />
              })}
                
                

              </div>
            </div>
        </div>
      </div>
    </div>
  
   
  );
}

export default App;
