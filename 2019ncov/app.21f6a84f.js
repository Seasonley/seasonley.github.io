parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Xiyv":[function(require,module,exports) {
module.exports={disease:"Disease",transmission:"Transmission",symptoms:"Symptoms",abilities:"Abilities",infectivity:"Infectivity",severity:"Severity",lethality:"Lethality",start_location:"Start Location",start_date:"Start Date",infected:"Infected",dead:"Dead",cured:"Cured",suspected:"Suspected",sonfirmed:"Sonfirmed",world:"World",cure:"Cure",data_loading:"Loading",data_loading_desc:"Please wait, while the data is loading.",news:"News",china:"China",gtitle:"This page shows the status of 2019-nCoV with the skin of the Plague Inc.",gdesc:"Click the city to start.You can see more details by clicking on the city name."};
},{}],"iNoo":[function(require,module,exports) {
module.exports={disease:"疾病概况",transmission:"传播途径",symptoms:"发病症状",abilities:"特殊能力",infectivity:"传染性",severity:"严重性",lethality:"致命性",start_location:"开始地点",infected:"受感染",dead:"死亡",cured:"治愈",suspected:"疑似",sonfirmed:"确诊",world:"世界概况",cure:"治愈",data_loading:"载入中",data_loading_desc:"载入数据，请耐心等候。",news:"新闻",china:"中国",gtitle:"该页以瘟疫公司的风格展示2019-nCoV的概况",gdesc:"点击城市开始。你可以通过点击城市名称来查看更多详细资讯。"};
},{}],"ziXZ":[function(require,module,exports) {
module.exports={error:0,message:"",data:{source:"https://3g.dxy.cn/newh5/view/pneumonia",statistics:{id:1,createTime:1579537899e3,modifyTime:1579919299e3,infectSource:"野生动物，可能中华菊头蝠",passWay:"未完全掌握，存在人传人、医务人员感染、一定范围社区传播",imgUrl:"https://img1.dxycdn.com/2020/0123/733/3392575782185696736-73.jpg",dailyPic:"https://img1.dxycdn.com/2020/0125/592/3392846534776649535-73.jpg",summary:"",deleted:!1,countRemark:"全国 确诊 1303 例 疑似 1965 例 治愈 38 例 死亡 41 例",virus:"新型冠状病毒 2019-nCoV",remark1:"病毒是否变异：存在可能",remark2:"疫情是否扩散：是",remark3:"",remark4:"",remark5:"",generalRemark:"疑似病例数来自国家卫健委数据，目前为全国数据，未分省市自治区等"},listByCountry:[{provinceId:"42",provinceName:"湖北省",provinceShortName:"湖北",tags:"确诊 444 例，疑似病例数待确认，治愈 28 例，死亡 17 例",confirmed:729,suspected:0,cured:32,dead:39,comment:"",createTime:1579538652e3,modifyTime:1579704518e3},{provinceId:"44",provinceName:"广东省",provinceShortName:"广东",tags:"确诊 32 例，疑似 1 例，治愈 2 例",confirmed:78,suspected:0,cured:2,dead:0,comment:"",createTime:1579542174e3,modifyTime:1579773067e3},{provinceId:"33",provinceName:"浙江省",provinceShortName:"浙江",tags:"确诊 27 例",confirmed:62,suspected:0,cured:1,dead:0,comment:"",createTime:1579546399e3,modifyTime:1579759106e3},{provinceId:"11",provinceName:"北京市",provinceShortName:"北京",tags:"确诊 22 例 ",confirmed:36,suspected:0,cured:1,dead:0,comment:"",createTime:1579542158e3,modifyTime:1579774464e3},{provinceId:"31",provinceName:"上海市",provinceShortName:"上海",tags:"确诊 16 例，疑似 22 例",confirmed:33,suspected:0,cured:1,dead:0,comment:"",createTime:1579542231e3,modifyTime:1579740884e3},{provinceId:"43",provinceName:"湖南省",provinceShortName:"湖南",tags:"确诊 24 例",confirmed:43,suspected:0,cured:0,dead:0,comment:"",createTime:1579623404e3,modifyTime:1579751736e3},{provinceId:"34",provinceName:"安徽省",provinceShortName:"安徽",tags:"确诊 9 例，疑似 4 例",confirmed:39,suspected:0,cured:0,dead:0,comment:"",createTime:1579598038e3,modifyTime:1579754921e3},{provinceId:"50",provinceName:"重庆市",provinceShortName:"重庆",tags:"确诊 9 例",confirmed:57,suspected:0,cured:0,dead:0,comment:"",createTime:1579612635e3,modifyTime:1579754889e3},{provinceId:"51",provinceName:"四川省",provinceShortName:"四川",tags:"确诊 8 例，疑似 2 例",confirmed:15,suspected:0,cured:0,dead:0,comment:"",createTime:1579542193e3,modifyTime:1579747776e3},{provinceId:"37",provinceName:"山东省",provinceShortName:"山东",tags:"确诊 6 例， 疑似 2 例",confirmed:21,suspected:0,cured:0,dead:0,comment:"",createTime:1579542291e3,modifyTime:1579747746e3},{provinceId:"45",provinceName:"广西壮族自治区",provinceShortName:"广西",tags:"确诊 5 例",confirmed:23,suspected:0,cured:0,dead:0,comment:"",createTime:1579542254e3,modifyTime:1579738494e3},{provinceId:"35",provinceName:"福建省",provinceShortName:"福建",tags:"确诊 5 例 疑似 2 例",confirmed:10,suspected:2,cured:0,dead:0,comment:"福建地区新增疑似 2 例（漳州 1 例；三明 1 例）",createTime:1579688286e3,modifyTime:1579771253e3},{provinceId:"32",provinceName:"江苏省",provinceShortName:"江苏",tags:"确诊 5 例",confirmed:18,suspected:0,cured:1,dead:0,comment:"",createTime:1579709672e3,modifyTime:1579786691e3},{provinceId:"41",provinceName:"河南省",provinceShortName:"河南",tags:"确诊 5 例",confirmed:32,suspected:0,cured:0,dead:0,comment:"",createTime:1579607817e3,modifyTime:1579700317e3},{provinceId:"46",provinceName:"海南省",provinceShortName:"海南",tags:"确诊 5 例，疑似 32 例",confirmed:8,suspected:0,cured:0,dead:0,comment:"",createTime:1579598057e3,modifyTime:1579768905e3},{provinceId:"12",provinceName:"天津市",provinceShortName:"天津",tags:"确诊 4 例",confirmed:8,suspected:0,cured:0,dead:0,comment:"",createTime:15796046e5,modifyTime:1579700289e3},{provinceId:"36",provinceName:"江西省",provinceShortName:"江西",tags:"确诊 7 例",confirmed:18,suspected:0,cured:0,dead:0,comment:"",createTime:157959838e4,modifyTime:1579797267e3},{provinceId:"61",provinceName:"陕西省",provinceShortName:"陕西",tags:"确诊 5 例 疑似 1 例",confirmed:5,suspected:0,cured:0,dead:0,comment:"",createTime:1579745445e3,modifyTime:1579774432e3},{provinceId:"52",provinceName:"贵州省",provinceShortName:"贵州",tags:"确诊 3 例",confirmed:4,suspected:0,cured:0,dead:0,comment:"",createTime:1579588572e3,modifyTime:1579754969e3},{provinceId:"21",provinceName:"辽宁省",provinceShortName:"辽宁",tags:"确诊 3 例",confirmed:12,suspected:0,cured:0,dead:0,comment:"",createTime:1579656427e3,modifyTime:1579751654e3},{provinceId:"66",provinceName:"香港",provinceShortName:"香港",tags:"确诊 2 例 疑似 65 例",confirmed:5,suspected:0,cured:0,dead:0,comment:"",createTime:1579617215e3,modifyTime:1579791987e3},{provinceId:"23",provinceName:"黑龙江省",provinceShortName:"黑龙江",tags:"确诊 2 例",confirmed:9,suspected:0,cured:0,dead:1,comment:"",createTime:1579621178e3,modifyTime:1579777116e3},{provinceId:"67",provinceName:"澳门",provinceShortName:"澳门",tags:"确诊 2 例",confirmed:2,suspected:0,cured:0,dead:0,comment:"",createTime:1579663914e3,modifyTime:1579745548e3},{provinceId:"65",provinceName:"新疆维吾尔自治区",provinceShortName:"新疆",tags:"确诊 2 例 ",confirmed:3,suspected:0,cured:0,dead:0,comment:"",createTime:1579774516e3,modifyTime:1579774516e3},{provinceId:"62",provinceName:"甘肃省",provinceShortName:"甘肃",tags:"确诊 2 例",confirmed:4,suspected:0,cured:0,dead:0,comment:"",createTime:1579757757e3,modifyTime:1579791575e3},{provinceId:"53",provinceName:"云南省",provinceShortName:"云南",tags:"确诊 2 例",confirmed:5,suspected:0,cured:0,dead:0,comment:"",createTime:1579542213e3,modifyTime:1579796948e3},{provinceId:"68",provinceName:"台湾",provinceShortName:"台湾",tags:"确诊 1 例",confirmed:3,suspected:0,cured:0,dead:0,comment:"",createTime:1579617167e3,modifyTime:1579700359e3},{provinceId:"14",provinceName:"山西省",provinceShortName:"山西",tags:"确诊 1 例",confirmed:6,suspected:0,cured:0,dead:0,comment:"",createTime:1579682845e3,modifyTime:1579700369e3},{provinceId:"22",provinceName:"吉林省",provinceShortName:"吉林",tags:"确诊 1 例",confirmed:4,suspected:0,cured:0,dead:0,comment:"",createTime:1579598339e3,modifyTime:1579751679e3},{provinceId:"13",provinceName:"河北省",provinceShortName:"河北",tags:"确诊 1 例，死亡 1 例",confirmed:8,suspected:0,cured:0,dead:1,comment:"",createTime:1579705215e3,modifyTime:1579797215e3},{provinceId:"64",provinceName:"宁夏回族自治区",provinceShortName:"宁夏",tags:"确诊 1 例",confirmed:2,suspected:0,cured:0,dead:0,comment:"",createTime:1579598101e3,modifyTime:1579700276e3},{provinceId:"15",provinceName:"内蒙古自治区",provinceShortName:"内蒙古",tags:"疑似 1 例",confirmed:1,suspected:0,cured:0,dead:0,comment:"",createTime:1579754908e3,modifyTime:1579754908e3},{provinceId:"63",provinceName:"青海省",provinceShortName:"青海",tags:"",confirmed:0,suspected:1,cured:0,dead:0,comment:"西宁新增疑似 1 例",createTime:1579860584e3,modifyTime:1579860584e3}],listByArea:[{provinceName:"湖北省",provinceShortName:"湖北",confirmed:729,suspected:0,cured:32,dead:39,comment:"",cities:[{cityName:"武汉",confirmed:572,suspected:0,cured:32,dead:38},{cityName:"黄冈",confirmed:64,suspected:0,cured:0,dead:0},{cityName:"孝感",confirmed:26,suspected:0,cured:0,dead:0},{cityName:"荆门",confirmed:21,suspected:0,cured:0,dead:0},{cityName:"恩施州",confirmed:11,suspected:0,cured:0,dead:0},{cityName:"荆州",confirmed:10,suspected:0,cured:0,dead:0},{cityName:"仙桃",confirmed:10,suspected:0,cured:0,dead:0},{cityName:"十堰",confirmed:5,suspected:0,cured:0,dead:0},{cityName:"随州",confirmed:5,suspected:0,cured:0,dead:0},{cityName:"天门",confirmed:3,suspected:0,cured:0,dead:0},{cityName:"宜昌",confirmed:1,suspected:0,cured:0,dead:1},{cityName:"鄂州",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"广东省",provinceShortName:"广东",confirmed:78,suspected:0,cured:2,dead:0,comment:"",cities:[{cityName:"深圳",confirmed:15,suspected:0,cured:2,dead:0},{cityName:"珠海",confirmed:8,suspected:0,cured:0,dead:0},{cityName:"广州",confirmed:7,suspected:0,cured:0,dead:0},{cityName:"佛山",confirmed:6,suspected:0,cured:0,dead:0},{cityName:"惠州",confirmed:5,suspected:0,cured:0,dead:0},{cityName:"韶关",confirmed:3,suspected:0,cured:0,dead:0},{cityName:"阳江",confirmed:3,suspected:0,cured:0,dead:0},{cityName:"湛江",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"中山",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"肇庆",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"清远",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"浙江省",provinceShortName:"浙江",confirmed:62,suspected:0,cured:1,dead:0,comment:"",cities:[{cityName:"台州",confirmed:18,suspected:0,cured:0,dead:0},{cityName:"杭州",confirmed:6,suspected:0,cured:0,dead:0},{cityName:"温州",confirmed:6,suspected:0,cured:1,dead:0},{cityName:"宁波",confirmed:5,suspected:0,cured:0,dead:0},{cityName:"嘉兴",confirmed:3,suspected:0,cured:0,dead:0},{cityName:"衢州",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"舟山",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"绍兴",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"金华",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"重庆市",provinceShortName:"重庆",confirmed:57,suspected:0,cured:0,dead:0,comment:"",cities:[{cityName:"万州区",confirmed:3,suspected:0,cured:0,dead:0},{cityName:"巫山县",confirmed:3,suspected:0,cured:0,dead:0},{cityName:"长寿区",confirmed:3,suspected:0,cured:0,dead:0},{cityName:"垫江县",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"永川区",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"九龙坡区",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"渝北区",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"开州区",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"涪陵区",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"大渡口区",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"忠县",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"云阳县",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"奉节县",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"巫溪县",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"秀山县",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"两江新区",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"湖南省",provinceShortName:"湖南",confirmed:43,suspected:0,cured:0,dead:0,comment:"",cities:[{cityName:"长沙",confirmed:8,suspected:0,cured:0,dead:0},{cityName:"永州",confirmed:4,suspected:0,cured:0,dead:0},{cityName:"怀化",confirmed:3,suspected:0,cured:0,dead:0},{cityName:"岳阳",confirmed:3,suspected:0,cured:0,dead:0},{cityName:"娄底",confirmed:3,suspected:0,cured:0,dead:0},{cityName:"郴州",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"株洲",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"湘潭",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"安徽省",provinceShortName:"安徽",confirmed:39,suspected:0,cured:0,dead:0,comment:"",cities:[{cityName:"合肥",confirmed:6,suspected:0,cured:0,dead:0},{cityName:"六安",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"阜阳",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"滁州",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"亳州",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"安庆",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"池州",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"蚌埠",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"北京市",provinceShortName:"北京",confirmed:36,suspected:0,cured:1,dead:0,comment:"",cities:[{cityName:"外地来京人员",confirmed:10,suspected:0,cured:0,dead:0},{cityName:"海淀",confirmed:6,suspected:0,cured:0,dead:0},{cityName:"朝阳",confirmed:5,suspected:0,cured:0,dead:0},{cityName:"西城",confirmed:4,suspected:0,cured:0,dead:0},{cityName:"昌平",confirmed:3,suspected:0,cured:0,dead:0},{cityName:"大兴",confirmed:2,suspected:0,cured:1,dead:0},{cityName:"丰台",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"通州",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"石景山",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"顺义",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"上海市",provinceShortName:"上海",confirmed:33,suspected:0,cured:1,dead:0,comment:"",cities:[]},{provinceName:"河南省",provinceShortName:"河南",confirmed:32,suspected:0,cured:0,dead:0,comment:"",cities:[{cityName:"郑州",confirmed:3,suspected:0,cured:0,dead:0},{cityName:"巩义",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"洛阳",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"三门峡",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"信阳",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"周口",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"广西壮族自治区",provinceShortName:"广西",confirmed:23,suspected:0,cured:0,dead:0,comment:"",cities:[{cityName:"北海",confirmed:6,suspected:0,cured:0,dead:0},{cityName:"桂林",confirmed:6,suspected:0,cured:0,dead:0},{cityName:"柳州",confirmed:3,suspected:0,cured:0,dead:0},{cityName:"河池",confirmed:3,suspected:0,cured:0,dead:0},{cityName:"防城港",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"梧州",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"百色",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"玉林",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"山东省",provinceShortName:"山东",confirmed:21,suspected:0,cured:0,dead:0,comment:"",cities:[{cityName:"青岛",confirmed:4,suspected:0,cured:0,dead:0},{cityName:"威海",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"临沂",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"济南",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"烟台",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"潍坊",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"日照",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"济宁",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"江西省",provinceShortName:"江西",confirmed:18,suspected:0,cured:0,dead:0,comment:"",cities:[{cityName:"抚州",confirmed:4,suspected:0,cured:0,dead:0},{cityName:"南昌",confirmed:3,suspected:0,cured:0,dead:0},{cityName:"九江",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"赣州",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"上饶",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"萍乡",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"新余",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"吉安",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"景德镇",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"宜春",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"江苏省",provinceShortName:"江苏",confirmed:18,suspected:0,cured:1,dead:0,comment:"",cities:[{cityName:"南京",confirmed:3,suspected:0,cured:0,dead:0},{cityName:"苏州",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"连云港",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"扬州",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"南通",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"无锡",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"四川省",provinceShortName:"四川",confirmed:15,suspected:0,cured:0,dead:0,comment:"",cities:[{cityName:"成都",confirmed:7,suspected:0,cured:0,dead:0},{cityName:"广安",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"绵阳",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"达州",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"德阳",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"遂宁",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"雅安",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"辽宁省",provinceShortName:"辽宁",confirmed:12,suspected:0,cured:0,dead:0,comment:"",cities:[{cityName:"沈阳",confirmed:3,suspected:0,cured:0,dead:0},{cityName:"大连",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"朝阳",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"铁岭",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"葫芦岛",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"本溪",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"福建省",provinceShortName:"福建",confirmed:10,suspected:2,cured:0,dead:0,comment:"福建地区新增疑似 2 例（漳州 1 例；三明 1 例）",cities:[{cityName:"福州",confirmed:5,suspected:0,cured:0,dead:0},{cityName:"厦门",confirmed:3,suspected:0,cured:0,dead:0},{cityName:"泉州",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"宁德",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"黑龙江省",provinceShortName:"黑龙江",confirmed:9,suspected:0,cured:0,dead:1,comment:"",cities:[{cityName:"牡丹江",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"哈尔滨",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"大庆",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"绥化",confirmed:1,suspected:0,cured:0,dead:1}]},{provinceName:"海南省",provinceShortName:"海南",confirmed:8,suspected:0,cured:0,dead:0,comment:"",cities:[{cityName:"海口",confirmed:3,suspected:0,cured:0,dead:0},{cityName:"三亚",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"万宁",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"临高县",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"天津市",provinceShortName:"天津",confirmed:8,suspected:0,cured:0,dead:0,comment:"",cities:[]},{provinceName:"河北省",provinceShortName:"河北",confirmed:8,suspected:0,cured:0,dead:1,comment:"",cities:[{cityName:"石家庄",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"沧州",confirmed:1,suspected:0,cured:0,dead:1}]},{provinceName:"山西省",provinceShortName:"山西",confirmed:6,suspected:0,cured:0,dead:0,comment:"",cities:[{cityName:"太原",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"运城",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"大同",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"长治",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"云南省",provinceShortName:"云南",confirmed:5,suspected:0,cured:0,dead:0,comment:"",cities:[{cityName:"昆明",confirmed:3,suspected:0,cured:0,dead:0},{cityName:"西双版纳州",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"丽江市",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"香港",provinceShortName:"香港",confirmed:5,suspected:0,cured:0,dead:0,comment:"",cities:[]},{provinceName:"陕西省",provinceShortName:"陕西",confirmed:5,suspected:0,cured:0,dead:0,comment:"",cities:[{cityName:"西安",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"咸阳",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"安康",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"延安",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"贵州省",provinceShortName:"贵州",confirmed:4,suspected:0,cured:0,dead:0,comment:"",cities:[{cityName:"贵阳",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"铜仁",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"黔南州",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"吉林省",provinceShortName:"吉林",confirmed:4,suspected:0,cured:0,dead:0,comment:"",cities:[{cityName:"长春",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"吉林",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"松原",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"甘肃省",provinceShortName:"甘肃",confirmed:4,suspected:0,cured:0,dead:0,comment:"",cities:[{cityName:"未知",confirmed:2,suspected:0,cured:0,dead:0},{cityName:"兰州",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"白银",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"台湾",provinceShortName:"台湾",confirmed:3,suspected:0,cured:0,dead:0,comment:"",cities:[]},{provinceName:"新疆维吾尔自治区",provinceShortName:"新疆",confirmed:3,suspected:0,cured:0,dead:0,comment:"",cities:[]},{provinceName:"宁夏回族自治区",provinceShortName:"宁夏",confirmed:2,suspected:0,cured:0,dead:0,comment:"",cities:[{cityName:"银川",confirmed:1,suspected:0,cured:0,dead:0},{cityName:"中卫",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"澳门",provinceShortName:"澳门",confirmed:2,suspected:0,cured:0,dead:0,comment:"",cities:[]},{provinceName:"内蒙古自治区",provinceShortName:"内蒙古",confirmed:1,suspected:0,cured:0,dead:0,comment:"",cities:[{cityName:"满洲里",confirmed:1,suspected:0,cured:0,dead:0}]},{provinceName:"青海省",provinceShortName:"青海",confirmed:0,suspected:1,cured:0,dead:0,comment:"西宁新增疑似 1 例",cities:[]}],timeline:[{id:233,pubDate:157991627e4,pubDateStr:"5分钟前",title:"新疆新增1例新型肺炎确诊病例，累计3例",summary:"新疆维吾尔自治区卫健委通报：1月24日0-24时，自治区报告新型冠状病毒感染的肺炎新增确诊病例1例，新增重症病例0例，新增死亡病例0例，新增出院病例0例。其中：新增确诊病例中,乌鲁木齐市1例。截至1月24日24时，自治区累计报告新型冠状病毒感染的肺炎确诊病例3例，重症病例0例，死亡病例0例，出院病例0例。",infoSource:"人民日报",sourceUrl:"https://m.weibo.cn/detail/4464554337900358",provinceId:"65",provinceName:"新疆维吾尔自治区",createTime:1579916624e3,modifyTime:1579916624e3},{id:232,pubDate:1579915973e3,pubDateStr:"10分钟前",title:"吉林累计确诊4例病例",summary:"2020年1月24日0-24时，吉林省报告新型冠状病毒感染的肺炎新增确诊病例1例，为武汉市输入吉林市的病例。 截至1月24日24时，吉林省累计报告新型冠状病毒感染的肺炎病例4例（均为输入病例），其中长春市重症1例，吉林市2例，松原市1例。 目前累计追踪到密切接触者52人，均在接受医学观察。",infoSource:"央视新闻",sourceUrl:"https://m.weibo.cn/status/4464553159167731",provinceId:"22",provinceName:"吉林省",createTime:1579916308e3,modifyTime:1579916308e3},{id:231,pubDate:1579915971e3,pubDateStr:"10分钟前",title:"河南新增23例新型肺炎确诊病例，累计32例",summary:"河南省卫健委通报：1月24日0-24时，8市（县）报告新型冠状病毒感染的肺炎新增确诊病例23例。平顶山市、新乡市、南阳市、驻马店市、固始县为报告首例确诊病例。其中：平顶山市1例、新乡市1例、南阳市8例、驻马店市2例、固始县1例。其他地市新增确诊病例中，郑州市3例、周口市3例、信阳市4例。",infoSource:"人民日报",sourceUrl:"https://m.weibo.cn/status/4464553351466229",provinceId:"41",provinceName:"河南省",createTime:1579916268e3,modifyTime:1579916268e3},{id:230,pubDate:1579915653e3,pubDateStr:"16分钟前",title:"澳大利亚发现首例确诊病例",summary:"25日，澳大利亚确诊第一例感染新型冠状病毒患者，目前在墨尔本医院内被隔离。据悉，感染者是一名华裔男性，年龄为50多岁，近期曾去过武汉。（总台央视记者王聪）",infoSource:"央视新闻",sourceUrl:"https://m.weibo.cn/detail/4464552194489565",provinceId:"1",createTime:1579915944e3,modifyTime:1579915944e3},{id:229,pubDate:1579915303e3,pubDateStr:"22分钟前",title:"广东发现13起家庭聚集性疫情，1起工作同事聚集性疫情",summary:"2020年1月24日，广东省报告新型冠状病毒感染的肺炎新增确诊病例25例，其中重症病例1例，无危重病例。累计发现聚集性疫情14起，13起为家庭聚集，1起为工作同事聚集。无医务人员感染病例。",infoSource:"央视新闻",sourceUrl:"https://m.weibo.cn/status/4464550185662838",provinceId:"44",provinceName:"广东省",createTime:1579915725e3,modifyTime:1579915725e3},{id:228,pubDate:1579915238e3,pubDateStr:"23分钟前",title:"浙江新增19例新型肺炎确诊病例，累计62例",summary:"浙江省卫健委通报：1月24日0-24时，浙江省报告新型冠状病毒感染的肺炎新增确诊病例19例，新增重症病例1例。其中： 新增确诊病例中，杭州市6例、宁波市1例、温州市4例、嘉兴市1例、绍兴市3例、舟山市1例、金华市1例、台州市2例；新增1例重症病例来自杭州市。 截至1月24日24时，浙江省累计报告新型冠状病毒感染的肺炎确诊病例62例，重症病例7例（累计9例，其中2例已转轻症）",infoSource:"人民日报",sourceUrl:"https://m.weibo.cn/status/4464550181459481",provinceId:"33",provinceName:"浙江省",createTime:1579915345e3,modifyTime:1579915345e3},{id:227,pubDate:1579915056e3,pubDateStr:"26分钟前",title:"贵州新增1例新型肺炎确诊病例，累计4例",summary:"1月24日0时至24时，贵州省新型冠状病毒感染的肺炎疫情新增1例确诊病例。截至24日24时，贵州省全省累计报告新型冠状病毒感染的肺炎病例4例。其中，贵阳市1例，铜仁市2例，黔南州1例。4名患者病情稳定。目前，追踪到密切接触者91名，已解除医学观察0人，尚有91人正在接受医学观察。",infoSource:"人民日报",sourceUrl:"https://m.weibo.cn/status/4464549333937794",provinceId:"52",provinceName:"贵州省",createTime:1579915159e3,modifyTime:1579915159e3},{id:226,pubDate:1579914707e3,pubDateStr:"31分钟前",title:"安徽新增24例新型肺炎确诊病例，累计39例",summary:"安徽省卫健委通报：1月24日0-24时，安徽省新增报告新型冠状病毒感染的肺炎确诊病例24例。其中合肥市4例、铜陵市3例、安庆市3例、马鞍山市4例、阜阳市5例、亳州市3例，芜湖市1例、滁州市1例。铜陵市、马鞍山市、芜湖市为首次病例报告。",infoSource:"人民日报",sourceUrl:"https://m.weibo.cn/status/4464548171955429",provinceId:"34",provinceName:"安徽省",createTime:1579915102e3,modifyTime:1579915102e3},{id:225,pubDate:1579914376e3,pubDateStr:"37分钟前",title:"黑龙江新增5例新型肺炎确诊病例，累计9例",summary:"黑龙江省卫健委通报：11月24日0-24时, 黑龙江省报告新型冠状病毒感染的肺炎新增确诊病例5例。 截至1月24日24时,黑龙江省累计报告新型冠状病毒感染的肺炎确诊病例9例，其中：哈尔滨市6例、牡丹江市1例、大庆市1例、绥化市1例；死亡病例1例为绥化市确诊病例。 目前追踪到密切接触者465人,已解除医学观察64人,尚有401人正在接受医学观察。",infoSource:"人民日报",sourceUrl:"https://m.weibo.cn/status/4464546918411960",provinceId:"23",provinceName:"黑龙江省",createTime:1579914889e3,modifyTime:1579914889e3},{id:224,pubDate:1579914217e3,pubDateStr:"40分钟前",title:"湖南新增19例新型肺炎确诊病例，累计43例",summary:"记者从湖南省卫健委获悉，2020年1月24日0-24时，湖南省报告新型冠状病毒感染的肺炎新增确诊病例19例。新增重症病例9例，新增死亡病例0例，新增出院病例0例。截至1月24日24时，湖南省累计报告新型冠状病毒感染的肺炎确诊病例43例，重症病例15例，死亡病例0例，出院病例0例。",infoSource:"人民日报",sourceUrl:"https://m.weibo.cn/status/4464546108011479",provinceId:"43",provinceName:"湖南省",createTime:1579914846e3,modifyTime:1579914846e3},{id:223,pubDate:1579914121e3,pubDateStr:"41分钟前",title:"重庆新增30例新型肺炎确诊病例，累计57例",summary:"重庆市卫健委通报：1月24日0—24时，重庆市报告新型冠状病毒感染的肺炎新增确诊病例30例，新增重症病例3例。 截至1月24日24时，重庆市累计报告新型冠状病毒感染的肺炎确诊病例57例，其中重症病例8例，危重1例。3起无湖北居住史或旅行史，但均为湖北输入病例家庭。",infoSource:"人民日报",sourceUrl:"https://m.weibo.cn/status/4464545751772820",provinceId:"50",provinceName:"重庆市",createTime:1579914753e3,modifyTime:1579914753e3},{id:222,pubDate:1579913621e3,pubDateStr:"50分钟前",title:"河北新增6例新型肺炎确诊病例，累计8例",summary:"河北省卫健委通报：1月24日0-24时，河北省报告新型冠状病毒感染的肺炎新增确诊病例6例。其中：保定市、承德市各1例，为报告首例确诊病例；其他新增确诊病例石家庄市3例、沧州市1例。截至1月24日24时，河北省累计报告确诊病例8例，死亡1例。确诊病例中，石家庄市4例、沧州市2例、保定市1例、承德市1例；死亡病例中，沧州市1例。目前追踪到密切接触者172人，均正在接受隔离医学观察。",infoSource:"人民日报",sourceUrl:"https://m.weibo.cn/status/4464543466351050",provinceId:"13",provinceName:"河北省",createTime:1579913831e3,modifyTime:1579913831e3},{id:221,pubDate:157991308e4,pubDateStr:"59分钟前",title:"江苏新增9例新型肺炎确诊病例，累计18例",summary:"江苏省卫健委通报：1月24日0-24时，江苏省报告新型冠状病毒感染的肺炎新增确诊病例9例，新增出院病例1例。其中：常州市5例，盐城市1例，宿迁市1例，为常州市、盐城市、宿迁市首次报告确诊病例。其他2个设区市新增确诊病例中，南京市1例，苏州市1例。新增出院病例中，苏州市1例。截至1月24日24时，江苏省累计报告新型冠状病毒感染的肺炎确诊病例18例，无重症病例，出院病例1例。",infoSource:"人民日报",sourceUrl:"https://m.weibo.cn/status/4464541205003436",provinceId:"32",provinceName:"江苏省",createTime:1579913677e3,modifyTime:1579913677e3},{id:220,pubDate:1579912563e3,pubDateStr:"1小时前",title:"山东新增6例确诊病例，山东省累计报告肺炎确诊病例21例",summary:"1月25日，山东省卫生健康委员会关于新型冠状病毒感染的肺炎通报情况称，2020年1月24日12-24时，山东省报告新型冠状病毒感染的肺炎新增确诊病例6例，其中：德州、聊城市各首次报告1例确诊病例，济宁、威海、日照、临沂市各新增1例确诊病例。5例为输入性病例，1例为密切接触者感染的确诊病例。",infoSource:"央视新闻",sourceUrl:"https://m.weibo.cn/status/4464539313696603",provinceId:"37",provinceName:"山东省",createTime:1579913053e3,modifyTime:1579913053e3},{id:219,pubDate:1579911052e3,pubDateStr:"1小时前",title:"上海新增13例确诊病例",summary:"1月24日0—24时，上海市新增新型冠状病毒感染的肺炎确诊病例13例。截至1月24日24时，上海市累计发现确诊病例33例，其中30例目前病情平稳，2例病情危重，1例出院。另有72例疑似病例正在排查中。",infoSource:"央视新闻",sourceUrl:"https://m.weibo.cn/detail/4464532745406678",provinceId:"31",provinceName:"上海市",createTime:1579912654e3,modifyTime:1579912654e3},{id:218,pubDate:1579910767e3,pubDateStr:"1小时前",title:"全国确诊1287例新型肺炎病例",summary:"1月24日0-24时，29个省（区、市）报告新增确诊病例444例，新增死亡患者16例。新增治愈出院3例。19个省（区、市）报告新增疑似病例1118例。全国共有30个省（区、市）报告疫情，新增青海省。",infoSource:"央视新闻",sourceUrl:"https://m.weibo.cn/status/4464531730757559?",provinceId:"11",provinceName:"北京市",createTime:1579912608e3,modifyTime:1579912608e3},{id:215,pubDate:1579906791e3,pubDateStr:"2小时前",title:"山西新增5例新型肺炎确诊病例",summary:"1月25日记者从山西省卫健委获悉，2020年1月23日18时至1月24日24时，山西省报告新型冠状病毒感染的肺炎新增确诊病例5例，其中太原市1例、大同市1例、长治市1例、运城市2例，且大同市、长治市、运城市为首次报告确诊病例。 截至1月24日24时，山西省累计报告新型冠状病毒感染的肺炎确诊病例6例。其中太原市2例、大同市1例、长治市1例、运城市2例。目前已追踪到密切接触者30人，正在接受医学观察。",infoSource:"央视新闻",sourceUrl:"https://m.weibo.cn/status/4464499886960966?",provinceId:"14",provinceName:"山西省",createTime:1579909062e3,modifyTime:1579909062e3},{id:217,pubDate:1579906485e3,pubDateStr:"2小时前",title:"法国确诊2例新型肺炎病例，欧洲范围内首次发现",summary:"当地时间24日晚，法国卫生部长布赞确认，法国确诊两例新型冠状病毒感染病例。第1例在波尔多、第2例在巴黎发现，这是欧洲范围内首次发现新型冠状病毒感染病例。 据介绍，波尔多的病人48岁，不久前刚从武汉返回法国，23日发现症状后被送医并隔离，自返法以来与十多余人有过接触。另一名在巴黎发现的病人目前相关信息较少，只知道曾经前往中国旅行过，目前已在医院被隔离。",infoSource:"人民日报",sourceUrl:"https://m.weibo.cn/status/4464513665466775?",provinceId:"1",createTime:1579909173e3,modifyTime:1579909173e3},{id:216,pubDate:1579905054e3,pubDateStr:"3小时前",title:"辽宁新增8例确诊病例，累计报告输入性新型冠状病毒感染的肺炎确诊病例12例",summary:"2020年1月24日0时—24时，辽宁新增8例输入性新型冠状病毒感染的肺炎确诊病例，其中6例为重症病例。 截至2020年1月24日24时，辽宁省累计报告输入性新型冠状病毒感染的肺炎确诊病例12例，重症病例9例。其中确诊病例中，沈阳市3例、大连市2例、本溪市1例、铁岭市2例、朝阳市2例、葫芦岛市2例。目前12名患者均在定点医疗机构隔离治疗，病情稳定。全部248名密切接触者均在实施医学观察中。",infoSource:"央视新闻",sourceUrl:"https://m.weibo.cn/status/4464507306976233?",provinceId:"21",provinceName:"辽宁省",createTime:1579909117e3,modifyTime:1579909117e3},{id:214,pubDate:1579902579e3,pubDateStr:"3小时前",title:"湖北新增180例新型肺炎确诊病例，肺炎病例729例",summary:"2020年1月24日0时-24时，湖北省新增新型冠状病毒感染的肺炎病例180例（武汉市新增77例、十堰市新增4例、荆门市新增13例、孝感市新增4例、黄冈市新增52例、荆州市新增2例、仙桃市新增8例，随州市首次发现5例、恩施州首次发现11例、鄂州市首次发现1例、天门市首次发现3例）。全省新增死亡15例,全为武汉市病例。武汉市治愈出院1例。",infoSource:"央视新闻",sourceUrl:"https://m.weibo.cn/status/4464497211305006?",provinceId:"42",provinceName:"湖北省",createTime:1579908975e3,modifyTime:1579908975e3},{id:212,pubDate:1579887884e3,pubDateStr:"7小时前",title:"甘肃新增2例，甘肃累计确认4例",summary:"截至1月25日0时，甘肃累计确诊4例新型冠状病毒感染的肺炎病例，比23日增加两例。1月24日新增2例确诊病例，新增病例均已隔离治疗，并对密切接触者开展追踪和隔离医学观察",infoSource:"央视新闻",sourceUrl:"https://weibo.com/2656274875/Ir2gr0bZ0?from=page_1002062656274875_profile&wvr=6&mod=weibotime&type=comment#_rnd1579888179453",provinceId:"62",provinceName:"甘肃省",createTime:1579908416e3,modifyTime:1579908416e3},{id:210,pubDate:1579885902e3,pubDateStr:"8小时前",title:"广西新增确诊10例",summary:"1月24日0-24时，广西报告新型冠状病毒感染的肺炎新增确诊病例10例。目前全区累计报告新型冠状病毒感染的肺炎确诊病例23例，其中柳州市3例、桂林市6例、梧州市1例、北海市6例、百色市1例、河池市3例、玉林市1例、防城港市2例。",infoSource:"央视新闻",sourceUrl:"https://weibo.com/2656274875/Ir21c32jA?from=page_1002062656274875_profile&wvr=6&mod=weibotime&type=comment#_rnd1579887050277",provinceId:"45",provinceName:"广西壮族自治区",createTime:1579887062e3,modifyTime:1579887062e3},{id:211,pubDate:1579885895e3,pubDateStr:"8小时前",title:"江西新增确诊病例11例",summary:"1月24日0-24时，江西省报告新型冠状病毒感染的肺炎新增确诊病例11例。其中抚州市3例、赣州市2例、上饶市2例、南昌市1例、九江市1例、景德镇市1例、宜春市1例。截至1月24日24时，江西省累计报告新型冠状病毒感染的肺炎确诊病例18例（含重症病例4例）。",infoSource:"央视新闻",sourceUrl:"https://weibo.com/2656274875/Ir236dQuh?from=page_1002062656274875_profile&wvr=6&mod=weibotime&type=comment#_rnd1579886083751",provinceId:"36",provinceName:"江西省",createTime:1579887739e3,modifyTime:1579887739e3},{id:213,pubDate:1579885505e3,pubDateStr:"8小时前",title:"除夕夜空军3架运输机飞抵武汉",summary:"据空军发布：1月24日22时20分，空军1架伊尔-76飞机从西安咸阳机场紧急起飞，运载空军军医大学143名医护人员飞赴武汉，支援湖北地区防控新型冠状病毒感染的肺炎疫情。空军航空兵某师派出3架军用运输机，连夜分赴上海、西安、重庆执行医疗队员和医疗物资器材紧急空运任务。",infoSource:"人民日报",sourceUrl:"https://m.weibo.cn/status/4464425757239056?",provinceId:"61",provinceName:"陕西省",createTime:1579908506e3,modifyTime:1579908506e3},{id:209,pubDate:1579883065e3,pubDateStr:"9小时前",title:"江苏启动一级响应",summary:"根据《江苏省突发公共卫生事件应急预案》，为加强新型冠状病毒感染的肺炎疫情防控工作，有效防止疫情扩散和蔓延，保障人民群众的身体健康和生命安全，省人民政府决定，自2020年1月24日24时起，启动突发公共卫生事件一级响应，实行最严格的科学防控措施。终止日期由省人民政府另行公告。",infoSource:"人民日报",sourceUrl:"https://m.weibo.cn/status/4464415472371628?",provinceId:"32",provinceName:"江苏省",createTime:1579883878e3,modifyTime:1579883878e3}]}};
},{}],"vZyd":[function(require,module,exports) {
var t={},e=0,n=0,i=0,a=0;t.en=require("./i18n/en.json"),t.zh=require("./i18n/zh.json");var o=require("./data.json").data;function r(){var e="";for(var n in t[htmlDom.lang])e+="[lang=".concat(n,']::before{content:"').concat(t[htmlDom.lang][n],'"}');langStyle.innerText=e}function c(t,e,n){t.onclick=function(t){t.stopPropagation(),e.setAttribute("open","open")},n.onclick=function(t){t.stopPropagation(),e.removeAttribute("open")}}function s(t){t.forEach(function(t){var o=document.getElementById(t.provinceShortName);o&&o.setAttribute("fill",t.confirmed+t.dead>100?"#73181B":t.confirmed>9?"#E04B49":t.confirmed>0?"#F08E7E":t.suspected>0?"#F2D7A2":"#fff"),o&&o.setAttribute("confirmed",t.confirmed||0),o&&o.setAttribute("dead",t.dead||0),o&&o.setAttribute("suspected",t.suspected||0),o&&o.setAttribute("cured",t.cured||0),e+=t.confirmed||0,n+=t.suspected||0,i+=t.cured||0,a+=t.dead||0})}function d(t,e){var n=t.template||t.innerHTML;t.template=n;var i=e.map(function(t){return n.replace(/\{[^}]+\}/g,function(e){return t[e.slice(1,-1)]})}).join("");t.innerHTML=i}function u(t){for(k in t)"[object Array]"===Object.prototype.toString.call(t[k])?d(window[k],t[k]):window[k].innerText=t[k]}function l(t,e){var n=new XMLHttpRequest;n.open("GET",t,!0),n.onload=function(){this.status>=200&&this.status<400&&e(this.response)},n.send()}function g(t){var e={},n=!1,i=[];return t.addEventListener("touchstart",function(a){a.touches.length>=2&&(n=!0,i=a.touches,e.gesturestart&&e.gesturestart.call(t))},!1),document.addEventListener("touchmove",function(a){if(a.touches.length>=2&&n){var o=a.touches,r=m(o[0],o[1])/m(i[0],i[1]),c=f(o[0],o[1])-f(i[0],i[1]);a.scale=r.toFixed(2),a.rotation=c.toFixed(2),e.gesturemove&&e.gesturemove.call(t,a)}},!1),document.addEventListener("touchend",function(i){n&&(n=!1,e.gestureend&&e.gestureend.call(t))},!1),e}function m(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)}function f(t,e){var n=t.pageX-e.pageX,i=t.pageY-e.pageY;return 180*Math.atan2(i,n)/Math.PI}l("../PlagueInc/src/img/china.svg",function(t){document.body.innerHTML=t+document.body.innerHTML,r();var e=document.querySelector("#mapChina");g(e).gesturemove=function(t){t.preventDefault(),t.stopPropagation(),e.style.transform="scale("+t.scale+") rotate("+t.rotation+"deg)"},windowOnload()}),windowOnload=function(){(navigator.language||navigator.browserLanguage).toLowerCase().indexOf("zh")<0&&(htmlDom.lang="en"),c(btnNews,dialogNews,btnCloseNews),c(btnSick,dialogSick,btnCloseSick),c(btnDna,dialogSick,btnCloseSick),c(btnCity,dialogCity,btnCloseCity),c(dialogAlert,dialogAlert,btnCloseAlert),[btnCloseNews,btnCloseAlert,btnCity,btnNews,btnSetting,btnSick,btnDna,btnCloseSick,btnCloseCity].forEach(function(t){return t.ontouchstart=function(){return window.navigator.vibrate(50)}}),btnSetting.ontouchstart=function(){htmlDom.setAttribute("lang","zh"===htmlDom.lang?"en":"zh"),r()},bubStart.ontouchstart=function(r){r.stopPropagation(),window.navigator.vibrate(200),r.target.setAttribute("hidden",!0),s(o.listByCountry),document.body.addEventListener("click",function(r){var c=r.target;"path"==c.tagName?(window.navigator.vibrate(50),u({$cityName:c.id,$_cityName:c.id,$globalCity:c.id,d_Infected:c.getAttribute("confirmed")||0,d_Dead:c.getAttribute("dead")||0,$suspected:c.getAttribute("suspected")||0,$cured:c.getAttribute("cured")||0,i_cure:c.getAttribute("cured")||0,i_infected:c.getAttribute("confirmed")||0,i_dead:c.getAttribute("dead")||0,$cityList:(o.listByArea.find(function(t){return t.provinceShortName===c.id})||{cities:[]}).cities})):"BODY"!=c.tagName&&"svg"!=c.tagName||u({$cityName:t[htmlDom.lang].china,$_cityName:t[htmlDom.lang].china,$globalCity:t[htmlDom.lang].china,d_Infected:e||0,d_Dead:a||0,$suspected:n,$cured:i,i_cure:i,i_infected:e,i_dead:a,$cityList:[]})})},u({$date:(new Date).toLocaleDateString(htmlDom.lang),$btnNewsTitle:o.timeline[0].title+"\n\n"+o.timeline[1].title+"\n\n"+o.timeline[2].title+"\n\n"+o.timeline[3].title,$newsList:o.timeline,$pubDate:(new Date).toLocaleString(htmlDom.lang),$globalCity:t[htmlDom.lang].china,d_Infected:e,d_Dead:a,$suspected:n,$cured:i,$cityName:t[htmlDom.lang].china,i_cure:i,i_infected:e,i_dead:a,$cityList:[],$tsp:"传染源:".concat(o.statistics.infectSource,"\n\n病毒: ").concat(o.statistics.virus,"\n\n传播途径: ").concat(o.statistics.passWay,"\n\n").concat(o.statistics.remark1,"\n").concat(o.statistics.remark2)})};
},{"./i18n/en.json":"Xiyv","./i18n/zh.json":"iNoo","./data.json":"ziXZ"}]},{},["vZyd"], null)