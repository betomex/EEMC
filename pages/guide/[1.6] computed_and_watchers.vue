<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-sheet class="pa-4">
          <h1>Свойства computed и watch</h1>
          <hr class="my-3" />

          <div class="mt-6">
            <div>
              <h2>Вычисляемые свойства</h2>
              <v-divider class="mb-6" />
              <p>
                Выражения внутри шаблона удобны, но предназначены для простых
                операций. Большое количество логики в шаблоне сделает его
                раздутым и сложным для поддержки. Например, если есть объект с
                вложенным массивом:
              </p>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>Vue<span
                class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      author<span class="token operator">:</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'John Doe'</span><span
                  class="token punctuation">,</span>
        books<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">'Vue 2 - Advanced Guide'</span><span class="token punctuation">,</span>
          <span class="token string">'Vue 3 - Basic Guide'</span><span class="token punctuation">,</span>
          <span class="token string">'Vue 4 - The Mystery'</span>
        <span class="token punctuation">]</span>
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
                  ><br />
                </div>
              </div>
              <p>
                И потребуется отображать разные сообщения, в зависимости от
                того, есть ли у <code>author</code> какие-то книги или нет:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>computed-basics<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span
    class="token punctuation">&gt;</span></span>Есть опубликованные книги:<span class="token tag"><span
                  class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span
    class="token punctuation">&gt;</span></span><code v-pre>{{ author.books.length > 0 ? 'Да' : 'Нет' }}</code><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span
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
                  ><br />
                </div>
              </div>
              <p>
                В таком случае шаблон уже не будет простым и декларативным.
                Потребуется взглянуть на него, прежде чем понять, что он
                выполняет вычисления в зависимости от <code>author.books</code>.
                Проблема усугубится, если подобные вычисления в шаблоне
                потребуются не один раз.
              </p>
              <p>
                Поэтому для сложной логики, включающей реактивные данные,
                следует использовать вычисляемые свойства.
              </p>
              <h3 class="my-4">Простой пример</h3>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>computed-basics<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span
    class="token punctuation">&gt;</span></span>Есть опубликованные книги:<span class="token tag"><span
                  class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span
    class="token punctuation">&gt;</span></span><code v-pre>{{ publishedBooksMessage }}</code><span
                  class="token tag"><span
                  class="token tag"><span class="token punctuation">&lt;/</span>span</span><span
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
      author<span class="token operator">:</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'John Doe'</span><span
                  class="token punctuation">,</span>
        books<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">'Vue 2 - Advanced Guide'</span><span class="token punctuation">,</span>
          <span class="token string">'Vue 3 - Basic Guide'</span><span class="token punctuation">,</span>
          <span class="token string">'Vue 4 - The Mystery'</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  computed<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// геттер вычисляемого свойства</span>
    <span class="token function">publishedBooksMessage</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// `this` указывает на экземпляр vm</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span
                  class="token punctuation">.</span>author<span class="token punctuation">.</span>books<span
                  class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span
                  class="token number">0</span> <span class="token operator">?</span> <span
                  class="token string">'Да'</span> <span class="token operator">:</span> <span class="token string">'Нет'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span
                  class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#computed-basics'</span><span
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
                  ><br /><span class="line-number">21</span><br />
                </div>
              </div>
              <p>
                В этом примере объявляем новое вычисляемое свойство
                <code>publishedBooksMessage</code>.
              </p>
              <p>
                Попробуйте изменить в массиве <code>books</code> количество книг
                в <code>data</code> приложения и увидите, как обновится и
                значение <code>publishedBooksMessage</code>.
              </p>
              <p>
                В шаблоне к вычисляемым свойствам можно обращаться как и к
                обычным свойствам. Vue знает, что
                <code>vm.publishedBooksMessage</code> зависит от значения
                <code>vm.author.books</code>, поэтому будет обновлять все
                привязки, которые зависят от
                <code>vm.publishedBooksMessage</code>, при изменениях
                <code></code>. И самая лучшая часть — эту зависимость создали
                декларативно: геттер-функция вычисляемого свойства не имеет
                побочных эффектов, что облегчает понимание и тестирование.
              </p>
              <h3 class="my-4">Кэширование вычисляемых свойств vs Методы</h3>
              <p>
                Можно заметить, что того же результата можно достичь с помощью
                метода в выражении:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span
                class="token punctuation">&gt;</span></span><code v-pre>{{ calculateBooksMessage() }}</code><span
                class="token tag"><span
                class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token comment">// в компоненте</span>
methods<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">calculateBooksMessage</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span
                  class="token punctuation">.</span>author<span class="token punctuation">.</span>books<span
                  class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span
                  class="token number">0</span> <span class="token operator">?</span> <span
                  class="token string">'Да'</span> <span class="token operator">:</span> <span class="token string">'Нет'</span>
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
                  ><br />
                </div>
              </div>
              <p>
                Вместо вычисляемого свойства можно объявить эту же функцию в
                качестве метода. Для отображаемого результата эти два подхода
                действительно одинаковы. Однако разница заключается в том, что
                вычисляемые свойства кэшируются на основе своих реактивных
                зависимостей. Вычисляемое свойство будет пересчитываться только
                при изменении одной из своих зависимостей. А значит, пока не
                изменится <code>author.books</code>, любое число обращений к
                вычисляемому свойству <code>publishedBooksMessage</code> будет
                немедленно возвращать ранее вычисленный результат, без
                необходимости повторного запуска функции.
              </p>
              <p>
                Это также означает, что следующее вычисляемое свойство никогда
                не будет обновляться, потому что <code>Date.now()</code> не
                является реактивной зависимостью:
              </p>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>computed<span
                class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// НЕ БУДЕТ РАБОТАТЬ</span>
  <span class="token function">now</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span
                  class="token punctuation">(</span><span class="token punctuation">)</span>
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
                  ><br />
                </div>
              </div>
              <p>
                Для сравнения, вызов метода будет всегда запускать функцию,
                когда будет перерисовка.
              </p>
              <p>
                Зачем нужно кэширование? Представьте, что есть затратное
                вычисляемое свойство <code>list</code>, которому требуется
                проходить по большому массиву и выполнять различные вычисления.
                Далее, могут быть другие вычисляемые свойства, которые зависят
                от значения <code>list</code>. Без кэширования выполнять геттер
                <code>list</code> потребуется во много раз больше, чем это
                нужно! Когда же необходимо обойтись без кэширования — стоит
                использовать <code>methods</code>.
              </p>
              <h3 class="my-4">Сеттер вычисляемого свойства</h3>
              <p>
                Вычисляемые свойства по умолчанию состоят только из геттера и
                поэтому доступны только для чтения. Но при необходимости можно
                также определить и сеттер:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token comment">// ...</span>
computed<span class="token operator">:</span> <span class="token punctuation">{</span>
  fullName<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// геттер (для получения значения)</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span
                  class="token punctuation">.</span>firstName <span class="token operator">+</span> <span
                  class="token string">' '</span> <span class="token operator">+</span> <span
                  class="token keyword">this</span><span class="token punctuation">.</span>lastName
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// сеттер (при присвоении нового значения)</span>
    <span class="token function">set</span><span class="token punctuation">(</span>newValue<span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> names <span class="token operator">=</span> newValue<span
                  class="token punctuation">.</span><span class="token function">split</span><span
                  class="token punctuation">(</span><span class="token string">' '</span><span
                  class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span
                  class="token operator">=</span> names<span class="token punctuation">[</span><span
                  class="token number">0</span><span class="token punctuation">]</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span
                  class="token operator">=</span> names<span class="token punctuation">[</span>names<span
                  class="token punctuation">.</span>length <span class="token operator">-</span> <span
                  class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// ...</span>
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
                  ><br />
                </div>
              </div>
              <p>
                Теперь, при выполнении
                <code>vm.fullName = 'John Doe'</code> вызовется сеттер
                вычисляемого свойства и значения <code>vm.firstName</code> и
                <code>vm.lastName</code> соответственно обновлены.
              </p>
            </div>

            <div>
              <h2>Методы-наблюдатели</h2>
              <v-divider class="mb-6" />
              <p>
                Обычно вычисляемые свойства подходят в большинстве случаев, но
                иногда нужно отследить сам факт изменений. Поэтому Vue
                предоставляет ещё один способ реагировать на изменения данных с
                помощью опции <code>watch</code>. Это полезно, если необходимо
                выполнять асинхронные или затратные операции в ответ на
                изменение данных.
              </p>
              <p>Например:</p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>watch-example<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span
    class="token punctuation">&gt;</span></span>
    Задайте вопрос, на который можно ответить «да» или «нет»:
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
      class="token attr-name">v-model</span><span class="token attr-value"><span
      class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>question<span
      class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span
    class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span
    class="token punctuation">&gt;</span></span><code v-pre>{{ answer }}</code><span class="token tag"><span
                  class="token tag"><span
                  class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
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
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- Поскольку уже существует обширная экосистема ajax-библиотек --&gt;</span>
<span class="token comment">&lt;!-- и библиотек функций общего назначения, ядро Vue может       --&gt;</span>
<span class="token comment">&lt;!-- оставаться маленьким и не изобретать их заново. Кроме того, --&gt;</span>
<span class="token comment">&lt;!-- это позволяет использовать только знакомые инструменты.     --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span
  class="token attr-name">src</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token script"></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span
  class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> watchExampleVM <span class="token operator">=</span> Vue<span
                  class="token punctuation">.</span><span class="token function">createApp</span><span
                  class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        question<span class="token operator">:</span> <span class="token string">''</span><span
                  class="token punctuation">,</span>
        answer<span class="token operator">:</span> <span class="token string">'Вопросы обычно заканчиваются вопросительным знаком. ;-)'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    watch<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// при каждом изменении `question` эта функция будет запускаться</span>
      <span class="token function">question</span><span class="token punctuation">(</span><span class="token parameter">newQuestion<span
                  class="token punctuation">,</span> oldQuestion</span><span class="token punctuation">)</span> <span
                  class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newQuestion<span
                  class="token punctuation">.</span><span class="token function">indexOf</span><span
                  class="token punctuation">(</span><span class="token string">'?'</span><span
                  class="token punctuation">)</span> <span class="token operator">&gt;</span> <span
                  class="token operator">-</span><span class="token number">1</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAnswer</span><span
                  class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    methods<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">getAnswer</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>answer <span
                  class="token operator">=</span> <span class="token string">'Думаю...'</span>
        axios
          <span class="token punctuation">.</span><span class="token function">get</span><span
                  class="token punctuation">(</span><span class="token string">'https://yesno.wtf/api'</span><span
                  class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">then</span><span
                  class="token punctuation">(</span><span class="token parameter">response</span> <span
                  class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>answer <span
                  class="token operator">=</span> response<span class="token punctuation">.</span>data<span
                  class="token punctuation">.</span>answer
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">catch</span><span
                  class="token punctuation">(</span><span class="token parameter">error</span> <span
                  class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>answer <span
                  class="token operator">=</span> <span class="token string">'Ошибка! Нет доступа к API. '</span> <span
                  class="token operator">+</span> error
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span
                  class="token punctuation">.</span><span class="token function">mount</span><span
                  class="token punctuation">(</span><span class="token string">'#watch-example'</span><span
                  class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
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
                  ><br /><span class="line-number">21</span><br /><span
                    class="line-number"
                    >22</span
                  ><br /><span class="line-number">23</span><br /><span
                    class="line-number"
                    >24</span
                  ><br /><span class="line-number">25</span><br /><span
                    class="line-number"
                    >26</span
                  ><br /><span class="line-number">27</span><br /><span
                    class="line-number"
                    >28</span
                  ><br /><span class="line-number">29</span><br /><span
                    class="line-number"
                    >30</span
                  ><br /><span class="line-number">31</span><br /><span
                    class="line-number"
                    >32</span
                  ><br /><span class="line-number">33</span><br /><span
                    class="line-number"
                    >34</span
                  ><br /><span class="line-number">35</span><br /><span
                    class="line-number"
                    >36</span
                  ><br />
                </div>
              </div>
              <p>
                В этом случае, использование опции <code>watch</code> позволяет
                выполнить асинхронную операцию (обращение к API) и устанавливает
                условие для выполнения этой операции. Ничего из этого нельзя
                сделать с помощью вычисляемых свойств.
              </p>
              <p>
                Кроме опции <code>watch</code>, можно использовать императивную
                запись с помощью vm.$watch API.
              </p>
              <h3 class="my-4">Вычисляемые свойства vs Методы-наблюдатели</h3>
              <p>
                Vue предоставляет универсальный способ для наблюдения и
                реагирования на изменения данных в текущем активном экземпляре:
                свойства watch. Когда есть данные, которые нужно изменять на
                основе других данных, кажется удобным реализовать всё через
                <code>watch</code> (особенно, если ранее работали с AngularJS).
                Однако, чаще всего уместнее использовать вычисляемые свойства,
                чем вызовы методов-наблюдателей <code>watch</code>. Рассмотрим
                пример:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><code v-pre>{{
                  fullName
                }}</code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
                class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">const</span> vm <span
                class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      firstName<span class="token operator">:</span> <span class="token string">'Foo'</span><span
                  class="token punctuation">,</span>
      lastName<span class="token operator">:</span> <span class="token string">'Bar'</span><span
                  class="token punctuation">,</span>
      fullName<span class="token operator">:</span> <span class="token string">'Foo Bar'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  watch<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">firstName</span><span class="token punctuation">(</span><span class="token parameter">val</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>fullName <span
                  class="token operator">=</span> val <span class="token operator">+</span> <span class="token string">' '</span> <span
                  class="token operator">+</span> <span class="token keyword">this</span><span
                  class="token punctuation">.</span>lastName
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">lastName</span><span class="token punctuation">(</span><span class="token parameter">val</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>fullName <span
                  class="token operator">=</span> <span class="token keyword">this</span><span
                  class="token punctuation">.</span>firstName <span class="token operator">+</span> <span
                  class="token string">' '</span> <span class="token operator">+</span> val
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span
                  class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#demo'</span><span
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
              <p>
                Код выше является императивным и повторяющимся. Сравним с
                вычисляемым свойством:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">const</span> vm <span
                class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      firstName<span class="token operator">:</span> <span class="token string">'Foo'</span><span
                  class="token punctuation">,</span>
      lastName<span class="token operator">:</span> <span class="token string">'Bar'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  computed<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">fullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span
                  class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span
                  class="token punctuation">.</span>firstName <span class="token operator">+</span> <span
                  class="token string">' '</span> <span class="token operator">+</span> <span
                  class="token keyword">this</span><span class="token punctuation">.</span>lastName
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span
                  class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#demo'</span><span
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
              <p>Значительно лучше, не так ли?</p>
            </div>
          </div>

          <v-btn
            class="mt-6"
            color="success"
            nuxt
            to="/guide/[1.7] class_and_style_binding"
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
  name: "GuideComputedWatchers",
  components: { SuccessAlert },
};
</script>
