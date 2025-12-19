<template>
  <div class="main">
    <img class="xnogi-logo" src="~/assets/icons/xnogi.png" width="260" alt="" />
    <VaButton
      round
      color="#fff"
      class="mt-5 p-2"
      preset="primary"
      @click="isStory = true"
    >
      Легенда об ИксНоги
    </VaButton>
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

    <el-dialog v-model="isStory" title="Легенда об ИксНоги" width="500">
      <div class="story-content">
        <p>
          В бесконечном Межпространстве, где рождается энергия и формы,
          появились Иксноги. Они не были существами в привычном смысле — это
          были сущности силы, созданные для того, чтобы помогать и защищать. Но
          их энергия была слишком велика для нематериального мира, и потому
          Создатель заключил её в физические оболочки. Так Иксноги стали
          артефактами — амулетами и талисманами, каждый со своими уникальными
          свойствами.
        </p>

        <p>
          Одни защищают от зла, другие приносят удачу, третьи дарят вдохновение
          и силу двигаться вперёд.
        </p>

        <p>
          Но истинная мощь Иксноги раскроется не сразу. Секреты будут
          проявляться постепенно — через истории, комиксы, игры и обновления,
          которые появляются в наших социальных сетях.
        </p>

        <p>
          Каждый новый символ, каждая новая глава — это ключ к новым функциям
          твоего Иксноги. Собирая разных персонажей, ты сможешь соединять их
          способности, усиливать талисманы и открывать скрытые тайны вселенной.
        </p>

        <p>
          В будущем твои Иксноги будут получать апгрейды, артефакты, новые формы
          и даже возможность участвовать в играх, где проявится их полная сила.
        </p>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="isStory = false">Закрыть</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isStory: false,
    };
  },
  methods: {
    openUrl(link) {
      window.open(link);
    },
  },
};
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

.story-content {
  line-height: 1.7;
  max-width: 600px;
  color: #cdcdcd;

  p {
    margin-bottom: 1.2em;
    text-align: justify;
    font-size: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

::v-deep {
  .el-dialog__title {
    color: #fff !important;
  }
  .el-dialog {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.076),
      rgba(255, 255, 255, 0.08)
    ) !important;
    backdrop-filter: blur(22px) saturate(200%);
    -webkit-backdrop-filter: blur(22px) saturate(200%);
    width: fit-content;
  }
}

@media (max-width: 500px) {
  .cards {
    flex-direction: column;
    margin: 0 20px;
  }

  .story-content {
    p {
      font-size: 14px;
      text-align: left;
    }
  }
}
</style>
