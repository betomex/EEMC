<template>
  <v-app>
    <v-app-bar
      clipped-left
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="isDrawerActive = !isDrawerActive" />
      <v-toolbar-title>
        <NuxtLink 
          class="text-decoration-none white--text" 
          to="/"
        >ЭУМК по Vue.JS</NuxtLink>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer
      fixed
      app
    >
      <span>&copy; Панасенко И. А., КубГУ, {{ new Date().getFullYear() }} год</span>
    </v-footer>

    <NavigationDrawer :value="isDrawerActive"/>
  </v-app>
</template>

<script>
import NavigationDrawer from '~/components/NavigationDrawer.vue';

export default {
  name: "DefaultLayout",
  components: { NavigationDrawer },
  data() {
    return {
      isDrawerActive: false
    };
  }
}
</script>
