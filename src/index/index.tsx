import React, {useState} from 'react';
import './index.scss';
import {Link} from 'react-router-dom';
import Loading from '../components/loading';

const Words: React.FC = () => {
  return (
    <div className="index-words">
      <div id="sentence1">
        你即将看到的是<span style={{ fontSize: "6.5vw" }}>家园扭蛋机</span>
        <p style={{ fontSize: "6.3vw" }}>NCUHOME’S GACHAPON</p>
      </div>
      <div id="sentence2">
        正如它的英文名 (咔擦砰)
        <p><span style={{ fontSize: "8vw", marginLeft: 20 }}>"咔擦"</span>一声</p>
      </div>
      <div id="sentence3">
        <p>2019年</p>
        <p>那些或许被你忽视的小碎片</p>
        <p>就会<span style={{ fontSize: "8vw" }}>"砰"</span>的涌现</p>
        <p>月光下的足迹</p>
        <p>教室里的身影</p>
        <p>一些无意坚持下来的小习惯...</p>
      </div>
      <div id="sentence4">
        <p>把它们收集起来</p>
        <p>一起来拼出你的校园人设</p>
        <p style={{ fontSize: "6.5vw" }}>惊喜在这里等你...</p>
      </div>
    </div>
  )
}
const Index: React.FC = () => {
  const [flag, setFlag] = useState<boolean>(true);
  const [show, changeShow] = useState<boolean>(false);

  window.onload = () => {
    const loadingEle: HTMLElement | null = document.getElementById("loading")

    // 怎么解决loadingEle为null
    loadingEle.style.display = "none"
  }
  // 通过锚点实现点击滑到底部
  const toBottom = (): void => {
    const userAgent = navigator.userAgent;
    const isIOS: boolean = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    const ele:HTMLElement = document.body;
    // safari不支持scrollIntoView的options
    if (isIOS) {
      ele.scrollIntoView(false);
    } else {
      ele.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
    // 防止重复点击显示文字
    if (flag) {
      showWords(0)
    }
  }
  const showWords = (count: number): void => {
    setFlag(false)
    const s1: HTMLElement | null = document.getElementById("sentence1");
    const s2: HTMLElement | null = document.getElementById("sentence2");
    const s3: HTMLElement | null = document.getElementById("sentence3");
    const s4: HTMLElement | null = document.getElementById("sentence4");
    // 保证每个dom节点都拿到,否则一直执行回调函数
    if (s1 && s2 && s3 && s4) {
      if (count < 3) {
        let num: number = count;
        const eleList: HTMLElement[] = [s1, s2, s3, s4];
        eleList[num].style.visibility = "visible";
        setTimeout(function() {
          if(num - 1 >= 0) {
            eleList[num - 1].style.visibility = "hidden";
          }
          eleList[num].style.color = "rgba(253, 245, 211, 0.45)";
          if(num + 1 < 4) {
            eleList[num + 1].style.visibility = "visible";
          }
          // 显示获取扭蛋按钮
          if(num === 2) {
            changeShow(true);
          }
          showWords(num + 1);
        }, 3000)
      }
    } else {
      showWords(count);
    }
  }
  return (
    <div>
      <div id="loading"><Loading /></div>
      <div className="index-container" id="container" onClick={toBottom}>
        <div className="index-title">2019
          <span className="index-flag">
            生成你的年度#TAG#
          </span>
          <div style={{fontSize: "6vw"}}>(任意点击进入扭蛋机)</div>
        </div>
        <Words />
        {show ? (<Link to="/papers" className="index-get">点击获取你的家园扭蛋</Link>) : <div></div>}
      </div>
    </div>
  )
}
export default Index;
