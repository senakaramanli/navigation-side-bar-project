<template>
  <div class="main flex">
    <AppLayout>
      <RouterView />
    </AppLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AppLayout from "./layouts/AppLayout.vue"

export default defineComponent({

  components: {
    AppLayout
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
