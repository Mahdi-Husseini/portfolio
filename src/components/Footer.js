import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/tiktok.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target= "_blank" href="https://www.linkedin.com/in/mahdi-husseini-10aa081b9"><img src={navIcon1} alt="Linkedin" /></a>
              <a target= "_blank" href="https://www.tiktok.com/@justmahdistuff"><img src={navIcon2} alt="TikTok" /></a>
              <a target= "_blank" href="https://www.instagram.com/mahdihusseini10/"><img src={navIcon3} alt="Instagram" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
