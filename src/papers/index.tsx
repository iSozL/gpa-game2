import React, {useRef, useEffect, useState} from 'react';
import Loading from '../components/loading';
import './index.scss';
import {papersBg, fetchData, Pprops, Cprops} from '../utils/papersData';

interface Iprops {
  background: Pprops,
  pageContext: Cprops,
  toggle: any
}

let paperContext: Cprops[];
const Paper = (props: Iprops) => {
  const {background, pageContext, toggle} = props
  return (
    <div className={background.bg} id="paper-bg" onClick={toggle}>
      <div>
        <div className="paper-name" style={{color: background.ncolor}}>
          <span style={{background: background.bgcolor}}>{background.name}</span>
        </div>
        <div>
          <div>
            { 
              background.logo ? 
              <img className="logo" src={background.logo} /> : 
              <div style={{marginTop: "6vh"}}></div>
            }
          </div>
        </div>
        <div className="context" style={{color: background.color}}>{pageContext.context}</div>
      </div>
    </div>
  )
}

const Papers: React.FC = () => {
  // loading显示
  const [loading, setLoading] = useState<boolean>(false)
  // 拉杆高亮显示
  const [show, setShow] = useState<boolean>(true)
  // 纸条显示
  const [paper, setPaper] = useState<boolean>(false)
  // 纸条背景
  const [bg, setBg] = useState<number>(0)
  // 纸条页数
  const [page, setPage] = useState<number>(0)
  // 拼图显示
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

  const toggle = () => {
    setPage(page + 1);
    if (paperContext[page].end && bg < 7) {
      imgRef.current.style.filter = null
      imgRef.current.style.mozFilter = null
      imgRef.current.style.msFilter = null
      imgRef.current.style.webkitFilter = null
      imgRef.current.style.oFilter = null
      setBg(bg + 1)
      setPaper(false)
      setShow(true)
    } else if (paperContext[page].end && bg >= 7) {
      window.location.hash = "/characters"
    }
  }
  useEffect(() => {
    (async function () {paperContext = await fetchData()})()
  }, [])

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {loading ? <Loading /> : ""}
      {paper ? <img id="puzzle" src={papersBg[bg].puzzle} className="puzzle" /> : ""}
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img ref={imgRef} className="paper-container" id="paper-container" src="http://antelope.fun/paperbg.jpg" />
        {show ? <div className="click" onClick={change}></div> : ""}
        {paper ? <Paper background={papersBg[bg]} pageContext={paperContext[page]} toggle={toggle} /> : ""}
      </div>
    </div>
  )
}

export default Papers