import './Footer.css';
import Pic from './footerpng.png';


function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

const Footer = props => (
<div>
    <div className="cardss">
        <div className="row justify-content-center">
            <div className="col-md-8">
                
                <div className="row">
                    <div className="col-md-6">
                        <div className="boxss">
                            <h4>Help us make cool things!</h4> <a href="#" className="acs">
                                <p>Check our open positions</p>
                            </a><br/>
                            <h4 className="bussinesshours popup" onPointerOver={myFunction} onPointerOut={myFunction}>Business Hours..
                            <span class="popuptext" id="myPopup">Mon:	8:30 AM – 5:30 PM<br/>
                                                            Tue:	8:00 AM – 5:30 PM<br/>
                                                            Wed:	8:00 AM – 5:30 PM<br/>
                                                            Thu:	8:00 AM – 5:30 PM<br/>
                                                            Fri:	8:00 AM – 5:30 PM<br/>
                                                            Sat:	8:00 AM – 5:30 PM<br/>
                                                            Sun:	8:00 AM – 6:00 PM</span></h4>
                        </div>
                    </div>
                    <div className="col-md-6 pb-5">
                        <div className="boxss">
                            <p className="mb-0">Our Main Office</p>
                            <h5>Ranjland estate, Marandagahamula, 11260, Sri Lanka</h5><br/>
                            <p className="mb-0">Phone</p>
                            <h5>077 364 2530 | 0312 248 625</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
            <div className="picfooter"> <img src={Pic} width="150px" height="150px"/> </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-2">
                
            </div>
            <div className="col-md-7 d-flex justify-content-center">
                <div className="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3"> <a href="#" className="acs">About</a> </div>
                <div className="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3"> <a href="#" className="acs">Work</a> </div>
                <div className="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3"> <a href="#" className="acs">Blog</a> </div>
                <div className="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3"> <a href="#" className="acs">Careers</a> </div>
                <div className="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3"> <a href="#" className="acs">Contact</a> </div>
            </div>
            
        </div>
    </div>
</div>

);

export default Footer;