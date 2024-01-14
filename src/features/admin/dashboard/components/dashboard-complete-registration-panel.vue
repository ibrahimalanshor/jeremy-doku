<script setup>
import BasePanel from 'src/components/base/base-panel.vue';
import BaseFormControl from 'src/components/base/base-form-control.vue';
import BaseInput from 'src/components/base/base-input.vue';
import BaseButton from 'src/components/base/base-button.vue';
import BaseAlert from 'src/components/base/base-alert.vue';
import { useAuthStore } from 'src/features/auth/stores/auth';
import { onMounted, reactive, ref } from 'vue';
import { useRequest } from 'src/composes/request.compose';

const authStore = useAuthStore();
const { request, data: result } = useRequest('/api/me/community', {
  method: 'patch',
  multipart: true,
});

const form = reactive({
  name: authStore.me.community.name,
  location: null,
  description: null,
  image: null,
});
const error = reactive({
  visible: false,
  message: '',
});
const image = ref(null);

async function handleSubmit() {
  try {
    await request({
      data: form,
    });

    authStore.setMe(result.value);
  } catch (err) {
    handleError(err);
  }
}
function handleError(err) {
  if (err.response.status === 422) {
    const schemaError = err.response.data.errors[0];

    error.message = `${schemaError.field} ${schemaError.message}`;
  } else if (err.response.status === 400) {
    error.message = err.response.data.errors[0].message;
  }

  error.visible = true;
}

onMounted(() => {
  image.value.input.addEventListener('change', (e) => {
    form.image = e.target.files[0];
  });
});
</script>

<template>
  <base-panel title="Selesaikan Registrasi Komunitas">
    <form v-on:submit.prevent="handleSubmit" class="space-y-4">
      <base-alert v-if="error.visible" :message="error.message" color="red" />
      <base-form-control label="Nama">
        <base-input
          placeholder="Nama"
          bordered
          color="sky"
          size="md"
          outlined
          v-model="form.name"
        />
      </base-form-control>
      <base-form-control label="Lokasi">
        <base-input
          placeholder="Lokasi"
          bordered
          color="sky"
          size="md"
          outlined
          v-model="form.location"
        />
      </base-form-control>
      <base-form-control label="Gambar">
        <base-input
          placeholder="Gambar"
          type="file"
          bordered
          color="sky"
          size="md"
          outlined
          ref="image"
        />
      </base-form-control>
      <base-form-control label="Deskripsi">
        <base-input
          placeholder="Deskripsi"
          bordered
          color="sky"
          size="md"
          outlined
          textarea
          v-model="form.description"
        />
      </base-form-control>
      <base-button color="sky" size="md">Simpan</base-button>
    </form>
  </base-panel>
</template>
