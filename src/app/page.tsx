import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import SiteRuntime from "@/components/SiteRuntime";
import Content from "@/components/pages/HomeContent";
export const metadata: Metadata = {
  title: "Walrus | Do more with your data",
  description:
    "Walrus is a decentralized storage platform that enables you to publish, deliver, and program any data, onchain.",
};
export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/styles/july-14.css" precedence="site" />
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
      <SiteRuntime namespace="home" />
    </>
  );
}
