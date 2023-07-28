<script setup>
import { ref } from "vue"
const drawer = ref(false);
const items = [
          { title: 'Home', to:"/",icon: 'mdi-home' },
          { title: 'About us',to:"/about", icon: 'mdi-help-box' }
        ]
</script>

<template>
  <v-app id="inspire" theme="dark">
    <v-navigation-drawer 
    v-model="drawer">
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Worldcoin</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>  
</template>
