import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

interface IAuthStore{
    email: string;
    name: string;
    status: boolean;
}

const defaultValue: {user: IAuthStore} = {
    user: {
        email: '',
        name: '',
        status: false,
    }
}

export const useAuthStore = defineStore( 'auth', () => {
    const user = ref<IAuthStore>({...defaultValue});
    function isAuth() {
       return user.value.status;
    }
    function clear() {
        user.value = { ...defaultValue }
    }
    function set(input: Partial<IAuthStore>) {
        user.value = { ...user.value, ...input }
    }
    return {
        user,
        isAuth,
        clear,
        set
    }

})

export const useLoadingStore = defineStore('loadingStore', ()=>{
    const isLoading = ref (true)
    function setLoading(data: boolean) {
        isLoading.value = data
    }
    return {
        isLoading,
        setLoading,
    }
})