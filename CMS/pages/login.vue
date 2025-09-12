<script setup lang="ts">
import {useAuthStore, useLoadingStore} from "~/store/auth.store";
import {v4 as uuid} from 'uuid'
useSeoMeta({
    title: 'Login'
}
)
const emailRef= ref('');
const nameRef= ref('');
const passwordRef= ref('');


const loadingStore= useLoadingStore();
const authStore= useAuthStore();
const router = useRouter();

const login = async() => {
  loadingStore.setLoading(true);
  await account.createEmailPasswordSession(emailRef.value, passwordRef.value);
  const response= await account.get();
  if(response){
    authStore.set({
        email: response.email,
        name: response.name,
        status: response.status,
        }
    )
  }
  emailRef.value = "";
  passwordRef.value = "";
  nameRef.value = "";

  await router.push("/");
  loadingStore.setLoading(false);
}

const register = async() => {
  await account.create(uuid(), emailRef.value, passwordRef.value, nameRef.value);
  await login()
}
</script>
<template>
  <div class="flex items-center justify-center w-full min-h-screen">
    <div class="rounded bg-sidebar p-5">
      <h1 class="font-bold text-2xl mb-5 text-center">
        Login
      </h1>
      <form>
        <UIInput
          placeholder="Email"
          type="email"
          class="mb-3"
          v-model="emailRef"
        />
        <UIInput
            placeholder="Password"
            type="password"
            class="mb-3"
            v-model="passwordRef"
        />
        <UIInput
            placeholder="Name"
            type="name"
            class="mb-3"
            v-model="nameRef"
        />
        <div class="flex items-center justify-center gap-5">
          <UIButton type="button" @click="login">Login</UIButton>
          <UIButton type="button" @click="register">Register</UIButton>
        </div>
      </form>
    </div>
  </div>
</template>


<style scoped>

</style>