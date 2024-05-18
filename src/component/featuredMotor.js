import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const FeaturedMotor = () => {
    let x = 0;
    let [allMotors, setMotors] = useState([]);
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
            setMotors(motorResults); 
        }
        motorList();
    }, []);

    return (
        <>
            {
                allMotors.map((data, index) =>
                
                    <div className="col-md-4">
                        <div className="card">
                            <img src={`../img/${data.model}.jpg`} alt="" className="w-100 object-fit rounded" height={300} />
                            <div className="card-body">
                                <h2 className="card-title"> Maker: {data.make}</h2>
                                <h4 className="card-text">Model: {data.model}</h4>
                            </div>
                            <Link to="/fulldetail" className="card-footer bg-transparent border-0" state={index}>
                               <Button variant="outline-warning text-dark fw-bold">Learn More</Button>
                            </Link>
                        </div>
                        
                    </div>
                    

                )
            }    

        </>
    )
}
export default FeaturedMotor;



