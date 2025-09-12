<script setup lang="ts">
import {useAuthStore, useLoadingStore} from "~/store/auth.store";
import {useUsersStore} from "~/store/accounts";

const labelRef= ref('');
const nameRef= ref('');
const items= ref(['LDAP', 'Локальная']);
const typeRef= ref('');
const passwordRef= ref('');
const loadingStore= useLoadingStore();
const authStore= useAuthStore();
const router = useRouter();
const users = useUsersStore.users;
const userStore=useUsersStore();

onMounted(()=>{
  userStore.loadFromLocalStorage();
})
</script>
<template>
  <div class="p-10">
    <div class="flex">
      <p class="font-bold text-2xl mb-10">Учетные записи</p>
      <UIButton @click="userStore.addUser">+</UIButton>
    </div>
    <div class="flex mb-2">
      <Icon name="radix-icons:question-mark" class="mr-3"/>
      <p>Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;</p>
    </div>

    <form class="grid grid-cols-5 gap-2">
      <div class="font-semibold">Метка</div>
      <div class="font-semibold">Запись</div>
      <div class="font-semibold">Логин</div>
      <div class="font-semibold">Пароль</div>
      <div></div>
      <div v-for="user in users" :key="item">
        <UIInput
            placeholder="Метка"
            type="text"
            maxlength="50"
            v-model="labelRef"
            class="mb-3"
        />
        <select v-model="typeRef" class="border p-1 rounded h-9">
          <option disabled value="">Выберите тип</option>
          <option value="LDAP">LDAP</option>
          <option value="Локальная">Локальная</option>
        </select>

        <UIInput
            placeholder="Значение"
            type="text"
            maxlength="100"
            v-model="nameRef"
            class="mb-3"
            :class="typeRef === 'LDAP' ? 'col-span-2' : 'col-span-1'"
        />

        <UIInput
            v-if="typeRef === 'Локальная'"
            placeholder="Пароль"
            type="password"
            maxlength="100"
            v-model="passwordRef"
            class="mb-3"
        />

        <Icon name="radix-icons:trash" class="cursor-pointer self-center w-4" @click="userStore.removeUser(user.id)"/>
      </div>
    </form>
  </div>
</template>



<style scoped>

</style>