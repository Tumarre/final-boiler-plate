<template>
  <div class="container">
    <h2 class="text-center mt-5 font-thunder text-[#BFC5D9] text-5xl">
      A fondo titu
    </h2>
    <!-- inputsssss -->

    <div class="flex flex-col">
      <input
        v-model="title"
        type="text"
        placeholder="Enter Task"
        class="form-control mb-2 items-center"
      />
      <input
        v-model="description"
        type="text"
        placeholder="Enter Description"
        class="form-control m-auto"
      />
      <div class="text-center">
        <button
          @click="addTaskPerExemple()"
          class="btn rounded m-3 p-3"
          id="submitbtn"
        >
          SUBMIT
        </button>
      </div>
    </div>

    <!-- tasks table -->

    <!-- <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Tasks</th>
          <th scope="col">Status</th>
          <th scope="col" class="fa fa-pen"></th>
          <th scope="col" class="fa fa-trash text-center"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Comprar bananas</td>
          <td>To-do</td>
          <td>
            <div class="text-center">
              <span class="fa fa-pen"></span>
            </div>
          </td>
          <td>
            <div>
              <div class="text-center">
                <span class="fa fa-trash"></span>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const title = ref("");
const description = ref("");

const emit = defineEmits(["handleClick"]);

function addTaskPerExemple() {
  emit("handleClick", title.value, description.value);
}

// constant to save a variable that define the custom event that will be emitted to the homeView

// constant to save a variable that holds the value of the title input field of the new task

// constant to save a variable that holds the value of the description input field of the new task

// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty

// const constant to save a variable that holds the value of the error message

// arrow function to call the form holding the task title and task description that uses a conditional to first checks if the task title is empty, if true the error message is displayed through the errorMessage container and sets a timeOut method that hides the error after some time. Else, its emmits a custom event to the home view with the task title and task description; clears the task title and task description input fields.
</script>

<style>
#submitbtn {
  background-color: #262626;
  color: #f2f2f2;
  font-weight: bold;
  border: 2px solid #ffff;
}

#submitbtn :hover {
  background-color: #f2f2f2;
  color: #262626;
}
</style>
