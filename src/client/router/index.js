import Layout from '../app/layout';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteApp = ({ routeList }) => {
  return (
    <Layout>
      <Switch>
        {routeList.map((item) => {
          return item.initialData ? (
            <Route
              key={item.path}
              exact={item.exact}
              path={item.path}
              render={(props) => {
                return (
                  <item.component
                    {...props}
                    initialData={item.initialData}
                  ></item.component>
                );
              }}
            ></Route>
          ) : (
            <Route key={item.path} {...item}></Route>
          );
        })}
      </Switch>
    </Layout>
  );
};

RouteApp.propTypes = {
  routeList: PropTypes.array,
};

export default RouteApp;
