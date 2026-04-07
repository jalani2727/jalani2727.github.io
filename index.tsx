import React, { useState, useEffect } from 'react';

declare const $: any;
declare const Layout: any;

const App: React.FC = () => {
  const [showTldr, setShowTldr] = useState(false);

  useEffect(() => {
    Layout.init();
  }, []);

  return (
    <>
      <header className="header navbar-fixed-top">
        <nav className="navbar" role="navigation">
          <div className="container">

            <div className="menu-container js_nav-item">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="toggle-icon"></span>
              </button>

              <div className="logo">
                <a className="logo-wrap" href="#body">
                  <h1 id="logo">JP</h1>
                </a>
              </div>
            </div>

            <div className="collapse navbar-collapse nav-collapse">
              <div className="menu-container">
                <ul className="nav navbar-nav navbar-nav-right">
                  <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#about">About</a></li>
                  <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#sites">Website Experience</a></li>
                  <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#work">Personal Projects</a></li>
                  <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>

          </div>
        </nav>
      </header>

      <div className="promo-block">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 sm-margin-b-60">
              <div className="margin-b-30">
                <h1 className="promo-block-title">Jalani <br /> Paul</h1>
                <p className="promo-block-text">Fullstack Developer &amp; Software Engineer</p>
              </div>
              <ul className="list-inline"></ul>
            </div>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div id="about">
        <div className="container content-lg">
          <div className="row">
            <div className="col-sm-5 sm-margin-b-60">
              <img className="full-width img-responsive" src="img/Selfie2.jpg" alt="Image" />
            </div>
            <div className="col-sm-7">
              <div className="margin-b-50">
                <div className="margin-b-50">
                  <div className="margin-b-30">
                    <h2>About Me</h2>
                    <button
                      className="tldrButton btn-theme btn-theme-sm btn-default-bg text-uppercase buttonLink"
                      onClick={() => setShowTldr(!showTldr)}
                    >
                      {showTldr ? 'Read More' : 'Summarize this!'}
                    </button>

                    {!showTldr && (
                      <div className="fullEssay">
                        <p>
                          Since 2019, I have played a role in the successful deployment,
                          enhancement, and maintenance of eCommerce websites for a number of
                          enterprise-level brands including Carter's, Johnston &amp; Murphy, UnitedHealthcare,
                          ReserveBar and many more. For each of these projects I have implemented
                          SalesForce Commerce Cloud development practices, utilized custom frameworks,
                          built custom components and communicated directly with clients or teams of
                          marketing professionals to identify and implement designs over the lifecycle of
                          their website.
                        </p>
                        <p>
                          My skills include JS/HTML/CSS, Vue.js, Bootstrap and SFRA. I am also well-versed in
                          version management and project management tools such as JIRA, BitBucket and
                          Confluence for documentation.
                        </p>
                        <p>
                          I seek to work alongside a talented group of like-minded developers to get work
                          done together and learn from one-another. I seek to cultivate trust/confidence in the work being done and wish to continue exercising this philosophy in my next role!
                        </p>
                      </div>
                    )}

                    {showTldr && (
                      <ul className="tldrContent">
                        <li>Has 7 years of professional development experience.</li>
                        <li>Specializes in using SFCC to deliver robust eCommerce website experiences.</li>
                        <li>Task-driven and detail-oriented with end-user satisfaction in mind.</li>
                        <li>Seeking to work alongside like-minded developers.</li>
                        <li>Ready to exercise a fullstack skillset to bring your development needs to life.</li>
                      </ul>
                    )}
                  </div>
                  {/* TODO: convert to a bootstrap modal */}
                  <a
                    href="https://drive.google.com/file/d/1Cynry8kih-f4aYUTghvGHlM2RAohdfSW/view?usp=drive_link"
                    className="btn-theme btn-theme-md btn-default-bg text-uppercase buttonLink"
                  >
                    Check out my resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="content-lg container">
        <h2>Skills</h2>
        <div className="scrollmenu">
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-salesforce-plain"></i>
          <i className="devicon-jquery-plain-wordmark"></i>
          <i className="devicon-nodejs-plain-wordmark"></i>
          <i className="devicon-vuejs-plain-wordmark"></i>
          <i className="devicon-react-original-wordmark"></i>
          <i className="devicon-html5-plain-wordmark"></i>
          <i className="devicon-bootstrap-plain-wordmark"></i>
          <i className="devicon-css3-plain-wordmark"></i>
          <i className="devicon-sass-original"></i>
          <i className="devicon-github-original-wordmark"></i>
          <i className="devicon-bitbucket-original-wordmark"></i>
          <i className="devicon-jira-plain-wordmark"></i>
          <i className="devicon-confluence-original-wordmark"></i>
        </div>
      </div>

      {/* Experience Section */}
      <div id="sites">
        <div className="container content-lg">
          <div className="row">
            <div className="col-sm-6">
              <h2>Experience</h2>
            </div>
          </div>
          <div className="row">

            {/* UnitedHealthcareGroup Sites */}
            <div className="col-12 col-sm-6 sm-margin-b-30 margin-b-10">
              <div className="margin-b-40">
                <div id="carousel-UHG" className="carousel slide" data-interval="false">
                  <ol className="carousel-indicators">
                    <li data-target="#carousel-UHG" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-UHG" data-slide-to="1"></li>
                    <li data-target="#carousel-UHG" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="item active">
                      <img className="img-responsive" src="img/UnitedHealthcareGroup/UHCH.png" alt="UHCH Landing Page" />
                    </div>
                    <div className="item">
                      <img className="img-responsive" src="img/UnitedHealthcareGroup/EPIC.png" alt="EPIC Landing Page" />
                    </div>
                    <div className="item">
                      <img className="img-responsive" src="img/UnitedHealthcareGroup/AARP.png" alt="AARP Landing Page" />
                    </div>
                  </div>
                  <a className="left carousel-control" href="#carousel-UHG" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="right carousel-control" href="#carousel-UHG" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <h4>United Healthcare Group: <span>
                <h6><a href="https://www.uhchearing.com/">United Healthcare Hearing</a></h6>
                <h6><a href="https://www.epichearing.com/">EPIC Hearing</a></h6>
                <h6><a href="https://www.aarphearingsolutions.com/">AARP Hearing Solutions</a></h6>
              </span></h4>
              <p>
                <strong>Contributions:</strong>
                <ul>
                  <li>Created and enhanced dynamic pages and content</li>
                  <li>Created custom questionnaire functionality and totally overhauled Provider Search capabilities to be utilized across all sibling sites.</li>
                  <li>Worked alongside Webpage Designers to consult on best practice of designs and adhering a consistent design philosophy across projects on the site.</li>
                </ul>
              </p>
              <p><strong>Technologies Used: </strong> SFRA, JavaScript, HTML, CSS/SCSS</p>
            </div>

            {/* Ear Professionals Group */}
            <div className="col-12 col-sm-6 sm-margin-b-30 margin-b-10">
              <div className="margin-b-40">
                <div id="carousel-epg" className="carousel slide" data-interval="false">
                  <ol className="carousel-indicators">
                    <li data-target="#carousel-epg" data-slide-to="0" className="active"></li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="item active">
                      <img className="img-responsive" src="img/EarProfessionalsGroup/homepage.png" alt="epg Landing Page" />
                    </div>
                  </div>
                  <a className="left carousel-control" href="#carousel-epg" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="right carousel-control" href="#carousel-epg" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <h4><a href="https://www.earprofessionalsgroup.com/">Ear Professionals Group</a></h4>
              <p>
                <strong>Contributions:</strong>
                <ul>
                  <li>Leveraged SFRA tools for top-to-bottom creation of all content found on the website.</li>
                  <li>Worked alongside Webpage Designers to consult on best practice of designs and adhering a consistent design philosophy across projects on the site.</li>
                </ul>
              </p>
              <p><strong>Technologies Used: </strong> SFRA, JavaScript, HTML, CSS/SCSS</p>
            </div>

            {/* Relate Hearing */}
            <div className="col-12 col-sm-6 sm-margin-b-30 margin-b-10">
              <div className="margin-b-40">
                <div id="carousel-relate" className="carousel slide" data-interval="false">
                  <ol className="carousel-indicators">
                    <li data-target="#carousel-relate" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-relate" data-slide-to="1"></li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="item active">
                      <img className="img-responsive" src="img/RelateHearing/homepage.png" alt="Relate Landing Page" />
                    </div>
                  </div>
                  <a className="left carousel-control" href="#carousel-relate" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="right carousel-control" href="#carousel-relate" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <h4><a href="https://www.relatehearing.com">Relate Hearing</a></h4>
              <p>
                <strong>Contributions:</strong>
                <ul>
                  <li>Leveraged SFRA tools for top-to-bottom creation of all content found on the website.</li>
                  <li>Worked alongside Webpage Designers to consult on best practice of designs and adhering a consistent design philosophy across projects on the site.</li>
                </ul>
              </p>
              <p><strong>Technologies Used: </strong> SFRA, JavaScript, HTML, CSS/SCSS</p>
            </div>

            {/* Johnston & Murphy */}
            <div className="col-12 col-sm-6 sm-margin-b-30 margin-b-10">
              <div className="margin-b-40">
                <div id="carousel-JM" className="carousel slide" data-interval="false">
                  <ol className="carousel-indicators">
                    <li data-target="#carousel-JM" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-JM" data-slide-to="1"></li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="item active">
                      <img className="img-responsive" src="img/JohnstonMurphy/Homepage1.png" alt="JM Landing Page" />
                    </div>
                    <div className="item">
                      <iframe
                        className="responsive-iframe"
                        src="https://www.youtube.com/embed/JU-R55WW6XY"
                        title="JM Tour"
                        frameBorder={0}
                        width="638"
                        height="408"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <a className="left carousel-control" href="#carousel-JM" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="right carousel-control" href="#carousel-JM" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <h4><a href="https://johnstonmurphy.com">Johnston &amp; Murphy</a></h4>
              <p>
                <strong>Contributions:</strong>
                <ul>
                  <li>Converted a majority of the frontend assets of a SiteGenesis version of their site to SFRA.</li>
                  <li>Implemented responsive user experience from Storefront to Checkout, Store Locator Customizations, Buy-Online-Pickup-In-Store (BOPIS) frontend components, and custom components as requested by the client.</li>
                </ul>
              </p>
              <p><strong>Technologies Used: </strong> SFRA, JavaScript, HTML, CSS/SCSS</p>
            </div>

            {/* Fit2Run */}
            <div className="col-12 col-sm-6 sm-margin-b-30 margin-b-10">
              <div className="margin-b-40">
                <div id="carousel-fit2run" className="carousel slide" data-interval="false">
                  <ol className="carousel-indicators">
                    <li data-target="#carousel-fit2run" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-fit2run" data-slide-to="1"></li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="item active">
                      <img className="img-responsive" src="img/Fit2Run/Homepage.png" alt="Fit2Run Landing Page" />
                    </div>
                    <div className="item">
                      <iframe
                        className="responsive-iframe"
                        src="https://www.youtube.com/embed/I-Lg0n0_oBM"
                        title="F2R Tour"
                        frameBorder={0}
                        width="638"
                        height="408"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <a className="left carousel-control" href="#carousel-fit2run" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="right carousel-control" href="#carousel-fit2run" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <h4><a href="https://fit2run.com">Fit2Run</a></h4>
              <p>
                <strong>Contributions:</strong>
                <ul>
                  <li>Implemented custom responsive user experience from Storefront to Checkout, Navigation, and Account Pages.</li>
                  <li>Custom Color Carousel component built to reduce PLP (Product Listing Page) page load.</li>
                </ul>
              </p>
              <p><strong>Technologies Used: </strong> SFRA, JavaScript, HTML5, CSS/SCSS</p>
            </div>

            {/* Yanmar */}
            <div className="col-12 col-sm-6 sm-margin-b-30 margin-b-10">
              <div className="margin-b-40">
                <div id="carousel-yanmar" className="carousel slide" data-interval="false">
                  <ol className="carousel-indicators">
                    <li data-target="#carousel-yanmar" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-yanmar" data-slide-to="1"></li>
                    <li data-target="#carousel-yanmar" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="item active">
                      <img className="img-responsive" src="img/Yanmar/Homepage.png" alt="Yanmar Unreleased Landing Page" />
                    </div>
                    <div className="item">
                      <iframe
                        className="responsive-iframe"
                        src="https://www.youtube.com/embed/rJ6iRHhHuA4"
                        title="Yanmar Tour"
                        frameBorder={0}
                        width="638"
                        height="408"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="item">
                      <iframe
                        className="responsive-iframe"
                        src="https://www.youtube.com/embed/KKLdBMkZ8zA"
                        title="Series Pages and Recommendations"
                        frameBorder={0}
                        width="638"
                        height="408"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <a className="left carousel-control" href="#carousel-yanmar" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="right carousel-control" href="#carousel-yanmar" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <h4>YANMAR</h4>
              <p>
                <strong>Contributions:</strong>
                <ul>
                  <li>Implemented custom responsive Homepage, Category/Parts Pages, Header and Footer.</li>
                  <li>Custom Search Component designed to loop through and display available subcategories and products based on previous selections.</li>
                </ul>
              </p>
              <p><strong>Technologies Used: </strong> SFRA, JavaScript, HTML5, CSS/SCSS</p>
            </div>

            {/* ReserveBar */}
            <div className="col-12 col-sm-6 sm-margin-b-30 margin-b-10">
              <div className="margin-b-40">
                <div id="carousel-reservebar" className="carousel slide" data-interval="false">
                  <ol className="carousel-indicators">
                    <li data-target="#carousel-reservebar" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-reservebar" data-slide-to="1"></li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="item active">
                      <img className="img-responsive" src="img/ReserveBar/Homepage.png" alt="ReserveBar Landing Page" />
                    </div>
                    <div className="item">
                      <iframe
                        className="responsive-iframe"
                        src="https://www.youtube.com/embed/dyBPsRacInQ"
                        title="ReserveBar Tour"
                        frameBorder={0}
                        width="638"
                        height="408"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <a className="left carousel-control" href="#carousel-reservebar" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="right carousel-control" href="#carousel-reservebar" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <h4><a href="https://ReserveBar.com">ReserveBar</a></h4>
              <p>
                <strong>Contributions:</strong>
                <ul>
                  <li>Implemented custom Homepage, Navigation, and Account Pages Mobile/Desktop</li>
                  <li>Created the Navigation and My Account ISML/JS packages which were reused for FIT2Run.</li>
                  <li>Custom Content Slots/Assets for trending/featured categories and in the sub-navigation menus on mobile.</li>
                </ul>
              </p>
              <p><strong>Technologies Used: </strong> SFRA, JavaScript, HTML5, CSS/SCSS</p>
            </div>

            {/* Carter's */}
            <div className="col-12 col-sm-6 sm-margin-b-30 margin-b-10">
              <div className="margin-b-40">
                <div id="carousel-carters" className="carousel slide" data-interval="false">
                  <div className="carousel-inner" role="listbox">
                    <div className="item active">
                      <img className="img-responsive" src="img/Carters/Homepage.png" alt="Carter's Landing Page" />
                    </div>
                  </div>
                </div>
              </div>
              <h4><a href="https://Carters.com">Carter's</a></h4>
              <p>
                <strong>Contributions:</strong>
                <ul>
                  <li>Implemented custom responsive user experience from Storefront to Checkout, Navigation, and Account Pages.</li>
                  <li>Implemented the Vue.js framework to transform the shopping cart experience for customers to resemble a Single Page Application. Promotions, Shared Cart, and Recommendations components as well as various reusable assets (custom modals and templates) within the Vue app.</li>
                </ul>
              </p>
              <p><strong>Technologies Used: </strong> SFRA, Vue.js, JavaScript, HTML5, CSS/SCSS</p>
            </div>

          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div id="contact">
        <div className="bg-color-sky-light">
          <div className="container content-lg">
            <div className="row margin-b-40">
              <div className="col-sm-6">
                <h2>Contact Me</h2>
                <p>I'm available 24/7 over the phone or through email! Details found below. We can talk collaborating, business, skateboarding, or even how your day is going!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-xs-6 md-margin-b-30">
                <h4>Phone</h4>
                <a href="#contact">404-539-1776</a>
              </div>
              <div className="col-md-3 col-xs-6 md-margin-b-30">
                <h4>Email</h4>
                <a href="#contact">jalani2727@gmail.com</a>
              </div>
              <div className="col-md-3 col-xs-6">
                <h4>
                  <a href="https://www.linkedin.com/in/jalani-paul-995752143/">LinkedIn</a>
                </h4>
              </div>
              <div className="col-md-3 col-xs-6">
                <h4>
                  <a href="https://github.com/jalani2727">GitHub</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back To Top */}
      <a href="#body" className="js-back-to-top back-to-top">Top</a>
    </>
  );
};

export default App;
