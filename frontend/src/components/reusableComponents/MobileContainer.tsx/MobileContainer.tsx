import React from "react";

const MobileContainer = ({children}: any) => {
  return (
    <div className="PhoneModule">
      <div className="PhoneModule__child">
        <div className="PhoneContent">
          <div className="PhoneHeader">
            <div>18:37</div>
            <div className="PhoneStatusBar">
              <span className="PhoneStatusIcon">
                <svg
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fontSize="16"
                >
                  <path
                    fill="currentColor"
                    d="M528 448V64c0-8.8-7.2-16-16-16s-16 7.2-16 16V448c0 8.8 7.2 16 16 16s16-7.2 16-16zM448 64c0-35.3 28.7-64 64-64s64 28.7 64 64V448c0 35.3-28.7 64-64 64s-64-28.7-64-64V64zM376 448V192c0-8.8-7.2-16-16-16s-16 7.2-16 16V448c0 8.8 7.2 16 16 16s16-7.2 16-16zM296 192c0-35.3 28.7-64 64-64s64 28.7 64 64V448c0 35.3-28.7 64-64 64s-64-28.7-64-64V192zM208 464c8.8 0 16-7.2 16-16V320c0-8.8-7.2-16-16-16s-16 7.2-16 16V448c0 8.8 7.2 16 16 16zm0-208c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64s-64-28.7-64-64V320c0-35.3 28.7-64 64-64zM64 464a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm64-16A64 64 0 1 1 0 448a64 64 0 1 1 128 0z"
                  ></path>
                </svg>
              </span>
              <span className="PhoneStatusIcon">
                <svg
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  fontSize="16"
                >
                  <path
                    fill="currentColor"
                    d="M39.9 185.7C114.6 119.9 212.6 80 320 80s205.4 39.9 280.1 105.7c9.9 8.8 25.1 7.8 33.9-2.2s7.8-25.1-2.2-33.9C548.7 76.4 439.5 32 320 32S91.3 76.4 8.2 149.6c-9.9 8.8-10.9 23.9-2.2 33.9s23.9 10.9 33.9 2.2zM320 256c64.6 0 123.5 24.7 167.6 65.2c9.8 9 24.9 8.3 33.9-1.5s8.3-24.9-1.5-33.9C467.4 237.5 397.1 208 320 208s-147.4 29.5-200.1 77.9c-9.8 9-10.4 24.1-1.5 33.9s24.1 10.4 33.9 1.5C196.5 280.7 255.4 256 320 256zm56 168a56 56 0 1 0 -112 0 56 56 0 1 0 112 0z"
                  ></path>
                </svg>
              </span>
              <span className="PhoneStatusIcon">
                <svg
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fontSize="16"
                >
                  <path
                    fill="currentColor"
                    d="M464 144c17.7 0 32 14.3 32 32V336c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32V176c0-17.7 14.3-32 32-32H464zM80 96C35.8 96 0 131.8 0 176V336c0 44.2 35.8 80 80 80H464c44.2 0 80-35.8 80-80V320c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32V176c0-44.2-35.8-80-80-80H80zm80 96H96V320h64V192z"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="PhoneMain">
            <div className="PhoneMainHeader">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAAAxCAMAAADurbXXAAAAOVBMVEX///8Xd/GNvPjL4PyBtPhHkvS61vqoy/k3ifTU5vxRmfUqgfN0rvfr8v71+f+cxPlopvbg7P1coPZ0ESIMAAAFIklEQVRo3u2a3XLcIAyFvWDAmF/7/R+2641jSRxw2+nsdCaJrpoA4nxCwkA6fWdLXlvttzy92fK7p8hbuu9g6/I4rUxvsqTibo5p7PQmU7GuS3g85rtOmzko3w2rX+7fCXv6v4XV4fFtYNPy+D6w8+P7wObwjWD1hblE9TR9tXxB2PLZZc9NyxeEjZ9dtrblC8LWzySGli8Iu549DLT8wP7A/sD+wP43WOsOWz53Y/dh6WxNbl/CcdLQL6Vnq2fjk53Xo0tY1mgzx1KvocHUsg1g89P707mZNerKp9/FVNf9Hvqym495lb6FTe60aTow0T5wsqLfrBt9oBRpr3JcTKfUIvzuugfr6IxqGtw0BxgvzBrevpQ8hr0kjmBfmjfRtmwAm+sgSja0v58RVt49FEdx4HfPcPcWFvQI1l4uRrDEymgzh8UOdChRD7S9hS0QDn6eQ89UOxRLbqUPmz9FhjSADUc3A6sjYVNn6HytC5iSsAU6WMGKtEmUAprrws4UjAGs6S/PKnSvD7QjmTwL2roGahNCA0Y4iRzG2eGdASZHWE9II9hd3nDXGHdYJMt1RBV389QrgmD8a7qVnDarYmKsQboVE4cao4FEjSNhpgNrxGZS1GFXYquXWR7fml7xXBtVhn7MZ8iL4jhxOm2n+ThssB8LGaDgZeIvsj0R3NbskhZgC/m6O1SsoDkKFbqtNeiWrr2TD8Ma9DIPQ+s3XWF1ogjr2U7hWVvYFK7N9Rb2AZqTgFW9mPG6mMH7LmAdhQeDSCyQKwaEUSnmBrZSGO9gPSwsi6niK58layKYliZw4Qs1b7RVsCB6VLdw/3Pns2wlrCWIW1jbSVLLYQMJJOM0Gh995CqRGQazs68f5GkSwjDAisPyT+w9bOlo9ugTs5jE+Mtm0qpxnARcqf5w5bz8N9RcFLAzJBnAQjC7AUziewDC+rYRLBdAqlj91UG2FCgfOYhgPVXHABbnJ8sMdgPRlBJD84MrnmIAgRYJU8oKYVgHK4c1FON/hPX/Bdb9BWxc4LMDsDD/X66se/PKqjvYna+shX17vEFhDmwMNo9q1v4hrOudQ7hu6RNrlu+wobtBVRp2D+s6HXVvN47j3RgsMx9zZ/YASiDyXWGZnDJYOj+ZfA9rOyvgOOxCI4R5LgYND0jcl1xl3K2zSA2cs3BYLvgeNj0QZuVjK+UmM8hvhIU0lAcdhzA5cC10EMZgeAlLin0XFs+bFnUqLmq9LX+ExTw2PD4Jz5NKDNlBWKI3BwlLu4y5Vxjb24lfCJZmkFWb8YaAsO3SKTp0CPSa2/3dix8X3T5IRQErfJcuLKoKZXuylfbyHtnb3nbQa2VWeTnK7MG1htxe3utTbbZr8xRhya99DvGxfcZiQT+EuUDBAti88DaEpeQCCxx26zUlEYVQVXFFzftypZ2m/mBWTIymf/MljxPAUnD3W1gNzpZKsIOzkrt5I5q5V7MO35g2DIQsi9pvNxlgeejd7a4yQ+QJlvnBB1M/ECNgoVPY7s8llXYGWnsYD7A5wD0PYRGmwiO5wikzPRuBJQ7bJkbQo/+ThYeQvGO72X73SF6HsAgTO3/+sKZfV7n2Qu8FrKw9I76EqR2/2Oa6EdpY5GkAS98qhBW21UuMnRD2EL8HhlP1NVItUm20eZKwk69XK5xAtsjGrxb/7lUMc67S3R+2AsHeW7Zljsr5my7eqTnGGTolq+ZY9xqV06k/NDkVoypbt3E7/M6q6DyUpmKci03Tj4H9AvcJNoxK8vCpAAAAAElFTkSuQmCC"
                alt="facebook"
                className="PhoneMainHeaderImg"
              ></img>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAABKCAMAAAAPO3/GAAAAUVBMVEXr7O////8bHiH29/jv8PP4+fopKS3g4eTQ0dRvcHNNTlG8vsBZWl03Oj5hY2XCxMepqq2xs7aPkZNoaWyho6UxMzWDhYdERUjl5+rZ2959foEUBXClAAADxElEQVRo3syV23LkIAxEezEGfBvb42Qu+f8P3dqCbDGRQCbKQ/rVVacOtITx59enrtj3XWetBay1Xdf3DWA9V1bsOwsS22k0ZW6LYsYhtCYjPRc8CNW0SOq5EEBqST2XKvYWJ2IbZlLJhXBU9UXquRCOqr5IPRevJDTljKOeC6EMddl6LgSS2lHPhdCGums9FwJJ7ajngt85vaOeSxS/S4KtK+q54EdavzI/x0VtYPw2jItzyzhsXqikdRCn2zwuxizjfJsELsp1rBeT5bJ+p2rL+x0uR7tjqnFRqiNEwVwyNFfdsYKzIZmnMheFOnZHOW4Xq5ZrfhyGzfEoccEf9spzri3XyJdzN4XcA8tNipKh7MgrMiU7U4ybeC64w+4mxQ1b8D5sw3/y3nCNhIvgTCUuUG5StCXQh0eK/yAYaakpF34x1Sye44IZ6rTL7yuyrO9pr88uDOViNkJmjgvax5oMA14SkuN6qml+fsTsDBe0j0tBZa1doz3R811WvDNckL3zaQ5BkubRg4u8z2/mRN4oF2RktrgWjIiPa7SdG8aemUQ5M+WCjMxg/mVAHvkTOmkUfVVtnA3fUccojuWr2iKtUZHvebgeL7+EJ9N0UiRTHd+uACYhvl7n9sWSCvJMAKYl+6/cPtUJlyq68k74CGxWpKN4i7w51vIEQjaMRBFqRX6la0/O8kDM9VN3LD47SVFftKzoXmtOmY79dVCdoKhYF1ExMzzwJc/Mn1NsfnS0t+j+VmsFuRHCMDDKqhsSoBIQEOn/H1qpe5hsjZjap3pOqz1EDklsz3ha+IUtkq+oTt32u4i8smzdaUeA3EVTAeQh4kXjohxdf3zOd+UFSUfbRtjz4hBCK69wUniFC5C8aG/GeIh4tEdHD+YRx4x2TIT4CJaW1l6j2xsz2tb8Tg5OUqM5MYjVFiKy81TiDTaxLpoxRq/A+JOxGVvjHzCKdWVLy1fbF21Li4erJy8gBqodZxsxqJFiEOuCXnHBpEdJSnqF26jc+6MnqVx2qvg9DxaSOjzJMZ+XJBUnwsW77o89aak+j3FO8v4IwYRIoGnHel8WweQcowDRnYTsRLB0WzbITqKUUPVOiHccGWXAJt6FeI3nelkPhATKkQr6FYUESkM8bupBUOn6aCZiNQrJUWJa211RDarpCNqJT6sc//MwamvLsU2lTPlYEpH5g3oKlvL8LNU81MiYDzB8eBsNeRiwkaO22w/s63oc9noYmXswHniwb3gwwXiwEnkwZLmwtXkwB7qwWLowqrqw+7owTf8bfAP6ozRGR1CoggAAAABJRU5ErkJggg=="
                alt="search and message icons"
                className="PhoneMainHeaderImg"
              ></img>
            </div>
            <div className="PhoneMainBody">
              <div className="PhoneMainBodyWrapper">{children}</div>
            </div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAzwAAABvCAYAAAApBMUqAAAFVGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICBleGlmOlBpeGVsWERpbWVuc2lvbj0iODI4IgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTExIgogICBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIgogICBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiCiAgIHRpZmY6SW1hZ2VMZW5ndGg9IjExMSIKICAgdGlmZjpJbWFnZVdpZHRoPSI4MjgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249Ijk2LjAiCiAgIHRpZmY6WVJlc29sdXRpb249Ijk2LjAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIw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"
              alt="icons"
              className="PhoneFooter"
            ></img>
          </div>
        </div>
        <div className="PhoneTemplate"></div>
      </div>
    </div>
  );
};

export default MobileContainer;
