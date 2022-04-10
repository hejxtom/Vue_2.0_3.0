<template>
   <div>
       <h1 ref="tilte">{{msg}}</h1>
       <button @click="showDOM" ref="btn">点我输出DOM元素</button>
       <SchoolName ref="sch"/>
   </div>
</template>

<script>
    import SchoolName from './components/School.vue'
    export default {
        name:'App',
        components:{
            SchoolName
        },
        data() {
            return {
                msg:'欢迎学习Vue！'
            }
        },
        methods: {
            showDOM(){
                console.log(this.$refs.sch)
                console.log(this.$refs.tilte)
                console.log(this.$refs.btn)
            }
        },
    }
</script>