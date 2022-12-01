<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-sheet class="pa-4">
          <h1>Свойства data и methods</h1>
          <hr class="my-3" />

          <div class="mt-6">
            <div>
              <h2>Свойство data</h2>
              <v-divider class="mb-6" />
              <p>
                В компоненте свойство <code>data</code> должно быть функцией.
                Vue вызывает эту функцию на этапе создания нового экземпляра
                компонента. Она должна вернуть объект, который затем Vue обернёт
                в свою систему реактивности и сохранит в экземпляре компонента
                как <code>$data</code>. Для удобства, все свойства верхнего
                уровня объекта доступны через экземпляр компонента:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span
                  class="token punctuation">.</span><span class="token function">createApp</span><span
                  class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span
                    class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> count<span
                    class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span
                    class="token punctuation">.</span><span class="token function">mount</span><span
                    class="token punctuation">(</span><span class="token string">'#app'</span><span
                    class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span
                    class="token punctuation">(</span>vm<span class="token punctuation">.</span>$data<span
                    class="token punctuation">.</span>count<span class="token punctuation">)</span> <span
                    class="token comment">// =&gt; 4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span
                    class="token punctuation">(</span>vm<span class="token punctuation">.</span>count<span
                    class="token punctuation">)</span>       <span class="token comment">// =&gt; 4</span>

<span class="token comment">// Присвоение значения в vm.count также обновит $data.count</span>
vm<span class="token punctuation">.</span>count <span class="token operator">=</span> <span
                    class="token number">5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span
                    class="token punctuation">(</span>vm<span class="token punctuation">.</span>$data<span
                    class="token punctuation">.</span>count<span class="token punctuation">)</span> <span
                    class="token comment">// =&gt; 5</span>

<span class="token comment">// ... и наоборот</span>
vm<span class="token punctuation">.</span>$data<span class="token punctuation">.</span>count <span
                    class="token operator">=</span> <span class="token number">6</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span
                    class="token punctuation">(</span>vm<span class="token punctuation">.</span>count<span
                    class="token punctuation">)</span> <span class="token comment">// =&gt; 6</span>
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
                ><br /><span class="line-number">9</span><br /><span
                  class="line-number"
                >10</span
                ><br /><span class="line-number">11</span><br /><span
                  class="line-number"
                >12</span
                ><br /><span class="line-number">13</span><br /><span
                  class="line-number"
                >14</span
                ><br /><span class="line-number">15</span><br /><span
                  class="line-number"
                >16</span
                ><br /><span class="line-number">17</span><br /><span
                  class="line-number"
                >18</span
                ><br />
                </div>
              </div>
              <p>
                Эти свойства добавляются только при первом создании экземпляра,
                поэтому убедитесь, что все они присутствуют в объекте,
                возвращаемом функцией <code>data</code>. При необходимости
                используйте <code>null</code>, <code>undefined</code> или
                какое-либо другое значение по умолчанию для свойств, где нужное
                значение изначально недоступно.
              </p>
              <p>
                Конечно есть возможность добавления нового свойства в экземпляр
                компонента без добавления его в <code>data</code>. Но поскольку
                этого свойства не было в реактивном объекте <code>$data</code>,
                то оно не будет автоматически отслеживаться системой
                реактивности Vue.
              </p>
              <p>
                Для обозначения встроенного API, предоставляемого через
                экземпляр компонента Vue использует префикс <code>$</code>.
                Кроме того для внутренних свойств зарезервирован префикс
                <code>_</code>. Следует избегать именования свойств
                <code>data</code> верхнего уровня, которые начинаются с них.
              </p>
            </div>

            <div>
              <h2>Methods</h2>
              <v-divider class="mb-6" />
              <p>
                Для добавления методов в экземпляр компонента используется опция
                <code>methods</code>. Значением должен быть объект, который
                будет содержать все необходимые методы:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span
                  class="token punctuation">.</span><span class="token function">createApp</span><span
                  class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span
                    class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> count<span
                    class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span
                    class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// `this` указывает на экземпляр компонента</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span
                    class="token punctuation">.</span><span class="token function">mount</span><span
                    class="token punctuation">(</span><span class="token string">'#app'</span><span
                    class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span
                    class="token punctuation">(</span>vm<span class="token punctuation">.</span>count<span
                    class="token punctuation">)</span> <span class="token comment">// =&gt; 4</span>

vm<span class="token punctuation">.</span><span class="token function">increment</span><span
                    class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span
                    class="token punctuation">(</span>vm<span class="token punctuation">.</span>count<span
                    class="token punctuation">)</span> <span class="token comment">// =&gt; 5</span>
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
                ><br /><span class="line-number">9</span><br /><span
                  class="line-number"
                >10</span
                ><br /><span class="line-number">11</span><br /><span
                  class="line-number"
                >12</span
                ><br /><span class="line-number">13</span><br /><span
                  class="line-number"
                >14</span
                ><br /><span class="line-number">15</span><br /><span
                  class="line-number"
                >16</span
                ><br /><span class="line-number">17</span><br /><span
                  class="line-number"
                >18</span
                ><br /><span class="line-number">19</span><br />
                </div>
              </div>
              <p>
                Vue автоматически привязывает значение <code>this</code> к
                методам таким образом, чтобы оно указывало на экземпляр
                компонента. Это гарантирует, что в методе всегда сохраняется
                правильное значение <code>this</code>, даже при использовании в
                качестве обработчика события или коллбэка. Следует избегать
                использования стрелочных функций при определении
                <code>methods</code>, так как это не позволит Vue привязать
                корректное значение <code>this</code>.
              </p>
              <p>
                Как и все остальные свойства экземпляра компонента,
                <code>methods</code>
                доступны в шаблоне компонента. Чаще всего они используются в
                качестве обработчиков событий:
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span
                  class="token attr-name">@click</span><span class="token attr-value"><span
                  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>increment<span
                  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Увеличить счётчик<span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                В примере выше, метод increment будет вызываться при клике на
                <code>&lt;button></code>.
              </p>
              <p>
                Метод также можно вызвать непосредственно из шаблона. Как скоро
                увидим, обычно вместо метода лучше подходит вычисляемое
                свойство. Но использование метода может быть полезно в некоторых
                случаях, когда вычисляемые свойства не подходят. Вызвать метод
                можно в любом месте шаблона, где поддерживаются выражения
                JavaScript:
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;</span>span</span> <span class="token attr-name">:title</span><span
                  class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                  class="token punctuation">"</span>toTitleDate(date)<span
                  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <code v-pre>{{ formatDate(date) }}</code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span
  class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                  class="line-number"
                >2</span
                ><br /><span class="line-number">3</span><br />
                </div>
              </div>
              <p>
                Если методы <code>toTitleDate</code> или
                <code>formatDate</code> обращаются к любым реактивным данным, то
                они будут отслеживаться как зависимости для отрисовки страницы,
                как если бы они были непосредственно использованы в шаблоне.
              </p>
              <p>
                Методы, вызываемые из шаблона, не должны иметь побочных
                эффектов, таких как изменение данных или запуск асинхронных
                процессов. Если возникает потребность сделать это, то в этом
                случае скорее всего лучше подойдёт использование хуков
                жизненного цикла.
              </p>
              <h3 class="my-4">Реализация debounce и throttle</h3>
              <p>
                Vue не предоставляет встроенной поддержки для debounce или
                throttle, но её легко можно реализовать с помощью сторонних
                библиотек, например Lodash.
              </p>
              <p>
                Если компонент используется только один раз, можно реализовать
                debounce в <code>methods</code>:
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span
                  class="token attr-name">src</span><span class="token attr-value"><span
                  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/lodash@4.17.20/lodash.min.js<span
                  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token script"></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span
  class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span
                    class="token punctuation">(</span><span class="token punctuation">{</span>
    methods<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// debounce с помощью Lodash</span>
      click<span class="token operator">:</span> _<span class="token punctuation">.</span><span class="token function">debounce</span><span
                    class="token punctuation">(</span><span class="token keyword">function</span><span
                    class="token punctuation">(</span><span class="token punctuation">)</span> <span
                    class="token punctuation">{</span>
        <span class="token comment">// ... обработка клика ...</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span
                    class="token number">500</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span
                    class="token punctuation">.</span><span class="token function">mount</span><span
                    class="token punctuation">(</span><span class="token string">'#app'</span><span
                    class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span
                    class="token punctuation">&lt;/</span>script</span><span
                    class="token punctuation">&gt;</span></span>
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
                ><br /><span class="line-number">9</span><br /><span
                  class="line-number"
                >10</span
                ><br /><span class="line-number">11</span><br />
                </div>
              </div>
              <p>
                Однако, подобный подход имеет потенциальные проблемы для
                повторно используемых компонентов, поскольку в таком случае все
                они получат одну и ту же debounce-функцию. Чтобы сохранить
                изолированность компонентов друг от друга, можно добавить
                функцию debounce в жизненном хуке <code>created</code>:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code>app<span class="token punctuation">.</span><span class="token function">component</span><span
                  class="token punctuation">(</span><span class="token string">'save-button'</span><span
                  class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span
                    class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// debounce с помощью Lodash</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>debouncedClick <span
                    class="token operator">=</span> _<span class="token punctuation">.</span><span
                    class="token function">debounce</span><span class="token punctuation">(</span><span
                    class="token keyword">this</span><span class="token punctuation">.</span>click<span
                    class="token punctuation">,</span> <span class="token number">500</span><span
                    class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">unmounted</span><span class="token punctuation">(</span><span
                    class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Остановка таймера при уничтожении компонента</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>debouncedClick<span
                    class="token punctuation">.</span><span class="token function">cancel</span><span
                    class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">click</span><span class="token punctuation">(</span><span
                    class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ... обработка клика ...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span
                    class="token template-punctuation string">`</span><span class="token string"><span
                    class="language-html">
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span
      class="token directive"><span class="token punctuation directive-shorthand">@</span><span
      class="token directive-modifier"><span class="token punctuation">c</span><span
      class="token punctuation">l</span><span class="token punctuation">i</span><span class="token punctuation">c</span><span
      class="token punctuation">k</span></span><span class="token directive-expression"><span class="token punctuation">=</span><span
      class="token punctuation">"</span><span class="token inline-js language-js">debouncedClick</span><span
      class="token punctuation">"</span></span></span><span class="token punctuation">&gt;</span></span>
      Сохранить
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span
      class="token punctuation">&gt;</span></span>
  </span></span><span class="token template-punctuation string">`</span></span>
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
                ><br /><span class="line-number">9</span><br /><span
                  class="line-number"
                >10</span
                ><br /><span class="line-number">11</span><br /><span
                  class="line-number"
                >12</span
                ><br /><span class="line-number">13</span><br /><span
                  class="line-number"
                >14</span
                ><br /><span class="line-number">15</span><br /><span
                  class="line-number"
                >16</span
                ><br /><span class="line-number">17</span><br /><span
                  class="line-number"
                >18</span
                ><br /><span class="line-number">19</span><br /><span
                  class="line-number"
                >20</span
                ><br />
                </div>
              </div>
            </div>
          </div>

          <v-btn
            class="mt-6"
            color="success"
            nuxt
            to="/guide/[1.6] computed_and_watchers"
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
  name: "GuideDataMethods",
  components: { SuccessAlert },
};
</script>
