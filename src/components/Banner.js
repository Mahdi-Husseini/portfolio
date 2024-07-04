import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../assets/img/me.jpg";
import ballImg from "../assets/img/ball.png";
import { GiSoccerBall } from "react-icons/gi";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Data Scientist", "ML Engineer", "Business Analyst", "Sports Analyst"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to the pitch</span>
                <h1>{`Hi! I'm Mahdi`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Data Scientist", "Web Developer", "Software Engineer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I'm a passionate Data Scientist and Business Analyst constantly refining my skills and knowledge. With a strong foundation in data-driven problem-solving and a relentless drive for innovation, I tackle complex challenges to deliver impactful solutions. Additionally, I apply my expertise as an ML Engineer and Sports Analyst, thriving on continuous learning and always eager to take on new opportunities that push the boundaries of technology.</p>
                  <a href="#connect"><button>Let’s Connect <GiSoccerBall color="#fff" size={35} /></button></a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className = "ball" src={ballImg} alt="Ball Img"/>
                  <img src={myImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
