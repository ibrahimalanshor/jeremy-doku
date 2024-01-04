import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const isLoggedIn = ref(false);
    const token = ref(null);
    const me = ref(null);

    function login(payload) {
      token.value = payload.token;
      me.value = payload.me;
      isLoggedIn.value = true;
    }

    return { isLoggedIn, token, me, login };
  },
  { persist: true },
);
