import "./../../../public/assets/plugins/nprogress/nprogress.css";
import "./../../../public/assets/plugins/daterangepicker/daterangepicker.css";
import "./../../../public/assets/plugins/jvectormap/jquery-jvectormap-2.0.3.css";
import "./../../../public/assets/plugins/toastr/toastr.min.css";
import "./../../../public/assets/css/sleek.css";
import "./../../../public/assets/options/optionswitch.css";
import "./../../../public/assets/img/favicon.png";
import Image from "next/image";
import Script from "next/script";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <!-- theme meta --> */}
      {/* <meta name="theme-name" content="sleek" /> */}

      {/* <title>Ecommerce - Sleek Admin Dashboard Template</title> */}

      {/* <!-- GOOGLE FONTS --> */}
      {/* <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500|Poppins:400,500,600,700|Roboto:400,500" rel="stylesheet" /> */}

      {/* <link href="https://cdn.materialdesignicons.com/4.4.95/css/materialdesignicons.min.css" rel="stylesheet" /> */}

      {/* <!-- PLUGINS CSS STYLE --> */}
      {/* <link href="assets/plugins/simplebar/simplebar.css" rel="stylesheet" /> Not Existed*/}
      {/* <link href="assets/plugins/nprogress/nprogress.css" rel="stylesheet" /> */}

      {/* <!-- No Extra plugin used --> */}
      {/* <link href='assets/plugins/jvectormap/jquery-jvectormap-2.0.3.css' rel='stylesheet' /> */}
      {/* <link href='assets/plugins/daterangepicker/daterangepicker.css' rel='stylesheet'> */}

      {/* <link href='assets/plugins/toastr/toastr.min.css' rel='stylesheet'> */}

      {/* <!-- SLEEK CSS --> */}
      {/* <link id="sleek-css" rel="stylesheet" href="assets/css/sleek.css" /> */}

      {/* <!-- FAVICON --> */}
      {/* <link href="assets/img/favicon.png" rel="shortcut icon" /> */}

      {/* <!--
      HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries
    -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]> */}
      <Script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js" strategy="afterInteractive" />
      <Script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js" strategy="afterInteractive" />
      {/* <![endif]--> */}
      <Script src="/assets/plugins/nprogress/nprogress.js" strategy="afterInteractive" />

    <body
      className="header-fixed sidebar-fixed sidebar-dark header-light"
      id="body"
    >
      <Script id="nprogress-init" strategy="afterInteractive">
        {`
          if (window.NProgress) {
            window.NProgress.configure({ showSpinner: false });
            window.NProgress.start();
          }
        `}
      </Script>

      <div id="toaster"></div>

        <div className="wrapper">
          {/* <!-- Github Link --> */}
          <a
            href="https://github.com/tafcoder/sleek-dashboard"
            target="_blank"
            className="github-link"
          >
            <svg
              width="70"
              height="70"
              viewBox="0 0 250 250"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="75%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#896def", stopOpacity: "1" }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#482271", stopOpacity: "1" }}
                  />
                </linearGradient>
              </defs>
              <path
                d="M 0,0 L115,115 L115,115 L142,142 L250,250 L250,0 Z"
                fill="url(#grad1)"
              ></path>
            </svg>
            <i className="mdi mdi-github-circle"></i>
          </a>

          {/* <!-- ====================================
          ——— LEFT SIDEBAR WITH OUT FOOTER
        ===================================== --> */}
          <aside className="left-sidebar bg-sidebar">
            <div id="sidebar" className="sidebar sidebar-with-footer">
              {/* <!-- Aplication Brand --> */}
              <div className="app-brand">
                <a title="Sleek Dashboard">
                  <svg
                    className="brand-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                    width="30"
                    height="33"
                    viewBox="0 0 30 33"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path
                        className="logo-fill-blue"
                        fill="#7DBCFF"
                        d="M0 4v25l8 4V0zM22 4v25l8 4V0z"
                      />
                      <path
                        className="logo-fill-white"
                        fill="#FFF"
                        d="M11 4v25l8 4V0z"
                      />
                    </g>
                  </svg>

                  <span className="brand-name text-truncate">
                    Sleek Dashboard
                  </span>
                </a>
              </div>

              {/* <!-- begin sidebar scrollbar --> */}
              <div className="" data-simplebar style={{ height: "100%" }}>
                {/* <!-- sidebar menu --> */}
                <ul className="nav sidebar-inner" id="sidebar-menu">
                  <li className="has-sub active expand">
                    <a
                      className="sidenav-item-link"
                      href="javascript:void(0)"
                      data-toggle="collapse"
                      data-target="#dashboard"
                      aria-expanded="false"
                      aria-controls="dashboard"
                    >
                      <i className="mdi mdi-view-dashboard-outline"></i>
                      <span className="nav-text">Dashboard</span>{" "}
                      <b className="caret"></b>
                    </a>

                    <ul
                      className="collapse show"
                      id="dashboard"
                      data-parent="#sidebar-menu"
                    >
                      <div className="sub-menu">
                        <li className="active">
                          <a className="sidenav-item-link" href="index.html">
                            <span className="nav-text">Ecommerce</span>
                          </a>
                        </li>

                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="analytics.html"
                          >
                            <span className="nav-text">Analytics</span>
                            <span className="badge badge-success">new</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>

                  <li className="has-sub ">
                    <a
                      className="sidenav-item-link"
                      href="javascript:void(0)"
                      data-toggle="collapse"
                      data-target="#app"
                      aria-expanded="false"
                      aria-controls="app"
                    >
                      <i className="mdi mdi-pencil-box-multiple"></i>
                      <span className="nav-text">App</span>{" "}
                      <b className="caret"></b>
                    </a>

                    <ul
                      className="collapse "
                      id="app"
                      data-parent="#sidebar-menu"
                    >
                      <div className="sub-menu">
                        <li className="">
                          <a className="sidenav-item-link" href="chat.html">
                            <span className="nav-text">Chat</span>
                          </a>
                        </li>

                        <li className="">
                          <a className="sidenav-item-link" href="contacts.html">
                            <span className="nav-text">Contacts</span>
                          </a>
                        </li>

                        <li className="">
                          <a className="sidenav-item-link" href="team.html">
                            <span className="nav-text">Team</span>
                          </a>
                        </li>

                        <li className="">
                          <a className="sidenav-item-link" href="calendar.html">
                            <span className="nav-text">Calendar</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>

                  <li className="section-title">{/* UI Elements */}</li>

                  <li className="has-sub ">
                    <a
                      className="sidenav-item-link"
                      href="javascript:void(0)"
                      data-toggle="collapse"
                      data-target="#components"
                      aria-expanded="false"
                      aria-controls="components"
                    >
                      <i className="mdi mdi-folder-multiple-outline"></i>
                      <span className="nav-text">Components</span>{" "}
                      <b className="caret"></b>
                    </a>

                    <ul
                      className="collapse "
                      id="components"
                      data-parent="#sidebar-menu"
                    >
                      <div className="sub-menu">
                        <li className="">
                          <a className="sidenav-item-link" href="alert.html">
                            <span className="nav-text">Alert</span>
                          </a>
                        </li>

                        <li className="">
                          <a className="sidenav-item-link" href="badge.html">
                            <span className="nav-text">Badge</span>
                          </a>
                        </li>

                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="breadcrumb.html"
                          >
                            <span className="nav-text">Breadcrumb</span>
                          </a>
                        </li>

                        <li className="has-sub ">
                          <a
                            className="sidenav-item-link"
                            href="javascript:void(0)"
                            data-toggle="collapse"
                            data-target="#buttons"
                            aria-expanded="false"
                            aria-controls="buttons"
                          >
                            <span className="nav-text">Buttons</span>{" "}
                            <b className="caret"></b>
                          </a>

                          <ul className="collapse " id="buttons">
                            <div className="sub-menu">
                              <li className="">
                                <a href="button-default.html">Button Default</a>
                              </li>

                              <li className="">
                                <a href="button-dropdown.html">
                                  Button Dropdown
                                </a>
                              </li>

                              <li className="">
                                <a href="button-group.html">Button Group</a>
                              </li>

                              <li className="">
                                <a href="button-social.html">Button Social</a>
                              </li>

                              <li className="">
                                <a href="button-loading.html">Button Loading</a>
                              </li>
                            </div>
                          </ul>
                        </li>

                        <li className="">
                          <a className="sidenav-item-link" href="card.html">
                            <span className="nav-text">Card</span>
                          </a>
                        </li>

                        <li className="">
                          <a className="sidenav-item-link" href="carousel.html">
                            <span className="nav-text">Carousel</span>
                          </a>
                        </li>

                        <li className="">
                          <a className="sidenav-item-link" href="collapse.html">
                            <span className="nav-text">Collapse</span>
                          </a>
                        </li>

                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="list-group.html"
                          >
                            <span className="nav-text">List Group</span>
                          </a>
                        </li>

                        <li className="">
                          <a className="sidenav-item-link" href="modal.html">
                            <span className="nav-text">Modal</span>
                          </a>
                        </li>

                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="pagination.html"
                          >
                            <span className="nav-text">Pagination</span>
                          </a>
                        </li>

                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="popover-tooltip.html"
                          >
                            <span className="nav-text">Popover & Tooltip</span>
                          </a>
                        </li>

                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="progress-bar.html"
                          >
                            <span className="nav-text">Progress Bar</span>
                          </a>
                        </li>

                        <li className="">
                          <a className="sidenav-item-link" href="spinner.html">
                            <span className="nav-text">Spinner</span>
                          </a>
                        </li>

                        <li className="">
                          <a className="sidenav-item-link" href="switcher.html">
                            <span className="nav-text">Switcher</span>
                          </a>
                        </li>

                        <li className="">
                          <a className="sidenav-item-link" href="tab.html">
                            <span className="nav-text">Tab</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>

                  <li className="has-sub ">
                    <a
                      className="sidenav-item-link"
                      href="javascript:void(0)"
                      data-toggle="collapse"
                      data-target="#icons"
                      aria-expanded="false"
                      aria-controls="icons"
                    >
                      <i className="mdi mdi-diamond-stone"></i>
                      <span className="nav-text">Icons</span>{" "}
                      <b className="caret"></b>
                    </a>

                    <ul
                      className="collapse "
                      id="icons"
                      data-parent="#sidebar-menu"
                    >
                      <div className="sub-menu">
                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="material-icon.html"
                          >
                            <span className="nav-text">Material Icon</span>
                          </a>
                        </li>

                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="flag-icon.html"
                          >
                            <span className="nav-text">Flag Icon</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>

                  <li className="has-sub ">
                    <a
                      className="sidenav-item-link"
                      href="javascript:void(0)"
                      data-toggle="collapse"
                      data-target="#forms"
                      aria-expanded="false"
                      aria-controls="forms"
                    >
                      <i className="mdi mdi-email-mark-as-unread"></i>
                      <span className="nav-text">Forms</span>{" "}
                      <b className="caret"></b>
                    </a>

                    <ul
                      className="collapse "
                      id="forms"
                      data-parent="#sidebar-menu"
                    >
                      <div className="sub-menu">
                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="basic-input.html"
                          >
                            <span className="nav-text">Basic Input</span>
                          </a>
                        </li>

                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="input-group.html"
                          >
                            <span className="nav-text">Input Group</span>
                          </a>
                        </li>

                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="checkbox-radio.html"
                          >
                            <span className="nav-text">Checkbox & Radio</span>
                          </a>
                        </li>

                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="form-validation.html"
                          >
                            <span className="nav-text">Form Validation</span>
                          </a>
                        </li>

                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="form-advance.html"
                          >
                            <span className="nav-text">Form Advance</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>

                  <li className="has-sub ">
                    <a
                      className="sidenav-item-link"
                      href="javascript:void(0)"
                      data-toggle="collapse"
                      data-target="#tables"
                      aria-expanded="false"
                      aria-controls="tables"
                    >
                      <i className="mdi mdi-table"></i>
                      <span className="nav-text">Tables</span>{" "}
                      <b className="caret"></b>
                    </a>

                    <ul
                      className="collapse "
                      id="tables"
                      data-parent="#sidebar-menu"
                    >
                      <div className="sub-menu">
                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="basic-tables.html"
                          >
                            <span className="nav-text">Basic Tables</span>
                          </a>
                        </li>

                        <li className="has-sub ">
                          <a
                            className="sidenav-item-link"
                            href="javascript:void(0)"
                            data-toggle="collapse"
                            data-target="#data-tables"
                            aria-expanded="false"
                            aria-controls="data-tables"
                          >
                            <span className="nav-text">Data Tables</span>{" "}
                            <b className="caret"></b>
                          </a>

                          <ul className="collapse " id="data-tables">
                            <div className="sub-menu">
                              <li className="">
                                <a href="basic-data-table.html">
                                  Basic Data Table
                                </a>
                              </li>

                              <li className="">
                                <a href="responsive-data-table.html">
                                  Responsive Data Table
                                </a>
                              </li>

                              <li className="">
                                <a href="hoverable-data-table.html">
                                  Hoverable Data Table
                                </a>
                              </li>

                              <li className="">
                                <a href="expendable-data-table.html">
                                  Expendable Data Table
                                </a>
                              </li>
                            </div>
                          </ul>
                        </li>
                      </div>
                    </ul>
                  </li>

                  <li className="has-sub ">
                    <a
                      className="sidenav-item-link"
                      href="javascript:void(0)"
                      data-toggle="collapse"
                      data-target="#maps"
                      aria-expanded="false"
                      aria-controls="maps"
                    >
                      <i className="mdi mdi-google-maps"></i>
                      <span className="nav-text">Maps</span>{" "}
                      <b className="caret"></b>
                    </a>

                    <ul
                      className="collapse "
                      id="maps"
                      data-parent="#sidebar-menu"
                    >
                      <div className="sub-menu">
                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="google-map.html"
                          >
                            <span className="nav-text">Google Map</span>
                          </a>
                        </li>

                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="vector-map.html"
                          >
                            <span className="nav-text">Vector Map</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>

                  <li className="has-sub ">
                    <a
                      className="sidenav-item-link"
                      href="javascript:void(0)"
                      data-toggle="collapse"
                      data-target="#widgets"
                      aria-expanded="false"
                      aria-controls="widgets"
                    >
                      <i className="mdi mdi-widgets"></i>
                      <span className="nav-text">Widgets</span>{" "}
                      <b className="caret"></b>
                    </a>

                    <ul
                      className="collapse "
                      id="widgets"
                      data-parent="#sidebar-menu"
                    >
                      <div className="sub-menu">
                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="general-widget.html"
                          >
                            <span className="nav-text">General Widget</span>
                          </a>
                        </li>

                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="chart-widget.html"
                          >
                            <span className="nav-text">Chart Widget</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>

                  <li className="has-sub ">
                    <a
                      className="sidenav-item-link"
                      href="javascript:void(0)"
                      data-toggle="collapse"
                      data-target="#charts"
                      aria-expanded="false"
                      aria-controls="charts"
                    >
                      <i className="mdi mdi-chart-pie"></i>
                      <span className="nav-text">Charts</span>{" "}
                      <b className="caret"></b>
                    </a>

                    <ul
                      className="collapse "
                      id="charts"
                      data-parent="#sidebar-menu"
                    >
                      <div className="sub-menu">
                        <li className="">
                          <a className="sidenav-item-link" href="chartjs.html">
                            <span className="nav-text">ChartJS</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>

                  {/* <!--Pages -->  */}
                  <li className="section-title"></li>

                  <li className="has-sub ">
                    <a
                      className="sidenav-item-link"
                      href="javascript:void(0)"
                      data-toggle="collapse"
                      data-target="#pages"
                      aria-expanded="false"
                      aria-controls="pages"
                    >
                      <i className="mdi mdi-image-filter-none"></i>
                      <span className="nav-text">Pages</span>{" "}
                      <b className="caret"></b>
                    </a>

                    <ul
                      className="collapse "
                      id="pages"
                      data-parent="#sidebar-menu"
                    >
                      <div className="sub-menu ">
                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="user-profile.html"
                          >
                            <span className="nav-text">User Profile</span>
                          </a>
                        </li>

                        <li className="has-sub ">
                          <a
                            className="sidenav-item-link"
                            href="javascript:void(0)"
                            data-toggle="collapse"
                            data-target="#authentication"
                            aria-expanded="false"
                            aria-controls="authentication"
                          >
                            <span className="nav-text">Authentication</span>{" "}
                            <b className="caret"></b>
                          </a>

                          <ul className="collapse " id="authentication">
                            <div className="sub-menu">
                              <li className="">
                                <a href="sign-in.html">Sign In</a>
                              </li>

                              <li className="">
                                <a href="sign-up.html">Sign Up</a>
                              </li>
                            </div>
                          </ul>
                        </li>

                        <li className="has-sub ">
                          <a
                            className="sidenav-item-link"
                            href="javascript:void(0)"
                            data-toggle="collapse"
                            data-target="#others"
                            aria-expanded="false"
                            aria-controls="others"
                          >
                            <span className="nav-text">Others</span>{" "}
                            <b className="caret"></b>
                          </a>

                          <ul className="collapse " id="others">
                            <div className="sub-menu">
                              <li className="">
                                <a href="invoice.html">Invoice</a>
                              </li>

                              <li className="">
                                <a href="404.html">404 Page</a>
                              </li>
                            </div>
                          </ul>
                        </li>
                      </div>
                    </ul>
                  </li>

                  <li className="has-sub ">
                    <a
                      className="sidenav-item-link"
                      href="javascript:void(0)"
                      data-toggle="collapse"
                      data-target="#documentation"
                      aria-expanded="false"
                      aria-controls="documentation"
                    >
                      <i className="mdi mdi-book-open-page-variant"></i>
                      <span className="nav-text">Documentation</span>{" "}
                      <b className="caret"></b>
                    </a>

                    <ul
                      className="collapse "
                      id="documentation"
                      data-parent="#sidebar-menu"
                    >
                      <div className="sub-menu">
                        <li className="section-title">Getting Started</li>

                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="introduction.html"
                          >
                            <span className="nav-text">Introduction</span>
                          </a>
                        </li>

                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="quick-start.html"
                          >
                            <span className="nav-text">Quick Start</span>
                          </a>
                        </li>

                        <li className="">
                          <a
                            className="sidenav-item-link"
                            href="customization.html"
                          >
                            <span className="nav-text">Customization</span>
                          </a>
                        </li>

                        <li className="section-title">Layouts</li>

                        <li className="has-sub ">
                          <a
                            className="sidenav-item-link"
                            href="javascript:void(0)"
                            data-toggle="collapse"
                            data-target="#header-variations"
                            aria-expanded="false"
                            aria-controls="header-variations"
                          >
                            <span className="nav-text">Header Variations</span>{" "}
                            <b className="caret"></b>
                          </a>

                          <ul className="collapse " id="header-variations">
                            <div className="sub-menu">
                              <li className="">
                                <a href="header-fixed.html">Header Fixed</a>
                              </li>

                              <li className="">
                                <a href="header-static.html">Header Static</a>
                              </li>

                              <li className="">
                                <a href="header-light.html">Header Light</a>
                              </li>

                              <li className="">
                                <a href="header-dark.html">Header Dark</a>
                              </li>
                            </div>
                          </ul>
                        </li>

                        <li className="has-sub ">
                          <a
                            className="sidenav-item-link"
                            href="javascript:void(0)"
                            data-toggle="collapse"
                            data-target="#sidebar-variations"
                            aria-expanded="false"
                            aria-controls="sidebar-variations"
                          >
                            <span className="nav-text">Sidebar Variations</span>{" "}
                            <b className="caret"></b>
                          </a>

                          <ul className="collapse " id="sidebar-variations">
                            <div className="sub-menu">
                              <li className="">
                                <a href="sidebar-fixed-default.html">
                                  Sidebar Fixed Default
                                </a>
                              </li>

                              <li className="">
                                <a href="sidebar-fixed-minified.html">
                                  Sidebar Fixed Minified
                                </a>
                              </li>

                              <li className="">
                                <a href="sidebar-fixed-offcanvas.html">
                                  Sidebar Fixed Offcanvas
                                </a>
                              </li>

                              <li className="">
                                <a href="sidebar-static-default.html">
                                  Sidebar Static Default
                                </a>
                              </li>

                              <li className="">
                                <a href="sidebar-static-minified.html">
                                  Sidebar Static Minified
                                </a>
                              </li>

                              <li className="">
                                <a href="sidebar-static-offcanvas.html">
                                  Sidebar Static Offcanvas
                                </a>
                              </li>

                              <li className="">
                                <a href="sidebar-with-footer.html">
                                  Sidebar With Footer
                                </a>
                              </li>

                              <li className="">
                                <a href="sidebar-without-footer.html">
                                  Sidebar Without Footer
                                </a>
                              </li>

                              <li className="">
                                <a href="right-sidebar.html">Right Sidebar</a>
                              </li>
                            </div>
                          </ul>
                        </li>

                        <li className="">
                          <a className="sidenav-item-link" href="rtl.html">
                            <span className="nav-text">RTL Direction</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>

                  <li className="section-title">{/* Documentation */}</li>
                </ul>
              </div>

              <div className="sidebar-footer">
                <hr className="separator mb-0" />
                <div className="sidebar-footer-content">
                  <h6 className="text-uppercase">
                    Cpu Uses <span className="float-right">40%</span>
                  </h6>

                  <div className="progress progress-xs">
                    <div
                      className="progress-bar active"
                      style={{ width: "40%" }}
                      role="progressbar"
                    ></div>
                  </div>

                  <h6 className="text-uppercase">
                    Memory Uses <span className="float-right">65%</span>
                  </h6>

                  <div className="progress progress-xs">
                    <div
                      className="progress-bar progress-bar-warning"
                      style={{ width: "65%" }}
                      role="progressbar"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* <!-- ====================================
        ——— PAGE WRAPPER
        ===================================== --> */}
          <div className="page-wrapper">
            {/* <!-- Header --> */}
            <header className="main-header " id="header">
              <nav className="navbar navbar-static-top navbar-expand-lg">
                {/* <!-- Sidebar toggle button --> */}
                <button id="sidebar-toggler" className="sidebar-toggle">
                  <span className="sr-only">Toggle navigation</span>
                </button>
                {/* <!-- search form --> */}
                <div className="search-form d-none d-lg-inline-block">
                  <div className="input-group">
                    <button
                      type="button"
                      name="search"
                      id="search-btn"
                      className="btn btn-flat"
                    >
                      <i className="mdi mdi-magnify"></i>
                    </button>
                    <input
                      type="text"
                      name="query"
                      id="search-input"
                      className="form-control"
                      placeholder="'button', 'chart' etc."
                    />
                    {/* autofocus */}
                  </div>
                  <div id="search-results-container">
                    <ul id="search-results"></ul>
                  </div>
                </div>

                <div className="navbar-right ">
                  <ul className="nav navbar-nav">
                    <li className="dropdown notifications-menu custom-dropdown">
                      <button className="dropdown-toggle notify-toggler custom-dropdown-toggler">
                        <i className="mdi mdi-bell-outline"></i>
                      </button>

                      <div className="card card-default dropdown-notify dropdown-menu-right mb-0">
                        <div className="card-header card-header-border-bottom px-3">
                          <h2>Notifications</h2>
                        </div>

                        <div className="card-body px-0 py-3">
                          <ul
                            className="nav nav-tabs nav-style-border p-0 justify-content-between"
                            id="myTab"
                            role="tablist"
                          >
                            <li className="nav-item mx-3 my-0 py-0">
                              <a
                                className="nav-link active pb-3"
                                id="home2-tab"
                                data-toggle="tab"
                                href="#home2"
                                role="tab"
                                aria-controls="home2"
                                aria-selected="true"
                              >
                                All (11)
                              </a>
                            </li>

                            <li className="nav-item mx-3 my-0 py-0">
                              <a
                                className="nav-link pb-3"
                                id="profile2-tab"
                                data-toggle="tab"
                                href="#profile2"
                                role="tab"
                                aria-controls="profile2"
                                aria-selected="false"
                              >
                                Msgs (6)
                              </a>
                            </li>

                            <li className="nav-item mx-3 my-0 py-0">
                              <a
                                className="nav-link pb-3"
                                id="contact2-tab"
                                data-toggle="tab"
                                href="#contact2"
                                role="tab"
                                aria-controls="contact2"
                                aria-selected="false"
                              >
                                Others (5)
                              </a>
                            </li>
                          </ul>

                          <div className="tab-content" id="myTabContent3">
                            <div
                              className="tab-pane fade show active"
                              id="home2"
                              role="tabpanel"
                              aria-labelledby="home2-tab"
                            >
                              <ul
                                className="list-unstyled"
                                data-simplebar
                                style={{ height: "360px" }}
                              >
                                <li>
                                  <a
                                    href="javscript:void(0)"
                                    className="media media-message media-notification"
                                  >
                                    <div className="position-relative mr-3">
                                      <Image
                                        className="rounded-circle"
                                        src="/assets/img/user/u2.jpg"
                                        alt="Image"
                                        width={40}
                                        height={40}
                                      />
                                      <span className="status away"></span>
                                    </div>
                                    <div className="media-body d-flex justify-content-between">
                                      <div className="message-contents">
                                        <h4 className="title">Aaren</h4>
                                        <p className="last-msg">
                                          Lorem ipsum dolor sit, amet
                                          consectetur adipisicing elit. Nam
                                          itaque doloremque odio, eligendi
                                          delectus vitae.
                                        </p>

                                        <span className="font-size-12 font-weight-medium text-secondary">
                                          <i className="mdi mdi-clock-outline"></i>{" "}
                                          30 min ago...
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="javscript:void(0)"
                                    className="media media-message media-notification media-active"
                                  >
                                    <div className="position-relative mr-3">
                                      <Image
                                        className="rounded-circle"
                                        src="/assets/img/user/u1.jpg"
                                        alt="Image"
                                        width={40}
                                        height={40}
                                      />
                                      <span className="status active"></span>
                                    </div>
                                    <div className="media-body d-flex justify-content-between">
                                      <div className="message-contents">
                                        <h4 className="title">Abril</h4>
                                        <p className="last-msg">
                                          Donec mattis augue a nisl consequat,
                                          nec imperdiet ex rutrum. Fusce et
                                          vehicula enim. Sed in enim eu odio
                                          vehic.
                                        </p>

                                        <span className="font-size-12 font-weight-medium text-white">
                                          <i className="mdi mdi-clock-outline"></i>{" "}
                                          Just now...
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="javscript:void(0)"
                                    className="media media-message media-notification"
                                  >
                                    <div className="position-relative mr-3">
                                      <Image
                                        className="rounded-circle"
                                        src="/assets/img/user/u5.jpg"
                                        alt="Image"
                                        width={40}
                                        height={40}
                                      />
                                      <span className="status away"></span>
                                    </div>
                                    <div className="media-body d-flex justify-content-between">
                                      <div className="message-contents">
                                        <h4 className="title">Emma</h4>
                                        <p className="last-msg">
                                          Lorem ipsum dolor sit, amet
                                          consectetur adipisicing elit. Nam
                                          itaque doloremque odio, eligendi
                                          delectus vitae.
                                        </p>

                                        <span className="font-size-12 font-weight-medium text-secondary">
                                          <i className="mdi mdi-clock-outline"></i>{" "}
                                          1 hrs ago...
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="javscript:void(0)"
                                    className="media media-message media-notification event-active"
                                  >
                                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-info text-white">
                                      <i className="mdi mdi-calendar-check font-size-20"></i>
                                    </div>

                                    <div className="media-body d-flex justify-content-between">
                                      <div className="message-contents">
                                        <h4 className="title">
                                          New event added
                                        </h4>
                                        <p className="last-msg font-size-14">
                                          03/Jan/2020 (1pm - 2pm)
                                        </p>

                                        <span className="font-size-12 font-weight-medium text-secondary">
                                          <i className="mdi mdi-clock-outline"></i>{" "}
                                          10 min ago...
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="javscript:void(0)"
                                    className="media media-message media-notification"
                                  >
                                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-warning text-white">
                                      <i className="mdi mdi-chart-areaspline font-size-20"></i>
                                    </div>

                                    <div className="media-body d-flex justify-content-between">
                                      <div className="message-contents">
                                        <h4 className="title">Sales report</h4>
                                        <p className="last-msg font-size-14">
                                          Lorem ipsum dolor sit, amet
                                          consectetur adipisicing elit. Nam
                                          itaque doloremque odio, eligendi
                                          delectus vitae.
                                        </p>

                                        <span className="font-size-12 font-weight-medium text-secondary">
                                          <i className="mdi mdi-clock-outline"></i>{" "}
                                          1 hrs ago...
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="javscript:void(0)"
                                    className="media media-message media-notification"
                                  >
                                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-primary text-white">
                                      <i className="mdi mdi-account-multiple-check font-size-20"></i>
                                    </div>

                                    <div className="media-body d-flex justify-content-between">
                                      <div className="message-contents">
                                        <h4 className="title">Add request</h4>
                                        <p className="last-msg font-size-14">
                                          Add Dany Jones as your contact
                                          consequat nec imperdiet ex rutrum.
                                          Fusce et vehicula enim. Sed in enim.
                                        </p>

                                        <button
                                          type="button"
                                          className="my-1 btn btn-sm btn-success"
                                        >
                                          Accept
                                        </button>
                                        <button
                                          type="button"
                                          className="my-1 btn btn-sm btn-secondary"
                                        >
                                          Delete
                                        </button>

                                        <span className="font-size-12 font-weight-medium text-secondary d-block">
                                          <i className="mdi mdi-clock-outline"></i>{" "}
                                          5 min ago...
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="javscript:void(0)"
                                    className="media media-message media-notification"
                                  >
                                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-danger text-white">
                                      <i className="mdi mdi-server-network-off font-size-20"></i>
                                    </div>

                                    <div className="media-body d-flex justify-content-between">
                                      <div className="message-contents">
                                        <h4 className="title">
                                          Server overloaded
                                        </h4>
                                        <p className="last-msg font-size-14">
                                          Donec mattis augue a nisl consequat,
                                          nec imperdiet ex rutrum. Fusce et
                                          vehicula enim. Sed in enim eu odio
                                          vehic.
                                        </p>

                                        <span className="font-size-12 font-weight-medium text-secondary">
                                          <i className="mdi mdi-clock-outline"></i>{" "}
                                          30 min ago...
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="javscript:void(0)"
                                    className="media media-message media-notification"
                                  >
                                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-purple text-white">
                                      <i className="mdi mdi-playlist-check font-size-20"></i>
                                    </div>

                                    <div className="media-body d-flex justify-content-between">
                                      <div className="message-contents">
                                        <h4 className="title">Task complete</h4>
                                        <p className="last-msg font-size-14">
                                          Nam ut nisi erat. Ut quis tortor
                                          varius, hendrerit arcu quis, congue
                                          nisl. In scelerisque, sem ut ve.
                                        </p>

                                        <span className="font-size-12 font-weight-medium text-secondary">
                                          <i className="mdi mdi-clock-outline"></i>{" "}
                                          2 hrs ago...
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div
                              className="tab-pane fade"
                              id="profile2"
                              role="tabpanel"
                              aria-labelledby="profile2-tab"
                            >
                              <ul
                                className="list-unstyled"
                                data-simplebar
                                style={{ height: "360px" }}
                              >
                                <li>
                                  <a
                                    href="javscript:void(0)"
                                    className="media media-message media-notification"
                                  >
                                    <div className="position-relative mr-3">
                                      <Image
                                        className="rounded-circle"
                                        src="/assets/img/user/u6.jpg"
                                        alt="Image"
                                        width={40}
                                        height={40}
                                      />
                                      <span className="status away"></span>
                                    </div>
                                    <div className="media-body d-flex justify-content-between">
                                      <div className="message-contents">
                                        <h4 className="title">William</h4>
                                        <p className="last-msg">
                                          Donec mattis augue a nisl consequat,
                                          nec imperdiet ex rutrum. Fusce et
                                          vehicula enim. Sed in enim eu odio
                                          vehic.
                                        </p>

                                        <span className="font-size-12 font-weight-medium text-secondary">
                                          <i className="mdi mdi-clock-outline"></i>{" "}
                                          1 hrs ago...
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="javscript:void(0)"
                                    className="media media-message media-notification"
                                  >
                                    <div className="position-relative mr-3">
                                      <Image
                                        className="rounded-circle"
                                        src="/assets/img/user/u7.jpg"
                                        alt="Image"
                                        width={40}
                                        height={40}
                                      />
                                      <span className="status away"></span>
                                    </div>
                                    <div className="media-body d-flex justify-content-between">
                                      <div className="message-contents">
                                        <h4 className="title">Camble</h4>
                                        <p className="last-msg">
                                          Nam ut nisi erat. Ut quis tortor
                                          varius, hendrerit arcu quis, congue
                                          nisl. In scelerisque, sem ut ve.
                                        </p>

                                        <span className="font-size-12 font-weight-medium text-secondary">
                                          <i className="mdi mdi-clock-outline"></i>{" "}
                                          1 hrs ago...
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="javscript:void(0)"
                                    className="media media-message media-notification media-active"
                                  >
                                    <div className="position-relative mr-3">
                                      <Image
                                        className="rounded-circle"
                                        src="/assets/img/user/u1.jpg"
                                        alt="Image"
                                        width={40}
                                        height={40}
                                      />
                                      <span className="status active"></span>
                                    </div>
                                    <div className="media-body d-flex justify-content-between">
                                      <div className="message-contents">
                                        <h4 className="title">Abril</h4>
                                        <p className="last-msg">
                                          Donec mattis augue a nisl consequat,
                                          nec imperdiet ex rutrum. Fusce et
                                          vehicula enim. Sed in enim eu odio
                                          vehic.
                                        </p>

                                        <span className="font-size-12 font-weight-medium text-white">
                                          <i className="mdi mdi-clock-outline"></i>{" "}
                                          Just now...
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="javscript:void(0)"
                                    className="media media-message media-notification"
                                  >
                                    <div className="position-relative mr-3">
                                      <Image
                                        className="rounded-circle"
                                        src="/assets/img/user/u2.jpg"
                                        alt="Image"
                                        width={40}
                                        height={40}
                                      />
                                      <span className="status away"></span>
                                    </div>
                                    <div className="media-body d-flex justify-content-between">
                                      <div className="message-contents">
                                        <h4 className="title">Aaren</h4>
                                        <p className="last-msg">
                                          Lorem ipsum dolor sit, amet
                                          consectetur adipisicing elit. Nam
                                          itaque doloremque odio, eligendi
                                          delectus vitae.
                                        </p>

                                        <span className="font-size-12 font-weight-medium text-secondary">
                                          <i className="mdi mdi-clock-outline"></i>{" "}
                                          1 hrs ago...
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="javscript:void(0)"
                                    className="media media-message media-notification"
                                  >
                                    <div className="position-relative mr-3">
                                      <Image
                                        className="rounded-circle"
                                        src="/assets/img/user/u5.jpg"
                                        alt="Image"
                                        width={40}
                                        height={40}
                                      />
                                      <span className="status away"></span>
                                    </div>
                                    <div className="media-body d-flex justify-content-between">
                                      <div className="message-contents">
                                        <h4 className="title">Emma</h4>
                                        <p className="last-msg">
                                          Lorem ipsum dolor sit, amet
                                          consectetur adipisicing elit. Nam
                                          itaque doloremque odio, eligendi
                                          delectus vitae.
                                        </p>

                                        <span className="font-size-12 font-weight-medium text-secondary">
                                          <i className="mdi mdi-clock-outline"></i>{" "}
                                          1 hrs ago...
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div
                              className="tab-pane fade"
                              id="contact2"
                              role="tabpanel"
                              aria-labelledby="contact2-tab"
                            >
                              <ul
                                className="list-unstyled"
                                data-simplebar
                                style={{ height: "360px" }}
                              >
                                <li>
                                  <a
                                    href="javscript:void(0)"
                                    className="media media-message media-notification event-active"
                                  >
                                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-info text-white">
                                      <i className="mdi mdi-calendar-check font-size-20"></i>
                                    </div>

                                    <div className="media-body d-flex justify-content-between">
                                      <div className="message-contents">
                                        <h4 className="title">
                                          New event added
                                        </h4>
                                        <p className="last-msg font-size-14">
                                          03/Jan/2020 (1pm - 2pm)
                                        </p>

                                        <span className="font-size-12 font-weight-medium text-secondary">
                                          <i className="mdi mdi-clock-outline"></i>{" "}
                                          10 min ago...
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="javscript:void(0)"
                                    className="media media-message media-notification"
                                  >
                                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-warning text-white">
                                      <i className="mdi mdi-chart-areaspline font-size-20"></i>
                                    </div>

                                    <div className="media-body d-flex justify-content-between">
                                      <div className="message-contents">
                                        <h4 className="title">Sales report</h4>
                                        <p className="last-msg font-size-14">
                                          Lorem ipsum dolor sit, amet
                                          consectetur adipisicing elit. Nam
                                          itaque doloremque odio, eligendi
                                          delectus vitae.
                                        </p>

                                        <span className="font-size-12 font-weight-medium text-secondary">
                                          <i className="mdi mdi-clock-outline"></i>{" "}
                                          1 hrs ago...
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="javscript:void(0)"
                                    className="media media-message media-notification"
                                  >
                                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-primary text-white">
                                      <i className="mdi mdi-account-multiple-check font-size-20"></i>
                                    </div>

                                    <div className="media-body d-flex justify-content-between">
                                      <div className="message-contents">
                                        <h4 className="title">Add request</h4>
                                        <p className="last-msg font-size-14">
                                          Add Dany Jones as your contact
                                          consequat nec imperdiet ex rutrum.
                                          Fusce et vehicula enim. Sed in enim.
                                        </p>

                                        <button
                                          type="button"
                                          className="my-1 btn btn-sm btn-success"
                                        >
                                          Accept
                                        </button>
                                        <button
                                          type="button"
                                          className="my-1 btn btn-sm btn-secondary"
                                        >
                                          Delete
                                        </button>

                                        <span className="font-size-12 font-weight-medium text-secondary d-block">
                                          <i className="mdi mdi-clock-outline"></i>{" "}
                                          5 min ago...
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="javscript:void(0)"
                                    className="media media-message media-notification"
                                  >
                                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-danger text-white">
                                      <i className="mdi mdi-server-network-off font-size-20"></i>
                                    </div>

                                    <div className="media-body d-flex justify-content-between">
                                      <div className="message-contents">
                                        <h4 className="title">
                                          Server overloaded
                                        </h4>
                                        <p className="last-msg font-size-14">
                                          Donec mattis augue a nisl consequat,
                                          nec imperdiet ex rutrum. Fusce et
                                          vehicula enim. Sed in enim eu odio
                                          vehic.
                                        </p>

                                        <span className="font-size-12 font-weight-medium text-secondary">
                                          <i className="mdi mdi-clock-outline"></i>{" "}
                                          30 min ago...
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="javscript:void(0)"
                                    className="media media-message media-notification"
                                  >
                                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-purple text-white">
                                      <i className="mdi mdi-playlist-check font-size-20"></i>
                                    </div>

                                    <div className="media-body d-flex justify-content-between">
                                      <div className="message-contents">
                                        <h4 className="title">Task complete</h4>
                                        <p className="last-msg font-size-14">
                                          Nam ut nisi erat. Ut quis tortor
                                          varius, hendrerit arcu quis, congue
                                          nisl. In scelerisque, sem ut ve.
                                        </p>

                                        <span className="font-size-12 font-weight-medium text-secondary">
                                          <i className="mdi mdi-clock-outline"></i>{" "}
                                          2 hrs ago...
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <ul className="dropdown-menu dropdown-menu-right d-none">
                        <li className="dropdown-header">
                          You have 5 notifications
                        </li>
                        <li>
                          <a href="#">
                            <i className="mdi mdi-account-plus"></i> New user
                            registered
                            <span className=" font-size-12 d-inline-block float-right">
                              <i className="mdi mdi-clock-outline"></i> 10 AM
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="mdi mdi-account-remove"></i> User
                            deleted
                            <span className=" font-size-12 d-inline-block float-right">
                              <i className="mdi mdi-clock-outline"></i> 07 AM
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="mdi mdi-chart-areaspline"></i> Sales
                            report is ready
                            <span className=" font-size-12 d-inline-block float-right">
                              <i className="mdi mdi-clock-outline"></i> 12 PM
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="mdi mdi-account-supervisor"></i> New
                            client
                            <span className=" font-size-12 d-inline-block float-right">
                              <i className="mdi mdi-clock-outline"></i> 10 AM
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="mdi mdi-server-network-off"></i>{" "}
                            Server overloaded
                            <span className=" font-size-12 d-inline-block float-right">
                              <i className="mdi mdi-clock-outline"></i> 05 AM
                            </span>
                          </a>
                        </li>
                        <li className="dropdown-footer">
                          <a className="text-center" href="#">
                            {" "}
                            View All{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="right-sidebar-in right-sidebar-2-menu">
                      <i className="mdi mdi-settings mdi-spin"></i>
                    </li>
                    {/* <!-- User Account --> */}
                    <li className="dropdown user-menu">
                      <button
                        className="dropdown-toggle nav-link"
                        data-toggle="dropdown"
                      >
                        <Image
                          src="/assets/img/user/user.png"
                          className="user-image"
                          alt="User Image"
                          width={40}
                          height={40}
                        />
                        <span className="d-none d-lg-inline-block">
                          Abdus Salam
                        </span>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li className="dropdown-header">
                          <Image
                            src="/assets/img/user/user.png"
                            className="img-circle"
                            alt="User Image"
                            width={40}
                            height={40}
                          />
                          <div className="d-inline-block">
                            Abdus Salam{" "}
                            <small className="pt-1">iamabdus@gmail.com</small>
                          </div>
                        </li>

                        <li>
                          <a href="user-profile.html">
                            <i className="mdi mdi-account"></i> My Profile
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="mdi mdi-email"></i> Message
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="mdi mdi-diamond-stone"></i> Projects{" "}
                          </a>
                        </li>
                        <li className="right-sidebar-in">
                          <a href="javascript:0">
                            {" "}
                            <i className="mdi mdi-settings"></i> Setting{" "}
                          </a>
                        </li>

                        <li className="dropdown-footer">
                          <a href="index.html">
                            {" "}
                            <i className="mdi mdi-logout"></i> Log Out{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>

            {/* <!-- ====================================
          ——— CONTENT WRAPPER
          ===================================== --> */}
            <div className="content-wrapper">
              <div className="content">
                {/* <!-- Top Statistics --> */}
                <div className="row">
                  <div className="col-xl-3 col-sm-6">
                    <div className="card card-mini mb-4">
                      <div className="card-body">
                        <h2 className="mb-1">71,503</h2>
                        <p>Online Signups</p>
                        <div className="chartjs-wrapper">
                          <canvas id="barChart"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                    <div className="card card-mini  mb-4">
                      <div className="card-body">
                        <h2 className="mb-1">9,503</h2>
                        <p>New Visitors Today</p>
                        <div className="chartjs-wrapper">
                          <canvas id="dual-line"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                    <div className="card card-mini mb-4">
                      <div className="card-body">
                        <h2 className="mb-1">71,503</h2>
                        <p>Monthly Total Order</p>
                        <div className="chartjs-wrapper">
                          <canvas id="area-chart"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                    <div className="card card-mini mb-4">
                      <div className="card-body">
                        <h2 className="mb-1">9,503</h2>
                        <p>Total Revenue This Year</p>
                        <div className="chartjs-wrapper">
                          <canvas id="line"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-8 col-md-12">
                    {/* <!-- Sales Graph --> */}
                    <div className="card card-default">
                      <div className="card-header">
                        <h2>Sales Of The Year</h2>
                      </div>
                      <div className="card-body">
                        <canvas id="linechart" className="chartjs"></canvas>
                      </div>
                      <div className="card-footer d-flex flex-wrap bg-white p-0">
                        <div className="col-6 px-0">
                          <div className="text-center p-4">
                            <h4>$6,308</h4>
                            <p className="mt-2">Total orders of this year</p>
                          </div>
                        </div>
                        <div className="col-6 px-0">
                          <div className="text-center p-4 border-left">
                            <h4>$70,506</h4>
                            <p className="mt-2">Total revenue of this year</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-12">
                    {/* <!-- Doughnut Chart --> */}
                    <div className="card card-default">
                      <div className="card-header justify-content-center">
                        <h2>Orders Overview</h2>
                      </div>
                      <div className="card-body">
                        <canvas id="doChart"></canvas>
                      </div>
                      <a
                        href="#"
                        className="pb-5 d-block text-center text-muted"
                      >
                        <i className="mdi mdi-download mr-2"></i> Download
                        overall report
                      </a>
                      <div className="card-footer d-flex flex-wrap bg-white p-0">
                        <div className="col-6">
                          <div className="py-4 px-4">
                            <ul className="d-flex flex-column justify-content-between">
                              <li className="mb-2">
                                <i
                                  className="mdi mdi-checkbox-blank-circle-outline mr-2"
                                  style={{ color: "#4c84ff" }}
                                ></i>
                                Order Completed
                              </li>
                              <li>
                                <i
                                  className="mdi mdi-checkbox-blank-circle-outline mr-2"
                                  style={{ color: "#80e1c1" }}
                                ></i>
                                Order Unpaid
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 border-left">
                          <div className="py-4 px-4 ">
                            <ul className="d-flex flex-column justify-content-between">
                              <li className="mb-2">
                                <i
                                  className="mdi mdi-checkbox-blank-circle-outline mr-2"
                                  style={{ color: "#8061ef" }}
                                ></i>
                                Order Pending
                              </li>
                              <li>
                                <i
                                  className="mdi mdi-checkbox-blank-circle-outline mr-2"
                                  style={{ color: "#ffa128" }}
                                ></i>
                                Order Canceled
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-12">
                    {/* <!-- Polar and Radar Chart --> */}
                    <div className="card card-default">
                      <div className="card-header justify-content-center">
                        <h2>Sales Overview</h2>
                      </div>
                      <div className="card-body pt-0">
                        <ul
                          className="nav nav-pills mb-5 mt-5 nav-style-fill nav-justified"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="pills-home-tab"
                              data-toggle="pill"
                              href="#pills-home"
                              role="tab"
                              aria-controls="pills-home"
                              aria-selected="true"
                            >
                              Sales Status
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="pills-profile-tab"
                              data-toggle="pill"
                              href="#pills-profile"
                              role="tab"
                              aria-controls="pills-profile"
                              aria-selected="false"
                            >
                              Monthly Sales
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="pills-home"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                          >
                            <canvas id="polar"></canvas>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-profile"
                            role="tabpanel"
                            aria-labelledby="pills-profile-tab"
                          >
                            <canvas id="radar"></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-6 col-12">
                    {/* <!-- Top Sell Table --> */}
                    <div className="card card-table-border-none">
                      <div className="card-header justify-content-between">
                        <h2>Sold by Units</h2>
                        <div>
                          <button className="text-black-50 mr-2 font-size-20">
                            <i className="mdi mdi-cached"></i>
                          </button>
                          <div className="dropdown show d-inline-block widget-dropdown">
                            <a
                              className="dropdown-toggle icon-burger-mini"
                              href="#"
                              role="button"
                              id="dropdown-units"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-display="static"
                            ></a>
                            <ul
                              className="dropdown-menu dropdown-menu-right"
                              aria-labelledby="dropdown-units"
                            >
                              <li className="dropdown-item">
                                <a href="#">Action</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#">Another action</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#">Something else here</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-body py-0 compact-units"
                        data-simplebar
                        style={{ height: "384px" }}
                      >
                        <table className="table ">
                          <tbody>
                            <tr>
                              <td className="text-dark">Backpack</td>
                              <td className="text-center">9</td>
                              <td className="text-right">
                                33%{" "}
                                <i className="mdi mdi-arrow-up-bold text-success pl-1 font-size-12"></i>{" "}
                              </td>
                            </tr>
                            <tr>
                              <td className="text-dark">T-Shirt</td>
                              <td className="text-center">6</td>
                              <td className="text-right">
                                150%{" "}
                                <i className="mdi mdi-arrow-up-bold text-success pl-1 font-size-12"></i>{" "}
                              </td>
                            </tr>
                            <tr>
                              <td className="text-dark">Coat</td>
                              <td className="text-center">3</td>
                              <td className="text-right">
                                50%{" "}
                                <i className="mdi mdi-arrow-up-bold text-success pl-1 font-size-12"></i>{" "}
                              </td>
                            </tr>
                            <tr>
                              <td className="text-dark">Necklace</td>
                              <td className="text-center">7</td>
                              <td className="text-right">
                                150%{" "}
                                <i className="mdi mdi-arrow-up-bold text-success pl-1 font-size-12"></i>{" "}
                              </td>
                            </tr>
                            <tr>
                              <td className="text-dark">Jeans Pant</td>
                              <td className="text-center">10</td>
                              <td className="text-right">
                                300%{" "}
                                <i className="mdi mdi-arrow-down-bold text-danger pl-1 font-size-12"></i>{" "}
                              </td>
                            </tr>
                            <tr>
                              <td className="text-dark">Shoes</td>
                              <td className="text-center">5</td>
                              <td className="text-right">
                                100%{" "}
                                <i className="mdi mdi-arrow-up-bold text-success pl-1 font-size-12"></i>{" "}
                              </td>
                            </tr>
                            <tr>
                              <td className="text-dark">T-Shirt</td>
                              <td className="text-center">6</td>
                              <td className="text-right">
                                150%{" "}
                                <i className="mdi mdi-arrow-up-bold text-success pl-1 font-size-12"></i>{" "}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="card-footer bg-white py-4">
                        <a href="#" className="btn-link py-3 text-uppercase">
                          View Report
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-12">
                    {/* <!-- Notification Table --> */}
                    <div className="card card-default">
                      <div className="card-header justify-content-between mb-1">
                        <h2>Latest Notifications</h2>
                        <div>
                          <button className="text-black-50 mr-2 font-size-20">
                            <i className="mdi mdi-cached"></i>
                          </button>
                          <div className="dropdown show d-inline-block widget-dropdown">
                            <a
                              className="dropdown-toggle icon-burger-mini"
                              href="#"
                              role="button"
                              id="dropdown-notification"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-display="static"
                            ></a>
                            <ul
                              className="dropdown-menu dropdown-menu-right"
                              aria-labelledby="dropdown-notification"
                            >
                              <li className="dropdown-item">
                                <a href="#">Action</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#">Another action</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#">Something else here</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-body compact-notifications"
                        data-simplebar
                        style={{ height: "434px" }}
                      >
                        <div className="media pb-3 align-items-center justify-content-between">
                          <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-primary text-white">
                            <i className="mdi mdi-cart-outline font-size-20"></i>
                          </div>
                          <div className="media-body pr-3 ">
                            <a
                              className="mt-0 mb-1 font-size-15 text-dark"
                              href="#"
                            >
                              New Order
                            </a>
                            <p>Selena has placed an new order</p>
                          </div>
                          <span className=" font-size-12 d-inline-block">
                            <i className="mdi mdi-clock-outline"></i> 10 AM
                          </span>
                        </div>

                        <div className="media py-3 align-items-center justify-content-between">
                          <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-success text-white">
                            <i className="mdi mdi-email-outline font-size-20"></i>
                          </div>
                          <div className="media-body pr-3">
                            <a
                              className="mt-0 mb-1 font-size-15 text-dark"
                              href="#"
                            >
                              New Enquiry
                            </a>
                            <p>Phileine has placed an new order</p>
                          </div>
                          <span className=" font-size-12 d-inline-block">
                            <i className="mdi mdi-clock-outline"></i> 9 AM
                          </span>
                        </div>

                        <div className="media py-3 align-items-center justify-content-between">
                          <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-warning text-white">
                            <i className="mdi mdi-stack-exchange font-size-20"></i>
                          </div>
                          <div className="media-body pr-3">
                            <a
                              className="mt-0 mb-1 font-size-15 text-dark"
                              href="#"
                            >
                              Support Ticket
                            </a>
                            <p>Emma has placed an new order</p>
                          </div>
                          <span className=" font-size-12 d-inline-block">
                            <i className="mdi mdi-clock-outline"></i> 10 AM
                          </span>
                        </div>

                        <div className="media py-3 align-items-center justify-content-between">
                          <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-primary text-white">
                            <i className="mdi mdi-cart-outline font-size-20"></i>
                          </div>
                          <div className="media-body pr-3">
                            <a
                              className="mt-0 mb-1 font-size-15 text-dark"
                              href="#"
                            >
                              New order
                            </a>
                            <p>Ryan has placed an new order</p>
                          </div>
                          <span className=" font-size-12 d-inline-block">
                            <i className="mdi mdi-clock-outline"></i> 10 AM
                          </span>
                        </div>

                        <div className="media py-3 align-items-center justify-content-between">
                          <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-info text-white">
                            <i className="mdi mdi-calendar-blank font-size-20"></i>
                          </div>
                          <div className="media-body pr-3">
                            <a
                              className="mt-0 mb-1 font-size-15 text-dark"
                              href=""
                            >
                              Comapny Meetup
                            </a>
                            <p>Phileine has placed an new order</p>
                          </div>
                          <span className=" font-size-12 d-inline-block">
                            <i className="mdi mdi-clock-outline"></i> 10 AM
                          </span>
                        </div>

                        <div className="media py-3 align-items-center justify-content-between">
                          <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-warning text-white">
                            <i className="mdi mdi-stack-exchange font-size-20"></i>
                          </div>
                          <div className="media-body pr-3">
                            <a
                              className="mt-0 mb-1 font-size-15 text-dark"
                              href="#"
                            >
                              Support Ticket
                            </a>
                            <p>Emma has placed an new order</p>
                          </div>
                          <span className=" font-size-12 d-inline-block">
                            <i className="mdi mdi-clock-outline"></i> 10 AM
                          </span>
                        </div>

                        <div className="media py-3 align-items-center justify-content-between">
                          <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-success text-white">
                            <i className="mdi mdi-email-outline font-size-20"></i>
                          </div>
                          <div className="media-body pr-3">
                            <a
                              className="mt-0 mb-1 font-size-15 text-dark"
                              href="#"
                            >
                              New Enquiry
                            </a>
                            <p>Phileine has placed an new order</p>
                          </div>
                          <span className=" font-size-12 d-inline-block">
                            <i className="mdi mdi-clock-outline"></i> 9 AM
                          </span>
                        </div>
                      </div>
                      <div className="mt-3"></div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    {/* <!-- Recent Order Table --> */}
                    <div
                      className="card card-table-border-none recent-orders"
                      id="recent-orders"
                    >
                      <div className="card-header justify-content-between">
                        <h2>Recent Orders</h2>
                        <div className="date-range-report ">
                          <span></span>
                        </div>
                      </div>
                      <div className="card-body pt-0 pb-5">
                        <table
                          className="table card-table table-responsive table-responsive-large"
                          style={{ width: "100%" }}
                        >
                          <thead>
                            <tr>
                              <th>Order ID</th>
                              <th>Product Name</th>
                              <th className="d-none d-lg-table-cell">Units</th>
                              <th className="d-none d-lg-table-cell">
                                Order Date
                              </th>
                              <th className="d-none d-lg-table-cell">
                                Order Cost
                              </th>
                              <th>Status</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>24541</td>
                              <td>
                                <a className="text-dark" href="">
                                  {" "}
                                  Coach Swagger
                                </a>
                              </td>
                              <td className="d-none d-lg-table-cell">1 Unit</td>
                              <td className="d-none d-lg-table-cell">
                                Oct 20, 2018
                              </td>
                              <td className="d-none d-lg-table-cell">$230</td>
                              <td>
                                <span className="badge badge-success">
                                  Completed
                                </span>
                              </td>
                              <td className="text-right">
                                <div className="dropdown show d-inline-block widget-dropdown">
                                  <a
                                    className="dropdown-toggle icon-burger-mini"
                                    href=""
                                    role="button"
                                    id="dropdown-recent-order1"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    data-display="static"
                                  ></a>
                                  <ul
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="dropdown-recent-order1"
                                  >
                                    <li className="dropdown-item">
                                      <a href="#">View</a>
                                    </li>
                                    <li className="dropdown-item">
                                      <a href="#">Remove</a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>24541</td>
                              <td>
                                <a className="text-dark" href="">
                                  {" "}
                                  Toddler Shoes, Gucci Watch
                                </a>
                              </td>
                              <td className="d-none d-lg-table-cell">
                                2 Units
                              </td>
                              <td className="d-none d-lg-table-cell">
                                Nov 15, 2018
                              </td>
                              <td className="d-none d-lg-table-cell">$550</td>
                              <td>
                                <span className="badge badge-warning">
                                  Delayed
                                </span>
                              </td>
                              <td className="text-right">
                                <div className="dropdown show d-inline-block widget-dropdown">
                                  <a
                                    className="dropdown-toggle icon-burger-mini"
                                    href="#"
                                    role="button"
                                    id="dropdown-recent-order2"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    data-display="static"
                                  ></a>
                                  <ul
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="dropdown-recent-order2"
                                  >
                                    <li className="dropdown-item">
                                      <a href="#">View</a>
                                    </li>
                                    <li className="dropdown-item">
                                      <a href="#">Remove</a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>24541</td>
                              <td>
                                <a className="text-dark" href="">
                                  {" "}
                                  Hat Black Suits
                                </a>
                              </td>
                              <td className="d-none d-lg-table-cell">1 Unit</td>
                              <td className="d-none d-lg-table-cell">
                                Nov 18, 2018
                              </td>
                              <td className="d-none d-lg-table-cell">$325</td>
                              <td>
                                <span className="badge badge-warning">
                                  On Hold
                                </span>
                              </td>
                              <td className="text-right">
                                <div className="dropdown show d-inline-block widget-dropdown">
                                  <a
                                    className="dropdown-toggle icon-burger-mini"
                                    href="#"
                                    role="button"
                                    id="dropdown-recent-order3"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    data-display="static"
                                  ></a>
                                  <ul
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="dropdown-recent-order3"
                                  >
                                    <li className="dropdown-item">
                                      <a href="#">View</a>
                                    </li>
                                    <li className="dropdown-item">
                                      <a href="#">Remove</a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>24541</td>
                              <td>
                                <a className="text-dark" href="">
                                  {" "}
                                  Backpack Gents, Swimming Cap Slin
                                </a>
                              </td>
                              <td className="d-none d-lg-table-cell">
                                5 Units
                              </td>
                              <td className="d-none d-lg-table-cell">
                                Dec 13, 2018
                              </td>
                              <td className="d-none d-lg-table-cell">$200</td>
                              <td>
                                <span className="badge badge-success">
                                  Completed
                                </span>
                              </td>
                              <td className="text-right">
                                <div className="dropdown show d-inline-block widget-dropdown">
                                  <a
                                    className="dropdown-toggle icon-burger-mini"
                                    href="#"
                                    role="button"
                                    id="dropdown-recent-order4"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    data-display="static"
                                  ></a>
                                  <ul
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="dropdown-recent-order4"
                                  >
                                    <li className="dropdown-item">
                                      <a href="#">View</a>
                                    </li>
                                    <li className="dropdown-item">
                                      <a href="#">Remove</a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>24541</td>
                              <td>
                                <a className="text-dark" href="">
                                  {" "}
                                  Speed 500 Ignite
                                </a>
                              </td>
                              <td className="d-none d-lg-table-cell">1 Unit</td>
                              <td className="d-none d-lg-table-cell">
                                Dec 23, 2018
                              </td>
                              <td className="d-none d-lg-table-cell">$150</td>
                              <td>
                                <span className="badge badge-danger">
                                  Cancelled
                                </span>
                              </td>
                              <td className="text-right">
                                <div className="dropdown show d-inline-block widget-dropdown">
                                  <a
                                    className="dropdown-toggle icon-burger-mini"
                                    href="#"
                                    role="button"
                                    id="dropdown-recent-order5"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    data-display="static"
                                  ></a>
                                  <ul
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="dropdown-recent-order5"
                                  >
                                    <li className="dropdown-item">
                                      <a href="#">View</a>
                                    </li>
                                    <li className="dropdown-item">
                                      <a href="#">Remove</a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-6">
                    {/* <!-- To Do list --> */}
                    <div className="card card-default todo-table" id="todo">
                      <div className="card-header d-block pb-0 ">
                        <div className="todo-single-item mb-0" id="todo-input">
                          <form className="todo-form">
                            <div className="input-group mb-0">
                              <input
                                type="text"
                                className="form-control border-right-0"
                                placeholder="Add Todo"
                                required
                              />
                              <div className="input-group-append ml-0">
                                <button
                                  className="input-group-text border-0 btn bg-primary"
                                  type="submit"
                                >
                                  {/* <?xml version="1.0"?> */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="18"
                                    viewBox="0 0 448 448"
                                    width="18"
                                    className=""
                                  >
                                    <g>
                                      <path
                                        d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"
                                        data-original="#000000"
                                        className="active-path"
                                        data-old_color="#000000"
                                        fill="#FFFFFF"
                                      />
                                    </g>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>

                      <div
                        className="card-body compact-to-do-list"
                        data-simplebar
                        style={{ height: "450px" }}
                      >
                        <div className="todo-list" id="todo-list">
                          <div
                            id="item"
                            className="todo-single-item todo-item d-flex flex-row justify-content-between finished alert alert-dismissible fade show"
                            role="alert"
                          >
                            <i className="mdi"></i>
                            <span>Finish Dashboard UI Kit update</span>

                            <div className="task-content">
                              <span data-dismiss="alert" aria-label="Close">
                                <svg
                                  className="remove-task"
                                  id="Capa_1"
                                  enable-background="new 0 0 515.556 515.556"
                                  height="16"
                                  viewBox="0 0 515.556 515.556"
                                  width="16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    className=""
                                    d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z"
                                  />
                                  <path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z" />
                                </svg>
                              </span>
                            </div>
                          </div>

                          <div
                            className="todo-single-item d-flex flex-row justify-content-between current alert alert-dismissible fade show"
                            role="alert"
                          >
                            <i className="mdi"></i>
                            <span>
                              Create new prototype for the landing page
                            </span>

                            <div className="task-content">
                              <span data-dismiss="alert" aria-label="Close">
                                <svg
                                  className="remove-task"
                                  id="Capa_1"
                                  enable-background="new 0 0 515.556 515.556"
                                  height="16"
                                  viewBox="0 0 515.556 515.556"
                                  width="16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    className=""
                                    d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z"
                                  />
                                  <path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z" />
                                </svg>
                              </span>
                            </div>
                          </div>

                          <div
                            className="todo-single-item d-flex flex-row justify-content-between alert alert-dismissible fade show"
                            role="alert"
                          >
                            <i className="mdi"></i>
                            <span>
                              Add new Google Analytics code to all main files
                              sed auctor lacus in sem interdum, ac gravida
                              tortor elementum. Cras magna enim.
                            </span>

                            <div className="task-content">
                              <span data-dismiss="alert" aria-label="Close">
                                <svg
                                  className="remove-task"
                                  id="Capa_1"
                                  enable-background="new 0 0 515.556 515.556"
                                  height="16"
                                  viewBox="0 0 515.556 515.556"
                                  width="16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    className=""
                                    d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z"
                                  />
                                  <path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z" />
                                </svg>
                              </span>
                            </div>
                          </div>

                          <div
                            className="todo-single-item d-flex flex-row justify-content-between alert alert-dismissible fade show"
                            role="alert"
                          >
                            <i className="mdi"></i>
                            <span>Update parallax scroll on team page</span>

                            <div className="task-content">
                              <span data-dismiss="alert" aria-label="Close">
                                <svg
                                  className="remove-task"
                                  id="Capa_1"
                                  enable-background="new 0 0 515.556 515.556"
                                  height="16"
                                  viewBox="0 0 515.556 515.556"
                                  width="16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    className=""
                                    d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z"
                                  />
                                  <path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z" />
                                </svg>
                              </span>
                            </div>
                          </div>

                          <div
                            className="todo-single-item d-flex flex-row justify-content-between alert alert-dismissible fade show"
                            role="alert"
                          >
                            <i className="mdi"></i>
                            <span>
                              Integer et porta odio, pulvinar pretium eros.
                              Curabitur vel tellus erat.
                            </span>

                            <div className="task-content">
                              <span data-dismiss="alert" aria-label="Close">
                                <svg
                                  className="remove-task"
                                  id="Capa_1"
                                  enable-background="new 0 0 515.556 515.556"
                                  height="16"
                                  viewBox="0 0 515.556 515.556"
                                  width="16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    className=""
                                    d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z"
                                  />
                                  <path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z" />
                                </svg>
                              </span>
                            </div>
                          </div>

                          <div
                            className="todo-single-item d-flex flex-row justify-content-between alert alert-dismissible fade show"
                            role="alert"
                          >
                            <i className="mdi"></i>
                            <span>
                              Pellentesque blandit ut eros sed vehicula.
                            </span>

                            <div className="task-content">
                              <span data-dismiss="alert" aria-label="Close">
                                <svg
                                  className="remove-task"
                                  id="Capa_1"
                                  enable-background="new 0 0 515.556 515.556"
                                  height="16"
                                  viewBox="0 0 515.556 515.556"
                                  width="16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    className=""
                                    d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z"
                                  />
                                  <path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z" />
                                </svg>
                              </span>
                            </div>
                          </div>

                          <div
                            className="todo-single-item d-flex flex-row justify-content-between alert alert-dismissible fade show"
                            role="alert"
                          >
                            <i className="mdi"></i>
                            <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec felis ligula, fringilla in volutpat
                              sit amet, viverra nec mi. Donec at dui dolor.
                            </span>

                            <div className="task-content">
                              <span data-dismiss="alert" aria-label="Close">
                                <svg
                                  className="remove-task"
                                  id="Capa_1"
                                  enable-background="new 0 0 515.556 515.556"
                                  height="16"
                                  viewBox="0 0 515.556 515.556"
                                  width="16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    className=""
                                    d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z"
                                  />
                                  <path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z" />
                                </svg>
                              </span>
                            </div>
                          </div>

                          <div
                            className="todo-single-item d-flex flex-row justify-content-between mb-1 alert alert-dismissible fade show"
                            role="alert"
                          >
                            <i className="mdi"></i>
                            <span>Update parallax scroll on team page</span>

                            <div className="task-content">
                              <span data-dismiss="alert" aria-label="Close">
                                <svg
                                  className="remove-task"
                                  id="Capa_1"
                                  enable-background="new 0 0 515.556 515.556"
                                  height="16"
                                  viewBox="0 0 515.556 515.556"
                                  width="16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    className=""
                                    d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z"
                                  />
                                  <path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3"></div>
                    </div>
                  </div>

                  <div className="col-xl-6">
                    {/* <!-- area chart --> */}
                    <div className="card card-default">
                      <div className="card-header d-block d-md-flex justify-content-between">
                        <h2>World Wide Customer </h2>
                        <div className="dropdown show d-inline-block widget-dropdown ml-auto">
                          <a
                            className="dropdown-toggle"
                            href="#"
                            role="button"
                            id="world-dropdown"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-display="static"
                          >
                            World Wide
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="world-dropdown"
                          >
                            <li className="dropdown-item">
                              <a href="#">Continetal chart</a>
                            </li>
                            <li className="dropdown-item">
                              <a href="#">Sub-continental</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body vector-map-world">
                        <div
                          id="world"
                          style={{ height: "100%", width: "100%" }}
                        ></div>
                      </div>
                      <div className="card-footer d-flex flex-wrap bg-white p-0">
                        <div className="col-6">
                          <div className="p-4">
                            <ul className="d-flex flex-column justify-content-between">
                              <li className="mb-2">
                                <i
                                  className="mdi mdi-checkbox-blank-circle-outline mr-2"
                                  style={{ color: "#29cc97" }}
                                ></i>
                                America <span className="float-right">5k</span>
                              </li>
                              <li>
                                <i
                                  className="mdi mdi-checkbox-blank-circle-outline mr-2"
                                  style={{ color: "#4c84ff" }}
                                ></i>
                                Australia{" "}
                                <span className="float-right">3k</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-4 border-left">
                            <ul className="d-flex flex-column justify-content-between">
                              <li className="mb-2">
                                <i
                                  className="mdi mdi-checkbox-blank-circle-outline mr-2"
                                  style={{ color: "#ffa128" }}
                                ></i>
                                Europe <span className="float-right">4k</span>
                              </li>
                              <li>
                                <i
                                  className="mdi mdi-checkbox-blank-circle-outline mr-2"
                                  style={{ color: "#fe5461" }}
                                ></i>
                                Africa <span className="float-right">2k</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-5">
                    {/* <!-- New Customers --> */}
                    <div className="card card-table-border-none">
                      <div className="card-header justify-content-between ">
                        <h2>New Customers</h2>
                        <div>
                          <button className="text-black-50 mr-2 font-size-20">
                            <i className="mdi mdi-cached"></i>
                          </button>
                          <div className="dropdown show d-inline-block widget-dropdown">
                            <a
                              className="dropdown-toggle icon-burger-mini"
                              href="#"
                              role="button"
                              id="dropdown-customar"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-display="static"
                            ></a>
                            <ul
                              className="dropdown-menu dropdown-menu-right"
                              aria-labelledby="dropdown-customar"
                            >
                              <li className="dropdown-item">
                                <a href="#">Action</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#">Another action</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#">Something else here</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-body pt-0"
                        data-simplebar
                        style={{ height: "468px" }}
                      >
                        <table className="table ">
                          <tbody>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="media-image mr-3 rounded-circle">
                                    <a href="profile.html">
                                      <Image
                                        className="rounded-circle w-45"
                                        src="/assets/img/user/u1.jpg"
                                        alt="customer image"
                                        width={40}
                                        height={40}
                                      />
                                    </a>
                                  </div>
                                  <div className="media-body align-self-center">
                                    <a href="profile.html">
                                      <h6 className="mt-0 text-dark font-weight-medium">
                                        Selena Wagner
                                      </h6>
                                    </a>
                                    <small>@selena.oi</small>
                                  </div>
                                </div>
                              </td>
                              <td>2 Orders</td>
                              <td className="text-dark d-none d-md-block">
                                $150
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="media-image mr-3 rounded-circle">
                                    <a href="profile.html">
                                      <Image
                                        className="rounded-circle w-45"
                                        src="/assets/img/user/u2.jpg"
                                        alt="customer image"
                                        width={40}
                                        height={40}
                                      />
                                    </a>
                                  </div>
                                  <div className="media-body align-self-center">
                                    <a href="profile.html">
                                      <h6 className="mt-0 text-dark font-weight-medium">
                                        Walter Reuter
                                      </h6>
                                    </a>
                                    <small>@walter.me</small>
                                  </div>
                                </div>
                              </td>
                              <td>5 Orders</td>
                              <td className="text-dark d-none d-md-block">
                                $200
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="media-image mr-3 rounded-circle">
                                    <a href="profile.html">
                                      <Image
                                        className="rounded-circle w-45"
                                        src="/assets/img/user/u3.jpg"
                                        alt="customer image"
                                        width={40}
                                        height={40}
                                      />
                                    </a>
                                  </div>
                                  <div className="media-body align-self-center">
                                    <a href="profile.html">
                                      <h6 className="mt-0 text-dark font-weight-medium">
                                        Larissa Gebhardt
                                      </h6>
                                    </a>
                                    <small>@larissa.gb</small>
                                  </div>
                                </div>
                              </td>
                              <td>1 Order</td>
                              <td className="text-dark d-none d-md-block">
                                $50
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="media-image mr-3 rounded-circle">
                                    <a href="profile.html">
                                      <Image
                                        className="rounded-circle w-45"
                                        src="/assets/img/user/u4.jpg"
                                        alt="customer image"
                                        width={40}
                                        height={40}
                                      />
                                    </a>
                                  </div>
                                  <div className="media-body align-self-center">
                                    <a href="profile.html">
                                      <h6 className="mt-0 text-dark font-weight-medium">
                                        Albrecht Straub
                                      </h6>
                                    </a>
                                    <small>@albrech.as</small>
                                  </div>
                                </div>
                              </td>
                              <td>2 Orders</td>
                              <td className="text-dark d-none d-md-block">
                                $100
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="media-image mr-3 rounded-circle">
                                    <a href="profile.html">
                                      <Image
                                        className="rounded-circle w-45"
                                        src="/assets/img/user/u5.jpg"
                                        alt="customer image"
                                        width={40}
                                        height={40}
                                      />
                                    </a>
                                  </div>
                                  <div className="media-body align-self-center">
                                    <a href="profile.html">
                                      <h6 className="mt-0 text-dark font-weight-medium">
                                        Leopold Ebert
                                      </h6>
                                    </a>
                                    <small>@leopold.et</small>
                                  </div>
                                </div>
                              </td>
                              <td>1 Order</td>
                              <td className="text-dark d-none d-md-block">
                                $60
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-7">
                    {/* <!-- Top Products --> */}
                    <div className="card card-default">
                      <div className="card-header justify-content-between mb-4">
                        <h2>Top Products</h2>
                        <div>
                          <button className="text-black-50 mr-2 font-size-20">
                            <i className="mdi mdi-cached"></i>
                          </button>
                          <div className="dropdown show d-inline-block widget-dropdown">
                            <a
                              className="dropdown-toggle icon-burger-mini"
                              href="#"
                              role="button"
                              id="dropdown-product"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-display="static"
                            ></a>
                            <ul
                              className="dropdown-menu dropdown-menu-right"
                              aria-labelledby="dropdown-product"
                            >
                              <li className="dropdown-item">
                                <a href="#">Update Data</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#">Detailed Log</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#">Statistics</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#">Clear Data</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card-body py-0">
                        <div className="media d-flex mb-5">
                          <div className="media-image align-self-center mr-3 rounded">
                            <a href="#">
                              <Image
                                src="/assets/img/products/p1.jpg"
                                alt="customer image"
                                width={40}
                                height={40}
                              />
                            </a>
                          </div>
                          <div className="media-body align-self-center">
                            <a href="#">
                              <h6 className="mb-3 text-dark font-weight-medium">
                                {" "}
                                Coach Swagger
                              </h6>
                            </a>
                            <p className="float-md-right">
                              <span className="text-dark mr-2">20</span>Sales
                            </p>
                            <p className="d-none d-md-block">
                              Statement belting with double-turnlock hardware
                              adds “swagger” to a simple.
                            </p>
                            <p className="mb-0">
                              <del>$300</del>
                              <span className="text-dark ml-3">$250</span>
                            </p>
                          </div>
                        </div>

                        <div className="media d-flex mb-5">
                          <div className="media-image align-self-center mr-3 rounded">
                            <a href="#">
                              <Image
                                src="/assets/img/products/p2.jpg"
                                alt="customer image"
                                width={40}
                                height={40}
                              />
                            </a>
                          </div>
                          <div className="media-body align-self-center">
                            <a href="#">
                              <h6 className="mb-3 text-dark font-weight-medium">
                                {" "}
                                Coach Swagger
                              </h6>
                            </a>
                            <p className="float-md-right">
                              <span className="text-dark mr-2">20</span>Sales
                            </p>
                            <p className="d-none d-md-block">
                              Statement belting with double-turnlock hardware
                              adds “swagger” to a simple.
                            </p>
                            <p className="mb-0">
                              <del>$300</del>
                              <span className="text-dark ml-3">$250</span>
                            </p>
                          </div>
                        </div>

                        <div className="media d-flex mb-5">
                          <div className="media-image align-self-center mr-3 rounded">
                            <a href="#">
                              <Image
                                src="/assets/img/products/p3.jpg"
                                alt="customer image"
                                width={40}
                                height={40}
                              />
                            </a>
                          </div>
                          <div className="media-body align-self-center">
                            <a href="#">
                              <h6 className="mb-3 text-dark font-weight-medium">
                                {" "}
                                Gucci Watch
                              </h6>
                            </a>
                            <p className="float-md-right">
                              <span className="text-dark mr-2">10</span>Sales
                            </p>
                            <p className="d-none d-md-block">
                              Statement belting with double-turnlock hardware
                              adds “swagger” to a simple.
                            </p>
                            <p className="mb-0">
                              <del>$300</del>
                              <span className="text-dark ml-3">$50</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Content --> */}
            </div>
            {/* <!-- End Content Wrapper --> */}

            {/* <!-- Footer --> */}
            <footer className="footer mt-auto">
              <div className="copyright bg-white">
                <p>
                  Copyright &copy; <span id="copy-year"></span> a template by{" "}
                  <a
                    className="text-primary"
                    href="https://themefisher.com"
                    target="_blank"
                  >
                    Themefisher
                  </a>
                  .
                </p>
              </div>
              <script>
                var d = new Date(); var year = d.getFullYear();
                document.getElementById("copy-year").innerHTML = year;
              </script>
            </footer>
          </div>
          {/* <!-- End Page Wrapper --> */}
        </div>
        {/* <!-- End Wrapper --> */}

        {/* <!-- <script type="module">
      import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate';

      const el = document.createElement('pwa-update');
      document.body.appendChild(el);
    </script> --> */}

        {/* Next.js Script imports for client-side JS */}
        {/* Add at the top of the file: import Script from "next/script"; */}
        <Script src="/assets/plugins/jquery/jquery.min.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/simplebar/simplebar.min.js" strategy="afterInteractive" />

        <Script src="/assets/plugins/charts/Chart.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/chart.js" strategy="afterInteractive" />

        <Script src="/assets/plugins/jvectormap/jquery-jvectormap-2.0.3.min.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/jvectormap/jquery-jvectormap-world-mill.js" strategy="afterInteractive" />
        <Script src="/assets/js/vector-map.js" strategy="afterInteractive" />

        <Script src="/assets/plugins/daterangepicker/moment.min.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/daterangepicker/daterangepicker.js" strategy="afterInteractive" />
        <Script src="/assets/js/date-range.js" strategy="afterInteractive" />

        <Script src="/assets/plugins/toastr/toastr.min.js" strategy="afterInteractive" />

        <Script src="/assets/js/sleek.js" strategy="afterInteractive" />
        {/* <link href="assets/options/optionswitch.css" rel="stylesheet"> */}
        <Script src="/assets/options/optionswitcher.js" strategy="afterInteractive" />
        <script src="/assets/options/optionswitcher.js"></script>
      </body>
    </>
  );
}
