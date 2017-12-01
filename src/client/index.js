import React from "react";
import { BrowserRouter } from "react-router-dom";
// hydrate is responsible for server rendering going forward
import { hydrate as render } from "react-dom";
import App from "./app";
import { Provider } from "react-redux";
import store from "./store";

import 'semantic-ui-css/semantic.min.css';
import 'react-select/dist/react-select.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'rc-slider/assets/index.css';

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
}
