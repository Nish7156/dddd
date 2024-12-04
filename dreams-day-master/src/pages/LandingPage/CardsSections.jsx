import React from "react";
import { BiAbacus } from "react-icons/bi";
import { FaLowVision, FaTeamspeak } from "react-icons/fa";
import { TbRubberStamp } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";

function CardsSections() {
  const CardsData = [
    {
      icons: <TbRubberStamp size={30} />, // Use Flaticon component,
      title: "Trust",
      description:
        "Trust is the foundation of successful investment strategies. At our company, we prioritize transparency, integrity, and personalized service to ensure clients' financial growth, fostering lasting relationships built on confidence and reliability.",
    },
    {
      icons: <FaRegEye size={30} />,
      title: "Team",
      description:
        "Our team is dedicated to delivering exceptional financial solutions. With expertise, collaboration, and a client-centric approach, we work together to drive success and achieve your investment goals with integrity and precision.",
    },
    {
      icons: <FaLowVision size={30} />,
      title: "Vision 2030",
      description:
        "Our Vision 2030 focuses on empowering clients with innovative financial solutions, sustainable growth, and long-term prosperity. We aim to lead in investment strategies, shaping a secure financial future for generations ahead.",
    },
    {
      icons: <TiWeatherCloudy size={30} />,
      title: "Wealth",
      description:
        "At our company, wealth and growth are achieved through personalized investment strategies, careful risk management, and consistent performance. We focus on long-term financial success, helping clients build, preserve, and grow their wealth for a secure future.",
    },
  ];

  return (
    <section className="ftco-section">
      <div className="container-xl">
        <div className="row g-lg-5">
          <div
            className="col-lg-6 order-lg-last heading-section d-flex align-items-center"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={1000}
          >
            <div className="mt-0 my-lg-5 py-5">
              <span className="subheading">About Us</span>
              <h2 className="mb-4">Invest smarter with Dreams Day.</h2>
              <p>
                Welcome to Dreams Day Corporation Limited, where your financial
                future is built on innovation, expertise, and trust. We don’t
                just manage investments; we transform them, unlocking growth in
                ways that set you apart from the ordinary. Our team of visionary
                financial experts crafts personalized strategies designed to
                amplify wealth, minimize risks, and secure your long-term
                prosperity. We believe that your financial journey should be a
                partnership, driven by insight and powered by cutting-edge
                tools. With us, you’re not just investing; you’re making smart,
                bold decisions that will echo through generations. Ready to
                redefine what’s possible? Let’s build your legacy, today and
                beyond.
              </p>

              <p className="mt-4">
                <a href="#" className="btn btn-primary py-3 px-4">
                  Learn More
                </a>
              </p>
            </div>
          </div>
          <div
            className="col-lg-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1000}
          >
            <div className="row">
              {CardsData.map((data) => {
                return (
                  <div className="col-md-6 d-flex align-items-stretch services-wrap">
                    <div className="services">
                      <div
                        className="icon"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {data.icons}
                      </div>
                      <div className="text">
                        <h2>{data.title}</h2>
                        <p className="mb-0">
                          {data.description.slice(0, 139) + "..."}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardsSections;
