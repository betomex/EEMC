<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-sheet class="pa-4">
          <h1>Основы компонентов</h1>
          <hr class="my-3" />

          <div class="mt-6">
            <div>
              <h2>Базовый пример</h2>
              <v-divider class="mb-6" />
              <p>Пример компонента Vue:</p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token comment">// Создаём приложение Vue</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span
                  class="token punctuation">.</span><span class="token function">createApp</span><span
                  class="token punctuation">(</span><span class="token punctuation">{</span><span
                  class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// Определяем новый глобальный компонент с именем button-counter</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span
                  class="token string">'button-counter'</span><span class="token punctuation">,</span> <span
                  class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      count<span class="token operator">:</span> <span class="token number">0</span>
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
      class="token punctuation">"</span><span class="token inline-js language-js">count<span
      class="token operator">++</span></span><span class="token punctuation">"</span></span></span><span
      class="token punctuation">&gt;</span></span>
      Счётчик кликов — <span class="token interpolation"><span class="token punctuation">{{</span><span
                  class="token inline-js language-js"> count </span><span class="token punctuation">}}</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span
      class="token punctuation">&gt;</span></span></span></span><span class="token template-punctuation string">`</span></span>
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
                  ><br /><span class="line-number">15</span><br />
                </div>
              </div>
              <InfoAlert>
                Здесь показан простой пример, но в типичном приложении Vue
                вместо строковых шаблонов обычно используют однофайловые
                компоненты. Подробнее о них можно узнать в соответствующем
                разделе.
              </InfoAlert>
              <p>
                Компоненты — переиспользуемые экземпляры со своим именем: для
                примера выше это <code>&lt;button-counter></code>. Его можно
                использовать как пользовательский тег в корневом экземпляре:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>components-demo<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button-counter</span><span
    class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>button-counter</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
  class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                    class="line-number"
                    >2</span
                  ><br /><span class="line-number">3</span><br />
                </div>
              </div>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>app<span
                class="token punctuation">.</span><span class="token function">mount</span><span
                class="token punctuation">(</span><span class="token string">'#components-demo'</span><span
                class="token punctuation">)</span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                Поскольку компоненты это переиспользуемые экземпляры, то у них
                могут быть те же опции что и у корневого экземпляра:
                <code>data</code>, <code>computed</code>, <code>watch</code>,
                <code>methods</code>, хуки жизненного цикла.
              </p>
            </div>

            <div>
              <h2>Переиспользование компонентов</h2>
              <v-divider class="mb-6" />
              <p>
                Компоненты можно повторно использовать столько раз, сколько
                потребуется:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>components-demo<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button-counter</span><span
    class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>button-counter</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button-counter</span><span
    class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>button-counter</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button-counter</span><span
    class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>button-counter</span><span class="token punctuation">&gt;</span></span>
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
                Обратите внимание, при нажатиях на кнопки, каждая изменяет свой
                собственный <code>count</code>. Всё потому, что каждый раз при
                использовании компонента будет создаваться его новый экземпляр.
              </p>
            </div>

            <div>
              <h2>Организация компонентов</h2>
              <v-divider class="mb-6" />
              <p>
                Обычно приложение организуется в виде дерева вложенных
                компонентов:
              </p>
              <div class="d-flex justify-center mb-4">
                <v-img
                  src="https://v3.ru.vuejs.org/images/components.png"
                  max-width="800"
                />
              </div>
              <p>
                Например, может быть компонент для заголовка, боковой панели,
                зоны контента, каждый из которых содержит другие компоненты для
                навигационных ссылок, постов блога и т.д.
              </p>
              <p>
                Чтобы использовать компоненты в шаблонах, сначала их нужно
                зарегистрировать, чтобы Vue узнал о них. Есть два типа
                регистрации компонентов: глобальная и локальная. Ранее
                компоненты регистрировались только глобально, используя метод
                приложения <code>component</code>:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">const</span> app <span
                class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span><span
                class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span
                  class="token string">'my-component-name'</span><span class="token punctuation">,</span> <span
                  class="token punctuation">{</span>
  <span class="token comment">// ... опции ...</span>
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
                Глобально зарегистрированные компоненты можно использовать в
                шаблоне любого компонента в приложении.
              </p>
            </div>

            <div>
              <h2>
                Передача данных в дочерние компоненты через входные параметры
              </h2>
              <v-divider class="mb-6" />
              <p>
                Ранее создавался компонент для записи блога. Но проблема в том,
                что этот компонент бесполезен, если не будет возможности
                передавать ему данные, такие как заголовок и содержимое записи
                блога, которую нужно показать. Для этого и нужны входные
                параметры.
              </p>
              <p>
                Входные параметры — пользовательские атрибуты, которые
                указываются на компоненте. Чтобы передавать заголовок в
                компонент записи блога, нужно определить его в списке входных
                параметров, которые принимает компонент, с помощью опции
                <code>props</code>:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">const</span> app <span
                class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span><span
                class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span
                  class="token string">'blog-post'</span><span class="token punctuation">,</span> <span
                  class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">[</span><span
                  class="token string">'title'</span><span class="token punctuation">]</span><span
                  class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span
                  class="token template-punctuation string">`</span><span class="token string"><span
                  class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span
                  class="token punctuation">&gt;</span></span><span class="token interpolation"><span
                  class="token punctuation">{{</span><span class="token inline-js language-js"> title </span><span
                  class="token punctuation">}}</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>h4</span><span
                  class="token punctuation">&gt;</span></span></span></span><span
                  class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span
                  class="token punctuation">(</span><span class="token string">'#blog-post-demo'</span><span
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
                  ><br />
                </div>
              </div>
              <p>
                При передаче значения в атрибут входного параметра, оно станет
                свойством данного экземпляра. Значение этого свойства доступно в
                шаблоне, как и любое другое свойство компонента.
              </p>
              <p>
                Компонент может принимать столько входных параметров, сколько
                потребуется, и по умолчанию любое значение может передаваться в
                любой входной параметр.
              </p>
              <p>
                После объявления входного параметра можно передавать данные в
                него через пользовательский атрибут, например:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>blog-post-demo<span class="token punctuation">"</span></span> <span
                class="token attr-name">class</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span> <span
    class="token attr-name">title</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>My journey with Vue<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blog-post</span><span
                  class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span> <span
    class="token attr-name">title</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Blogging with Vue<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blog-post</span><span
                  class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span> <span
    class="token attr-name">title</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Why Vue is so fun<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blog-post</span><span
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
                Скорее всего в типичном приложении наверняка будет массив
                записей в свойстве <code>data</code>:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">const</span> App <span
                class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      posts<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> id<span class="token operator">:</span> <span
                  class="token number">1</span><span class="token punctuation">,</span> title<span
                  class="token operator">:</span> <span class="token string">'My journey with Vue'</span> <span
                  class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> id<span class="token operator">:</span> <span
                  class="token number">2</span><span class="token punctuation">,</span> title<span
                  class="token operator">:</span> <span class="token string">'Blogging with Vue'</span> <span
                  class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> id<span class="token operator">:</span> <span
                  class="token number">3</span><span class="token punctuation">,</span> title<span
                  class="token operator">:</span> <span class="token string">'Why Vue is so fun'</span> <span
                  class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span
                  class="token punctuation">.</span><span class="token function">createApp</span><span
                  class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span
                  class="token string">'blog-post'</span><span class="token punctuation">,</span> <span
                  class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">[</span><span
                  class="token string">'title'</span><span class="token punctuation">]</span><span
                  class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span
                  class="token template-punctuation string">`</span><span class="token string"><span
                  class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span
                  class="token punctuation">&gt;</span></span><span class="token interpolation"><span
                  class="token punctuation">{{</span><span class="token inline-js language-js"> title </span><span
                  class="token punctuation">}}</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>h4</span><span
                  class="token punctuation">&gt;</span></span></span></span><span
                  class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span
                  class="token punctuation">(</span><span class="token string">'#blog-posts-demo'</span><span
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
              <p>
                А значит для каждого из элементов массива потребуется отрисовать
                свой компонент :
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>blog-posts-demo<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span
      class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post in posts<span
      class="token punctuation">"</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span
      class="token punctuation">"</span>post.id<span class="token punctuation">"</span></span>
    <span class="token attr-name">:title</span><span class="token attr-value"><span
      class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post.title<span
      class="token punctuation">"</span></span>
  <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>blog-post</span><span
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
                  ><br /><span class="line-number">5</span><br /><span
                    class="line-number"
                    >6</span
                  ><br /><span class="line-number">7</span><br />
                </div>
              </div>
              <p>
                Как видно в примере, можно использовать <code>v-bind</code> для
                динамической передачи входных параметров. Это полезно, когда
                заранее неизвестно точное содержимое для отрисовки.
              </p>
            </div>

            <div>
              <h2>
                Прослушивание событий из дочерних компонентов в родительских
                компонентах
              </h2>
              <v-divider class="mb-6" />
              <p>
                При доработках компонента <code>&lt;blog-post></code> некоторым
                возможностям может потребоваться передавать данные обратно в
                родительский компонент. Например, позволить увеличивать размер
                текста записей блога для улучшения доступности, оставляя
                остальную часть страницы с размером текста по умолчанию.
              </p>
              <p>
                Для этого добавим свойство <code>postFontSize</code> в
                родительском компоненте:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">const</span> App <span
                class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      posts<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">/* ... */</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      postFontSize<span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
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
                И воспользуемся им в шаблоне чтобы установить размер шрифта для
                всех записей блога:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blog-posts-events-demo<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
    class="token attr-name">:style</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>{ fontSize: postFontSize + <span class="token punctuation">'</span>em<span
    class="token punctuation">'</span> }<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span
        class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post in posts<span
        class="token punctuation">"</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span
        class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post.id<span
        class="token punctuation">"</span></span>
      <span class="token attr-name">:title</span><span class="token attr-value"><span
        class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post.title<span
        class="token punctuation">"</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>blog-post</span><span
                  class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
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
                Теперь перед содержимым каждой записи блога добавим кнопку для
                увеличения текста:
              </p>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>app<span
                class="token punctuation">.</span><span class="token function">component</span><span
                class="token punctuation">(</span><span class="token string">'blog-post'</span><span
                class="token punctuation">,</span> <span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">[</span><span
                  class="token string">'title'</span><span class="token punctuation">]</span><span
                  class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span
                  class="token template-punctuation string">`</span><span class="token string"><span
                  class="language-html">
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
      class="token attr-name">class</span><span class="token attr-value"><span
      class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blog-post<span
      class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span
        class="token punctuation">&gt;</span></span><span class="token interpolation"><span
                  class="token punctuation">{{</span><span class="token inline-js language-js"> title </span><span
                  class="token punctuation">}}</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span
        class="token punctuation">&gt;</span></span>
        Увеличить размер текста
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span
        class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
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
                  ><br /><span class="line-number">11</span><br />
                </div>
              </div>
              <p>Проблема пока в том, что эта кнопка ничего не делает:</p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span
                class="token punctuation">&gt;</span></span>
  Увеличить размер текста
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span
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
                При нажатии на кнопку нужно каким-то образом сообщать
                родительскому компоненту, что требуется увеличить размер текста
                для всех записей блога. Для решения этой проблемы, экземпляры
                компонента предоставляют собственную систему событий.
                Родительский компонент может прослушивать любые события на
                экземпляре дочернего компонента с помощью <code>v-on</code> или
                <code>@</code>, аналогично отслеживанию нативных событий DOM:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;</span>blog-post</span> <span class="token attr-name">...</span> <span
                class="token attr-name">@enlarge-text</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>postFontSize += 0.1<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;/</span>blog-post</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                А чтобы сгенерировать событие, дочерний компонент может
                воспользоваться встроенным методом <code>$emit</code>, передавая
                в него аргументом имя события:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span
                class="token attr-name">@click</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$emit(<span
                class="token punctuation">'</span>enlargeText<span class="token punctuation">'</span>)<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  Увеличить размер текста
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span
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
                Благодаря прослушиванию события
                <code>@enlarge-text="postFontSize += 0.1"</code> в родительском
                компоненте, получится отследить его и обновить
                <code>postFontSize</code> новым значением.
              </p>
              <p>
                Все генерируемые компонентом события можно указать в опции
                <code>emits</code>:
              </p>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>app<span
                class="token punctuation">.</span><span class="token function">component</span><span
                class="token punctuation">(</span><span class="token string">'blog-post'</span><span
                class="token punctuation">,</span> <span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">[</span><span
                  class="token string">'title'</span><span class="token punctuation">]</span><span
                  class="token punctuation">,</span>
  emits<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'enlargeText'</span><span
                  class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
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
                Это позволит проверять все события, генерируемые компонентом, и
                при необходимости валидировать их.
              </p>
              <h3 class="my-4">Передача данных вместе с событием</h3>
              <p>
                Иногда полезнее вместе с событием отправить какие-либо данные.
                Например, если решим, что компонент
                <code>&lt;blog-post></code> будет отвечать за то, насколько
                следует увеличить текст. Тогда для передачи этого значения можно
                использовать второй параметр <code>$emit</code>:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span
                class="token attr-name">@click</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$emit(<span
                class="token punctuation">'</span>enlargeText<span class="token punctuation">'</span>, 0.1)<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  Увеличить размер текста
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span
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
                Теперь, при прослушивании события в родительском компоненте,
                доступ к этому значению можно будет получить через специальную
                переменную <code>$event</code>:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;</span>blog-post</span> <span class="token attr-name">...</span> <span
                class="token attr-name">@enlarge-text</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>postFontSize += $event<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;/</span>blog-post</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>А если обработчик события будет указан именем метода:</p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;</span>blog-post</span> <span class="token attr-name">...</span> <span
                class="token attr-name">@enlarge-text</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onEnlargeText<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;/</span>blog-post</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>То это значение будет передано в него первым аргументом:</p>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>methods<span
                class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">onEnlargeText</span><span class="token punctuation">(</span><span
                  class="token parameter">enlargeAmount</span><span class="token punctuation">)</span> <span
                  class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>postFontSize <span
                  class="token operator">+=</span> enlargeAmount
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
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
              <h3 class="my-4">
                Использование <code>v-model</code> на компонентах
              </h3>
              <p>
                Пользовательские события также могут использоваться для создания
                нестандартных элементов ввода, которые будут работать вместе с
                <code>v-model</code>. Не забывайте, что:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
                class="token attr-name">v-model</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>searchText<span
                class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>выполняет то же самое, что и:</p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
                class="token attr-name">:value</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>searchText<span
                class="token punctuation">"</span></span> <span class="token attr-name">@input</span><span
                class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>searchText = $event.target.value<span
                class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                Использование <code>v-model</code> на компоненте будет выполнять
                следующее:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-input</span>
  <span class="token attr-name">:model-value</span><span class="token attr-value"><span
                  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>searchText<span
                  class="token punctuation">"</span></span>
  <span class="token attr-name"><span class="token namespace">@update:</span>model-value</span><span
                  class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                  class="token punctuation">"</span>searchText = $event<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;/</span>custom-input</span><span
                class="token punctuation">&gt;</span></span>
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
              <WarningAlert>
                Обратите внимание, <code>model-value</code> указывается в
                kebab-case, потому что работаем с DOM-шаблонами. Подробнее об
                использовании атрибутов в kebab-case или camelCase объясняется в
                разделе особенностей парсинга DOM-шаблона
              </WarningAlert>
              <p>
                Однако для того, чтобы это всё заработало,
                <code>&lt;input></code> внутри компонента должен:
              </p>
              <ul class="mb-3">
                <li>
                  Привязывать к значению атрибута <code>value</code> входной
                  параметр <code>modelValue</code>
                </li>
                <li>
                  При событии <code>input</code> генерировать событие
                  <code>update:modelValue</code> с новым значением
                </li>
              </ul>
              <p>Как получится в итоге:</p>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>app<span
                class="token punctuation">.</span><span class="token function">component</span><span
                class="token punctuation">(</span><span class="token string">'custom-input'</span><span
                class="token punctuation">,</span> <span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'modelValue'</span><span
                  class="token punctuation">]</span><span class="token punctuation">,</span>
  emits<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'update:modelValue'</span><span
                  class="token punctuation">]</span><span class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span
                  class="token template-punctuation string">`</span><span class="token string"><span
                  class="language-html">
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token directive"><span class="token punctuation directive-shorthand">:</span><span
        class="token directive-modifier"><span class="token punctuation">v</span><span
        class="token punctuation">a</span><span class="token punctuation">l</span><span
        class="token punctuation">u</span><span class="token punctuation">e</span></span><span
        class="token directive-expression"><span class="token punctuation">=</span><span
        class="token punctuation">"</span><span class="token inline-js language-js">modelValue</span><span
        class="token punctuation">"</span></span></span>
      <span class="token directive"><span class="token punctuation directive-shorthand">@</span><span
        class="token directive-modifier"><span class="token punctuation">i</span><span
        class="token punctuation">n</span><span class="token punctuation">p</span><span
        class="token punctuation">u</span><span class="token punctuation">t</span></span><span
        class="token directive-expression"><span class="token punctuation">=</span><span
        class="token punctuation">"</span><span class="token inline-js language-js"><span
        class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'update:modelValue'</span><span
        class="token punctuation">,</span> $event<span class="token punctuation">.</span>target<span
        class="token punctuation">.</span>value<span class="token punctuation">)</span></span><span
        class="token punctuation">"</span></span></span>
    <span class="token punctuation">/&gt;</span></span>
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
                  ><br />
                </div>
              </div>
              <p>
                Теперь такой компонент будет прекрасно работать с
                <code>v-model</code>:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-input</span> <span
                class="token attr-name">v-model</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>searchText<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;/</span>custom-input</span><span
                class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                Другим способом реализации <code>v-model</code> в компоненте
                будет использование вычисляемых свойств и их возможностей
                определить геттер и сеттер. Метод <code>get</code> должен
                возвращать свойство <code>modelValue</code>, а метод
                <code>set</code> генерировать соответствующее событие:
              </p>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>app<span
                class="token punctuation">.</span><span class="token function">component</span><span
                class="token punctuation">(</span><span class="token string">'custom-input'</span><span
                class="token punctuation">,</span> <span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'modelValue'</span><span
                  class="token punctuation">]</span><span class="token punctuation">,</span>
  emits<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'update:modelValue'</span><span
                  class="token punctuation">]</span><span class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span
                  class="token template-punctuation string">`</span><span class="token string"><span
                  class="language-html">
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
      class="token directive"><span class="token identifier directive-name">v-model</span><span
      class="token directive-expression"><span class="token punctuation">=</span><span
      class="token punctuation">"</span><span class="token inline-js language-js">value</span><span
      class="token punctuation">"</span></span></span><span class="token punctuation">&gt;</span></span>
  </span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  computed<span class="token operator">:</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">get</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span
                  class="token punctuation">.</span>modelValue
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span><span class="token punctuation">(</span>value<span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span
                  class="token punctuation">(</span><span class="token string">'update:modelValue'</span><span
                  class="token punctuation">,</span> value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
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
                  ><br /><span class="line-number">17</span><br />
                </div>
              </div>
            </div>

            <div>
              <h2>Распределение контента слотами</h2>
              <v-divider class="mb-6" />
              <p>
                Как и в случае с обычными HTML-элементами, часто бывает полезным
                иметь возможность передавать компоненту содержимое, например
                таким образом:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;</span>alert-box</span><span class="token punctuation">&gt;</span></span>
  Произошло что-то плохое.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>alert-box</span><span
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
                Такого можно добиться при помощи пользовательского элемента
                <code>&lt;slot></code> у Vue:
              </p>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>app<span
                class="token punctuation">.</span><span class="token function">component</span><span
                class="token punctuation">(</span><span class="token string">'alert-box'</span><span
                class="token punctuation">,</span> <span class="token punctuation">{</span>
  template<span class="token operator">:</span> <span class="token template-string"><span
                  class="token template-punctuation string">`</span><span class="token string"><span
                  class="language-html">
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
      class="token attr-name">class</span><span class="token attr-value"><span
      class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-alert-box<span
      class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span
        class="token punctuation">&gt;</span></span>Ошибка!<span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span
        class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
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
                  ><br />
                </div>
              </div>
              <p>
                Как можно увидеть выше, слот будет использоваться в качестве
                места, куда потребуется подставлять контент — и это всё. Готово!
              </p>
            </div>

            <div>
              <h2>Динамическое переключение компонентов</h2>
              <v-divider class="mb-6" />
              <p>
                Иногда бывает полезным динамически переключаться между
                компонентами, как например в интерфейсе с вкладками:
              </p>
              <p>
                Это возможно сделать с помощью элемента
                <code>&lt;component></code> со специальным атрибутом
                <code>is</code>:
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- Компонент будет меняться при изменении currentTabComponent --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span
  class="token attr-name">:is</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentTabComponent<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span
                  class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                    class="line-number"
                    >2</span
                  ><br />
                </div>
              </div>
              <p>
                В примере выше значением <code>currentTabComponent</code> может
                быть:
              </p>
              <ul class="mb-4">
                <li>имя зарегистрированного компонента, или</li>
                <li>объект с настройками компонента</li>
              </ul>
              <p>
                Посмотрите этот sandbox чтобы поэкспериментировать с полным
                кодом, или эту версию с примером привязки объекта с настройками
                компонента вместо указания его имени.
              </p>
              <p>
                Можно также использовать атрибут <code>is</code> и для создания
                обычных HTML-элементов
              </p>
            </div>

            <div>
              <h2>Особенности парсинга DOM-шаблона</h2>
              <v-divider class="mb-6" />
              <p>
                Если пишете шаблоны Vue непосредственно в DOM, то Vue придётся
                получать строковый шаблон из DOM. Это приводит к некоторым
                особенностям, связанным с собственным поведением браузеров при
                парсинге HTML.
              </p>
              <SuccessAlert>
                <p>
                  Следует отметить, что ограничения, обсуждаемые ниже, применимы
                  только в том случае, если пишете шаблоны непосредственно в
                  DOM. Таких ОГРАНИЧЕНИЙ НЕ БУДЕТ при использовании строковых
                  шаблонов из следующих источников:
                </p>
                <ul>
                  <li>Строковые шаблоны (например, template: '...')</li>
                  <li>Однофайловые компоненты (файлы .vue)</li>
                </ul>
                <code>&lt;script type="text/x-template"></code>
              </SuccessAlert>
              <h3 class="my-4">Ограничение по расположению элементов</h3>
              <p>
                У некоторых HTML-элементов, таких как <code>&lt;ul></code>,
                <code>&lt;ol></code>, <code>&lt;table></code> и
                <code>&lt;select></code>, есть ограничения на то, какие элементы
                могут находиться внутри них, кроме того некоторые элементы
                <code>&lt;li></code>, <code>&lt;tr></code> и
                <code>&lt;option></code> могут быть только внутри определённых
                элементов.
              </p>
              <p>
                Это может привести к проблемам при использовании компонентов с
                элементами у которых есть такие ограничения. Например:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span
                class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post-row</span><span
    class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>blog-post-row</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span
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
                При парсинге пользовательский компонент
                <code>&lt;blog-post-row></code> будет поднят выше, поскольку
                считается недопустимым содержимым, приводя к ошибкам при
                отрисовке. Для решения этой проблемы можно использовать
                специальный атрибут <code>is</code>:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span
                class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span
    class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>vue:blog-post-row<span class="token punctuation">"</span></span><span
    class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span
  class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                    class="line-number"
                    >2</span
                  ><br /><span class="line-number">3</span><br />
                </div>
              </div>
              <SuccessAlert>
                При использовании на нативных HTML-элементах значение
                <code>is</code> должно начинаться с префикса <code>vue:</code>,
                чтобы интерпретироваться как компонент Vue. Это нужно чтобы
                избежать путаницы с нативными пользовательскими встроенными
                элементами.
              </SuccessAlert>
              <h3 class="my-4">Отсутствие чувствительности к регистру</h3>
              <p>
                Имена атрибутов HTML не чувствительны к регистру, поэтому
                браузеры будут интерпретировать любые заглавные символы как
                строчные. А значит, при использовании DOM-шаблонов, необходимо
                указывать имена входных параметров в camelCase и обработчики
                событий в kebab-case (разделённые дефисом) эквивалентах:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token comment">// camelCase в JavaScript</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span
                  class="token string">'blog-post'</span><span class="token punctuation">,</span> <span
                  class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'postTitle'</span><span
                  class="token punctuation">]</span><span class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span
                  class="token template-punctuation string">`</span><span class="token string"><span
                  class="language-html">
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span
      class="token punctuation">&gt;</span></span><span class="token interpolation"><span
                  class="token punctuation">{{</span><span class="token inline-js language-js"> postTitle </span><span
                  class="token punctuation">}}</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
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
                  ><br /><span class="line-number">7</span><br />
                </div>
              </div>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- kebab-case в HTML --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span> <span
  class="token attr-name">post-title</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hello!<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blog-post</span><span
                  class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                    class="line-number"
                    >2</span
                  ><br />
                </div>
              </div>
            </div>
          </div>

          <v-btn class="mt-6" color="success" nuxt to="/guide/[1.13] summary">
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
  name: "GuideComponentsBasics",
  components: { SuccessAlert, InfoAlert, WarningAlert },
};
</script>
