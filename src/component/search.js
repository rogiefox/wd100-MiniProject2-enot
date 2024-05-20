import {Form, Button} from "react-bootstrap";
import { useState, useEffect } from "react";
import {Link, useLocation} from "react-router-dom";

const SearchItems = () => {

    let [searchMotors, resultMotors] = useState([]);
    // useEffect(() => {
    //     let searchItem = async () => {
    //         var name = ' '
    //         let result = await fetch('https://api.api-ninjas.com/v1/motorcycles?make=' + name + '&offset=0',
    //             {
    //                 method: 'GET',
    //                 headers: {
    //                     'X-Api-Key': 'ZVlyPWQGRd4nMyeZgetlDQ==KNkMdZfasiem8Yn3'
    //                 }
    //             }
    //         );
    //         if (!result.ok){
    //             throw new Error(`HTTP error! status: ${result.status}`);
    //         }
    //         let motorResults = await result.json();
    //         console.log(motorResults);
    //         resultMotors(motorResults);     
    //     }
    //     searchItem();   
    // },[]);

    let motorListFilter = () => {
        let searchName = document.getElementById('searchMotor').value;
        console.log(searchName)
        if (searchName == 0) {
            searchName = " " + "&offset=0";
        }
        console.log(searchName);
        let searchMotor1 = async (searchName) => {
            console.log(searchName);
            var name = searchName
            let result1 = await fetch('https://api.api-ninjas.com/v1/motorcycles?make=' + name,
                {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': 'ZVlyPWQGRd4nMyeZgetlDQ==KNkMdZfasiem8Yn3'
                    } 
                }
            );
            if (!result1.ok){
                throw new Error(`HTTP error! status: ${result1.status}`);
            }
            let searchResultFilter = await result1.json();
            console.log(searchResultFilter);
            resultMotors(searchResultFilter); 
        }
        searchMotor1(searchName);
    }
    return (
        <>
            <div className="container mt-5">
                <Form className="d-flex justify-content-start align-items-start mt-5">
                    <Form.Control
                    id="searchMotor"
                    type="search"
                    placeholder="Search"
                    className="me-2 w-25 bg-tertiary text-dark"
                    aria-label="Search"
                    />
                    <Button variant="outline-secondary text-dark" onClick={() => motorListFilter()}>Search</Button>
                </Form>
            </div>
            {
                searchMotors.map((data, index) =>
                
                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={`../img/${data.model}.jpg`} alt="" className="w-100 object-fit rounded" height={300} />
                            <div className="card-body">
                                <h3 className="card-title"> Maker: {data.make}</h3>
                                <h4 className="card-text">Model: {data.model}</h4>
                            </div>
                            <Link to="/search" className="card-footer bg-transparent border-0" state={index}>
                               <Button variant="outline-warning text-dark fw-bold">Learn More</Button>
                            </Link>
                        </div>
                        
                    </div>
                    

                )
            }    
        </>
    )

}

export default SearchItems;
