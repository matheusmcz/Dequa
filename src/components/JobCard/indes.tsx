import React from "react";
import { Link } from "react-router-dom";
import { jobDescriptionRoot } from "src/routes/routes_constants";
import { Job } from "src/util/interfaces/interfaces";
import { Container } from "./styles";

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Container>
      <Link className="jobCard" to={`${jobDescriptionRoot}/${job.id}`}>
        <div className="jobCardImg">
          <img src={job.company.logo} alt={job.company.name} />
        </div>
        <div className="jobCardInfo">
          <h4 className="jobName">{job.office}</h4>
          <h5 className="jobCompany">{job.company.name}</h5>

          <button className="moreAbout" type="button">
            <Link to={`${jobDescriptionRoot}/${job.id}`}>Saber mais</Link>
          </button>

          <section className="jobLevel">
            <span className="level">{job.level}</span>
            <div className="jobLocation">
              <img src="./assets/pin.svg" alt="Localização" />
              <span>{job.company.location}</span>
            </div>
          </section>
          <p className="jobDescription">{job.description}</p>
        </div>
      </Link>
    </Container>
  );
};
