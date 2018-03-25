<template>
  <div class="profile">
    <div class="jumbotron">
        <button id="change-background" @click="changeBackground()" type="button" class="btn btn-outline-secondary">Change Background</button>
        <h1>Kevin O'Brien</h1>
        <div class="lower-left">
            <img src="../../static/KevinPic.jpg" alt="profile pic">
            <router-link class="btn btn-primary btn-lg" to="/edit-profile" role="button">Edit Profile</router-link>
        </div>
    </div>
    <form @submit.prevent="postToWall()">
        <label class="share" for="newpost">What would you like to share today?</label>
        <input v-model="post" type="text">
        <button type="button" @click="postToWall" class="btn btn-outline-primary">POST</button>
    </form>
    <OldPosts/>
  </div>
</template>

<script>
import OldPosts from "@/components/OldPosts";

export default {
  name: "Profile",
  components: { OldPosts },
  data() {
    return {
      post: ""
    };
  },
  methods: {
    postToWall() {
      if (this.post === "") {
        alert("Please enter text in your post.");
      } else {
        fetch("http://localhost:3000/post", {
          method: "post",
          body: JSON.stringify({
            customer_id: 1,
            content: `${this.post}`,
            imageUrl1: "",
            imageUrl2: "",
            likes: 0,
            markedAbuse: 0
          }),
          headers: new Headers({
            "Content-Type": "application/json"
          })
        }).then(response => response.json());
        //   .then(() => uploadPhoto);
      }
    },
    uploadPhoto() {
      fetch("http://localhost:3000/upload", {
        method: "POST",
        body: new FormData(event.target),
        "Content-type": "multipart/form-data"
      })
        .then(response => response.json())
        .then(response => console.log(response));
    },
    editProfile() {
      console.log("edit funtion runs");
    },
    changeBackground() {
      console.log("background funtion runs");
    }
  }
};
</script>

<style scoped>
.profile {
  position: relative;
}
.jumbotron {
  background: url("../../static/mountains.jpg") center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  right: 0;
}
form {
  display: flex;
  flex-flow: row;
}
#change-background {
  float: right;
}
h1 {
  color: white;
  /* position: absolute;
  top: 1rem; */
}
router-link {
}
img {
  width: 6rem;

  margin: 0 6rem 1rem 1rem;
}
.lower-left {
  position: absolute;
  bottom: 0;
}
input {
  border: 1px sol;
  margin: 0.2rem;
}
.share {
  margin: 0.2rem 0.5rem 0 0.7rem;
}
@media screen and (max-width: 1250px) {
  img {
    width: 4rem;
  }
  h1 {
    margin: 0 0 0.5rem 0;
  }
  button {
    font-size: x-small;
    width: 8rem;
  }
  router-link {
    width: 8rem;
  }
}
@media screen and (max-width: 1150px) {
  .jumbotron {
    height: 50vh;
  }
}
@media screen and (max-height: 500px) {
  .jumbotron {
    height: 100vh;
  }
}
@media screen and (max-height: 350px) and(max-width: 350px) {
  .jumbotron {
    display: block;
    overflow: hidden;
  }
}
@media screen and (max-width: 600px) {
  form {
    display: flex;
    flex-flow: column;
  }
}
</style>


