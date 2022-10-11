<template>
  <!-- <div class="text-center">
    <nav class="navbar navbar-light bg-[#050D00] justify-content-between p-5">
      <a href="/" class="navbar-brand ml-2 text-white font-thunderOTF">TooD</a>
      <p class="text-center font-thunderOTF ml-2 text-[#bfc5d987]">
        TO DO LIST
      </p>
      <form class="form-inline">
        <button
          class="flex flex-row bg-[#262626] text-white p-2.5 rounded mr-2 shadow-[8px_8px_5px_##ccc5b9]"
          @click="signOut"
        >
          Sign out
        </button>
      </form>
    </nav>
  </div> -->
  <nav class="flex items-center justify-between flex-wrap bg-black p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg
        class="fill-current h-8 w-8 mr-2"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="" />
      </svg>
      <span class="font-semibold text-xl tracking-tight">Tood</span>
    </div>
    <div class="block lg:hidden">
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow"></div>
      <div>
        <a
          href="#"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:text-teal-500 hover:bg-white lg:mt-0"
          >Sing Out</a
        >
      </div>
    </div>
  </nav>
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

<style scoped></style>
