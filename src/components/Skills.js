import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/guitar.svg";
import meter5 from "../assets/img/real-madrid.svg";
import meter6 from "../assets/img/kickboxing.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I thrive on tackling challenging projects and continuously seek out opportunities to enhance my skills.<br/><br/>For me, acquiring new expertise or refining existing ones is a daily habit that fuels my passion for innovation and growth.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Data Science</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>ML Engineering</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Business Analysis</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Sport Analysis</h5>
                            </div>
                            <div className="item-music">
                                <img src={meter4} alt="Image" />
                                <h5>Music</h5>
                            </div>
                            <div className="item-real">
                                <img src={meter5} alt="Image" />
                                <h5>Football</h5>
                            </div>
                            <div className="item-music">
                                <img src={meter6} alt="Image" />
                                <h5>Kickboxing</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}
