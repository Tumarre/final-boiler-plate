<template>
  <router-link class="rounded-lg bg-[#EB5E28] text-[#FFFCF2] p-3" :to="route">{{
    buttonText
  }}</router-link>
</template>

<script setup>
defineProps({
  route: String,
  buttonText: String,
});
</script>

<style></style>
