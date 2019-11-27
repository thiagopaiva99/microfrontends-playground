import { registerApplication, start } from 'single-spa'

function pathPrefix(prefix) {
  return function(location) {
      return location.pathname.startsWith(prefix);
  }
}

registerApplication(
  // Name of our single-spa application
  'home',
  // loadingFunction
  () => import('./src/home/home.app.js'),
  // activityFunction
  pathPrefix('/home')
);

start();