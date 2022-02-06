import React from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const HomePage = () => {
  return (
    <main className="main">
      {/* hero section */}
      <section className="hero">
        <div className="hero__text">
          <p>
            Fill & Feel the <span className="hero__strong">love</span>.{" "}
          </p>
        </div>
        <Link to="/organizations">
          <Button>Learn more</Button>
        </Link>
      </section>

      <h2 className="about__title" id="about">
        about
      </h2>

      {/* about section */}
      <section className="about section">
        <div className="about__wrapper">
          <div className="about__image"></div>
          <div className="about__wrapper2">
            <h2 className="about__subtitle">Who We Are</h2>
            <p className="about__text">
              4Goods is a hub bringing our community together. <br />
              Everyone is rich, having something to give out; Yet Everyone is
              poor, needing others' help at a certain time. <br />
              Just by taking a minute to share your surplus through 4Goods, you
              may help someone on the other side of the phone to go through a
              hard time; <br />
              Just by taking a minute to browser through 4Goods, you may find
              some strength, some love, and some goods needed to march on;{" "}
              <br />
              When you open the map, you will see all the goodness, the warmness
              around you. <br />
              Join 4Goods. Let's build our community{" "}
              <span className="about__strong">together</span>.
            </p>
          </div>
        </div>
      </section>

      {/* explore section */}
      <section className="explore section">
        <div className="explore__wrapper">
          <div className="explore__wrapper2">
            <h2 className="explore__title">Explore Organizations</h2>
            <p className="about__text">
              Support and donate to local organizations including homeless
              shelters, first nations organizations, free/low cost food programs
              in Vancouver, Canada.
            </p>
          </div>
        </div>
        <div className="explore__image"></div>
      </section>

      {/* donate section */}
      <section className="donate section">
        <div className="donate__wrapper">
          <div className="donate__image"></div>
          <div className="donate__wrapper2">
            <h2 className="donate__subtitle">Donate Goods</h2>
            <p className="about__text">
              4Goods provides a platform for organizations to show what
              resources they need, as well as surplus donations they have
              received. We envision a society in which every one is committed to
              giving and participating in charitable sector, in a long term and
              sustainable way. Small Change. BIG Difference.
            </p>
          </div>
        </div>
      </section>

      {/* more content */}
      <section className="more-content section">
        <div className="more-content__wrapper">
          <div className="more-content__wrapper2">
            <h2 className="more-content__title">We're In It Together</h2>
            <p className="about__text">
              "You have to be humble in what we're doing, but you have to be
              bold...We will get out there and try something. If it doesn't
              work, we will try something else. And we will keep trying until we
              find something that works." - Melinda Gates, Co-Chair & Trustee,
              Bill & Melinda Gates Foundation <br />
              Join us and make an impact!
            </p>
          </div>
        </div>
        <div className="more-content__image"></div>
      </section>
    </main>
  );
};

export default HomePage;
