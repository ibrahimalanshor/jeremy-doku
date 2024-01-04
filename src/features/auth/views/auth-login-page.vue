<script setup>
import LayoutLanding from 'src/components/layouts/layout-landing.vue';
import BaseContainer from 'src/components/base/base-container.vue';
import BaseSectionHeading from 'src/components/base/base-section-heading.vue';
import BaseHeading from 'src/components/base/base-heading.vue';
import BaseInput from 'src/components/base/base-input.vue';
import BaseFormControl from 'src/components/base/base-form-control.vue';
import BaseButton from 'src/components/base/base-button.vue';
import BaseLink from 'src/components/base/base-link.vue';
</script>

<template>
  <layout-landing :has-header="false">
    <base-container class="pt-10 pb-20">
      <div class="w-1/2 mx-auto space-y-6">
        <base-section-heading>
          <template #start>
            <base-heading size="md" weight="bold"
              >Login to your community account</base-heading
            >
          </template>
        </base-section-heading>
        <form action="" class="space-y-4">
          <base-form-control label="Email">
            <base-input
              size="md"
              bordered
              outlined
              color="sky"
              placeholder="Email"
            />
          </base-form-control>
          <base-form-control label="Password">
            <base-input
              size="md"
              bordered
              outlined
              color="sky"
              placeholder="Password"
            />
          </base-form-control>
          <base-button size="md" color="sky" fullwidth>Login</base-button>
          <p class="text-sm text-gray-600 text-center">
            Belum punya akun?
            <base-link href="#" color="sky">Daftar Disini</base-link>
          </p>
        </form>
      </div>
    </base-container>
  </layout-landing>
</template>
