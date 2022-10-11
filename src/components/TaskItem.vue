<script setup>
// Modal
import { ref } from "vue";

const showModal = ref(false);

function showTask() {
  showModal.value = true;
  console.log(showModal.value);
}
function closetask() {
  showModal.value = false;
  console.log(showModal.value);
}

// const props = defineProps(["ENTER-PROP-HERE"]);
const props = defineProps({
  task: Object,
});
const thisTask = props.task;
// console.log(thisTask.id);
function deleteTasksPerExemple() {
  console.log("lokokokokodelete");
  emit("deleteTasks", thisTask.id);
  console.log(thisTask.id);
}
const emit = defineEmits(["editTaskksss", "deleteTasks", "isDoneeee"]);

function editTasksPerEXemple() {
  console.log("xupapitos");
  emit("editTaskksss", titleEdit.value, descriptionEdit.value, thisTask.id);
}

function isDoneeee() {
  emit("isDoneeee", thisTask);
  console.log(thisTask);
  console.log("click me");
}
</script>

<template>
  <div class="card m-1 w-2/6">
    <div class="card-body">
      <h5
        :class="task.is_complete ? 'text-green-500 line-through' : 'text-black'"
        class="card-title text-center"
      >
        {{ task.title }}
      </h5>
      <p class="card-text text-center text-black">
        {{ task.description }}
      </p>
      <div class="items-center flex flex-row justify-around">
        <div class="text-center" @click="deleteTasksPerExemple()">
          <button class="card-link fa fa-trash"></button>
        </div>
        <div class="text-center flex" @click="showTask()">
          <button class="card-link fa fa-pen"></button>
        </div>
        <div class="text-center flex" @click="isDoneeee()">
          <button class="card-link fa fa-check"></button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal-overlay" v-if="showModal">
    <div
      class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 -bottom-2/4 left-0"
    >
      <div class="bg-white px-16 py-14 rounded-md text-center top-96 absolute">
        <div class="">
          <input
            id="titleEdit"
            type="text"
            class="m-2 text-xl mb-4 font-bold text-slate-500 border-r-slate-900"
            placeholder="Click to edit title"
          />
          <br />
          <input
            id="descriptionEdit"
            class="text-xl mb-4 font-bold text-slate-500 border-r-slate-900"
            placeholder="Click to edit description"
          />
        </div>
        <div class="flex-row-reverse flex justify-items-center">
          <button
            class="bg-[#EB5E28] px-7 py-2 rounded-md text-md text-white font-semibold flex"
            @click="editTasksPerEXemple()"
          >
            Ok
          </button>
          <button
            class="bg-black px-4 py-2 ml-2 rounded-md text-md text-white mt-2 flex"
            @click="closetask()"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

#bordeee {
  border-color: #252422;
}

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
  box-shadow: 8px 8px 5px #ccc5b9;
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

.card {
  -webkit-backdrop-filter: blur(27px);
  backdrop-filter: blur(27px);
  border: 1px solid rgba(37, 36, 34, 0.25);
  box-shadow: 10px 10px 20px #314011;
}

/* fade-enter {

} */
</style>

<!-- 
**Hints**
1. ref() or reactive() can be used here to store the following, think if you want to store them either individually or like an object, up to you.
2. Data properties need here are the following: a boolean to store a false**Important variable, a string to store an error, a string to store the value of the task that the user can edit, an initial false boolean to hide the inputFIeld used to edit the new task detail or details[this is in reference of the task title and the task description].
3. Store the custom emit events that will be used to call the functions of the homeView for editing, deleting and toggling the status[completed, not complted] of the taskItem.
4. Function to handle the error with the data properties used to control the error and the the boolean controlling the boolean empty variable.
5. Function to handle the edit dialogue where the inputField is displayed and the string used to store the value of the inputField will be used here to save the value as a prop on this function.
6. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the toggle completion of the task on the homeview.
7. Function to edit the task information that you decided that the user can edit. This function's body takes in a conditional that first checks if the value of the task [either title and description or just title] is empty which if true it runs the function used to handle the error on hint4. Else, the conditional sets the first mentioned boolean data property on hint2 back to its inital boolean value to hide the error message and repeat the same for the data property mentioned 4th on hint2; a constant that stores an object that holds the oldValue from the prop item and the value of the task coming from the data property mentioned 3rd on hint2; a custom event emit() that takes 2 parameters a name for the custom event and the value from the object used on this part of the conditional and lastly this part of the conditional sets the value of input field to an empty string to clear it from the ui. 
8. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the removal of  the task on the homeview.
-->
