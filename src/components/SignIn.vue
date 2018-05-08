<template>
  <div class="sign-in">
      <form action="">
          <input class="box" type="text" placeholder="JohnDoe">
          <input class= "box" type="password" placeholder="SecretPassword">
          <div class="buttons">
            <button  type="button" @click.prevent="signIn()" class="btn btn-primary disabled">View Sample Profile</button>
            <button type="button" @click="register()" class="btn btn-outline-primary">Registration Coming Soon</button>
          </div>
      </form>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  methods: {
    signIn() {
      console.log("sign-in function runs");
      this.$router.push("/profile");
    },
    register() {
      console.log("register function runs");
    }
  }
};
</script>

<style scoped>
.sign-in {
  margin: 1rem 0 0 0;
}
form {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 0 0;
}
.box {
  margin: 0 0.5rem 0 0;
}
@media screen and (max-width: 775px) {
  form {
    flex-flow: column;
  }
  .buttons {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 10rem;
  }
  button {
    margin: 0.5rem;
  }
}
</style>

