<template>
  <div class="bg-[#CCC5B9]">
    <div class="flex justify-around p-8">
      <div>
        <img class="w-8 flex mr-4" src="../assets/todologo.png" alt="" />
      </div>
      <div>Sign Up</div>
      <PersonalRouter :route="route" :buttonText="buttonText" />
    </div>
    <form @submit.prevent="signUp">
      <div class="flex justify-center m-8 flex-col">
        <div class="flex justify-center text-center mt-20">
          <label class="m-4" for="">Email</label>
          <input
            class="px-20 p-4 rounded-lg"
            type="email"
            placeholder="dave@wuTangfinancial.com"
            v-model="email"
            id="email"
          />
        </div>
      </div>
      <div class="flex justify-center m-8">
        <div class="">
          <label class="m-4" for="">Password</label>
          <input
            class="px-20 p-4 rounded-lg"
            type="password"
            placeholder="************"
            v-model="password"
            id="password"
          />
        </div>
      </div>
      <div class="flex justify-center m-8">
        <div class="">
          <label class="m-4" for="">Confirm Password</label>
          <input
            class="px-20 p-4 rounded-lg"
            type="password"
            placeholder="************"
            v-model="confirmPassword"
            id="confirmPassword"
          />
        </div>
      </div>
      <div class="flex justify-center m-8">
        <button
          class="rounded-lg bg-[#EB5E28] text-[#FFFCF2] p-3"
          type="submit"
        >
          Sign Up
        </button>
      </div>
      <p class="">
        <span class="">Have an account? </span>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import PersonalRouter from "./PersonalRouter.vue";
import { useUserStore } from "../stores/user";
// Route Variables
const route = "/auth/login";
const buttonText = "Test the Sign In Route";
// Input Fields
const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
const errorMsg = ref(null);
// Error Message
// Show hide password variable
// Show hide confrimPassword variable
// Router to push user once SignedUp to Log In
const redirect = useRouter();
// function to SignUp user to supaBase with a timeOut() method for showing the error
async function signUp() {
  if (password.value === confirmPassword.value) {
    try {
      await useUserStore().signUp(email.value, password.value);
      // if (error) throw error;
      redirect.push({ path: "/auth/login" });
    } catch (error) {
      errorMsg.value = error.message;
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
    return;
  }
  errorMsg.value = "Passwords do not match";
  setTimeout(() => {
    errorMsg.value = null;
  }, 5000);
}
</script>

<style></style>
