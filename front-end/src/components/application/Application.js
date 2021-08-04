import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@material-ui/core'
import Layout from './Layout'
import Projects from '../projects/Projects'
import TaskBody from '../drag_drop/TasksBody'
import Landing from '../landing_page/Landing'
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
            <Route exact path="/dashboard">
             <TaskBody/>
            </Route>
            <Route exact path="/login">
             <Landing/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

