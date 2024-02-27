<template>
    <div v-for="x in items" class="nav-item">
        <div :class="{ 'title-logo active flex justify-between': isOpen, 'title-logo flex justify-between': !isOpen }"
            @click='updateStatus(!isOpen, $event)'>
            <div class="left-side flex items-center">
                <img :src="x.iconUrl" style="width:24px; height:24px">
                <div class="label">{{ x.title }}</div>
            </div>
            <div class="right-side">
                <img src="../images/arrow-icon.svg">
            </div>
        </div>
        <ul v-for="j in x.subTitles" v-if="isOpen">
            <li :class="{ 'active': $route.name === 'eCommerce' }">
                <router-link :to="j.path">{{ j.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: "AppLayout",
    components: {
    },
    props: {
        items: Object
    },
    setup() {
        const isOpen = ref(false);

        function updateStatus(status: boolean, event: any = null) {
            console.log(event.target)
            event.target.classList.toggle('asdasdasd');
            isOpen.value = status
        }
        return { isOpen, updateStatus };
    }


});
</script>
    