import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import bundle from "./bundle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";
import Home from "./containers/Home";
import Profile from "./containers/Profile"
import About from "./containers/About";
import Deals from "./containers/Deals";
import DealDetail from "./containers/DealDetail";
import Brands from "./containers/Brands";
import BrandDetail from './containers/BrandDetail'
import NotFoundPage from "./containers/NotFound";
import ServerError from "./containers/ServerError";
import { LoadGithubUsers } from "./dataloading";
import styled from "styled-components";

import globalCSS from './globalCSS';

//========================
// STYLED COMPONENTS
const Sidebar = styled.div`
  flex: 0 0 240px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledHeader = styled(Header)`align-content: flex-start;`;

const StyledFooter = styled(Footer)`
  align-content: flex-end;
  text-align: left;
  padding-left: 0;
`;

const StyledSwitch = styled(Switch)`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  overflow: auto;
`;

const Root = styled.div`
  height: 100%;
  width: 100%;
`;

const RootMain = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 600px;
`;
//========================

//========================
// FETCH BUNDLES
// Dynamic imports
// These components don't have server rendering at the moment
// TO-DO : Add server rendering if possible

//========================
// RedirectWithStatus
// A component to Redirect from a status code
// It sets a context key called status, which the server can read from the context
// and respond accordingly
const RedirectWithStatus = ({ from, to }) => (
  <Route
    render={({ staticContext }) => {
      // there is no `staticContext` on the client, so
      // we need to guard against that here
      if (staticContext) staticContext.status = to.state.status;
      return <Redirect from={from} to={to} />;
    }}
  />
);
RedirectWithStatus.propTypes = {
  from: PropTypes.any,
  to: PropTypes.any
};
//========================

//========================
// Fading Route
// A component to render a fading Route
// We take advantage of the "render" method of the Route component
// to have a much smaller boiler plate for FadingRoute component
const FadingRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <FadeIn>
        <Component {...props} />
      </FadeIn>
    )}
  />
);
FadingRoute.propTypes = {
  component: PropTypes.any
};
//========================

//========================
// LOAD DATA for SERVER RENDERING
// We use this config to tell the server
// what actions to fire for async data-fetching before rendering a path
// This is handy for server rendering and redux store pre-filling
// for a particular route
// It is repetitive, but it helps us use the "render" and "children" props on
// Route for the client, which are handy for transitions and selective renders
// while also using route config for the server. Route config is limiting on the client
// side, but is powerful on the server, because we can pass custom fields like "loadData"
// which is not possible with <Route/> for the server
export const loadData = [
  {
    path: "/github-users",
    exact: true,
    loadData: LoadGithubUsers
  }
];
//========================

//========================
// APP
// This is the app component which is universal and can be rendered on the client
// and the server
export default class App extends Component {
  render() {
    return (
      <Root>
        <RootMain>
          <StyledHeader />
          <StyledSwitch>
            <FadingRoute exact path="/" component={Home} />
            <FadingRoute exact path="/about" component={About} />
            <FadingRoute exact path="/profile" component={Profile} />
            <FadingRoute exact path="/deals" component={Deals} />
            <FadingRoute exact path="/brands" component={Brands} />
            <FadingRoute exact path="/deal-detail/:id" component={DealDetail} />
            <FadingRoute exact path="/brand-detail/:id" component={BrandDetail} />  
            <FadingRoute exact path="/deal-detail/:id" component={DealDetail} />
            <RedirectWithStatus
              from="/500"
              to={{
                pathname: "error",
                state: {
                  status: 500
                }
              }}
            />
            <RedirectWithStatus
              from="/401"
              to={{
                pathname: "error",
                state: {
                  status: 401
                }
              }}
            />
            <Route exact path="/error" component={ServerError} />
            <Route component={NotFoundPage} />
          </StyledSwitch>
          <StyledFooter />
        </RootMain>
      </Root>
    );
  }
}
//========================
