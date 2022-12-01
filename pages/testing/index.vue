<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-sheet class="pa-4">
          <h1>Итоговое тестирование</h1>
          <hr class="my-3" />

          <v-form class="mt-6">
            <div class="mb-16">
              <h3>1. Что можно разработать с использованием Vue?</h3>
              <v-checkbox
                hide-details
                v-model="first"
                label="Десктопное приложение"
                :value="1"
              />
              <v-checkbox
                hide-details
                v-model="first"
                label="Мобильное приложение"
                :value="2"
              />
              <v-checkbox
                hide-details
                v-model="first"
                label="Веб-приложение"
                :value="3"
              />
            </div>

            <div class="mb-16">
              <h3>
                2. Как называется свойство, в котором прописываются все функции
                компонента?
              </h3>
              <v-radio-group v-model="second">
                <v-radio label="functions: { }" :value="1" />
                <v-radio label="components: { }" :value="2" />
                <v-radio label="storage: { }" :value="3" />
                <v-radio label="methods: { }" :value="4" />
              </v-radio-group>
            </div>

            <div class="mb-16">
              <h3>3. Как можно вывести значение переменной message в HTML?</h3>
              <v-checkbox
                hide-details
                v-model="third"
                label="{ message }"
                :value="1"
              />
              <v-checkbox
                hide-details
                v-model="third"
                label="<message />"
                :value="2"
              />
              <v-checkbox
                hide-details
                v-model="third"
                :label="`К тегу добавить атрибут v-text=&quot;message&quot;`"
                :value="3"
              />
              <v-checkbox
                hide-details
                v-model="third"
                :label="`К тегу добавить атрибут :value=&quot;message&quot;`"
                :value="4"
              />
              <v-checkbox
                hide-details
                v-model="third"
                :label="`К тегу добавить атрибут v-html=&quot;message&quot;`"
                :value="5"
              />
              <v-checkbox
                hide-details
                v-model="third"
                label="message"
                :value="6"
              />
              <v-checkbox
                hide-details
                v-model="third"
                :label="`{{ message }}`"
                :value="7"
              />
            </div>

            <div class="mb-16">
              <h3>4. Как установить атрибут title у тэга p?</h3>
              <v-checkbox
                hide-details
                v-model="fourth"
                :label="`<p title=&quot;{{ text }}&quot;>Текст</p>`"
                :value="1"
              />
              <v-checkbox
                hide-details
                v-model="fourth"
                :label="`<p :title=&quot;{{text}}&quot;>Текст</p>`"
                :value="2"
              />
              <v-checkbox
                hide-details
                v-model="fourth"
                :label="`<p :title=&quot;text&quot;>Текст</p>`"
                :value="3"
              />
              <v-checkbox
                hide-details
                v-model="fourth"
                :label="`<p v-title=&quot;text&quot;>Текст</p>`"
                :value="4"
              />
              <v-checkbox
                hide-details
                v-model="fourth"
                :label="`<p v-bind:title=&quot;text&quot;>Текст</p>`"
                :value="5"
              />
              <v-checkbox
                hide-details
                v-model="fourth"
                :label="`<p title=&quot;text&quot;>Текст</p>`"
                :value="6"
              />
            </div>

            <div class="mb-16">
              <h3>5. Как получить данные из текстового поля?</h3>
              <v-radio-group v-model="fifth">
                <v-radio label="$event.value" :value="1" />
                <v-radio label="$event.target.value" :value="2" />
                <v-radio label="$event.target" :value="3" />
                <v-radio label="$target.value" :value="4" />
                <v-radio label="$event.target.val" :value="5" />
              </v-radio-group>
            </div>

            <div class="mb-16">
              <h3>6. Как вызвать событие по клику на элемент?</h3>
              <v-checkbox
                hide-details
                v-model="sixth"
                :label="`<span @click=&quot;change&quot;>Текст</span>`"
                :value="1"
              />
              <v-checkbox
                hide-details
                v-model="sixth"
                :label="`<span v-click=&quot;change&quot;>Текст</span>`"
                :value="2"
              />
              <v-checkbox
                hide-details
                v-model="sixth"
                :label="`<span onclick=&quot;change&quot;>Текст</span>`"
                :value="3"
              />
              <v-checkbox
                hide-details
                v-model="sixth"
                :label="`<span @click=&quot;{{change}}&quot;>Текст</span>`"
                :value="4"
              />
              <v-checkbox
                hide-details
                v-model="sixth"
                :label="`<span v-on-click=&quot;change&quot;>Текст</span>`"
                :value="5"
              />
              <v-checkbox
                hide-details
                v-model="sixth"
                :label="`<span v-on:click=&quot;change&quot;>Текст</span>`"
                :value="6"
              />
            </div>

            <div class="mb-16">
              <h3>
                7. Какая директива используется для создания двунаправленной
                привязки данных?
              </h3>
              <v-radio-group v-model="seventh">
                <v-radio label="v-bind" :value="1" />
                <v-radio label="v-inline" :value="2" />
                <v-radio label="v-on" :value="3" />
                <v-radio label="v-once" :value="4" />
                <v-radio label="v-model" :value="5" />
              </v-radio-group>
            </div>

            <div class="mb-16">
              <h3>
                8. Какой модификатор используется, если нужно вызвать обработчик
                события только один раз?
              </h3>
              <v-radio-group v-model="eighth">
                <v-radio
                  :label="`<a @click.once=&quot;handleClick&quot;></a>`"
                  :value="1"
                />
                <v-radio
                  :label="`<a @click.prevent-once=&quot;handleClick&quot;></a>`"
                  :value="2"
                />
                <v-radio
                  :label="`<a @click.stop=&quot;handleClick&quot;></a>`"
                  :value="3"
                />
                <v-radio
                  :label="`<a @click.passive=&quot;handleClick&quot;></a>`"
                  :value="4"
                />
              </v-radio-group>
            </div>

            <div class="mb-16">
              <h3>
                9. Отметьте хуки жизненного цила Vue по очерёдности вызова
              </h3>
              <v-checkbox
                hide-details
                v-model="nineth"
                :label="`beforeUpdate`"
                :value="1"
              />
              <v-checkbox
                hide-details
                v-model="nineth"
                :label="`created`"
                :value="2"
              />
              <v-checkbox
                hide-details
                v-model="nineth"
                :label="`mounted`"
                :value="3"
              />
              <v-checkbox
                hide-details
                v-model="nineth"
                :label="`beforeCreate`"
                :value="4"
              />
              <v-checkbox
                hide-details
                v-model="nineth"
                :label="`beforeMount`"
                :value="5"
              />
              <v-checkbox
                hide-details
                v-model="nineth"
                :label="`beforeDestroy`"
                :value="6"
              />
              <v-checkbox
                hide-details
                v-model="nineth"
                :label="`destroyed`"
                :value="7"
              />
              <v-checkbox
                hide-details
                v-model="nineth"
                :label="`updated`"
                :value="8"
              />
            </div>

            <div class="mb-16">
              <h3>10. В чем разница между директивами v-show и v-if?</h3>
              <v-radio-group v-model="tenth">
                <v-radio
                  label="v-if гарантирует, что слушатели событий и дочерние компоненты уничтожаются и воссоздаются при переключениях условия"
                  :value="1"
                />
                <v-radio
                  label="Элемент всегда отрисовывается, вне зависимости от исходного состояния"
                  :value="2"
                />
                <v-radio
                  label="У v-if выше затраты на переключение, а v-show имеет больше затрат на первичную отрисовку"
                  :value="3"
                />
                <v-radio label="Все вышеперечисленные" :value="4" />
              </v-radio-group>
            </div>

            <div class="mb-16">
              <h3>11. Выберите модификаторы клавиш мыши</h3>
              <v-checkbox
                hide-details
                v-model="eleventh"
                :label="`up`"
                :value="1"
              />
              <v-checkbox
                hide-details
                v-model="eleventh"
                :label="`middle`"
                :value="2"
              />
              <v-checkbox
                hide-details
                v-model="eleventh"
                :label="`left`"
                :value="3"
              />
              <v-checkbox
                hide-details
                v-model="eleventh"
                :label="`click`"
                :value="4"
              />
              <v-checkbox
                hide-details
                v-model="eleventh"
                :label="`doubleclick`"
                :value="5"
              />
              <v-checkbox
                hide-details
                v-model="eleventh"
                :label="`right`"
                :value="6"
              />
              <v-checkbox
                hide-details
                v-model="eleventh"
                :label="`down`"
                :value="7"
              />
            </div>

            <h3>
              12. Сколько во Vue представлено нативных конструкторов типов?
            </h3>
            <div class="mb-16 mt-10" style="width: 400px">
              <v-slider
                v-model="twelveth"
                max="10"
                min="1"
                step="1"
                hide-details
                thumb-label="always"
              />
            </div>

            <div class="mb-16">
              <h3>
                13. Отметьте неправильный пример использования директивы v-for
              </h3>
              <v-radio-group v-model="thirteen">
                <v-radio
                  :label="`v-for=&quot;(item, index) in items&quot;`"
                  :value="1"
                />
                <v-radio
                  :label="`v-for=&quot;(value, key, index) of user&quot;`"
                  :value="2"
                />
                <v-radio
                  :label="`v-for=&quot;let item in items&quot;`"
                  :value="3"
                />
              </v-radio-group>
            </div>

            <div class="mb-16">
              <h3>
                14. Что верно относительно совместного использования директив
                v-for и v-if?
              </h3>
              <v-checkbox
                hide-details
                v-model="fourteen"
                :label="`Не рекомендуется их совместное использование`"
                :value="1"
              />
              <v-checkbox
                hide-details
                v-model="fourteen"
                :label="`v-if имеет больший приоритет, чем v-for`"
                :value="2"
              />
              <v-checkbox
                hide-details
                v-model="fourteen"
                :label="`v-vor имеет больший приоритет, чем v-if`"
                :value="3"
              />
              <v-checkbox
                hide-details
                v-model="fourteen"
                :label="`В условии v-if не будет доступа к переменным из области видимости v-for`"
                :value="4"
              />
              <v-checkbox
                hide-details
                v-model="fourteen"
                :label="`Всё перечисленное`"
                :value="5"
              />
            </div>

            <div class="mb-16">
              <h3>
                15. Какой из перечисленных методов массивов не запускет
                обновление отображения
              </h3>
              <v-radio-group v-model="fifteen">
                <v-radio label="push()" :value="1" />
                <v-radio label="pop()" :value="2" />
                <v-radio label="shift()" :value="3" />
                <v-radio label="unshift()" :value="4" />
                <v-radio label="splice()" :value="5" />
                <v-radio label="sort()" :value="6" />
                <v-radio label="concat()" :value="7" />
                <v-radio label="reverse()" :value="8" />
              </v-radio-group>
            </div>

            <div class="mb-16">
              <h3>
                16. Отметьте каких модификаторов клавиш не существует во Vue
              </h3>
              <v-checkbox
                hide-details
                v-model="sixteen"
                label=".enter"
                :value="1"
              />
              <v-checkbox
                hide-details
                v-model="sixteen"
                label=".tab"
                :value="2"
              />
              <v-checkbox
                hide-details
                v-model="sixteen"
                label=".delete"
                :value="3"
              />
              <v-checkbox
                hide-details
                v-model="sixteen"
                label=".esc"
                :value="4"
              />
              <v-checkbox
                hide-details
                v-model="sixteen"
                label=".backspace"
                :value="5"
              />
              <v-checkbox
                hide-details
                v-model="sixteen"
                label=".up"
                :value="6"
              />
              <v-checkbox
                hide-details
                v-model="sixteen"
                label=".down"
                :value="7"
              />
              <v-checkbox
                hide-details
                v-model="sixteen"
                label=".left"
                :value="8"
              />
              <v-checkbox
                hide-details
                v-model="sixteen"
                label=".right"
                :value="9"
              />
              <v-checkbox
                hide-details
                v-model="sixteen"
                label=".space"
                :value="10"
              />
            </div>

            <div class="mb-16">
              <h3>
                17. Какая передача props в качестве входных параметров
                недопустима
              </h3>
              <v-radio-group v-model="seventeen">
                <v-radio :label="`:value=&quot;42&quot;`" :value="1" />
                <v-radio :label="`:value=&quot;false&quot;`" :value="2" />
                <v-radio
                  :label="`:value=&quot;[234, 266, 273]&quot;`"
                  :value="3"
                />
                <v-radio
                  :label="`:author=&quot;{ name: 'Veronica', company: 'Veridian Dynamics' }&quot;`"
                  :value="4"
                />
                <v-radio label="Всё выше перечисленное допустимо" :value="5" />
              </v-radio-group>
            </div>

            <div class="mb-16">
              <h3>
                18. В каких случаях при передаче boolean свойства оно примет
                значение true?
              </h3>
              <v-checkbox
                hide-details
                v-model="eighteen"
                :label="`<TestComponent canShow />`"
                :value="1"
              />
              <v-checkbox
                hide-details
                v-model="eighteen"
                :label="`<TestComponent canShow=&quot;can-show&quot; />`"
                :value="2"
              />
              <v-checkbox
                hide-details
                v-model="eighteen"
                :label="`<TestComponent canShow=&quot;&quot; />`"
                :value="3"
              />
              <v-checkbox
                hide-details
                v-model="eighteen"
                :label="`<TestComponent canShow=&quot;canShow&quot; />`"
                :value="4"
              />
              <v-checkbox
                hide-details
                v-model="eighteen"
                :label="`<TestComponent canShow=&quot;true&quot; />`"
                :value="5"
              />
            </div>

            <div class="mb-16">
              <h3>19. Как во Vue 3 выглядит кастомная реализация v-model?</h3>
              <v-radio-group v-model="nineteen">
                <v-radio
                  :label="`<input v-custom-model=&quot;pageTitle&quot; />`"
                  :value="1"
                />
                <v-radio
                  :label="`<input :value=&quot;pageTitle&quot; @input=&quot;pageTitle = $event&quot; />`"
                  :value="2"
                />
                <v-radio
                  :label="`<input :value=&quot;pageTitle&quot; @change=&quot;pageTitle = $event&quot;`"
                  :value="3"
                />
                <v-radio
                  :label="`<input :modelValue=&quot;pageTitle&quot; @update:modelValue=&quot;pageTitle = $event&quot; />`"
                  :value="4"
                />
              </v-radio-group>
            </div>

            <div class="mb-16">
              <h3>20. В чём заключается смысл однофайлового компонента?</h3>
              <v-radio-group v-model="twenty">
                <v-radio
                  :label="`Один такой компонент с его шаблоном, скриптом и стилями находится в одном файле`"
                  :value="1"
                />
                <v-radio
                  :label="`В одном файле содержится код всей страницы. Это очень удобно`"
                  :value="2"
                />
                <v-radio :label="`Оба утверждения верны`" :value="3" />
              </v-radio-group>
            </div>
          </v-form>

          <v-btn
            color="primary"
            @click="handleFormSubmit"
            :disabled="!submitDisabled"
            >Отправить</v-btn
          >
        </v-sheet>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { isEmpty } from "lodash";

export default {
  name: "TestingPage",
  data() {
    return {
      first: [],
      second: 0,
      third: [],
      fourth: [],
      fifth: 0,
      sixth: [],
      seventh: 0,
      eighth: 0,
      nineth: [],
      tenth: 0,
      eleventh: [],
      twelveth: 0,
      thirteen: 0,
      fourteen: [],
      fifteen: 0,
      sixteen: [],
      seventeen: 0,
      eighteen: [],
      nineteen: 0,
      twenty: 0
    };
  },
  computed: {
    submitDisabled() {
      return (
        isEmpty(this.first) ||
        !this.second ||
        isEmpty(this.third) ||
        isEmpty(this.fourth) ||
        !this.fifth ||
        isEmpty(this.sixth) ||
        !this.seventh ||
        !this.eighth ||
        isEmpty(this.nineth) ||
        !this.tenth ||
        isEmpty(this.eleventh) ||
        !this.twelveth ||
        !this.thirteen ||
        isEmpty(this.fourteen) ||
        !this.fifteen ||
        isEmpty(this.sixteen) ||
        !this.seventeen ||
        isEmpty(this.eighteen) ||
        !this.nineteen ||
        !this.twenty
      );
    },
  },
  methods: {
    handleFormSubmit() {
      const answers = [
        this.first,
        this.second,
        this.third,
        this.fourth,
        this.fifth,
        this.sixth,
        this.seventh,
        this.eighth,
        this.nineth,
        this.tenth,
        this.eleventh,
        this.twelveth,
        this.thirteen,
        this.fourteen,
        this.fifteen,
        this.sixteen,
        this.seventeen,
        this.eighteen,
        this.nineteen,
        this.twenty,
      ]

      const sortedAnswers = answers.map((answer, index) => {
        if (index === 8 || typeof answer === 'number') return answer
        return answer.sort()
      })

      this.$store.commit('setAnswers', sortedAnswers)
      this.$router.push({ name: 'testing-testing_results' })
    },
  }
};
</script>
