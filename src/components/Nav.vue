<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-black p-6 overflow-hidden"
  >
    <div class="bola">
      <img class="w-14" src="../assets/pinzza.png" alt="pinza" />
    </div>
    <div class="triangulo"></div>
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
    <div class="block lg:hidden" id="navBarSu"></div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow"></div>
      <div>
        <a
          href="#"
          class="inline-block text-xl px-4 py-2 leading-none rounded text-black bg-[#F2F2F2] lg:mt-0 hover:text-black font-thunder"
          @click="signOut()"
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

const navBarSusu = document.getElementById("navBarSu");
console.log(navBarSusu);

function scrollToNav() {
  navBarSusu.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped>
.pelitos {
  width: 3px;
  height: 25px;
  background-color: green;
}
.pelitos:nth-child(1) {
  transform: rotate(-5deg);
  position: relative;
  left: 0%;
  background-color: blueviolet;
}
.pelitos:nth-child(2) {
  transform: rotate(20deg);
  position: relative;
  top: 60%;
  left: 0%;
  background-color: chocolate;
}
.pelitos:nth-child(3) {
  transform: rotate(-45deg);
  position: relative;
  top: -95%;
  left: 90%;
  background-color: crimson;
}

.triangulo {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 16px 27.7px 16px;
  border-color: transparent transparent #ffffff transparent;
  position: absolute;
  z-index: 100;
  top: -10vh;
  left: 90vw;
  animation: grap 1 10s linear;
}

.bola {
  /* width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 10px 0 10px;
  border-color: #ffffff transparent transparent transparent; */
  position: absolute;
  z-index: 100;
  top: 0vh;
  left: 1vw;
  animation: palante 1 10s linear;
}

@keyframes palante {
  /* from {
    top: 1vh;
    left: 1vw;
  }
  to {
    top: 1vh;
    left: 80vw;
  } */
  0% {
    top: 0vh;
    left: 1vw;
  }
  20% {
    top: 0vh;
    left: 90vw;
  }
  40% {
    top: 46vh;
    left: 90vw;
  }
  50% {
    top: 20vh;
    left: 90vw;
  }
  60% {
    top: 0vh;
    left: 90vw;
  }
}
@keyframes grap {
  0% {
    top: 50vh;
    left: 91vw;
  }
  40% {
    top: 50vh;
    left: 91vw;
  }
  50% {
    top: 30vh;
    left: 91vw;
  }
  70% {
    top: 97vh;
    left: 91vw;
  }
  100% {
    top: 97vh;
    left: 91vw;
    scroll-behavior: smooth;
  }
}
</style>
