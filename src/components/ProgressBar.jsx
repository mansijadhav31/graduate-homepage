import React from "react";

function ProgressBar() {
    return (
      <div className="progress-indicator mt-28">
        <div className="step mb-24">
          <div className="circle">1</div>
          <div className="step-content">
            <h3 className="text-5xl font-semibold">Review Your Decision Letter</h3>
            <div className="step-details">
            <h3 className="text-5xl font-semibold pb-4">Action Needed</h3>
            <p className=" step-description">The decision letter contains detailed information about your admission, including scholarships, contact details for the Graduate Program Director, and any admission conditions. Explore the contents of your decision letter by clicking the button below.</p>
            <p className="font-semibold step-description">Last updated: June 30, 2023</p>
            <button className="font-semibold mt-12 view-letter-button text-xl">View Decision Letter</button>
            </div>
          </div>
        </div>
        <div className="step step-grey pb-8">
          <div className="circle">2</div>
          <div className="step-content">
            <h3 className="text-5xl font-semibold">Access the Post Admit Portal</h3>
            <div className="step-details">
            <h4 className="text-4xl font-semibold pb-4">Prior Action Needed</h4>
            <p className="text-2xl pb-6  step-description">Please view your decision letter to gain access to the Post Admit portal. </p>
            <a className="portal-link uppercase font-semibold" href="www.google.com">Post Admit Portal ></a>
            </div>
           
          </div>
        </div>
      </div>
    );
  }

export default ProgressBar;
