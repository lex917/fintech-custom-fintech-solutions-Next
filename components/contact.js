import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact = (props) => {
  return (
    <>
      <div
        className={`contact-contact20 thq-section-padding ${props.rootClassName} `}
      >
        <div className="contact-max-width thq-section-max-width">
          <div className="contact-content1">
            <svg
              viewBox="0 0 1024 1024"
              className="contact-icon1 thq-icon-medium"
            >
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact-contact-info1">
              <span className="contact-email thq-body-small">
                {props.email1 ?? (
                  <Fragment>
                    <span className="contact-text3">jhjkh</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact-content2">
            <svg
              viewBox="0 0 1024 1024"
              className="contact-icon3 thq-icon-medium"
            >
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact-contact-info2">
              <a
                href="tel:+19172591043"
                className="contact-phone thq-body-small"
              >
                {props.phone1 ?? (
                  <Fragment>
                    <span className="contact-text2">kanji</span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
          <div className="contact-content3">
            <svg
              viewBox="0 0 1024 1024"
              className="contact-icon5 thq-icon-medium"
            >
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact-contact-info3">
              <span className="contact-address thq-body-small">
                {props.address1 ?? (
                  <Fragment>
                    <span className="contact-text1">frtrgtr</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-contact20 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-direction: column;
          }
          .contact-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .contact-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact-icon1 {
            fill: #d9d9d9;
          }
          .contact-contact-info1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-email {
            color: #ffffff;
            font-size: 26px;
            font-style: normal;
            text-align: center;
            font-weight: 400;
          }
          .contact-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact-icon3 {
            fill: #d9d9d9;
          }
          .contact-contact-info2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-phone {
            color: #ffffff;
            font-size: 26px;
            font-style: normal;
            text-align: center;
            font-weight: 400;
            text-decoration: none;
          }
          .contact-content3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact-icon5 {
            fill: #d9d9d9;
          }
          .contact-contact-info3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-address {
            color: #ffffff;
            font-size: 26px;
            font-style: normal;
            text-align: center;
            font-weight: 400;
          }
          .contact-text1 {
            display: inline-block;
          }
          .contact-text2 {
            display: inline-block;
          }
          .contact-text3 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .contact-contact20 {
              width: 934px;
            }
            .contact-max-width {
              overflow: hidden;
              max-width: 100%;
              min-width: 100%;
            }
            .contactroot-class-name {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .contact-max-width {
              width: 100%;
              overflow: hidden;
              max-width: 100%;
              min-width: 100%;
              flex-direction: column;
            }
            .contact-email {
              font-size: 20px;
            }
            .contact-phone {
              font-size: 20px;
            }
            .contact-address {
              font-size: 20px;
            }
            .contactroot-class-name {
              width: auto;
              position: static;
            }
          }
          @media (max-width: 479px) {
            .contactroot-class-name {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Contact.defaultProps = {
  address1: undefined,
  phone1: undefined,
  rootClassName: '',
  email1: undefined,
}

Contact.propTypes = {
  address1: PropTypes.element,
  phone1: PropTypes.element,
  rootClassName: PropTypes.string,
  email1: PropTypes.element,
}

export default Contact
