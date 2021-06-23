const fs = require("fs");
const axios = require("axios");
console.log("start get functions...");
console.log('get https://dax.guide nav')
axios.get('https://dax.guide').then(({data:navPageStr})=>{
  let res=navPageStr.split('<nav class="groups-panel">')[1].split('</nav>')[0];
  fs.writeFileSync(__dirname+'/../dax/nav.html',res)
}).catch(console.log)
axios
  .get("https://dax.guide/functions/")
  .then(({data:menuPageStr}) =>{
    let flist=menuPageStr.match(/href="([^"]+)" class="ajax"/g).map(v=>v.slice(24,-15));
    console.log('find '+flist.length+' functions')
    flist.length>0 && fs.writeFileSync(__dirname+'/../dax/function.json',JSON.stringify(flist))
    flist.forEach(fnName => {
        try {  
            if(fs.statSync(__dirname+'/../dax/functions/'+fnName+'.html').isFile()){
                return;
            }
        } catch (error) {
            
        }
        console.log('- '+fnName)
        axios.get("https://dax.guide/"+fnName+"/").then(({data:strPage})=>{
            let res=strPage.split('class="left-container">')[1].split('<aside class="right-container"')[0]
            fs.writeFileSync(__dirname+'/../dax/functions/'+fnName+'.html',res)
        }).catch(console.log)
    });
  })
  .catch(console.log);

// let res=strPage.split('class="left-container">')[1].split('<aside class="right-container"')[0]
// console.log(res.slice(0,200),res.slice(-200))
// const axios = require('axios');
// axios.get('https://dax.guide/functions/')
// let res=strPage.split('class="left-container">')[1].split('<aside class="right-container"')[0]
// console.log(res.slice(0,200),res.slice(-200))
