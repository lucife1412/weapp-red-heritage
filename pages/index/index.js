// pages/index/index.js
const utils = require('../../utils/util.js')

Page({
  data: {
    spotList: [{
        title: "铁边城镇张湾子毛主席旧居",
        img: "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/zhangwanzi3.png",
        content: `1935年10月18日，中共中央进入吴起境内抵达张湾子村，当晚在这里召开了政治局常委会议。`
      }, {
        title: "中央红军长征胜利纪念园",
        img: "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/shengli.png",
        content: `中央红军长征胜利纪念园位于陕北革命老区吴起县，在胜利山“切尾巴战役”遗址建立。自2007年开始建设。纪念园内包括的项目主要由中央红军长征胜利纪念碑、中央红军长征胜利纪念馆、红军烈士陵园等，占地4.2平方公里。`
      }, {
        title: "吴起革命纪念馆",
        img: "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/wuqi3.png",
        content: `吴起革命纪念馆起初名为"毛主席革命旧居纪念馆"。1966年12月，建成。2004年10月19日，新修建陈列室“中共中央长征到吴起”正式开放。2005年10月，因吴旗县改名为吴起县，“吴旗镇革命旧址纪念馆”随之改名为“吴起革命纪念馆”。`
      }, {
        title: "下寺湾毛主席旧居",
        img: "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/jiuju.png",
        content: `1935年10月30日，毛泽东等中共中央领导同志率中央机关和陕甘支队离开吴旗镇，沿洛河川南下，经金鼎、石畔（均属今志丹县），于11月2日到达陕甘边苏维埃政府所在地下寺湾。毛泽东住白云德家石窑内。`
      }, {
        title: "象鼻子湾毛泽东雪地讲话旧址",
        img: "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/xiangbizi3.png",
        content: `1935年11月2日中央到达甘泉县下寺湾村，解决了陕北地区存在的错误“肃反”工作。11月5日，中央红军到达象鼻子湾村与刚刚成立的红十五军团胜利会师。当时，这个村庄只有六户人家，军委机关就驻扎在此，红军战士分别驻扎在毛家安、红土沟、老人仓、官庄寺、纸坊等村庄。当时是下午二时许，天空下着鹅毛大雪，大地已被皑皑白雪覆盖了二寸厚，毛主席冒着大雪向全体红军指战员在会师地发表了演讲，即著名的“雪地讲话”。`
      }, {
        title: "瓦窑堡革命旧址",
        img: "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/wabao3.png",
        content: `（1935年）11月—民国二十五年（1936年）6月，中共中央、中华苏维埃共和国、中央政府机关、中央军委机关和老一辈无产阶级革命家毛泽东、周恩来、张闻天、刘少奇等在瓦窑堡革命旧址工作生活。民国二十四年（1935年）12月17日至25日，中共中央政治局在瓦窑堡举行扩大会议“瓦窑堡会议”。`
      }, {
        title: "西北革命军事委员会旧址",
        img: "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/junshi.png",
        content: `西北革命军事委员会于1935年11月3日在甘泉县下寺湾成立，主席毛泽东，副主席周恩来、彭德怀。委员有王稼祥、聂洪钧、林彪、徐海东、程子华、郭洪涛。1936年4月10日，增补叶剑英、聂荣臻、刘志丹为委员。西北革命军事委员会旧址，位于瓦窑堡城内前河滩，共有砖窑和石窑12孔。其中包括周恩来旧居砖窑两孔、军委会议室大砖窑1孔。军委会议室坐西面东，进深6米，宽5米，高4.5米。院落占地面积1500平方米。`
      }, {
        title: "袁家沟革命旧址",
        img: "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/yuanjia.png",
        content: `1936年2月8日，到达清涧县袁家沟，2月上旬遇大雪，作著名诗词《沁园春·雪》。`
      }, {
        title: "太相寺会议旧址",
        img: "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/taixiang.png",
        content: `1936年5月8日至5月29日，毛泽东移住延川太相寺，期间5月15日和17日，在延川县太相寺召开了政治局会议，会议总结了东征，部署了西征。`
      },
      {
        title: "保安革命旧址",
        img: "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/baoan3.png",
        content: `保安革命旧址有毛泽东旧居、周恩来旧居、中共中央政治局会议室和中国工农红军大学旧址等。毛泽东旧居系一排5孔石窑，依山开凿，坐东面西。中共中央政治局会议室旧址系1孔坐东面西的石窑洞，依山开凿。`
      },
      {
        title: "中国人民抗日红军大学旧址",
        img: "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/kangri.png",
        content: `中国人民抗日红军大学（简称“红大”）于1936年6月1日在陕北瓦窑堡创立，是“抗大”的前身，第一批学员编为3个科共1063人。`
      },
      {
        title: "中央军委二局旧址",
        img: "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/erju.png",
        content: `1935年10月19日中央军委二局随中央红军长征到达陕北吴起镇，1936年12月5日红一、二、四方面军技侦部门在保安合并组建中央军委二局，1937年1月移驻延安，1938年11月迁至安塞县。`
      },
      {
        title: "延安革命纪念馆",
        img: "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/yanan.png",
        content: `延安革命纪念馆始建于1950年，现位于宝塔区延河东岸，馆藏文物3.5万件、历史照片5500张，2008年评为国家一级博物馆，2016年列入全国红色旅游经典景区。`
      },
      {
        title: "杨家岭革命旧址",
        img: "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/yangjialing.png",
        content: `1938年11月至1947年3月中共中央驻地，在此召开党的七大和延安文艺座谈会，领导整风运动和大生产运动，2016年列入全国红色旅游经典景区。`
      },
      {
        title: "枣园革命旧址",
        img: "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/zaoyuan.png",
        content: `1944年至1947年中共中央书记处驻地，领导整风运动和大生产运动，筹备党的七大，2016年列入全国红色旅游经典景区。`
      },
      {
        title: "王家坪革命旧址",
        img: "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/wangjiaping.png",
        content: `1937年1月至1947年3月中央军委和八路军总司令部所在地，毛泽东、朱德等领导人曾在此居住，旧址分为南院（政治部）和北院（司令部）。`
      }
    ],
    imageList: ["https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/zhangwanzi1.png", "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/wuqi1.png", "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/wabao1.png"]
  },

  // 预览图片
  previewImage(e) {
    const current = e.currentTarget.dataset.src
    utils.previewImages(current, this.data.imageList)
  },

  navigateTransfer(e) {
    const {
      type
    } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/transfer/transfer?type=${type}`
    });
  },

  navigateRedMap(e) {
    wx.switchTab({
      url: '/pages/map/map',
    });
  },

  navigateRedWay(e) {
    wx.navigateTo({
      url: `/pages/route/route`
    });
  },

  toVideoDetails(e) {
    wx.navigateTo({
      url: `/pages/artifactDetail/artifactDetail?item=${JSON.stringify(e.currentTarget.dataset.item)}`
    });
  }
})