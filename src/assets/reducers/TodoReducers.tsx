import { createContext, useContext, useReducer } from "react";

export const todoReducer = (state, action) => {
  switch(action.type){
    case 'addTask': {
      return [...state, {id: action.id, task: action.task}]
    }

    case 'deleteTask': {
      return state.filter((task) => task.id !== action.id);
    }

    case 'editTask': {
      return state.map((todo) => todo.id === action.id ? {...todo, task: action.task} : todo )
    }

    default: 
      throw Error(`設定されていないアクションです：${action.type}`);
  }
}


export const TodosContext = createContext();
export const DispatchContext = createContext();