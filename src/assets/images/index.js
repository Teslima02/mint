/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { memo, useState } from 'react';
import { Helmet } from 'react-helmet';
// import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import HomePage from '../HomePage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import Layout1 from '../../components/layouts/layout1/Layout1';
import Layout2 from '../../components/layouts/layout2/Layout2';

const App = () => {

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <main>
          <div>
            <Helmet
              titleTemplate="%s - React.js Boilerplate"
              defaultTitle="React.js Boilerplate"
            >
              <meta
                name="description"
                content="A React.js Boilerplate application"
              />
            </Helmet>

            <Switch>
              <Layout1>
                <Route exact path="/" component={HomePage} />
              </Layout1>
              <Route path="" component={NotFoundPage} />
            </Switch>
          </div>
        </main>
      </React.Fragment>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    // getUserStatusAction: () => dispatch(getUserStatus()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(App);
