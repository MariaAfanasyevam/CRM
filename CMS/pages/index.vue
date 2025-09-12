<script setup lang="ts">
import {useAuthStore, useLoadingStore} from "~/store/auth.store";
import {useUsersStore} from "~/store/accounts";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const items= ref(['LDAP', 'Локальная']);

const loadingStore= useLoadingStore();
const authStore= useAuthStore();
const router = useRouter();
const users = useUsersStore.users;
const userStore=useUsersStore();

function validate (userId: string) {
  const user = userStore.users.find(u => u.id === userId);
  if (!user) return;

  const errors: Record<string, boolean> = {};


  if (user.type === 'LOCAL' && !user.password.trim()) errors.password = true;

  user.errors = errors;

  if (Object.keys(errors).length === 0) {
    user.label = arrayLabel(user.labelInput || '');
    userStore.saveToLocalStorage();
  }
}
const showPasswordMap = ref<Record<string, boolean>>({});
const showPassword = ref(false)
const password = ref('')
function toggleShowPassword() {
  showPassword.value = !showPassword.value
}
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
    <div v-if="userStore.users.length === 0" class="text-gray-500 italic">
      Нет учетных записей. Нажмите + чтобы добавить.
    </div>

    <form v-else class="grid grid-cols-5 gap-2">
      <div class="font-semibold">Метка</div>
      <div class="font-semibold">Запись</div>
      <div class="font-semibold">Логин</div>
      <div class="font-semibold">Пароль</div>
      <div></div>
    </form>
    <form v-for="user in userStore.users" :key="user.id">
      <div class="grid grid-cols-5 gap-2" >
        <UIInput
            placeholder="Метка"
            type="text"
            maxlength="50"
            v-model="user.labelInput"
            class="mb-3"
            @blur="validate(user.id)"
            :class="{ 'border-red-500': user.errors?.password }"
        />
        <select v-model="user.type" class="border p-1 rounded h-9"
                @change="validate(user.id)">
          <option disabled value="">Выберите тип</option>
          <option value="LDAP">LDAP</option>
          <option value="Локальная">Локальная</option>
        </select>

        <UIInput
            placeholder="Значение"
            type="text"
            @blur="validate(user.id)"
            maxlength="100"
            v-model="user.name"
            class="mb-3"
            :class="[
            'border p-1 rounded',
            user.type === 'LDAP' ? 'col-span-2' : 'col-span-1',
            { 'border-red-500': user.errors?.login }
          ]"
        />
        <div v-if="user.type === 'Локальная'" class="relative">
          <UIInput
              :type="showPasswordMap[user.id] ? 'text' : 'password'"
              placeholder="Пароль"
              maxlength="100"
              v-model="user.password"
              @blur="validate(user.id)"
              :class="{ 'border-red-500': user.errors?.password }"
          />
          <button
              type="button"
              @click="showPasswordMap[user.id] = !showPasswordMap[user.id]"
              class="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            <FontAwesomeIcon :icon="showPasswordMap[user.id] ? faEye : faEyeSlash" class="w-1 align-center" />
          </button>
        </div>
        <Icon name="radix-icons:trash" class="cursor-pointer self-center"  :scale="2"   @click="userStore.removeUser(user.id)"/>
      </div>
    </form>
  </div>
</template>



<style scoped>

</style>