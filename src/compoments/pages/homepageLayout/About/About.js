import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="container place-center">
      <div className="space-y-16">
        <div className="context_box">
          <h2 className="context_text_Title">
            Transform your Creation Process
          </h2>
          <p className="context_text">
            With a new approach to ordering content, you can now stop juggling
            multiple documents and meetings and start publishing content faster
            and on demand
          </p>
        </div>

        <div className="context_box">
          <h2 className="context_text_Title">
            Activate your business growth with RetinkContent.{" "}
          </h2>
          <p className="context_text">
            Save time and maintain your brand identity within your budget range
            or sign up for affordable plans and still access multiple content
            services like:
          </p>
        </div>
      </div>

      {/* blogs */}

      <div className="items_blogs">
        <div className="blog_box">
          <img
            src="https://github.com/aslam48/Retink-AI/blob/main/src/assets/logologo.png?raw=true"
            alt=""
          />
          <small>Logod</small>
          <span className="link-underline"></span>
          <p>
            {" "}
            Write SEO enriched blog posts as long or short articles on any topic
            of your choice.
          </p>
        </div>

        <div className="blog_box">
          <img
            src="https://github.com/aslam48/Retink-AI/blob/main/src/assets/mac.png?raw=true"
            alt=""
          />
          <small>Copywriting</small>
          <span></span>
          <p>
            Have creative and compelling copies written to boost your product,
            brand, service or company.
          </p>
        </div>

        <div className="blog_box">
          <img
            src="https://github.com/aslam48/Retink-AI/blob/main/src/assets/computer.png?raw=true"
            alt=""
          />
          <small>Blog Writing</small>
          <span></span>
          <p>
            {" "}
            Have a unique & creative logo designed to express and represent your
            brand identity.
          </p>
        </div>

        <div className="blog_box">
          <img
            src="https://github.com/aslam48/Retink-AI/blob/main/src/assets/camera.png?raw=true"
            alt=""
          />
          <small>Animated Videos</small>
          <span></span>
          <p>
            Bring animated characters to life to keep your viewers engaged and
            entertained.
          </p>
        </div>

        <div className="blog_box">
          <img
            src="https://github.com/aslam48/Retink-AI/blob/main/src/assets/copywrite.png?raw=true"
            alt=""
          />
          <small>Product Demo</small>
          <span></span>
          <p>
            Introduce your product to potential customers in a clear and
            creative video.
          </p>
        </div>

        <div className="blog_box">
          <img
            src="https://github.com/aslam48/Retink-AI/blob/main/src/assets/social%20phone.png?raw=true"
            alt=""
          />
          <small>Social Media Ads</small>
          <span></span>
          <p> Boost sales and awareness with tailor made ads from experts.</p>
        </div>
      </div>

      {/* button */}

      <div className="join_btn_component">
        <h2 className="context_text_Title">Sign Up For The BETA to see more</h2>

        <div className="flex-btn ">
          <button className="btn">Business Name</button>
          <button className="btn2">Email</button>
        </div>

        <div className="colume-btn">
          <button className="border border-indigo-600 bg-indigo-500 rounded   w-full p-4 my-2 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300 ">
            Notify me
          </button>
          <button className="btn_free">Sgn up as a freelance partner</button>
        </div>
      </div>
    </div>
  );
};

export default About;
