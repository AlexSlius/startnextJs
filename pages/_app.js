import Head from "next/head";
import { withRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";

import App from '../src/App';

import { wrapper } from "../src/redux/store";

import "../public/styles/fonts.scss";
import "../public/styles/vars.scss";
import "../public/styles/globals.scss";
import "../public/styles/layout.scss";

const MyApp = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  return (
    <>
      <Head>
        <meta httpEquiv="Content-type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
      </Head>
      <App
        dispatch={dispatch}
        state={state}
      >
        <Component {...pageProps} />
      </App>
    </>
  )
}

export default wrapper.withRedux(withRouter(appWithTranslation(MyApp)));