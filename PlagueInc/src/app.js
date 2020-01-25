var lang = {},
_confirmed= 0,
_suspected= 0,
_cured= 0,
_dead= 0;
lang.en = require('./i18n/en.json');
lang.zh = require('./i18n/zh.json');
var $data = require('./data.json').data;
function langLoad() {
    var langstr = '';
    for (var k in lang[htmlDom.lang]) {
        langstr += `[lang=${k}]::before{content:"${lang[htmlDom.lang][k]}"}`;
    }
    langStyle.innerText = langstr;
}
function binddialog(btnOpen, dialog, btnClose) {
    btnOpen.onclick = (e) => {
        e.stopPropagation();
        dialog.setAttribute("open", "open")
    }
    btnClose.onclick = (e) => {
        e.stopPropagation();
        dialog.removeAttribute("open")
    }
}
function renderMapColor(list) {
    list.forEach(item => {
        var ele = document.getElementById(item.provinceShortName);
        ele && ele.setAttribute('fill', item.confirmed + item.dead > 100 ? '#73181B' : item.confirmed > 9 ? '#E04B49' : item.confirmed > 0 ? '#F08E7E' : item.suspected > 0 ? '#F2D7A2' : '#fff');
        ele && ele.setAttribute('confirmed', item.confirmed || 0);
        ele && ele.setAttribute('dead', item.dead || 0);
        ele && ele.setAttribute('suspected', item.suspected || 0);
        ele && ele.setAttribute('cured', item.cured || 0);
        _confirmed += item.confirmed || 0;
        _suspected += item.suspected || 0;
        _cured += item.cured||0;
        _dead += item.dead || 0;
    });
}
function renderList(ele, data) {
    var template = ele.template||ele.innerHTML;
    ele.template=template;
    var res = data.map(item => {
        return template.replace(/\{[^}]+\}/g, k => {
            return item[k.slice(1, -1)]
        })
    }).join('');
    ele.innerHTML = res;
}
function setState(obj) {
    for (k in obj) {
        if (Object.prototype.toString.call(obj[k]) === "[object Array]") {
            renderList(window[k], obj[k])
        } else {
            window[k].innerText = obj[k]
        }
    }
}
function ajax(url,successFn) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        successFn(this.response);
      }
    };
    request.send();
}
ajax('../PlagueInc/src/img/china.svg',function (res) {
    setTimeout(() => {
        loading.setAttribute("hidden",true)
    }, 500);
    document.body.innerHTML = res + document.body.innerHTML;
    langLoad();
    var box = document.querySelector("#mapChina");
    var boxGesture = setGesture(box); //得到一个对象
    boxGesture.gesturemove = function(e) {
      //双指移动
      e.preventDefault();
      e.stopPropagation();
      box.style.transform =
        "scale(" + e.scale + ") rotate(" + e.rotation + "deg)"; //改变目标元素的大小和角度
    };
    windowOnload();
})
windowOnload=()=>{
    if ((navigator.language || navigator.browserLanguage).toLowerCase().indexOf('zh') < 0) {
        htmlDom.lang = 'en';
    }
    binddialog(btnNews, dialogNews, btnCloseNews);
    binddialog(btnSick, dialogSick, btnCloseSick);
    binddialog(btnDna, dialogSick, btnCloseSick);
    binddialog(btnCity, dialogCity, btnCloseCity);
    binddialog(dialogAlert, dialogAlert, btnCloseAlert);

    [btnCloseNews, btnCloseAlert, btnCity, btnNews, btnSetting, btnSick, btnDna, btnCloseSick, btnCloseCity].forEach(v => v.ontouchstart = () => window.navigator.vibrate(50))
    
    
    btnSetting.ontouchstart = () => {
        htmlDom.setAttribute("lang", htmlDom.lang === 'zh' ? 'en' : 'zh');
        langLoad();
    }
    bubStart.ontouchstart=(e)=>{
        e.stopPropagation();
        window.navigator.vibrate(200);
        e.target.setAttribute("hidden",true);
        renderMapColor($data.listByCountry);

        document.body.addEventListener('click', function (event) {
            var ele = event.target;
            if (ele.tagName == 'path') {
                window.navigator.vibrate(50);
                setState({
                    $cityName: ele.id,
                    $_cityName: ele.id,
                    $globalCity: ele.id,
                    d_Infected: ele.getAttribute('confirmed') || 0,
                    d_Dead: ele.getAttribute('dead') || 0,
                    $suspected: ele.getAttribute('suspected') || 0,
                    $cured: ele.getAttribute('cured') || 0,
                    i_cure: ele.getAttribute('cured') || 0,
                    i_infected: ele.getAttribute('confirmed') || 0,
                    i_dead: ele.getAttribute('dead') || 0,
                    $cityList: ($data.listByArea.find(v => v.provinceShortName === ele.id) || { cities: [] }).cities
                })
            } else
                if (ele.tagName == 'BODY' || ele.tagName == 'svg') {
                    setState({
                        $cityName: lang[htmlDom.lang].china,
                        $_cityName: lang[htmlDom.lang].china,
                        $globalCity: lang[htmlDom.lang].china,
                        d_Infected: _confirmed || 0,
                        d_Dead: _dead || 0,
                        $suspected: _suspected,
                        $cured: _cured,
                        i_cure: _cured,
                        i_infected: _confirmed,
                        i_dead: _dead,
                        $cityList: [],
                    })
                }

        })
    }
    
    setState({
        $date: (new Date()).toLocaleDateString(htmlDom.lang),
        $btnNewsTitle: $data.timeline[0].title + "\n\n" + $data.timeline[1].title + "\n\n" + $data.timeline[2].title + "\n\n" + $data.timeline[3].title,
        $newsList: $data.timeline,
        $pubDate: (new Date()).toLocaleString(htmlDom.lang),
        $globalCity: lang[htmlDom.lang].china,
        d_Infected: _confirmed,
        d_Dead: _dead,
        $suspected: _suspected,
        $cured: _cured,
        $cityName: lang[htmlDom.lang].china,
        i_cure:_cured,
        i_infected:_confirmed,
        i_dead:_dead,
        $cityList:[],
        $tsp: `传染源:${$data.statistics.infectSource}

病毒: ${$data.statistics.virus}

传播途径: ${$data.statistics.passWay}

${$data.statistics.remark1}
${$data.statistics.remark2}`,
    });
}



function setGesture(el){
    var obj={}; //定义一个对象
    var istouch=false;
    var start=[];
    el.addEventListener("touchstart",function(e){
        if(e.touches.length>=2){  //判断是否有两个点在屏幕上
            istouch=true;
            start=e.touches;  //得到第一组两个点
            obj.gesturestart&&obj.gesturestart.call(el); //执行gesturestart方法
        };
    },false);
    document.addEventListener("touchmove",function(e){
        // e.preventDefault();
        if(e.touches.length>=2&&istouch){
            var now=e.touches;  //得到第二组两个点
            var scale=getDistance(now[0],now[1])/getDistance(start[0],start[1]); //得到缩放比例，getDistance是勾股定理的一个方法
            var rotation=getAngle(now[0],now[1])-getAngle(start[0],start[1]);  //得到旋转角度，getAngle是得到夹角的一个方法
            e.scale=scale.toFixed(2);
            e.rotation=rotation.toFixed(2);
            obj.gesturemove&&obj.gesturemove.call(el,e);  //执行gesturemove方法
        };
    },false);
    document.addEventListener("touchend",function(e){
        if(istouch){
            istouch=false;
            obj.gestureend&&obj.gestureend.call(el);  //执行gestureend方法
        };
    },false);
    return obj;
};
function getDistance(p1, p2) {
    var x = p2.pageX - p1.pageX,
        y = p2.pageY - p1.pageY;
    return Math.sqrt((x * x) + (y * y));
};
function getAngle(p1, p2) {
    var x = p1.pageX - p2.pageX,
        y = p1.pageY- p2.pageY;
    return Math.atan2(y, x) * 180 / Math.PI;
};