<template>
  <router-view />
  <div class="tabs">
    <router-link to="/tabs/home" class="tab-link" :class="{ 'router-link-active': isActive('/tabs/home') }">
      <ion-icon :icon="isActive('/tabs/home') ? $allIcons.home : $allIcons.homeOutline"></ion-icon>
      <span class="tab-name">Ishikiro</span>
    </router-link>

    <router-link to="/tabs/home" class="tab-link" :class="{ 'router-link-active': isActive('/tabs/home') }">
      <ion-icon :icon="isActive('/tabs/home') ? $allIcons.home : $allIcons.homeOutline"></ion-icon>
      <span class="tab-name">Ishikiro</span>
    </router-link>

  </div>
</template>

<script>
export default {
  name: "OurMenu",
  props: ['activeTab'],
  components: {},

  data() {
    return {};
  },
  methods: {
    isActive(tabPath) {
      return this.$route.path === tabPath;
    }
  }
};
</script>


<style>
.tabs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: -2px;
  padding: 12px 15px;
  background: var(--bg1);
}

.tab-link {
  text-decoration: none;
  color: var(--gray);
  display: flex;
}

.tab-link ion-icon {
  font-size: 25px;
}

.tab-link.router-link-active ion-icon {
  color: var(--premier);
}

.tab-link.router-link-active span {
  color: var(--premier);
}

.tab-name {
  font-size: 14px;
  margin: 4px;
}

@media (max-width: 700px) {
  .tab-link {
    text-decoration: none;
    color: var(--gray);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.our-relative {
  position: relative;
}
</style>
