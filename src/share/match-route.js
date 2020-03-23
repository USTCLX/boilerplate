import { matchPath, Route } from 'react-router';

export default (path, routeList) => {
  let route = null;
  for (let item of routeList) {
    if (matchPath(path, item)) {
      route = item;
      break;
    }
  }
  return route;
};
