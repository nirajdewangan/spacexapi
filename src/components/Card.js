import React from "react";

export default function Card({ launche }) {
  const { mission_name, flight_number, links, mission_id, launch_year, launch_success, rocket } = launche;
  if(rocket.first_stage.cores.pop()) {
    //console.log(rocket.first_stage.cores.pop())
  }
  console.log('launch_success', launch_success)
  
  return (
    <>
      <div className="col-md-3 mb-4">
        <div className="card">
         <div className="imgcontainer"> <img
            className="card-img-top"
            src={links.mission_patch}
            alt={mission_name}
            width="80%"
            style={{margin:"auto"}}
          />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              {mission_name} #{flight_number}
            </h5>
            <p className="card-text"><b>Mission ids:</b></p>
            <ul>
            {mission_id.length > 0 ? mission_id.map((id , i) => {
               return <li key={i}>{id}</li>
            }): <li>'NA'</li>} 
            </ul>
            <p className="card-text"><b>Launch Year:</b> {launch_year}</p>
            <p className="card-text"><b>Successful Launch:</b> {launch_success === true ? 'True': 'False'}</p>
            <p className="card-text"><b>Successful Landing:</b>  {!rocket.first_stage.cores[rocket.first_stage.cores.length -1]?.land_success ? 'False': 'True'} </p>
            
          </div>
        </div>
      </div>
    </>
  );
}
