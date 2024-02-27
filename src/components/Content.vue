<template>
    <p class="text" v-html="contentText">
    </p>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'Content',
    props: {
        contentText: String
    }

});
</script>
  