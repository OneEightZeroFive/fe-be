
<template>
    <mu-container style="max-width: 600px; width:100%;padding:0;position:fixed;bottom:0;z-index:999;left:0;">
        <mu-bottom-nav :value.sync="shift" shift>
            <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"></mu-bottom-nav-item>
            <mu-bottom-nav-item value="music" title="Music" icon="music_note"></mu-bottom-nav-item>
            <mu-bottom-nav-item value="books" title="Books" icon="books"></mu-bottom-nav-item>
            <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"></mu-bottom-nav-item>
        </mu-bottom-nav>
    </mu-container>
</template>

<script>
import "muse-ui/dist/muse-ui.css";
export default {
  data() {
    return {
      shift: "movies"
    };
  }
};
</script>