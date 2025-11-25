export default defineNuxtPlugin(() => {
  // Проверка, чтобы не вставлять скрипт дважды
  if (document.getElementById('yandex-metrika-script')) return

  // Создаём скрипт
  const script = document.createElement('script')
  script.id = 'yandex-metrika-script'
  script.type = 'text/javascript'
  script.async = true
  script.src = 'https://mc.yandex.ru/metrika/tag.js?id=105507230'
  document.head.appendChild(script)

  // Инициализация Метрики
  window.ym = window.ym || function () {
    (window.ym.a = window.ym.a || []).push(arguments)
  }
  window.ym.l = 1 * new Date()

  window.ym(105507230, 'init', {
    ssr: true,
    webvisor: true,
    clickmap: true,
    ecommerce: 'dataLayer',
    accurateTrackBounce: true,
    trackLinks: true
  })
})
