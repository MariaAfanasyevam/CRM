import {defineStore} from "pinia";
import type {Account} from '@types/account';

export const useUsersStore = defineStore('users', ()=>{
    const users = ref<Account[]>([]) ;
    function addUser() {
        users.value.push({
            id: crypto.randomUUID(),
            label: [],
            type: 'LOCAL',
            login:'',
            labelInput: '',
            password:'',
            errors: {}
        });
    };
    function saveToLocalStorage() {
        localStorage.setItem('users', JSON.stringify(users.value));
    };

    function removeUser(id: string) {
        users.value=users.value.filter((item:Account) => item.id !== id);
        saveToLocalStorage();
    };
    function loadFromLocalStorage() {
        const data = localStorage.getItem('users');
        if (data) {
            const parsed = JSON.parse(data);
            users.value = parsed.map((u: any) => ({
                ...u,
                labelInput: u.label?.map((l: any) => l.text).join(';') || '',
                errors: {}
            }));
        }
    }
    return {
        users,
        addUser,
        saveToLocalStorage,
        removeUser,
        loadFromLocalStorage,
    }
})