import React from 'react';
import "./loading.scss";
const Loading = () => {
  return (
    <div className="loading">
      <img src={require("../assets/imgs/loading.gif")}></img>
    </div>
  )
}
export default Loading;