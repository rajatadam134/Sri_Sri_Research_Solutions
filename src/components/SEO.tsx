import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '/',
  ogImage = '/vishal-iraganti.png',
}) => {
  useEffect(() => {
    document.title = title;

    // Update or set meta tags
    const setMeta = (nameOrProperty: 'name' | 'property', attrValue: string, content: string) => {
      let meta = document.querySelector(`meta[${nameOrProperty}="${attrValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(nameOrProperty, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', window.location.origin + ogImage);
    setMeta('property', 'og:url', window.location.origin + canonicalPath);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', window.location.origin + ogImage);
  }, [title, description, canonicalPath, ogImage]);

  return null;
};
