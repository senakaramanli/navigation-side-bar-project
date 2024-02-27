<template>
    <div class="login-page flex items-center justify-center">
        <div class="login-box flex items-center justify-center">
            <LoginComp></LoginComp>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import LoginComp from "./LoginComp.vue"

export default defineComponent({
    name: 'login',

    components: {
        LoginComp
    },


});
</script>
<style>
.login-box {
    width: 100%;
}
</style>