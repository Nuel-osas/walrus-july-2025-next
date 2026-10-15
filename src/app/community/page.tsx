import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import SiteRuntime from "@/components/SiteRuntime";
import Content from "@/components/pages/CommunityContent";
export const metadata: Metadata = {
  title: "Walrus | How to get involved",
  description:
    "Join the Walrus community! Become an ambassador, engage in Discord discussions, and discover ways to get involved.",
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
      <SiteRuntime namespace="community" />
    </>
  );
}
