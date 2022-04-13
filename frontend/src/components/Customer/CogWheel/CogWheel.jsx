import Cog from './cogwheel.png';
import './CogWheel.css';

const CogWheel = props => (
    <div class="container">
        <br/><br/>

    <div class="row">
    <div class="col-sm-6">
        <div class="card">
        <div class="card-body">
            <h4 class="card-title">A history of excellence</h4>
            <p class="card-text">Established in 1994, our founding principle was to provide the automobile owners of Sri Lanka with the finest total auto care solutions on the market. To this day, over two decades later, this remains our core objective and, as a result, Auto Dulaj has emerged as the island’s leader in automobile services. At the heart of each and every one of our employee’s work ethic is a customer-centric approach dedicated to delivering our clients with the best car care solutions. It is this commitment that has facilitated our growth – resulting in Auto Dulaj being recognized as a leading car care solutions and car maintenance service provider with the largest customer base to date.</p>
            <a href="#" class="btn btn-primary">More</a><br/><br/><br/>
            <img src="https://i.pinimg.com/736x/ab/78/d9/ab78d90d2ec18c66b06bdbe157dfb356--s-cars-car-dealerships.jpg" class="card-img-top" alt="..."/>
        </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="card" style={{width: "18rem;"}}>
        <img src="https://media.istockphoto.com/photos/hands-of-car-mechanic-picture-id490048372?k=20&m=490048372&s=612x612&w=0&h=lDdtPa4f-2tXtI_n2zxU61qa1xfbOQ7SND_a5m3P2dk=" class="card-img-top" alt="..."/>
        <div class="card-body">
            <h4 class="card-title">Innovation-driven cutting-edge technology and a highly-skilled workforce</h4>
            <p class="card-text">Our drive towards excellence over the last two and a half decades has resulted in the establishment of over 40 centers island-wide, including professional automobile workshops and body shops in Rathmalana, Maharagama, Kandy, Gampaha, Matara, and Pepiliyana. Additionally, we have over 1000 employees – each of them trained and empowered with the latest trends and techniques in auto care services.

Our regularly updated state-of- the-art equipment present at all our sites, powered by our skilled personnel, has a proven track-record of delivering the finest preventative maintenance and care to all our clients – this includes expertise in servicing the very latest vehicle types as well. Leveraging our commitment to excellence, we have entered into strategic partnerships with many leading global brands of car products, like Toyota, Kia, 3M, and the Kobe Motor Company – contributing more to our goal of providing our clients with the very best services..</p>
        </div>
        </div>
    </div>
    <div class="col-sm-6" style={{marginTop:"20px", width:"auto"}}>
        <div class="card">
        <div class="card-body">
            <h4 class="card-title">A diverse portfolio of services with global recognition</h4>
            <p class="card-text">Whether you are looking for a quick car wash, car servicing, 4X4 servicing, or more comprehensive car detailing and repair services, Auto Dulaj has it all. Our diverse services go well beyond borders – evidenced by our presence in the United Kingdom where we have been ]very successful in operating two branches over the last few years, with plans to expand our global footprint further<br/>We value your time, which is why you can always rely on our consistent, high quality products as well as our expertise gained through years of development and improvement. We offer you complete solutions, hence our market leading coatings come with all the necessary accessories and illustrated instructions so that you can easily achieve the best results. Our range is offered in superior, custom designed packaging to provide clear information and a consistent brand image.</p>
            <a href="#" class="btn btn-primary">More</a>
        </div>
        </div>
    </div>

    </div>

    <br/><br/>
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img style={{height:"250px"}} src="https://wallpaperaccess.com/full/2056564.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Services</h5>
        <p class="card-text">The basic service offering, it meets all your typical automotive needs effective. <br/>A value added service package that is offered to meet all your hybrid demand, whatever it maybe.<br/>The most comprehensive auto service offering bundled up with mechanical and electrical inspection as well as superior interior and exterior detailing.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img style={{height:"250px"}} src="https://thumbs.dreamstime.com/b/car-detailing-hands-orbital-polisher-auto-repair-shop-selective-focus-car-detailing-man-orbital-polisher-auto-108109847.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Maintenance</h5>
        <p class="card-text">Ultra-modern automobile workshops manned by experienced professionals, provide an extensive range of auto repair and replacement service from Automotive Diagnostics to complete Engine overhaul.<br/>best automobile care specialists – with state-of- the-art service centers located across the country. Each center is extremely committed to providing our clients with the very best services.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img style={{height:"250px"}} src="https://cdn.motor1.com/images/mgl/GM2P8/s1/vehicle-service-contracts.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Spare Parts</h5>
        <p class="card-text">The consistent orientation towards original quality of the original equipment and the continual further development of the services have made the DT Spare Parts brand what it is today – a leading product brand in the automotive industry as an alternative to original parts of the manufacturer brands.<br/>Yamaha, Toyota, Bosch, Wurth, Mobile1, 3M and many more brands.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
    <br/><br/>
    <hr style={{border:"5px solid"}} ></hr>
    <br/><br/>

    <div class="row">
        <div class="col-sm"><img src={Cog} className="cogwheel"/><h6 className="cogText">Mechanical Repair, Maintenance and Spare Part Replacement</h6></div>
        <div class="col-sm"><img src={Cog} className="cogwheel"/><h6 className="cogText">2WD, 4WD Drive Shaft Repairs</h6></div>
    </div><br/>
    <div class="row">
        <div class="col-sm"><img src={Cog} className="cogwheel"/><h6 className="cogText">Automotive Diagnostic / Scanning – 12v, 24v (19) (Check Engine Con)</h6></div>
        <div class="col-sm"><img src={Cog} className="cogwheel"/><h6 className="cogText">Automotive Electric Work Including ECU Repairs Air-Conditioning, Heating And Climate Control Systems</h6></div>
    </div><br/>
    <div class="row">
        <div class="col-sm"><img src={Cog} className="cogwheel"/><h6 className="cogText">Steering Repairs And Maintenance Work</h6></div>
        <div class="col-sm"><img src={Cog} className="cogwheel"/><h6 className="cogText">Brake Systems Repairs – ABS / EDB Suspension Repairs And Upgrades Including ESC (Electronic Stability Control)</h6></div>
    </div><br/>
    <div class="row">
        <div class="col-sm"><img src={Cog} className="cogwheel"/><h6 className="cogText">Complete Engine Overhaul</h6></div>
        <div class="col-sm"><img src={Cog} className="cogwheel"/><h6 className="cogText">Decarbonizing</h6></div>
    </div><br/>
    <div class="row">
        <div class="col-sm"><img src={Cog} className="cogwheel"/><h6 className="cogText">Emission Control And Engine Tune-Ups</h6></div>
        <div class="col-sm"><img src={Cog} className="cogwheel"/><h6 className="cogText">DPF (Diesel Particulate Filter)</h6></div>
    </div><br/>
    <div class="row">
        <div class="col-sm"><img src={Cog} className="cogwheel"/><h6 className="cogText">Radiator And Cooling System Repairs</h6></div>
        <div class="col-sm"><img src={Cog} className="cogwheel"/><h6 className="cogText">Auto / Manual Transmission Repairs</h6></div>
    </div><br/>
    <div class="row">
        <div class="col-sm"><img src={Cog} className="cogwheel"/><h6 className="cogText">Ignition Repairs And Timing Corrections</h6></div>
        <div class="col-sm"><img src={Cog} className="cogwheel"/><h6 className="cogText">Vehicle Performance Upgrades – (Racing, Rally Or Off Road</h6></div>
    </div><br/>
    <div class="row">
        <div class="col-sm"><img src={Cog} className="cogwheel"/><h6 className="cogText">Tinkering And Collision Repairs</h6></div>
        <div class="col-sm"><img src={Cog} className="cogwheel"/><h6 className="cogText">Body Paint Works</h6></div>
    </div><br/>
    <div class="row">
        <div class="col-sm"><img src={Cog} className="cogwheel"/><h6 className="cogText">Fiber And Plastic Work</h6></div>
        <div class="col-sm"><img src={Cog} className="cogwheel"/><h6 className="cogText">Upgrades And Sticker Work</h6></div>
    </div><br/>
    <hr style={{border:"5px solid"}} ></hr>
    </div>
);

export default CogWheel;