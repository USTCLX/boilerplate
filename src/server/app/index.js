//web 服务启动入口文件
const reactSsr = require('../middlewares/react-ssr').default;
const Koa = require('koa2');
const koaStatic = require('koa-static');
const path = require('path');

const app = new Koa();

app.use(koaStatic(path.join('./dist/static')));

//react ssr 中间件
app.use(reactSsr);

//启动服务
app.listen(9001);

console.log('server is start .9001');
