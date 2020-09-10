import React, {useState, useEffect} from 'react';
import Card from './components/Card';
//import {getData} from './api/api';
import Axios from 'axios'; 
import './App.css'


function App() {
  
  const [launches, setLaunches] = useState([])
  const [successfulLanding, setSuccessfulLanding] = useState('')
  const [apiUrl, setApiUrl] = useState(`https://api.spacexdata.com/v3/launches?limit=100`)
  const [successfulLaunch, setSuccessfulLaunch] = useState('')
  const [launchYear, setLaunchYear] = useState('')

  const getData = async(apiUrl) =>{
    const result = await Axios.get(apiUrl) 
    setLaunches(result.data)
    //return result;
  }


  // const onChangeSuccessfulLanding = (e) =>{
  //   //setSuccessfulLanding(e)
  //   setApiUrl(`https://api.spacexdata.com/v3/launches?limit=100&land_success=${e}`)
    
  // }

  // const onChangeSuccessfulLaunch = (e) =>{
  //   //setSuccessfulLaunch(e)
  //   //console.log('setSuccessfulLaunch  --- e', e)
  //   setApiUrl(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${e}`)
    
  // }

  // const onChangeYear = (e) => {
  //   setApiUrl(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${e}`)
  // }
  
  useEffect( () => {
    getData(apiUrl)
  }, [apiUrl])

  //const { match } = props;
  const onYearChanged = (event) =>{
    event.preventDefault();
    console.log("sfasklkasdlkclk", event.target.value, event.target.name)
    
    if (event.target.name === 'year'){
      if(successfulLanding.toString() && successfulLaunch.toString()){
        setApiUrl(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${event.target.value}&land_success=${successfulLanding}&launch_success=${successfulLaunch}`)
      }
      else if(successfulLanding.toString()){
        setApiUrl(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${event.target.value}&land_success=${successfulLanding}`)
      }
      else  if(successfulLaunch.toString()){
        setApiUrl(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${event.target.value}&launch_success=${successfulLaunch}`)
      }
      else {
      setApiUrl(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${event.target.value}`)
      }
      setLaunchYear(`${event.target.value}`)
    }
    if (event.target.name === 'launch'){
      if(launchYear.toString() && successfulLanding.toString()){
        setApiUrl(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${launchYear}&launch_success=${event.target.value}&launch_success=${successfulLanding}`)
      }
      else if(launchYear.toString()){
        setApiUrl(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${launchYear}&launch_success=${event.target.value}`)
      }
      else  if(successfulLanding.toString()){
        setApiUrl(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${event.target.value}&land_success=${successfulLanding}`)
      }
      else {
      setApiUrl(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${event.target.value}`)
      }
      setSuccessfulLaunch(`${event.target.value}`)
    }

    if (event.target.name === 'land'){
      if(launchYear.toString() && successfulLaunch.toString()){
        setApiUrl(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${launchYear}&land_success=${event.target.value}&launch_success=${successfulLaunch}`)
      }
      else if(launchYear.toString()){
        setApiUrl(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${launchYear}&land_success=${event.target.value}`)
      }
      else  if(successfulLaunch.toString()){
        setApiUrl(`https://api.spacexdata.com/v3/launches?limit=100&land_success=${event.target.value}&launch_success=${successfulLaunch}`)
      }
      else {
      setApiUrl(`https://api.spacexdata.com/v3/launches?limit=100&land_success=${event.target.value}`)
      }
      setSuccessfulLanding(`${event.target.value}`)
    }
    

  }
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
                  <div className="btn-group btn-group-toggle p-2" data-toggle="buttons">
		                  <label className="btn btn-success">
    	                  <input type="radio" name="year" id="option1"  value={'2006'} onClick={(e) => onYearChanged(e)}/> 2006
		                  </label>
	                </div>
                  <div className="btn-group btn-group-toggle p-2" data-toggle="buttons">
		                  <label className="btn btn-success">
    	                  <input type="radio" name="year" id="option1"  value={'2007'} onClick={(e) => onYearChanged(e)}/> 2007
		                  </label>
	                </div>
                  <br/>
                  <div className="btn-group btn-group-toggle p-2" data-toggle="buttons">
		                  <label className="btn btn-success">
    	                  <input type="radio" name="year" id="option1"  value={'2008'} onClick={(e) => onYearChanged(e)}/> 2008
		                  </label>
	                </div>
                  <div className="btn-group btn-group-toggle p-2" data-toggle="buttons">
		                  <label className="btn btn-success">
    	                  <input type="radio" name="year" id="option1"  value={'2009'} onClick={(e) => onYearChanged(e)}/> 2009
		                  </label>
	                </div>
                  <br/>

                  <div className="btn-group btn-group-toggle p-2" data-toggle="buttons">
		                  <label className="btn btn-success">
    	                  <input type="radio" name="year" id="option1"  value={'2010'} onClick={(e) => onYearChanged(e)}/> 2010
		                  </label>
	                </div>
                  <div className="btn-group btn-group-toggle p-2" data-toggle="buttons">
		                  <label className="btn btn-success">
    	                  <input type="radio" name="year" id="option1"  value={'2011'} onClick={(e) => onYearChanged(e)}/> 2011
		                  </label>
	                </div>
                  <br/>

                  <div className="btn-group btn-group-toggle p-2" data-toggle="buttons">
		                  <label className="btn btn-success">
    	                  <input type="radio" name="year" id="option1"  value={'2012'} onClick={(e) => onYearChanged(e)}/> 2012
		                  </label>
	                </div>
                  <div className="btn-group btn-group-toggle p-2" data-toggle="buttons">
		                  <label className="btn btn-success">
    	                  <input type="radio" name="year" id="option1"  value={'2013'} onClick={(e) => onYearChanged(e)}/> 2013
		                  </label>
	                </div>
                  <br/>

                  <div className="btn-group btn-group-toggle p-2" data-toggle="buttons">
		                  <label className="btn btn-success">
    	                  <input type="radio" name="year" id="option1"  value={'2014'} onClick={(e) => onYearChanged(e)}/> 2014
		                  </label>
	                </div>
                  
                  <div className="btn-group btn-group-toggle p-2" data-toggle="buttons">
		                  <label className="btn btn-success">
    	                  <input type="radio" name="year" id="option1"  value={'2015'} onClick={(e) => onYearChanged(e)}/> 2015
		                  </label>
	                </div>
                  <br/>


                  <div className="btn-group btn-group-toggle p-2" data-toggle="buttons">
		                  <label className="btn btn-success">
    	                  <input type="radio" name="year" id="option1"  value={'2016'} onClick={(e) => onYearChanged(e)}/> 2016
		                  </label>
	                </div>
                 
                  <div className="btn-group btn-group-toggle p-2" data-toggle="buttons">
		                  <label className="btn btn-success">
    	                  <input type="radio" name="year" id="option1"  value={'2017'} onClick={(e) => onYearChanged(e)}/> 2017
		                  </label>
	                </div>
                  <br/>

                  <div className="btn-group btn-group-toggle p-2" data-toggle="buttons">
		                  <label className="btn btn-success">
    	                  <input type="radio" name="year" id="option1"  value={'2018'} onClick={(e) => onYearChanged(e)}/> 2018
		                  </label>
	                </div>
                 
                  <div className="btn-group btn-group-toggle p-2" data-toggle="buttons">
		                  <label className="btn btn-success">
    	                  <input type="radio" name="year" id="option1"  value={'2019'} onClick={(e) => onYearChanged(e)}/> 2019
		                  </label>
	                </div>
                  <br/>

                  <div className="btn-group btn-group-toggle p-2" data-toggle="buttons">
		                  <label className="btn btn-success">
    	                  <input type="radio" name="year" id="option1"  value={'2020'} onClick={(e) => onYearChanged(e)}/> 2020
		                  </label>
	                </div>
                </div>
                
                <h6>Successful Launch</h6>
                <hr/>
                <div className="text-center"> 
                  <div className="btn-group btn-group-toggle p-2" data-toggle="buttons">
		                  <label className="btn btn-success">
    	                  <input type="radio" name="launch" id="option1"  value={'true'} onClick={(e) => onYearChanged(e)}/> True
		                  </label>
	                </div>
                  <div className="btn-group btn-group-toggle p-2" data-toggle="buttons">
		                  <label className="btn btn-success">
    	                  <input type="radio" name="launch" id="option1"  value={'false'} onClick={(e) => onYearChanged(e)}/> False
		                  </label>
	                </div>
                  
                  <br/>
                </div>
                <h6>Successful Landing</h6>
                <hr />
                <div className="text-center"> 
                  <div className="btn-group btn-group-toggle p-2" data-toggle="buttons">
		                  <label className="btn btn-success">
    	                  <input type="radio" name="land" id="option1"  value={'true'} onClick={(e) => onYearChanged(e)}/> True
		                  </label>
	                </div>
                  <div className="btn-group btn-group-toggle p-2" data-toggle="buttons">
		                  <label className="btn btn-success">
    	                  <input type="radio" name="land" id="option1"  value={'false'} onClick={(e) => onYearChanged(e)}/> False
		                  </label>
	                </div>
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
      <div>
        
      </div>
    </div>
  
   
  );
}

export default App;
