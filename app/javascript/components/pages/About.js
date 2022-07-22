import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import sean1 from "../assets/sean1.jpg";
import michael1 from "../assets/michael1.jpg";
import don1 from "../assets/don1.jpeg";
import valerie1 from "../assets/valerie1.jpg";

export default function About() {
  return (
    <>
      <div className="index-component">
        <Row md={2}>
          <div>
            <Card id="about-card">
              <Card.Img src={sean1} />
              <Card.Body>
                <Card.Title>Sean Alexander, Product Manager</Card.Title>

                <Button
                  href={`https://github.com/OnyxFire1`}
                  className="mx-auto"
                  id="about-button"
                  variant="outline-light"
                >
                  GitHub
                </Button>
                <Button
                  href={`https://www.linkedin.com/in/sean-alexander-59195077/`}
                  className="mx-auto"
                  id="about-button"
                  variant="outline-light"
                >
                  LinkedIn
                </Button>

                <Card.Text>
                  Sean is a US Navy veteran and software engineer. He worked for
                  the federal government before deciding to pursue a more
                  meaningful and fulling career in tech. Sean is a highly
                  accomplished, detailed-oriented professional with in-depth
                  knowledge of production, planning, and business and military
                  operations. He is incisive in identifying measurable outcomes,
                  strategic project development, and informational management
                  systems.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div>
            <Card id="about-card">
              <Card.Img src={michael1} />
              <Card.Body>
                <Card.Title>Michael Tobias, Project Manager</Card.Title>

                <Button
                  href={`https://michael-tobias.w3spaces.com/`}
                  className="mx-auto"
                  id="about-button"
                  variant="outline-light"
                >
                  Portfolio
                </Button>
                <Button
                  href={`https://github.com/michael-a-tobias`}
                  className="mx-auto"
                  id="about-button"
                  variant="outline-light"
                >
                  GitHub
                </Button>
                <Button
                  href={`https://www.linkedin.com/in/michael-a-tobias/`}
                  className="mx-auto"
                  id="about-button"
                  variant="outline-light"
                >
                  LinkedIn
                </Button>
                <Card.Text>
                  Michael is a US Army veteran and former police officer who
                  decided to pivot his passion for tech into a career. As
                  project manager, he developed LastCall's project plan,
                  directed the group's daily activities, and prioritized tasks.
                  Michael is currently looking to contribute to an established
                  team and to grow professionally as a developer.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div>
            <Card id="about-card">
              <Card.Img src={don1} />
              <Card.Body>
                <Card.Title>Don Yoon, Tech Lead</Card.Title>

                <Button
                  href={`https://github.com/don-yoon`}
                  className="mx-auto"
                  id="about-button"
                  variant="outline-light"
                >
                  GitHub
                </Button>
                <Button
                  href={`https://www.linkedin.com/in/don-yoon/`}
                  className="mx-auto"
                  id="about-button"
                  variant="outline-light"
                >
                  LinkedIn
                </Button>
                <Card.Text>
                  Don Yoon is a full stack developer working to provide
                  meaningful functionality to applications. His background as
                  both an educator and civil servant will provide unique
                  solutions to unique problems in the industry. He is passionate
                  about creating a better experience through understanding the
                  nuances of any given task and creating the optimal solution.
                  He is always eager to learn more and continue expanding the
                  limits of his capabilities. Looking for a team to work on a
                  project together to create new ways of adding value to any
                  field. His most recent work as a tutor helped bridge the gap
                  for many wanting to transition into a different field by
                  offering targeted lessons plans pertaining to their future
                  profession.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div>
            <Card id="about-card">
              <Card.Img src={valerie1} />
              <Card.Body>
                <Card.Title>Valerie Tovar, Design Lead</Card.Title>

                <Button
                  href={`https://vjtovar.github.io/my-app/`}
                  className="mx-auto"
                  id="about-button"
                  variant="outline-light"
                >
                  Portfolio
                </Button>
                <Button
                  href={`https://github.com/vjtovar`}
                  className="mx-auto"
                  id="about-button"
                  variant="outline-light"
                >
                  GitHub
                </Button>
                <Button
                  href={`https://www.linkedin.com/in/valerie-j-tovar/`}
                  className="mx-auto"
                  id="about-button"
                  variant="outline-light"
                >
                  LinkedIn
                </Button>
                <Card.Text>
                  Valerie Tovar comes from a Biotechnology background where she
                  worked in a Cell Therapy laboratory, but has pivoted into a
                  career as a software engineer. She wanted to challenge herself
                  to learn a new set of skills. She is constantly striving to
                  improve her techniques, expand her skillset and find new
                  opportunities to grow.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </div>
    </>
  );
}
