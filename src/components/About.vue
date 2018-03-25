<template>
  <div class="about">
      <h1>About Tactbook</h1>
      <div class="content">
        <img id="waterfall" src="../../static/waterfall.jpg" alt="waterfall">
        <div class="sub-content">
            <p>The intention of Tactbook is to provide a platform for people to share relavant social events and important information so that they can stay in touch with their family and friends without being exposed to all the extra noise of politics, sports, and food.  Future implementations will include additional filters.</p>
            <img id="meadow" src="../../static/meadow.jpg" alt="meadow">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.content {
  display: flex;
  flex-flow: row;
}
img {
  height: 80vh;
  border-radius: 20px;
  margin: 0.5rem;
}
p {
  margin: 3rem;
}
#meadow {
  height: 30vh;
}
@media screen and (max-width: 895px) {
  #waterfall {
    height: 50vh;
  }
  #meadow {
    height: 20vh;
  }
}
@media screen and (max-width: 895px) {
  #waterfall {
    height: 30vh;
  }
}
@media screen and (max-width: 530px) {
  #waterfall {
    display: none;
  }
}
@media screen and (max-width: 340px) {
  #meadow {
    max-width: 30vh;
  }
}
</style>

