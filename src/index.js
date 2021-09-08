import { lazy, Suspense } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ThemeProvider from "context/ThemeContext"

const LazyHome = lazy(() => import('pages'))

/** @type {HTMLElement} root */
const root = document.querySelector("#root")

/**
 * @type {FC} App
 */
const App = () => (
  <ThemeProvider>
    <Router>
      <Switch>
        <Route path="/">
          <Suspense fallback={<div>Loading...</div>}>
            <LazyHome />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
)




ReactDOM.render(<App />, root)
