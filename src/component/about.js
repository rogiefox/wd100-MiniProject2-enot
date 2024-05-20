import aboutImage from "../img/about-img.jpg"
import aboutHeader from "../img/about-header.jpg"
import aboutImage2 from "../img/about-img1.jpg"

const About = () => {
    return (
        <>
            <img src={aboutHeader} alt="" className="w-100" height={600}/>
            <div className="container">
                <h1 className="text-center mt-4">About Us</h1><br />
                <div className="d-flex justify-content-center align-items-center">
                    <img src={aboutImage} alt="" className="w-50 rounded" />
                    <p className="ms-5"> <h2 className="text-center">MOTO INSIGHT OVERVIEW</h2><br />The Moto InSight is a cutting-edge innovation in the world of motorcycles, blending advanced technology with sleek design to offer an unparalleled riding experience. This motorcycle stands out with its powerful engine, providing remarkable speed and acceleration, while maintaining excellent fuel efficiency. Its state-of-the-art onboard computer system includes GPS navigation, real-time diagnostics, and customizable ride modes, ensuring both safety and convenience for riders. The ergonomic design and high-quality materials ensure comfort on long journeys, while the striking aesthetic appeals to modern sensibilities. With the Moto In Sight, riders can expect a harmonious balance of performance, technology, and style, making it a leader in the next generation of motorcycles.</p>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <p className="me-5"> <h2 className="text-center">TECHNOLOGY, INNOVATION DRIVEN </h2><br />The Moto Insight represents the pinnacle of technology and innovation in the motorcycle industry, driven by a relentless pursuit of excellence. At its core, the Moto Insight features a cutting-edge engine that combines high performance with remarkable efficiency, utilizing advanced materials and engineering techniques. The integration of smart technology is evident in its sophisticated onboard computer system, which offers features such as adaptive ride modes, real-time diagnostics, and seamless connectivity with mobile devices.</p>
                    <img src={aboutImage2} alt="" className="w-50 rounded" />
                </div>
            </div>
        </>
    )
}

export default About;
