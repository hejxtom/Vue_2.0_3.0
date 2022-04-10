<template>
   <div>
       <!-- 第三步使用 -->
		<h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
	</div>
</template>

<script>
    //第一步导入
    // import {hunhe} from '../mixin' 
    export default {
        name:'Student',
        data() {
            return {
               name:'张三',
               sex:'男'
            }
        },
        //第二步注册
        // mixins:[hunhe]
    }
</script>

<style>
</style>