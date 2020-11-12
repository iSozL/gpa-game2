import React, {useRef} from "react"
import "./index.css"
const Letter: React.FC = () => {
  const ref1 = useRef<any>()
  const ref2 = useRef<any>()
  const ref3 = useRef<any>()
  const ref4 = useRef<any>()
  const ref5 = useRef<any>()
  const ref6 = useRef<any>()
  const ref7 = useRef<any>()
  const ref8 = useRef<any>()

  let click = true
  const click1 = () => {
    ref1.current.style.display = "none"
    ref2.current.style.display = "none"
    ref3.current.style.display = "block"
    setTimeout(() => {
      ref3.current.style.color = "rgba(253, 245, 211, 0.45)"
      ref4.current.style.display = "block"
    }, 5000);
  }
  const click2 = () => {
    ref3.current.style.display = "none"
    ref4.current.style.display = "none"
    ref5.current.style.display = "block"
    setTimeout(() => {
      ref5.current.style.color = "rgba(253, 245, 211, 0.45)"
    }, 5000);
  }
  const click3 = () => {
    ref5.current.style.display = "none"
    ref6.current.style.display = "block"
    setTimeout(() => {
      ref6.current.style.color = "rgba(253, 245, 211, 0.45)"
      ref7.current.style.display = "block"
      setTimeout(() => {
        ref7.current.style.color = "rgba(253, 245, 211, 0.45)"
        ref8.current.style.display = "block"
      }, 5000);
    }, 5000);
  }
  window.addEventListener("click", function() {
    if(click) {
      ref1.current.style.display = "block"
      setTimeout(() => {
        ref1.current.style.color = "rgba(253, 245, 211, 0.45)"
        ref2.current.style.display = "block"
      }, 5000);
      click = false
    }
  })
  return (
    <div className="letter-container">
      <div className="letter-words">
        <div style={{paddingTop: "10vh"}} ref={ref1}>
          <p>咔、嚓、砰——”</p>
          <p>随着扭蛋被一个个拧开，</p> 
          <p>2019也像是被按下快门，一帧帧定格于昨日。</p>
        </div>
        <div ref={ref2}>
          <p>截至2019年，</p>
          <p>云家园用户量达到82142，</p>
          <p>南大家园APP累积用户量，</p>
          <p>超过到了73000</p>
          <p>家园主站访问总量</p>
          <p>达到了75000，</p>
          <p>微信公众平台粉丝量</p>
          <p>突破到了30000。</p>
          <p>数据的开头字符从零到一，从一到二，再从二跳到三，</p>
          <p>是背后的你，让它的涨落变得振奋人心。</p>
          <p className="letter-click" onClick={click1}>下一页</p>
        </div>
        <div style={{paddingTop: "10vh"}} ref={ref3}>
          <p>2019年5月20日</p>
          <p>我们的默契测试游戏，</p>
          <p>“无二研究所”正式上线。</p>
          <p>南昌初夏的热意，</p>
          <p>还没正式蒸腾，</p>
          <p>恋人的爱意却，</p>
          <p>顺应季候破土发芽。</p>
        </div>
        <div ref={ref4} style={{marginTop: "3vh"}}>
          <p>同年8月，</p>
          <p>四六级助手登录APP首页，</p>
          <p>为近7000人找回了准考证号，</p>
          <p>带你经历得知，</p>
          <p>四六级成绩的极速3秒。</p>
          <p className="letter-click" onClick={click2}>下一页</p>
        </div>
        <div style={{paddingTop: "10vh"}} ref={ref5}>
          <p>一年的时间，总有改变。</p>
          <p>南大有了自己的哈啰单车。</p>
          <p>商业街的店铺，</p>
          <p>统一换了红彤彤的招牌，</p>
          <p>小家园也终于迎来了自己的18岁。</p>
          <p>但总有些什么，从未改变。</p>
          <p>二类通识开始了新一轮选修。</p>
          <p>妖风又吹过前湖的秋。</p>
          <p>努力成为全国一流的互联网学生团队，</p>
          <p>我们仍在为此前行。</p>
          <p>致力于持续为数万南大人，</p>
          <p>提供更多深入人心的优质服务。</p>
          <p className="letter-click" onClick={click3}>下一页</p>
        </div>
        <div style={{paddingTop: "10vh"}} ref={ref6}>
          <p>让小家园偷偷告诉你叭，</p>
          <p>在2020年，</p>
          <p>APP将迎来又一次改版。</p>
          <p>崭新的南大家园，</p>
          <p>正在赶来的路上快马加鞭。</p>
          <p>更多四六级助手这样的产品，</p>
          <p>也即将冲出头脑风暴。</p>
          <p>来到你的面前。</p>
        </div>
        <div ref={ref7}>
          <p>谢谢你又一年的陪伴，</p>
          <p>是你默默的鼓励和及时的建议，</p>
          <p>夯实了我们前行的后背，</p>
          <p>新的一年，也请多多关照吧！</p>
        </div>
        <div ref={ref8}>
          <p style={{float: "right", paddingTop: "4vh"}}>爱你们的南昌大学家园工作室</p>
          <p style={{float: "right", paddingTop: "2vh"}}>2020年1月15日</p>
        </div>
      </div>
    </div>
  )
}
export default Letter