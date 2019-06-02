<template>
    <div>
            <div class="tabbar">
		<ul>
           <li>
               <router-link :to="{ name: 'news' }">
				   
                   <p><span class="iconfont back-icon">&#xe60a;</span>新闻</p>
               </router-link>    
           </li>
           <li>
              <router-link :to="{ name: 'weather' }">
                  <p><span class="iconfont back-icon">&#xe61e;</span>天气</p>
              </router-link>    
           </li>
           <li>
               <router-link :to="{ name: 'tool' }">
                   <p><span class="iconfont back-icon">&#xe635;</span>工具</p>
               </router-link>
           </li>
           <li>
               <router-link :to=" { name: 'rests' } ">
                   <p><span class="iconfont back-icon">&#xe607;</span>其他</p>
               </router-link>
           </li>
        </ul>
    
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.tabbar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
    z-index: 9999;
	background-color: #fff;
	ul{
		width: 100%;
		li{
			width: 25%;
			float: left;
            text-align: center;
            p{
                font-size: 12px;
                margin-bottom: 2px;
                span{
                    display: block;
                    font-size: 20px;
                    padding: 5px 0;
                }
            }
			.router-link-exact-active{
				p{
				   color: red;
				}
			}
		}
	}
}
</style>
