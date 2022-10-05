<template>
  <div class="bg-[#CCC5B9] flex p-10 items-center justify-around">
    <img
      class="w-8 flex mr-4"
      src="../assets/todologo.png"
      alt="To Do List Logo"
    />
    <h1 class="text-4xl flex flex-row text-left text-[#403D39]">VueToDo</h1>
    <button
      class="flex flex-row bg-[#eb5f28] text-white p-2.5 rounded"
      @click="signOut"
    >
      Sign out
    </button>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/user";

const signOut = async () => {
  try {
    await useUserStore().signOut();
    window.location.reload();
  } catch (error) {
    console.log("this is my error", error);
  }
};
//constant to save a variable that will hold the use router method

// constant to save a variable that will get the user from store with a computed function imported from vue

// constant that calls user email from the useUSerStore

// constant that saves the user email and cleans out the @client from the user

// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
</script>

<style></style>
