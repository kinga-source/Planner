import React, { createContext, useState, useContext } from "react";

//CONTEXT WHITCH IS HOLDING STATE OF APP
const StateContext = createContext();

// PROVIDER OF COMPONENTS WHO NEEDED STATE
const StateProvider = (props) => {
  const { children } = props;

//STATES CREATED WITH USESTATE HOOK
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "BUY WEGETABLES",
      description: "ONION, TOMATO, BEENS",
      done: "done",
      inprogress: "",
    },
      {
          id: 2,
          title: "BUY TOYS FOR JASMINE",
          description: "TRACTOR",
          done: "",
          inprogress: "IN PROGRESS",
      },
      {
          id: 3,
          title: "BAKE SOME CAKE",
          description: "PAVLOVA",
          done: "",
          inprogress: "IN PROGRESS",
      },
      {
          id: 4,
          title: "MAKE SOME DINNER",
          description: "SPAGHETTI",
          done: "",
          inprogress: "IN PROGRESS",
      },
      {
          id: 5,
          title: "WATCH NEW COURSE",
          description: "PHP IN UDEMY",
          done: "",
          inprogress: "IN PROGRESS",
      },
  ]);
  const [title, setTitle] = useState("");
  const [descrip, setdescrip] = useState("");
  const [open, setOpen] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [done, setDone] = useState("");
  const [editDone, setEditDone] = useState("");
  const [editInProgress, setEditInProgress] = useState("");
  const [inprogress, setInProgress] = useState("");


    //     zwraca providera StateContext, który weźmie dowolny komponent jako dziecko,
    //     wartość „Prop = {{}}” zawiera wszystkie dane dotyczące state i funkcji,
    //     których potrzebujemy w naszej aplikacji, możemy go używać z
    //     „eksportowanym hookiem useAppState”

  return (
    <StateContext.Provider
      value={{
        open,
        setOpen,
        tasks,
        title,
        setTitle,
        descrip,
        setdescrip,
        setTasks,
        editTitle,
        setEditTitle,
        editDescription,
        setEditDescription,
        done,
        setDone,
        inprogress,
        setInProgress,
        editDone,
        setEditDone,
        editInProgress,
        setEditInProgress,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// HOOK USEAPPSTATE -MOZNA UZYC W DOWOLNYM PLIKU ZNAJDUJACYM SIE W PROVIDERZE W CELU ODCZYTU LUB ZAPISU DO STATE
const useAppState = () => useContext(StateContext);

//EXPORTING PROVIDER TO STATE & HOOK USEAPPSTATE TO USE IN COMPONENTS
export { StateProvider, useAppState };
