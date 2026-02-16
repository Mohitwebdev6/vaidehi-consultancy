import { useEffect } from "react";

const upsertMetaTag = (attribute, name, content) => {
  if (!content) {
    return;
  }

  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertCanonical = (href) => {
  if (!href) {
    return;
  }

  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const normalizeRobots = (noIndex) =>
  noIndex ? "noindex, nofollow" : "index, follow";

const useSeo = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  noIndex,
} = {}) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    upsertMetaTag("name", "description", description);
    upsertCanonical(canonical);
    upsertMetaTag("property", "og:title", ogTitle || title);
    upsertMetaTag("property", "og:description", ogDescription || description);
    upsertMetaTag("property", "og:image", ogImage);

    if (typeof noIndex === "boolean") {
      upsertMetaTag("name", "robots", normalizeRobots(noIndex));
    }
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, noIndex]);
};

export default useSeo;
