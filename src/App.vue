<template>
  <div class="main flex">
    <AppLayout v-if="$route.name !== 'Login'">
      <RouterView />
    </AppLayout>
    <LoginLayout v-else="$route.name === ''">
      <RouterView />
    </LoginLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AppLayout from "./layouts/AppLayout.vue"
import LoginLayout from "./layouts/LoginLayout.vue"

export default defineComponent({

  components: {
    AppLayout,
    LoginLayout
  },

  setup() {
    const isOpen = ref(false);

    function updateStatus(status: boolean) {
      isOpen.value = status
    }

    return { isOpen, updateStatus };
  }
});
</script>

<style scoped></style>
