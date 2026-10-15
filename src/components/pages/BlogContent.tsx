import Footer from "@/components/Footer";
export default function BlogContent() {
  return (
    <main className={"main-wrapper"} id={"main-content"}>
      <section className={"blog-featured"}>
        <div className={"padding-global hdn"}>
          <div className={"blog-featured_cms w-dyn-list"}>
            <div role={"list"} className={"blog-featured_cms-list w-dyn-items"}>
              <div
                role={"listitem"}
                className={"blog-featured_cms-item w-dyn-item"}
              >
                <div className={"blog-featured_img-block"}>
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
                  id={"w-node-_4270a8d6-8d8c-abfa-91c0-074ac79b67af-dada6bc0"}
                  href={
                    "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/pudgy-penguins-leverage-decentralized-storage"
                  }
                  className={"blog-featured_content-block w-inline-block"}
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
      <section id={"latest"} className={"blog-latest"}>
        <div className={"padding-global"}>
          <div className={"w-layout-vflex blog-latest_layout"}>
            <div className={"w-layout-grid blog-latest_grid"}>
              <div className={"w-layout-vflex blog-latest_heading-wrapper"}>
                <h1
                  {...{ "reveal-animation": "" }}
                  data-heading-reveal={""}
                  className={"h2-160px"}
                >
                  {"Blog Posts"}
                </h1>
                <div className={"blog-latest_form-block w-form"}>
                  <form
                    id={"email-form"}
                    name={"email-form"}
                    data-name={"Email Form"}
                    method={"get"}
                    {...{ "fs-cmsfilter-element": "filters" }}
                  >
                    <div className={"w-layout-hflex blog-latest_filters"}>
                      <button
                        id={"all-button"}
                        className={
                          "blog-latest_button fs-cmsfilter_active w-radio"
                        }
                        type={"button"}
                        data-filter={"all"}
                        aria-pressed={"true"}
                      >
                        <span
                          {...{ "fs-cmsfilter-element": "clear" }}
                          {...{ "fs-cmsfilter-clear": "categories" }}
                          className={"blog-latest_button-text w-form-label"}
                        >
                          {"All"}
                        </span>
                      </button>
                      <div className={"w-dyn-list"}>
                        <div
                          id={"category-list"}
                          role={"list"}
                          className={"blog-latest_cms-category w-dyn-items"}
                        >
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <button
                              className={"blog-latest_button w-radio"}
                              type={"button"}
                              data-filter={"gaming"}
                              aria-pressed={"false"}
                            >
                              <span
                                {...{ "fs-cmsfilter-field": "categories" }}
                                className={
                                  "blog-latest_button-text w-form-label"
                                }
                              >
                                {"Gaming"}
                              </span>
                            </button>
                          </div>
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <button
                              className={"blog-latest_button w-radio"}
                              type={"button"}
                              data-filter={"depin"}
                              aria-pressed={"false"}
                            >
                              <span
                                {...{ "fs-cmsfilter-field": "categories" }}
                                className={
                                  "blog-latest_button-text w-form-label"
                                }
                              >
                                {"Depin"}
                              </span>
                            </button>
                          </div>
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <button
                              className={"blog-latest_button w-radio"}
                              type={"button"}
                              data-filter={"entertainment"}
                              aria-pressed={"false"}
                            >
                              <span
                                {...{ "fs-cmsfilter-field": "categories" }}
                                className={
                                  "blog-latest_button-text w-form-label"
                                }
                              >
                                {"Entertainment"}
                              </span>
                            </button>
                          </div>
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <button
                              className={"blog-latest_button w-radio"}
                              type={"button"}
                              data-filter={"trust-and-safety"}
                              aria-pressed={"false"}
                            >
                              <span
                                {...{ "fs-cmsfilter-field": "categories" }}
                                className={
                                  "blog-latest_button-text w-form-label"
                                }
                              >
                                {"Trust-and-safety"}
                              </span>
                            </button>
                          </div>
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <button
                              className={"blog-latest_button w-radio"}
                              type={"button"}
                              data-filter={"media"}
                              aria-pressed={"false"}
                            >
                              <span
                                {...{ "fs-cmsfilter-field": "categories" }}
                                className={
                                  "blog-latest_button-text w-form-label"
                                }
                              >
                                {"Media"}
                              </span>
                            </button>
                          </div>
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <button
                              className={"blog-latest_button w-radio"}
                              type={"button"}
                              data-filter={"infrastructure"}
                              aria-pressed={"false"}
                            >
                              <span
                                {...{ "fs-cmsfilter-field": "categories" }}
                                className={
                                  "blog-latest_button-text w-form-label"
                                }
                              >
                                {"Infrastructure"}
                              </span>
                            </button>
                          </div>
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <button
                              className={"blog-latest_button w-radio"}
                              type={"button"}
                              data-filter={"get started"}
                              aria-pressed={"false"}
                            >
                              <span
                                {...{ "fs-cmsfilter-field": "categories" }}
                                className={
                                  "blog-latest_button-text w-form-label"
                                }
                              >
                                {"Get Started"}
                              </span>
                            </button>
                          </div>
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <button
                              className={"blog-latest_button w-radio"}
                              type={"button"}
                              data-filter={"how to"}
                              aria-pressed={"false"}
                            >
                              <span
                                {...{ "fs-cmsfilter-field": "categories" }}
                                className={
                                  "blog-latest_button-text w-form-label"
                                }
                              >
                                {"How to"}
                              </span>
                            </button>
                          </div>
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <button
                              className={"blog-latest_button w-radio"}
                              type={"button"}
                              data-filter={"developer"}
                              aria-pressed={"false"}
                            >
                              <span
                                {...{ "fs-cmsfilter-field": "categories" }}
                                className={
                                  "blog-latest_button-text w-form-label"
                                }
                              >
                                {"Developer"}
                              </span>
                            </button>
                          </div>
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <button
                              className={"blog-latest_button w-radio"}
                              type={"button"}
                              data-filter={"ecosystem"}
                              aria-pressed={"false"}
                            >
                              <span
                                {...{ "fs-cmsfilter-field": "categories" }}
                                className={
                                  "blog-latest_button-text w-form-label"
                                }
                              >
                                {"Ecosystem"}
                              </span>
                            </button>
                          </div>
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <button
                              className={"blog-latest_button w-radio"}
                              type={"button"}
                              data-filter={"product"}
                              aria-pressed={"false"}
                            >
                              <span
                                {...{ "fs-cmsfilter-field": "categories" }}
                                className={
                                  "blog-latest_button-text w-form-label"
                                }
                              >
                                {"Product"}
                              </span>
                            </button>
                          </div>
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <button
                              className={"blog-latest_button w-radio"}
                              type={"button"}
                              data-filter={"announcement"}
                              aria-pressed={"false"}
                            >
                              <span
                                {...{ "fs-cmsfilter-field": "categories" }}
                                className={
                                  "blog-latest_button-text w-form-label"
                                }
                              >
                                {"Announcement"}
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
              <div className={"horizontal-line news-media_below-line"}></div>
            </div>
            <div className={"w-layout-vflex gap-40 vx-center"}>
              <div className={"relative"}>
                <div className={"blog-posts_cms w-dyn-list"}>
                  <div
                    {...{ "fs-cmsload-resetix": "true" }}
                    {...{ "fs-cmsfilter-element": "list" }}
                    {...{ "fs-cmsload-element": "list" }}
                    {...{ "fs-cmsload-mode": "pagination" }}
                    role={"list"}
                    className={"blog-posts_cms-list w-dyn-items"}
                  >
                    <div
                      role={"listitem"}
                      className={"blog-posts_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/tradeport-builds-nft-marketplace-walrus"
                        }
                        className={"blog-posts_cms-block w-inline-block"}
                      >
                        <div className={"w-layout-vflex gap-24"}>
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
                            className={"object-contain"}
                          />
                          <div className={"w-layout-vflex gap-8"}>
                            <span className={"tag-14px text-color-gray-600"}>
                              {"July 9, 2025"}
                            </span>
                            <h4
                              data-hover-underline={""}
                              className={"blog-posts_cms-heading"}
                            >
                              {
                                "TradePort Leverages Walrus to Create an Advanced NFT Marketplace"
                              }
                            </h4>
                          </div>
                        </div>
                      </a>
                      <div
                        {...{ "categories-list": "" }}
                        className={"blog-categories_cms w-dyn-list"}
                      >
                        <div
                          role={"list"}
                          className={"blog-categories_cms-list w-dyn-items"}
                        >
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <a
                              {...{ "categories-item": "" }}
                              {...{ "fs-cmsfilter-field": "categories" }}
                              href={
                                "https://web.archive.org/web/202507/https://www.walrus.xyz/blog-categories/ecosystem"
                              }
                              className={"blog-categories_item w-inline-block"}
                            >
                              {"Ecosystem"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role={"listitem"}
                      className={"blog-posts_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/how-walrus-red-stuff-encoding-works"
                        }
                        className={"blog-posts_cms-block w-inline-block"}
                      >
                        <div className={"w-layout-vflex gap-24"}>
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
                            className={"object-contain"}
                          />
                          <div className={"w-layout-vflex gap-8"}>
                            <span className={"tag-14px text-color-gray-600"}>
                              {"July 3, 2025"}
                            </span>
                            <h4
                              data-hover-underline={""}
                              className={"blog-posts_cms-heading"}
                            >
                              {
                                "Decoding Red Stuff: Walrus's Engine for Resilient and Efficient Storage"
                              }
                            </h4>
                          </div>
                        </div>
                      </a>
                      <div
                        {...{ "categories-list": "" }}
                        className={"blog-categories_cms w-dyn-list"}
                      >
                        <div
                          role={"list"}
                          className={"blog-categories_cms-list w-dyn-items"}
                        >
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <a
                              {...{ "categories-item": "" }}
                              {...{ "fs-cmsfilter-field": "categories" }}
                              href={
                                "https://web.archive.org/web/202507/https://www.walrus.xyz/blog-categories/product"
                              }
                              className={"blog-categories_item w-inline-block"}
                            >
                              {"Product"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role={"listitem"}
                      className={"blog-posts_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/itheum-builds-data-for-ai-walrus"
                        }
                        className={"blog-posts_cms-block w-inline-block"}
                      >
                        <div className={"w-layout-vflex gap-24"}>
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
                            className={"object-contain"}
                          />
                          <div className={"w-layout-vflex gap-8"}>
                            <span className={"tag-14px text-color-gray-600"}>
                              {"July 1, 2025"}
                            </span>
                            <h4
                              data-hover-underline={""}
                              className={"blog-posts_cms-heading"}
                            >
                              {
                                "Itheum Enables Large-Scale Data Tokenization for Musicians and AI on Walrus"
                              }
                            </h4>
                          </div>
                        </div>
                      </a>
                      <div
                        {...{ "categories-list": "" }}
                        className={"blog-categories_cms w-dyn-list"}
                      >
                        <div
                          role={"list"}
                          className={"blog-categories_cms-list w-dyn-items"}
                        >
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <a
                              {...{ "categories-item": "" }}
                              {...{ "fs-cmsfilter-field": "categories" }}
                              href={
                                "https://web.archive.org/web/202507/https://www.walrus.xyz/blog-categories/ecosystem"
                              }
                              className={"blog-categories_item w-inline-block"}
                            >
                              {"Ecosystem"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role={"listitem"}
                      className={"blog-posts_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/opengradient-builds-l1-storage-on-walrus"
                        }
                        className={"blog-posts_cms-block w-inline-block"}
                      >
                        <div className={"w-layout-vflex gap-24"}>
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
                            className={"object-contain"}
                          />
                          <div className={"w-layout-vflex gap-8"}>
                            <span className={"tag-14px text-color-gray-600"}>
                              {"June 25, 2025"}
                            </span>
                            <h4
                              data-hover-underline={""}
                              className={"blog-posts_cms-heading"}
                            >
                              {
                                "AI Development Platform OpenGradient Integrates Walrus as Dedicated Decentralized Storage Hub"
                              }
                            </h4>
                          </div>
                        </div>
                      </a>
                      <div
                        {...{ "categories-list": "" }}
                        className={"blog-categories_cms w-dyn-list"}
                      >
                        <div
                          role={"list"}
                          className={"blog-categories_cms-list w-dyn-items"}
                        >
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <a
                              {...{ "categories-item": "" }}
                              {...{ "fs-cmsfilter-field": "categories" }}
                              href={
                                "https://web.archive.org/web/202507/https://www.walrus.xyz/blog-categories/ecosystem"
                              }
                              className={"blog-categories_item w-inline-block"}
                            >
                              {"Ecosystem"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role={"listitem"}
                      className={"blog-posts_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/how-walrus-blob-storage-works"
                        }
                        className={"blog-posts_cms-block w-inline-block"}
                      >
                        <div className={"w-layout-vflex gap-24"}>
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
                            className={"object-contain"}
                          />
                          <div className={"w-layout-vflex gap-8"}>
                            <span className={"tag-14px text-color-gray-600"}>
                              {"June 24, 2025"}
                            </span>
                            <h4
                              data-hover-underline={""}
                              className={"blog-posts_cms-heading"}
                            >
                              {"Bringing Programmability to Data Storage"}
                            </h4>
                          </div>
                        </div>
                      </a>
                      <div
                        {...{ "categories-list": "" }}
                        className={"blog-categories_cms w-dyn-list"}
                      >
                        <div
                          role={"list"}
                          className={"blog-categories_cms-list w-dyn-items"}
                        >
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <a
                              {...{ "categories-item": "" }}
                              {...{ "fs-cmsfilter-field": "categories" }}
                              href={
                                "https://web.archive.org/web/202507/https://www.walrus.xyz/blog-categories/product"
                              }
                              className={"blog-categories_item w-inline-block"}
                            >
                              {"Product"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role={"listitem"}
                      className={"blog-posts_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/io-net-builds-ai-ml-compute-on-walrus"
                        }
                        className={"blog-posts_cms-block w-inline-block"}
                      >
                        <div className={"w-layout-vflex gap-24"}>
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
                            className={"object-contain"}
                          />
                          <div className={"w-layout-vflex gap-8"}>
                            <span className={"tag-14px text-color-gray-600"}>
                              {"June 17, 2025"}
                            </span>
                            <h4
                              data-hover-underline={""}
                              className={"blog-posts_cms-heading"}
                            >
                              {
                                "io.net Partners with Walrus to Enable Decentralized Storage and Compute Capability for AI and ML Applications"
                              }
                            </h4>
                          </div>
                        </div>
                      </a>
                      <div
                        {...{ "categories-list": "" }}
                        className={"blog-categories_cms w-dyn-list"}
                      >
                        <div
                          role={"list"}
                          className={"blog-categories_cms-list w-dyn-items"}
                        >
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <a
                              {...{ "categories-item": "" }}
                              {...{ "fs-cmsfilter-field": "categories" }}
                              href={
                                "https://web.archive.org/web/202507/https://www.walrus.xyz/blog-categories/ecosystem"
                              }
                              className={"blog-categories_item w-inline-block"}
                            >
                              {"Ecosystem"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role={"listitem"}
                      className={"blog-posts_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/tusky-storage-solution-walrus"
                        }
                        className={"blog-posts_cms-block w-inline-block"}
                      >
                        <div className={"w-layout-vflex gap-24"}>
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
                            className={"object-contain"}
                          />
                          <div className={"w-layout-vflex gap-8"}>
                            <span className={"tag-14px text-color-gray-600"}>
                              {"June 10, 2025"}
                            </span>
                            <h4
                              data-hover-underline={""}
                              className={"blog-posts_cms-heading"}
                            >
                              {
                                "Tusky Builds Privacy-First Web3 File Storage on Walrus"
                              }
                            </h4>
                          </div>
                        </div>
                      </a>
                      <div
                        {...{ "categories-list": "" }}
                        className={"blog-categories_cms w-dyn-list"}
                      >
                        <div
                          role={"list"}
                          className={"blog-categories_cms-list w-dyn-items"}
                        >
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <a
                              {...{ "categories-item": "" }}
                              {...{ "fs-cmsfilter-field": "categories" }}
                              href={
                                "https://web.archive.org/web/202507/https://www.walrus.xyz/blog-categories/ecosystem"
                              }
                              className={"blog-categories_item w-inline-block"}
                            >
                              {"Ecosystem"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role={"listitem"}
                      className={"blog-posts_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/seal-decentralized-storage-encryption"
                        }
                        className={"blog-posts_cms-block w-inline-block"}
                      >
                        <div className={"w-layout-vflex gap-24"}>
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
                            className={"object-contain"}
                          />
                          <div className={"w-layout-vflex gap-8"}>
                            <span className={"tag-14px text-color-gray-600"}>
                              {"May 29, 2025"}
                            </span>
                            <h4
                              data-hover-underline={""}
                              className={"blog-posts_cms-heading"}
                            >
                              {
                                "From Public to Private: Rethinking Web3 Data Security"
                              }
                            </h4>
                          </div>
                        </div>
                      </a>
                      <div
                        {...{ "categories-list": "" }}
                        className={"blog-categories_cms w-dyn-list"}
                      >
                        <div
                          role={"list"}
                          className={"blog-categories_cms-list w-dyn-items"}
                        >
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <a
                              {...{ "categories-item": "" }}
                              {...{ "fs-cmsfilter-field": "categories" }}
                              href={
                                "https://web.archive.org/web/202507/https://www.walrus.xyz/blog-categories/product"
                              }
                              className={"blog-categories_item w-inline-block"}
                            >
                              {"Product"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role={"listitem"}
                      className={"blog-posts_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/pudgy-penguins-leverage-decentralized-storage"
                        }
                        className={"blog-posts_cms-block w-inline-block"}
                      >
                        <div className={"w-layout-vflex gap-24"}>
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
                            className={"object-contain"}
                          />
                          <div className={"w-layout-vflex gap-8"}>
                            <span className={"tag-14px text-color-gray-600"}>
                              {"April 29, 2025"}
                            </span>
                            <h4
                              data-hover-underline={""}
                              className={"blog-posts_cms-heading"}
                            >
                              {
                                "Pudgy Penguins Partners with Walrus to Bring Decentralized Storage to Web3’s Leading IP"
                              }
                            </h4>
                          </div>
                        </div>
                      </a>
                      <div
                        {...{ "categories-list": "" }}
                        className={"blog-categories_cms w-dyn-list"}
                      >
                        <div
                          role={"list"}
                          className={"blog-categories_cms-list w-dyn-items"}
                        >
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <a
                              {...{ "categories-item": "" }}
                              {...{ "fs-cmsfilter-field": "categories" }}
                              href={
                                "https://web.archive.org/web/202507/https://www.walrus.xyz/blog-categories/media"
                              }
                              className={"blog-categories_item w-inline-block"}
                            >
                              {"Media"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role={"listitem"}
                      className={"blog-posts_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/unchained-stores-media-on-walrus"
                        }
                        className={"blog-posts_cms-block w-inline-block"}
                      >
                        <div className={"w-layout-vflex gap-24"}>
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
                            className={"object-contain"}
                          />
                          <div className={"w-layout-vflex gap-8"}>
                            <span className={"tag-14px text-color-gray-600"}>
                              {"April 29, 2025"}
                            </span>
                            <h4
                              data-hover-underline={""}
                              className={"blog-posts_cms-heading"}
                            >
                              {
                                "Unchained Selects Walrus to Future-Proof Its Media Library"
                              }
                            </h4>
                          </div>
                        </div>
                      </a>
                      <div
                        {...{ "categories-list": "" }}
                        className={"blog-categories_cms w-dyn-list"}
                      >
                        <div
                          role={"list"}
                          className={"blog-categories_cms-list w-dyn-items"}
                        >
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <a
                              {...{ "categories-item": "" }}
                              {...{ "fs-cmsfilter-field": "categories" }}
                              href={
                                "https://web.archive.org/web/202507/https://www.walrus.xyz/blog-categories/gaming"
                              }
                              className={"blog-categories_item w-inline-block"}
                            >
                              {"Gaming"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role={"listitem"}
                      className={"blog-posts_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/line-friends-ai-minini-game"
                        }
                        className={"blog-posts_cms-block w-inline-block"}
                      >
                        <div className={"w-layout-vflex gap-24"}>
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
                            className={"object-contain"}
                          />
                          <div className={"w-layout-vflex gap-8"}>
                            <span className={"tag-14px text-color-gray-600"}>
                              {"April 24, 2025"}
                            </span>
                            <h4
                              data-hover-underline={""}
                              className={"blog-posts_cms-heading"}
                            >
                              {
                                "LINE FRIENDS Coming to Walrus in New, AI-Driven Game"
                              }
                            </h4>
                          </div>
                        </div>
                      </a>
                      <div
                        {...{ "categories-list": "" }}
                        className={"blog-categories_cms w-dyn-list"}
                      >
                        <div
                          role={"list"}
                          className={"blog-categories_cms-list w-dyn-items"}
                        >
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <a
                              {...{ "categories-item": "" }}
                              {...{ "fs-cmsfilter-field": "categories" }}
                              href={
                                "https://web.archive.org/web/202507/https://www.walrus.xyz/blog-categories/ecosystem"
                              }
                              className={"blog-categories_item w-inline-block"}
                            >
                              {"Ecosystem"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role={"listitem"}
                      className={"blog-posts_cms-item w-dyn-item"}
                    >
                      <a
                        data-folder-hover={""}
                        href={
                          "https://web.archive.org/web/202507/https://www.walrus.xyz/blog/crossmint-token-metadata"
                        }
                        className={"blog-posts_cms-block w-inline-block"}
                      >
                        <div className={"w-layout-vflex gap-24"}>
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
                            className={"object-contain"}
                          />
                          <div className={"w-layout-vflex gap-8"}>
                            <span className={"tag-14px text-color-gray-600"}>
                              {"April 10, 2025"}
                            </span>
                            <h4
                              data-hover-underline={""}
                              className={"blog-posts_cms-heading"}
                            >
                              {
                                "Crossmint Integrates Walrus Protocol into its Minting APIs Across Chains"
                              }
                            </h4>
                          </div>
                        </div>
                      </a>
                      <div
                        {...{ "categories-list": "" }}
                        className={"blog-categories_cms w-dyn-list"}
                      >
                        <div
                          role={"list"}
                          className={"blog-categories_cms-list w-dyn-items"}
                        >
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <a
                              {...{ "categories-item": "" }}
                              {...{ "fs-cmsfilter-field": "categories" }}
                              href={
                                "https://web.archive.org/web/202507/https://www.walrus.xyz/blog-categories/ecosystem"
                              }
                              className={"blog-categories_item w-inline-block"}
                            >
                              {"Ecosystem"}
                            </a>
                          </div>
                          <div role={"listitem"} className={"w-dyn-item"}>
                            <a
                              {...{ "categories-item": "" }}
                              {...{ "fs-cmsfilter-field": "categories" }}
                              href={
                                "https://web.archive.org/web/202507/https://www.walrus.xyz/blog-categories/infrastructure"
                              }
                              className={"blog-categories_item w-inline-block"}
                            >
                              {"Infrastructure"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className={"archive-empty"} role={"status"} hidden={true}>
                    {"No matching entries in this July 2025 snapshot."}
                  </p>
                  <div
                    role={"navigation"}
                    aria-label={"List"}
                    className={"w-pagination-wrapper blog-pagination"}
                  >
                    <div
                      className={"horizontal-line blog_pagination-top-line"}
                    ></div>
                    <div
                      id={"pagination"}
                      className={"blog-pagination_numbers-wrapper"}
                    >
                      <a
                        {...{ "fs-cmsload-element": "page-button" }}
                        href={"/blog"} aria-current="page"
                        className={"blog-pagination_numbers"}
                      >
                        {"1"}
                      </a>
                      <div
                        {...{ "fs-cmsload-element": "page-dots" }}
                        className={"blog-pagination_numbers"}
                      >
                        {"..."}
                      </div>
                    </div>
                    <a
                      href={
                        "https://web.archive.org/web/202507/https://www.walrus.xyz/blog?b56ee782_page=2"
                      }
                      aria-label={"Next Page"}
                      className={"w-pagination-next blog-pagination_next"}
                    >
                      <div className={"w-inline-block"}>{"Next"}</div>
                      <svg
                        className={"w-pagination-next-icon"}
                        height={"12px"}
                        width={"12px"}
                        xmlns={"http://www.w3.org/2000/svg"}
                        viewBox={"0 0 12 12"}
                        transform={"translate(0, 1)"}
                      >
                        <path
                          fill={"none"}
                          stroke={"currentColor"}
                          fillRule={"evenodd"}
                          d={"M4 2l4 4-4 4"}
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"vertical-line bg-color-gray-300"}></div>
        <div className={"vertical-line right bg-color-gray-300"}></div>
      </section>
      <Footer />
    </main>
  );
}
