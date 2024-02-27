<template>
    <div class="main-title">{{ mainTitle }}</div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'Title',
    props: {
        mainTitle: String
    }

});
</script>
  