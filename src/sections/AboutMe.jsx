import React from "react";

const AboutMe = () => {
  return (
    <div className="w-full py-16 bg-gray-200 justify-center flex px-3" id="about">
      <div className="w-contain text-center space-y-4">
        <h2 className="text-2xl font-bold mb-5">About me</h2>
        <div className="space-y-5">
          <div>
            <p>Hi, I'm Mardonbek – Software-engineer from Uzbekistan.</p>
            <p>
              I'm interested in Creating new Social Media websites and everything connected with it.
            </p>
          </div>
          <p>
            I'm studying at courses "Web developer tool Ruby
            <br /> and Ruby on Rails" myself.
          </p>
          <p>
            I'm Ready to implement excellent projects <br /> with wonderful
            people.
          </p>
        </div>
        <h2 className="text-2xl font-bold mb-5">Edication</h2>
        <div className="space-y-5">
          <div>
            <p>As front-end developer I studied in Studying center called "Web King" in</p>
            <p>
              As back-end developer I learned Node js from Youtube channel "Farkhod Dadajanov"
            </p>
          </div>
          <p>
            For my Personal interests and in order to build My own startup I leaned Ruby on Rails
            <br /> and I am not looking for Job from Ruby.
          </p>
          <p>
            My front-end teacher was <a href="https://andarov-portfolio.netlify.app/" target="_blanck" className="text-blue-600 underline">Bektur Andarov</a> <br />
            I learned back end from <a href="https://guides.rubyonrails.org/" target="_blanck" className="text-blue-600 underline">Rails guides</a> and <a href="https://nodejs.org/docs/latest/api/" target="_blanck" className="text-blue-600 underline">Node js docs</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
