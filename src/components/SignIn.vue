<template>
  <div class="bg-[#FFFCF2]">
    <div class="flex justify-around p-8">
      <div>Sign In</div>
      <PersonalRouter :route="route" :buttonText="buttonText" />
      <p>Time to build up the Final Project!</p>
      <p class="wu-text">Wu Tang Forever</p>
    </div>
    <p v-if="errorMsg" class="">
      {{ errorMsg }}
    </p>
    <form @submit.prevent="signIn">
      <div class="flex justify-center m-8 flex-col">
        <div class="flex justify-center text-center mt-20">
          <label class="m-4" for="">Email</label>
          <input
            class="px-20 p-4 rounded-lg"
            type="email"
            placeholder="susuusus@gmail.com"
            v-model="email"
            id="email"
          />
        </div>
        <div class="flex justify-center m-8">
          <div class="">
            <label class="m-4" for="">Password</label>
          </div>
          <div class="">
            <input
              class="px-20 p-4 rounded-lg"
              :type="passwordFieldType"
              onpaste="return false"
              placeholder="*********"
              v-model="password"
              id="password"
            />
            <span class="">
              <EyeIcon
                :class="[passwordFieldIcon]"
                @click.prevent="hidePassword = !hidePassword"
              />
            </span>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            class="rounded-lg bg-[#EB5E28] text-[#FFFCF2] p-3"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </div>
      <div>
        <p class="flex justify-center">
          <span class="m-2">Don’t have an account? </span>
          <PersonalRouter :route="route" :buttonText="buttonText" />
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

// Route Variables
const route = "/auth/sign-up";
const buttonText = "Sign Up";

// Input Fields
const email = ref("");
const password = ref("");

// Error Message
const errorMsg = ref("");

//Show hide password variables
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);
const hidePassword = ref(true);

// Router to push user once SignedIn to the HomeView
const redirect = useRouter();

// Arrow function to Signin user to supaBase
const signIn = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signIn(email.value, password.value);
    // redirects user to the homeView
    redirect.push({ path: "/" });
  } catch (error) {
    // displays error message
    errorMsg.value = `Error: ${error.message}`;
    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>

<style></style>
