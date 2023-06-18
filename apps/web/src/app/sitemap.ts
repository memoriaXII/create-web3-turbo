import { URL, navItems, footerItems } from 'constants/navigations';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // menu routes
  const routes = navItems.map((route) => ({
    url: `${URL}${route.path}`,
    lastModified: new Date(),
  }));

  // routes in footer
  const footerRoutes = footerItems.legal.map((route) => ({
    url: `${URL}${route.path}`,
    lastModified: new Date(),
  }));

  return [...routes, ...footerRoutes];
}
