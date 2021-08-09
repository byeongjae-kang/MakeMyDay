import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Layout from "./Layout";
import ProjectList from "../projects/projectList/ProjectList";
import ProjectView from "components/projectView/ProjectView";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    fontSize: 12,
    fontWeightLight: 400,
    fontWeightRegular: 600,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  palette: {
    primary: {
      light: "#0b3442",
      main: "#114B5F",
      dark: "#406f7f",
      contrastText: "#fff",
    },
    secondary: {
      light: "#482880",
      main: "#673ab7",
      dark: "#8561c5",
      contrastText: "#fff",
    },
  },
});

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
            <Route exact path="/projects/:id/tasks">
              <ProjectView />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
