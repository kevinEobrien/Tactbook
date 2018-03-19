<template>
  <div class="network">
      <h1 id="net-title">Your Network</h1>
      <NetworkList/>
  </div>
</template>

<script>
import NetworkList from "@/components/NetworkList";
export default {
  name: "Network",
  components: { NetworkList }
};
</script>

<style scoped>
#net-title {
  margin: 2rem;
}
</style>

