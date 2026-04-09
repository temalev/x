<template>
  <div class="main">
    <img class="xnogi-logo" src="~/assets/icons/xnogi.png" width="260" alt="" />
    <VaButton
      round
      color="#fff"
      class="mt-5 p-2"
      preset="primary"
      @click="openUrl('https://remix.gg/g/66e7212a-9f5f-4ec3-9a54-b9c0364166b9?ref=D816A0E081')"
    >
      Играть (Демо)
    </VaButton>
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
    <VaButton
      round
      color="#fff"
      class="mt-5 p-2"
      preset="primary"
      @click="
                openUrl(
                  'mailto:xrvlux@gmail.com?subject=%D0%A1%D0%B0%D0%BC%D0%B0%D1%8F%20%D0%B2%D1%8B%D0%B3%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D1%86%D0%B5%D0%BD%D0%B0&body=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9F%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D0%B6%D0%B8%D1%82%D0%B5%2C%20%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D1%83%D0%B9%D1%81%D1%82%D0%B0%2C%20%D1%81%D0%B0%D0%BC%D1%83%D1%8E%20%D0%B2%D1%8B%D0%B3%D0%BE%D0%B4%D0%BD%D1%83%D1%8E%20%D1%86%D0%B5%D0%BD%D1%83.'
                )
              "
    >
      Связаться
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
          <div class="acquire-buttons">
            <a
              class="acquire-button acquire-button--contact"
              href="mailto:xrvlux@gmail.com?subject=%D0%A1%D0%B0%D0%BC%D0%B0%D1%8F%20%D0%B2%D1%8B%D0%B3%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D1%86%D0%B5%D0%BD%D0%B0&body=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9F%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D0%B6%D0%B8%D1%82%D0%B5%2C%20%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D1%83%D0%B9%D1%81%D1%82%D0%B0%2C%20%D1%81%D0%B0%D0%BC%D1%83%D1%8E%20%D0%B2%D1%8B%D0%B3%D0%BE%D0%B4%D0%BD%D1%83%D1%8E%20%D1%86%D0%B5%D0%BD%D1%83."
            >
              <span class="acquire-button__inner">
                <svg
                  class="acquire-button__icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill="currentColor"
                    d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.25-7.4 4.62a1.2 1.2 0 0 1-1.2 0L4 8.25V6.9l7.9 4.94L20 6.9v1.35Z"
                  />
                </svg>
                <span class="acquire-button__text">
                  <span class="acquire-button__title">Написать продавцу</span>
                  <span class="acquire-button__subtitle">самая выгодная цена</span>
                </span>
              </span>
            </a>
            <a
              class="acquire-button acquire-button--icon"
              href="https://www.ozon.ru/seller/iksnogi-2176847/?miniapp=seller_2176847"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ozon"
            >
              <img src="~/assets/icons/ozon.svg" alt="Ozon" />
            </a>
            <a
              class="acquire-button acquire-button--icon"
              href="https://www.avito.ru/user/9269a0adb628f98c3f1935e13c21af3f/profile?src=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Avito"
            >
              <img src="~/assets/icons/avito_logo.svg" alt="Avito" />
            </a>
            <a
              class="acquire-button acquire-button--icon"
              href="https://www.wildberries.ru/seller/250041580"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Wildberries"
            >
              <img src="~/assets/icons/wb.svg" alt="Wildberries" />
            </a>

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
  .acquire-button--icon {
    width: 100% !important;
    min-width: 0 !important;
  }

  .acquire-button--icon img {
    width: 40px;
    height: 40px;
  }
  .main {
    padding-bottom: 24px;
  }

  .cards {
    flex-direction: column;
    margin: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .va-card {
    width: 100%;
  }

  .story-content {
    p {
      font-size: 14px;
      text-align: left;
    }
  }

  .acquire-buttons {
    width: 100% !important;
    display: grid !important;
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    align-items: stretch;
  }

  .acquire-button--contact {
    grid-column: 1 / -1;
    justify-content: center;
    width: 100% !important;
    min-width: 0 !important;
  }

  .acquire-button__text {
    text-align: center;
  }

  .acquire-button__title,
  .acquire-button__subtitle {
    white-space: normal;
  }
}

.acquire-buttons {
  display: flex;
  width: fit-content;
  gap: 10px;
  align-items: stretch;
}

.acquire-button {
  height: 56px;
  padding: 0 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  text-decoration: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  min-width: 56px;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.081),
    rgba(231, 247, 255, 0.54) 45%,
    rgba(255, 255, 255, 0.366)
  );
  border: 1px solid rgba(255, 255, 255, 0.55);
  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(14px) saturate(175%);
  -webkit-backdrop-filter: blur(14px) saturate(175%);

  transition:
    transform 140ms ease,
    box-shadow 140ms ease,
    border-color 140ms ease;
}

.acquire-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      120px 60px at 20% 15%,
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0) 60%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0)
    );
  opacity: 0.9;
  pointer-events: none;
}

.acquire-button > * {
  position: relative;
  z-index: 1;
}

.acquire-button:hover {
  background: linear-gradient(
    135deg,
    rgba(231, 247, 255, 0.738) 45%,
    rgba(255, 255, 255, 0.471),
    rgba(255, 255, 255, 0.508)
  );
  transform: translateY(-1px);
  box-shadow:
    0 14px 30px rgba(0, 0, 0, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
  border-color: rgba(255, 255, 255, 0.75);
}

.acquire-button:active {
  transform: translateY(0);
  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.55);
}

.acquire-button:focus-visible {
  outline: 2px solid rgba(130, 246, 76, 0.7);
  outline-offset: 2px;
}

.acquire-button--icon {
  padding: 0;
  width: 64px;
  min-width: 64px;
}

.acquire-button--icon img {
  width: 44px;
  height: 44px;
  object-fit: contain;
}

.acquire-button--contact {
  justify-content: flex-start;
  min-width: 240px;
}

.acquire-button__inner {
  display: flex;
  align-items: center;
  gap: 10px;
}

.acquire-button__icon {
  width: 22px;
  height: 22px;
  color: #000;
  flex: 0 0 auto;
}

.acquire-button__text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
  text-align: left;
}

.acquire-button__title {
  color: #000;
  font-weight: 600;
  font-size: 13px;
  white-space: nowrap;
}

.acquire-button__subtitle {
  color: #000;
  opacity: 0.7;
  font-size: 12px;
  white-space: nowrap;
}
</style>
