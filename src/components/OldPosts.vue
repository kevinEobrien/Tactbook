<template>
  <div class="old-posts">
      <ul>
          <li v-for="post in posts" :key="post.id">
              <Post :post="post"/>
          </li>
      </ul>
      <!-- <button type="button" @click="getPosts()"> Test Button</button> -->
  </div>
</template>

<script>
import Post from "@/components/Post";

export default {
  name: "OldPosts",
  components: { Post },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    getPosts() {
      fetch("http://localhost:3000/post")
        .then(response => response.json())
        .then(response => {
          this.posts = response.post;
          console.log(this.post);
        });
    }
  },
  mounted() {
    this.getPosts();
  }
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


