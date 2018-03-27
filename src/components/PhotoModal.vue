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
                    <label for="image">Add Your Image Here</label>
                    <input type="file" name="image" id="image">
                    <input  type="submit" name="submit" id="submit" value="Upload">
                </form>
          </div>
	       <footer class="modal-footer">
	          <slot name="footer">
	            <button type="button" class="btn btn-primary" @click="close">Back to Post </button>
	          </slot>
	       </footer>
	    </div>
	  </div>
</transition>
</template>

<script>
export default {
  name: "PhotoModal",
  props: ["imageUrl1", "imageUrl2"],
  methods: {
    close() {
      this.$emit("close");
    },
    uploadPhoto(event) {
      console.log(event);
      fetch("http://localhost:3000/upload", {
        method: "POST",
        body: new FormData(event.target),
        "Content-type": "multipart/form-data"
      })
        .then(response => response.json())
        .then(response => (this.imageUrl1 = response.imgUrl))
        .then(response => console.log(response));

      // .then((imageUrl1 = urlResponse))
      // .then(() => console.log(imageUrl1));
    },
    uploadPhoto2(event) {
      console.log(event);
      fetch("http://localhost:3000/upload", {
        method: "POST",
        body: new FormData(event.target),
        "Content-type": "multipart/form-data"
      })
        .then(response => response.json())
        .then(response => (this.urlResponse2 = response.imgUrl))
        .then(response => console.log(response));

      // .then((imageUrl1 = urlResponse))
      // .then(() => console.log(imageUrl1));
    }
  },
  data() {
    return {
      urlResponse: "",
      urlResponse2: "",
      imageUrl1: ""
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
</style>

