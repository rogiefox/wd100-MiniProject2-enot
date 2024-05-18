import imglogo from "./../img/logo.png"

const Footer = (props) => {
    return (
        <>
            <footer class="bg-dark text-white pt-5 pb-4 mt-5">
                <div class="container text-center text-md-left">
                    <div class="row text-center text-md-left">
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-start">
                    <p>
                        <img src={imglogo} className="rounded" alt="" width={300} height={200} />
                    </p>   
                </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-start">
            <h5 class="text-uppercase mb-4 font-weight-bold" style={{color: "#ff7200"}}>
                Brands
            </h5>
            <p>
                <a href="#" class="text-white" style={{textDecoration: "none"}}>Boom Tikes</a>
            </p>
            <p>
                <a href="#" class="text-white" style={{textDecoration: "none"}}>Boss Hoss</a>
            </p>
            <p>
                <a href="#" class="text-white" style={{textDecoration: "none"}}>Brough Superior</a>
            </p>
            <p>
                <a href="#" class="text-white" style={{textDecoration: "none"}}>CF Moto</a>
            </p>
            <p>
                <a href="#" class="text-white" style={{textDecoration: "none"}}>California Scooter</a>
            </p>
            <p>
                <a href="#" class="text-white" style={{textDecoration: "none"}}>Kawasaki</a>
            </p>
            <p>
                <a href="#" class="text-white" style={{textDecoration: "none"}}>Honda</a>
            </p>
            <p>
                <a href="#" class="text-white" style={{textDecoration: "none"}}>Suzuki</a>
            </p>
        </div>
        
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 text-start">
            <h5 class="text-uppercase mb-4 font-weight-bold" style={{color: "#ff7200"}}>
                Links
            </h5>
            <p>
                <a href="#" class="text-white" style={{textDecoration: "none"}}>FAQ</a>
            </p>
            <p>
                <a href="#" class="text-white" style={{textDecoration: "none"}}>Become a Partner</a>
            </p>
           
            
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-start">
            <h5 class="text-uppercase mb-4 font-weight-bold" style={{color: "#ff7200"}}>
                Contacts
            </h5>
            <p class="fst-italic">
                <i class="fa-solid fa-house"></i> Carmen, Cebu
            </p>
            <p class="fst-italic">
                <i class="fa-solid fa-envelope"></i> motoinsight@gmail.com
            </p>
            <p class="fst-italic">
                <i class="fa-solid fa-phone"></i> +63 918-693-4954
            </p>
            <p class="fst-italic">
                <i class="fa-solid fa-fax"></i> +01 335 633 77
            </p>
        </div>

    </div>
    <hr class="mb-4"></hr>
    <div class="row align-items-center text-start">

        <div class="col-md-7 col-lg-8">
            <p class="fst-italic">
                Copyright @2024 All Rights Reserved
            </p>
        </div>
        <div class="col-md-5 col-lg-4">
            <div class="text-center textmd-right">
                <ul class="list-unstyled list-inline text-end">
                    <li class="list-inline-item">
                        <a href="#" class="btn-floating btn-sm text-white"><i class="fa-brands fa-facebook"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" class="btn-floating btn-sm text-white"><i class="fa-brands fa-instagram"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" class="btn-floating btn-sm text-white"><i class="fa-brands fa-tiktok"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" class="btn-floating btn-sm text-white"><i class="fa-brands fa-twitter"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>


</div>

</footer>

        </>
    )
}

export default Footer;