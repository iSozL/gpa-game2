import React, {useRef, useEffect, useState} from 'react';
import Loading from '../components/loading';
import './index.scss';
import {papersBg, fetchData} from '../utils/fetchData';

const Paper: React.FC = () => {
  return (
    <div className="paper1" id="paper-bg">
      <div>
        <div className="paper-name" style={{color: "#2861a1"}}>
          <span style={{background: "#2861a1"}}>淦林娘</span>
        </div>
        <div>
          <div style={{marginTop: "6vh"}}></div>
        </div>
        <div className="context" style={{color: "#2861a1"}}>nmsl</div>
      </div>
    </div>
  )
}

const Papers: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(true)
  const [paper, setPaper] = useState<boolean>(false)
  const imgRef = useRef<any>()
  // gif播放完之后显示纸条
  const showPaper = () => {
    // 背景糊化
    imgRef.current.style.filter = 'blur(5px)'
    imgRef.current.style.mozFilter = 'blur(5px)'
    imgRef.current.style.msFilter = 'blur(5px)'
    imgRef.current.style.webkitFilter = 'blur(5px)'
    imgRef.current.style.oFilter = 'blur(5px)'
    // 显示纸条
    setPaper(true)
  }
  // 切换图片src达到重启gif的效果,浏览器有缓存,不需要担心带宽
  const change = () => {
    setLoading(true)
    setShow(false)
    imgRef.current.src = "http://antelope.fun/nd.gif"
    imgRef.current.onload = () => {
      setLoading(false)
    }
    setTimeout(() => {
      showPaper()
    }, 3700)
  }
  useEffect(() => {
    (async function () {const data = await fetchData(); console.log(data)})()
    console.log(papersBg)
  }, [])

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {loading ? <Loading /> : ""}
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img ref={imgRef} className="paper-container" id="paper-container" src="http://antelope.fun/paperbg.jpg" />
        {show ? <div className="click" onClick={change}></div> : ""}
        {paper ? <Paper /> : ""}
      </div>
    </div>
  )
}

export default Papers