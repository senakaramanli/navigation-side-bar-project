<template>
    <div>
        <div class="nav-menu-item" v-for="i in config.menuItems" @mouseleave="updateStatus(false)">
            <div class="item-title">{{ i.section }}</div>
            <navItem :items="i.items" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import config from '../config.json';
import navItem from './navItem.vue';

export default defineComponent({

    name: "AppLayout",
    components: {
        navItem
    },
    setup() {
        const isOpen = ref(false);

        function updateStatus(status: boolean, event: any = null) {
            console.log(event.target)
            event.target.classList.toggle('asdasdasd');
            isOpen.value = status
        }
        return { isOpen, updateStatus, config };
    }

});
</script>
    