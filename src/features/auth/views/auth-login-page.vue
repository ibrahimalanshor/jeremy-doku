<script setup>
import LayoutLanding from 'src/components/layouts/layout-landing.vue';
import BaseContainer from 'src/components/base/base-container.vue';
import BaseSectionHeading from 'src/components/base/base-section-heading.vue';
import BaseHeading from 'src/components/base/base-heading.vue';
import BaseInput from 'src/components/base/base-input.vue';
import BaseFormControl from 'src/components/base/base-form-control.vue';
import BaseButton from 'src/components/base/base-button.vue';
import BaseLink from 'src/components/base/base-link.vue';
import BaseAlert from 'src/components/base/base-alert.vue';
import { useRequest } from 'src/composes/request.compose';
import { reactive } from 'vue';

const { request } = useRequest('/api/login', {
  method: 'post',
});

const form = reactive({
  email: null,
  password: null,
});
const error = reactive({
  visible: false,
  message: '',
});

async function login() {
  error.visible = false;

  try {
    await request({
      data: form,
    });
  } catch (err) {
    handleError(err);
  }
}

function handleSubmit() {
  login();
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
</script>

<template>
  <layout-landing :has-header="false">
    <base-container class="pt-10 pb-20">
      <div class="md:w-1/2 mx-auto space-y-6">
        <base-section-heading>
          <template #start>
            <base-heading size="md" weight="bold"
              >Login ke akun komunitas</base-heading
            >
          </template>
        </base-section-heading>
        <form v-on:submit.prevent="handleSubmit" class="space-y-4">
          <base-alert
            v-if="error.visible"
            :message="error.message"
            color="red"
          />
          <base-form-control label="Email">
            <base-input
              size="md"
              bordered
              outlined
              color="sky"
              placeholder="Email"
              type="email"
              v-model="form.email"
            />
          </base-form-control>
          <base-form-control label="Password">
            <base-input
              size="md"
              bordered
              outlined
              color="sky"
              placeholder="Password"
              type="password"
              v-model="form.password"
            />
          </base-form-control>
          <base-button size="md" color="sky" fullwidth>Login</base-button>
          <p class="text-sm text-gray-600 text-center">
            Belum punya akun?
            <base-link :to="{ name: 'register' }" color="sky"
              >Daftar Disini</base-link
            >
          </p>
        </form>
      </div>
    </base-container>
  </layout-landing>
</template>
