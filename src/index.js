import { lazy, Suspense } from "react"
import { I18nextProvider } from "react-i18next"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ThemeProvider from "context/ThemeContext"
import ModalProvider from "context/ModalContext"


import { Provider } from "react-redux"
import store from "store"
import i18n from "./i18n"


const LazyHome = lazy(() => import('pages'))
const LazyBusiness = lazy(() => import('pages/Business')) // pun not intended

/** @type {HTMLElement} root */
const root = document.querySelector("#root")

/**
 * @type {FC} App
 */
const App = () => (
  <I18nextProvider i18n={i18n}>
  <Provider store={store}>
    <ThemeProvider>
      <ModalProvider root={root}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Suspense fallback={<div>Loading...</div>}>
                <LazyHome />
              </Suspense>
            </Route>
            <Route exact path="/business/:id">
              <Suspense fallback={<div>Loading...</div>}>
                <LazyBusiness />
              </Suspense>
            </Route>
          </Switch>
        </Router>
      </ModalProvider>
    </ThemeProvider>
  </Provider>
  </I18nextProvider>
)




ReactDOM.render(<App />, root)
