import FeaturedMotor from "./featuredMotor";
import motorHeader from "./../img/header.jpg"
import SearchItems from "./search";


const MainPage = () => {
    return (
        <>
            
            <img src={motorHeader} alt="" className="w-100 g-2"/>
            <SearchItems></SearchItems>
            <div className="container mt-3">
                <div className="row g-5">
                    <FeaturedMotor></FeaturedMotor>
                </div>
            </div>

        </>
    )
}

export default MainPage;
