import React from "react";
import "./styles/videosection.css";
const Videosection = () => {
  return (
    <>
      <section className="responsive-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 video-container">
              <iframe
                width="100%"
                height="445"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-6 text-container">
              <p>
                Connect with millions of business buyers from around the world.
              </p>
              <p>
                Get the tools and know-how to build a successful ecommerce
                presence for your business.
              </p>
              <p>
                Pocket more from each sale, with take rates as low as 0% in some
                cases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Videosection;
