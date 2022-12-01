<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-sheet class="pa-4">
          <h1>Обработка событий</h1>
          <hr class="my-3" />

          <div class="mt-6">
            <div>
              <h2>Прослушивание событий</h2>
              <v-divider class="mb-6" />
              <p>
                Можно использовать директиву <code>v-on</code>, которую обычно
                сокращают до символа <code>@</code>, чтобы прослушивать события
                DOM и запускать какой-нибудь JavaScript-код по их наступлению.
                Используется как <code>v-on:click="methodName"</code> или в
                сокращённом виде <code>@click="methodName"</code>.
              </p>
              <p>Например:</p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>basic-event<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span
    class="token attr-name">@click</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>counter += 1<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Добавить 1<span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span
    class="token punctuation">&gt;</span></span>Кнопка выше была нажата {{ counter }} раз<span class="token tag"><span
                  class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
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
                  ><br />
                </div>
              </div>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>Vue<span
                class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      counter<span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span
                  class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#basic-event'</span><span
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
                  ><br /><span class="line-number">7</span><br />
                </div>
              </div>
            </div>

            <div>
              <h2>Обработчики событий</h2>
              <v-divider class="mb-6" />
              <p>
                Логика многих обработчиков событий будет довольно сложной,
                поэтому оставлять JavaScript-код в значении атрибута
                <code>v-on</code> бессмысленно. Вот почему
                <code>v-on</code> также принимает имя метода, который
                потребуется вызвать.
              </p>
              <p>Например:</p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>event-with-method<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- `greet` — это название метода, объявленного ниже --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span
    class="token attr-name">@click</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>greet<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Поприветствовать<span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
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
                  ><br />
                </div>
              </div>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>Vue<span
                class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">'Vue.js'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">greet</span><span class="token punctuation">(</span><span
                  class="token parameter">event</span><span class="token punctuation">)</span> <span
                  class="token punctuation">{</span>
      <span class="token comment">// `this` в методе указывает на текущий активный экземпляр</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Привет, '</span> <span
                  class="token operator">+</span> <span class="token keyword">this</span><span
                  class="token punctuation">.</span>name <span class="token operator">+</span> <span
                  class="token string">'!'</span><span class="token punctuation">)</span>
      <span class="token comment">// `event` — нативное событие DOM</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span>event<span
                  class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName<span
                  class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span
                  class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#event-with-method'</span><span
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
                  ><br /><span class="line-number">17</span><br />
                </div>
              </div>
            </div>

            <div>
              <h2>Методы в inline-обработчиках</h2>
              <v-divider class="mb-6" />
              <p>
                Кроме указания имени метода, можно также использовать методы в
                инлайн-выражениях:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>inline-handler<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span
    class="token attr-name">@click</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>say(<span
    class="token punctuation">'</span>hi<span class="token punctuation">'</span>)<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Скажи hi<span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span
    class="token attr-name">@click</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>say(<span
    class="token punctuation">'</span>what<span class="token punctuation">'</span>)<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Скажи what<span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
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
                  ><br />
                </div>
              </div>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>Vue<span
                class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span
                  class="token parameter">message</span><span class="token punctuation">)</span> <span
                  class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span>message<span
                  class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span
                  class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#inline-handler'</span><span
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
                  ><br /><span class="line-number">7</span><br />
                </div>
              </div>
              <p>
                Иногда может потребоваться доступ к оригинальному событию DOM в
                inline-обработчиках. В этом случае его можно передать в метод,
                используя специальную переменную <code>$event</code>:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span
                class="token attr-name">@click</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warn(<span
                class="token punctuation">'</span>Форма не может быть отправлена.<span
                class="token punctuation">'</span>, $event)<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span>
  Отправить
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
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token comment">// ...</span>
methods<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">warn</span><span class="token punctuation">(</span><span
                  class="token parameter">message<span class="token punctuation">,</span> event</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// теперь есть доступ к нативному событию</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
      event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span
                  class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">alert</span><span class="token punctuation">(</span>message<span
                  class="token punctuation">)</span>
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
                  ><br /><span class="line-number">11</span><br />
                </div>
              </div>
            </div>

            <div>
              <h2>Несколько обработчиков события</h2>
              <v-divider class="mb-6" />
              <p>
                В обработчике событий можно задать несколько методов, разделив
                их оператором запятой:
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- методы one() и two() будут вызваны при клике --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span
  class="token attr-name">@click</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>one($event), two($event)<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  Отправить
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span
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
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token comment">// ...</span>
methods<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">one</span><span class="token punctuation">(</span><span
                  class="token parameter">event</span><span class="token punctuation">)</span> <span
                  class="token punctuation">{</span>
    <span class="token comment">// логика первого обработчика события...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">two</span><span class="token punctuation">(</span><span
                  class="token parameter">event</span><span class="token punctuation">)</span> <span
                  class="token punctuation">{</span>
    <span class="token comment">// логика второго обработчика события...</span>
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
                  ><br /><span class="line-number">9</span><br />
                </div>
              </div>
            </div>

            <div>
              <h2>Модификаторы событий</h2>
              <v-divider class="mb-6" />
              <p>
                Часто может потребоваться вызвать
                <code>event.preventDefault()</code> или
                <code>event.stopPropagation()</code> внутри обработчиков
                события. Хоть это и легко можно сделать внутри методов, лучше
                если методы будут содержать в себе только логику и не имеют дела
                с деталями события DOM.
              </p>
              <p>
                Для решения этой задачи Vue предоставляет модификаторы событий
                для <code>v-on</code>. Вспомните, что модификаторы — это
                постфиксы директивы, отделяемые точкой:
              </p>
              <ul class="mb-4">
                <li><code>.stop</code></li>
                <li><code>.prevent</code></li>
                <li><code>.capture</code></li>
                <li><code>.self</code></li>
                <li><code>.once</code></li>
                <li><code>.passive</code></li>
              </ul>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- всплытие события click будет остановлено --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span
  class="token attr-name">@click.stop</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doThis<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span
                  class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- событие submit перестанет перезагружать страницу --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span
  class="token attr-name">@submit.prevent</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmit<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span
                  class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- модификаторы можно объединять в цепочки --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span
  class="token attr-name">@click.stop.prevent</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doThat<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span
                  class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- можно использовать без обработчиков --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span
  class="token attr-name">@submit.prevent</span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span
                  class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- можно отслеживать события в режиме capture, т.е. событие, нацеленное --&gt;</span>
<span
  class="token comment">&lt;!-- на внутренний элемент, обрабатывается здесь до обработки этим элементом --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
  class="token attr-name">@click.capture</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doThis<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span
                  class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
                  class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- вызов обработчика только в случае наступления события непосредственно --&gt;</span>
<span class="token comment">&lt;!-- на данном элементе (то есть не на дочернем компоненте) --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
  class="token attr-name">@click.self</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doThat<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span
                  class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
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
              <SuccessAlert>
                При использовании модификаторов имеет значение их порядок,
                потому что в той же очерёдности генерируется соответствующий
                код. Поэтому <code>@click.prevent.self</code> предотвратит
                действие клика по умолчанию на самом элементе и на его дочерних
                элементах, в то время как
                <code>@click.self.prevent</code> предотвратит действие клика по
                умолчанию только на самом элементе.
              </SuccessAlert>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- обработчик click будет вызван максимум 1 раз --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span
  class="token attr-name">@click.once</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doThis<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span
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
                В отличие от других модификаторов, которые поддерживают только
                нативные события DOM, модификатор <code>.once</code> можно
                использовать и с пользовательскими событиями компонентов. Если
                ещё не читали о компонентах — не беспокойтесь об этом пока.
              </p>
              <p>
                Также Vue предоставляет модификатор <code>.passive</code>,
                соответствующий опции <code>passive</code> для
                <code>addEventListener</code>.
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- по умолчанию событие scroll (при прокрутке) произойдёт --&gt;</span>
<span class="token comment">&lt;!-- незамедлительно, вместо ожидания окончания `onScroll`  --&gt;</span>
<span class="token comment">&lt;!-- на случай, если там будет `event.preventDefault()`     --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
  class="token attr-name">@scroll.passive</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onScroll<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span
                  class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
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
              <p>
                Модификатор <code>.passive</code> особенно полезен для улучшения
                производительности на мобильных устройствах.
              </p>
              <SuccessAlert>
                Не используйте <code>.passive</code> и
                <code>.prevent</code> вместе — <code>.prevent</code> будет
                проигнорирован и браузер скорее всего покажет предупреждение.
                Запомните, что <code>.passive</code> сообщает браузеру, что для
                события не будет предотвращаться поведение по умолчанию.
              </SuccessAlert>
            </div>

            <div>
              <h2>Модификаторы клавиш</h2>
              <v-divider class="mb-6" />
              <p>
                При прослушивании событий клавиатуры часто нужно отслеживать
                конкретные клавиши. Vue позволяет использовать модификаторы
                клавиш при использовании <code>v-on</code> или
                <code>@</code> при прослушивании событий клавиш:
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- вызвать `vm.submit()` только если `key` будет `Enter` --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
  class="token attr-name">@keyup.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span
  class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span
  class="token punctuation">/&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                    class="line-number"
                    >2</span
                  ><br />
                </div>
              </div>
              <p>
                Можно напрямую использовать любые допустимые имена клавиш,
                предоставляемые через <code>KeyboardEvent.key</code>
                в качестве модификаторов, указывая их имена в kebab-case
                формате.
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
                class="token attr-name">@keyup.page-down</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onPageDown<span
                class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                В примере выше обработчик будет вызван только когда
                <code>$event.key</code> будет <code>'PageDown'</code>.
              </p>
              <h3 class="my-4">Псевдонимы клавиш</h3>
              <p>
                Vue предоставляет псевдонимы для наиболее часто используемых
                клавиш:
              </p>
              <ul class="mb-4">
                <li><code>.enter</code></li>
                <li><code>.tab</code></li>
                <li>
                  <code>.delete</code> (ловит как «Delete», так и «Backspace»)
                </li>
                <li><code>.esc</code></li>
                <li><code>.space</code></li>
                <li><code>.up</code></li>
                <li><code>.down</code></li>
                <li><code>.left</code></li>
                <li><code>.right</code></li>
              </ul>
            </div>

            <div>
              <h2>Системные модификаторы клавиш</h2>
              <v-divider class="mb-6" />
              <p>
                Можно использовать следующие модификаторы для прослушивания
                событий мыши или клавиатуры только при зажатой
                клавиши-модификатора:
              </p>
              <ul class="mb-4">
                <li><code>.ctrl</code></li>
                <li><code>.alt</code></li>
                <li><code>.shift</code></li>
                <li><code>.meta</code></li>
              </ul>
              <SuccessAlert>
                На клавиатурах Apple клавиша meta отмечена знаком ⌘. На
                клавиатурах Windows клавиша meta отмечена знаком ⊞. На
                клавиатурах Sun Microsystems клавиша meta отмечена символом
                ромба ◆. На некоторых клавиатурах, особенно MIT и Lisp machine и
                их преемников, таких как Knight или space-cadet клавиатуры,
                клавиша meta отмечена словом «META». На клавиатурах Symbolics,
                клавиша meta отмечена словом «META» или «Meta».
              </SuccessAlert>
              <p>Например:</p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- Alt + Enter --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
  class="token attr-name">@keyup.alt.enter</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clear<span
  class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- Ctrl + Click --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
  class="token attr-name">@click.ctrl</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Сделать что-нибудь<span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
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
              <SuccessAlert>
                Обратите внимание, клавиши-модификаторы отличаются от обычных
                клавиш и при отслеживании событий <code>keyup</code> должны быть
                нажаты, когда событие происходит. Другими словами,
                <code>keyup.ctrl</code> будет срабатывать только если отпустить
                клавишу, удерживая нажатой <code>ctrl</code>. Это не сработает,
                если отпустить только клавишу <code>ctrl</code>.
              </SuccessAlert>
              <h3 class="my-4">Модификатор <code>.exact</code></h3>
              <p>
                Модификатор <code>.exact</code> позволяет контролировать точную
                комбинацию системных модификаторов, необходимых для запуска
                события.
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- сработает, даже если также нажаты Alt или Shift --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span
  class="token attr-name">@click.ctrl</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onClick<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>A<span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- сработает, только когда нажат Ctrl и не нажаты никакие другие клавиши --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span
  class="token attr-name">@click.ctrl.exact</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onCtrlClick<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>A<span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- сработает, только когда не нажаты никакие системные модификаторы --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span
  class="token attr-name">@click.exact</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span
  class="token punctuation">"</span>onClick<span class="token punctuation">"</span></span><span
  class="token punctuation">&gt;</span></span>A<span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
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
              <h3 class="my-4">Модификаторы клавиш мыши</h3>
              <ul>
                <li><code>.left</code></li>
                <li><code>.right</code></li>
                <li><code>.middle</code></li>
              </ul>
              <p>
                Эти модификаторы ограничивают обработчик события только вызовами
                определённой кнопкой мыши.
              </p>
            </div>

            <div>
              <h2>Почему слушатели событий указываются в HTML?</h2>
              <v-divider class="mb-6" />
              <p>
                Может показаться, что такой подход к прослушиванию событий
                нарушает старое доброе правило «отделения мух от котлет». Не
                волнуйтесь — поскольку во Vue все обработчики и выражения строго
                привязаны к ViewModel, ответственной за текущее представление,
                то и трудностей в поддержке не возникнет. На самом деле, есть
                несколько преимуществ при использовании <code>v-on</code> или
                <code>@</code>:
              </p>
              <ol>
                <li>
                  Проще находить реализацию обработчика в JS-коде, пропустив
                  HTML-шаблон.
                </li>
                <li>
                  Поскольку не нужно вручную прикреплять прослушиватели событий
                  в JS, код ViewModel остаётся независимым от DOM и содержит
                  только необходимую логику. Это облегчает тестирование.
                </li>
                <li>
                  При уничтожении ViewModel все слушатели событий автоматически
                  удаляются. Не надо беспокоиться о том, что нужно очищать
                  что-то самостоятельно.
                </li>
              </ol>
            </div>
          </div>

          <v-btn
            class="mt-6"
            color="success"
            nuxt
            to="/guide/[1.11] form_input_bindings"
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
  name: "GuideEventHandling",
  components: { SuccessAlert },
};
</script>
