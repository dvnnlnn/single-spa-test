<template>
  <div :style="{ display: 'flex', height: '100%' }">
    <!-- parent app menu -->
    <a-menu
      :default-selected-keys="[selected]"
      :open-keys="['sub']"
      :style="{ height: '100%', width: '250px' }"
      mode="inline"
    >
      <a-sub-menu key="sub">
        <span slot="title">
          <a-icon type="appstore" />
          <span>Single-SPA Demo</span>
        </span>
        <a-menu-item key="child-1">
          <!-- child app 1 link -->
          <a href="/child-1/">
            Child App 1
          </a>
        </a-menu-item>
        <a-menu-item key="child-2">
          <!-- child app 2 link -->
          <a href="/child-2/">
            Child App 2
          </a>
        </a-menu-item>
        <a-menu-item key="parent">
          <!-- parent app link -->
          <router-link to="/">Parent Home</router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
    <!-- child app view -->
    <div id="child-app"></div>
    <!-- parent router view -->
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
    };
  },
  watch: {
    $route: {
      handler(val) {
        const { path } = val;
        if (path === '/child-1/') this.selected = 'child-1';
        else if (path === '/child-2/') this.selected = 'child-2';
        else this.selected = 'parent';
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
