<template>
  <div class="main">
    <img class="bg" src="~/assets/images/background.webp" alt="">
    <img class="xnogi-logo" src="~/assets/icons/xnogi.png" width="260" alt="">
    <div class="cards">
      <VaCard>
        <VaCardTitle>Смотреть</VaCardTitle>
        <VaCardContent> <span style="color: #000"> Не разблокировано </span> </VaCardContent>
      </VaCard>
      <VaCard>
        <VaCardTitle>Обрести</VaCardTitle>
        <VaCardContent>
          <div class="d-flex gap-2">
            <VaButton color="#fff" @click="openUrl('https://www.ozon.ru/seller/iksnogi-2176847/?miniapp=seller_2176847')"> <img src="~/assets/icons/ozon.svg" width="60" alt=""> </VaButton>
            <VaButton color="#fff" @click="openUrl('https://www.avito.ru/user/9269a0adb628f98c3f1935e13c21af3f/profile?src=sharing')">
              <img src="~/assets/icons/avito_logo.svg" width="60" alt="">
              </VaButton>
            <VaButton color="#fff" @click="openUrl('https://www.wildberries.ru/seller/250041580')"> <img src="~/assets/icons/wb.svg" width="60" alt=""> </VaButton>
          </div>
        </VaCardContent>
      </VaCard>
      <VaCard>
        <VaCardTitle>Изучить</VaCardTitle>
        <VaCardContent> <span style="color: #000"> Не разблокировано </span> </VaCardContent>
      </VaCard>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    openUrl(link) {
      window.open(link)
    }
  }
}
</script>
<style scoped lang="scss">

.main {
  position: relative;
  height: 100vh;
  align-content: center;
  position: fixed;
  inset: 0;
  z-index: -1;
  // background: linear-gradient(180deg, #1f1f1f, #060606 60%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-image: url(~/assets/images/background.png);
  // background-position: top;
  // background-repeat: no-repeat;
  // background-size: cover;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  filter: brightness(0.2);
}
// .main::before {
//   content: "";
//   position: absolute;
//   inset: -20%; /* делаем большой слой для плавности */
//   background: radial-gradient(
//       circle at 20% 30%,
//       rgba(255, 255, 255, 0.06) 0 140px,
//       transparent 200px
//     ),
//     radial-gradient(
//       circle at 70% 15%,
//       rgba(255, 255, 255, 0.088) 0 120px,
//       transparent 170px
//     ),
//     radial-gradient(
//       circle at 40% 75%,
//       rgba(255, 255, 255, 0.04) 0 160px,
//       transparent 220px
//     );
//   filter: blur(20px);
//   mix-blend-mode: screen;
//   animation: floatSpots 18s infinite linear;
//   opacity: 0.95;
// }

.xnogi-logo {
  filter: drop-shadow(2px 4px 16px #82f64c)
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
