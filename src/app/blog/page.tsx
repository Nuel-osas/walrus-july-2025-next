import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import SiteRuntime from "@/components/SiteRuntime";
import Content from "@/components/pages/BlogContent";
export const metadata: Metadata = {
  title: "Walrus | Blog Home",
  description:
    "Check out the Walrus blog for the latest product updates, ecosystem stories, and insights for builders, partners, and curious readers.",
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
      <SiteRuntime namespace="blog" />
    </>
  );
}
