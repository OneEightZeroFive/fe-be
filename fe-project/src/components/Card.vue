<template>
    <mu-container>
        <mu-card :key="index" v-for="(c,index) in cards" style="width: 100%; max-width: 375px; margin: 0 auto;" v-if="index!==0">
        <mu-card-header :title="c.mblog.user.screen_name" :sub-title="c.mblog.user.description">
            <mu-avatar slot="avatar">
            <img :src="c.mblog.user.avatar_hd">
            </mu-avatar>
        </mu-card-header>
        <mu-card-media title="Image Title" sub-title="Image Sub Title">
            <img :src="sun">
        </mu-card-media>
        <mu-card-title title="Content Title" sub-title="Content Title"></mu-card-title>
        <mu-card-text v-html="c.mblog.text">
            
        </mu-card-text>
        <mu-card-actions>
            <mu-button flat>Action 1</mu-button>
            <mu-button flat>Action 2</mu-button>
        </mu-card-actions>
        </mu-card>
    </mu-container>
</template>
<script>
export default {
  data() {
    return {
      sun: require("../assets/sun.jpg"),
      uicon: require("../assets/uicon.jpg"),
      cards: []
    };
  },
  methods: {
    getCard() {
      // this.$axios.get("http://localhost:3000/home").then((response)=>{
      //     console.log(response);
      //     this.cards = response.data.data.cards
      // }).catch((err)=>{

      // })
      // abc
      window.abc = data => {
        console.log(data.data.cards);
        this.cards = data.data.cards;
      };
      var script = document.createElement("script");
      script.src = `http://localhost:3000/home?callback=abc`;
      document.body.appendChild(script);
    }
  },
  mounted() {
    this.getCard();
  }
};
</script>

