import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Contact from '../components/contact'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>14fintech custom fintech solutions</title>
          <meta
            name="description"
            content="14fintech designs, develops, and maintains bespoke fintech solutions."
          />
          <meta
            property="og:title"
            content="14fintech custom fintech solutions"
          />
          <meta
            property="og:description"
            content="14fintech designs, develops, and maintains bespoke fintech solutions."
          />
        </Head>
        <header className="home-header1">
          <header data-thq="thq-navbar" className="home-navbar">
            <a href="#Landing" className="home-link10">
              <img
                alt="14fintech"
                src="/14fintech_logo-200h.png"
                loading="lazy"
                className="home-fintech"
              />
            </a>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="home-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="home-nav"
              >
                <a
                  href="#Description"
                  className="home-button1 button-clean button"
                >
                  About
                </a>
                <a href="#Contact" className="home-button2 button-clean button">
                  Contact
                </a>
              </nav>
            </div>
            <div data-thq="thq-navbar-btn-group" className="home-btn-group">
              <div className="home-socials1">
                <button className="social button">
                  <img
                    alt="image"
                    src="/Icons/twitter.svg"
                    className="home-image1"
                  />
                </button>
                <button className="social button">
                  <img
                    alt="image"
                    src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                    className="home-image2"
                  />
                </button>
              </div>
              <button className="button">View on Opensea</button>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu"></div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu"></div>
          </header>
        </header>
        <section id="Landing" className="home-landing">
          <div className="home-heading1">
            <h1 className="home-header2">
              <span className="home-text10">Scale R&amp;D.</span>
              <br></br>
              <span>Cut Costs.</span>
            </h1>
          </div>
          <div className="home-buttons">
            <button className="button">View on Opensea</button>
            <button className="home-learn button-clean button">
              Learn more
            </button>
          </div>
        </section>
        <section id="Description" className="home-description1">
          <img
            alt="image"
            src="/data-1500w.jpg"
            className="home-divider-image"
          />
          <div className="home-container2">
            <div className="home-description2">
              <div className="home-content1">
                <p className="home-paragraph1">
                  We design, develop, and maintain bespoke fintech solutions.
                </p>
                <p className="home-paragraph2">
                  We are experts in high-load, high- availability systems, with
                  prior experiences at Morgan Stanley, National Bank, Euronext,
                  thinkorswim, Broadridge, SGX, and other fintech leaders. 
                </p>
                <p className="home-paragraph3">
                  We offer unparalleled leverage for your R&amp;D, product- and
                  value-centricity, delivery aligned with PMI standards.
                </p>
                <p className="home-paragraph4">
                  Together, we challenge the norms, fuel innovation, and unlock
                  new possibilities. We transform bold ideas into impactful
                  technologies, driving meaningful change.
                </p>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Link
                </a>
              </div>
              <div className="home-links1">
                <button className="home-button3 button-link button">
                  <span>Follow us on Twitter</span>
                  <img
                    alt="image"
                    src="/Icons/arrow.svg"
                    className="home-arrow1"
                  />
                </button>
                <button className="home-button4 button-link button">
                  <span>Join us on Discord</span>
                  <img
                    alt="image"
                    src="/Icons/arrow.svg"
                    className="home-arrow2"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
        <div id="Contact" className="home-content2">
          <Contact
            email1={
              <Fragment>
                <span className="home-text15">hello [at] 14fintech.com </span>
              </Fragment>
            }
            phone1={
              <Fragment>
                <span className="home-text16">+1 917 259 1043</span>
              </Fragment>
            }
            address1={
              <Fragment>
                <span className="home-text17">
                  14 Wall Street, New York, NY, 10005
                </span>
              </Fragment>
            }
            rootClassName="contactroot-class-name"
          ></Contact>
        </div>
        <section className="home-contact">
          <div className="home-container3">
            <div className="home-description3">
              <div className="home-links2">
                <button className="home-button5 button-link button">
                  <span>Follow us on Twitter</span>
                  <img
                    alt="image"
                    src="/Icons/arrow.svg"
                    className="home-arrow3"
                  />
                </button>
                <button className="home-button6 button-link button">
                  <span>Join us on Discord</span>
                  <img
                    alt="image"
                    src="/Icons/arrow.svg"
                    className="home-arrow4"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-main">
            <div className="home-branding">
              <div className="home-heading2">
                <h2 className="home-logo">Character</h2>
                <p className="home-caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
              <div className="home-socials2">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-twitter2 social button"
                >
                  <img
                    alt="image"
                    src="/Icons/twitter.svg"
                    className="home-image3"
                  />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-discord2 social button"
                >
                  <img
                    alt="image"
                    src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                    className="home-image4"
                  />
                </a>
              </div>
            </div>
            <div className="home-links3">
              <div className="home-list1">
                <h3 className="home-heading3">Site</h3>
                <div className="home-items1">
                  <button className="home-link12 button-clean button">
                    About
                  </button>
                  <button className="home-link13 button-clean button">
                    Collection
                  </button>
                  <button className="home-link14 button-clean button">
                    Roadmap
                  </button>
                  <button className="home-link15 button-clean button">
                    Features
                  </button>
                </div>
              </div>
              <div className="home-list2">
                <h3 className="home-heading4">Company</h3>
                <div className="home-items2">
                  <button className="home-link16 button-clean button">
                    Team
                  </button>
                  <button className="home-link17 button-clean button">
                    Press
                  </button>
                  <button className="home-link18 button-clean button">
                    Terms
                  </button>
                  <button className="home-link19 button-clean button">
                    Limitations
                  </button>
                  <button className="home-link20 button-clean button">
                    Licenses
                  </button>
                </div>
              </div>
            </div>
            <div className="home-socials3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-twitter3 social button"
              >
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="home-image5"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-discord3 social button"
              >
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-image6"
                />
              </a>
            </div>
          </div>
          <span className="home-copyright">
            © 2025 14fintech. All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: auto;
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .home-header1 {
            width: 100%;
            display: flex;
            z-index: 1;
            position: fixed;
            max-width: 100%;
            min-width: 100%;
            align-items: center;
            flex-direction: column;
            background-color: #853939;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            z-index: 1;
            position: fixed;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-fiveunits);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-fiveunits);
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
            background-color: #000000;
          }
          .home-link10 {
            display: contents;
          }
          .home-fintech {
            width: 200px;
            height: auto;
            object-fit: cover;
            text-decoration: none;
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-nav {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            color: #ffffff;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .home-button1 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-button2 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-btn-group {
            gap: var(--dl-layout-space-fourunits);
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-socials1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image1 {
            width: 100px;
            object-fit: cover;
          }
          .home-image2 {
            width: 100px;
            object-fit: cover;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-landing {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            height: auto;
            display: flex;
            z-index: auto;
            overflow: hidden;
            max-width: 100%;
            min-width: 100%;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column-reverse;
            padding-bottom: var(--dl-layout-space-fourunits);
          }
          .home-heading1 {
            gap: var(--dl-layout-space-twounits);
            height: 512px;
            display: flex;
            z-index: 0;
            align-items: center;
            padding-top: 196px;
            flex-direction: column-reverse;
            justify-content: flex-start;
          }
          .home-header2 {
            color: rgb(255, 255, 255);
            height: 444px;
            font-size: 90px;
            max-width: 900px;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-layout-space-sixunits);
            text-align: center;
            font-weight: 500;
            line-height: 108px;
          }
          .home-buttons {
            gap: var(--dl-layout-space-threeunits);
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .home-learn {
            color: rgb(255, 255, 255);
          }
          .home-description1 {
            gap: 120px;
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: 100%;
            min-width: 100%;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
          }
          .home-divider-image {
            width: 100%;
            height: 102px;
            max-width: 1440px;
            object-fit: cover;
          }
          .home-container2 {
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-description2 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .home-content1 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-paragraph1 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            text-align: justify;
            line-height: 60px;
          }
          .home-paragraph2 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            text-align: justify;
            line-height: 60px;
          }
          .home-paragraph3 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            text-align: justify;
            line-height: 60px;
          }
          .home-paragraph4 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            text-align: justify;
            line-height: 60px;
          }
          .home-links1 {
            width: 100%;
            display: none;
            align-items: stretch;
            flex-direction: column;
          }
          .home-button3 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            border-top-width: 0px;
          }
          .home-arrow1 {
            width: 25px;
            object-fit: cover;
          }
          .home-button4 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            border-top-width: 0px;
          }
          .home-arrow2 {
            width: 25px;
            object-fit: cover;
          }
          .home-content2 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            max-width: 100%;
            min-width: 100%;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-contact {
            gap: 120px;
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
          }
          .home-container3 {
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-description3 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-self: center;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .home-links2 {
            width: 100%;
            display: none;
            align-items: stretch;
            flex-direction: column;
          }
          .home-button5 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            border-top-width: 0px;
          }
          .home-arrow3 {
            width: 25px;
            object-fit: cover;
          }
          .home-button6 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            border-top-width: 0px;
          }
          .home-arrow4 {
            width: 25px;
            object-fit: cover;
          }
          .home-footer {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: 145px;
            display: flex;
            overflow: hidden;
            position: relative;
            max-width: 100%;
            min-width: 100%;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .home-main {
            width: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-branding {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading2 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-logo {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-caption {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-socials2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-twitter2 {
            text-decoration: none;
          }
          .home-image3 {
            width: 100px;
            object-fit: cover;
          }
          .home-discord2 {
            text-decoration: none;
          }
          .home-image4 {
            width: 100px;
            object-fit: cover;
          }
          .home-links3 {
            gap: 120px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-list1 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading3 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
          }
          .home-items1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link12 {
            color: rgb(255, 255, 255);
          }
          .home-link13 {
            color: rgb(255, 255, 255);
          }
          .home-link14 {
            color: rgb(255, 255, 255);
          }
          .home-link15 {
            color: rgb(255, 255, 255);
          }
          .home-list2 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading4 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
          }
          .home-items2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link16 {
            color: rgb(255, 255, 255);
          }
          .home-link17 {
            color: rgb(255, 255, 255);
          }
          .home-link18 {
            color: rgb(255, 255, 255);
          }
          .home-link19 {
            color: rgb(255, 255, 255);
          }
          .home-link20 {
            color: rgb(255, 255, 255);
          }
          .home-socials3 {
            gap: var(--dl-layout-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-twitter3 {
            text-decoration: none;
          }
          .home-image5 {
            width: 100px;
            object-fit: cover;
          }
          .home-discord3 {
            text-decoration: none;
          }
          .home-image6 {
            width: 100px;
            object-fit: cover;
          }
          .home-copyright {
            color: rgb(255, 255, 255);
            font-size: 14px;
            align-self: center;
          }
          @media (max-width: 991px) {
            .home-header1 {
              display: flex;
              overflow: hidden;
            }
            .home-btn-group {
              display: none;
            }
            .home-landing {
              display: flex;
              overflow: hidden;
              max-width: 100%;
              min-width: 100%;
            }
            .home-heading1 {
              height: 377px;
              padding-bottom: 86px;
            }
            .home-header2 {
              height: 100%;
              margin-top: var(--dl-layout-space-sixunits);
            }
            .home-content2 {
              width: 100%;
              height: auto;
              overflow: hidden;
            }
            .home-contact {
              width: 100%;
              display: none;
            }
            .home-footer {
              height: auto;
            }
            .home-copyright {
              font-size: 18px;
            }
          }
          @media (max-width: 767px) {
            .home-header1 {
              width: 100%;
              display: flex;
              overflow: hidden;
              max-width: 100%;
              min-width: 100%;
            }
            .home-navbar {
              width: 100%;
              display: flex;
              overflow: hidden;
              max-width: 100%;
              min-width: 100%;
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              flex-direction: row;
            }
            .home-fintech {
              width: auto;
              height: 32px;
            }
            .home-landing {
              width: 100%;
              height: 356px;
              display: flex;
              overflow: hidden;
              max-width: 100%;
              min-width: 100%;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .home-heading1 {
              gap: var(--dl-layout-space-unit);
              height: 165px;
              margin-top: 0px;
              padding-top: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-halfunit);
            }
            .home-header2 {
              width: 370px;
              height: 189px;
              font-size: 36px;
              max-width: 70%;
              margin-top: 69px;
              line-height: 43px;
            }
            .home-text10 {
              font-size: 36px;
              max-width: 70%;
              line-height: 43px;
            }
            .home-description1 {
              gap: var(--dl-layout-space-threeunits);
              overflow: hidden;
              max-width: 100%;
              min-width: 100%;
              flex-direction: column;
              padding-bottom: 0px;
            }
            .home-divider-image {
              max-width: auto;
            }
            .home-container2 {
              max-width: auto;
            }
            .home-description2 {
              gap: var(--dl-layout-space-threeunits);
              max-width: auto;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-content1 {
              gap: var(--dl-layout-space-unit);
            }
            .home-paragraph1 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-paragraph2 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-paragraph3 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-paragraph4 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-content2 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: 100%;
              overflow: hidden;
              position: relative;
              max-width: 100%;
              min-width: 100%;
              align-self: center;
            }
            .home-contact {
              gap: var(--dl-layout-space-threeunits);
              display: none;
              overflow: hidden;
              max-width: 100%;
              min-width: 100%;
              padding-bottom: 0px;
            }
            .home-container3 {
              max-width: auto;
            }
            .home-description3 {
              gap: var(--dl-layout-space-threeunits);
              max-width: auto;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-footer {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: 100%;
              height: auto;
              overflow: hidden;
              position: static;
              max-width: 100%;
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-main {
              gap: var(--dl-layout-space-threeunits);
              width: 50%;
              overflow: hidden;
              max-width: 50%;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-heading2 {
              gap: var(--dl-layout-space-unit);
            }
            .home-logo {
              font-size: 20px;
              line-height: 24px;
            }
            .home-caption {
              width: 80%;
              font-size: 12px;
              line-height: 18px;
            }
            .home-socials2 {
              display: none;
            }
            .home-links3 {
              gap: var(--dl-layout-space-fourunits);
              width: 100%;
              justify-content: flex-start;
            }
            .home-list1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-list2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-socials3 {
              display: flex;
            }
            .home-copyright {
              width: auto;
              font-size: 14px;
              max-width: auto;
            }
          }
          @media (max-width: 479px) {
            .home-header1 {
              display: flex;
            }
            .home-navbar {
              width: 100%;
              padding: var(--dl-layout-space-unit);
              max-width: 100%;
              min-width: 100%;
            }
            .home-fintech {
              align-self: center;
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              width: var(--dl-layout-size-xsmall);
              display: flex;
            }
            .home-mobile-menu {
              left: 0px;
              width: auto;
              height: auto;
              padding: 16px;
              background-color: #000000;
            }
            .home-landing {
              display: flex;
            }
            .home-heading1 {
              height: 237px;
            }
            .home-header2 {
              width: 320px;
              margin-top: var(--dl-layout-space-sixunits);
            }
            .home-divider-image {
              width: 100%;
              max-width: auto;
            }
            .home-container2 {
              max-width: auto;
            }
            .home-description2 {
              max-width: auto;
            }
            .home-content2 {
              width: 100%;
              height: auto;
            }
            .home-contact {
              display: none;
            }
            .home-footer {
              height: auto;
            }
            .home-copyright {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
