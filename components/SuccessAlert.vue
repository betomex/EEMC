<template>
  <v-alert
    border="left"
    colored-border
    color="green accent-3"
    elevation="2"
    icon="mdi-lightbulb-variant-outline"
    class="grey lighten-5 black--text"
  >
    <slot />
  </v-alert>
</template>

<script>
export default {
  name: "SuccessAlert",
};
</script>

<style>
.v-alert code {
  background-color: rgba(43, 36, 36, 0.1) !important;
}
</style>