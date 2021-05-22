import React from "react";
import { Container } from "./styles";

export const FooterMenu: React.FC = () => {
  return (
    <Container>
      <section className="socialMedia">
        <div>
          <a href="https://twitter.com/ioasys_br" className="socialMediaLink">
            <img
              src="./assets/twitter.png"
              alt="Twitter"
              className="socialMediaLogo"
            />
          </a>
          <a href="https://www.facebook.com/ioasys" className="socialMediaLink">
            <img
              src="./assets/facebook.png"
              alt="Facebook"
              className="socialMediaLogo"
            />
          </a>
          <a
            href="https://www.instagram.com/ioasys/"
            className="socialMediaLink"
          >
            <img
              src="./assets/instagram.png"
              alt="Instagram"
              className="socialMediaLogo"
            />
          </a>
        </div>
      </section>
    </Container>
  );
};
