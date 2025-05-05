// pages/routeDetail/routeDetail.js
const QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js')
const utils = require('../../utils/util.js')

Page({
  data: {
    currentForm: {},
    list: [{
        id: 1,
        title: '中共中央落脚陕北到进驻延安城的足迹',
        content: `1935年10月18日，中央红军抵达陕西安边县铁边城张湾子村。
        1935年10月19日，毛泽东率领中共中央机关和中央红军（陕甘支队）经过二万五千里长征到达吴起镇。（今吴起县）
        1935年10月30日，毛泽东率领中共中央离开吴起镇，沿洛河川南下，向甘泉下寺湾挺进。
        1935年11月2日，毛泽东率领中共中央机关和中央红军到达陕甘边区苏维埃政府所在地甘泉下寺湾。1935年11月5日，离开下寺湾。
        1935年11月10日，张闻天率领中共中央和苏维埃中央机关进入子长瓦窑堡。
        1936年6月21日，国民党军队袭击瓦窑堡，在红大学员的掩护下，毛泽东率领中央机关撤出瓦窑堡。
        1936年7月3日，党中央进驻保安。（今志丹县）
        1937年1月10日，党中央离开保安，前往延安。
        1937年1月13日，党中央进驻延安城。`
      },
      {
        id: 2,
        title: '毛主席在陕北的足迹（1935年10月18日-1937年1月13日）',
        content: `吴起镇（1935年10月18日——1935年10月30日）
        1935年10月18日，毛泽东率领中央红军抵达陕西安边县铁边城张湾子村
        1935年10月19日，毛泽东率领中共中央机关和中央红军（陕甘支队）经过艰苦卓绝的二万五千里长征到达吴起镇，指挥中央红军进行了著名的“切尾巴”战斗。10月30日，毛泽东率领中共中央离开吴起镇，沿洛河川南下，向甘泉下寺湾挺进。
        
        甘泉下寺湾、象鼻子湾（1935年11月2日——1935年11月7日）
        1935年11月2日，毛泽东率领中共中央机关和中央红军到达陕甘边区苏维埃政府所在地甘泉下寺湾。11月3日，中共中央政治局召开会议，决定目前对外使用中共西北中央局和中华苏维埃共和国中央政府西北办事处的名义；成立西北革命军事委员会，毛泽东为主席，周恩来、彭德怀为副主席；恢复红一方面军番号，彭德怀任司令员，毛泽东任政治委员。
        11月5日，毛泽东到达甘泉象鼻子湾。11月6日，迎着漫天飞舞的雪花，毛主席站在雪地里发表了慷慨激昂的讲话，他说：“我们用双脚用了一年时间走了两万五千里，这是史无前例的壮举，这才是真正的长征，长征是宣言书，长征是宣传队，长征是播种机，长征是以我们的胜利敌人的失败而告终，我们红军的人数比以前少了一些，但是留下来的是中国革命的精华，都是经过严峻锻炼与考验的，留下来的同志不仅要以一当十，而且要以一当百、当千。
        
        富县（1935年11月7日——1935年11月30日）
        1935年11月7日，毛泽东和彭德怀到达道佐铺红十五军团部。11月18日，在张村驿出席西北军事委员会会议。
        1935年11月19日，毛泽东率领红一方面军司令部到达富县张村驿西端的川口子。1935年11月21日至23日，毛泽东、周恩来、彭德怀指挥红军取得了直罗镇战役的胜利。11月27日至11月30日，在富县东村居住。
        
        瓦窑堡（1935年12月13日——1936年6月21日）
        1935年12月13日，毛泽东到达瓦窑堡。12月17至25日中共中央在瓦窑堡召开政治局会议，确立了建立抗日民族统一战线的政治路线和斗争策略。1936年6月21日，国民党军队袭击瓦窑堡，在红大学员的掩护下，毛泽东率领中央机关撤出瓦窑堡。
        1936年2月8日，到达清涧县袁家沟，2月上旬遇大雪，作著名诗词《沁园春·雪》。
        1936年5月8日至5月29日，毛泽东移住延川太相寺，期间5月15日和17日，在延川县太相寺召开了政治局会议，会议总结了东征，部署了西征。1936年6月1日，返回瓦窑堡。
        
        保安（1936年7月11日——1937年1月10日）
        毛泽东和中央机关撤出瓦窑堡后，途经安塞，于1936年7月11日到达保安。7月13日傍晚，毛泽东看望到达保安的美国记者斯诺和美国医生马海德。1937年1月10日，毛泽东离开保安，起程前往延安。
        延安城
        1937年1月13日，毛泽东和中共中央机关进驻延安城凤凰山。`
      },
      {
        id: 3,
        title: '毛主席在陕北的足迹（1937年1月13日-1947年3月18日）',
      },
      {
        id: 4,
        title: '毛主席在陕北的足迹（1947年3月18日-1947年3月19日）',
      }
    ],
    addressList: [], // 公共地址列表
    addressList1: [{
        id: 1,
        title: "张湾子村",
        address: "陕西省延安市张湾子村",
        latitude: 36.97409,
        longitude: 107.89390,
        img: "/images/02.png"
      },
      {
        id: 2,
        title: "吴起镇",
        address: "陕西省延安市吴起镇",
        latitude: 36.93355,
        longitude: 108.18349,
        img: "/images/02.png"
      },
      {
        id: 3,
        title: "下寺湾",
        address: "陕西省延安市甘泉县下寺湾",
        latitude: 36.44068,
        longitude: 109.09668,
        img: "/images/02.png"
      },
      {
        id: 4,
        title: "瓦窑堡",
        address: "陕西省延安市子长市瓦窑堡",
        latitude: 37.14193,
        longitude: 109.67707,
        img: "/images/02.png"
      },
      {
        id: 5,
        title: "保安",
        address: "陕西省延安市志丹县保安镇",
        latitude: 36.83046,
        longitude: 108.77522,
        img: "/images/02.png"
      },
      {
        id: 6,
        title: "延安",
        address: "陕西省延安市宝塔区",
        latitude: 36.60388,
        longitude: 109.49038,
        img: "/images/02.png"
      }
    ],
    addressList2: [{
        id: 1,
        title: "张湾子村",
        address: "陕西省延安市张湾子村",
        latitude: 36.97409,
        longitude: 107.89390,
        img: "/images/02.png"
      },
      {
        id: 2,
        title: "吴起镇",
        address: "陕西省延安市吴起县吴起镇",
        latitude: 36.93355,
        longitude: 108.18349,
        img: "/images/02.png"
      },
      {
        id: 3,
        title: "甘泉下寺湾",
        address: "陕西省延安市甘泉县下寺湾镇",
        latitude: 36.44068,
        longitude: 109.09668,
        img: "/images/02.png"
      },
      {
        id: 4,
        title: "甘泉象鼻子湾",
        address: "陕西省延安市甘泉县象鼻子湾村",
        latitude: 36.16876,
        longitude: 109.35603,
        img: "/images/02.png"
      },
      {
        id: 5,
        title: "富县张村驿",
        address: "陕西省延安市富县张村驿镇",
        latitude: 35.89830,
        longitude: 109.13975,
        img: "/images/02.png"
      },
      {
        id: 6,
        title: "富县张村驿西端的川口子",
        address: "陕西省延安市富县张村驿镇川口子村",
        latitude: 35.89459,
        longitude: 109.12744,
        img: "/images/02.png"
      },
      {
        id: 7,
        title: "富县东村",
        address: "陕西省延安市富县东村",
        latitude: 35.96083,
        longitude: 109.17266,
        img: "/images/02.png"
      },
      {
        id: 8,
        title: "子长瓦窑堡",
        address: "陕西省延安市子长市瓦窑堡街道",
        latitude: 37.14193,
        longitude: 109.67707,
        img: "/images/02.png"
      },
      {
        id: 9,
        title: "清涧县袁家沟",
        address: "陕西省榆林市清涧县袁家沟村",
        latitude: 37.16954,
        longitude: 110.47830,
        img: "/images/02.png"
      },
      {
        id: 10,
        title: "延川太相寺",
        address: "陕西省延安市延川县太相寺村",
        latitude: 36.91958,
        longitude: 110.04408,
        img: "/images/02.png"
      },
      {
        id: 11,
        title: "保安",
        address: "陕西省延安市志丹县保安街道",
        latitude: 36.83046,
        longitude: 108.77522,
        img: "/images/02.png"
      },
      {
        id: 12,
        title: "延安",
        address: "陕西省延安市宝塔区",
        latitude: 36.60388,
        longitude: 109.49038,
        img: "/images/02.png"
      }
    ]
  },

  onLoad(e) {
    let obj = {}
    obj = this.data.list.find(v => v.id === Number(e.id))
    this.setData({
      currentForm: obj
    })
    // 根据当前路线的 id 选择对应的地址列表
    if (obj.id === 1) {
      this.setData({
        addressList: this.data.addressList1
      });
    } else if (obj.id === 2) {
      this.setData({
        addressList: this.data.addressList2
      });
    }

    this.qqmapsdk = new QQMapWX({
      key: '66IBZ-DM5YG-RXKQ7-QKZ2S-FJZSS-EUB4A'
    })
  },

  // 导航处理
  handleNavigation(e) {
    const {
      item
    } = e.currentTarget.dataset
    utils.navigateToLocation.call(this, item).catch(err => console.error(err));
  },

  // 预览图片
  previewImage(e) {
    // const current = e.currentTarget.dataset.src
    // const urls = e.currentTarget.dataset.all
    utils.previewImages("/images/way-map.png", ["/images/way-map.png"])
  }
})