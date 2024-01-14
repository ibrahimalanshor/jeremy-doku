import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const isLoggedIn = ref(false);
    const token = ref(null);
    const me = ref(null);

    function login(payload) {
      token.value = payload;
      isLoggedIn.value = true;
    }
    function setMe(payload) {
      me.value = payload;
    }

    return { isLoggedIn, token, me, login, setMe };
  },
  { persist: true },
);
