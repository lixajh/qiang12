<template>
  <div id="app">
    <div>
      <header class="header">
        <div>
          <h1 style="display:inline-block">锵锵三人行·日历</h1> 
          <div class="menu">
            <mu-icon-button ref="menuBtn" @click="menuToggle"> <icon name="menu" scale="2"></icon></mu-icon-button>
            <mu-popover :trigger="menuTrigger" :open="menuOpen" @close="handleClose">
              <mu-menu>
                <mu-menu-item @click="autherSaysClick" title="作者的话" leftIcon="face"/>
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

    <mu-dialog :open="autherSaysShow" title="作者的话" @close="autherSaysClose">
   <div>我是2010年才开始的锵锵观众，算不上老资格。之后陆陆续续听了能找到的05年以来的所有节目，觉得听旧闻比听新闻有趣多了。
     去年九月锵锵停播，做了这个小站，每天晚上11点更新12年前的当天节目，这样又可以更新12年了。</div>
    <div>节目的资源是这些年大家分享的，整理的过程中发现有些节目时长不够，也有不同人收集的资源同一天的音频内容不一样的，大家在收听过程中发现错漏可以发邮件联系我，我会尽快更正。
      大家有什么建议和意见也请给我发邮件。因为像文涛一样抠门，整个项目成本不到一百块，网站访问速度常常不稳定，我是不会升级的(捂脸哭）。</div>
      <div>最后感谢文涛，文道，子东，家辉，马爷，王蒙老爷子，査老师，轶君，幼婷等锵锵历年来的嘉宾和刘长乐等诸位老板和节目组的各位工作人员。重塑三观，谢谢你们！</div>
      <br>
      <div style="float:right" ><strong>lixajh@gmail.com</strong></div>
      <mu-flat-button slot="actions" primary @click="autherSaysClose" label="确定"/>
  </mu-dialog>

  </div> 
</template>

<script>
import { mapGetters } from 'vuex'
import Aplayer from 'vue-aplayer'


export default {

  name: 'app',

  data(){
    return {
        menuOpen: false,
        menuTrigger: null,
        autherSaysShow:false
    }
  },

  mounted () {
    this.menuTrigger = this.$refs.menuBtn.$el
  },

  computed: {
    ...mapGetters([
      'songs'
    ]),
    currentPage () {
      return this.$route.path;
    },   
  },

  methods:{

    menuToggle () {
      this.menuOpen = !this.menuOpen;
    },

    handleClose (e) {
      this.menuOpen = false;
    },
    autherSaysClick(){
      this.menuOpen = false;
        this.autherSaysShow = true;
    },
    autherSaysClose(){
        this.autherSaysShow = false;
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
  margin-top: 8px;
  height: 15px;
  width: 30px;
  float: right;
  margin-right: 5px;
}

.mu-menu-list {
    padding:  0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}

</style>