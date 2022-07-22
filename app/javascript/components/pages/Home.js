import React from "react";
import { Carousel } from "react-bootstrap";

export default function Home(props) {
  const { cocktails } = props;
  return (
    <>
      <div className="component">
        <div className="bubbles-container">
          <svg
            className="bubbles"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 701 1024"
          >
            <g className="bubbles-large" strokeWidth="7">
              <g>
                <g transform="translate(10 940)">
                  <circle cx="35" cy="35" r="100" />
                </g>
              </g>
              <g>
                <g transform="translate(373 940)">
                  <circle cx="35" cy="35" r="200" />
                </g>
              </g>
              <g>
                <g transform="translate(408 940)">
                  <circle cx="35" cy="35" r="50" />
                </g>
              </g>
              <g>
                <g transform="translate(621 940)">
                  <circle cx="35" cy="35" r="50" />
                </g>
              </g>
              <g>
                <g transform="translate(179 940)">
                  <circle cx="35" cy="35" r="40" />
                </g>
              </g>
            </g>

            <g className="bubbles-small" strokeWidth="4">
              <g>
                <g transform="translate(147 984)">
                  <circle cx="15" cy="15" r="50" />
                </g>
              </g>
              <g>
                <g transform="translate(255 984)">
                  <circle cx="15" cy="15" r="50" />
                </g>
              </g>
              <g>
                <g transform="translate(573 984)">
                  <circle cx="15" cy="15" r="50" />
                </g>
              </g>
              <g>
                <g transform="translate(429 984)">
                  <circle cx="15" cy="15" r="50" />
                </g>
              </g>
              <g>
                <g transform="translate(91 984)">
                  <circle cx="15" cy="15" r="50" />
                </g>
              </g>
              <g>
                <g transform="translate(640 984)">
                  <circle cx="15" cy="15" r="50" />
                </g>
              </g>
              <g>
                <g transform="translate(321 984)">
                  <circle cx="15" cy="15" r="50" />
                </g>
              </g>
              <g>
                <g transform="translate(376 984)">
                  <circle cx="15" cy="15" r="50" />
                </g>
              </g>
              <g>
                <g transform="translate(376 984)">
                  <circle cx="15" cy="15" r="50" />
                </g>
              </g>
              <g>
                <g transform="translate(497 984)">
                  <circle cx="15" cy="15" r="50" />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="landing-page">
          <h3 id="home-title">LastCall 🍸 cocktails without the guesswork</h3>
          <Carousel fade>
            {cocktails &&
              cocktails.map((cocktail) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={cocktail.image}
                      alt="First slide"
                    />
                  </Carousel.Item>
                );
              })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
