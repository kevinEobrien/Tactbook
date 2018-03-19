<template>
  <div class="network-list">
      <ul>
          <UserCard/>
      </ul>
  </div>
</template>
<script>
import UserCard from "@/components/UserCard";
export default {
  name: "NetworkList",
  components: {
    UserCard
  }
};
</script>
