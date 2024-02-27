<template>
    <div class="logo-text flex">
        <img src="../images/page-content-logo.png">
        <div class="started"><router-link to="/">{{ breadcrumbTitle }}</router-link> -> {{ pageName }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
    name: 'Page1',
    props: {
        pageName: String
    },
    setup() {
        const breadcrumbTitle = ref('Getting Started');
        return { breadcrumbTitle };
    },
    components: { RouterView }
});
</script>
  