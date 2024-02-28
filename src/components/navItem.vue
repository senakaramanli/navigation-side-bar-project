<template>
    <div v-for="x in items" class="nav-item">
        <div :key="x.id"
            :class="{ 'title-logo active flex justify-between': selectedItem === x.id, 'title-logo flex justify-between': selectedItem !== (x.id) }"
            @click="selectMenuItem(x.id)">
            <div class="left-side flex items-center">
                <img :src="x.iconUrl" style="width:24px; height:24px">
                <div class="label">{{ x.title }}</div>
            </div>
            <div class="right-side">
                <img src="../images/arrow-icon.svg">
            </div>
        </div>
        <ul v-for="j in x.subTitles" v-if="x.id === selectedItem">
            <li :class="{ 'active': $route.name === j.name }">
                <router-link :to="j.path">{{ j.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
    name: "NavItem",
    components: {
    },
    props: {
        items: Object,
        isSidebarOpen: Boolean
    },
    setup(props) {

        const selectedItem = ref(null)

        const selectMenuItem = (itemId: null) => {

            if (selectedItem.value === '') {
                selectedItem.value = itemId
            } else if (selectedItem.value === itemId) {
                selectedItem.value = null
            } else if (selectedItem.value !== '' && selectedItem.value !== itemId) {
                selectedItem.value = itemId
            }
        };


        watch(() => props.isSidebarOpen, (firstVal, lastVal) => {
            selectedItem.value = null
        })


        return { selectMenuItem, selectedItem };
    }


});
</script>
    