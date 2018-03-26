<template>
    <div class="modal-backdrop">
	    <div class="AddPhotModal">
	      <header class="modal-header">
	        <slot name="header">
	        </slot>
	      </header>
          <div class="modal-body">
             <p>{{urlResponse}}</p>
          </div>
	       <footer class="modal-footer">
	          <slot name="footer">
	            <button type="button" class="btn btn-primary" @click="close">Back to Post </button>
	          </slot>
	       </footer>
	    </div>
	  </div>
</template>
<script>
export default {
  name: "PostModal",
  props: ["urlResponse"],
  methods: {
    close() {
      this.$emit("close");
    }
  }
  //   data() {
  //     return {
  //       urlResponse: ""
  //     };
  //   },
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
