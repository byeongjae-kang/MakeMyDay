import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@material-ui/core'
import Layout from './Layout'
import ProjectList from '../projects/ProjectList'
import TaskBody from '../drag_drop/TasksBody'
import Landing from '../landing_page/Landing'
import Gantt from '../gantt/Gantt'
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
            <Route exact path="/projects/:id">
              <ProjectList />
            </Route>
            <Route exact path="/dashboard">
             <TaskBody/>
            </Route>
            <Route exact path="/login">
             <Landing/>
            </Route>
            <Route exact path="/gantt">
              <Gantt/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

