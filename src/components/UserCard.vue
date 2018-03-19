<template>
  <div class="user-card">
        <div class="card mb-3">
  <h3 class="card-header">Kevin O'Brien</h3>
  <div class="card-body">
    <img src="../../static/KevinPic.jpg" alt="Card image">
  </div>
  <div class="card-body">
    <router-link to="/profile" class="card-link">See Profile</router-link>
  </div>
  <div class="card-footer text-muted">
    Connected since March 16, 2018
  </div>
</div>
  </div>
</template>

<script>
import Profile from "@/components/Profile";
export default {
  name: "UserCard"
};
</script>

<style scoped>
.user-card {
  max-width: 33vw;
}
.card-body {
  display: flex;
  flex-flow: column;
  align-items: center;
}
img {
  height: 200px;
  width: 200px;
  display: block;
}
@media screen and (max-width: 775px) {
  img {
    width: 100px;
    height: 100px;
  }
  .user-card {
    max-width: 50vw;
  }
}
</style>

