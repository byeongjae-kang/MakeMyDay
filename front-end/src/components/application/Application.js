import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@material-ui/core'
import Layout from './Layout'
import ProjectList from '../projects/ProjectList'
import ProjectView from 'components/projectView/ProjectView'
import Landing from '../landing_page/Landing'

const theme = createTheme({})


export default function Application() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/projects">
              <ProjectList />
            </Route>
            <Route exact path="/projects/:id/tasks">
              <ProjectView />
            </Route>
            <Route exact path="/login">
              <Landing />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

