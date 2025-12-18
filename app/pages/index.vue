<template>
  <div class="main">
    <img class="xnogi-logo" src="~/assets/icons/xnogi.png" width="260" alt="" />
    <VaButton
      round
      color="#fff"
      class="mt-5 p-2"
      preset="primary"
      @click="openUrl('https://t.me/+VFsKQjhg1Y9lODY6')"
    >
      Общаемся все тут
      <img class="ml-3" src="~/assets/icons/tg.webp" width="20" alt="" />
    </VaButton>
    <div class="cards mt-5">
      <VaCard>
        <VaCardTitle>Смотреть</VaCardTitle>
        <VaCardContent>
          <span style="color: #000"> Не разблокировано </span>
        </VaCardContent>
      </VaCard>
      <VaCard>
        <VaCardTitle>Обрести</VaCardTitle>
        <VaCardContent>
          <div class="d-flex gap-2">
            <VaButton
              color="#fff"
              @click="
                openUrl(
                  'https://www.ozon.ru/seller/iksnogi-2176847/?miniapp=seller_2176847'
                )
              "
            >
              <img src="~/assets/icons/ozon.svg" width="60" alt="" />
            </VaButton>
            <VaButton
              color="#fff"
              @click="
                openUrl(
                  'https://www.avito.ru/user/9269a0adb628f98c3f1935e13c21af3f/profile?src=sharing'
                )
              "
            >
              <img src="~/assets/icons/avito_logo.svg" width="60" alt="" />
            </VaButton>
            <VaButton
              color="#fff"
              @click="openUrl('https://www.wildberries.ru/seller/250041580')"
            >
              <img src="~/assets/icons/wb.svg" width="60" alt="" />
            </VaButton>
          </div>
        </VaCardContent>
      </VaCard>
      <VaCard>
        <VaCardTitle>Изучить</VaCardTitle>
        <VaCardContent>
          <span style="color: #000"> Не разблокировано </span>
        </VaCardContent>
      </VaCard>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openUrl(link) {
      window.open(link)
    },
  },
}
</script>

<style scoped lang="scss">
.main {
  position: relative;
  min-height: 100vh;
  align-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.xnogi-logo {
  filter: drop-shadow(2px 4px 16px #82f64c);
}

@keyframes floatSpots {
  0% {
    transform: translateY(0) translateX(0) scale(1);
  }
  50% {
    transform: translateY(-6%) translateX(3%) scale(1.02);
  }
  100% {
    transform: translateY(0) translateX(0) scale(1);
  }
}

.cards {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.va-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.076),
    rgba(255, 255, 255, 0.08)
  ) !important;
  backdrop-filter: blur(22px) saturate(200%);
  -webkit-backdrop-filter: blur(22px) saturate(200%);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 16px;
  box-shadow: 0 6px 28px rgba(0, 0, 0, 0.32);
  color: #fff !important;
}

@media (max-width: 500px) {
  .cards {
    flex-direction: column;
    margin: 0 20px;
  }
}
</style>


