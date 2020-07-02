import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CalendarPage from "./pages/CalendarPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import { StateProvider } from "./context/StateContext";
import "react-big-calendar/lib/css/react-big-calendar.css";

//Router do przekierowania nas do nowego widoku i
// renderowania potrzebnych komponentow

function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/add-task" component={CreateTaskPage} />
      </Switch>
    </Router>
  );
}


// Nasz punkt wejścia w aplikacje, który celuje w „div” o identyfikatorze
// „root”, renderujemy tutaj nasz RouterComponent
ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <RouterComponent />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
