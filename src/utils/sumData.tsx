import React from 'react';
import request from './request'

const sumImg:any[] = []

const sumData = async () => {
  const data = await request.get("https://os.ncuos.com/api/h5/data")
  const sum = data.data.data
  if(sum.page_4.page_4_data.gpa_rank !== null) {
    if(sum.page_4.page_4_data.gpa_rank <= 5) {
      sumImg[0] = (require("../assets/imgs/xffn.png"))
    } else if (sum.page_4.page_4_data.gpa_rank <= 30 && sum.page_4.page_4_data.gpa_rank > 5) {
      sumImg[0] = (require("../assets/imgs/jjlr.png"))
    } else {
      sumImg[0] = (require("../assets/imgs/xysr.png"))
    }
  }
  // 课时排名
  if(sum.page_3.course_hours_defeat !== null) {
    if(sum.page_3.course_hours_defeat > 50) {
      sumImg[1] = (require("../assets/imgs/bsxxj.png"))
    } else {
      sumImg[1] = (require("../assets/imgs/lnqn.png"))
    }
  }
  // 生活费
  if(sum.page_7.elec_expense !== null) {
    if(sum.page_7.elec_expense > 202) {
      sumImg[2] = (require("../assets/imgs/gdqbydx.png"))
    } else {
      sumImg[2] = (require("../assets/imgs/dlbhxh.png"))
    }
  }
  if(sum.page_1.join_year !== null) {
    if(sum.page_1.join_year == 2019) {
      sumImg[3] = (require("../assets/imgs/tjhdxs.png"))
    } else if (sum.page_1.join_year == 2018) {
      sumImg[3] = (require("../assets/imgs/ygkbqn.png"))
    } else {
      sumImg[3] = (require("../assets/imgs/ndssyq.png"))
    }
  }
  return sumImg
}

export default sumData