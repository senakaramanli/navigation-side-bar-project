<template>
  <div class="page-content">
    <Breadcrumb :pageName="pageName" />
    <div class="title">
      <MainTitle :mainTitle="title" />
      <Subtitle :subtitle="subtitle" />
    </div>
    <div class="page-text">
      <ContentTitle :contentTitle="contentTitle" />
      <Content :contentText="contentText" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Breadcrumb from './Breadcrumb.vue';
import MainTitle from './MainTitle.vue';
import Subtitle from './Subtitle.vue';
import Content from './Content.vue';
import ContentTitle from './ContentTitle.vue';
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router';
import config from '../config.json';


export default defineComponent({
  name: 'Projects',
  components: {
    Breadcrumb,
    MainTitle,
    Subtitle,
    ContentTitle,
    Content
  },
  setup() {
    const title = ref('Welcome to Flow Forge Studio')
    const subtitle = ref('We’re glad you’re here! Here’s some important info to get started.')
    const contentTitle = ref('How to 10x your design workflow')
    const contentText = ref('This initiative was born out of necessity when we encountered shortcomings in various Figma UI kits, which often lacked in size, flexibility, or quality—sometimes even in all three aspects. Consequently, we found ourselves repeatedly remaking subpar components, prompting the need for a comprehensive "ultimate starter" kit for new freelance projects and design systems. The goal was to avoid starting from scratch each time and eliminate the tedious process of rebuilding common components repeatedly. <br /> <br /> <span class="blue-underlined">Flow Forge Studio</span> was developed to address these challenges. We meticulously considered every element necessary for crafting modern and aesthetically pleasing UI and websites, bundling them into a well-organized package. The UI kit is designed for versatile use in unlimited projects, intentionally crafted to be neutral, flexible, and scalable, serving as a robust foundation for any endeavor. <br /> <br /> Feel free to explore this UI kit for your upcoming projects: <br /> <br /> 1.Duplicate your copy effortlessly. <br /> 2.Customize branding elements such as color styles and typefaces. <br /> 3.Design and iterate swiftly using pre-built sections and page examples. <br /> 4.Trim down the kit by deleting any unnecessary parts or components. By leveraging this resource, not only can you streamline your workflow, but you also gain the flexibility to handle more clients or allocate additional time to refine your designs, ultimately maximizing the countless hours saved!')
    const route = useRoute();

    const pageName = computed(() => {
      return route.name?.toString()
    })


    return {
      title, subtitle, contentTitle, contentText, pageName, config
    }
  }

});
</script>
