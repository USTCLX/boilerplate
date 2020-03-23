import React from 'react';
import tempData from './data';
import PropTypes from 'prop-types';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    let initialData = null; //初始化数据
    if (__SERVER__) {
      //如果是当然是服务端执行
      initialData = props.staticContext.initialData || {};
    } else {
      //客户端渲染
      initialData = props.initialData || {};
    }
    this.state = initialData;
  }

  static propTypes = {
    staticContext: PropTypes.any,
    initialData: PropTypes.any,
  };

  //静态方法  数据预取方法
  static async getInitialProps() {
    //模拟数据请求方法
    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            code: 0,
            data: tempData,
          });
        }, 100);
      });
    };

    let res = await fetchData();

    return res;
  }

  render() {
    const { data } = this.state;
    return (
      <h1>
        <span>ListPage</span>
        {data?.map((item, index) => {
          return (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          );
        })}
        {!data && <span>暂无数据</span>}
      </h1>
    );
  }
}
