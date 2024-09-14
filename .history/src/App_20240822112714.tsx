import "./cards.css";

import IconAccessibility from "~icons/carbon/accessibility";
import IconAccountBox from "~icons/mdi/account-box";

import { RevealBento } from "./components/RevealBento";

import StaggeredDropDown from "./components/StaggeredDropDown";
import SwipeCards from "./components/SwipeCards";
import { Example } from "./components/TiltShineCard";

function App() {
  return (
    <div className="section-large">
      <div className="container-large">
        <div>
          <IconAccessibility />
          <IconAccountBox style={{ fontSize: "2em", color: "red" }} />
        </div>
        <RevealBento />
        <StaggeredDropDown />

        <Example />
        <div className="feature-header">
          <div className="feature-header-block">
            <h3 className="h3-heading">
              We&apos;ll help{" "}
              <span className="text-color-blue">digitally </span>transform your
              business.
            </h3>
          </div>
          <a href="#" className="button-outline w-inline-block">
            <div>Get Started</div>
          </a>
        </div>
        <div className="w-layout-grid feature-grid">
          <a
            href="#"
            className="feature-card w-inline-block"
            style={{ backgroundColor: "rgb(17, 18, 24)" }}
          >
            <div
              className="feature-icon-wrapper"
              style={{ backgroundColor: "rgb(34, 36, 47)" }}
            >
              <div className="icon-regular w-embed">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 9H10C9.45 9 9 9.45 9 10V14C9 14.55 9.45 15 10 15H14C14.55 15 15 14.55 15 14V10C15 9.45 14.55 9 14 9ZM13 13H11V11H13V13ZM21 10C21 9.45 20.55 9 20 9H19V7C19 5.9 18.1 5 17 5H15V4C15 3.45 14.55 3 14 3C13.45 3 13 3.45 13 4V5H11V4C11 3.45 10.55 3 10 3C9.45 3 9 3.45 9 4V5H7C5.9 5 5 5.9 5 7V9H4C3.45 9 3 9.45 3 10C3 10.55 3.45 11 4 11H5V13H4C3.45 13 3 13.45 3 14C3 14.55 3.45 15 4 15H5V17C5 18.1 5.9 19 7 19H9V20C9 20.55 9.45 21 10 21C10.55 21 11 20.55 11 20V19H13V20C13 20.55 13.45 21 14 21C14.55 21 15 20.55 15 20V19H17C18.1 19 19 18.1 19 17V15H20C20.55 15 21 14.55 21 14C21 13.45 20.55 13 20 13H19V11H20C20.55 11 21 10.55 21 10ZM16 17H8C7.45 17 7 16.55 7 16V8C7 7.45 7.45 7 8 7H16C16.55 7 17 7.45 17 8V16C17 16.55 16.55 17 16 17Z"
                    fill="#F4F4F6"
                  />
                </svg>
              </div>
            </div>
            <div className="margin-bottom-08">
              <div className="subheading-large">Title here</div>
            </div>
            <div className="paragraph-small text-color-gray-400">
              Lorem ipsum is a placeholder text to demonstrate the visual form.
            </div>
            <div
              className="shape-wrapper"
              style={{
                transform:
                  "translate3d(100%, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="feature-shape w-embed">
                <svg
                  width="90"
                  height="90"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0C0 -49.7056 40.2944 -90 90 -90C139.706 -90 180 -49.7056 180 0C180 49.7056 139.706 90 90 90H10.8373C4.852 90 0 85.148 0 79.1628V0Z"
                    fill="#86C1A1"
                  />
                </svg>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="feature-card w-inline-block"
            style={{ backgroundColor: "rgb(17, 18, 24)" }}
          >
            <div
              className="feature-icon-wrapper"
              style={{ backgroundColor: "rgb(34, 36, 47)" }}
            >
              <div className="icon-regular w-embed">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 9.5V7.5C20 6.4 19.1 5.5 18 5.5H15C15 3.84 13.66 2.5 12 2.5C10.34 2.5 9 3.84 9 5.5H6C4.9 5.5 4 6.4 4 7.5V9.5C2.34 9.5 1 10.84 1 12.5C1 14.16 2.34 15.5 4 15.5V19.5C4 20.6 4.9 21.5 6 21.5H18C19.1 21.5 20 20.6 20 19.5V15.5C21.66 15.5 23 14.16 23 12.5C23 10.84 21.66 9.5 20 9.5ZM7.5 12C7.5 11.17 8.17 10.5 9 10.5C9.83 10.5 10.5 11.17 10.5 12C10.5 12.83 9.83 13.5 9 13.5C8.17 13.5 7.5 12.83 7.5 12ZM15 17.5H9C8.45 17.5 8 17.05 8 16.5C8 15.95 8.45 15.5 9 15.5H15C15.55 15.5 16 15.95 16 16.5C16 17.05 15.55 17.5 15 17.5ZM15 13.5C14.17 13.5 13.5 12.83 13.5 12C13.5 11.17 14.17 10.5 15 10.5C15.83 10.5 16.5 11.17 16.5 12C16.5 12.83 15.83 13.5 15 13.5Z"
                    fill="#F4F4F6"
                  />
                </svg>
              </div>
            </div>
            <div className="margin-bottom-08">
              <div className="subheading-large">Title here</div>
            </div>
            <div className="paragraph-small text-color-gray-400">
              Lorem ipsum is a placeholder text to demonstrate the visual form.
            </div>
            <div
              className="shape-wrapper"
              style={{
                transform:
                  "translate3d(100%, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="feature-shape w-embed">
                <svg
                  width="90"
                  height="90"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M70 -70C70 -81.0457 78.9543 -90 90 -90C101.046 -90 110 -81.0457 110 -70V-48.7208L125.137 -63.8579C132.948 -71.6684 145.611 -71.6684 153.421 -63.8579C161.232 -56.0474 161.232 -43.3841 153.421 -35.5736L137.848 -20H160C171.046 -20 180 -11.0457 180 0C180 11.0457 171.046 20 160 20H138.284L153.421 35.1371C161.232 42.9476 161.232 55.6109 153.421 63.4214C145.611 71.2319 132.948 71.2319 125.137 63.4214L110 48.2843V70C110 81.0457 101.046 90 90 90C78.9543 90 70 81.0457 70 70V47.8477L54.4264 63.4213C46.6159 71.2318 33.9526 71.2318 26.1421 63.4213C18.3316 55.6108 18.3316 42.9475 26.1421 35.1371L41.2792 20H20C8.95431 20 0 11.0457 0 7.62939e-06C0 -11.0457 8.9543 -20 20 -20H41.7157L26.1421 -35.5736C18.3316 -43.384 18.3316 -56.0473 26.1421 -63.8578C33.9526 -71.6683 46.6159 -71.6683 54.4264 -63.8578L70 -48.2842V-70Z"
                    fill="#B277CF"
                  />
                </svg>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="feature-card w-inline-block"
            style={{ backgroundColor: "rgb(34, 36, 47)" }}
          >
            <div
              className="feature-icon-wrapper"
              style={{ backgroundColor: "rgb(51, 54, 71)" }}
            >
              <div className="icon-regular w-embed">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 20H20C21.1 20 22 19.1 22 18C22 16.9 21.1 16 20 16H4C2.9 16 2 16.9 2 18C2 19.1 2.9 20 4 20ZM4 17H6V19H4V17ZM2 6C2 7.1 2.9 8 4 8H20C21.1 8 22 7.1 22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6ZM6 7H4V5H6V7ZM4 14H20C21.1 14 22 13.1 22 12C22 10.9 21.1 10 20 10H4C2.9 10 2 10.9 2 12C2 13.1 2.9 14 4 14ZM4 11H6V13H4V11Z"
                    fill="#F4F4F6"
                  />
                </svg>
              </div>
            </div>
            <div className="margin-bottom-08">
              <div className="subheading-large">Title here</div>
            </div>
            <div className="paragraph-small text-color-gray-400">
              Lorem ipsum is a placeholder text to demonstrate the visual form.
            </div>
            <div
              className="shape-wrapper"
              style={{
                transform:
                  "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="feature-shape w-embed">
                <svg
                  width="120"
                  height="90"
                  viewBox="0 0 120 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.6 63C55.2613 63 71.2 46.8822 71.2 27C71.2 7.11774 55.2613 -9 35.6 -9C15.9387 -9 0 7.11774 0 27C0 46.8822 15.9387 63 35.6 63Z"
                    fill="#ED5959"
                  />
                  <path
                    d="M120.15 90C132.438 90 142.4 79.9264 142.4 67.5C142.4 55.0736 132.438 45 120.15 45C107.862 45 97.9 55.0736 97.9 67.5C97.9 79.9264 107.862 90 120.15 90Z"
                    fill="#ED5959"
                  />
                  <path
                    d="M124.6 18C154.092 18 178 -6.17662 178 -36C178 -65.8234 154.092 -90 124.6 -90C95.108 -90 71.2 -65.8234 71.2 -36C71.2 -6.17662 95.108 18 124.6 18Z"
                    fill="#ED5959"
                  />
                </svg>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="feature-card w-inline-block"
            style={{ backgroundColor: "rgb(17, 18, 24)" }}
          >
            <div
              className="feature-icon-wrapper"
              style={{ backgroundColor: "rgb(34, 36, 47)" }}
            >
              <div className="icon-regular w-embed">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0015 2.5C11.5415 2.5 11.0715 2.54 10.6015 2.64C7.84154 3.17 5.64154 5.4 5.12154 8.16C4.64154 10.77 5.60154 13.17 7.34154 14.72C7.77154 15.1 8.00154 15.63 8.00154 16.19V18.5C8.00154 19.6 8.90154 20.5 10.0015 20.5H10.2815C10.6315 21.1 11.2615 21.5 12.0015 21.5C12.7415 21.5 13.3815 21.1 13.7215 20.5H14.0015C15.1015 20.5 16.0015 19.6 16.0015 18.5V16.19C16.0015 15.64 16.2215 15.1 16.6415 14.73C18.0915 13.45 19.0015 11.58 19.0015 9.5C19.0015 5.63 15.8715 2.5 12.0015 2.5ZM12.5015 13.5H11.5015V10.91L9.67154 9.09L10.3815 8.38L12.0015 10L13.6215 8.38L14.3315 9.09L12.5015 10.92V13.5ZM13.5015 18.5C13.4915 18.5 13.4815 18.49 13.4715 18.49V18.5H10.5315V18.49C10.5215 18.49 10.5115 18.5 10.5015 18.5C10.2215 18.5 10.0015 18.28 10.0015 18C10.0015 17.72 10.2215 17.5 10.5015 17.5C10.5115 17.5 10.5215 17.51 10.5315 17.51V17.5H13.4715V17.51C13.4815 17.51 13.4915 17.5 13.5015 17.5C13.7815 17.5 14.0015 17.72 14.0015 18C14.0015 18.28 13.7815 18.5 13.5015 18.5ZM13.5015 16.5H10.5015C10.2215 16.5 10.0015 16.28 10.0015 16C10.0015 15.72 10.2215 15.5 10.5015 15.5H13.5015C13.7815 15.5 14.0015 15.72 14.0015 16C14.0015 16.28 13.7815 16.5 13.5015 16.5Z"
                    fill="#F4F4F6"
                  />
                </svg>
              </div>
            </div>
            <div className="margin-bottom-08">
              <div className="subheading-large">Title here</div>
            </div>
            <div className="paragraph-small text-color-gray-400">
              Lorem ipsum is a placeholder text to demonstrate the visual form.
            </div>
            <div
              className="shape-wrapper"
              style={{
                transform:
                  "translate3d(100%, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="feature-shape w-embed">
                <svg
                  width="90"
                  height="90"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M71.7798 -78.4383L2.66869 56.2217C-5.08013 71.4106 4.97239 90 20.8889 90H159.111C175.028 90 185.08 71.4106 177.331 56.2217L108.22 -78.4383C100.262 -93.8539 79.7381 -93.8539 71.7798 -78.4383Z"
                    fill="#333647"
                  />
                </svg>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="feature-card w-inline-block"
            style={{ backgroundColor: "rgb(17, 18, 24)" }}
          >
            <div
              className="feature-icon-wrapper"
              style={{ backgroundColor: "rgb(34, 36, 47)" }}
            >
              <div className="icon-regular w-embed">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5488 14.4462V20.4462C12.5488 20.9962 12.9988 21.4462 13.5488 21.4462H19.5488C20.0988 21.4462 20.5488 20.9962 20.5488 20.4462V14.4462C20.5488 13.8962 20.0988 13.4462 19.5488 13.4462H13.5488C12.9988 13.4462 12.5488 13.8962 12.5488 14.4462ZM3.54883 21.4462H9.54883C10.0988 21.4462 10.5488 20.9962 10.5488 20.4462V14.4462C10.5488 13.8962 10.0988 13.4462 9.54883 13.4462H3.54883C2.99883 13.4462 2.54883 13.8962 2.54883 14.4462V20.4462C2.54883 20.9962 2.99883 21.4462 3.54883 21.4462ZM2.54883 4.44621V10.4462C2.54883 10.9962 2.99883 11.4462 3.54883 11.4462H9.54883C10.0988 11.4462 10.5488 10.9962 10.5488 10.4462V4.44621C10.5488 3.89621 10.0988 3.44621 9.54883 3.44621H3.54883C2.99883 3.44621 2.54883 3.89621 2.54883 4.44621ZM15.4988 2.84621L11.2488 7.08621C10.8588 7.47621 10.8588 8.10621 11.2488 8.49621L15.4988 12.7462C15.8888 13.1362 16.5188 13.1362 16.9088 12.7462L21.1588 8.49621C21.5488 8.10621 21.5488 7.47621 21.1588 7.08621L16.9188 2.84621C16.5288 2.45621 15.8888 2.45621 15.4988 2.84621Z"
                    fill="#F4F4F6"
                  />
                </svg>
              </div>
            </div>
            <div className="margin-bottom-08">
              <div className="subheading-large">Title here</div>
            </div>
            <div className="paragraph-small text-color-gray-400">
              Lorem ipsum is a placeholder text to demonstrate the visual form.
            </div>
            <div
              className="shape-wrapper"
              style={{
                transform:
                  "translate3d(100%, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="feature-shape w-embed">
                <svg
                  width="222"
                  height="90"
                  viewBox="0 0 222 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M180 -90C203.869 -90 226.761 -80.5179 243.64 -63.6396C260.518 -46.7613 270 -23.8695 270 -5.72157e-06C270 23.8695 260.518 46.7613 243.64 63.6396C226.761 80.5179 203.869 90 180 90L180 0L180 -90Z"
                    fill="#5A6DED"
                  />
                  <path
                    d="M90 -90C113.869 -90 136.761 -80.5179 153.64 -63.6396C170.518 -46.7613 180 -23.8695 180 -7.62939e-06C180 23.8695 170.518 46.7613 153.64 63.6396C136.761 80.5179 113.869 90 90 90L90 0V-90Z"
                    fill="#5A6DED"
                  />
                </svg>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="feature-card w-inline-block"
            style={{ backgroundColor: "rgb(17, 18, 24)" }}
          >
            <div
              className="feature-icon-wrapper"
              style={{ backgroundColor: "rgb(34, 36, 47)" }}
            >
              <div className="icon-regular w-embed">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04Z"
                    fill="#F4F4F6"
                  />
                </svg>
              </div>
            </div>
            <div className="margin-bottom-08">
              <div className="subheading-large">Title here</div>
            </div>
            <div className="paragraph-small text-color-gray-400">
              Lorem ipsum is a placeholder text to demonstrate the visual form.
            </div>
            <div
              className="shape-wrapper"
              style={{
                transform:
                  "translate3d(100%, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="feature-shape w-embed">
                <svg
                  width="90"
                  height="90"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="90" r="90" fill="white" />
                </svg>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="feature-card w-inline-block"
            style={{ backgroundColor: "rgb(17, 18, 24)" }}
          >
            <div
              className="feature-icon-wrapper"
              style={{ backgroundColor: "rgb(34, 36, 47)" }}
            >
              <div className="icon-regular w-embed">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8 17.5C6.62 17.5 5.5 16.38 5.5 15C5.5 13.62 6.62 12.5 8 12.5C9.38 12.5 10.5 13.62 10.5 15C10.5 16.38 9.38 17.5 8 17.5ZM9.5 8C9.5 6.62 10.62 5.5 12 5.5C13.38 5.5 14.5 6.62 14.5 8C14.5 9.38 13.38 10.5 12 10.5C10.62 10.5 9.5 9.38 9.5 8ZM16 17.5C14.62 17.5 13.5 16.38 13.5 15C13.5 13.62 14.62 12.5 16 12.5C17.38 12.5 18.5 13.62 18.5 15C18.5 16.38 17.38 17.5 16 17.5Z"
                    fill="#F4F4F6"
                  />
                </svg>
              </div>
            </div>
            <div className="margin-bottom-08">
              <div className="subheading-large">Title here</div>
            </div>
            <div className="paragraph-small text-color-gray-400">
              Lorem ipsum is a placeholder text to demonstrate the visual form.
            </div>
            <div
              className="shape-wrapper"
              style={{
                transform:
                  "translate3d(100%, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="feature-shape w-embed">
                <svg
                  width="90"
                  height="90"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M90 -90C66.1305 -90 43.2387 -80.5179 26.3604 -63.6396C9.48212 -46.7613 2.08674e-06 -23.8695 0 -7.62939e-06C-2.08674e-06 23.8695 9.48211 46.7613 26.3604 63.6396C43.2387 80.5179 66.1305 90 90 90L90 28.8C82.3618 28.8 75.0364 25.7657 69.6353 20.3647C64.2343 14.9636 61.2 7.63823 61.2 0C61.2 -7.63824 64.2343 -14.9636 69.6353 -20.3647C75.0364 -25.7657 82.3618 -28.8 90 -28.8V-90Z"
                    fill="#ED955A"
                  />
                </svg>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="feature-card w-inline-block"
            style={{ backgroundColor: "rgb(17, 18, 24)" }}
          >
            <div
              className="feature-icon-wrapper"
              style={{ backgroundColor: "rgb(34, 36, 47)" }}
            >
              <div className="icon-regular w-embed">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 10.9075C17.34 10.9075 17.67 10.9475 18 10.9975V7.48753C18 6.68753 17.53 5.96753 16.8 5.65753L11.3 3.25753C10.79 3.03753 10.21 3.03753 9.7 3.25753L4.2 5.65753C3.47 5.97753 3 6.69753 3 7.48753V11.0875C3 15.6275 6.2 19.8775 10.5 20.9075C11.05 20.7775 11.58 20.5875 12.1 20.3575C11.41 19.3775 11 18.1875 11 16.9075C11 13.5975 13.69 10.9075 17 10.9075Z"
                    fill="#F4F4F6"
                  />
                  <path
                    d="M17 12.9075C14.79 12.9075 13 14.6975 13 16.9075C13 19.1175 14.79 20.9075 17 20.9075C19.21 20.9075 21 19.1175 21 16.9075C21 14.6975 19.21 12.9075 17 12.9075ZM17 14.2875C17.62 14.2875 18.12 14.7975 18.12 15.4075C18.12 16.0175 17.61 16.5275 17 16.5275C16.39 16.5275 15.88 16.0175 15.88 15.4075C15.88 14.7975 16.38 14.2875 17 14.2875ZM17 19.6575C16.07 19.6575 15.26 19.1975 14.76 18.4875C14.81 17.7675 16.27 17.4075 17 17.4075C17.73 17.4075 19.19 17.7675 19.24 18.4875C18.74 19.1975 17.93 19.6575 17 19.6575Z"
                    fill="#F4F4F6"
                  />
                </svg>
              </div>
            </div>
            <div className="margin-bottom-08">
              <div className="subheading-large">Title here</div>
            </div>
            <div className="paragraph-small text-color-gray-400">
              Lorem ipsum is a placeholder text to demonstrate the visual form.
            </div>
            <div
              className="shape-wrapper"
              style={{
                transform:
                  "translate3d(100%, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="feature-shape w-embed">
                <svg
                  width="90"
                  height="90"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="-90"
                    width="180"
                    height="180"
                    rx="90"
                    fill="#F4D452"
                  />
                  <path
                    d="M88.7468 66.96C96.3701 66.96 100.875 61.4067 100.875 53.0769C100.875 38.8467 92.2119 31.211 91.1724 3.09782C115.082 18.0221 117.161 29.1286 129.289 36.4172C132.407 38.1526 134.833 38.8467 137.605 38.8467C141.763 38.8467 145.228 36.7643 147.654 32.9464C148.694 31.211 149.04 29.1286 149.04 27.0461C149.04 22.8812 146.268 18.7163 141.417 15.9397C128.942 8.99812 117.507 12.4689 92.9049 -0.37294C117.507 -13.909 128.942 -10.4382 141.417 -17.3797C146.268 -20.5034 149.04 -24.3212 149.04 -28.8333C149.04 -30.5686 148.694 -32.6511 147.654 -34.7336C145.228 -38.5514 141.763 -40.6339 137.605 -40.6339C134.833 -40.6339 132.407 -39.9397 129.289 -38.2043C117.161 -30.9157 115.082 -18.768 91.1724 -4.1908C91.8654 -32.304 100.875 -40.2868 100.875 -54.864C100.875 -63.1939 96.3701 -68.4 88.7468 -68.4C81.47 -68.4 76.9653 -63.1939 76.9653 -54.864C76.9653 -40.2868 86.6677 -32.6511 87.3607 -4.1908C62.7583 -19.1151 60.6792 -30.9157 48.2048 -38.2043C45.4327 -39.9397 43.0071 -40.6339 40.235 -40.6339C36.0768 -40.6339 32.6117 -38.5514 30.1861 -34.7336C29.1466 -32.6511 28.8 -30.5686 28.8 -28.8333C28.8 -24.3212 31.5722 -20.5034 36.4233 -17.3797C48.8978 -10.4382 59.6397 -13.909 84.9351 -0.37294C60.3327 12.816 48.5513 8.99812 36.4233 15.9397C31.5722 18.7163 28.8 22.8812 28.8 27.0461C28.8 29.1286 29.1466 31.211 30.1861 32.9464C32.6117 36.7643 36.0768 38.8467 40.235 38.8467C43.0071 38.8467 45.4327 38.1526 48.2048 36.4172C60.6792 29.1286 62.7583 18.3692 87.0142 3.09782C85.9747 31.5581 76.9653 38.4997 76.9653 53.0769C76.9653 61.4067 81.47 66.96 88.7468 66.96Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
