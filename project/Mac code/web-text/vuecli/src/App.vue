<template>
  <div id="app">
    <h1>Hello</h1>
    <!-- <img src="./assets/logo.png"> -->
    <div>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="home">首页</button>
    </div>
    <div>
      <router-link to='/'>首页</router-link>
      <router-link to='/test'>测试</router-link>
      <router-link :to="{name: 'test1', params: {name: 'zhangsan', age: 20}}">测试子路由1</router-link>
      <router-link to='/test/test2'>测试子路由2</router-link>
      <router-link to='/testurl/5/lisi'>测试URL</router-link>
      <router-link to='/home/8/wangwu'>redirect</router-link>
      <router-link to='/abc'>alias</router-link>
      <router-link to='/counter'>vuex</router-link>
    </div>
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    back(){
      this.$router.go(-1);
    },
    forward(){
      this.$router.go(1);
    },
    home(){
      this.$router.push('/');
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-leave{
  opacity: 0;
}
.fade-enter-active{ 
  transition: opacity 0.5s;
}
.fade-leave-active{ 
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
