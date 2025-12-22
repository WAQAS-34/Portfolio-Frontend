// SEO utility functions for dynamic meta tag generation

/**
 * Generate page title with brand name
 * @param {string} pageTitle - The specific page title
 * @param {boolean} includeBrand - Whether to include brand name
 * @returns {string} - Formatted title
 */
export const generateTitle = (pageTitle, includeBrand = true) => {
  const brandName = "Dev Pixel Solutions";
  if (!pageTitle) return brandName;
  return includeBrand ? `${pageTitle} | ${brandName}` : pageTitle;
};

/**
 * Truncate description to optimal length for SEO
 * @param {string} description - The description text
 * @param {number} maxLength - Maximum character length (default: 160)
 * @returns {string} - Truncated description
 */
export const truncateDescription = (description, maxLength = 160) => {
  if (!description || description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3).trim() + '...';
};

/**
 * Generate keywords string from array
 * @param {string[]} keywords - Array of keywords
 * @param {string[]} commonKeywords - Common keywords to append
 * @returns {string} - Comma-separated keywords string
 */
export const generateKeywords = (keywords = [], commonKeywords = []) => {
  const defaultCommon = [
    "Dev Pixel Solutions",
    "React Native developer", 
    "presentation design",
    "mobile app development"
  ];
  
  const allKeywords = [...keywords, ...(commonKeywords.length ? commonKeywords : defaultCommon)];
  return [...new Set(allKeywords)].join(', ');
};

/**
 * Generate canonical URL
 * @param {string} path - The page path
 * @param {string} baseUrl - Base URL (default: production URL)
 * @returns {string} - Full canonical URL
 */
export const generateCanonicalUrl = (path, baseUrl = "https://devpixelsolutions.com") => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

/**
 * Generate Open Graph image URL
 * @param {string} imageName - Image filename
 * @param {string} baseUrl - Base URL
 * @returns {string} - Full image URL
 */
export const generateOgImage = (imageName, baseUrl = "https://devpixelsolutions.com") => {
  if (!imageName) return `${baseUrl}/images/og-default.jpg`;
  return `${baseUrl}/images/${imageName}`;
};

/**
 * Create basic organization structured data
 * @param {Object} customData - Custom data to merge
 * @returns {Object} - Organization structured data
 */
export const createOrganizationSchema = (customData = {}) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dev Pixel Solutions",
    "url": "https://devpixelsolutions.com",
    "logo": "https://devpixelsolutions.com/images/logo.png",
    "description": "Professional React Native mobile app development and presentation design services",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  return { ...baseSchema, ...customData };
};

/**
 * Create service structured data
 * @param {string} serviceName - Name of the service
 * @param {string} description - Service description
 * @param {string} serviceType - Type of service
 * @returns {Object} - Service structured data
 */
export const createServiceSchema = (serviceName, description, serviceType) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Dev Pixel Solutions"
    },
    "serviceType": serviceType,
    "areaServed": "Worldwide"
  };
};

/**
 * Validate SEO data completeness
 * @param {Object} seoData - SEO data object
 * @returns {Object} - Validation result with missing fields
 */
export const validateSeoData = (seoData) => {
  const required = ['title', 'description', 'keywords', 'canonicalUrl'];
  const missing = required.filter(field => !seoData[field]);
  
  return {
    isValid: missing.length === 0,
    missing: missing,
    warnings: [
      ...(seoData.title && seoData.title.length > 60 ? ['Title too long (>60 chars)'] : []),
      ...(seoData.description && seoData.description.length > 160 ? ['Description too long (>160 chars)'] : []),
      ...(seoData.keywords && seoData.keywords.split(',').length < 3 ? ['Too few keywords (<3)'] : [])
    ]
  };
};