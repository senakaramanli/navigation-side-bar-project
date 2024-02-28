<template>
    <div>
        <div class="nav-menu-item" v-for="i in (menuItems)">
            <div class="item-title">{{ i.section }}</div>
            <navItem :items="(i.items)" :isSidebarOpen="isSidebarOpen" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import config from '../config.json';
import navItem from './navItem.vue';


export default defineComponent({

    name: "SideBarItem",
    components: {
        navItem
    },
    props: {
        isSidebarOpen: Boolean
    },
    setup() {
        const menuItems = ref(config.menuItems)
        const isOpen = ref(false);
        function updateStatus(status: boolean) {
            isOpen.value = status
        }
        return { isOpen, updateStatus, menuItems };
    }

});
</script>
    