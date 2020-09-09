import React, {useState, useEffect} from 'react';
import Card from './components/Card';
//import {getData} from './api/api';
import Axios from 'axios'; 
import './App.css'

function App() {
  
  const [launches, setLaunches] = useState([])
  const [successfulLanding, setSuccessfulLanding] = useState(false)
  const [apiUrl, setApiUrl] = useState(`https://api.spacexdata.com/v3/launches?limit=100`)
  const [successfulLaunch, setSuccessfulLaunch] = useState(false)

  const getData = async(apiUrl) =>{
    const result = await Axios.get(apiUrl) 
    setLaunches(result.data)
    return result;
  }


  const onChangeSuccessfulLanding = (e) =>{
    setSuccessfulLanding(e)
    setApiUrl(`https://api.spacexdata.com/v3/launches?limit=100&land_success=${successfulLanding}`)
    
  }

  const onChangeSuccessfulLaunch = (e) =>{
    setSuccessfulLaunch(e)
    setApiUrl(`https://api.spacexdata.com/v3/launches?limit=100&successfulLaunch=${successfulLaunch}`)
    
  }

  const onChangeYear = (e) => {
    setApiUrl(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${e}`)
  }
  
  useEffect( () => {
    getData(apiUrl)
  }, [apiUrl])


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
                  <button className="btn btn-success m-2" onClick={() => onChangeYear(2006)}>2006</button>
                  <button className="btn btn-success m-2" onClick={() => onChangeYear(2007)}>2007</button>
                  <br/>
                  <button className="btn btn-success m-2" onClick={() => onChangeYear(2008)}>2008</button>
                  <button className="btn btn-success m-2" onClick={() => onChangeYear(2009)}>2009</button>
                  <br/>
                  <button className="btn btn-success m-2" onClick={() => onChangeYear(2010)}>2010</button>
                  <button className="btn btn-success m-2" onClick={() => onChangeYear(2011)}>2011</button>
                  <br/>
                  <button className="btn btn-success m-2" onClick={() => onChangeYear(2012)}>2012</button>
                  <button className="btn btn-success m-2" onClick={() => onChangeYear(2013)}>2013</button>
                  <br/>
                  <button className="btn btn-success m-2" onClick={() => onChangeYear(2014)}>2014</button>
                  <button className="btn btn-success m-2" onClick={() => onChangeYear(2015)}>2015</button>
                  <br/>
                  <button className="btn btn-success m-2" onClick={() => onChangeYear(2016)}>2016</button>
                  <button className="btn btn-success m-2" onClick={() => onChangeYear(2017)}>2017</button>
                  <br/>
                  <button className="btn btn-success m-2" onClick={() => onChangeYear(2018)}>2018</button>
                  <button className="btn btn-success m-2" onClick={() => onChangeYear(2019)}>2019</button>
                  <br/>
                  <button className="btn btn-success m-2" onClick={() => onChangeYear(2020)}>2020</button>
                  <br/>
                </div>
                
                <h6>Successful Launch</h6>
                <hr/>
                <div className="text-center"> 
                  <button className="btn btn-success m-2" onClick={() => onChangeSuccessfulLaunch(true)}>True</button>
                  <button className="btn btn-success m-2" onClick={() => onChangeSuccessfulLaunch(false)}>False</button>
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
