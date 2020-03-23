import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../router/index';
import routeList from '../router/route.config'; //路由配置
import matchRoute from '../../share/match-route';

let initialData = JSON.parse(document.getElementById('ssrTextInitData').value);

//查找路由
let route = matchRoute(document.location.pathname, routeList);

//设置组件初始化数据 [关键点]
route.initialData = initialData;

ReactDom.hydrate(
  <BrowserRouter>
    <App routeList={routeList} />
  </BrowserRouter>,
  document.getElementById('root')
);
