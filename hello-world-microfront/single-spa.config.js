import { registerApplication, start } from 'single-spa'

function pathPrefix(prefix) {
  return function(location) {
      return location.pathname.startsWith(prefix);
  }
}

registerApplication(
  'home',
  () => import('./src/home/home.app.js'),
  pathPrefix('/')
);

registerApplication(
  'navBar', 
  () => import('./src/navBar/navBar.app.js').then(module => module.navBar),
  () => true
);

start();