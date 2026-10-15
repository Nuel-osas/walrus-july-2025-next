import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import SiteRuntime from "@/components/SiteRuntime";
import Content from "@/components/pages/GetStartedContent";
export const metadata: Metadata = {
  title: "Walrus | Start building",
  description:
    "Get started with the right tools and resources to develop and integrate programmable data and storage into your app.",
};
export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/styles/july-26.css" precedence="site" />
      <link
        rel="stylesheet"
        href="/styles/enhancements.css"
        precedence="enhancements"
      />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="page-wrapper">
        <Navigation />
        <Content />
      </div>
      <SiteRuntime namespace="get-started" />
    </>
  );
}
