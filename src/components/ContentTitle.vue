<template>
    <div class="text-title">{{ contentTitle }}</div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'ContentTitle',
    props: {
        contentTitle: String
    }

});
</script>
  