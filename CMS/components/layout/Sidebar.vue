<script setup lang="ts">

import {useAuthStore, useLoadingStore} from "~/store/auth.store";

const authStore = useAuthStore();
const loadingStore = useLoadingStore();
const router = useRouter();

const logout =async()=>{
  loadingStore.setLoading(true)
  await account.deleteSession('current')
  authStore.clear()
  await router.push('/login')
  loadingStore.setLoading(false)
}

</script>
<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" alt="" width="120px" class="mx-auto"/>
    </NuxtLink>
        <button class="absolute top-2 right-3 transition-colors hover:text-primary-400">
      <Icon name="line-md:logout" size="20" @click="logout"/>
    </button>
    <LayoutMenu/>
  </aside>
</template>