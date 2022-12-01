<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-sheet class="pa-4">
          <h1>Регистрация компонентов</h1>
          <hr class="my-3" />

          <div class="mt-6">
            <div>
              <h2>Именование компонентов</h2>
              <v-divider class="mb-6" />
              <p>
                При регистрации компонента ему всегда будет присваиваться имя.
                Например, при глобальной регистрации, с которой встречались
                ранее:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">const</span> app <span
                class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span
                class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span
                  class="token string">'my-component-name'</span><span class="token punctuation">,</span> <span
                  class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
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
                Имя компонента указывается первым аргументом
                <code>app.component</code>. В примере выше именем компонента
                станет "my-component-name".
              </p>
              <p>
                Имя, которое даёте компоненту, может зависеть от того, где
                собираетесь его использовать. При использовании компонента
                непосредственно в DOM (в отличие от строковых шаблонов или
                однофайловых компонентов) настоятельно рекомендуем следовать
                правилам W3C по именованию пользовательских тегов:
              </p>
              <ol>
                <li>Все символы в нижнем регистре</li>
                <li>
                  Содержат дефис (т.е. состоит из нескольких слов соединённых
                  символом дефиса)
                </li>
              </ol>
              <p>
                Это позволит избежать конфликтов с существующими и будущими
                HTML-элементами.
              </p>
              <h3 class="my-4">Стиль именования</h3>
              <p>
                При описании компонентов в строковых шаблонах или однофайловых
                компонентах есть два способа их именования:
              </p>
              <p>В стиле kebab-case</p>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>app<span
                class="token punctuation">.</span><span class="token function">component</span><span
                class="token punctuation">(</span><span class="token string">'my-component-name'</span><span
                class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
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
                При объявлении компонента в стиле kebab-case, также нужно
                использовать kebab-case и при обращении к пользовательскому
                элементу, например так <code>&lt;my-component-name></code>.
              </p>
              <p>В стиле PascalCase</p>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>app<span
                class="token punctuation">.</span><span class="token function">component</span><span
                class="token punctuation">(</span><span class="token string">'MyComponentName'</span><span
                class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
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
                При объявлении компонента в стиле PascalCase, можно использовать
                любой стиль именования при обращении к пользовательскому
                элементу. А значит <code>&lt;my-component-name></code> и
                <code>&lt;MyComponentName></code> являются допустимыми
                вариантами. Но запомните, что только имена в kebab-case являются
                допустимыми при использовании непосредственно в DOM (т.е. в не
                строковых шаблонах).
              </p>
            </div>

            <div>
              <h2>Глобальная регистрация</h2>
              <v-divider class="mb-6" />
              <p>
                До сих пор компоненты создавались с помощью
                <code>app.component</code>:
              </p>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>Vue<span
                class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span
                class="token punctuation">}</span><span class="token punctuation">)</span><span
                class="token punctuation">.</span><span class="token function">component</span><span
                class="token punctuation">(</span><span class="token string">'my-component-name'</span><span
                class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... опции ...</span>
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
                Такие компоненты регистрируются глобально для приложения. Это
                означает, что они могут использоваться в шаблоне любого
                экземпляра компонента в этом приложении:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">const</span> app <span
                class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span><span
                class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span
                  class="token string">'component-a'</span><span class="token punctuation">,</span> <span
                  class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span
                  class="token string">'component-b'</span><span class="token punctuation">,</span> <span
                  class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span
                  class="token string">'component-c'</span><span class="token punctuation">,</span> <span
                  class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span
                  class="token punctuation">(</span><span class="token string">'#app'</span><span
                  class="token punctuation">)</span>
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
                  ><br /><span class="line-number">13</span><br />
                </div>
              </div>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component-a</span><span
    class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>component-a</span><span
                  class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component-b</span><span
    class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>component-b</span><span
                  class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component-c</span><span
    class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>component-c</span><span
                  class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
  class="token punctuation">&gt;</span></span>
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
                Это относится и ко всем дочерним компонентам — все три этих
                компонента будут также доступны внутри каждого из них.
              </p>
            </div>

            <div>
              <h2>Локальная регистрация</h2>
              <v-divider class="mb-6" />
              <p>
                Глобальная регистрация обычно не лучший способ. Например, при
                использовании системы сборки, такой как Webpack, глобальная
                регистрация всех компонентов означает, что даже если перестали
                использовать компонент, он всё равно будет включён в сборку
                приложения. Это лишь увеличит количество JavaScript, который
                потребуется загружать пользователям.
              </p>
              <p>
                В таких случаях можно определять компоненты как обычные объекты
                JavaScript:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">const</span> ComponentA <span
                class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> ComponentB <span class="token operator">=</span> <span
                  class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> ComponentC <span class="token operator">=</span> <span
                  class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
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
                А затем в опции <code>components</code> указывать компоненты,
                которые будут использоваться:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">const</span> app <span
                class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">'component-a'</span><span class="token operator">:</span> ComponentA<span
                  class="token punctuation">,</span>
    <span class="token string">'component-b'</span><span class="token operator">:</span> ComponentB
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
                  ><br />
                </div>
              </div>
              <p>
                В каждом свойстве объекта <code>components</code>, ключ будет
                определять имя пользовательского элемента, а значение — объект,
                содержащий опции компонента.
              </p>
              <p>
                Обратите внимание, что локально зарегистрированные компоненты
                будут недоступны в дочерних компонентах. Например, если
                <code>ComponentA</code> должен быть доступен в
                <code>ComponentB</code>, потребуется его в нём и
                зарегистрировать:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">const</span> ComponentA <span
                class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ComponentB <span class="token operator">=</span> <span
                  class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">'component-a'</span><span class="token operator">:</span> ComponentA
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
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
                  ><br />
                </div>
              </div>
              <p>
                При использовании модулей ES2015 через Babel и Webpack это может
                выглядеть так:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">import</span> ComponentA <span
                class="token keyword">from</span> <span class="token string">'./ComponentA.vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span
                  class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    ComponentA
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
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
                Обратите внимание, что в ES2015+ указание имени переменной,
                такой как <code>ComponentA</code> внутри объекта, является
                сокращением для <code>ComponentA: ComponentA</code>, что
                означает имя переменной будет:
              </p>
              <ul>
                <li>
                  именем пользовательского элемента для использования в шаблоне,
                  и
                </li>
                <li>именем переменной, содержащей опции компонента</li>
              </ul>
            </div>

            <div>
              <h2>Модульные системы</h2>
              <v-divider class="mb-6" />
              <p>
                Если не используете модульных систем с
                <code>import/require</code> — пока можно пропустить этот раздел.
                Если применяете, то в таком случае есть несколько советов.
              </p>
              <h3 class="my-4">Локальная регистрация в модульной системе</h3>
              <p>
                Чаще всего используют модульную систему, такую как Babel и
                Webpack. В этих случаях рекомендуем создать каталог
                <code>components</code>, где каждый компонент будет в своём
                файле.
              </p>
              <p>
                Затем нужно будет импортировать каждый компонент, который хотите
                использовать, прежде чем его зарегистрировать локально.
                Например, в гипотетическом файле <code>ComponentB.js</code> или
                <code>ComponentB.vue</code>:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">import</span> ComponentA <span
                class="token keyword">from</span> <span class="token string">'./ComponentA'</span>
<span class="token keyword">import</span> ComponentC <span class="token keyword">from</span> <span class="token string">'./ComponentC'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span
                  class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    ComponentA<span class="token punctuation">,</span>
    ComponentC
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
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
                  ><br />
                </div>
              </div>
              <p>
                Теперь в шаблоне <code>ComponentB</code> можно использовать оба:
                <code>ComponentA</code> и <code>ComponentC</code>.
              </p>
            </div>
          </div>

          <v-btn class="mt-6" color="success" nuxt to="/guide/[2.2] props">
            Дальше
          </v-btn>
        </v-sheet>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import SuccessAlert from "~/components/SuccessAlert.vue";
import InfoAlert from "~/components/InfoAlert";
import WarningAlert from "~/components/WarningAlert";

export default {
  name: "GuideComponentsRegistration",
  components: { SuccessAlert, InfoAlert, WarningAlert },
};
</script>
