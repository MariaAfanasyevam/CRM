<script setup lang="ts">
import {account} from '@/utils/appwrite'
import {useAuthStore, useLoadingStore} from "~/store/auth.store";
import {onMounted} from "vue";

const authStore = useAuthStore();
const loadingStore = useLoadingStore();
const router = useRouter();

onMounted( async()=>{
  try{
    const user = await account.get()
    if (user) authStore.set(user)
  } catch(error){
    router.push("/login")
  } finally{
    loadingStore.setLoading(false)
  }
})

</script>

<template>
  <LayoutLoader v-if="loadingStore.isLoading"/>
  <section v-else :class="{ grid: authStore.isAuth()}" style="min-height:100vh">
    <LayoutSidebar v-if="authStore.isAuth()"/>
    <div>
      <slot/>
    </div>
  </section>
</template>

<style scoped>
 .grid{
   display: grid;
   grid-template-columns: 1fr 6fr;
 }
</style>