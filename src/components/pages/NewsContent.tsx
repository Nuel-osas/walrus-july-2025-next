import Footer from "@/components/Footer";
export default function NewsContent() {
  return (
    <main className={"main-wrapper"} id={"main-content"}>
      <section className={"news-hero"}>
        <div className={"padding-global"}>
          <div className={"w-layout-vflex news-hero_layout"}>
            <div className={"mw-800"}>
              <h1
                {...{ "reveal-animation": "" }}
                data-heading-reveal={""}
                className={"h1-170px align-center"}
              >
                {"News and Insights"}
              </h1>
            </div>
            <p className={"p-large fw-medium mob-align-center"}>
              {"The latest updates, direct from your favorite marine mammal"}
            </p>
          </div>
        </div>
        <div className={"vertical-line bg-color-gray-300"}></div>
        <div className={"vertical-line right bg-color-gray-300"}></div>
      </section>
      <section className={"news-featured"}>
        <div className={"padding-global"}>
          <div className={"news-featured_cms w-dyn-list"}>
            <div role={"list"} className={"news-featured_cms-list w-dyn-items"}>
              <div
                role={"listitem"}
                className={"news-featured_cms-item w-dyn-item"}
              >
                <div className={"news-featured_img-block"}>
                  <img
                    src={
                      "/assets/72af1bad-6864f039b26f4afedada6d33_pudgy-penguins-leverage.png"
                    }
                    loading={"lazy"}
                    alt={""}
                    sizes={"100vw"}
                    srcSet={
                      "/assets/60ca18d2-6864f039b26f4afedada6d33_pudgy-20penguins-20leverage-p-500.png 500w, /assets/6bb203b5-6864f039b26f4afedada6d33_pudgy-20penguins-20leverage-p-800.png 800w, /assets/3e809525-6864f039b26f4afedada6d33_pudgy-20penguins-20leverage-p-1080.png 1080w, /assets/72af1bad-6864f039b26f4afedada6d33_pudgy-penguins-leverage.png 1392w"
                    }
                    className={"object-cover"}
                  />
                </div>
                <a
                  id={"w-node-_2027b725-79da-ab7d-a89a-1db80d8a2c80-dada6bb6"}
                  href={
                    "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/pudgy-penguins-leverage-decentralized-storage"
                  }
                  className={"news-featured_content-block w-inline-block"}
                >
                  <span className={"p-medium fw-medium color-gray-600"}>
                    {"April 29, 2025"}
                  </span>
                  <h3 className={"h3-36px hover-underline"}>
                    {
                      "Pudgy Penguins Partners with Walrus to Bring Decentralized Storage to Web3’s Leading IP"
                    }
                  </h3>
                  <div data-button-hover={""} className={"button-block"}>
                    <span>{"Read more"}</span>
                    <div data-icon-size={"medium"} className={"button-icon"}>
                      <div
                        data-icon-bg={""}
                        className={"button-icon__bg"}
                      ></div>
                      <div
                        data-icon-rotation={"normal"}
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
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={"vertical-line bg-color-gray-300"}></div>
        <div className={"vertical-line right bg-color-gray-300"}></div>
      </section>
      <section className={"news-media"}>
        <div className={"padding-global"}>
          <div className={"w-layout-vflex news-media_layout"}>
            <div className={"w-layout-grid news-media_grid"}>
              <div className={"relative mob-hide"}>
                <div
                  className={"horizontal-line news-media_left-block-line"}
                ></div>
              </div>
              <div className={"w-layout-vflex news-media_heading-wrapper"}>
                <h2
                  {...{ "reveal-animation": "" }}
                  data-heading-reveal={""}
                  className={"h2-102px"}
                >
                  {"Walrus  "}
                  <br />
                  {"in the media"}
                </h2>
                <div className={"news-media_form-block w-form"}>
                  <form
                    id={"email-form"}
                    name={"email-form"}
                    data-name={"Email Form"}
                    method={"get"}
                    {...{ "fs-cmsfilter-element": "filters" }}
                  >
                    <div className={"w-layout-hflex news-media_filters"}>
                      <button
                        id={"all-button"}
                        className={
                          "news-media_button fs-cmsfilter_active w-radio"
                        }
                        type={"button"}
                        data-filter={"all"}
                        aria-pressed={"true"}
                      >
                        <span
                          {...{ "fs-cmsfilter-element": "clear" }}
                          {...{ "fs-cmsfilter-clear": "category" }}
                          className={"w-form-label"}
                        >
                          {"All"}
                        </span>
                      </button>
                      <div className={"w-dyn-list"}>
                        <div
                          role={"list"}
                          className={"news-media_cms-category w-dyn-items"}
                        >
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <button
                              className={"news-media_button w-radio"}
                              type={"button"}
                              data-filter={"announcement"}
                              aria-pressed={"false"}
                            >
                              <span
                                {...{ "fs-cmsfilter-field": "category" }}
                                className={"w-form-label"}
                              >
                                {"Announcement"}
                              </span>
                            </button>
                          </div>
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <button
                              className={"news-media_button w-radio"}
                              type={"button"}
                              data-filter={"news"}
                              aria-pressed={"false"}
                            >
                              <span
                                {...{ "fs-cmsfilter-field": "category" }}
                                className={"w-form-label"}
                              >
                                {"News"}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className={"w-form-done"}>
                    <div>{"Thank you! Your submission has been received!"}</div>
                  </div>
                  <div className={"w-form-fail"}>
                    <div>
                      {"Oops! Something went wrong while submitting the form."}
                    </div>
                  </div>
                </div>
              </div>
              <div className={"horizontal-line news-media_above-line"}></div>
              <div className={"horizontal-line news-media_below-line"}></div>
            </div>
            <div className={"w-layout-vflex gap-40 vx-center"}>
              <div className={"relative"}>
                <div className={"news-media_cms w-dyn-list"}>
                  <div
                    {...{ "fs-cmsload-element": "list" }}
                    {...{ "fs-cmsfilter-element": "list" }}
                    role={"list"}
                    className={"news-media_cms-list w-dyn-items"}
                  >
                    <div
                      role={"listitem"}
                      className={"news-media_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://fortune.com/crypto/2025/03/20/walrus-fundraise-140-million-2-billion-andreessen-horowitz/"
                        }
                        target={"_blank"}
                        className={"news-media_cms-block w-inline-block"}
                        rel={"noopener noreferrer"}
                      >
                        <div className={"w-layout-vflex gap-16"}>
                          <div className={"w-layout-hflex gap-8"}>
                            <div
                              style={{ backgroundColor: "#a56ff1" }}
                              className={"news-media_color-block"}
                            ></div>
                            <span
                              {...{ "fs-cmsfilter-field": "category" }}
                              className={"tag-14px"}
                            >
                              {"News"}
                            </span>
                          </div>
                          <h4
                            data-hover-underline={""}
                            className={"news-media_cms-heading"}
                          >
                            {
                              "Exclusive: Walrus Foundation raises $140 million from Standard Crypto and a16z for a high speed storage network"
                            }
                          </h4>
                        </div>
                        <div className={"news-media_folder-wrapper"}>
                          <div className={"news-media_folder-block"}>
                            <img
                              src={
                                "/assets/d4b7ddbf-6864f039b26f4afedada6c12_folder-back.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-back"}
                            />
                            <img
                              src={
                                "/assets/b1629ee1-6864f039b26f4afedada6cf6_Img-7.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-paper"}
                            />
                            <img
                              src={
                                "/assets/65377d69-6864f039b26f4afedada6c11_folder-front.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-front"}
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      role={"listitem"}
                      className={"news-media_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://venturebeat.com/games/talus-integrates-sui-to-power-ai-agents/"
                        }
                        target={"_blank"}
                        className={"news-media_cms-block w-inline-block"}
                        rel={"noopener noreferrer"}
                      >
                        <div className={"w-layout-vflex gap-16"}>
                          <div className={"w-layout-hflex gap-8"}>
                            <div
                              style={{ backgroundColor: "#a56ff1" }}
                              className={"news-media_color-block"}
                            ></div>
                            <span
                              {...{ "fs-cmsfilter-field": "category" }}
                              className={"tag-14px"}
                            >
                              {"News"}
                            </span>
                          </div>
                          <h4
                            data-hover-underline={""}
                            className={"news-media_cms-heading"}
                          >
                            {"Talus integrates Sui to power AI agents"}
                          </h4>
                        </div>
                        <div className={"news-media_folder-wrapper"}>
                          <div className={"news-media_folder-block"}>
                            <img
                              src={
                                "/assets/d4b7ddbf-6864f039b26f4afedada6c12_folder-back.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-back"}
                            />
                            <img
                              src={
                                "/assets/da7c788b-6864f039b26f4afedada6cf5_vnt.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-paper"}
                            />
                            <img
                              src={
                                "/assets/65377d69-6864f039b26f4afedada6c11_folder-front.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-front"}
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      role={"listitem"}
                      className={"news-media_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://www.coinspeaker.com/linera-partners-with-walrus-protocol-to-revolutionize-web3-data-storage/"
                        }
                        target={"_blank"}
                        className={"news-media_cms-block w-inline-block"}
                        rel={"noopener noreferrer"}
                      >
                        <div className={"w-layout-vflex gap-16"}>
                          <div className={"w-layout-hflex gap-8"}>
                            <div
                              style={{ backgroundColor: "#a56ff1" }}
                              className={"news-media_color-block"}
                            ></div>
                            <span
                              {...{ "fs-cmsfilter-field": "category" }}
                              className={"tag-14px"}
                            >
                              {"News"}
                            </span>
                          </div>
                          <h4
                            data-hover-underline={""}
                            className={"news-media_cms-heading"}
                          >
                            {
                              "Linera Partners with Walrus Protocol to Revolutionize Web3 Data Storage"
                            }
                          </h4>
                        </div>
                        <div className={"news-media_folder-wrapper"}>
                          <div className={"news-media_folder-block"}>
                            <img
                              src={
                                "/assets/d4b7ddbf-6864f039b26f4afedada6c12_folder-back.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-back"}
                            />
                            <img
                              src={
                                "/assets/b2801f8d-6864f039b26f4afedada6c0b_Img-6.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-paper"}
                            />
                            <img
                              src={
                                "/assets/65377d69-6864f039b26f4afedada6c11_folder-front.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-front"}
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      role={"listitem"}
                      className={"news-media_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://markets.businessinsider.com/news/currencies/data-tokenization-protocol-itheum-partners-with-walrus-1034438687"
                        }
                        target={"_blank"}
                        className={"news-media_cms-block w-inline-block"}
                        rel={"noopener noreferrer"}
                      >
                        <div className={"w-layout-vflex gap-16"}>
                          <div className={"w-layout-hflex gap-8"}>
                            <div
                              style={{ backgroundColor: "#a56ff1" }}
                              className={"news-media_color-block"}
                            ></div>
                            <span
                              {...{ "fs-cmsfilter-field": "category" }}
                              className={"tag-14px"}
                            >
                              {"News"}
                            </span>
                          </div>
                          <h4
                            data-hover-underline={""}
                            className={"news-media_cms-heading"}
                          >
                            {
                              "Data Tokenization Protocol Itheum Partners With Walrus"
                            }
                          </h4>
                        </div>
                        <div className={"news-media_folder-wrapper"}>
                          <div className={"news-media_folder-block"}>
                            <img
                              src={
                                "/assets/d4b7ddbf-6864f039b26f4afedada6c12_folder-back.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-back"}
                            />
                            <img
                              src={
                                "/assets/2437ab1c-6864f039b26f4afedada6be2_Img-5.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-paper"}
                            />
                            <img
                              src={
                                "/assets/65377d69-6864f039b26f4afedada6c11_folder-front.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-front"}
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      role={"listitem"}
                      className={"news-media_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://www.investing.com/news/cryptocurrency-news/3dos-expands-decentralized-manufacturing-with-walruspowered-ai--storage-3862647"
                        }
                        target={"_blank"}
                        className={"news-media_cms-block w-inline-block"}
                        rel={"noopener noreferrer"}
                      >
                        <div className={"w-layout-vflex gap-16"}>
                          <div className={"w-layout-hflex gap-8"}>
                            <div
                              style={{ backgroundColor: "#a56ff1" }}
                              className={"news-media_color-block"}
                            ></div>
                            <span
                              {...{ "fs-cmsfilter-field": "category" }}
                              className={"tag-14px"}
                            >
                              {"News"}
                            </span>
                          </div>
                          <h4
                            data-hover-underline={""}
                            className={"news-media_cms-heading"}
                          >
                            {
                              "3DOS Expands Decentralized Manufacturing with Walrus-Powered AI & Storage"
                            }
                          </h4>
                        </div>
                        <div className={"news-media_folder-wrapper"}>
                          <div className={"news-media_folder-block"}>
                            <img
                              src={
                                "/assets/d4b7ddbf-6864f039b26f4afedada6c12_folder-back.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-back"}
                            />
                            <img
                              src={
                                "/assets/76f50010-6864f039b26f4afedada6c2c_investing.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-paper"}
                            />
                            <img
                              src={
                                "/assets/65377d69-6864f039b26f4afedada6c11_folder-front.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-front"}
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      role={"listitem"}
                      className={"news-media_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://thedefiant.io/news/press-releases/tradeport-stores-move-chain-based-data-on-walrus"
                        }
                        target={"_blank"}
                        className={"news-media_cms-block w-inline-block"}
                        rel={"noopener noreferrer"}
                      >
                        <div className={"w-layout-vflex gap-16"}>
                          <div className={"w-layout-hflex gap-8"}>
                            <div
                              style={{ backgroundColor: "#a56ff1" }}
                              className={"news-media_color-block"}
                            ></div>
                            <span
                              {...{ "fs-cmsfilter-field": "category" }}
                              className={"tag-14px"}
                            >
                              {"News"}
                            </span>
                          </div>
                          <h4
                            data-hover-underline={""}
                            className={"news-media_cms-heading"}
                          >
                            {"TradePort Stores Move Chain-based Data on Walrus"}
                          </h4>
                        </div>
                        <div className={"news-media_folder-wrapper"}>
                          <div className={"news-media_folder-block"}>
                            <img
                              src={
                                "/assets/d4b7ddbf-6864f039b26f4afedada6c12_folder-back.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-back"}
                            />
                            <img
                              src={
                                "/assets/e1d40e35-6864f039b26f4afedada6c4c_defiant.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-paper"}
                            />
                            <img
                              src={
                                "/assets/65377d69-6864f039b26f4afedada6c11_folder-front.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-front"}
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      role={"listitem"}
                      className={"news-media_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://decrypt.co/296216/karrier-one-launches-decentralized-wifi-hotspot-devices-on-sui-network-to-expand-global-connectivity"
                        }
                        target={"_blank"}
                        className={"news-media_cms-block w-inline-block"}
                        rel={"noopener noreferrer"}
                      >
                        <div className={"w-layout-vflex gap-16"}>
                          <div className={"w-layout-hflex gap-8"}>
                            <div
                              style={{ backgroundColor: "#a56ff1" }}
                              className={"news-media_color-block"}
                            ></div>
                            <span
                              {...{ "fs-cmsfilter-field": "category" }}
                              className={"tag-14px"}
                            >
                              {"News"}
                            </span>
                          </div>
                          <h4
                            data-hover-underline={""}
                            className={"news-media_cms-heading"}
                          >
                            {
                              "Karrier One Launches Decentralized WiFi Hotspot Devices on Sui Network to Expand Global Connectivity"
                            }
                          </h4>
                        </div>
                        <div className={"news-media_folder-wrapper"}>
                          <div className={"news-media_folder-block"}>
                            <img
                              src={
                                "/assets/d4b7ddbf-6864f039b26f4afedada6c12_folder-back.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-back"}
                            />
                            <img
                              src={
                                "/assets/739caf60-6864f039b26f4afedada6be0_Img-3.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-paper"}
                            />
                            <img
                              src={
                                "/assets/65377d69-6864f039b26f4afedada6c11_folder-front.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-front"}
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      role={"listitem"}
                      className={"news-media_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://crypto.news/suis-mysten-labs-launches-walrus-protocol-public-testnet-for-decentralized-storage/"
                        }
                        target={"_blank"}
                        className={"news-media_cms-block w-inline-block"}
                        rel={"noopener noreferrer"}
                      >
                        <div className={"w-layout-vflex gap-16"}>
                          <div className={"w-layout-hflex gap-8"}>
                            <div
                              style={{ backgroundColor: "#f946ac" }}
                              className={"news-media_color-block"}
                            ></div>
                            <span
                              {...{ "fs-cmsfilter-field": "category" }}
                              className={"tag-14px"}
                            >
                              {"Announcement"}
                            </span>
                          </div>
                          <h4
                            data-hover-underline={""}
                            className={"news-media_cms-heading"}
                          >
                            {
                              "Sui’s Mysten Labs launches Walrus Protocol public testnet for decentralized storage"
                            }
                          </h4>
                        </div>
                        <div className={"news-media_folder-wrapper"}>
                          <div className={"news-media_folder-block"}>
                            <img
                              src={
                                "/assets/d4b7ddbf-6864f039b26f4afedada6c12_folder-back.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-back"}
                            />
                            <img
                              src={
                                "/assets/02fc7e02-6864f039b26f4afedada6c6c_crypto-news.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-paper"}
                            />
                            <img
                              src={
                                "/assets/65377d69-6864f039b26f4afedada6c11_folder-front.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-front"}
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      role={"listitem"}
                      className={"news-media_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://decrypt.co/285471/how-walrus-protocol-is-reinventing-decentralized-storage"
                        }
                        target={"_blank"}
                        className={"news-media_cms-block w-inline-block"}
                        rel={"noopener noreferrer"}
                      >
                        <div className={"w-layout-vflex gap-16"}>
                          <div className={"w-layout-hflex gap-8"}>
                            <div
                              style={{ backgroundColor: "#a56ff1" }}
                              className={"news-media_color-block"}
                            ></div>
                            <span
                              {...{ "fs-cmsfilter-field": "category" }}
                              className={"tag-14px"}
                            >
                              {"News"}
                            </span>
                          </div>
                          <h4
                            data-hover-underline={""}
                            className={"news-media_cms-heading"}
                          >
                            {
                              "How Walrus Protocol is Reinventing Decentralized Storage"
                            }
                          </h4>
                        </div>
                        <div className={"news-media_folder-wrapper"}>
                          <div className={"news-media_folder-block"}>
                            <img
                              src={
                                "/assets/d4b7ddbf-6864f039b26f4afedada6c12_folder-back.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-back"}
                            />
                            <img
                              src={
                                "/assets/739caf60-6864f039b26f4afedada6be0_Img-3.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-paper"}
                            />
                            <img
                              src={
                                "/assets/65377d69-6864f039b26f4afedada6c11_folder-front.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-front"}
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      role={"listitem"}
                      className={"news-media_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://decrypt.co/249996/decrypt-media-articles-and-videos-to-be-stored-on-sui-protocol-walrus"
                        }
                        target={"_blank"}
                        className={"news-media_cms-block w-inline-block"}
                        rel={"noopener noreferrer"}
                      >
                        <div className={"w-layout-vflex gap-16"}>
                          <div className={"w-layout-hflex gap-8"}>
                            <div
                              style={{ backgroundColor: "#f946ac" }}
                              className={"news-media_color-block"}
                            ></div>
                            <span
                              {...{ "fs-cmsfilter-field": "category" }}
                              className={"tag-14px"}
                            >
                              {"Announcement"}
                            </span>
                          </div>
                          <h4
                            data-hover-underline={""}
                            className={"news-media_cms-heading"}
                          >
                            {
                              "Decrypt Media Articles and Videos to Be Stored on Sui Protocol Walrus"
                            }
                          </h4>
                        </div>
                        <div className={"news-media_folder-wrapper"}>
                          <div className={"news-media_folder-block"}>
                            <img
                              src={
                                "/assets/d4b7ddbf-6864f039b26f4afedada6c12_folder-back.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-back"}
                            />
                            <img
                              src={
                                "/assets/739caf60-6864f039b26f4afedada6be0_Img-3.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-paper"}
                            />
                            <img
                              src={
                                "/assets/65377d69-6864f039b26f4afedada6c11_folder-front.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-front"}
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      role={"listitem"}
                      className={"news-media_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://www.binance.com/en/square/post/2024-06-18-mysten-labs-launches-decentralized-storage-and-data-availability-protocol-walrus-9641326502922"
                        }
                        target={"_blank"}
                        className={"news-media_cms-block w-inline-block"}
                        rel={"noopener noreferrer"}
                      >
                        <div className={"w-layout-vflex gap-16"}>
                          <div className={"w-layout-hflex gap-8"}>
                            <div
                              style={{ backgroundColor: "#a56ff1" }}
                              className={"news-media_color-block"}
                            ></div>
                            <span
                              {...{ "fs-cmsfilter-field": "category" }}
                              className={"tag-14px"}
                            >
                              {"News"}
                            </span>
                          </div>
                          <h4
                            data-hover-underline={""}
                            className={"news-media_cms-heading"}
                          >
                            {
                              "Mysten Labs Launches Decentralized Storage and Data Availability Protocol Walrus"
                            }
                          </h4>
                        </div>
                        <div className={"news-media_folder-wrapper"}>
                          <div className={"news-media_folder-block"}>
                            <img
                              src={
                                "/assets/d4b7ddbf-6864f039b26f4afedada6c12_folder-back.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-back"}
                            />
                            <img
                              src={
                                "/assets/7d2bb01a-6864f039b26f4afedada6bdf_Img-4.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-paper"}
                            />
                            <img
                              src={
                                "/assets/65377d69-6864f039b26f4afedada6c11_folder-front.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                              className={"folder-front"}
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <p className={"archive-empty"} role={"status"} hidden={true}>
                    {"No matching entries in this July 2025 snapshot."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"vertical-line bg-color-gray-300"}></div>
        <div className={"vertical-line right bg-color-gray-300"}></div>
      </section>
      <section className={"news-latest"}>
        <div className={"padding-global"}>
          <div className={"w-layout-vflex news-latest_layout"}>
            <div className={"news-latest_heading-block"}>
              <h2
                {...{ "reveal-animation": "" }}
                data-heading-reveal={""}
                className={"h2-102px"}
              >
                {"Latest "}
                <br />
                {"blogs"}
              </h2>
            </div>
            <div className={"w-layout-grid news-latest_grid"}>
              <div className={"w-dyn-list"}>
                <div
                  role={"list"}
                  className={"news-latest_cms-list w-dyn-items"}
                >
                  <div
                    role={"listitem"}
                    className={"news-latest_cms-item w-dyn-item"}
                  >
                    <a
                      data-blog-visual-link={""}
                      href={
                        "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/tradeport-builds-nft-marketplace-walrus"
                      }
                      className={"news-latest_cms-link w-inline-block"}
                    >
                      <div className={"news-latest_color-block"}></div>
                      <h5 className={"h5-18px"}>
                        {
                          "TradePort Leverages Walrus to Create an Advanced NFT Marketplace"
                        }
                      </h5>
                    </a>
                  </div>
                  <div
                    role={"listitem"}
                    className={"news-latest_cms-item w-dyn-item"}
                  >
                    <a
                      data-blog-visual-link={""}
                      href={
                        "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/how-walrus-red-stuff-encoding-works"
                      }
                      className={"news-latest_cms-link w-inline-block"}
                    >
                      <div className={"news-latest_color-block"}></div>
                      <h5 className={"h5-18px"}>
                        {
                          "Decoding Red Stuff: Walrus's Engine for Resilient and Efficient Storage"
                        }
                      </h5>
                    </a>
                  </div>
                  <div
                    role={"listitem"}
                    className={"news-latest_cms-item w-dyn-item"}
                  >
                    <a
                      data-blog-visual-link={""}
                      href={
                        "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/itheum-builds-data-for-ai-walrus"
                      }
                      className={"news-latest_cms-link w-inline-block"}
                    >
                      <div className={"news-latest_color-block"}></div>
                      <h5 className={"h5-18px"}>
                        {
                          "Itheum Enables Large-Scale Data Tokenization for Musicians and AI on Walrus"
                        }
                      </h5>
                    </a>
                  </div>
                  <div
                    role={"listitem"}
                    className={"news-latest_cms-item w-dyn-item"}
                  >
                    <a
                      data-blog-visual-link={""}
                      href={
                        "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/opengradient-builds-l1-storage-on-walrus"
                      }
                      className={"news-latest_cms-link w-inline-block"}
                    >
                      <div className={"news-latest_color-block"}></div>
                      <h5 className={"h5-18px"}>
                        {
                          "AI Development Platform OpenGradient Integrates Walrus as Dedicated Decentralized Storage Hub"
                        }
                      </h5>
                    </a>
                  </div>
                  <div
                    role={"listitem"}
                    className={"news-latest_cms-item w-dyn-item"}
                  >
                    <a
                      data-blog-visual-link={""}
                      href={
                        "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/how-walrus-blob-storage-works"
                      }
                      className={"news-latest_cms-link w-inline-block"}
                    >
                      <div className={"news-latest_color-block"}></div>
                      <h5 className={"h5-18px"}>
                        {"Bringing Programmability to Data Storage"}
                      </h5>
                    </a>
                  </div>
                  <div
                    role={"listitem"}
                    className={"news-latest_cms-item w-dyn-item"}
                  >
                    <a
                      data-blog-visual-link={""}
                      href={
                        "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/io-net-builds-ai-ml-compute-on-walrus"
                      }
                      className={"news-latest_cms-link w-inline-block"}
                    >
                      <div className={"news-latest_color-block"}></div>
                      <h5 className={"h5-18px"}>
                        {
                          "io.net Partners with Walrus to Enable Decentralized Storage and Compute Capability for AI and ML Applications"
                        }
                      </h5>
                    </a>
                  </div>
                  <div
                    role={"listitem"}
                    className={"news-latest_cms-item w-dyn-item"}
                  >
                    <a
                      data-blog-visual-link={""}
                      href={
                        "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/tusky-storage-solution-walrus"
                      }
                      className={"news-latest_cms-link w-inline-block"}
                    >
                      <div className={"news-latest_color-block"}></div>
                      <h5 className={"h5-18px"}>
                        {
                          "Tusky Builds Privacy-First Web3 File Storage on Walrus"
                        }
                      </h5>
                    </a>
                  </div>
                  <div
                    role={"listitem"}
                    className={"news-latest_cms-item w-dyn-item"}
                  >
                    <a
                      data-blog-visual-link={""}
                      href={
                        "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/seal-decentralized-storage-encryption"
                      }
                      className={"news-latest_cms-link w-inline-block"}
                    >
                      <div className={"news-latest_color-block"}></div>
                      <h5 className={"h5-18px"}>
                        {
                          "From Public to Private: Rethinking Web3 Data Security"
                        }
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
              <div className={"spacer_simulate-blog-info"}>
                <div className={"full w-dyn-list"}>
                  <div
                    role={"list"}
                    className={"blog-visual__wrap w-dyn-items"}
                  >
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"July 9, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/00a7288c-686eb86ecd9054b29d8d9826_TradePort-Blog-Header--1-.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/3e1cb37c-686eb86ecd9054b29d8d9826_TradePort-Blog-Header--1--p-500.jpg 500w, /assets/f3efaa8b-686eb86ecd9054b29d8d9826_TradePort-Blog-Header--1--p-800.jpg 800w, /assets/40e5cb8e-686eb86ecd9054b29d8d9826_TradePort-Blog-Header--1--p-1080.jpg 1080w, /assets/00a7288c-686eb86ecd9054b29d8d9826_TradePort-Blog-Header--1-.jpg 1600w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/00a7288c-686eb86ecd9054b29d8d9826_TradePort-Blog-Header--1-.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/3e1cb37c-686eb86ecd9054b29d8d9826_TradePort-Blog-Header--1--p-500.jpg 500w, /assets/f3efaa8b-686eb86ecd9054b29d8d9826_TradePort-Blog-Header--1--p-800.jpg 800w, /assets/40e5cb8e-686eb86ecd9054b29d8d9826_TradePort-Blog-Header--1--p-1080.jpg 1080w, /assets/00a7288c-686eb86ecd9054b29d8d9826_TradePort-Blog-Header--1-.jpg 1600w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "TradePort Leverages Walrus to Create an Advanced NFT Marketplace"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"422"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"July 3, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/36c21e90-686ebfd5109ed124677d02f7_Red-Stuff-Protocol.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/9931feec-686ebfd5109ed124677d02f7_Red-Stuff-Protocol-p-500.jpg 500w, /assets/f3cf0c59-686ebfd5109ed124677d02f7_Red-Stuff-Protocol-p-800.jpg 800w, /assets/3fd61db7-686ebfd5109ed124677d02f7_Red-Stuff-Protocol-p-1080.jpg 1080w, /assets/36c21e90-686ebfd5109ed124677d02f7_Red-Stuff-Protocol.jpg 1600w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/36c21e90-686ebfd5109ed124677d02f7_Red-Stuff-Protocol.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/9931feec-686ebfd5109ed124677d02f7_Red-Stuff-Protocol-p-500.jpg 500w, /assets/f3cf0c59-686ebfd5109ed124677d02f7_Red-Stuff-Protocol-p-800.jpg 800w, /assets/3fd61db7-686ebfd5109ed124677d02f7_Red-Stuff-Protocol-p-1080.jpg 1080w, /assets/36c21e90-686ebfd5109ed124677d02f7_Red-Stuff-Protocol.jpg 1600w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "Decoding Red Stuff: Walrus's Engine for Resilient and Efficient Storage"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"2086"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"July 1, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/b0feedbf-6864f039b26f4afedada6d3b_Itheum-Blog-Header--1-.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/1eb72d97-6864f039b26f4afedada6d3b_Itheum-20Blog-20Header-20-1--p-500.jpg 500w, /assets/bd487d83-6864f039b26f4afedada6d3b_Itheum-20Blog-20Header-20-1--p-800.jpg 800w, /assets/d10cb408-6864f039b26f4afedada6d3b_Itheum-20Blog-20Header-20-1--p-1080.jpg 1080w, /assets/b0feedbf-6864f039b26f4afedada6d3b_Itheum-Blog-Header--1-.jpg 1600w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/b0feedbf-6864f039b26f4afedada6d3b_Itheum-Blog-Header--1-.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/1eb72d97-6864f039b26f4afedada6d3b_Itheum-20Blog-20Header-20-1--p-500.jpg 500w, /assets/bd487d83-6864f039b26f4afedada6d3b_Itheum-20Blog-20Header-20-1--p-800.jpg 800w, /assets/d10cb408-6864f039b26f4afedada6d3b_Itheum-20Blog-20Header-20-1--p-1080.jpg 1080w, /assets/b0feedbf-6864f039b26f4afedada6d3b_Itheum-Blog-Header--1-.jpg 1600w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "Itheum Enables Large-Scale Data Tokenization for Musicians and AI on Walrus"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"516"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"June 25, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/f95704f9-6864f039b26f4afedada6d3a_Blog_Header_OpenGradient.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/f3c07aa9-6864f039b26f4afedada6d3a_Blog_Header_OpenGradient-p-500.jpg 500w, /assets/dffe1cda-6864f039b26f4afedada6d3a_Blog_Header_OpenGradient-p-800.jpg 800w, /assets/35b76bd8-6864f039b26f4afedada6d3a_Blog_Header_OpenGradient-p-1080.jpg 1080w, /assets/f95704f9-6864f039b26f4afedada6d3a_Blog_Header_OpenGradient.jpg 1600w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/f95704f9-6864f039b26f4afedada6d3a_Blog_Header_OpenGradient.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/f3c07aa9-6864f039b26f4afedada6d3a_Blog_Header_OpenGradient-p-500.jpg 500w, /assets/dffe1cda-6864f039b26f4afedada6d3a_Blog_Header_OpenGradient-p-800.jpg 800w, /assets/35b76bd8-6864f039b26f4afedada6d3a_Blog_Header_OpenGradient-p-1080.jpg 1080w, /assets/f95704f9-6864f039b26f4afedada6d3a_Blog_Header_OpenGradient.jpg 1600w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "AI Development Platform OpenGradient Integrates Walrus as Dedicated Decentralized Storage Hub"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"481"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"June 24, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/df15f91d-6864f039b26f4afedada6d38_Blog_Header_21.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/5c5d1d10-6864f039b26f4afedada6d38_Blog_Header_21-p-500.jpg 500w, /assets/33774e43-6864f039b26f4afedada6d38_Blog_Header_21-p-800.jpg 800w, /assets/f0173759-6864f039b26f4afedada6d38_Blog_Header_21-p-1080.jpg 1080w, /assets/df15f91d-6864f039b26f4afedada6d38_Blog_Header_21.jpg 1600w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/df15f91d-6864f039b26f4afedada6d38_Blog_Header_21.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/5c5d1d10-6864f039b26f4afedada6d38_Blog_Header_21-p-500.jpg 500w, /assets/33774e43-6864f039b26f4afedada6d38_Blog_Header_21-p-800.jpg 800w, /assets/f0173759-6864f039b26f4afedada6d38_Blog_Header_21-p-1080.jpg 1080w, /assets/df15f91d-6864f039b26f4afedada6d38_Blog_Header_21.jpg 1600w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {"Bringing Programmability to Data Storage"}
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"2328"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"June 17, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/23773d96-6864f039b26f4afedada6d37_Blog_Header_23.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/9ba46346-6864f039b26f4afedada6d37_Blog_Header_23-p-500.jpg 500w, /assets/a463c9b5-6864f039b26f4afedada6d37_Blog_Header_23-p-800.jpg 800w, /assets/52f48de9-6864f039b26f4afedada6d37_Blog_Header_23-p-1080.jpg 1080w, /assets/23773d96-6864f039b26f4afedada6d37_Blog_Header_23.jpg 1600w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/23773d96-6864f039b26f4afedada6d37_Blog_Header_23.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/9ba46346-6864f039b26f4afedada6d37_Blog_Header_23-p-500.jpg 500w, /assets/a463c9b5-6864f039b26f4afedada6d37_Blog_Header_23-p-800.jpg 800w, /assets/52f48de9-6864f039b26f4afedada6d37_Blog_Header_23-p-1080.jpg 1080w, /assets/23773d96-6864f039b26f4afedada6d37_Blog_Header_23.jpg 1600w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "io.net Partners with Walrus to Enable Decentralized Storage and Compute Capability for AI and ML Applications"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"624"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"June 10, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/d1a0e0cb-6864f039b26f4afedada6d36_Blog_Header_22_v1.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/445d4df2-6864f039b26f4afedada6d36_Blog_Header_22_v1-p-500.jpg 500w, /assets/7d79ca8a-6864f039b26f4afedada6d36_Blog_Header_22_v1-p-800.jpg 800w, /assets/01ff6f75-6864f039b26f4afedada6d36_Blog_Header_22_v1-p-1080.jpg 1080w, /assets/d1a0e0cb-6864f039b26f4afedada6d36_Blog_Header_22_v1.jpg 1600w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/d1a0e0cb-6864f039b26f4afedada6d36_Blog_Header_22_v1.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/445d4df2-6864f039b26f4afedada6d36_Blog_Header_22_v1-p-500.jpg 500w, /assets/7d79ca8a-6864f039b26f4afedada6d36_Blog_Header_22_v1-p-800.jpg 800w, /assets/01ff6f75-6864f039b26f4afedada6d36_Blog_Header_22_v1-p-1080.jpg 1080w, /assets/d1a0e0cb-6864f039b26f4afedada6d36_Blog_Header_22_v1.jpg 1600w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "Tusky Builds Privacy-First Web3 File Storage on Walrus"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"492"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"May 29, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/ab47828d-6864f039b26f4afedada6d35_Blog_Header_20.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/b3c9d2a3-6864f039b26f4afedada6d35_Blog_Header_20-p-500.jpg 500w, /assets/fa18b4b8-6864f039b26f4afedada6d35_Blog_Header_20-p-800.jpg 800w, /assets/b2f23cbe-6864f039b26f4afedada6d35_Blog_Header_20-p-1080.jpg 1080w, /assets/ab47828d-6864f039b26f4afedada6d35_Blog_Header_20.jpg 1600w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/ab47828d-6864f039b26f4afedada6d35_Blog_Header_20.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/b3c9d2a3-6864f039b26f4afedada6d35_Blog_Header_20-p-500.jpg 500w, /assets/fa18b4b8-6864f039b26f4afedada6d35_Blog_Header_20-p-800.jpg 800w, /assets/b2f23cbe-6864f039b26f4afedada6d35_Blog_Header_20-p-1080.jpg 1080w, /assets/ab47828d-6864f039b26f4afedada6d35_Blog_Header_20.jpg 1600w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "From Public to Private: Rethinking Web3 Data Security"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"635"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"April 29, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/f47a5844-6864f039b26f4afedada6d32_IMG_9202.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/22bcf462-6864f039b26f4afedada6d32_IMG_9202-p-500.png 500w, /assets/9de291e5-6864f039b26f4afedada6d32_IMG_9202-p-800.png 800w, /assets/7a35acea-6864f039b26f4afedada6d32_IMG_9202-p-1080.png 1080w, /assets/123b7755-6864f039b26f4afedada6d32_IMG_9202-p-1600.png 1600w, /assets/dc6dba61-6864f039b26f4afedada6d32_IMG_9202-p-2000.png 2000w, /assets/c2d816de-6864f039b26f4afedada6d32_IMG_9202-p-2600.png 2600w, /assets/f47a5844-6864f039b26f4afedada6d32_IMG_9202.png 3200w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/f47a5844-6864f039b26f4afedada6d32_IMG_9202.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/22bcf462-6864f039b26f4afedada6d32_IMG_9202-p-500.png 500w, /assets/9de291e5-6864f039b26f4afedada6d32_IMG_9202-p-800.png 800w, /assets/7a35acea-6864f039b26f4afedada6d32_IMG_9202-p-1080.png 1080w, /assets/123b7755-6864f039b26f4afedada6d32_IMG_9202-p-1600.png 1600w, /assets/dc6dba61-6864f039b26f4afedada6d32_IMG_9202-p-2000.png 2000w, /assets/c2d816de-6864f039b26f4afedada6d32_IMG_9202-p-2600.png 2600w, /assets/f47a5844-6864f039b26f4afedada6d32_IMG_9202.png 3200w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "Pudgy Penguins Partners with Walrus to Bring Decentralized Storage to Web3’s Leading IP"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"496"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"April 29, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/8c981db6-6864f039b26f4afedada6d2f_Unchained-Walrus.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/b8a84e82-6864f039b26f4afedada6d2f_Unchained-Walrus-p-500.jpg 500w, /assets/cab28809-6864f039b26f4afedada6d2f_Unchained-Walrus-p-800.jpg 800w, /assets/129ced17-6864f039b26f4afedada6d2f_Unchained-Walrus-p-1080.jpg 1080w, /assets/8c981db6-6864f039b26f4afedada6d2f_Unchained-Walrus.jpg 1600w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/8c981db6-6864f039b26f4afedada6d2f_Unchained-Walrus.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/b8a84e82-6864f039b26f4afedada6d2f_Unchained-Walrus-p-500.jpg 500w, /assets/cab28809-6864f039b26f4afedada6d2f_Unchained-Walrus-p-800.jpg 800w, /assets/129ced17-6864f039b26f4afedada6d2f_Unchained-Walrus-p-1080.jpg 1080w, /assets/8c981db6-6864f039b26f4afedada6d2f_Unchained-Walrus.jpg 1600w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "Unchained Selects Walrus to Future-Proof Its Media Library"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"351"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"April 24, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/51b4ac9d-6864f039b26f4afedada6d30_Line-Friends-Walrus.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/1864835b-6864f039b26f4afedada6d30_Line-Friends-Walrus-p-500.jpg 500w, /assets/fe2d8c9a-6864f039b26f4afedada6d30_Line-Friends-Walrus-p-800.jpg 800w, /assets/81d626b3-6864f039b26f4afedada6d30_Line-Friends-Walrus-p-1080.jpg 1080w, /assets/51b4ac9d-6864f039b26f4afedada6d30_Line-Friends-Walrus.jpg 1600w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/51b4ac9d-6864f039b26f4afedada6d30_Line-Friends-Walrus.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/1864835b-6864f039b26f4afedada6d30_Line-Friends-Walrus-p-500.jpg 500w, /assets/fe2d8c9a-6864f039b26f4afedada6d30_Line-Friends-Walrus-p-800.jpg 800w, /assets/81d626b3-6864f039b26f4afedada6d30_Line-Friends-Walrus-p-1080.jpg 1080w, /assets/51b4ac9d-6864f039b26f4afedada6d30_Line-Friends-Walrus.jpg 1600w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "LINE FRIENDS Coming to Walrus in New, AI-Driven Game"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"472"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"April 10, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/3dacb5b9-6864f039b26f4afedada6d2e_Blog_Header_16.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/f56567cd-6864f039b26f4afedada6d2e_Crossmin-Walrus-p-500.jpg 500w, /assets/4002e93d-6864f039b26f4afedada6d2e_Crossmin-Walrus-p-800.jpg 800w, /assets/17034119-6864f039b26f4afedada6d2e_Crossmin-Walrus-p-1080.jpg 1080w, /assets/3dacb5b9-6864f039b26f4afedada6d2e_Blog_Header_16.jpg 1600w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/3dacb5b9-6864f039b26f4afedada6d2e_Blog_Header_16.jpg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/f56567cd-6864f039b26f4afedada6d2e_Crossmin-Walrus-p-500.jpg 500w, /assets/4002e93d-6864f039b26f4afedada6d2e_Crossmin-Walrus-p-800.jpg 800w, /assets/17034119-6864f039b26f4afedada6d2e_Crossmin-Walrus-p-1080.jpg 1080w, /assets/3dacb5b9-6864f039b26f4afedada6d2e_Blog_Header_16.jpg 1600w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "Crossmint Integrates Walrus Protocol into its Minting APIs Across Chains"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"552"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"April 2, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/67f6fd47-6864f039b26f4afedada6d2a_Webacy_Walrus-blog.jpeg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/1a452692-6864f039b26f4afedada6d2a_Webacy_Walrus-20blog-p-500.jpeg 500w, /assets/d89cf79f-6864f039b26f4afedada6d2a_Webacy_Walrus-20blog-p-800.jpeg 800w, /assets/064f7d08-6864f039b26f4afedada6d2a_Webacy_Walrus-20blog-p-1080.jpeg 1080w, /assets/330182a2-6864f039b26f4afedada6d2a_Webacy_Walrus-20blog-p-1600.jpeg 1600w, /assets/e0f3f4c0-6864f039b26f4afedada6d2a_Webacy_Walrus-20blog-p-2000.jpeg 2000w, /assets/1a6cf531-6864f039b26f4afedada6d2a_Webacy_Walrus-20blog-p-2600.jpeg 2600w, /assets/67f6fd47-6864f039b26f4afedada6d2a_Webacy_Walrus-blog.jpeg 3200w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/67f6fd47-6864f039b26f4afedada6d2a_Webacy_Walrus-blog.jpeg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/1a452692-6864f039b26f4afedada6d2a_Webacy_Walrus-20blog-p-500.jpeg 500w, /assets/d89cf79f-6864f039b26f4afedada6d2a_Webacy_Walrus-20blog-p-800.jpeg 800w, /assets/064f7d08-6864f039b26f4afedada6d2a_Webacy_Walrus-20blog-p-1080.jpeg 1080w, /assets/330182a2-6864f039b26f4afedada6d2a_Webacy_Walrus-20blog-p-1600.jpeg 1600w, /assets/e0f3f4c0-6864f039b26f4afedada6d2a_Webacy_Walrus-20blog-p-2000.jpeg 2000w, /assets/1a6cf531-6864f039b26f4afedada6d2a_Webacy_Walrus-20blog-p-2600.jpeg 2600w, /assets/67f6fd47-6864f039b26f4afedada6d2a_Webacy_Walrus-blog.jpeg 3200w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "Webacy Leverages Walrus Technology to Build Onchain, Risk Analysis Decisioning Layer"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"387"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"March 28, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/ded2f757-6864f039b26f4afedada6d2c_Blog_Header_14--1-.jpeg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/c749d48d-6864f039b26f4afedada6d2c_Blog_Header_14-20-1--p-500.jpeg 500w, /assets/564f7a27-6864f039b26f4afedada6d2c_Blog_Header_14-20-1--p-800.jpeg 800w, /assets/7812032e-6864f039b26f4afedada6d2c_Blog_Header_14-20-1--p-1080.jpeg 1080w, /assets/bf4c7688-6864f039b26f4afedada6d2c_Blog_Header_14-20-1--p-1600.jpeg 1600w, /assets/c2d0585d-6864f039b26f4afedada6d2c_Blog_Header_14-20-1--p-2000.jpeg 2000w, /assets/b2aa66ab-6864f039b26f4afedada6d2c_Blog_Header_14-20-1--p-2600.jpeg 2600w, /assets/ded2f757-6864f039b26f4afedada6d2c_Blog_Header_14--1-.jpeg 3200w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/ded2f757-6864f039b26f4afedada6d2c_Blog_Header_14--1-.jpeg"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/c749d48d-6864f039b26f4afedada6d2c_Blog_Header_14-20-1--p-500.jpeg 500w, /assets/564f7a27-6864f039b26f4afedada6d2c_Blog_Header_14-20-1--p-800.jpeg 800w, /assets/7812032e-6864f039b26f4afedada6d2c_Blog_Header_14-20-1--p-1080.jpeg 1080w, /assets/bf4c7688-6864f039b26f4afedada6d2c_Blog_Header_14-20-1--p-1600.jpeg 1600w, /assets/c2d0585d-6864f039b26f4afedada6d2c_Blog_Header_14-20-1--p-2000.jpeg 2000w, /assets/b2aa66ab-6864f039b26f4afedada6d2c_Blog_Header_14-20-1--p-2600.jpeg 2600w, /assets/ded2f757-6864f039b26f4afedada6d2c_Blog_Header_14--1-.jpeg 3200w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "Walrus Foundation Launches RFP Program to Support Ecosystem Development"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"497"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"March 28, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/2b857679-6864f039b26f4afedada6cff_Blog_Header_10--1-.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/798f2d25-6864f039b26f4afedada6cff_Blog_Header_10-20-1--p-500.png 500w, /assets/42e5e5d0-6864f039b26f4afedada6cff_Blog_Header_10-20-1--p-800.png 800w, /assets/1a8e736c-6864f039b26f4afedada6cff_Blog_Header_10-20-1--p-1080.png 1080w, /assets/1653aac4-6864f039b26f4afedada6cff_Blog_Header_10-20-1--p-1600.png 1600w, /assets/dc9e4565-6864f039b26f4afedada6cff_Blog_Header_10-20-1--p-2000.png 2000w, /assets/a1b970e1-6864f039b26f4afedada6cff_Blog_Header_10-20-1--p-2600.png 2600w, /assets/2b857679-6864f039b26f4afedada6cff_Blog_Header_10--1-.png 3200w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/2b857679-6864f039b26f4afedada6cff_Blog_Header_10--1-.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/798f2d25-6864f039b26f4afedada6cff_Blog_Header_10-20-1--p-500.png 500w, /assets/42e5e5d0-6864f039b26f4afedada6cff_Blog_Header_10-20-1--p-800.png 800w, /assets/1a8e736c-6864f039b26f4afedada6cff_Blog_Header_10-20-1--p-1080.png 1080w, /assets/1653aac4-6864f039b26f4afedada6cff_Blog_Header_10-20-1--p-1600.png 1600w, /assets/dc9e4565-6864f039b26f4afedada6cff_Blog_Header_10-20-1--p-2000.png 2000w, /assets/a1b970e1-6864f039b26f4afedada6cff_Blog_Header_10-20-1--p-2600.png 2600w, /assets/2b857679-6864f039b26f4afedada6cff_Blog_Header_10--1-.png 3200w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {"Walrus Bug Bounty Program Goes Live"}
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"323"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"March 27, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/168e88ac-6864f039b26f4afedada6cfd_Blog_Header_13.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/45fd7a2c-6864f039b26f4afedada6cfd_Blog_Header_13-p-500.png 500w, /assets/f8c61be0-6864f039b26f4afedada6cfd_Blog_Header_13-p-800.png 800w, /assets/f586224b-6864f039b26f4afedada6cfd_Blog_Header_13-p-1080.png 1080w, /assets/69b59a94-6864f039b26f4afedada6cfd_Blog_Header_13-p-1600.png 1600w, /assets/0463f1fe-6864f039b26f4afedada6cfd_Blog_Header_13-p-2000.png 2000w, /assets/75d5966f-6864f039b26f4afedada6cfd_Blog_Header_13-p-2600.png 2600w, /assets/168e88ac-6864f039b26f4afedada6cfd_Blog_Header_13.png 3200w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/168e88ac-6864f039b26f4afedada6cfd_Blog_Header_13.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/45fd7a2c-6864f039b26f4afedada6cfd_Blog_Header_13-p-500.png 500w, /assets/f8c61be0-6864f039b26f4afedada6cfd_Blog_Header_13-p-800.png 800w, /assets/f586224b-6864f039b26f4afedada6cfd_Blog_Header_13-p-1080.png 1080w, /assets/69b59a94-6864f039b26f4afedada6cfd_Blog_Header_13-p-1600.png 1600w, /assets/0463f1fe-6864f039b26f4afedada6cfd_Blog_Header_13-p-2000.png 2000w, /assets/75d5966f-6864f039b26f4afedada6cfd_Blog_Header_13-p-2600.png 2600w, /assets/168e88ac-6864f039b26f4afedada6cfd_Blog_Header_13.png 3200w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {"How to Stake on Walrus "}
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"698"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"March 27, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/6cf3b600-6864f039b26f4afedada6cfa_Blog_Header_12.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/a839571d-6864f039b26f4afedada6cfa_Blog_Header_12-p-500.png 500w, /assets/c274d7c8-6864f039b26f4afedada6cfa_Blog_Header_12-p-800.png 800w, /assets/34757b0d-6864f039b26f4afedada6cfa_Blog_Header_12-p-1080.png 1080w, /assets/51ccdb0a-6864f039b26f4afedada6cfa_Blog_Header_12-p-1600.png 1600w, /assets/c1cca140-6864f039b26f4afedada6cfa_Blog_Header_12-p-2000.png 2000w, /assets/806e9404-6864f039b26f4afedada6cfa_Blog_Header_12-p-2600.png 2600w, /assets/6cf3b600-6864f039b26f4afedada6cfa_Blog_Header_12.png 3200w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/6cf3b600-6864f039b26f4afedada6cfa_Blog_Header_12.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/a839571d-6864f039b26f4afedada6cfa_Blog_Header_12-p-500.png 500w, /assets/c274d7c8-6864f039b26f4afedada6cfa_Blog_Header_12-p-800.png 800w, /assets/34757b0d-6864f039b26f4afedada6cfa_Blog_Header_12-p-1080.png 1080w, /assets/51ccdb0a-6864f039b26f4afedada6cfa_Blog_Header_12-p-1600.png 1600w, /assets/c1cca140-6864f039b26f4afedada6cfa_Blog_Header_12-p-2000.png 2000w, /assets/806e9404-6864f039b26f4afedada6cfa_Blog_Header_12-p-2600.png 2600w, /assets/6cf3b600-6864f039b26f4afedada6cfa_Blog_Header_12.png 3200w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "Walrus Launches on Mainnet, Unlocking Programmable Storage for All"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"791 words"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"March 26, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/b732ff8d-6864f039b26f4afedada6cfb_Blog_Header_11.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/76408ca0-6864f039b26f4afedada6cfb_Blog_Header_11-p-500.png 500w, /assets/a85da944-6864f039b26f4afedada6cfb_Blog_Header_11-p-800.png 800w, /assets/59a303c9-6864f039b26f4afedada6cfb_Blog_Header_11-p-1080.png 1080w, /assets/9c418bd3-6864f039b26f4afedada6cfb_Blog_Header_11-p-1600.png 1600w, /assets/a14e9edf-6864f039b26f4afedada6cfb_Blog_Header_11-p-2000.png 2000w, /assets/261fc85a-6864f039b26f4afedada6cfb_Blog_Header_11-p-2600.png 2600w, /assets/b732ff8d-6864f039b26f4afedada6cfb_Blog_Header_11.png 3200w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/b732ff8d-6864f039b26f4afedada6cfb_Blog_Header_11.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/76408ca0-6864f039b26f4afedada6cfb_Blog_Header_11-p-500.png 500w, /assets/a85da944-6864f039b26f4afedada6cfb_Blog_Header_11-p-800.png 800w, /assets/59a303c9-6864f039b26f4afedada6cfb_Blog_Header_11-p-1080.png 1080w, /assets/9c418bd3-6864f039b26f4afedada6cfb_Blog_Header_11-p-1600.png 1600w, /assets/a14e9edf-6864f039b26f4afedada6cfb_Blog_Header_11-p-2000.png 2000w, /assets/261fc85a-6864f039b26f4afedada6cfb_Blog_Header_11-p-2600.png 2600w, /assets/b732ff8d-6864f039b26f4afedada6cfb_Blog_Header_11.png 3200w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {"Claynosaurz Joins Walrus as Mainnet Launch Partner"}
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"361 words"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"March 25, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/725d3980-6864f039b26f4afedada6cf9_67e2d7797180458b5794c202_WAL-Staking-Rewards_blog.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/d841e9e6-6864f039b26f4afedada6cf9_67e2d7797180458b5794c202_WAL-20Staking-20Rewards_blog-p-500.png 500w, /assets/77e9b0a8-6864f039b26f4afedada6cf9_67e2d7797180458b5794c202_WAL-20Staking-20Rewards_blog-p-800.png 800w, /assets/dc1e852d-6864f039b26f4afedada6cf9_67e2d7797180458b5794c202_WAL-20Staking-20Rewards_blog-p-1080.png 1080w, /assets/7b411176-6864f039b26f4afedada6cf9_67e2d7797180458b5794c202_WAL-20Staking-20Rewards_blog-p-1600.png 1600w, /assets/1d979802-6864f039b26f4afedada6cf9_67e2d7797180458b5794c202_WAL-20Staking-20Rewards_blog-p-2000.png 2000w, /assets/8650683c-6864f039b26f4afedada6cf9_67e2d7797180458b5794c202_WAL-20Staking-20Rewards_blog-p-2600.png 2600w, /assets/725d3980-6864f039b26f4afedada6cf9_67e2d7797180458b5794c202_WAL-Staking-Rewards_blog.png 3200w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/725d3980-6864f039b26f4afedada6cf9_67e2d7797180458b5794c202_WAL-Staking-Rewards_blog.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/d841e9e6-6864f039b26f4afedada6cf9_67e2d7797180458b5794c202_WAL-20Staking-20Rewards_blog-p-500.png 500w, /assets/77e9b0a8-6864f039b26f4afedada6cf9_67e2d7797180458b5794c202_WAL-20Staking-20Rewards_blog-p-800.png 800w, /assets/dc1e852d-6864f039b26f4afedada6cf9_67e2d7797180458b5794c202_WAL-20Staking-20Rewards_blog-p-1080.png 1080w, /assets/7b411176-6864f039b26f4afedada6cf9_67e2d7797180458b5794c202_WAL-20Staking-20Rewards_blog-p-1600.png 1600w, /assets/1d979802-6864f039b26f4afedada6cf9_67e2d7797180458b5794c202_WAL-20Staking-20Rewards_blog-p-2000.png 2000w, /assets/8650683c-6864f039b26f4afedada6cf9_67e2d7797180458b5794c202_WAL-20Staking-20Rewards_blog-p-2600.png 2600w, /assets/725d3980-6864f039b26f4afedada6cf9_67e2d7797180458b5794c202_WAL-Staking-Rewards_blog.png 3200w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {"WAL Staking Rewards"}
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"1203 words"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"March 20, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/e2154b06-6864f039b26f4afedada6cf3_67db3d447db5dcbedd53c030_Blog_Header_08.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/013c9afc-6864f039b26f4afedada6cf3_67db3d447db5dcbedd53c030_Blog_Header_08-p-500.png 500w, /assets/49c7b55a-6864f039b26f4afedada6cf3_67db3d447db5dcbedd53c030_Blog_Header_08-p-800.png 800w, /assets/e44ff07b-6864f039b26f4afedada6cf3_67db3d447db5dcbedd53c030_Blog_Header_08-p-1080.png 1080w, /assets/80f4a57c-6864f039b26f4afedada6cf3_67db3d447db5dcbedd53c030_Blog_Header_08-p-1600.png 1600w, /assets/126096af-6864f039b26f4afedada6cf3_67db3d447db5dcbedd53c030_Blog_Header_08-p-2000.png 2000w, /assets/e2154b06-6864f039b26f4afedada6cf3_67db3d447db5dcbedd53c030_Blog_Header_08.png 3200w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/e2154b06-6864f039b26f4afedada6cf3_67db3d447db5dcbedd53c030_Blog_Header_08.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/013c9afc-6864f039b26f4afedada6cf3_67db3d447db5dcbedd53c030_Blog_Header_08-p-500.png 500w, /assets/49c7b55a-6864f039b26f4afedada6cf3_67db3d447db5dcbedd53c030_Blog_Header_08-p-800.png 800w, /assets/e44ff07b-6864f039b26f4afedada6cf3_67db3d447db5dcbedd53c030_Blog_Header_08-p-1080.png 1080w, /assets/80f4a57c-6864f039b26f4afedada6cf3_67db3d447db5dcbedd53c030_Blog_Header_08-p-1600.png 1600w, /assets/126096af-6864f039b26f4afedada6cf3_67db3d447db5dcbedd53c030_Blog_Header_08-p-2000.png 2000w, /assets/e2154b06-6864f039b26f4afedada6cf3_67db3d447db5dcbedd53c030_Blog_Header_08.png 3200w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "Walrus Foundation Secures $140M in Fundraising Led By Standard Crypto"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"390 words"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"March 18, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/2ba2ecb5-6864f039b26f4afedada6cf2_67daf5928cd1ec85450d9bdc_Blog_Header_07.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/7f33dd93-6864f039b26f4afedada6cf2_67daf5928cd1ec85450d9bdc_Blog_Header_07-p-500.png 500w, /assets/ead2168e-6864f039b26f4afedada6cf2_67daf5928cd1ec85450d9bdc_Blog_Header_07-p-800.png 800w, /assets/246d45af-6864f039b26f4afedada6cf2_67daf5928cd1ec85450d9bdc_Blog_Header_07-p-1080.png 1080w, /assets/0b5786c3-6864f039b26f4afedada6cf2_67daf5928cd1ec85450d9bdc_Blog_Header_07-p-1600.png 1600w, /assets/fefb5ba6-6864f039b26f4afedada6cf2_67daf5928cd1ec85450d9bdc_Blog_Header_07-p-2000.png 2000w, /assets/57571685-6864f039b26f4afedada6cf2_67daf5928cd1ec85450d9bdc_Blog_Header_07-p-2600.png 2600w, /assets/2ba2ecb5-6864f039b26f4afedada6cf2_67daf5928cd1ec85450d9bdc_Blog_Header_07.png 3200w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/2ba2ecb5-6864f039b26f4afedada6cf2_67daf5928cd1ec85450d9bdc_Blog_Header_07.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/7f33dd93-6864f039b26f4afedada6cf2_67daf5928cd1ec85450d9bdc_Blog_Header_07-p-500.png 500w, /assets/ead2168e-6864f039b26f4afedada6cf2_67daf5928cd1ec85450d9bdc_Blog_Header_07-p-800.png 800w, /assets/246d45af-6864f039b26f4afedada6cf2_67daf5928cd1ec85450d9bdc_Blog_Header_07-p-1080.png 1080w, /assets/0b5786c3-6864f039b26f4afedada6cf2_67daf5928cd1ec85450d9bdc_Blog_Header_07-p-1600.png 1600w, /assets/fefb5ba6-6864f039b26f4afedada6cf2_67daf5928cd1ec85450d9bdc_Blog_Header_07-p-2000.png 2000w, /assets/57571685-6864f039b26f4afedada6cf2_67daf5928cd1ec85450d9bdc_Blog_Header_07-p-2600.png 2600w, /assets/2ba2ecb5-6864f039b26f4afedada6cf2_67daf5928cd1ec85450d9bdc_Blog_Header_07.png 3200w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "Chainbase Integrates Walrus Protocol to Power Decentralized Data Storage and Availability"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"303 words"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"March 11, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/e1fdeeb2-6864f039b26f4afedada6cf1_67daf585e2857fa9b1fdac06_Blog_Header_06.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/072a1891-6864f039b26f4afedada6cf1_67daf585e2857fa9b1fdac06_Blog_Header_06-p-500.png 500w, /assets/b6111aa7-6864f039b26f4afedada6cf1_67daf585e2857fa9b1fdac06_Blog_Header_06-p-800.png 800w, /assets/9c6e60ed-6864f039b26f4afedada6cf1_67daf585e2857fa9b1fdac06_Blog_Header_06-p-1080.png 1080w, /assets/9491273c-6864f039b26f4afedada6cf1_67daf585e2857fa9b1fdac06_Blog_Header_06-p-1600.png 1600w, /assets/94347aab-6864f039b26f4afedada6cf1_67daf585e2857fa9b1fdac06_Blog_Header_06-p-2000.png 2000w, /assets/5d1cbb22-6864f039b26f4afedada6cf1_67daf585e2857fa9b1fdac06_Blog_Header_06-p-2600.png 2600w, /assets/e1fdeeb2-6864f039b26f4afedada6cf1_67daf585e2857fa9b1fdac06_Blog_Header_06.png 3200w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/e1fdeeb2-6864f039b26f4afedada6cf1_67daf585e2857fa9b1fdac06_Blog_Header_06.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/072a1891-6864f039b26f4afedada6cf1_67daf585e2857fa9b1fdac06_Blog_Header_06-p-500.png 500w, /assets/b6111aa7-6864f039b26f4afedada6cf1_67daf585e2857fa9b1fdac06_Blog_Header_06-p-800.png 800w, /assets/9c6e60ed-6864f039b26f4afedada6cf1_67daf585e2857fa9b1fdac06_Blog_Header_06-p-1080.png 1080w, /assets/9491273c-6864f039b26f4afedada6cf1_67daf585e2857fa9b1fdac06_Blog_Header_06-p-1600.png 1600w, /assets/94347aab-6864f039b26f4afedada6cf1_67daf585e2857fa9b1fdac06_Blog_Header_06-p-2000.png 2000w, /assets/5d1cbb22-6864f039b26f4afedada6cf1_67daf585e2857fa9b1fdac06_Blog_Header_06-p-2600.png 2600w, /assets/e1fdeeb2-6864f039b26f4afedada6cf1_67daf585e2857fa9b1fdac06_Blog_Header_06.png 3200w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "Plume Partners with Mysten Labs to Advance Real-World Asset Tokenization with Walrus"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"415 words"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"March 4, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/5239d7e0-6864f039b26f4afedada6ce0_67daf56d00d2fd0bb913011f_Blog_Header_05.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/b9791265-6864f039b26f4afedada6ce0_67daf56d00d2fd0bb913011f_Blog_Header_05-p-500.png 500w, /assets/909989ea-6864f039b26f4afedada6ce0_67daf56d00d2fd0bb913011f_Blog_Header_05-p-800.png 800w, /assets/136c8c73-6864f039b26f4afedada6ce0_67daf56d00d2fd0bb913011f_Blog_Header_05-p-1080.png 1080w, /assets/41e7d4ce-6864f039b26f4afedada6ce0_67daf56d00d2fd0bb913011f_Blog_Header_05-p-1600.png 1600w, /assets/a39f0664-6864f039b26f4afedada6ce0_67daf56d00d2fd0bb913011f_Blog_Header_05-p-2000.png 2000w, /assets/d70982ed-6864f039b26f4afedada6ce0_67daf56d00d2fd0bb913011f_Blog_Header_05-p-2600.png 2600w, /assets/5239d7e0-6864f039b26f4afedada6ce0_67daf56d00d2fd0bb913011f_Blog_Header_05.png 3200w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/5239d7e0-6864f039b26f4afedada6ce0_67daf56d00d2fd0bb913011f_Blog_Header_05.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/b9791265-6864f039b26f4afedada6ce0_67daf56d00d2fd0bb913011f_Blog_Header_05-p-500.png 500w, /assets/909989ea-6864f039b26f4afedada6ce0_67daf56d00d2fd0bb913011f_Blog_Header_05-p-800.png 800w, /assets/136c8c73-6864f039b26f4afedada6ce0_67daf56d00d2fd0bb913011f_Blog_Header_05-p-1080.png 1080w, /assets/41e7d4ce-6864f039b26f4afedada6ce0_67daf56d00d2fd0bb913011f_Blog_Header_05-p-1600.png 1600w, /assets/a39f0664-6864f039b26f4afedada6ce0_67daf56d00d2fd0bb913011f_Blog_Header_05-p-2000.png 2000w, /assets/d70982ed-6864f039b26f4afedada6ce0_67daf56d00d2fd0bb913011f_Blog_Header_05-p-2600.png 2600w, /assets/5239d7e0-6864f039b26f4afedada6ce0_67daf56d00d2fd0bb913011f_Blog_Header_05.png 3200w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "Data Tokenization Protocol Itheum Partners With Walrus"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"392 words"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"February 25, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/da55ae11-6864f039b26f4afedada6bde_linea-img.svg"
                          }
                          loading={"lazy"}
                          alt={""}
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/da55ae11-6864f039b26f4afedada6bde_linea-img.svg"
                          }
                          loading={"lazy"}
                          alt={""}
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "L1 Blockchain Linera Selects Walrus as Its Storage Solution"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"453 words"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"February 18, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/00deed93-6864f039b26f4afedada6cbf_67daf538a1cda1455093cd3a_Blog_Header_03.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/23eebe01-6864f039b26f4afedada6cbf_67daf538a1cda1455093cd3a_Blog_Header_03-p-500.png 500w, /assets/8db45c1d-6864f039b26f4afedada6cbf_67daf538a1cda1455093cd3a_Blog_Header_03-p-800.png 800w, /assets/d74a045f-6864f039b26f4afedada6cbf_67daf538a1cda1455093cd3a_Blog_Header_03-p-1080.png 1080w, /assets/40718ae9-6864f039b26f4afedada6cbf_67daf538a1cda1455093cd3a_Blog_Header_03-p-1600.png 1600w, /assets/61118f04-6864f039b26f4afedada6cbf_67daf538a1cda1455093cd3a_Blog_Header_03-p-2000.png 2000w, /assets/9faec30d-6864f039b26f4afedada6cbf_67daf538a1cda1455093cd3a_Blog_Header_03-p-2600.png 2600w, /assets/00deed93-6864f039b26f4afedada6cbf_67daf538a1cda1455093cd3a_Blog_Header_03.png 3200w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/00deed93-6864f039b26f4afedada6cbf_67daf538a1cda1455093cd3a_Blog_Header_03.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/23eebe01-6864f039b26f4afedada6cbf_67daf538a1cda1455093cd3a_Blog_Header_03-p-500.png 500w, /assets/8db45c1d-6864f039b26f4afedada6cbf_67daf538a1cda1455093cd3a_Blog_Header_03-p-800.png 800w, /assets/d74a045f-6864f039b26f4afedada6cbf_67daf538a1cda1455093cd3a_Blog_Header_03-p-1080.png 1080w, /assets/40718ae9-6864f039b26f4afedada6cbf_67daf538a1cda1455093cd3a_Blog_Header_03-p-1600.png 1600w, /assets/61118f04-6864f039b26f4afedada6cbf_67daf538a1cda1455093cd3a_Blog_Header_03-p-2000.png 2000w, /assets/9faec30d-6864f039b26f4afedada6cbf_67daf538a1cda1455093cd3a_Blog_Header_03-p-2600.png 2600w, /assets/00deed93-6864f039b26f4afedada6cbf_67daf538a1cda1455093cd3a_Blog_Header_03.png 3200w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "Walrus NFT Airdrop Gives Community Claims for Token"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"359 words"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"February 11, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/fa8ccfdf-6864f039b26f4afedada6cab_67daf4b26bdef4dd083fc3ce_Blog_Header_02.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/bb9cf550-6864f039b26f4afedada6cab_67daf4b26bdef4dd083fc3ce_Blog_Header_02-p-500.png 500w, /assets/3c241762-6864f039b26f4afedada6cab_67daf4b26bdef4dd083fc3ce_Blog_Header_02-p-800.png 800w, /assets/0dcc7f70-6864f039b26f4afedada6cab_67daf4b26bdef4dd083fc3ce_Blog_Header_02-p-1080.png 1080w, /assets/d1823b43-6864f039b26f4afedada6cab_67daf4b26bdef4dd083fc3ce_Blog_Header_02-p-1600.png 1600w, /assets/f1497301-6864f039b26f4afedada6cab_67daf4b26bdef4dd083fc3ce_Blog_Header_02-p-2000.png 2000w, /assets/69d4f7ae-6864f039b26f4afedada6cab_67daf4b26bdef4dd083fc3ce_Blog_Header_02-p-2600.png 2600w, /assets/fa8ccfdf-6864f039b26f4afedada6cab_67daf4b26bdef4dd083fc3ce_Blog_Header_02.png 3200w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/fa8ccfdf-6864f039b26f4afedada6cab_67daf4b26bdef4dd083fc3ce_Blog_Header_02.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/bb9cf550-6864f039b26f4afedada6cab_67daf4b26bdef4dd083fc3ce_Blog_Header_02-p-500.png 500w, /assets/3c241762-6864f039b26f4afedada6cab_67daf4b26bdef4dd083fc3ce_Blog_Header_02-p-800.png 800w, /assets/0dcc7f70-6864f039b26f4afedada6cab_67daf4b26bdef4dd083fc3ce_Blog_Header_02-p-1080.png 1080w, /assets/d1823b43-6864f039b26f4afedada6cab_67daf4b26bdef4dd083fc3ce_Blog_Header_02-p-1600.png 1600w, /assets/f1497301-6864f039b26f4afedada6cab_67daf4b26bdef4dd083fc3ce_Blog_Header_02-p-2000.png 2000w, /assets/69d4f7ae-6864f039b26f4afedada6cab_67daf4b26bdef4dd083fc3ce_Blog_Header_02-p-2600.png 2600w, /assets/fa8ccfdf-6864f039b26f4afedada6cab_67daf4b26bdef4dd083fc3ce_Blog_Header_02.png 3200w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {"3DOS Chooses Walrus for 3D Design Storage"}
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"454 words"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-blog-visual={""}
                      role={"listitem"}
                      className={"blog-visual__item w-dyn-item"}
                    >
                      <div
                        data-blog-visual-anim={""}
                        className={"flex-h gap--small"}
                      >
                        <p className={"p-regular"}>{"Information:"}</p>
                        <p className={"p-regular color-gray-600"}>
                          {"February 5, 2025"}
                        </p>
                      </div>
                      <div
                        data-blog-visual-img={""}
                        className={"blog-visual__inner"}
                      >
                        <img
                          src={
                            "/assets/5e1b128f-6864f039b26f4afedada6c93_67daf4987632b693c28c9f4e_Blog_Header_01.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/a1bf7a78-6864f039b26f4afedada6c93_67daf4987632b693c28c9f4e_Blog_Header_01-p-500.png 500w, /assets/b518943b-6864f039b26f4afedada6c93_67daf4987632b693c28c9f4e_Blog_Header_01-p-800.png 800w, /assets/6b83519d-6864f039b26f4afedada6c93_67daf4987632b693c28c9f4e_Blog_Header_01-p-1080.png 1080w, /assets/0b67815e-6864f039b26f4afedada6c93_67daf4987632b693c28c9f4e_Blog_Header_01-p-1600.png 1600w, /assets/b8024443-6864f039b26f4afedada6c93_67daf4987632b693c28c9f4e_Blog_Header_01-p-2000.png 2000w, /assets/5f7a3811-6864f039b26f4afedada6c93_67daf4987632b693c28c9f4e_Blog_Header_01-p-2600.png 2600w, /assets/5e1b128f-6864f039b26f4afedada6c93_67daf4987632b693c28c9f4e_Blog_Header_01.png 3200w"
                          }
                          className={"blog-visual__inner-img behind"}
                        />
                        <img
                          src={
                            "/assets/5e1b128f-6864f039b26f4afedada6c93_67daf4987632b693c28c9f4e_Blog_Header_01.png"
                          }
                          loading={"lazy"}
                          alt={""}
                          sizes={"100vw"}
                          srcSet={
                            "/assets/a1bf7a78-6864f039b26f4afedada6c93_67daf4987632b693c28c9f4e_Blog_Header_01-p-500.png 500w, /assets/b518943b-6864f039b26f4afedada6c93_67daf4987632b693c28c9f4e_Blog_Header_01-p-800.png 800w, /assets/6b83519d-6864f039b26f4afedada6c93_67daf4987632b693c28c9f4e_Blog_Header_01-p-1080.png 1080w, /assets/0b67815e-6864f039b26f4afedada6c93_67daf4987632b693c28c9f4e_Blog_Header_01-p-1600.png 1600w, /assets/b8024443-6864f039b26f4afedada6c93_67daf4987632b693c28c9f4e_Blog_Header_01-p-2000.png 2000w, /assets/5f7a3811-6864f039b26f4afedada6c93_67daf4987632b693c28c9f4e_Blog_Header_01-p-2600.png 2600w, /assets/5e1b128f-6864f039b26f4afedada6c93_67daf4987632b693c28c9f4e_Blog_Header_01.png 3200w"
                          }
                          className={"blog-visual__inner-img front"}
                        />
                      </div>
                      <div className={"flex-v gap-12"}>
                        <h6 data-blog-visual-anim={""} className={"h6-27px"}>
                          {
                            "Walrus Foundation Announces Rebecca Simmonds as Managing Executive"
                          }
                        </h6>
                        <div className={"flex-h gap--text"}>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"Blog document"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"-"}
                          </p>
                          <p
                            data-blog-visual-anim={""}
                            className={"p-medium color-gray-600"}
                          >
                            {"393 words"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"horizontal-line news-media_above-line"}></div>
            </div>
          </div>
        </div>
        <div className={"vertical-line bg-color-gray-300"}></div>
        <div className={"vertical-line right bg-color-gray-300"}></div>
        <div className={"horizontal-line news-latest_top-line"}></div>
      </section>
      <section className={"news-video"}>
        <div className={"padding-global"}>
          <div className={"w-layout-vflex news-video_layout"}>
            <div className={"news-video_block"}>
              <h2
                {...{ "reveal-animation": "" }}
                data-heading-reveal={""}
                className={"ts-display-200px mob-align-center"}
              >
                {"Trending video"}
              </h2>
              <div data-video-wrap={""} className={"news-video_janet-wrapper"}>
                <div data-video-clip={""} className={"news-video_inner"}>
                  <img
                    src={"/assets/428f6d07-6864f039b26f4afedada6ccc_image.png"}
                    loading={"lazy"}
                    sizes={"(max-width: 521px) 100vw, 521px"}
                    srcSet={
                      "/assets/1a08738d-6864f039b26f4afedada6ccc_image-p-500.png 500w, /assets/428f6d07-6864f039b26f4afedada6ccc_image.png 521w"
                    }
                    alt={""}
                    className={"object-cover"}
                  />
                </div>
                <a
                  data-video-cta={""}
                  href={"https://youtu.be/5wd4iSLIicM?feature=shared"}
                  target={"_blank"}
                  className={"news-video_button w-inline-block"}
                  rel={"noopener noreferrer"}
                >
                  <img
                    src={
                      "/assets/1b44bb98-6864f039b26f4afedada6c19_triangle-arrow-right.svg"
                    }
                    loading={"lazy"}
                    alt={""}
                    className={"object-contain"}
                  />
                  <div className={"news-video_button-text"}>{"Watch now"}</div>
                </a>
              </div>
            </div>
            <div className={"w-layout-grid news-video_grid"}>
              <div className={"relative mob-hide"}>
                <div
                  className={"horizontal-line news-video_left-block-line-2"}
                ></div>
                <div
                  className={"horizontal-line news-video_left-block-line"}
                ></div>
              </div>
              <div className={"w-layout-vflex news-video_content-wrapper"}>
                <div className={"mw-550"}>
                  <h3 className={"h3-36px"}>{"Introducing Walrus"}</h3>
                </div>
                <div className={"mw-550"}>
                  <p className={"p-medium fw-medium color-gray-600"}>
                    {
                      "Welcome to the next generation of data storage. Secure, efficient, and decentralized."
                    }
                  </p>
                </div>
                <a
                  data-button-hover={""}
                  href={"https://www.youtube.com/watch?v=5wd4iSLIicM"}
                  target={"_blank"}
                  className={"button-block w-inline-block"}
                  rel={"noopener noreferrer"}
                >
                  <div>{"Watch now"}</div>
                  <div data-icon-size={"medium"} className={"button-icon"}>
                    <div data-icon-bg={""} className={"button-icon__bg"}></div>
                    <div
                      data-icon-rotation={"normal"}
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
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={"vertical-line bg-color-gray-300"}></div>
        <div className={"vertical-line right bg-color-gray-300"}></div>
        <div
          className={
            "vertical-line middle bg-color-gray-300 news-video_line-middle"
          }
        ></div>
        <div className={"horizontal-line news-video_first-h-line"}></div>
        <div className={"horizontal-line news-video_second-h-line"}></div>
        <div className={"horizontal-line news-video_mob-bottom-line"}></div>
      </section>
      <section className={"news-promote dark-bg"}>
        <div className={"padding-global"}>
          <div className={"w-layout-grid news-promote_layout"}>
            <div className={"mob_mw-300"}>
              <h2
                {...{ "reveal-animation": "" }}
                data-heading-reveal={""}
                className={"h2-102px color-white"}
              >
                {"Walrus media kit"}
              </h2>
            </div>
            <div className={"w-layout-vflex gap-36 mt-16"}>
              <a
                data-button-hover={""}
                href={
                  "https://drive.google.com/file/d/1_kjQe5sz0Z9fmRr5jJ9AGmJPMFpESx8P/view?usp=drive_link"
                }
                target={"_blank"}
                className={"teal-button_block w-inline-block"}
                rel={"noopener noreferrer"}
              >
                <div>
                  {"DOWNLOAD MEDIA KIT"}
                  <br />
                </div>
                <div data-icon-size={"medium"} className={"button-icon"}>
                  <div data-icon-bg={""} className={"button-icon__bg"}></div>
                  <div
                    data-icon-rotation={"down"}
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
            <div className={"horizontal-line below-heading-dark"}></div>
          </div>
          <div className={"w-layout-grid news-promote_layout"}>
            <h2
              {...{ "reveal-animation": "" }}
              data-heading-reveal={""}
              className={"h2-102px color-white"}
            >
              {"Inquiries"}
            </h2>
            <div className={"w-layout-vflex gap-36 mt-16"}>
              <div className={"mw-280"}>
                <p className={"p-medium color-gray-600"}>
                  {"Please direct all media inquiries to "}
                  <a href={"mailto:press@walrus.xyz"}>{"press@walrus.xyz"}</a>
                </p>
              </div>
            </div>
            <div className={"horizontal-line below-heading-dark"}></div>
          </div>
        </div>
        <div className={"vertical-line"}></div>
        <div className={"vertical-line right"}></div>
        <div className={"horizontal-line news-promote_first-line"}></div>
      </section>
      <Footer />
    </main>
  );
}
