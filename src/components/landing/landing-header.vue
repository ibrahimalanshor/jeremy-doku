<script setup>
import BaseContainer from 'src/components/base/base-container.vue';
import BaseHeading from 'src/components/base/base-heading.vue';
import BaseInput from 'src/components/base/base-input.vue';
import BaseLink from 'src/components/base/base-link.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const search = ref(null);

function handleSearch() {
  router.push({
    name: 'communities.home',
    query: {
      search: search.value,
    },
  });
}
</script>

<template>
  <header id="header" class="bg-sky-600 with-pattern text-white py-40">
    <base-container>
      <div class="w-full sm:w-3/4 mx-auto text-center">
        <base-heading weight="bold" class="mb-2" size="4xl" tight
          >Sekolah Air Hujan</base-heading
        >
        <p class="text-base mb-4">
          Bersama memanfaatkan air hujan menjadi sesuatu yang lebih bermanfaat
        </p>
        <form v-on:submit.prevent="handleSearch">
          <base-input
            class="mb-2"
            size="lg"
            placeholder="Cari Komunitas"
            v-model="search"
          />
        </form>
        <base-link size="xs" :to="{ name: 'communities.home' }"
          >Lihat Semua Komunias</base-link
        >
      </div>
    </base-container>
  </header>
</template>
