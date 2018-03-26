<template>
<transition name="modal-fade">
	  <div class="modal-backdrop">
	    <div class="AddPhotModal">
	      <header class="modal-header">
	        <slot name="header">
	        </slot>
	      </header>
          <div class="modal-body">
                <form type="multipart/form-data">
                    <label for="">Add Your Image Here</label>
                    <input type="file" name="image" id="image">
                    <input @submit="uploadPhoto()" type="submit" name="submit" id="submit" value="Upload">
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
    }
  },
  data() {
    return {
      urlResponse: ""
    };
  },
  uploadPhoto(event) {
    event.preventDefault();
    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: new FormData(event.target),
      "Content-type": "multipart/form-data"
    })
      .then(response => response.json())
      .then(response => console.log(response))
      .then((urlResponse = response))
      .then((imageUrl1 = urlResponse))
      .then(console.log(imageUrl1));
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

