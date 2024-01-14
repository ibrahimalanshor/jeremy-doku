import { http } from 'src/helpers/http';
import { useAuthStore } from 'src/features/auth/stores/auth';
import { ref } from 'vue';

export function useRequest(url, options = {}) {
  const method = options.method ?? 'get';
  const isMultipart = options.multipart ?? false;

  const authStore = useAuthStore();

  const data = ref(options.initData);

  async function request(options) {
    try {
      const res = await http({
        url,
        method,
        ...options,
        headers: {
          'Content-Type': isMultipart
            ? 'multipart/form-data'
            : 'application/json',
          Authorization: `Bearer ${authStore.token}`,
        },
      });

      data.value = res.data;
    } catch (err) {
      throw err;
    }
  }

  return { data, request };
}
