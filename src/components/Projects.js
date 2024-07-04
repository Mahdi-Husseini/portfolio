import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import dna from "../assets/img/dna.png";
import pixel from "../assets/img/pixelware.png";
import pizza from "../assets/img/pizza.jpg";
import cs50 from "../assets/img/CS50.jpg";
import google from "../assets/img/google.png";
import fcc from "../assets/img/fcc.png";
import java from "../assets/img/java.png";
import r from "../assets/img/r.png";
import c from "../assets/img/c.png";
import car from "../assets/img/centenario.jpg";
import movie from "../assets/img/movie.jpg";
import world_cup from "../assets/img/world-cup.jpg";
import weather from "../assets/img/weather.jpg";
import SP from "../assets/img/SP.jpg";
import basketball from "../assets/img/basketball.jpg";
import manager from "../assets/img/manager.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Research: Football Formation Prediction & Synergy",
      description: "My research utilizes LSTM networks to analyze player performance and predict optimal formations for teams. We also uncover key goal-scoring combinations through Data Mining, providing managers with actionable insights to enhance team chemistry and tactics.",
      imgUrl: manager,
      url: "https://football-formation-prediction.streamlit.app/"
    },
    {
      title: "DNA to RNA",
      description: "This project implemented with python and streamlit transcribes DNA strands and converts them to RNA, it also represents the number of nucleotides in different statistical formats",
      imgUrl: dna,
      url: "https://mahdi-dna-rna.streamlitapp.com/"
    },
    {
      title: "World Cup Group-Stage",
      description: "This app scrapes 2022 world cup group stage data from wikipedia and shows live top scorers",
      imgUrl: world_cup,
      url: "https://world-cup-groups.streamlit.app/"
    },
    {
      title: "Speedograph",
      description: "A car-specific social media app built with react and sanity",
      imgUrl: car,
      url: "https://speedograph.netlify.app/"
    },
    {
      title: "Beirut Weather",
      description: "this app represents beirut's weather from 1996 till 2010 with statistical insights and it provides a demo weather forecasting relative to the collected data",
      imgUrl: weather,
      url: "https://beirut-weather.streamlit.app/"
    },
    {
      title: "S&P500",
      description: "presents all companies of S&P500 with their sectors and stock-market history visualization of each index",
      imgUrl: SP,
      url: "https://mahdi-sp500.streamlit.app/"
    },
  ];

  const projects2 = [
    {
      title: "NBA Player Stats",
      description: "provides all NBA Players statistics of years 2021 and backwards with filters to teams and positions, along with a heatmap for every representation ",
      imgUrl: basketball,
      url: "https://mahdi-basketball.streamlit.app/"
    },
    {
      title: "Pizza Application",
      description: "A web app built with django, it is a demo of a delivery app that has user-admin integration each with specific interface, where user orders and admin manage orders and add pizzas. Feel free to try both interfaces, to access admin add /admin to url, the privelages for admin login are: user=admin, pass=admin",
      imgUrl: pizza,
      url: "https://pizza-online1.herokuapp.com/"
    },
    {
      title: "Pixelware",
      description: "A website made just with html and css, it one of my first projects when I started learning, it is based to teach beginners python code in a fun way using the turtle library",
      imgUrl: pixel,
      url: "https://pixelware.netlify.app/"
    },
    {
      title: "Watch&Chill",
      description: "Built when I was learning react, this simple responsive webapp uses OMDB API to fetch movies and series of the specified topic and displays them",
      imgUrl: movie,
      url: "https://watchchill.netlify.app/"
    },
  ]

  const courses = [
    {
      title: "CS50X",
      description: "This course from Harvard changed my whole perspective of Computer Science, Professor David Millan is amazing at explaining complex aspects in a simple way, not to forget to mention how it is designed to tell you that nothing is impossible",
      imgUrl: cs50,
      url: "https://certificates.cs50.io/9897cffb-eb60-4f3d-a458-d216d12b4e6a.pdf?size=letter"
    },
    {
      title: "Google IT Support",
      description: "this 6 month course gave me a broad overview about the world of computer science from networking,CLI,security,etc...,it made me an excellent troubleshooter and a teamworker that is happy to help people with their struggles",
      imgUrl: google,
      url: "https://www.coursera.org/account/accomplishments/professional-cert/49B8GEDE7R5N?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=prof"
    },
    {
      title: "FreeCodeCamp Python",
      description: "with other 300 hours of videos from Dr.Chuck and solving projects, I sculpted my python muscles with this course",
      imgUrl: fcc,
      url: "https://www.freecodecamp.org/certification/mahdi_husseini/scientific-computing-with-python-v7"
    },
    {
      title: "Java Bootcamp",
      description: "I made complex java projects with this course and built bullet-proof apps, I also learned about reference traps,threads and much more",
      imgUrl: java,
      url: "https://www.udemy.com/certificate/UC-22df503b-1f70-419b-ac3d-cd1582a1c67b/"
    },
    {
      title: "JHU R Programming",
      description: "with 50+ hours of content from Johns Hopkins University,this course introduced R to me in an exciting way, the videos were very comprehensive and the assignments were fun",
      imgUrl: r,
      url: "https://www.coursera.org/account/accomplishments/verify/LLH4ZWR8KB9M?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
    },
    {
      title: "C Programming",
      description: "first programming course I took. Besides getting a solid way of thinking in programming and sculpting my C skills, I was introduced to various computer science topics as memory allocation, bitwise operators and much more",
      imgUrl: c,
      url: "https://www.udemy.com/certificate/UC-9339c0d4-587c-48b3-bfae-f00822ccb37f/"
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects & Courses</h2>
                <p>Throughout my career, I have accumulated extensive knowledge by working on diverse projects. I have also fortified my confidence in my skills by completing numerous high-level, project-based courses</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">More Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Courses</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((course, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...course}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          courses.map((course, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...course}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={pizza}></img>
    </section>
  )
}
