<template>
  <section class="vh-100" style="background-color: #262626">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="../assets/istockphoto-588981470-612x612.jpg"
                  alt="login form"
                  class="img-fluid mt-4"
                  style="border-radius: 1rem 0 0 1rem"
                />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <div class="d-flex align-items-center mb-3 pb-1">
                    <img
                      src="../../public/logotodo.png"
                      alt="logoTood"
                      class="w-25"
                    />
                    <!-- <span class="h1 fw-bold mb-0">Tood</span> -->
                  </div>
                  <form @submit.prevent="signIn">
                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                      Sign into your account
                    </h5>
                    <p v-if="errorMsg" class="">
                      {{ errorMsg }}
                    </p>
                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        class="form-control form-control-lg"
                        v-model="email"
                      />
                      <label class="form-label" for="form2Example17"
                        >Email address</label
                      >
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        onpaste="return false"
                        :type="passwordFieldType"
                        id="password"
                        class="form-control form-control-lg"
                        v-model="password"
                      />

                      <label class="form-label" for="form2Example27"
                        >Password</label
                      >
                    </div>

                    <div class="pt-1 mb-4">
                      <button
                        class="btn btn-dark btn-lg btn-block"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>

                    <p class="mb-5 pb-lg-2" style="color: #393f81">
                      Don't have an account?
                      <PersonalRouter :route="route" :buttonText="buttonText" />
                    </p>
                    <a href="#!" class="small text-muted">Terms of use.</a>
                    <a href="#!" class="small text-muted">Privacy policy</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
    console.log("XD");
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
