import * as React from 'react';
import './index.scss'
const Index: React.FC = () => {
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
  }
  return (
    <div>
      <div className="index-container" id="container" onClick={toBottom}>
        <div className="index-title">2019
          <span className="index-flag">
            生成你的年度#TAG#
          </span>
          <div style={{fontSize: "6vw"}}>(任意点击进入扭蛋机)</div>
        </div>
        <div className="index-words" id="words">
          
        </div>
      </div>
    </div>
  )
}
export default Index;
