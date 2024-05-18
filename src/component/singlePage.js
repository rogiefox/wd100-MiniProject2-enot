import {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";

const FullDescription = () => {
    let location = useLocation();
    let item = Number(location.state);
   

    let [data, setMotors] = useState([]);
    useEffect(() =>{
        let motorList = async () => {
            var motorName = ' '
            let motors = await fetch('https://api.api-ninjas.com/v1/motorcycles?make=' + motorName + '&offset=0',
                {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': 'ZVlyPWQGRd4nMyeZgetlDQ==KNkMdZfasiem8Yn3'
                    }
                }
            );
            if (!motors.ok){
                throw new Error(`HTTP error! status: ${motorName.status}`);
            }
            let motorResults = await motors.json();
            console.log(motorResults);
            setMotors(motorResults[item]); 
        }
        motorList();
    }, []);
    return(
        <>

                    <div className="col-md-12">
                        <div className="card">
                            <img src={`../img/${data.model}.jpg`} alt="" className="w-100 object-fit rounded" height={600} />
                            <div className="card-body">
                                <h1>{data.make}</h1>
                                Model:
                                <h2>{data.model}</h2>
                                Displacement:
                                <h3>{data.displacement}</h3>
                                Engine:
                                <h3>{data.engine}</h3>
                                Fuel Capacity:
                                <h3>{data.fuel_capacity}</h3>
                                Power:
                                <h3>{data.power}</h3>
                                Top Speed:
                                <h3>{data.top_speed}</h3>
                                Torque:
                                <h3>{data.torque}</h3>
                                Year Model:
                                <h3>{data.year}</h3>
                            </div>
                            <Link to="/" className="card-footer bg-transparent border-0 ">
                                <Button variant="outline-warning text-dark fw-bold">Go back to selection</Button>
                            </Link>
                        </div>
                        
                    </div>
            
        </>
    )
}

export default FullDescription;


