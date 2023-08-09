import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="header">
          <img
            src="companyLogo.svg"
            alt="company logo"
            className="companyLogo"
            width={199}
            height={47}
          />

          <div className="rightSideHeader">
            <button className="startupsContactButton">Startups</button>
            <button className="startupsContactButton">Contact</button>
            <button className="workWithUsButton">Work with us!</button>
          </div>
        </div>

        <div className="seeOurWorks">
          <div className="seeOurWorksText">
            <div className="seeOurWorksTextOne">We Create Startups.</div>
            <div className="seeOurWorksTextTwo">
              We Create Startups. We are startup studio that develops and
              launches new companies.
            </div>
            <button className="workWithUsButton">See our works</button>
          </div>
          <img
            src="artwork.png"
            alt="artwork"
            className="seeOurWorksImage"
            width={705}
            height={507}
          />
        </div>

        <div className="whoWeAre">
          <span className="whoWeAreText1">Who we are</span>
          <span className="whoWeAreText2">
            We create products that have innovation and technology at their
            core. <br />
            We value working with talented people that understand the
            possibilities of today.
          </span>
          <img
            src="artworkQuestion.png"
            alt="artwork question"
            className="artworkQuestion"
            width={75}
            height={88}
            loading="lazy"
          />
          <div className="whoWeArePoints">
            <div className="whoWeArePoint1">
              <span className="whoWeArePointNumber">01</span>
              <span className="whoWeArePointText">
                We develop innovative <br /> products, systems and <br />{" "}
                services
              </span>
            </div>

            <div className="whoWeArePoint2">
              <span className="whoWeArePointNumber">02</span>
              <span className="whoWeArePointText">
                Next we build teams to <br /> scale them into <br /> companies
              </span>
            </div>

            <div className="whoWeArePoint3">
              <span className="whoWeArePointNumber">03</span>
              <span className="whoWeArePointText">
                Each startup solving <br /> one problem <br /> at a time
              </span>
            </div>
          </div>
        </div>
        <div className="solvingProblem">
          <img
            src="thumb.png"
            alt="Vercel Logo"
            width={59}
            height={66}
            loading="lazy"
          />
          <span className="solvingProblemText">We love solving problems!</span>
          <img
            src="thumb.png"
            alt="Vercel Logo"
            className="solvingProblemRightImage"
            width={59}
            height={66}
            loading="lazy"
          />
        </div>

        <div className="whoWeAre">
          <span className="ourCoreValuesText">Our core values</span>
          <img
            src="artworkBulb.png"
            alt="Vercel Logo"
            className="artworkQuestion"
            width={75}
            height={88}
            loading="lazy"
          />
          <div className="whoWeArePoints">
            <div className="whoWeArePoint1">
              <span className="whoWeArePointNumber">01. Innovation</span>
              <span className="whoWeArePointText">
                Startupz operates where entrepreneurship <br /> and technology
                intersect. We design solutions <br /> and turn them into
                businesses models.
              </span>
            </div>

            <div className="whoWeArePoint2">
              <span className="whoWeArePointNumber">02. People</span>
              <span className="whoWeArePointText">
                Talent is what enable us <br /> to create great <br />{" "}
                companies.
              </span>
            </div>
          </div>
        </div>

        <div className="ourWorks">
          <span className="ourWorksText">Our works</span>
          <div className="ourWorksGrid">
            <div className="ourWork">
              <span className="ourWorkTitle1">Tolq</span>
              <span className="ourWorkText">
                Tolq is the translation solution built for e-commerce. <br /> It
                provides all pieces of the localization puzzle in one <br />{" "}
                single integrated solution.
              </span>
              <img
                src="macbookMockupOne.svg"
                alt="Vercel Logo"
                className="macbookMockup"
                width={448}
                height={294}
                loading="lazy"
              />
              <button className="ourWorksButton">More</button>
            </div>
            <div className="ourWork">
              <span className="ourWorkTitle2">Feedback Labs</span>
              <span className="ourWorkText">
                Feedback Labs turns feedback into actionable insights <br /> for
                your team.
              </span>
              <img
                src="macbookMockupTwo.svg"
                alt="Vercel Logo"
                className="macbookMockup"
                width={448}
                height={294}
                loading="lazy"
              />
              <button className="ourWorksButton">More</button>
            </div>
            <div className="ourWork">
              <span className="ourWorkTitle3">Codekeeper</span>
              <span className="ourWorkText">
                Codekeeper is an all-in-one solution for software <br />{" "}
                developers and publishers to provide source code escrow <br />{" "}
                as part of service level and license agreements.
              </span>
              <img
                src="macbookMockupThree.svg"
                alt="Vercel Logo"
                className="macbookMockup"
                width={448}
                height={294}
                loading="lazy"
              />
              <button className="ourWorksButton">More</button>
            </div>
            <div className="ourWork">
              <span className="ourWorkTitle4">LegalSite</span>
              <span className="ourWorkText">
                Protected against legal risks, privacy compliant and <br />{" "}
                always up-to-date with the latest regulatory <br />{" "}
                developments.
              </span>
              <img
                src="macbookMockupFour.svg"
                alt="Vercel Logo"
                className="macbookMockup"
                width={448}
                height={294}
                loading="lazy"
              />
              <button className="ourWorksButton">More</button>
            </div>
          </div>
        </div>
        <div className="solvingProblemWidget">
          <div className="solvingProblem">
            <img
              src="thumb.png"
              alt="Vercel Logo"
              className="solvingProblemImage"
              width={59}
              height={66}
              loading="lazy"
            />
            <span className="solvingProblemText">
              Startups create a world that actually is better. <br /> Any
              problem that can be solved , will be solved <br /> by a startup,
              and that is a huge opportunity.
            </span>
            <img
              src="thumb.png"
              alt="Vercel Logo"
              className="solvingProblemImageRight"
              width={59}
              height={66}
              loading="lazy"
            />
          </div>
        </div>
        <div className="weAreHiring">
          <img
            src="frame4.png"
            alt="Vercel Logo"
            className="weAreHiringImageLeft"
            width={291}
            height={319}
            loading="lazy"
          />
          <div className="weAreHiringMiddle">
            <span className="weAreHiringTittle">We are hiring!</span>
            <span className="weAreHiringText">
              We're always looking for talented people <br /> to join and help
              build our startups.
              <br /> Check out our current openings
            </span>
            <button className="weAreHiringButton">See current openings</button>
          </div>
          <img
            src="frame5.png"
            alt="Vercel Logo"
            className="weAreHiringImageRight"
            width={291}
            height={319}
            loading="lazy"
          />
        </div>

        <div className="areYouReady">
          <span className="areYouReadyTitle">
            Are you ready <br /> to board this rocket ship?
          </span>
          <div className="areYouReadyText">Share your excitement with us.</div>
          <div className="areYouReadyCard">
            <div className="areYouReadyMessageCard">
              <input
                className="areYouReadyMessageCardInputName"
                type="text"
                id="name"
                name="name"
                placeholder="Name*"
                required
                minLength="4"
                maxLength="15"
                size="10"
              />
              <input
                className="areYouReadyMessageCardInputEmail"
                type="text"
                id="email"
                name="email"
                placeholder="Email*"
                required
                minLength="4"
                maxLength="15"
                size="10"
              />
              <textarea
                className="areYouReadyMessageCardInputMessage"
                type="text"
                id="message"
                name="message"
                placeholder="Message*"
                required
                minLength="4"
                maxLength="999"
                size="10"
              />
              <button className="areYouReadyMessageCardButton">
                See current openings
              </button>
            </div>
          </div>
          <img
            src="rocket.svg"
            alt="Vercel Logo"
            className="areYouReadyImageRocket"
            width={667}
            height={544}
            loading="lazy"
          />
        </div>

        <div className="footer">
          <div className="footerLogo">
            <img
              src="companyLogo.svg"
              alt="Vercel Logo"
              className="companyLogoFooter"
              width={178}
              height={42}
              loading="lazy"
            />
            <span className="footerText">
              © 2020 Startupz. <br /> All rights reserved.
            </span>
          </div>
          <div className="footerCompany">
            <span className="footerTitle">Companies</span>
            <span className="footerCompanyItems">Tolq</span>
            <span className="footerCompanyItems">Codekeeper</span>
            <span className="footerCompanyItems">Feedback</span>
            <span className="footerCompanyItems">Labs</span>
          </div>
          <div className="footerCotact">
            <span className="footerTitle">Contact</span>

            <span className="footerCotactText">
              World Trade Center - The Hague <br /> Prinses Margrietplantsoen 33
              <br /> 2595 AM The Hague <br />
              The Netherlands
            </span>
            <span className="footerCotactButton">Send us an email</span>
          </div>
          <div className="footerFollowUs">
            <span className="footerTitle"> Follow us</span>
            <img
              src="twitter.svg"
              alt="Twitter"
              className="footerFollowUsIcon"
              width={23}
              height={23}
              loading="lazy"
            />
            <img
              src="linkedin.svg"
              alt="Linkedin"
              className="footerFollowUsIcon"
              width={23}
              height={23}
              loading="lazy"
            />
            <img
              src="instagram.svg"
              alt="Instagram"
              className="footerFollowUsIcon"
              width={23}
              height={23}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
