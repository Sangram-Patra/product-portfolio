"use client";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function Services() {
  return (
    <section id="services" className="services-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title section-black-title wow fadeInUp delay-0-2s">
              <h2>Services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <!-- START SINGLE SERVICE DESIGN AREA --> */}
          <div className="col-lg-6 col-md-6">
            <div className="service-item wow fadeInUp delay-0-2s">
              <ArrowUpRight className="icopos" />
              <h5>01</h5>
              <h4>Web Design</h4>
              <p>
                Crafting modern, responsive, and user-friendly web designs
                tailored to your business needs. I ensure your website not only
                looks stunning but also provides a seamless user experience
                across all devices.
              </p>
            </div>
          </div>
          {/* <!-- / END SINGLE SERVICE DESIGN AREA --> */}
          {/* <!-- START SINGLE SERVICE DESIGN AREA --> */}
          <div className="col-lg-6 col-md-6">
            <div className="service-item wow fadeInUp delay-0-4s">
              <ArrowUpRight className="icopos" />
              <h5>02</h5>
              <h4>React Functionality</h4>
              <p>
                Developing dynamic and interactive React applications with
                reusable components, state management, and seamless integration
                of third-party libraries to bring your ideas to life.
              </p>
            </div>
          </div>
          {/* <!-- / END SINGLE SERVICE DESIGN AREA --> */}
          {/* <!-- START SINGLE SERVICE DESIGN AREA --> */}
          <div className="col-lg-6 col-md-6">
            <div className="service-item wow fadeInUp delay-0-6s">
              <ArrowUpRight className="icopos" />
              <h5>03</h5>
              <h4>Backend with Node.js</h4>
              <p>
                Building robust and scalable backend solutions using Node.js.
                From RESTful APIs to real-time applications, I ensure your
                server-side logic is efficient and secure.
              </p>
            </div>
          </div>
          {/* <!-- / END SINGLE SERVICE DESIGN AREA --> */}
          {/* <!-- START SINGLE SERVICE DESIGN AREA --> */}
          <div className="col-lg-6 col-md-6">
            <div className="service-item wow fadeInUp delay-0-8s">
              <ArrowUpRight className="icopos" />
              <h5>04</h5>
              <h4>DB Schema Design</h4>
              <p>
                Designing and managing efficient database structures tailored to
                your project needs. Whether it’s MongoDB, MySQL, or PostgreSQL,
                I optimize data flow and storage for performance and
                reliability.
              </p>
            </div>
          </div>
          {/* <!-- / END SINGLE SERVICE DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
}
