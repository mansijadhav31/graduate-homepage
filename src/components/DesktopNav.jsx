import React, { useState, useEffect } from "react";
import { toggleResponsiveclassName } from "../functions";

function DesktopNav() {
  return (
    <div className="site-nav-wrapper">
      <div className="site-nav-header p-5 font-sans space-x-10 text-3xl pr-24">
        <a href="https://www.luc.edu/searchalt/index.shtml#gsc.tab=0">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#ffffff"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </a>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle custom-dropdown-toggle text-3xl"
            type="button"
            data-toggle="dropdown"
          >
            Find For <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Prospective Students</a>
            </li>
            <li>
              <a href="#">Admitted Students</a>
            </li>
          </ul>
        </div>
        <a href="#">Visit Us</a>
        <a href="#">Request Information</a>

        <button href="https://gpem.luc.edu/apply/" className="apply-button font-semibold uppercase">Apply</button>
      </div>
      <div className="grad-nav-header inline flex">
        <div className="header-logo float-left p-18">
          <a href="https://www.luc.edu/" className="active">
            <img
              src="https://gpem-luc-edu.cdn.technolutions.net/www/images/GPEM_Website/LUC_stacked.png"
              alt="Logo"
            />
          </a>
        </div>
        <div className="grad-home inline mr-96 pb-4">
          <span className="text-5xl font-bold mr-4 pl-8">
            Graduate &amp; Professional
          </span>
          <br />
          <span className="text-5xl font-bold pl-8">Studies</span>
        </div>
        <div className="inline float-right space-x-9 mt-24">
          <a className="font-bold text-4xl nav-links pb-3" href="#news">
            Explore Programs
          </a>
          <a className="font-bold text-4xl nav-links pb-3" href="#contact">
            Getting Started
          </a>
          <a className="font-bold text-4xl pr-8 nav-links pb-3" href="#about">
            Why Loyola
          </a>
        </div>
      </div>
    </div>
  );
}

export default DesktopNav;
