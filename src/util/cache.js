import Vue from 'vue';

const KEY = 'keywords';
const CITYKEY = 'historyname';

var cache = {
    add:function(keyword){
        if(!keyword){
            return;
        }
        let list = [];
        if(localStorage.getItem(KEY)){
            list = JSON.parse(localStorage.getItem(KEY));
        }
        list.push(keyword);
        localStorage.setItem(KEY,JSON.stringify(list));

    },

    get(){
        return JSON.parse(localStorage.getItem(KEY));
    },

    del(key){
        let list = JSON.parse(localStorage.getItem(KEY));
        list.splice(list.indexOf(key),1);
        localStorage.setItem(KEY,JSON.stringify(list))
    },

    addcity(keyword){ 
        // console.log(keyword)
        if(!keyword){
            return;
        }
        let list = [];
        if(localStorage.getItem(CITYKEY)){
           list = JSON.parse(localStorage.getItem(CITYKEY));
        }
       
        var rs = list.every((item,index)=>{
            return item.id!==keyword.id;
        })
        if(rs){
            list.push(keyword);
        }
       
        localStorage.setItem(CITYKEY,JSON.stringify(list));
        
    }

}


Vue.use({
    install(vue){
        vue.prototype.$cache = cache;
    }
})