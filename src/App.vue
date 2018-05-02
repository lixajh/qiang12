<template>
  <div id="app">
    <div>
    <header class="header">
      <h1>锵锵三人行·日历</h1>
      <template v-if="songs">
       
          <a-player theme="#46C1FD" :music="songs"></a-player>
        
      </template>
    </header>
    </div>
    <main class="content">
      <transition name="fade" mode="out-in">
        <router-view ></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Aplayer from 'vue-aplayer'


var data = { 
           }
export default {

  
  name: 'app',
  computed: {

    ...mapGetters([
      'songs'
     
    ]),

    currentPage () {
      return this.$route.path
    },

   
    
  },
  components: {
      'a-player': Aplayer
  },
 
   beforeMount () {
    //  this.$store.commit('SET_RADIO_DATE', '2017-12-12')

  },
  watch:{
    songs:function(after,before){
      
      // data.csongdate = this.$store.state.radioDate
  //   if(data.useone){
      // if(before === null){
      //   return
      // }
      
     
     
    }}
    ,


  }

</script>

<style lang="scss">

@import './sass/mixin/flexbox.scss';

* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 15px;
  padding-top: 130px;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; 
}
h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
  font-size: 1rem;
}
ul {
  padding: 10px;
}
li {
  margin: 10px 10px;
}
a {
  color: #42b983;
}
@media (min-width: 800px) {
  #app,
  main {
    max-width: 600px;
    margin: 0 auto;
    height: 100%;
  }
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}
.header {
  z-index: 100;
  width: 100%;
  height: 130px;
  background: #46C1FD;
  color: #ffffff;
  position: fixed;
  text-align: center;
  left: 0;
  top: 0;
}
.header > h1 {
  height: 40px;
  box-sizing: border-box;
  padding: .65rem 0 0 0;
  font-size: 1.425rem;
}
nav.inner {
  height: 40px;
  box-sizing: border-box;
  padding: .325rem 0 0;
  font-size: 1rem;
}
nav.inner > ul {
  @include flexbox();
  @include flex-flow(row, nowrap);
  box-sizing: border-box;
  overflow: hidden;
  height: 100%;
}
nav.inner > ul > li {
  @include flex(1);
  @include flexbox();
  @include align-items(center);
  @include justify-content(center);
  box-sizing: border-box; 
  padding: .325rem .325rem 0;
  color: #ffffff;
}
nav.inner > ul > li.current {
  background: #ffffff;
  color: #46C1FD;
  border: 2px solid #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: none;
}
body:before {

  content: ' ';
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url("./assets/1.png") center 0 no-repeat;
  background-size: cover;
}
.fade-enter-active, .fade-leave-active {
  transition: all .15s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

</style>