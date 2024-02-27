<template>
    <div class="avatar flex items-center justify-between">
        <div class="personal-side flex">
            <div class="avatar-pic">
                <img src="../images/avatar.png">
            </div>
            <div class="person-name-part flex flex-col">
                <div class="name">Robbi Darwis</div>
                <div class="email-address">flowforgestd@gmail.com</div>
            </div>
        </div>
        <div class="share-icon">
            <img src="../images/share-icon.svg">
        </div>

    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "UserProfile"

});
</script>