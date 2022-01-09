import React from "react";
import { Link } from "react-router-dom";
import IntroSection from "../components/IntroSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import logo from "../logo.svg";
import NavbarSection from "../components/NavbarSection";

const HomePage = (props) => {
  return (
    <div className="bg-custom-black">
      <div className="container mx-auto App-header">
        <NavbarSection />
        <IntroSection />
        <ProjectSection />
        <ContactSection />
        <h1 className="text-3xl font-bold underline m-10">HOMEEEEEEEEEEE</h1>
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div class="shrink-0">
            <img class="h-12 w-12" src={logo} alt="Logo" />
          </div>
          <div>
            <div class="text-xl font-medium text-black">ChitChat</div>
            <p class="text-gray-500">You have a new message!</p>
          </div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
};
export default HomePage;
