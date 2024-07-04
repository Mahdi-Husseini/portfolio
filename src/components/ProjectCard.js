import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a className="proj-card" target = "_blank" href ={url}><button className="btn btn-success" href={url}>view</button></a>
        </div>
      </div>
    </Col>
  )
}
