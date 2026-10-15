export default function Navigation() {
  return (
    <div
      data-animation={"default"}
      className={"navigation w-nav"}
      data-easing2={"ease-out-quart"}
      {...{ theme: "light" }}
      data-easing={"ease-in-out-expo"}
      data-collapse={"medium"}
      role={"banner"}
      data-duration={"650"}
      data-doc-height={"1"}
    >
      <div className={"nav-component"}>
        <div className={"padding-global"}>
          <div className={"navbar-layout"}>
            <a
              href={"/"}
              aria-current={"page"}
              className={"navbar-brand w-nav-brand w--current"}
              aria-label={"Walrus home"}
            >
              <img
                src={"/assets/4f87fc4b-6864f039b26f4afedada6c10_logo.svg"}
                loading={"lazy"}
                data-logo-light={""}
                alt={""}
                className={"object-contain"}
              />
              <img
                src={
                  "/assets/d277ac5f-6864f039b26f4afedada6c1a_walrus-logo-white.svg"
                }
                loading={"lazy"}
                data-logo-dark={""}
                alt={""}
                className={"object-contain"}
              />
            </a>
            <nav
              role={"navigation"}
              className={"navbar-menu w-nav-menu"}
              id={"main-menu"}
              aria-label={"Main navigation"}
            >
              <div
                data-hover={"true"}
                data-delay={"0"}
                className={"navbar-dd__link w-dropdown"}
              >
                <button
                  className={"navbar-link w-dropdown-toggle"}
                  type={"button"}
                  aria-expanded={"false"}
                  aria-controls={"nav-submenu-0"}
                >
                  <div className={"navbar-block"}></div>
                  <div>{"DiscovEr"}</div>
                </button>
                <nav
                  className={"navbar-dd__block w-dropdown-list"}
                  id={"nav-submenu-0"}
                >
                  <div className={"navbar-dd__inner"}>
                    <a
                      href={"/about"}
                      className={"navbar-dd__inner-link w-dropdown-link"}
                    >
                      {"Walrus"}
                    </a>
                    <a
                      href={"/wal-token"}
                      className={"navbar-dd__inner-link w-dropdown-link"}
                    >
                      {"WAL Token"}
                    </a>
                    <a
                      href={"/news"}
                      className={"navbar-dd__inner-link w-dropdown-link"}
                    >
                      {"News"}
                    </a>
                    <a
                      href={"/blog"}
                      className={"navbar-dd__inner-link w-dropdown-link"}
                    >
                      {"Blog"}
                    </a>
                  </div>
                </nav>
              </div>
              <div
                data-hover={"true"}
                data-delay={"0"}
                className={"navbar-dd__link w-dropdown"}
              >
                <button
                  className={"navbar-link w-dropdown-toggle"}
                  type={"button"}
                  aria-expanded={"false"}
                  aria-controls={"nav-submenu-1"}
                >
                  <div className={"navbar-block"}></div>
                  <div>{"Build"}</div>
                </button>
                <nav
                  className={"navbar-dd__block w-dropdown-list"}
                  id={"nav-submenu-1"}
                >
                  <div className={"navbar-dd__inner"}>
                    <a
                      href={"/get-started"}
                      className={"navbar-dd__inner-link w-dropdown-link"}
                    >
                      {"Get Started"}
                    </a>
                    <a
                      href={"/rfp"}
                      className={"navbar-dd__inner-link w-dropdown-link"}
                    >
                      {"Request for Proposals"}
                    </a>
                    <a
                      data-button-hover={""}
                      href={"https://docs.wal.app/"}
                      target={"_blank"}
                      className={"navbar-dd__inner-link w-inline-block"}
                      rel={"noopener noreferrer"}
                    >
                      <span>{"Docs"}</span>
                      <div data-icon-size={"normal"} className={"button-icon"}>
                        <div
                          data-icon-bg={""}
                          className={"button-icon__bg"}
                        ></div>
                        <div
                          data-icon-rotation={"up"}
                          data-icon-color={"dark"}
                          className={"button-icon__arrow-wrap"}
                        >
                          <div className={"button-icon__arrow-list"}>
                            <svg
                              xmlns={"http://www.w3.org/2000/svg"}
                              width={"100%"}
                              viewBox={"0 0 10 8"}
                              fill={"none"}
                              className={"button-icon__arrow"}
                            >
                              <path
                                d={
                                  "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                                }
                                fill={"currentColor"}
                              ></path>
                            </svg>
                            <svg
                              xmlns={"http://www.w3.org/2000/svg"}
                              width={"100%"}
                              viewBox={"0 0 10 8"}
                              fill={"none"}
                              className={"button-icon__arrow"}
                            >
                              <path
                                d={
                                  "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                                }
                                fill={"currentColor"}
                              ></path>
                            </svg>
                            <svg
                              xmlns={"http://www.w3.org/2000/svg"}
                              width={"100%"}
                              viewBox={"0 0 10 8"}
                              fill={"none"}
                              className={"button-icon__arrow"}
                            >
                              <path
                                d={
                                  "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                                }
                                fill={"currentColor"}
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      data-button-hover={""}
                      href={"https://github.com/MystenLabs/walrus"}
                      target={"_blank"}
                      className={"navbar-dd__inner-link w-inline-block"}
                      rel={"noopener noreferrer"}
                    >
                      <span>{"GitHub"}</span>
                      <div data-icon-size={"normal"} className={"button-icon"}>
                        <div
                          data-icon-bg={""}
                          className={"button-icon__bg"}
                        ></div>
                        <div
                          data-icon-rotation={"up"}
                          data-icon-color={"dark"}
                          className={"button-icon__arrow-wrap"}
                        >
                          <div className={"button-icon__arrow-list"}>
                            <svg
                              xmlns={"http://www.w3.org/2000/svg"}
                              width={"100%"}
                              viewBox={"0 0 10 8"}
                              fill={"none"}
                              className={"button-icon__arrow"}
                            >
                              <path
                                d={
                                  "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                                }
                                fill={"currentColor"}
                              ></path>
                            </svg>
                            <svg
                              xmlns={"http://www.w3.org/2000/svg"}
                              width={"100%"}
                              viewBox={"0 0 10 8"}
                              fill={"none"}
                              className={"button-icon__arrow"}
                            >
                              <path
                                d={
                                  "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                                }
                                fill={"currentColor"}
                              ></path>
                            </svg>
                            <svg
                              xmlns={"http://www.w3.org/2000/svg"}
                              width={"100%"}
                              viewBox={"0 0 10 8"}
                              fill={"none"}
                              className={"button-icon__arrow"}
                            >
                              <path
                                d={
                                  "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                                }
                                fill={"currentColor"}
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </nav>
              </div>
              <div
                data-hover={"true"}
                data-delay={"0"}
                className={"navbar-dd__link w-dropdown"}
              >
                <button
                  className={"navbar-link w-dropdown-toggle"}
                  type={"button"}
                  aria-expanded={"false"}
                  aria-controls={"nav-submenu-2"}
                >
                  <div className={"navbar-block"}></div>
                  <div>{"Use"}</div>
                </button>
                <nav
                  className={"navbar-dd__block w-dropdown-list"}
                  id={"nav-submenu-2"}
                >
                  <div className={"navbar-dd__inner"}>
                    <a
                      data-button-hover={""}
                      href={"http://stake-wal.wal.app"}
                      target={"_blank"}
                      className={"navbar-dd__inner-link w-inline-block"}
                      rel={"noopener noreferrer"}
                    >
                      <span>{"Stake WAL"}</span>
                      <div data-icon-size={"normal"} className={"button-icon"}>
                        <div
                          data-icon-bg={""}
                          className={"button-icon__bg"}
                        ></div>
                        <div
                          data-icon-rotation={"up"}
                          data-icon-color={"dark"}
                          className={"button-icon__arrow-wrap"}
                        >
                          <div className={"button-icon__arrow-list"}>
                            <svg
                              xmlns={"http://www.w3.org/2000/svg"}
                              width={"100%"}
                              viewBox={"0 0 10 8"}
                              fill={"none"}
                              className={"button-icon__arrow"}
                            >
                              <path
                                d={
                                  "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                                }
                                fill={"currentColor"}
                              ></path>
                            </svg>
                            <svg
                              xmlns={"http://www.w3.org/2000/svg"}
                              width={"100%"}
                              viewBox={"0 0 10 8"}
                              fill={"none"}
                              className={"button-icon__arrow"}
                            >
                              <path
                                d={
                                  "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                                }
                                fill={"currentColor"}
                              ></path>
                            </svg>
                            <svg
                              xmlns={"http://www.w3.org/2000/svg"}
                              width={"100%"}
                              viewBox={"0 0 10 8"}
                              fill={"none"}
                              className={"button-icon__arrow"}
                            >
                              <path
                                d={
                                  "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                                }
                                fill={"currentColor"}
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      data-button-hover={""}
                      href={"https://walruscan.com/mainnet/directory/projects"}
                      target={"_blank"}
                      className={"navbar-dd__inner-link w-inline-block"}
                      rel={"noopener noreferrer"}
                    >
                      <span>{"Apps and Services"}</span>
                      <div data-icon-size={"normal"} className={"button-icon"}>
                        <div
                          data-icon-bg={""}
                          className={"button-icon__bg"}
                        ></div>
                        <div
                          data-icon-rotation={"up"}
                          data-icon-color={"dark"}
                          className={"button-icon__arrow-wrap"}
                        >
                          <div className={"button-icon__arrow-list"}>
                            <svg
                              xmlns={"http://www.w3.org/2000/svg"}
                              width={"100%"}
                              viewBox={"0 0 10 8"}
                              fill={"none"}
                              className={"button-icon__arrow"}
                            >
                              <path
                                d={
                                  "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                                }
                                fill={"currentColor"}
                              ></path>
                            </svg>
                            <svg
                              xmlns={"http://www.w3.org/2000/svg"}
                              width={"100%"}
                              viewBox={"0 0 10 8"}
                              fill={"none"}
                              className={"button-icon__arrow"}
                            >
                              <path
                                d={
                                  "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                                }
                                fill={"currentColor"}
                              ></path>
                            </svg>
                            <svg
                              xmlns={"http://www.w3.org/2000/svg"}
                              width={"100%"}
                              viewBox={"0 0 10 8"}
                              fill={"none"}
                              className={"button-icon__arrow"}
                            >
                              <path
                                d={
                                  "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                                }
                                fill={"currentColor"}
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </nav>
              </div>
              <div
                data-hover={"true"}
                data-delay={"0"}
                className={"navbar-dd__link is--last w-dropdown"}
              >
                <button
                  className={"navbar-link w-dropdown-toggle"}
                  type={"button"}
                  aria-expanded={"false"}
                  aria-controls={"nav-submenu-3"}
                >
                  <div className={"navbar-block"}></div>
                  <div>{"Join"}</div>
                </button>
                <nav
                  className={"navbar-dd__block w-dropdown-list"}
                  id={"nav-submenu-3"}
                >
                  <div className={"navbar-dd__inner"}>
                    <a
                      href={"/community"}
                      className={"navbar-dd__inner-link w-dropdown-link"}
                    >
                      {"Community"}
                    </a>
                    <a
                      data-button-hover={""}
                      href={"https://x.com/walrusprotocol"}
                      target={"_blank"}
                      className={"navbar-dd__inner-link w-inline-block"}
                      rel={"noopener noreferrer"}
                    >
                      <span>{"X"}</span>
                      <div data-icon-size={"normal"} className={"button-icon"}>
                        <div
                          data-icon-bg={""}
                          className={"button-icon__bg"}
                        ></div>
                        <div
                          data-icon-rotation={"up"}
                          data-icon-color={"dark"}
                          className={"button-icon__arrow-wrap"}
                        >
                          <div className={"button-icon__arrow-list"}>
                            <svg
                              xmlns={"http://www.w3.org/2000/svg"}
                              width={"100%"}
                              viewBox={"0 0 10 8"}
                              fill={"none"}
                              className={"button-icon__arrow"}
                            >
                              <path
                                d={
                                  "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                                }
                                fill={"currentColor"}
                              ></path>
                            </svg>
                            <svg
                              xmlns={"http://www.w3.org/2000/svg"}
                              width={"100%"}
                              viewBox={"0 0 10 8"}
                              fill={"none"}
                              className={"button-icon__arrow"}
                            >
                              <path
                                d={
                                  "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                                }
                                fill={"currentColor"}
                              ></path>
                            </svg>
                            <svg
                              xmlns={"http://www.w3.org/2000/svg"}
                              width={"100%"}
                              viewBox={"0 0 10 8"}
                              fill={"none"}
                              className={"button-icon__arrow"}
                            >
                              <path
                                d={
                                  "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                                }
                                fill={"currentColor"}
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      data-button-hover={""}
                      href={"http://discord.gg/walrusprotocol"}
                      target={"_blank"}
                      className={"navbar-dd__inner-link w-inline-block"}
                      rel={"noopener noreferrer"}
                    >
                      <span>{"Discord"}</span>
                      <div data-icon-size={"normal"} className={"button-icon"}>
                        <div
                          data-icon-bg={""}
                          className={"button-icon__bg"}
                        ></div>
                        <div
                          data-icon-rotation={"up"}
                          data-icon-color={"dark"}
                          className={"button-icon__arrow-wrap"}
                        >
                          <div className={"button-icon__arrow-list"}>
                            <svg
                              xmlns={"http://www.w3.org/2000/svg"}
                              width={"100%"}
                              viewBox={"0 0 10 8"}
                              fill={"none"}
                              className={"button-icon__arrow"}
                            >
                              <path
                                d={
                                  "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                                }
                                fill={"currentColor"}
                              ></path>
                            </svg>
                            <svg
                              xmlns={"http://www.w3.org/2000/svg"}
                              width={"100%"}
                              viewBox={"0 0 10 8"}
                              fill={"none"}
                              className={"button-icon__arrow"}
                            >
                              <path
                                d={
                                  "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                                }
                                fill={"currentColor"}
                              ></path>
                            </svg>
                            <svg
                              xmlns={"http://www.w3.org/2000/svg"}
                              width={"100%"}
                              viewBox={"0 0 10 8"}
                              fill={"none"}
                              className={"button-icon__arrow"}
                            >
                              <path
                                d={
                                  "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                                }
                                fill={"currentColor"}
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </nav>
              </div>
              <a
                data-button-hover={""}
                href={"https://claim.walrus.xyz/"}
                target={"_blank"}
                className={"nav-button w-inline-block"}
                rel={"noopener noreferrer"}
              >
                <div>{"claim"}</div>
                <div data-icon-size={"normal"} className={"button-icon"}>
                  <div
                    data-icon-bg={"teal"}
                    className={"button-icon__bg"}
                  ></div>
                  <div
                    data-icon-rotation={"up"}
                    data-icon-color={"dark"}
                    className={"button-icon__arrow-wrap"}
                  >
                    <div className={"button-icon__arrow-list"}>
                      <svg
                        xmlns={"http://www.w3.org/2000/svg"}
                        width={"100%"}
                        viewBox={"0 0 10 8"}
                        fill={"none"}
                        className={"button-icon__arrow"}
                      >
                        <path
                          d={
                            "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                          }
                          fill={"currentColor"}
                        ></path>
                      </svg>
                      <svg
                        xmlns={"http://www.w3.org/2000/svg"}
                        width={"100%"}
                        viewBox={"0 0 10 8"}
                        fill={"none"}
                        className={"button-icon__arrow"}
                      >
                        <path
                          d={
                            "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                          }
                          fill={"currentColor"}
                        ></path>
                      </svg>
                      <svg
                        xmlns={"http://www.w3.org/2000/svg"}
                        width={"100%"}
                        viewBox={"0 0 10 8"}
                        fill={"none"}
                        className={"button-icon__arrow"}
                      >
                        <path
                          d={
                            "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                          }
                          fill={"currentColor"}
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <div className={"menu-bottom"}>
                <a
                  data-button-hover={""}
                  href={"https://docs.wal.app/"}
                  target={"_blank"}
                  className={"teal-button_block menu-cta w-inline-block"}
                  rel={"noopener noreferrer"}
                >
                  <span className={"menu-cta-text"}>{"read docs"}</span>
                  <div data-icon-size={"normal"} className={"button-icon"}>
                    <div data-icon-bg={""} className={"button-icon__bg"}></div>
                    <div
                      data-icon-rotation={"up"}
                      data-icon-color={"light"}
                      className={"button-icon__arrow-wrap"}
                    >
                      <div className={"button-icon__arrow-list"}>
                        <svg
                          xmlns={"http://www.w3.org/2000/svg"}
                          width={"100%"}
                          viewBox={"0 0 10 8"}
                          fill={"none"}
                          className={"button-icon__arrow"}
                        >
                          <path
                            d={
                              "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                            }
                            fill={"currentColor"}
                          ></path>
                        </svg>
                        <svg
                          xmlns={"http://www.w3.org/2000/svg"}
                          width={"100%"}
                          viewBox={"0 0 10 8"}
                          fill={"none"}
                          className={"button-icon__arrow"}
                        >
                          <path
                            d={
                              "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                            }
                            fill={"currentColor"}
                          ></path>
                        </svg>
                        <svg
                          xmlns={"http://www.w3.org/2000/svg"}
                          width={"100%"}
                          viewBox={"0 0 10 8"}
                          fill={"none"}
                          className={"button-icon__arrow"}
                        >
                          <path
                            d={
                              "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                            }
                            fill={"currentColor"}
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-bg-color={""} className={"button-bg"}></div>
                </a>
                <a
                  data-button-hover={""}
                  href={"/community"}
                  className={"teal-button_block menu-cta hollow w-inline-block"}
                >
                  <span className={"menu-cta-text white"}>
                    {"get involved"}
                  </span>
                  <div data-icon-size={"normal"} className={"button-icon"}>
                    <div
                      data-icon-bg={""}
                      className={"button-icon__bg-light"}
                    ></div>
                    <div
                      data-icon-rotation={"up"}
                      data-icon-color={"light"}
                      className={"button-icon__arrow-wrap-invert"}
                    >
                      <div className={"button-icon__arrow-list"}>
                        <svg
                          xmlns={"http://www.w3.org/2000/svg"}
                          width={"100%"}
                          viewBox={"0 0 10 8"}
                          fill={"none"}
                          className={"button-icon__arrow"}
                        >
                          <path
                            d={
                              "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                            }
                            fill={"currentColor"}
                          ></path>
                        </svg>
                        <svg
                          xmlns={"http://www.w3.org/2000/svg"}
                          width={"100%"}
                          viewBox={"0 0 10 8"}
                          fill={"none"}
                          className={"button-icon__arrow"}
                        >
                          <path
                            d={
                              "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                            }
                            fill={"currentColor"}
                          ></path>
                        </svg>
                        <svg
                          xmlns={"http://www.w3.org/2000/svg"}
                          width={"100%"}
                          viewBox={"0 0 10 8"}
                          fill={"none"}
                          className={"button-icon__arrow"}
                        >
                          <path
                            d={
                              "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                            }
                            fill={"currentColor"}
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-bg-color={""} className={"button-bg"}></div>
                </a>
              </div>
            </nav>
            <div className={"w-layout-hflex navbar-right"}>
              <button
                className={"menu-button w-nav-button"}
                type={"button"}
                aria-label={"Open menu"}
                aria-expanded={"false"}
                aria-controls={"main-menu"}
              >
                <div className={"menu-button__line-w"}>
                  <div className={"menu-button__line top"}></div>
                  <div className={"menu-button__line bottom"}></div>
                </div>
              </button>
              <a
                data-button-hover={""}
                href={"http://docs.wal.app"}
                target={"_blank"}
                className={"teal-button_block md--hide w-inline-block"}
                rel={"noopener noreferrer"}
              >
                <span>{"read docs"}</span>
                <div data-icon-size={"normal"} className={"button-icon"}>
                  <div data-icon-bg={""} className={"button-icon__bg"}></div>
                  <div
                    data-icon-rotation={"up"}
                    data-icon-color={"light"}
                    className={"button-icon__arrow-wrap"}
                  >
                    <div className={"button-icon__arrow-list"}>
                      <svg
                        xmlns={"http://www.w3.org/2000/svg"}
                        width={"100%"}
                        viewBox={"0 0 10 8"}
                        fill={"none"}
                        className={"button-icon__arrow"}
                      >
                        <path
                          d={
                            "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                          }
                          fill={"currentColor"}
                        ></path>
                      </svg>
                      <svg
                        xmlns={"http://www.w3.org/2000/svg"}
                        width={"100%"}
                        viewBox={"0 0 10 8"}
                        fill={"none"}
                        className={"button-icon__arrow"}
                      >
                        <path
                          d={
                            "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                          }
                          fill={"currentColor"}
                        ></path>
                      </svg>
                      <svg
                        xmlns={"http://www.w3.org/2000/svg"}
                        width={"100%"}
                        viewBox={"0 0 10 8"}
                        fill={"none"}
                        className={"button-icon__arrow"}
                      >
                        <path
                          d={
                            "M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                          }
                          fill={"currentColor"}
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-bg-color={""} className={"button-bg"}></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
