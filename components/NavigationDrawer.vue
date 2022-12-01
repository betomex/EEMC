<template>
  <v-navigation-drawer v-model="value" clipped fixed app>
    <v-list>
      <v-list-group
        v-for="(group, i) in groups"
        :key="i"
        active-class="white--text"
      >
        <template v-slot:activator>
          <v-list-item-title v-html="group.groupName" class="body-1" />
        </template>

        <v-list-item
          v-for="(item, j) in group.items"
          :key="j"
          active-class="white--text"
          :to="item.to"
        >
          <v-list-item-title
            v-html="item.title"
            class="body-2"
          ></v-list-item-title>
        </v-list-item>
      </v-list-group>
      <div style="height: 48px"></div>
      <div class="d-flex flex-column align-center">
        <v-btn color="success" class="mb-4">
          <nuxt-link to="/testing" class="text-decoration-none black--text"> Итоговое тестирование </nuxt-link>
        </v-btn>
        <v-btn color="success">
          <nuxt-link to="/practice" class="text-decoration-none black--text"> Практические задания </nuxt-link>
        </v-btn>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  props: {
    value: { type: Boolean, default: false },
  },
  data() {
    return {
      groups: [
        {
          groupName: "Основы",
          items: [
            {
              title: "Установка",
              to: "/guide/[1.1] installation",
            },
            {
              title: "Введение",
              to: "/guide/[1.2] introduction",
            },
            {
              title: "Экземпляры приложения <br/> & компонента",
              to: "/guide/[1.3] vue_instance",
            },
            {
              title: "Синтаксис шаблонов",
              to: "/guide/[1.4] template_syntax",
            },
            {
              title: "Свойства data и methods",
              to: "/guide/[1.5] data_and_methods",
            },
            {
              title: "Свойства computed и watch",
              to: "/guide/[1.6] computed_and_watchers",
            },
            {
              title: "Работа с классами и стилями",
              to: "/guide/[1.7] class_and_style_binding",
            },
            {
              title: "Условная отрисовка",
              to: "/guide/[1.8] conditional_rendering",
            },
            {
              title: "Условная отрисовка",
              to: "/guide/[1.9] list_rendering",
            },
            {
              title: "Обработка событий",
              to: "/guide/[1.10] event_handling",
            },
            {
              title: "Работа с формами",
              to: "/guide/[1.11] form_input_bindings",
            },
            {
              title: "Основы компонентов",
              to: "/guide/[1.12] components_basics",
            },
            {
              title: "Итого",
              to: "/guide/[1.13] summary",
            },
          ],
        },
        {
          groupName: "Продвинутые</br>компоненты",
          items: [
            {
              title: "Регистрация компонентов",
              to: "/guide/[2.1] registration",
            },
            {
              title: "Входные параметры",
              to: "/guide/[2.2] props",
            },
            {
              title: "Передача обычных атрибутов",
              to: "/guide/[2.3] attributes",
            },
            {
              title: "Итого",
              to: "/guide/[2.4] summary",
            },
          ],
        },
      ],
    };
  },
};
</script>
