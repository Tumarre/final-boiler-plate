<template>
  <header
    class="relative flex items-center justify-center h-screen mb-12 overflow-hidden"
  >
    <div
      class="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"
    >
      Welcome to my site!
    </div>
    <video
      autoplay
      loop
      muted
      class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
    >
      <source src="../assets/20221010-143958.webm" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </header>
  <div>
    <nav class="navbar navbar-light bg-[#050D00] justify-content-between p-5">
      <a href="/" class="navbar-brand ml-2 text-white">To Do List</a>
      <form class="form-inline">
        <button
          class="flex flex-row bg-[#F2441D] text-white p-2.5 rounded mr-2 shadow-[8px_8px_5px_##ccc5b9]"
          @click="signOut"
        >
          Sign out
        </button>
      </form>
    </nav>
    <video autoplay muted loop id="myVideo">
      <source
        src="../assets/20221010-143958.webm"
        type="video/mp4"
        class="w-full md:w-auto flex"
      />
    </video>
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

<style>
video {
  height: 20%;
  z-index: -100;
}
</style>
