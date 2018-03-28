<template>
<transition name="modal-fade">
	  <div class="modal-backdrop">
	    <div class="AddPhotModal">
	      <header class="modal-header">
	        <slot name="header">
	        </slot>
	      </header>
          <div class="modal-body">
                <form id="uploadForm" @submit.prevent="uploadPhoto">
                    <h2>{{this.post}}</h2>
                    <label for="image">Add Your Image Here</label>
                    <input type="file" name="image" id="image">
                    <input  type="submit" name="submit" id="submit" value="Upload">
                </form>
                <img v-bind:src="imageUrl1" alt="">
                <form id="uploadForm" @submit.prevent="uploadPhoto2">
                    <label for="image">Add Your Image Here</label>
                    <input type="file" name="image" id="image">
                    <input  type="submit" name="submit" id="submit" value="Upload">
                </form>
                <img v-bind:src="imageUrl2" alt="">
          </div>
	       <footer class="modal-footer">
	          <slot name="footer">
	            <button type="button" class="btn btn-primary" @click="close">Back to Profile </button>
                <button @click="postToWall()" type="button" class="btn btn-primary">Post with Photos</button>
	          </slot>
	       </footer>
	    </div>
	  </div>
</transition>
</template>

<script>
export default {
  name: "PhotoModal",
  props: ["post", "postToWall", "getPosts"],
  methods: {
    close() {
      this.$router.go();
    },
    uploadPhoto(event) {
      console.log(event);
      fetch("https://tactbook-api.herokuapp.com/upload", {
        method: "POST",
        body: new FormData(event.target),
        "Content-type": "multipart/form-data"
      })
        .then(response => response.json())
        .then(response => (this.imageUrl1 = response.imgUrl))
        .then(response => console.log(response))
        .then(() => alert("Photo Uploaded"));
    },
    uploadPhoto2(event) {
      console.log(event);
      fetch("https://tactbook-api.herokuapp.com/upload", {
        method: "POST",
        body: new FormData(event.target),
        "Content-type": "multipart/form-data"
      })
        .then(response => response.json())
        .then(response => (this.imageUrl2 = response.imgUrl))
        .then(response => console.log(response))
        .then(() => alert("Photo Uploaded"));
    },
    postToWall() {
      if (this.post === "") {
        alert("Please enter text in your post.");
      } else {
        fetch("https://tactbook-api.herokuapp.com/post", {
          method: "post",
          body: JSON.stringify({
            customer_id: 1,
            content: `${this.post}`,
            imageUrl1: `${this.imageUrl1}`,
            imageUrl2: `${this.imageUrl2}`,
            likes: 0,
            markedAbuse: 0
          }),
          headers: new Headers({
            "Content-Type": "application/json"
          })
        })
          .then(response => response.json())
          .then(response => (this.serverResponse = response))
          .then(() => alert(this.serverResponse))
          .then(() => close());
      }
    }
  },
  data() {
    return {
      urlResponse: "",
      urlResponse2: "",
      imageUrl1: "",
      imageUrl2: ""
    };
  }
};
</script>

<style scoped>
form {
  color: whitesmoke;
}
label {
  color: whitesmoke;
}
img {
  height: 20vh;
}
</style>

