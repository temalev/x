<template>
  <div class="product-page" v-if="product">
    <ElBreadcrumb separator="›" class="product-breadcrumb">
      <ElBreadcrumbItem to="/">Главная</ElBreadcrumbItem>
      <ElBreadcrumbItem to="/products">Продукция</ElBreadcrumbItem>
      <ElBreadcrumbItem>{{ product.name }}</ElBreadcrumbItem>
    </ElBreadcrumb>

    <div class="product-layout">
      <ElCard class="product-main" shadow="always">
        <div class="product-header">
          <h1 class="product-title">
            {{ product.name }}
          </h1>

          <ElTag
            v-if="product.limited"
            type="danger"
            size="small"
            effect="dark"
          >
            ЛИМИТИРОВАННЫЙ ВЫПУСК
          </ElTag>
        </div>

        <div class="product-content">
          <div class="product-image-wrapper">
            <div class="product-image-placeholder">
              <span class="product-image-label">Фото скоро будет</span>
            </div>
          </div>

          <p class="product-description">
          Подробное описание для этого продукта пока в разработке.
          Если хочешь — можем отдельно прописать тексты под каждый экземпляр.
          </p>
        </div>

        <div v-if="product.tags?.length" class="product-tags">
          <span class="tags-label">Теги:</span>
          <ElTag
            v-for="tag in product.tags"
            :key="tag"
            size="small"
            effect="plain"
          >
            {{ tag }}
          </ElTag>
        </div>

        <div class="product-actions">
          <ElButton type="primary" @click="goToShop">
            Открыть каталог магазинов
          </ElButton>
          <ElButton @click="goBack">
            Назад к списку
          </ElButton>
        </div>
      </ElCard>
    </div>
  </div>

  <div v-else class="product-page product-page--not-found">
    <h1>Товар не найден</h1>
    <p>Похоже, такого персонажа ещё нет в каталоге.</p>
    <NuxtLink to="/products">Вернуться к продукции</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ElBreadcrumb, ElBreadcrumbItem, ElCard, ElTag, ElButton } from 'element-plus'
import { useRoute, useRouter } from '#app'
import { getProductBySlug } from '~/data/products'

const route = useRoute()
const router = useRouter()

const slug = route.params.slug as string
const product = getProductBySlug(slug)

const goBack = () => {
  router.push('/products')
}

const goToShop = () => {
  window.open(
    'https://www.ozon.ru/seller/iksnogi-2176847/?miniapp=seller_2176847',
    '_blank'
  )
}
</script>

<style scoped lang="scss">
.product-page {
  padding: 32px 20px 40px;
  max-width: 900px;
  margin: 0 auto;
  color: #fff;
}

.product-page--not-found {
  text-align: center;
}

.product-breadcrumb {
  margin-bottom: 16px;
}

.product-layout {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.product-main {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08),
    rgba(255, 255, 255, 0.06)
  );
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
}

.product-content {
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr);
  gap: 24px;
  align-items: flex-start;
}

.product-image-wrapper {
  width: 100%;
}

.product-image-placeholder {
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 16px;
  border: 1px dashed rgba(255, 255, 255, 0.32);
  background: radial-gradient(
      circle at 20% 20%,
      rgba(255, 255, 255, 0.1),
      transparent 60%
    ),
    rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image-label {
  font-size: 14px;
  opacity: 0.9;
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  gap: 12px;
  flex-wrap: wrap;
}

.product-title {
  font-size: 28px;
  margin: 0;
}

.product-description {
  margin: 12px 0 16px;
  opacity: 0.9;
}

.product-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
}

.tags-label {
  opacity: 0.7;
  margin-right: 4px;
}

.product-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
}

@media (max-width: 600px) {
  .product-page {
    padding: 24px 16px 32px;
  }

  .product-title {
    font-size: 22px;
  }

  .product-content {
    grid-template-columns: 1fr;
  }
}
</style>


