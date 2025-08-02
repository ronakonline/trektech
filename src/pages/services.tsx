import Header from "@/component/Header";
import React from "react";
import EmailSecure from "../assets/img/emailSecure.webp";
import Adobt from "../assets/img/adobt.webp";
import Tread from "../assets/img/micorsecurity.webp";
import Recovery from "../assets/img/recovery.webp";
import Facil from "../assets/img/facil.webp";
import Sophos from "../assets/img/sophos.webp";
import Zoho from "../assets/img/zoho.webp";
import Google from "../assets/img/google.webp";
import Autocad from "../assets/img/autocad.webp";
import Accops from "../assets/img/accops.webp";
import {
  microsoft,
  Adobts,
  tread,
  acronis,
  Fortinet,
  sophos,
  zoho,
  google,
  autocad,
  accops,
  featureList,
} from "@/commonArray/array";
import ServicesComp from "@/component/ServicesComp";
import { CommonBtn } from "@/component/BtnAndImg";
import Footer from "@/component/Footer";

const SubPage = () => {
  return (
    <>
      <Header />
      {/* IT solution & services */}
      <section className="services p-5">
        <div className="container">
          <h3 className="text-center mb-2 skyblue">IT Solutions & Services</h3>
          <div className="w-75 text-center mx-auto my-3">
            <p className="text-white lh-30">
              Powering Your Business with Trusted Technology We offer a full
              suite of licensed software and cybersecurity solutions from global
              leaders to help businesses improve productivity, secure data, and
              scale operations efficiently. Explore our solutions below:
            </p>
          </div>
        </div>
      </section>

      {/* Microsoft Solutions */}
      <ServicesComp
        title="Microsoft Solutions"
        para=" Modern businesses rely on Microsoft for secure communication,collaboration, and cloud computing."
        colorApp=""
        arr={microsoft}
        clasAddDarkMode="whyChooseTrekTech"
        img={EmailSecure}
        id="microsoft"
        keywords={[
          "Microsoft 365",
          " Azure",
          "Teams",
          "Exchange",
          "Windows Server",
        ]}
      />

      {/* Adobe Creative Cloud */}
      <ServicesComp
        title="Adobe Creative Cloud"
        para="Design, edit, and create with world-className tools for content creation, marketing, and branding."
        colorApp="milkyWhite"
        arr={Adobts}
        clasAddDarkMode="services"
        img={Adobt}
        id="adobe"
        keywords={[
          "Photoshop",
          " Illustrator",
          "InDesign",
          "Acrobat Pro",
          "Creative Suite",
        ]}
      />

      {/* Trend Micro Security */}
      <ServicesComp
        title="Trend Micro Security"
        para="Protects your business from malware, phishing, ransomware, and advanced cyber threats."
        colorApp=""
        arr={tread}
        clasAddDarkMode="whyChooseTrekTech"
        img={Tread}
        id="trend-micro"
        keywords={[
          "Endpoint Security",
          "Email Security",
          "Cloud Security",
          "Threat Detection",
        ]}
      />

      {/* Acronis Backup & Recovery */}
      <ServicesComp
        title="Acronis Backup & Recovery"
        para="Avoid data loss from system failures, attacks, or human error."
        colorApp="milkyWhite"
        arr={acronis}
        clasAddDarkMode="services"
        img={Recovery}
        id="acronis"
        keywords={[
          "Data Backup",
          "Disaster Recovery",
          "Cloud Backup",
          "Ransomware Protection",
        ]}
      />

      {/* Fortinet Firewall */}
      <ServicesComp
        title="Fortinet Firewall"
        para="Secure your network from internal and external threats."
        colorApp=""
        arr={Fortinet}
        clasAddDarkMode="whyChooseTrekTech"
        img={Facil}
        id="fortinet"
        keywords={[
          "NGFW",
          "Secure SD-WAN",
          "Intrusion Prevention",
          "SSL Inspection",
        ]}
      />

      {/* Sophos Cybersecurity */}
      <ServicesComp
        title="Sophos Cybersecurity"
        para="All-in-one solution for endpoint and network protection."
        colorApp="milkyWhite"
        arr={sophos}
        clasAddDarkMode="services"
        img={Sophos}
        id="sophos"
        keywords={["Intercept X", "Firewall", "EDR", "Ransomware Protection"]}
      />

      {/* Zoho Business Suite */}
      <ServicesComp
        title="Zoho Business Suite"
        para="Centralize your business operations with cloud-based apps."
        colorApp=""
        arr={zoho}
        clasAddDarkMode="whyChooseTrekTech"
        img={Zoho}
        id="zoho"
        keywords={["CRM", "Finance", "HR", "Business Automation", "Zoho Books"]}
      />

      {/* Google Workspace*/}
      <ServicesComp
        title="Google Workspace"
        para="Work smarter with Google-powered productivity tools."
        colorApp="milkyWhite"
        arr={google}
        clasAddDarkMode="services"
        img={Google}
        id="google"
        keywords={[
          "Gmail for Business",
          "Drive",
          "Meet",
          "Docs",
          "Collaboration Tools",
        ]}
      />

      {/* AutoCAD & Autodesk Solutions */}
      <ServicesComp
        title="AutoCAD & Autodesk Solutions"
        para="Design and draft with precision — ideal for architecture, construction, and engineering firms."
        colorApp=""
        arr={autocad}
        clasAddDarkMode="whyChooseTrekTech"
        img={Autocad}
        id="autocad"
        keywords={[
          "CAD Software",
          "2D/3D Design",
          "Engineering Tools",
          "Architecture Drafting",
        ]}
      />

      {/* Accops (Secure Remote Access & VDI)*/}
      <ServicesComp
        title="Accops (Secure Remote Access & VDI)"
        para="Enable employees to securely work from anywhere while protecting sensitive data."
        colorApp="milkyWhite"
        arr={accops}
        clasAddDarkMode="services"
        img={Accops}
        id="accops"
        keywords={[
          "VDI",
          "DLP",
          "Zero Trust Access",
          "Remote Desktop",
          "Endpoint Security",
        ]}
      />

      <section className="whyChooseTrekTech pb-5">
        <div className="container">
          <h2 className="fw-bold skyblue text-center my-4">Why Choose Us?</h2>
          <div className="d-flex justify-content-center align-items-center">
            <ul className="feature-list mt-3 p-0">
              {featureList?.map((each) => (
                <li>{each?.list}</li>
              ))}
            </ul>
          </div>
          <CommonBtn />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SubPage;
