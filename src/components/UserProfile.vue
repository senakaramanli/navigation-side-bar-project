<template>
    <div class="avatar flex items-center justify-between">
        <div class="personal-side flex">
            <div class="avatar-pic">
                <img src="../images/avatar.png">
            </div>
            <div class="person-name-part flex flex-col">
                <div class="name">{{ name }}</div>
                <div class="email-address">{{ emailAddress }}</div>
            </div>
        </div>
        <div class="share-icon">
            <img src="../images/share-icon.svg">
        </div>

    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: "UserProfile",
    setup() {
        const name = ref('Robbi Darwis')
        const emailAddress = ref('flowforgestd@gmail.com')
        return { name, emailAddress }
    }
});
</script>