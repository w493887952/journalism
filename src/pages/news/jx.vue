<template>
    <div class="jx">
    
       <navv/>

            <ul>
        <li v-for="item in www" :key="item.cid">
              <a :href="item.url_3w"></a>
            <p>{{item.title}}</p> 
            <img :src="item.imgsrc">
            <div class="btm">
                <i>{{item.source}}</i><em>跟帖：{{item.votecount}}</em>
            </div>
        </li>
        </ul> 



    </div>
</template>

<script>
import axios from 'axios'

import navv from "@/pages/news/nav"

  export default {
       components: {
       navv
       },
                 data() {
              return {
                www:[],
              };
      },
       methods: {
            getclassify () {
                axios.get('/api/nc/article/list/T1467284926140/0-20.html')
                .then((response) => {
                                
                                console.log(response.data);
                                this.www = response.data.T1467284926140;
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
            }, 
       },
         mounted () {
           this.getclassify()
  }
  }
</script>

<style lang="scss" scoped>
.jx{
     ul{
       li{
           width: 95%;
           border-bottom: 1px solid #cccccc;
           margin: 10px auto;
           position: relative;

           p{
               font-size: 20px;
               
           }
           img{
               width: 100%;
               height: 150px;
               margin-top: 5px;
           }
           a{
               display: block;
               position: absolute;
               z-index: 10;
               width: 100%;
               height: 100%;
               
           }
       }
       .btm{
           width: 100%;
           display: flex;
           justify-content: space-between;
           color: #cccccc;
           padding-top:10px;
           padding-bottom: 10px;
           }
       
   }
}
</style>