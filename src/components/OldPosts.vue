<template>
  <div class="old-posts">
      <ul>
          <li>
              <Post/>
          </li>
      </ul>
  </div>
</template>

<script>
import Post from "@/components/Post";

export default {
  name: "OldPosts",
  components: { Post }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.5rem;
}
li {
  margin: 1rem 0rem 1rem 0rem;
  padding: 0;
}
</style>


