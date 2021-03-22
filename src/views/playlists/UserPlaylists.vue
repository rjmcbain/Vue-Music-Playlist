<template>
  <div class="user-playlists">
    <h2>My Playlist</h2>
    <div v-if="playlists">
      <ListView :playlists="playlists" />
    </div>
    <router-link class="btn" :to="{ name: 'CreatePlaylist' }"
      >Create A New Playlist</router-link
    >
  </div>
</template>

<script>
import getUser from "../../composables/getUser";
import ListView from "../../components/ListView";
import getCollection from "../../composables/getCollection";

export default {
  components: { ListView },
  setup() {
    const { user } = getUser();
    const { documents: playlists } = getCollection("playlists", [
      "userId",
      "==",
      user.value.uid,
    ]);
    console.log("Playlists: ", playlists);

    return { playlists };
  },
};
</script>

<style></style>
