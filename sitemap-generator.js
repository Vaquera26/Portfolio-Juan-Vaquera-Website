const Sitemap = require('react-router-sitemap').default;
const path = require('path');

// Define las rutas de tu aplicación aquí
const routes = [
  '/',
  '/portfolio',
  // Agrega más rutas si tu aplicación tiene otras páginas
];

// Genera el sitemap
function generateSitemap() {
  return new Sitemap(routes)
    .build('https://codexvaquera.studio') // Cambia esta URL por la de tu dominio
    .save(path.resolve(__dirname, './public/sitemap.xml'));
}

generateSitemap();