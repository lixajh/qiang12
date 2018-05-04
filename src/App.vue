<template>
  <div id="app">
    <div>
      <header class="header">
        <div>
          <h1 style="display:inline-block">锵锵三人行·日历</h1> 
          <div class="menu">
            <mu-icon-button ref="button" @click="toggle"> <icon name="menu" scale="2"></icon></mu-icon-button>
            <mu-popover :trigger="trigger" :open="open" @close="handleClose">
              <mu-menu>
                <mu-menu-item title="关于作者" leftIcon="face"/>
                 <!-- <mu-divider />
                <mu-menu-item title="Help" /> -->
              </mu-menu>
            </mu-popover>
          </div>
        </div>
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


export default {

  name: 'app',

  data(){
    return {
      open: false,
        trigger: null
    }
  },

  mounted () {
    this.trigger = this.$refs.button.$el
  },

  computed: {
    ...mapGetters([
      'songs'
    ]),
    currentPage () {
      return this.$route.path
    },   
  },

  methods:{

    toggle () {
      this.open = !this.open
    },

    handleClose (e) {
      this.open = false
    }
  },

  components: {
      'a-player': Aplayer
  },
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
  z-index: 1;
  width: 100%;
  height: 130px;
  background: #46C1FD;
  color: #ffffff;
  position: fixed;
  text-align: center;
  left: 0;
  top: 0;
}
.header > div > h1 {
  height: 25px;
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
.menu{
  margin-top: 17px;
  height: 15px;
  width: 30px;
  float: right;
  margin-right: 5px;
}

</style>