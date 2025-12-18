<template>
  <div class="products-page">
    <ElBreadcrumb separator="›" class="products-breadcrumb">
      <ElBreadcrumbItem to="/">Главная</ElBreadcrumbItem>
      <ElBreadcrumbItem>Продукция</ElBreadcrumbItem>
    </ElBreadcrumb>

    <h1 class="products-title">Продукция ИксНоги</h1>

    <p class="products-subtitle">
      Выберите персонажа или набор, чтобы посмотреть подробности.
    </p>

    <div class="products-grid">
      <NuxtLink
        v-for="product in products"
        :key="product.slug"
        :to="`/products/${product.slug}`"
        class="product-card-link"
      >
        <ElCard class="product-card" shadow="hover">
          <div class="product-image-placeholder">
            <span class="product-image-label">Фото скоро будет</span>
          </div>

          <div class="product-card-header">
            <span class="product-name">{{ product.name }}</span>

            <ElTag
              v-if="product.limited"
              type="danger"
              size="small"
              effect="dark"
            >
              ЛИМИТ
            </ElTag>
          </div>

          <div class="product-tags" v-if="product.tags?.length">
            <ElTag
              v-for="tag in product.tags"
              :key="tag"
              size="small"
              effect="plain"
            >
              {{ tag }}
            </ElTag>
          </div>
        </ElCard>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElBreadcrumb, ElBreadcrumbItem, ElCard, ElTag } from 'element-plus'
import { products } from '~/data/products'
</script>

<style scoped lang="scss">
.products-page {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;
}

.products-breadcrumb {
  margin-bottom: 16px;
}

.products-title {
  font-size: 32px;
  margin-bottom: 8px;
}

.products-subtitle {
  margin-bottom: 24px;
  opacity: 0.8;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  align-items: stretch;
}

.product-card-link {
  text-decoration: none;
  height: 100%;
  display: flex;
}

.product-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08),
    rgba(255, 255, 255, 0.06)
  );
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
  overflow: visible;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.product-card :deep(.el-card__body) {
  overflow: visible;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.product-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.product-name {
  font-weight: 600;
}

.product-image-placeholder {
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 12px;
  border: 1px dashed rgba(255, 255, 255, 0.28);
  background: radial-gradient(
      circle at 20% 20%,
      rgba(255, 255, 255, 0.12),
      transparent 60%
    ),
    rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.product-image-label {
  font-size: 13px;
  opacity: 0.9;
}

.product-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}

@media (max-width: 600px) {
  .products-page {
    padding: 24px 16px;
  }

  .products-title {
    font-size: 24px;
  }
}
</style>


