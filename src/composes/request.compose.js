import { http } from 'src/helpers/http';
import { ref } from 'vue';

export function useRequest(url, options = {}) {
  const method = options.method ?? 'get';

  const data = ref(options.initData);

  async function request(options) {
    try {
      const res = await http({
        url,
        method,
        ...options,
      });

      data.value = res.data;
    } catch (err) {
      throw err;
    }
  }

  return { data, request };
}
