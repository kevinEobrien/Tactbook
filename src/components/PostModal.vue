<template>
    <div class="modal-backdrop">
	    <div class="AddPhotModal">
	      <header class="modal-header">
	        <slot name="header">
	        </slot>
	      </header>
          <div class="modal-body">
             <p>{{serverResponse}}</p>
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
  props: ["getPosts"],
  methods: {
    close() {
      this.$router.go();
    }
  }
  //   data() {
  //     return {
  //       serverResponse: ""
  //     };
  //   }
};
</script>

<style scoped>
form {
  color: whitesmoke;
}
label {
  color: whitesmoke;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: hsla(0, 0%, 0%, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}
.modal-header {
  border-bottom: 1px solid #eeeeee;
  justify-content: space-between;
}
.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}
.modal-body {
  position: relative;
  padding: 20px 10px;
}
.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
@media screen and (max-width: 800px) {
  p {
    font-size: 5rem;
  }
}
</style>
