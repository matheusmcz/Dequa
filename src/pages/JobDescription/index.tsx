import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { dashboardJobs, home } from "src/routes/routes_constants";
import { api } from "src/services/api";
import { Job } from "src/util/interfaces/interfaces";
import { Container, Content } from "./styles";

export const JobDescription: React.FC = () => {
  const { jobId } = useParams<any>();
  const [jobDescription, setJobDescription] =
    useState<Job | undefined>(undefined);
  const [linkedin, setLinkedin] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    api.get(`/vacancies/${jobId}`).then((value) => {
      setJobDescription(value.data);
    });
  }, [jobId]);

  function handleLinkedin(event: any) {
    event.preventDefault();
    if (linkedin.length === 0) {
      toast.warning("Insira seu perfil do LinkedIn");
    } else if (!selectedFile) {
      toast.warning("Curriculo é obrigatório");
    } else {
      const formData = new FormData();

      formData.append("curriculumn", selectedFile);
      formData.append("vacancyId", jobId);
      formData.append("linkedin", linkedin);

      api
        .post("/userApplication", formData)
        .then((value) => {
          toast.success("Aplicação para vaga concluida");
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    }
  }

  return (
    <Container>
      <Header />

      {jobDescription && (
        <Content>
          <section id="companyProfile">
            <div className="goBack">
              <Link to={home}>
                <span>Home</span>
              </Link>

              <Link to={dashboardJobs}>
                <img
                  src="./assets/leftVector.svg"
                  alt="Voltar"
                  className="pathVector"
                />
                <span>Vagas de emprego</span>
              </Link>

              <Link to={dashboardJobs}>
                <img
                  src="./assets/leftVector.svg"
                  alt="Voltar"
                  className="pathVector"
                />

                <span>Auxiliar de produção</span>
              </Link>
            </div>

            <div id="jobInformation">
              {jobDescription.company && (
                <img
                  className="companyProfilePicture"
                  src={jobDescription.company.logo}
                  alt="Company"
                />
              )}
              <section className="info">
                <p className="title">{jobDescription.office}</p>

                <p className="company">{jobDescription.company.name}</p>
                <p className="level">{jobDescription.level}</p>
                <span className="location">
                  <img src="./assets/pin.svg" alt="" />
                  {jobDescription.company.location}
                </span>
                <span className="payment">
                  <img src="./assets/money.svg" alt="" />
                  {jobDescription.salary}
                </span>
                <span className="modality">
                  <img src="./assets/jobsIcon.svg" alt="" />
                  PJ/CLT
                </span>
              </section>
            </div>

            <div id="jobDescription" className="sectionsStyles">
              <p className="title">Detalhes da vaga</p>

              <span className="text">{jobDescription.description}</span>
            </div>

            <div id="companyDescription" className="sectionsStyles">
              <p className="title">Informações sobre a empresa</p>

              <span className="text">{jobDescription.company.description}</span>
            </div>

            <div id="skills" className="sectionsStyles">
              <p className="title">Habilidades necessárias</p>
              <ul>
                {jobDescription.skills.map((item: string) => (
                  <li className="skills" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div id="schedule" className="sectionsStyles">
              <p className="title">Carga horária</p>
              <p className="text">{jobDescription.workload}</p>
            </div>

            <div id="accessibility" className="sectionsStyles">
              <p className="title">A empresa tem acessibilidade</p>
              <span className="text">
                Sim, a empresa tem todos os artefatos necessários para lidar com
                sua deficiência.
              </span>
            </div>

            <div className="applyCard">
              <img src={jobDescription.company.logo} alt="Ioasys" />
              <button type="submit" onClick={handleLinkedin}>
                Aplicar para vaga
              </button>
            </div>
          </section>

          <section id="documents">
            <div className="linkedin">
              <span>
                <img src="./assets/linkedinLink.svg" alt="" />
                Anexar link do Linkedin
              </span>

              <input
                type="text"
                onChange={(event) => setLinkedin(event.target.value)}
              />
            </div>

            <div className="curriculum">
              <span>
                <img src="./assets/fileUpload.svg" alt="" />
                Carregar currículo
              </span>
              <input
                type="file"
                name="curriculum"
                id="file"
                placeholder="Selecionar arquivo..."
                onChange={(event) => {
                  if (event.target.files) {
                    setSelectedFile(event.target.files[0]);
                  }
                }}
              />
            </div>

            <button
              className="submitButton"
              type="submit"
              onClick={handleLinkedin}
            >
              Aplicar para vaga
            </button>
          </section>
        </Content>
      )}
      <Footer />
    </Container>
  );
};
