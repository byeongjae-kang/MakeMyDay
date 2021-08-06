import { useState, createContext } from "react";

export const TasksContext = createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  return (
    <TaskContextProvider.Provider value={{ tasks, setTasks }}>
      {props.children}
    </TaskContextProvider.Provider>
  );
};
