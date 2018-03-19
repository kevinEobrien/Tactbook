<template>
    <div>
        <h1>Welcome!</h1>
        <p>Thanks for being a part of the social network where the only thing we share is what really matters.</p>
        <SignIn/>
        <div id="hero">
            <img src="../../static/homepage.jpg" alt="homepage image">
        </div>
  </div>
</template>
<script>
import SignIn from "@/components/SignIn";
export default {
  name: "Landing",
  components: { SignIn }
};
</script>

<style scoped>
#hero {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
img {
  width: 90vw;
  margin: 1rem 0 0 0;
  margin-bottom: -20%;
}
@media screen and (max-width: 775px) {
  h1 {
    margin: 3rem 0rem 2rem 0rem;
  }
  p {
    margin: 0 0 4rem 0;
  }
}
</style>

