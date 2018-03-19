<template>
  <div class="profile">
      <div class="jumbotron">
        <button id="change-background" type="button" class="btn btn-outline-secondary">Change Background</button>
        <h1>Kevin O'Brien</h1>
        <hr class="my-4">
        <!-- <router-link class="btn btn-primary btn-lg" to="#" role="button">Edit Profile</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style scoped>
.jumbotron {
  background: url("../../static/mountains.jpg") center center;
  background-size: cover;
  background-repeat: no-repeat;
}
#change-background {
  float: right;
}
h1 {
  color: white;
}
</style>


