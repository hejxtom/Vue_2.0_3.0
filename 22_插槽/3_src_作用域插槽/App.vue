<template>
  <div class="container">

    <Category title="游戏">
      <template scope="atguigu">
        <ul>
          <li v-for="(game,index) in atguigu.games" :key="index">{{game}}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        <ul>
          <li v-for="(game,index) in games" :key="index">{{game}}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="{games}">
        <ul>
          <li v-for="(game,index) in games" :key="index">{{game}}</li>
        </ul>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'
export default {
  name: 'App',
  components:{
    Category
  }
}
</script>
<style scoped>
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
	h4{
		text-align: center;
	}
</style>
