<template>
  <!-- <div> -->
     <div class="" v-if="isLoading">
      loading...
    </div> 
    <!-- <div class="entry-date">{{date}}</div> -->
<!-- <a-player autoplay :music="{
  title: 'Preparation',
  author: '锵锵三人行',
  url: 'http://198.46.248.122:8888/2009-01-13.mp3',
  pic: 'http://devtest.qiniudn.com/Preparation.jpg'
}"></a-player> -->

</template>

<script>
export default {
  name: 'List',

  data () {
    return {
      isLoading: false,
      statuses: []
    }
  },
// components: {
//     'a-player': VueAplayer
// },
  watch: {
    '$route': 'fetchList'
  },

  mounted () {

    
  },



  methods: {
    fetchList () {

    }
  }
}
</script>

<style lang="scss">
.entry-date {
  background: #F8F8F8;
  color: #96999B;
  height: 20px;
  overflow: hidden;
  line-height: 20px;
  width: 100%;
  font-size: .7rem;
  padding: 0 .65rem;
  box-sizing: border-box;
}

.status {
  margin: 0 auto;
  padding: .65rem 0;
  font-size: 1rem; 
  word-break: break-all;
  white-space: normal;
  line-height: 1.25rem;
  max-width: 90%;
  user-select: auto;
  border-bottom: 1px solid #f1f1f1;
}

.status-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.status-meta .status-meta__user {
  flex: 2;
  display: flex;
  align-items: center;
}

.status-meta .status-meta__user img {
  width: 25px;
  height: 25px;
  margin-right: .625rem;
  border-radius: 50%;
  border: 1px solid #cccccc;
}

.status-meta .status-meta__user view {
 font-size: .9rem;
}

.status-meta__timestamp {
  flex: 1.5;
  font-size: .75rem;
  color: #999999;
  text-align: right;
}

.status .status__text {
  padding: .65rem 0 0 0;
  box-sizing: border-box;
  line-height: 1.75rem;
  font-size: 1.125rem;
  text-align: left;
  margin-bottom: .325rem;

  & > a[href^="/q/"] {
    pointer-events: none;
  }
}

.status .status__image {
  width: 90%;
  display: block;
  margin: .325rem auto 0;
}
</style>


