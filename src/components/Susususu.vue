<template>
  <div id="app">
    <!-- <transition name="fade"> -->
      <div class="modal-overlay" v-if="showModal"></div>
    <!-- </transition> -->

    <!-- <transition name="fade"> -->
      <div class="modal" v-if="showModal">
        <h1>Titulo</h1>
        <p>Interior del modal</p>
        <button @click="closetask()">Cerrar el Modal</button>
      </div>
    <!-- </transition> -->

    <button @click="showTask()">Abrir el Modal</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
// export default {
//   name: "App",
//   data() {
//     return {
//       showModal: false,
//     };
//   },
// };
const showModal = ref(false);

function showTask() {
  showModal.value = true;
  console.log(showModal.value);
}
function closetask() {
  showModal.value = false;
  console.log(showModal.value);
}
</script>

<style>
button {
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 15px;
  margin-left: 100px;
  display: block;
  padding: 15px 20px;
  background-color: orange;
  color: white;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
} 

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  background: rgb(101, 73, 73);
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 15px;
  background-color: aquamarine;
  z-index: 101;
}

fade-enter {

}
</style>
