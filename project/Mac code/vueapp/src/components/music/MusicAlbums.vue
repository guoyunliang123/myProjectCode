<template>
  <div class="albums">
    <aplayer v-if="isShow" :autoplay="true" :music="songs" :show-lrc="3" :mutex="true"></aplayer>
  </div>
</template>

<script>
  import Aplayer from 'vue-aplayer'
  import Axios from "axios";
  export default {
    data() {
      return {
        songs: [],
        isShow: false
      };
    },
    components: {
      Aplayer
    },
    mounted() {
      Axios.get("/static/data/musicdata.json")
        .then(res => {
          let list = res.data.musicData;
          list.forEach(element => {
            this.songs.push({
              title: element.title,
              artist: element.author,
              src: element.src,
              pic: element.musicImgSrc,
              lrc: '/static/' + element.lrc
            });
          });
          this.isShow = true;
        })
        .catch();
    }
  };
</script>

<style scoped>
  .albums {
    margin: 1rem 0;
  }
</style>
