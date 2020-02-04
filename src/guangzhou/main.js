var URL_API = "../api";
var app=new Vue({
    el:'#app',
    data:{
        showHeader:navigator.userAgent.indexOf('MicroMessenger')<0,
        loading:"loading",
        w:'',
        sortBy:'area',
        area:'',
        hospitals: [
        ],
        error_time:0,
    },
    computed:{
        countall(){
            return (this.hospitals.filter(v=>v.mts.length)||[]).length
        },
        countdd(){
            return (this.hospitals.filter(h=>JSON.stringify(h).indexOf('定点')>=0)||[]).length
        },
        cities(){
            document.getElementById("article").scrollTop = 0;
            var c= [... new Set(this.hospitals.filter(v=>v.mts.length&&v.city.indexOf('定点')<0).map(v => v.city))].sort((a,b)=>b-a);
            return c.map(v=>[v,(this.hospitals.filter(h=>JSON.stringify(h).indexOf(v)>0)||[]).length]);
            
        },
        list(){
            document.getElementById("article").scrollTop=0;
            var tmp=this.hospitals;
            if (this.area) {
                tmp = tmp.filter(v => JSON.stringify(v).indexOf(this.area) >= 0) || [];
            }
            if(this.w){
                tmp = tmp.filter(v => JSON.stringify(v).indexOf(this.w) >= 0)||[];
            }
            return tmp;
        },
        mts(){
            return[
              ...new Set(
                this.hospitals
                  .map(v => v.mts.map(v => v.name).join())
                  .join()
                  .split(",")
              )
            ].filter(v=>v);
        },
        listByMt(){
            var lis= this.mts.map(key => {
              var arr = this.hospitals.filter(
                h => JSON.stringify(h).indexOf(key) > 0
              );
              return [key,arr ? arr.length : 0];
            });
            return lis.sort((a,b)=>b[1]-a[1]);
        },
    },
    methods:{
        exportArea(event){
            event.stopPropagation();
            var arr = [
              ["", ...this.mts],
              ...this.hospitals.map(item => [
                item.name,
                this.mts.map(v =>
                  item.mts.map(mt => mt.name).indexOf(v) >= 0 ? "√" : ""
                )
              ])
            ];
            Export2CSV(arr.map(row => row.join()).join("\n"), "area.csv");
        },
        exportMt(e) {
            event.stopPropagation();
            Export2CSV(
              this.listByMt.map(row => row.join()).join("\n"),
              "mt.csv"
            );
        },
        reload(){
            var $this=this;
            $this.error_time++;
            if($this.loading==='fail'){
                if($this.error_time==2){
                    $this.loading = "loading";
                    ajax('GET', './data.js?v=0201', function (res) {
                        try {
                            $this.hospitals = res && eval(res);
                            $this.loading = "success";
                        } catch (error) {
                            $this.hospitals = [];
                            $this.loading = "fail";
                        }
                    }, function () {
                        $this.hospitals = [];
                        $this.loading = "fail";
                    })
                }else{
                    $this.loading = "loading";
                    ajax('GET', URL_API + '/mainList', function (res) {
                        try {
                            $this.hospitals = res && JSON.parse(res);
                            $this.loading = "success";
                        } catch (error) {
                            $this.hospitals = [];
                            $this.loading = "fail";
                        }
                    }, function () {
                        $this.hospitals = [];
                        $this.loading = "fail";
                    })
                }
            }
        },
        setClipboardText(event){
            var copyText = event.target;
            var textArea = document.createElement("textarea");
            textArea.value = copyText.textContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("Copy");
            textArea.remove();
        }
    },
    mounted(){
        var $this=this
        ajax('GET', URL_API +'/mainList',function (res) {
            try {
                $this.hospitals = res && JSON.parse(res);
                $this.loading = "success";
            } catch (error) {
                $this.hospitals = [];
                $this.loading = "fail";
            }
        }, function () {
            $this.hospitals = [];
            $this.loading = "fail";
        })
    }
})


function ajax(method,url,successFn,failFn){
    var request = new XMLHttpRequest();
    request.open(method, url, true);
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            var resp = this.response;
            successFn(resp)
        }else if (this.status>=400){
            failFn(this)
        }
    };
    request.onerror = failFn;
    request.send();
}

function Export2CSV(csv, saveName) {
	var aLink = document.createElement("a");
    aLink.charset = "UTF-8";
    aLink.download = saveName;
    aLink.href = URL.createObjectURL(
      new Blob(["\ufeff" + csv], { type: "text/comma-separated-values" })
    );
    document.body.appendChild(aLink);
    aLink.click();
    document.body.removeChild(aLink);
}
