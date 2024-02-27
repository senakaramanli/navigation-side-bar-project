<template>
    <div class="subtitle">{{ subtitle }}</div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'Subtitle',
    props: {
        subtitle: String
    }
});
</script>
  