<template>
  <div class="layout-root">
    <img class="layout-bg" src="/background.webp" alt="" />
    <main class="layout-content">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.layout-root {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.layout-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  filter: brightness(0.2);
  z-index: -1;
}

.layout-content {
  position: relative;
  z-index: 1;
}
</style>


