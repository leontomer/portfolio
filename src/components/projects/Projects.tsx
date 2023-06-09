import React from "react";
import { Card } from "@mui/material";
import {
  project1Desc,
  project2Desc,
  project3Desc,
  project4Desc,
  project1Name,
  project2Name,
  project3Name,
  project4Name,
} from "../../Constants";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="row">
        <span>
          <Card variant="outlined" sx={{ padding: "10px", maxWidth: "150px" }}>
            <a href="https://github.com/leontomer/exploreCities">
              {project1Name}
            </a>
            <div className="project-desc">{project1Desc}</div>
          </Card>
        </span>
        <span>
          <Card variant="outlined" sx={{ padding: "10px", maxWidth: "150px" }}>
            <a href="https://github.com/leontomer/DogWatching">
              {project2Name}
            </a>
            <div className="project-desc">{project2Desc}</div>
          </Card>
        </span>
      </div>
      <div className="row">
        <span>
          <Card variant="outlined" sx={{ padding: "10px", maxWidth: "150px" }}>
            <a href="https://github.com/leontomer/uploadFiles">
              {project3Name}
            </a>
            <div className="project-desc">{project3Desc}</div>
          </Card>
        </span>
        <span>
          <Card variant="outlined" sx={{ padding: "10px", maxWidth: "150px" }}>
            <a href="https://github.com/leontomer/course_reg">{project4Name}</a>
            <div className="project-desc">{project4Desc}</div>
          </Card>
        </span>
      </div>
    </div>
  );
};

export default Projects;
