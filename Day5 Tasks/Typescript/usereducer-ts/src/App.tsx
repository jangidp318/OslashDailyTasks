import { type } from '@testing-library/user-event/dist/type';
import { stat } from 'fs';
import React, { FC, ReactElement, useReducer } from 'react';
import './App.css';

type Category = "Bread" | "Fruit" | "Vegitable" | "Meat" | "Milk"

interface ShoppingListItem {
  id: string;
  title: string;
  completed: boolean;
  category: Category
}

type ShoppingListState = ShoppingListItem[];

interface AddAction {
  type: "add",
  catetory: Category;
}

interface EditAction {
  type: "edit",
  id: string,
  title: string
}

interface DeleteAction {
  type: "delete",
  id: string,
}

interface CompletedAction {
  type: "completed",
  id: string
}

export type ShoppingListAction = 
  | AddAction
  | EditAction
  | DeleteAction
  | CompletedAction;



function shoppinglistreducer(state: ShoppingListState, action: ShoppingListAction): ShoppingListState {
  switch(action.type){
    case "add":
      return state.concat({
        id: `${Math.random()}-${Date.now()}`,
        title: "",
        category: action.catetory,
        completed: false
      })
    case "completed":
      return state.map((item) => {
        if(item.id === action.id) {
          return {...item, completed:true}
        }
        return item
      })
    case "delete":
      return state.filter(item => item.id != action.id)
    case "edit":
      return state.map(item => {
        if(item.id === action.id){
          return {...item, title: action.title}
        }
        return item;
      })
    default:
      return state;
  }
}

const Button: FC = () => {
  const [state, dispatch] = useReducer(shoppinglistreducer,[]);

  return <div>Button</div>
}

function App() {
  return <Button />;
}

export default App;
