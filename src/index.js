import { lazy, Suspense } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ThemeProvider from "context/ThemeContext"
import ModalProvider from "context/ModalContext"

import { Provider } from "react-redux"
import store from "store"


const LazyHome = lazy(() => import('pages'))
const LazyPeople = lazy(() => import('pages/People')) // pun not intended
const LazyBusiness = lazy(() => import('pages/Business')) // pun not intended

/** @type {HTMLElement} root */
const root = document.querySelector("#root")

/**
 * @type {FC} App
 */
const App = () => (
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
            <Route exact path="/people">
              <Suspense fallback={<div>Loading...</div>}>
                <LazyPeople />
              </Suspense>
            </Route>
          </Switch>
        </Router>
      </ModalProvider>
    </ThemeProvider>
  </Provider>
)




ReactDOM.render(<App />, root)
