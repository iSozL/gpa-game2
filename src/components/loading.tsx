import React from 'react';
import "./loading.scss";
const loading = require('../assets/imgs/xffn.png')
const Loading = () => {
  return (
    <div className="loading">
      <img src={loading}></img>
    </div>
  )
}
export default Loading;