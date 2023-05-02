import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faFile, faMicrophone, faBars, } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faTwitter, faInstagram, faGoogle} from "@fortawesome/free-brands-svg-icons"
import "./app.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { HashLink } from 'react-router-hash-link';
import Overview from "./components/overview/Overview";
import Speaker from "./components/speakers/Speakers";
import Program from './components/program/Program';
import Sponsor from './components/sponsor/Sponsor';
import speaker1 from "./images/speakers-img1.jpg";
import speaker2 from "./images/speakers-img2.jpg";
import speaker3 from "./images/speakers-img3.jpg";
import speaker4 from "./images/speakers-img4.jpg";
import speaker5 from "./images/speakers-img5.jpg";
import program1 from "./images/firstday-1.jpg";
import program2 from "./images/firstday-2.jpg";
import program3 from "./images/firstday-3.jpg";
import Program4  from "./images/secondday-1.jpg";
import Program5  from "./images/secondday-2.jpg";
import Program6  from "./images/secondday-3.jpg";
import Program7  from "./images/thirdday-1.jpg";
import Program8  from "./images/thirdday-2.jpg";
import Program9  from "./images/thirdday-3.jpg";
import sponsor1 from "./images/sponsor-img1.jpg";
import sponsor2 from "./images/sponsor-img2.jpg";
import sponsor3 from "./images/sponsor-img3.jpg";
import sponsor4 from "./images/sponsor-img4.jpg";
import aboutimg from "./images/overview-img.jpg";
import { useState } from 'react';
function App() {
  const [tab, setTab] = useState("tab1");
  const switchTab = (tab)=>{
    setTab(tab);
  }
  return (
    <>
      
      {/* navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <HashLink className="navbar-brand" to="#home">event</HashLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars}/>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <HashLink className="nav-link"  aria-current="page" smooth  to="#home">intro</HashLink>
              <HashLink className="nav-link" smooth  to="#overview">overview</HashLink> 
              <HashLink className="nav-link" smooth  to="#speakers">speakers</HashLink>
              <HashLink className="nav-link" smooth  to="#programs">programs</HashLink>
              <HashLink className="nav-link" smooth  to="#register">register</HashLink>
              <HashLink className="nav-link" smooth  to="#venue">venue</HashLink>
              <HashLink className="nav-link" smooth  to="#sponsors">sponsors</HashLink>
              <HashLink className="nav-link" smooth  to="#contact">contact</HashLink>
            </div>
          </div>
        </div>
      </nav>


      {/* header */}
      <div className="header" id="home">
        <div className="header-info" >
          <p>july 22 - 25 in san francisco, CA</p>
          <h3>web design conference</h3>
          <div className="buttons">
            <button className="learn">learn more</button>
            <button className="register-but">register now</button>
          </div>
        </div>
      </div>


      {/* about us */}
      <div className="container">
        <div className="about row">
          <div className="about-info col-md-6 col-s-12">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
          <div className="about-img col-md-6 col-s-12">
            <img src={aboutimg} alt="about"/>
          </div>
        </div>
      </div>


      {/* overview section */}
      <div className="overview-sec" id="overview">
        <div className="container">
          <div className="row">
            <Overview icon={<FontAwesomeIcon icon={faUsers}/>} title="520 subscribers" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever" />
            <Overview icon={<FontAwesomeIcon icon={faFile}/>} title="24 programs" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever" />
            <Overview icon={<FontAwesomeIcon icon={faMicrophone}/>} title="11 speakers" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever" />
          </div>
        </div>
      </div>

      {/* about us */}
      <div className="container">
        <div className="video row">
          <div className="video-info col-md-6 col-s-12">
            <p>watch video </p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
          <div className="video-iframe col-md-6 col-s-12">
            <iframe src="https://www.youtube.com/embed/AE71olbqNlE" title="aa"></iframe>
          </div>
        </div>
      </div>


      {/* speakers section */}
      <div className="container">
        <div className="speakers-info" id="speakers">
          <h3>creative <span>speakers</span></h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        <div className="speakers">
          
        <Swiper
          spaceBetween={50}
          slidesPerView={3.5}
        >
          <SwiperSlide><Speaker img={speaker1} alt="speaker1" name="sarah" job="ui & ux designer"/></SwiperSlide>
          <SwiperSlide><Speaker img={speaker2} alt="speaker2" name="omar" job="font-end developer"/></SwiperSlide>
          <SwiperSlide><Speaker img={speaker3} alt="speaker3" name="mona" job="back-end developer"/></SwiperSlide>
          <SwiperSlide><Speaker img={speaker4} alt="speaker4" name="ahmed" job="flutter developer"/></SwiperSlide>
          <SwiperSlide><Speaker img={speaker5} alt="speaker5" name="samar" job="photoshop designer"/></SwiperSlide>
        </Swiper>
          
        </div>
      </div>


      {/* program section */}
      <div className="container">
        <div className="programs-info" id="programs">
          <h3>our<span> programs</span></h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        <div className="tabs">
          <span style={{color: tab === "tab1"? "var(--light)": ""}} onClick={()=>switchTab("tab1")} className="first" >First Day</span>
          <span style={{color: tab === "tab2"? "var(--light)": ""}} onClick={()=>switchTab("tab2")} className="second" >Second Day</span>
          <span style={{color: tab === "tab3"? "var(--light)": ""}} onClick={()=>switchTab("tab3")} className="third" >Third Day</span>
        </div>
        <div className="programs">
          {tab === "tab2" ?
          <> 
            <Program img={Program4} alt={"program4"} time={"5:00 PM"} room={"room 314"} title={"back end"} author={"naira emad"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"}/>
            <Program img={Program5} alt={"program5"} time={"7:00 PM"} room={"room 250"} title={"flutter"} author={"mahmoud shady"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"}/>
            <Program img={Program6} alt={"program6"} time={"9:00 AM"} room={"room 118"} title={"javascript"} author={"mona osama"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"}/>
          </> 
          :  tab === "tab3"? 
        <>
          <Program img={Program7} alt={"program7"} time={"6:00 PM"} room={"room 934"} title={"python"} author={"ahmed morad"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"}/>
          <Program img={Program8} alt={"program8"} time={"2:00 PM"} room={"room 456"} title={"php"} author={"sama ahmed"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"}/>
          <Program img={Program9} alt={"program9"} time={"9:00 AM"} room={"room 256"} title={"bootstrap"} author={"youssef mohammed"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"}/>
        </>
        : <>
          <Program img={program1} alt={"program1"} time={"9:00 AM"} room={"room 320"} title={"introduction to design"} author={"sozy allam"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"}/>
          <Program img={program2} alt={"program2"} time={"12:00 PM"} room={"room 310"} title={"fullstack"} author={"ibrahim osama"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"}/>
          <Program img={program3} alt={"program3"} time={"10:00 AM"} room={"room 525"} title={"front end"} author={"zeyad mostafa"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"}/>
        </>
        }
        
        </div>
      </div>
          

      {/* register */}
      <div className="register" id="register">
        <div className="container">
          <div className="row">
            <div className="reg-info col-md-6 col-sm-12">
              <h3><span>register </span>here</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className="reg-form col-md-6 col-sm-12">
              <form>
                <input type="text" placeholder="first name"/>
                <input type="text" placeholder="last name"/>
                <input type="text" placeholder="phone number"/>
                <input type="email" placeholder="email"/>
                <input type="submit" value="register"/>
              </form>
            </div>
          </div>
        </div>
      </div>


      {/* accordion */}
      <div className="accordion">
        <div className="container">
          <div className="acc-head">
            <h3>do you have <span>question</span>?</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    what is responsive design?
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    what are latest UX developments?
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    what things about social media will be discussed?
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</div>
                </div>
              </div>
            </div>
        </div>
      </div>
      

      {/* venue */}
      <div className="venue" id="venue">
        <div className="container">
          <h3>Venue</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <div className="venue-info">
            <h5>new event</h5>
            <p>120 market street, suite 110</p>
            <p>san francisco, CA 10110</p>
            <p>tel: 01090909090</p>
          </div>
        </div>
      </div>

      {/* sponsors section */}
      <div className="sponsors" id="sponsors">
        <div className="container">
          <h3>our <span>sponsors</span></h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        
          <div className="row">
            <Sponsor src={sponsor1} alt={"sponsor1"}/>
            <Sponsor src={sponsor2} alt={"sponsor1"}/>
            <Sponsor src={sponsor3} alt={"sponsor1"}/>
            <Sponsor src={sponsor4} alt={"sponsor1"}/>
          </div>
        </div>
      </div>
      

      {/* contact us */}
      <div className="contact" id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-details col-md-6 col-sm-12">
              <h3>new <span>event</span></h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              <button>download</button>
            </div>
            <div className="touch col-md-6 col-sm-12">
              <h3>keep in touch</h3>
              <form>
                <input type="text" placeholder="name"></input>
                <input type="email" placeholder="email"></input>
                <textarea placeholder="message"></textarea>
                <input type="submit" value="send"></input>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer>
        
        <p>copyright © 2023 <span>aya gamal</span></p>
        <div className="icons">
        <FontAwesomeIcon icon={faFacebook}/>
        <FontAwesomeIcon icon={faTwitter}/>
        <FontAwesomeIcon icon={faInstagram}/>
        <FontAwesomeIcon icon={faGoogle}/>
        </div>
      </footer>
        
    </>
  );
}

export default App;
