<template>
  <div class="side-navigation-bar grow" @mouseenter="isSidebarOpen = true" @mouseleave="isSidebarOpen = false">
    <div class="navigation-bar-content">
      <div class="logo-part flex justify-between items-center">
        <div class="logo-label flex justify-between">
          <div class="logo">
            <router-link to="/"><img src="../images/Logo.png"></router-link>
          </div>
          <div class="label flex items-center">
            <span>{{ sideBarTitle }}</span>
          </div>
        </div>
        <div class="icon-part flex justify-between items-center">
          <div class="notification-icon">
            <img src="../images/notification-icon.svg">
          </div>
          <div class="menu-icon">
            <img src="../images/menu-icon.svg">
          </div>
        </div>
      </div>
      <div class="search-bar-part">
        <div class="search-bar flex">
          <div class="search-icon">
            <img src="../images/search-icon.svg">
          </div>
          <input class="search-input" placeholder="Search">
        </div>
      </div>
      <SideBarItem :isSidebarOpen="isSidebarOpen" />
      <UserProfile />
    </div>
  </div>
  <slot></slot>
</template>
    
<script lang="ts">
import { defineComponent, ref } from 'vue';
import SideBarItem from '../components/SideBarItem.vue';
import UserProfile from '../components/UserProfile.vue';

export default defineComponent({

  name: "AppLayout",
  components: {
    SideBarItem,
    UserProfile
  },
  setup() {
    const isSidebarOpen = ref(false);
    const sideBarTitle = ref('Flow Forge');


    return { sideBarTitle, isSidebarOpen };
  }

});
</script>
    
<style scoped></style>
    