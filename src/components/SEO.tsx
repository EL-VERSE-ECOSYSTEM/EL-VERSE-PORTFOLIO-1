import React, { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  jsonLd?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = "https://el-verse-connect.vercel.app/og-image.png",
  jsonLd
}) => {
  useEffect(() => {
    // Document Title
    document.title = title;

    // Helper function to set or update meta tags
    const updateMeta = (nameAttr: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrVal}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(nameAttr, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper function to update link rel canonical
    const updateLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // Standard SEO Tags
    updateMeta("name", "description", description);
    updateLink("canonical", canonicalUrl);

    // OpenGraph Tags
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:url", canonicalUrl);
    updateMeta("property", "og:image", ogImage);

    // Twitter Tags
    updateMeta("name", "twitter:title", title);
    updateMeta("name", "twitter:description", description);
    updateMeta("name", "twitter:image", ogImage);

    // JSON-LD Structured Data
    let scriptElement = document.querySelector('script[type="application/ld+json"]#dynamic-seo-schema');
    if (jsonLd) {
      if (!scriptElement) {
        scriptElement = document.createElement("script");
        scriptElement.setAttribute("type", "application/ld+json");
        scriptElement.setAttribute("id", "dynamic-seo-schema");
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(jsonLd);
    } else if (scriptElement) {
      scriptElement.remove();
    }
  }, [title, description, canonicalUrl, ogImage, jsonLd]);

  return null;
};

export default SEO;
