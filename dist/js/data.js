//模板和数据集合
//1.竖屏警告
var app = new Vue({
    el: '#ts-1',
    data: {
        title:"FXBTG温馨提示：",
        message: '使用竖屏浏览，将获得更好的效果哦！'
    }
});
//2.焦点图
Vue.component('ad-pic', {
    props: ['todo'],
    template: '<div class="swiper-slide"><a href="http://www.fxbtg-bank.com" target="_blank"><img :src="todo.pic" :alt="todo.tit"></a></div>'
});
var app2 = new Vue({
    el: '#ad-pic',
    data: {
        groceryList: [
            { pic: 'img/top-ad.png',tit: '图片广告1',link: 'http://www.fxbtg-bank.com' ,con: '广告内容说明文字'},
            { pic: 'img/top-ad.png',tit: '图片广告2',link: 'http://www.fxbtg-bank.com' ,con: '广告内容说明文字'},
            { pic: 'img/top-ad.png',tit: '图片广告3',link: 'http://www.fxbtg-bank.com' ,con: '广告内容说明文字'}
        ]
    }
});
//3.滚动公告
Vue.component('ad-notice', {
    props: ['todo'],
    template: '<div class="swiper-slide" ><span class="left"><i class="visiis vis-notice"></i></span><a href="http://www.fxbtg-bank.com" target="_blank">{{todo.con}}</a></div>'
    });
var app3 = new Vue({
    el: '.ad-notice',
    data: {
        groceryList: [
            { pic: 'img/top-ad.png',tit: '图片广告1',link: 'http://www.fxbtg-bank.com' ,con: 'FXBTG金融集团关于2017年元旦假期部分产品交易时间变更通知'},
            { pic: 'img/top-ad.png',tit: '图片广告2',link: 'http://www.fxbtg-bank.com' ,con: 'FXBTG关于UKOil期货2017年2月份合约到期通知'},
            { pic: 'img/top-ad.png',tit: '图片广告3',link: 'http://www.fxbtg-bank.com' ,con: 'FXBTG关于圣诞节和元旦部分产品交易时间变更通知'}
        ]
    }
});
//3.图标组
Vue.component('ad8', {
    props: ['todo'],
    template: '<a class="col pro" :href="todo.link"><img :src="todo.pic"><p>{{ todo.tit}}</p></a>'
});
var app4 = new Vue({
    el: '#ad8',
    data: {
        groceryList: [
            { pic: 'img/p-1.png',tit: '外汇',link: '#' ,con: '外汇的介绍'},
            { pic: 'img/P-2.png',tit: '贵金属',link: '#' ,con: '贵金属的介绍'},
            { pic: 'img/p-3.png',tit: '能源',link: '#' ,con: '能源的介绍'},
            { pic: 'img/p-4.png',tit: '股指',link: '#' ,con: '外汇的介绍'},
            { pic: 'img/P-5.png',tit: '农产品',link: '#' ,con: '贵金属的介绍'},
            { pic: 'img/p-6.png',tit: '差价合约',link: '#' ,con: '能源的介绍'},
            { pic: 'img/p-7.png',tit: '原油',link: '#' ,con: '外汇的介绍'},
            { pic: 'img/P-8.png',tit: '其他',link: '#' ,con: '贵金属的介绍'}
        ]
    }
});
//3.广告组
//焦点广告
var app7 = new Vue({
    el: '#down-ad',
    data: {
        pic: 'img/top-ad-main.png',
        tit: '平台下载',
        link: '#' ,
        con: '提供电脑端、移动端MT4下载' ,
        btn:'了解详情',
        icon:'visiis vis-notice'
    }
});
Vue.component('ad2', {
    props: ['todo'],
    template: '<div class="col"><a class="ad" :href="todo.link"><img :src="todo.pic"><div class="con"><h4>{{ todo.tit}}</h4><p>{{ todo.con}}</p><span class="btn">{{ todo.btn}} <i class="todo.icon"></i></span></div></a></div>'
});
var app8 = new Vue({
    el: '#ad2',
    data: {
        groceryList: [
            { pic: 'img/top-ad-5.png',tit: '',link: '#' ,con: '全国第一家金融TV' , btn:'观看节目', icon:'visiis vis-video'},
            { pic: 'img/top-ad-6.png',tit: '财经日历',link: '#' ,con: '最及时可靠的动态播报', btn:'了解详情', icon:'visiis vis-notice'}
        ]
    }
});
Vue.component('ad4', {
    props: ['todo'],
    template: '<a class="col ad" :href="todo.link"><img :src="todo.pic"><div class="con"><h4>{{ todo.tit}}</h4><p>{{ todo.con}}</p><span class="btn">{{ todo.btn}} <i class="todo.icon"></i></span></div></a>'
});
var app5 = new Vue({
    el: '#ad4',
    data: {
        groceryList: [
            { pic: 'img/top-ad-1.png',tit: '合作加盟',link: '#' ,con: '与FXBTG探寻新的发展机会' , btn:'了解详情', icon:'visiis vis-notice'},
            { pic: 'img/top-ad-2.png',tit: '每日汇评',link: '#' ,con: '我们追逐梦想，一往无前', btn:'了解详情', icon:'visiis vis-notice'},
            { pic: 'img/top-ad-3.png',tit: '账户类型',link: '#' ,con: '两种账户供君选择', btn:'了解详情', icon:'visiis vis-notice'},
            { pic: 'img/top-ad-4.png',tit: '视频中心',link: '#' ,con: '最前沿的视觉盛宴', btn:'了解详情', icon:'visiis vis-video'}
        ]
    }
});
//4.新闻活动
Vue.component('day', {
    props: ['todo'],
    template: '<div class="con"><div class="day flex wrap">' +
    '<div class="col col-1">每日汇评</div>' +
    '<div class="col col-2"><span>{{ todo.data }}</span>' +
    '<span><b>{{ todo.moon }}</b>{{ todo.year }}</span></div>' +
    '<div class="col col-3"><span>{{ todo.day }}</span></div>' +
    '</div>' +
    '<div class="day-con"><h3>{{ todo.tit }}</h3>' +
    '<div v-html="todo.html"></div></div></div>'
});
var app9 = new Vue({
    el: '#day',
    data: {
        groceryList: [
            { data: '16年12月13日',day:'13',year:'2016',moon:'December',tit:'FXBTG:冻产协议达成，油价暴涨10%',html:'<h4>行情回顾</h4><p>昨天（11月30日），受欧佩克达成减产协议推动，油价暴涨10%，使得全球风险资产再次受到追捧，黄金、日元等避险资产严重受到打压，其中黄金价格跌至10个月低位，美元兑日元日内急升1.9%，至3月2日以来最高114.53。此外，于昨晚间公布的美国11月ADP就业人数增加了21.6万人，数据公布后，市场对周五非农就业数据预期表示乐观，美元大幅上扬，，再度打压金银价格。</p> <h4>市场概况</h4> <p>昨天（11月30日），受欧佩克达成减产协议推动，油价暴涨10%，使得全球风险资产再次受到追捧，黄金、日元等避险资产严重受到打压，其中黄金价格跌至10个月低位，美元兑日元日内急升1.9%，至3月2日以来最高114.53。此外，于昨晚间公布的美国11月ADP就业人数增加了21.6万人，数据公布后，市场对周五非农就业数据预期表示乐观，美元大幅上扬，，再度打压金银价格。</p>'},
            { data: '16年12月12日',day:'12',year:'2016',moon:'December',tit:'FXBTG:冻产协议达成，油价暴涨10%',html:'<h4>行情回顾</h4><p>昨天（11月30日），受欧佩克达成减产协议推动，油价暴涨10%，使得全球风险资产再次受到追捧，黄金、日元等避险资产严重受到打压，其中黄金价格跌至10个月低位，美元兑日元日内急升1.9%，至3月2日以来最高114.53。此外，于昨晚间公布的美国11月ADP就业人数增加了21.6万人，数据公布后，市场对周五非农就业数据预期表示乐观，美元大幅上扬，，再度打压金银价格。</p> <h4>市场概况</h4> <p>昨天（11月30日），受欧佩克达成减产协议推动，油价暴涨10%，使得全球风险资产再次受到追捧，黄金、日元等避险资产严重受到打压，其中黄金价格跌至10个月低位，美元兑日元日内急升1.9%，至3月2日以来最高114.53。此外，于昨晚间公布的美国11月ADP就业人数增加了21.6万人，数据公布后，市场对周五非农就业数据预期表示乐观，美元大幅上扬，，再度打压金银价格。</p>'}
        ]
    }
});
//.每日分析
Vue.component('news', {
    props: ['todo'],
    template: '<a class="col col-2" :href="todo.link"><div class="new-pics"><img :src="todo.pic""><h4>{{ todo.tit}}</h4><p>{{ todo.con}}</p></div></a>'
});
var app6 = new Vue({
    el: '#news',
    data: {
        groceryList: [
            { pic: 'img/new-demo.jpg',tit: '合作加盟',link: '#' ,con: '与FXBTG探寻新的发展机会' },
            { pic: 'img/new-demo.jpg',tit: '每日汇评',link: '#' ,con: '我们追逐梦想，一往无前'},
            { pic: 'img/new-demo.jpg',tit: '账户类型',link: '#' ,con: '两种账户供君选择'},
            { pic: 'img/new-demo.jpg',tit: '视频中心',link: '#' ,con: '最前沿的视觉盛宴'},
            { pic: 'img/new-demo.jpg',tit: '合作加盟',link: '#' ,con: '与FXBTG探寻新的发展机会' },
            { pic: 'img/new-demo.jpg',tit: '每日汇评',link: '#' ,con: '我们追逐梦想，一往无前'}
        ]
    }
});
//滚动特效激活

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    centeredSlides: true,
    autoplay: 5000,
    autoplayDisableOnInteraction: false,
    loop: true
});
var swiper2 = new Swiper('.ad-notice', {
    direction: 'vertical',
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    loop: true,
    effect: 'fade'
});
