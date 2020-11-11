import React, { createContext, ReactChild, useReducer } from "react";

// 创建 context
export const showContext = createContext({});

export const UPDATE_SHOW = "UPDATE_SHOW";
export const UPDATE_INDEX = "UPDATE_INDEX";

interface Iprops {
  children: ReactChild
}

interface Action {
  type: string,
  index: number,
  show: boolean,
  play: boolean
}

const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case UPDATE_SHOW:
      return action.show;
    case UPDATE_INDEX:
      return action.show;
    default:
      return state;
  }
};

export const Show = (props: Iprops) => {
  const [show, dispatch] = useReducer(reducer, {index: 0, show: false, play: true});
  return (
    <showContext.Provider value={{ show, dispatch }}>
      {props.children}
    </showContext.Provider>
  );
};