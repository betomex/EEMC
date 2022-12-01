<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-sheet class="pa-4">
          <h1>Аннотация</h1>

          <div class="mt-6">
            <p>
              Целью изучения данного курса является получение базовых
              теоретических и практических навыков в фреймворке языка
              программирования JavaScript - Vue.JS
            </p>
            <p class="mb-0">Задачи учебного курса:</p>
            <ul class="mb-4">
              <li>Изучить фреймворк Vue.JS, его синтаксис</li>
              <li>
                Научиться разворачивать веб-приложение, написанное на Vue.JS
              </li>
              <li>
                Понять устройство фреймворка изнутри для написания собственных
                программных интерфейсов
              </li>
              <li>
                Она основе примеров изучить, как создавать различные элементры
                веб-страниц - от базовых компонентов до форм и целых страниц
              </li>
            </ul>
            <p class="mb-0">По завершении курса Вы приобретёте навыки:</p>
            <ul class="mb-4">
              <li>Разворачивая проектов на Vue</li>
              <li>Разработки собсвенных веб-приложений и страниц</li>
              <li>Углублённого понимания устройства языка и его компонентов</li>
              <li>Обработки потока данных на странице</li>
            </ul>
            <p>А также сможете применять полученные знания на практике.</p>
            <p class="mb-0">
              На данный момент курс содержит два основных раздела:
            </p>
            <ul class="mb-4">
              <li>
                Основы Vue.JS - от введения до основ компонентов. На раздел
                выделяется 16 академических часов
              </li>
              <li>
                Продвинутые компоненты - от их регистрации до передачи атрибутов
                и свойств. На раздел выделяется 16 академических часов
              </li>
            </ul>
            <h3 class="mb-4">Список рекомендуемых к изучению источников</h3>
            <div class="d-flex flex-column">
              <a
                href="https://vuejs.org/guide/introduction.html"
                class="text-decoration-none green--text"
                >Официальная документация Vue.JS</a
              >
              <a
                href="https://v3.ru.vuejs.org/ru/guide/introduction.html"
                class="text-decoration-none green--text"
                >Документация Vue.JS на русском</a
              >
              <a
                href="https://v3.router.vuejs.org/ru/installation.html"
                class="text-decoration-none green--text"
                >Официальная библиотека для маршрутизации внутри приложения</a
              >
              <a
                href="https://vuex.vuejs.org/"
                class="text-decoration-none green--text"
                >Официальная библиотека для управления состоянием приложения</a
              >
              <a
                href="https://nuxtjs.org/docs/get-started/installation"
                class="text-decoration-none green--text"
                >Официальная документация Nuxt.JS - фреймворка Vue.JS</a
              >
            </div>
          </div>

          <v-btn class="mt-4" color="primary" nuxt to="/guide/[1.1] installation">
            Начать изучение
          </v-btn>
        </v-sheet>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
