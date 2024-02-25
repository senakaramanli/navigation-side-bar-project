<template>
  <div class="side-navigation-bar grow" @mouseleave="updateStatus(false)">
    <div class="navigation-bar-content">
      <div class="logo-part flex justify-between items-center">
        <div class="logo-label flex justify-between">
          <div class="logo">
            <img src="../images/Logo.png">
          </div>
          <div class="label flex items-center">
            <span>Flow Forge</span>
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
      <div class="nav-menu-item">
        <div class="nav-item">
          <div :class="{ 'title-logo active flex justify-between': isOpen, 'title-logo flex justify-between': !isOpen }"
            @click='updateStatus(!isOpen)'>
            <div class="left-side flex items-center">
              <img src="../images/dashboard-icon.svg" style="width:24px; height:24px">
              <div class="label">Dashboards</div>
            </div>
            <div class="right-side">
              <img src="../images/arrow-icon.svg">
            </div>
          </div>
          <ul v-if="isOpen">
            <li>Defaults</li>
            <li :class="{ 'active': $route.name === 'eCommerce' }">
              <router-link to="e-commerce">eCommerce</router-link>
            </li>
            <li :class="{ 'active': $route.name === 'Projects' }">
              <router-link to="projects">Projects</router-link>
            </li>
            <li>Marketing</li>
          </ul>
        </div>
        <div class="nav-item">
          <div class="title-logo flex justify-between">
            <div class="left-side flex">
              <img src="../images/user-icon.svg">
              <div class="label">User Profile</div>
            </div>
            <div class="right-side">
              <img src="../images/arrow-icon.svg">
            </div>
          </div>

        </div>
        <div class="nav-item">
          <div class="title-logo flex justify-between">
            <div class="left-side flex">
              <img src="../images/authentication-icon.svg">
              <div class="label">Authentication</div>
            </div>
            <div class="right-side">
              <img src="../images/arrow-icon.svg">
            </div>
          </div>
        </div>
        <div class="nav-item">
          <div class="title-logo flex justify-between">
            <div class="left-side flex">
              <img src="../images/pricing-icon.svg">
              <div class="label">Pricing</div>
            </div>
            <div class="right-side">
              <img src="../images/arrow-icon.svg">
            </div>
          </div>
        </div>
        <div class="nav-item">
          <div class="title-logo flex justify-between">
            <div class="left-side flex">
              <img src="../images/task-icon.svg">
              <div class="label">Task</div>
            </div>
            <div class="right-side">
              <img src="../images/arrow-icon.svg">
            </div>
          </div>
        </div>

      </div>
      <div class="nav-menu-item">
        <div class="item-title">Tools</div>
        <div class="nav-item">
          <div class="title-logo flex justify-between">
            <div class="left-side flex">
              <img src="../images/messages-icon.svg">
              <div class="label">Messages</div>
            </div>
            <div class="right-side">
              <img src="../images/arrow-icon.svg">
            </div>
          </div>
        </div>
        <div class="nav-item">
          <div class="title-logo flex justify-between">
            <div class="left-side flex">
              <img src="../images/calendar-icon.svg">
              <div class="label">Calendar</div>
            </div>
            <div class="right-side">
              <img src="../images/arrow-icon.svg">
            </div>
          </div>
        </div>
        <div class="nav-item">
          <div class="title-logo flex justify-between">
            <div class="left-side flex">
              <img src="../images/files-icon.svg">
              <div class="label">Files & Library</div>
            </div>
            <div class="right-side">
              <img src="../images/arrow-icon.svg">
            </div>
          </div>
        </div>
        <div class="nav-item">
          <div class="title-logo flex justify-between">
            <div class="left-side flex">
              <img src="../images/manager-icon.svg">
              <div class="label">Invoice Manager</div>
            </div>
            <div class="right-side">
              <img src="../images/arrow-icon.svg">
            </div>
          </div>
        </div>
      </div>
      <div class="nav-menu-item">
        <div class="item-title">Manage</div>
        <div class="title-logo flex justify-between">
          <div class="left-side flex">
            <img src="../images/team-icon.svg">
            <div class="label">Team</div>
          </div>
          <div class="right-side">
            <img src="../images/arrow-icon.svg">
          </div>
        </div>
        <div class="nav-item">
          <div class="title-logo flex justify-between">
            <div class="left-side flex">
              <img src="../images/client-icon.svg">
              <div class="label">Clients</div>
            </div>
            <div class="right-side">
              <img src="../images/arrow-icon.svg">
            </div>
          </div>
        </div>
        <div class="nav-item">
          <div class="title-logo flex justify-between">
            <div class="left-side flex">
              <img src="../images/integration-icon.svg">
              <div class="label">Integration</div>
            </div>
            <div class="right-side">
              <img src="../images/arrow-icon.svg">
            </div>
          </div>
        </div>
      </div>
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
    </div>
  </div>
  <slot></slot>
</template>
    
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({

  name: "AppLayout",

  setup() {
    const isOpen = ref(false);

    function updateStatus(status: boolean) {
      isOpen.value = status
    }

    return { isOpen, updateStatus };
  }

});
</script>
    
<style scoped></style>
    