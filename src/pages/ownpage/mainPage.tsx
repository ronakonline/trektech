import {
  aboutusData,
  Careers,
  coreValues,
  FeatureData,
  headerSection,
  IndustriesService,
  LeaderShip,
  ServicesData,
  TechnologyPatner,
  trektechFeatureList,
} from "@/commonArray/array";
import Header from "@/component/Header";
import React, { useEffect } from "react";
import Business from "../../assets/img/businesspartnerimg.webp";
import Benifit from "../../assets/img/benifit.webp";
import Technology from "../../assets/img/technology.webp";
import Security from "../../assets/img/security.webp";
import ContactForm from "@/component/ContactForm";
import Footer from "@/component/Footer";
import { CommonBtn, Images } from "@/component/BtnAndImg";
import { useRouter } from "next/router";

const MainPage = () => {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/services#${id}`);
  };
  return (
    <>
      <Header />
      {/* hero Section */}
      <section
        className="heroSection d-flex justify-content-center align-items-center text-center pb-5"
        id="home"
      >
        <div className="hero-content px-3 py-5">
          <h1 className="hero-text milkyWhite mb-5">
            Empowering organizations with secure, scalable, and intelligent
            technology services
          </h1>
          {headerSection.map((each) => (
            <p className="milkyWhite lh30">{each.headerPara}</p>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about-section pt-5" id="about">
        <div className="container">
          <h3 className="text-center mb-4 skyblue">About Us</h3>
          <div className="row">
            <div className="col-md-6 order-2 order-md-1">
              <h2 className="fw-bold">
                Technology Partner’s which move Business Forward
              </h2>
              <p>
                Founded in 2025, Trek Tech Corp is a forward-thinking IT
                solutions provider committed to delivering excellence in
                technology services. With a team of certified professionals and
                a client-centric approach, we help businesses harness the power
                of digital innovation to achieve operational efficiency and
                strategic growth.
              </p>

              {aboutusData?.map((each) => (
                <div>
                  <h4 className="skyblue">{each?.heading}</h4>
                  <p>{each?.para}</p>
                </div>
              ))}

              <p className="fw-bold">Core Values : </p>
              <ul className="">
                {coreValues.map((item, index) => (
                  <li key={index}>
                    <span className="fw-bold">{item.title}: </span>
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>
            <Images img={Business} />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services p-5">
        <div className="container">
          <h3 className="text-center mb-2 skyblue">Our Services</h3>
          <p className="text-center milkyWhite">
            We offer a full spectrum of IT services designed to streamline
            operations, enhance security, and drive growth.
          </p>

          <div className="serviceCardContainer">
            {ServicesData?.map((each) => (
              <div className="serviceCard" key={each?.id}>
                <h5 className="fw-bold">{each?.feature}</h5>
              </div>
            ))}
          </div>
          <CommonBtn />
        </div>
      </section>

      {/*Why Choose Trek Tech Corp?  */}
      <section className="whyChooseTrekTech py-5">
        <div className="container">
          <h3 className="text-center mb-2 skyblue">Your Ideal Choice</h3>
          <div className="row my-3">
            <div className="col-md-6 order-2 order-md-1">
              <h2 className="fw-bold">Why Choose Trek Tech Corp?</h2>
              <ul className="feature-list mt-3 p-0">
                {trektechFeatureList?.map((each) => (
                  <li>{each.feature}</li>
                ))}
              </ul>
            </div>
            <Images img={Benifit} />
          </div>
        </div>
      </section>

      {/* technology patner */}
      <section className="services p-5" id="services">
        <div className="container">
          <h3 className="text-center mb-2 skyblue">Our Technology Partners</h3>
          <p className="text-center milkyWhite">
            We collaborate with globally recognized technology leaders to
            deliver reliable, secure, and innovative IT solutions:
          </p>
          <div className="serviceCardContainer">
            {TechnologyPatner.map((each) => (
              <div
                onClick={() => handleClick(each.id)}
                key={each.id}
                className="serviceCard"
                style={{ cursor: "pointer" }}
              >
                <h5 className="fw-bold">{each.tech}</h5>
              </div>
            ))}
          </div>

          <CommonBtn />
        </div>
      </section>

      {/* Industries Service */}
      <section className="whyChooseTrekTech py-5">
        <div className="container">
          <h3 className="text-center mb-2 skyblue">Industries We Served</h3>
          <div className="row my-3">
            <div className="col-md-6 order-2 order-md-1">
              <h2 className="fw-bold">Industries We Served</h2>
              <ul className="feature-list mt-3 p-0">
                {IndustriesService?.map((each) => (
                  <li key={each?.id}>{each?.industri}</li>
                ))}
              </ul>
            </div>

            <Images img={Technology} />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="services p-5">
        <div className="container">
          <h3 className="text-center mb-2 skyblue">Leadership</h3>

          <div className="w-75 text-center mx-auto my-3 widthReduce">
            {LeaderShip?.map((each) => (
              <p className="text-white lh-30">{each?.para}</p>
            ))}
          </div>

          <CommonBtn />
        </div>
      </section>

      {/* how can you help */}
      <section className="whyChooseTrekTech py-5">
        <div className="container">
          <h3 className="text-center mb-2 skyblue">How Can We Help You</h3>
          <div className="row my-3">
            <div className="col-md-6 order-2 order-md-1">
              <h2 className="fw-bold">How Can We Help You?</h2>
              <p>
                We offer comprehensive IT consulting and support services,
                including:
              </p>
              <ul className="feature-list mt-3 p-0">
                {FeatureData?.map((each) => (
                  <li>{each?.list}</li>
                ))}
              </ul>
            </div>
            <Images img={Security} />
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="services p-5">
        <div className="container">
          <h3 className="text-center mb-2 skyblue">Careers</h3>
          <p className="text-center milkyWhite fw-bold">
            Join the Future of IT Innovation
          </p>

          <div className="w-75 text-center mx-auto my-3 widthReduce">
            {Careers?.map((each) => (
              <p className="text-white lh-30">{each?.para}</p>
            ))}
          </div>
          <CommonBtn />
        </div>
      </section>

      <ContactForm />
      <Footer />
    </>
  );
};

export default MainPage;
