// /src/server/middlewares/react-ssr.js

//完成 react ssr 工作的中间件
//引入Index 组件
import React from 'react';
import App from '../../client/router';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import routeList from '../../client/router/route.config';

import matchRoute from '../../share/match-route';
import Provider from '../../client/app/provider';

export default async (ctx, next) => {
  console.log('ctx.request.path', ctx.request.path);
  console.log('ctx.request.url', ctx.request.url);

  const matchResult = matchRoute(ctx.path, routeList);
  let fetchDataFn = matchResult.component.getInitialProps;
  let fetchResult = {};
  if (fetchDataFn) {
    fetchResult = await fetchDataFn();
  }
  const context = {
    initialData: fetchResult,
  };

  const html = renderToString(
    <StaticRouter location={ctx.path} context={context}>
      <App routeList={routeList}></App>
    </StaticRouter>
  );
  ctx.body = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>my react ssr</title>
</head>
<body>
    <div id="root">${html}</div>
    <textarea id="ssrTextInitData" style="display:none;">
    ${JSON.stringify(fetchResult)}
    </textarea>
</body>
</html>
<script type="text/javascript"  src="index.js"></script>
`;

  return next();
};
