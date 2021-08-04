import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@material-ui/core'
import Layout from './Layout'
import Projects from '../projects/Projects'

const theme = createTheme({})

export default function Application() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/projects">
              <Projects />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

