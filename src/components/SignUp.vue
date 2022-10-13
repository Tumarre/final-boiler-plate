<template>
  <section class="vh-100 bg-[#262626]">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">
                  Create an account
                </h2>

                <form @submit.prevent="signUp">
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example1cg"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="form3Example1cg"
                      >Your Name</label
                    >
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3cg"
                      class="form-control form-control-lg"
                      v-model="email"
                    />
                    <label class="form-label" for="form3Example3cg"
                      >Your Email</label
                    >
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4cg"
                      class="form-control form-control-lg"
                      v-model="password"
                    />
                    <label class="form-label" for="form3Example4cg"
                      >Password</label
                    >
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4cdg"
                      class="form-control form-control-lg"
                      v-model="confirmPassword"
                    />
                    <label class="form-label" for="form3Example4cdg"
                      >Repeat your password</label
                    >
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3cg"
                    />
                    <label class="form-check-label" for="form2Example3g">
                      I agree all statements in
                      <a href="#!" class="text-body"><u>Terms of service</u></a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center">
                    <button
                      type="submit"
                      class="btn btn-success btn-block btn-lg gradient-custom-4 text-body ml-0"
                    >
                      Register
                    </button>
                  </div>

                  <p class="text-center text-muted mt-5 mb-0">
                    Have already an account?
                    <a href="/auth/login" class="fw-bold text-body"
                      ><u>Login here</u></a
                    >
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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

<style scoped>
.gradient-custom-3 {
  /* fallback for old browsers */
  background: #bfc5d9;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    rgba(38, 38, 38, 1),
    rgba(191, 197, 217, 1),
    rgba(38, 38, 38, 1)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to right,
    rgba(38, 38, 38, 1),
    rgba(191, 197, 217, 1),
    rgba(38, 38, 38, 1)
  );
}
.gradient-custom-4 {
  /* fallback for old browsers */
  background: #bfc5d9;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    rgba(38, 38, 38, 1),
    rgba(191, 197, 217, 1),
    rgba(38, 38, 38, 1)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to right,
    rgba(38, 38, 38, 1),
    rgba(191, 197, 217, 1),
    rgba(38, 38, 38, 1)
  );
}
</style>
