<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-sheet class="pa-4">
          <h1>Экземпляры приложения & компонента</h1>
          <hr class="my-3" />

          <div class="mt-6">
            <div>
              <h2>Создание экземпляра приложения</h2>
              <v-divider class="mb-6" />
              <p>
                Создание любого приложения Vue начинается с создания нового
                экземпляра приложения с помощью функции <code>createApp</code>:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">/* опции */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                    class="line-number"
                    >2</span
                  ><br /><span class="line-number">3</span><br />
                </div>
              </div>
              <p>
                Экземпляр приложения используется для регистрации «глобальных»
                вещей, которые будут затем использоваться компонентами внутри
                этого приложения. Подробнее познакомимся дальше в руководстве,
                но в качестве небольшого примера:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'SearchInput'</span><span class="token punctuation">,</span> SearchInputComponent<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">'focus'</span><span class="token punctuation">,</span> FocusDirective<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>LocalePlugin<span class="token punctuation">)</span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                    class="line-number"
                    >2</span
                  ><br /><span class="line-number">3</span><br /><span
                    class="line-number"
                    >4</span
                  ><br /><span class="line-number">5</span><br />
                </div>
              </div>
              <p>
                Большинство из методов экземпляра приложения возвращают этот же
                экземпляр, что позволяет составлять вызовы в цепочку:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code>Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'SearchInput'</span><span class="token punctuation">,</span> SearchInputComponent<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">'focus'</span><span class="token punctuation">,</span> FocusDirective<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>LocalePlugin<span class="token punctuation">)</span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                    class="line-number"
                    >2</span
                  ><br /><span class="line-number">3</span><br /><span
                    class="line-number"
                    >4</span
                  ><br />
                </div>
              </div>
              <p>
                Полный список API приложения можно посмотреть в разделе
                Справочник API.
              </p>
            </div>
          </div>

          <div class="mt-6">
            <div>
              <h2>Корневой компонент</h2>
              <v-divider class="mb-6" />
              <p>
                Опции, передаваемые в <code>createApp</code>, используются для
                настройки корневого компонента. При монтировании приложения он
                используется как стартовая точка для отрисовки.
              </p>
              <p>
                Приложению требуется примонтироваться в DOM-элемент. Например,
                если потребуется примонтировать приложение Vue в
                <code>&lt;div id="app">&lt;/div></code>, то необходимо передать
                <code>#app</code>:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">const</span> RootComponent <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* опции */</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span>RootComponent<span class="token punctuation">)</span>
<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                    class="line-number"
                    >2</span
                  ><br /><span class="line-number">3</span><br /><span
                    class="line-number"
                    >4</span
                  ><br /><span class="line-number">5</span><br />
                </div>
              </div>
              <p>
                В отличие от большинства других методов приложения,
                <code>mount</code> не возвращает экземпляр приложения — вместо
                этого он возвращает экземпляр корневого компонента.
              </p>
              <p>
                Vue хоть и не реализует в полной мере паттерн MVVM, но
                архитектура фреймворка во многом вдохновлена им. Поэтому, как
                правило, переменную с экземпляром приложения называют
                <code>vm</code> (сокращение от ViewModel).
              </p>
              <p>
                Пусть все примеры на этой странице и нуждаются лишь в одном
                компоненте, большинство реальных приложений организованы в
                дерево вложенных, многократно переиспользуемых компонентов.
                Например, дерево компонентов приложения todo-списка может быть
                таким:
              </p>
              <div class="language- line-numbers-mode">
                <pre class="language-text"><code>Корневой компонент
└─ TodoList
   ├─ TodoItem
   │  ├─ DeleteTodoButton
   │  └─ EditTodoButton
   └─ TodoListFooter
      ├─ ClearTodosButton
      └─ TodoListStatistics
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                    class="line-number"
                    >2</span
                  ><br /><span class="line-number">3</span><br /><span
                    class="line-number"
                    >4</span
                  ><br /><span class="line-number">5</span><br /><span
                    class="line-number"
                    >6</span
                  ><br /><span class="line-number">7</span><br /><span
                    class="line-number"
                    >8</span
                  ><br />
                </div>
              </div>
              <p>
                Каждый компонент будет иметь свой собственный экземпляр
                компонента <code>vm</code>. У некоторых компонентов, таких как
                <code>TodoItem</code>, вероятно, будет несколько экземпляров,
                отображаемых в один момент времени. Все экземпляры компонентов в
                этом приложении будут иметь один и тот же экземпляр приложения.
              </p>
              <p>
                Подробнее на системе компонентов остановимся позже. Сейчас
                достаточно запомнить, что корневой компонент на самом деле ничем
                не отличается от любого другого компонента. Опции конфигурации
                такие же, как и поведение соответствующего экземпляра
                компонента.
              </p>
            </div>
          </div>

          <div class="mt-6">
            <div>
              <h2>Свойства экземпляра компонента</h2>
              <v-divider class="mb-6" />
              <p>
                Раньше в руководстве встречались свойства <code>data</code>. Все
                свойства, объявленные в <code>data</code>, доступны через
                экземпляр компонента:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> count<span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// =&gt; 4</span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                    class="line-number"
                    >2</span
                  ><br /><span class="line-number">3</span><br /><span
                    class="line-number"
                    >4</span
                  ><br /><span class="line-number">5</span><br /><span
                    class="line-number"
                    >6</span
                  ><br /><span class="line-number">7</span><br /><span
                    class="line-number"
                    >8</span
                  ><br /><span class="line-number">9</span><br />
                </div>
              </div>
              <p>
                Есть и другие опции компонента, добавляющие в экземпляр
                компонента пользовательские свойства, например
                <code>methods</code>, <code>props</code>, <code>computed</code>,
                <code>inject</code> и <code>setup</code>. Подробнее о каждой из
                них поговорим далее в руководстве. Все свойства экземпляра
                компонента, независимо от того, как они определены, будут
                доступны в шаблоне компонента.
              </p>
              <p>
                Через экземпляр компонента Vue также предоставляет доступ к
                некоторым встроенным свойствам, например <code>$attrs</code> и
                <code>$emit</code>. Такие свойства всегда именуются с префиксом
                <code>$</code>, чтобы избежать конфликта имён с
                пользовательскими свойствами.
              </p>
            </div>
          </div>

          <div class="mt-6">
            <div>
              <h2>Хуки жизненного цикла</h2>
              <v-divider class="mb-6" />
              <p>
                При создании каждый экземпляр проходит через серию шагов
                инициализации — например, устанавливает наблюдение за данными,
                компилирует шаблон, монтирует экземпляр в DOM, обновляет DOM при
                изменении данных. Между шагами вызываются функции, называемые
                хуками жизненного цикла, предоставляющие возможность выполнять
                код на определённых этапах.
              </p>
              <p>
                Например, хук <code>created</code> можно использовать для
                запуска кода после создания экземпляра:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code>Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> count<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// `this` указывает на экземпляр vm</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'счётчик: '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// =&gt; "счётчик: 1"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                    class="line-number"
                    >2</span
                  ><br /><span class="line-number">3</span><br /><span
                    class="line-number"
                    >4</span
                  ><br /><span class="line-number">5</span><br /><span
                    class="line-number"
                    >6</span
                  ><br /><span class="line-number">7</span><br /><span
                    class="line-number"
                    >8</span
                  ><br /><span class="line-number">9</span><br />
                </div>
              </div>
              <p>
                Также есть и другие хуки, которые будут вызываться на различных
                этапах жизненного цикла экземпляра, например
                <code>mounted</code>, <code>updated</code> и
                <code>unmounted</code>. Все хуки вызываются с контекстом
                <code>this</code>, указывающим на текущий активный экземпляр,
                который их вызвал.
              </p>
              <SuccessAlert>
                Не используйте стрелочные функции в свойствах экземпляра и в
                коллбэках, например
                <code>created: () => console.log(this.a)</code> или
                <code>vm.$watch('a', newVal => this.myMethod())</code>. Так как
                стрелочные функции не имеют собственного <code>this</code>, то
                <code>this</code> в коде будет обрабатываться как любая другая
                переменная и её поиск будет производиться до тех пор, пока она
                не будет найдена в области видимости выше, что часто приводит к
                ошибкам, таким как
                <code
                  >Uncaught TypeError: Cannot read property of undefined</code
                >
                или
                <code>Uncaught TypeError: this.myMethod is not a function</code
                >.
              </SuccessAlert>
            </div>
          </div>

          <div class="mt-6">
            <div>
              <h2>Диаграмма жизненного цикла</h2>
              <v-divider class="mb-6" />
              <p>
                Ниже представлена диаграмма жизненного цикла экземпляра.
                Необязательно запоминать всё полностью прямо сейчас, но, по мере
                изучения и практики разработки, будет полезно к ней обращаться.
              </p>
            </div>
            <div class="d-flex justify-center">
              <v-img
                max-width="800"
                src="https://v3.ru.vuejs.org/images/lifecycle.svg"
              />
            </div>
          </div>

          <v-btn
            class="mt-6"
            color="success"
            nuxt
            to="/guide/[1.4] template_syntax"
          >
            Дальше
          </v-btn>
        </v-sheet>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import SuccessAlert from "~/components/SuccessAlert.vue";

export default {
  name: "GuideVueInstance",
  components: { SuccessAlert },
};
</script>
