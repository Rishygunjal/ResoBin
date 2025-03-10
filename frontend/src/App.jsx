import { Suspense, useContext } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, DarkTheme, LightTheme } from 'styles'
import { ToastContainerStyled } from 'components/toast'
import { AdminView, Login, NotFound, Signup } from 'pages'
import { LoaderAnimation, PrivateRoute } from 'hoc'
import { ThemeContext } from 'context'

const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={theme === 'dark' ? DarkTheme : LightTheme}>
      <GlobalStyles />
      <ToastContainerStyled />
      <Suspense fallback={<LoaderAnimation />}>
        <Switch>
          {/* <PrivateRoute path="/dashboard" component={AdminView} /> */}
          {/* <PrivateRoute path="/courses/:id" component={NotFound} /> */}
          <Route path="/dashboard" component={AdminView} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/forgot-password" component={NotFound} />
          <Route exact path="/404" component={NotFound} />
          <Redirect from="*" to="/login" />
        </Switch>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
