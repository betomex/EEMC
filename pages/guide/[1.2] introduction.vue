<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-sheet class="pa-4">
          <h1>Введение</h1>
          <hr class="my-3" />

          <div class="mt-6">
            <div>
              <h2>Что такое Vue.js?</h2>
              <v-divider class="mb-6" />
              <p>
                Vue (произносится /vjuː/, примерно как view) — прогрессивный
                фреймворк для создания пользовательских интерфейсов. В отличие
                от фреймворков-монолитов, Vue создавался пригодным для
                постепенного внедрения. Его ядро в первую очередь решает задачи
                уровня представления (view), упрощая интеграцию с другими
                библиотеками и существующими проектами. С другой стороны, Vue
                полностью подходит и для разработки сложных одностраничных
                приложений (SPA, Single-Page Applications), если использовать
                его в комбинации с современными инструментами и дополнительными
                библиотеками.
              </p>
            </div>

            <div>
              <h2 class="mt-6">Начало работы</h2>
              <v-divider class="mb-6" />
              <SuccessAlert>
                В руководстве предполагаются знания HTML, CSS и JavaScript на
                среднем уровне. Для новичков во фронтенд-разработке сразу
                начинать изучение с фреймворка может быть не лучшей идеей —
                возвращайтесь, разобравшись с основами! Наличие опыта работы с
                другими фреймворками может помочь, но не является обязательным.
              </SuccessAlert>
              <p>
                Самый простой способ попробовать Vue.js — пример Hello World.
                Открывайте его в соседней вкладке и практикуйтесь, изменяя по
                ходу изучения руководства.
              </p>
              <p>
                На странице установки перечислено несколько вариантов как
                устанавливать Vue. Примечание: начинающим программистам не
                рекомендуем стартовать с <code>vue-cli</code>, особенно если ещё
                не знакомы с инструментами сборки на основе Node.js.
              </p>
            </div>
          </div>

          <div>
            <h2 class="mt-6">Декларативная отрисовка</h2>
            <v-divider class="mb-6" />
            <p>
              В ядре Vue.js находится система, позволяющая декларативно
              отрисовывать данные в DOM с помощью простого синтаксиса шаблонов:
            </p>
            <div class="language-html line-numbers-mode">
              <pre
                class="language-html"
              ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>counter<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <code v-pre>Счётчик: {{ counter }}</code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
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
              ><code><span class="token keyword">const</span> Counter <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      counter<span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span>Counter<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#counter'</span><span class="token punctuation">)</span>
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
              Вот и первое Vue-приложение! Хоть и выглядит как простая отрисовка
              строкового шаблона, но «под капотом» Vue выполнил немало работы.
              Данные и DOM теперь реактивно связаны. Как в этом убедиться?
              Посмотрите на пример ниже, где свойство
              <code>counter</code> увеличивается каждую секунду и увидите, как
              изменяется DOM:
            </p>
            <div class="language-js line-numbers-mode">
              <div class="highlight-lines">
                <br /><br /><br /><br /><br /><br /><br />
                <div class="highlighted">&nbsp;</div>
                <div class="highlighted">&nbsp;</div>
                <div class="highlighted">&nbsp;</div>
                <br /><br /><br />
              </div>
              <pre
                class="language-js"
              ><code><span class="token keyword">const</span> Counter <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      counter<span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token operator">++</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
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
                ><br /><span class="line-number">11</span><br /><span
                  class="line-number"
                  >12</span
                ><br />
              </div>
            </div>
            <p>
              Кроме интерполяции текста также можно связывать данные с
              атрибутами элементов:
            </p>
            <div class="language-html line-numbers-mode">
              <pre
                class="language-html"
              ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bind-attribute<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Наведи на меня курсор на пару секунд, чтобы
    увидеть динамически связанное значение title!
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
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
            <div class="language-js line-numbers-mode">
              <pre
                class="language-js"
              ><code><span class="token keyword">const</span> AttributeBinding <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      message<span class="token operator">:</span> <span class="token string">'Страница загружена '</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span>AttributeBinding<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#bind-attribute'</span><span class="token punctuation">)</span>
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
              Здесь повстречались с чем-то новым. Атрибут
              <code>v-bind</code> называется директивой. Директивы именуются с
              префикса <code>v-</code>, который обозначает, что это специальные
              атрибуты Vue, и, как уже можно догадаться, они добавляют особое
              реактивное поведение отрисованному DOM. В примере выше директива
              говорит «сохраняй значение <code>title</code> этого элемента
              актуальным при изменении свойства <code>message</code> в текущем
              активном экземпляре».
            </p>
          </div>

          <div>
            <h2 class="mt-6">Работа с пользовательским вводом</h2>
            <v-divider class="mb-6" />
            <p>
              Чтобы позволить пользователям взаимодействовать с приложением,
              можно использовать директиву v-on для обработчиков событий,
              которые будут вызывать методы экземпляра:
            </p>
            <div class="language-html line-numbers-mode">
              <pre
                class="language-html"
              ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>event-handling<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><code v-pre>{{ message }}</code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reverseMessage<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Перевернуть сообщение<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
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
              ><code><span class="token keyword">const</span> EventHandling <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      message<span class="token operator">:</span> <span class="token string">'Привет, Vue.js!'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">reverseMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message
        <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span>EventHandling<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#event-handling'</span><span class="token punctuation">)</span>
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
              Обратите внимание, в методе не трогаем DOM и обновляем только
              состояние приложения — всеми манипуляциями с DOM занимается Vue, а
              в коде фокусируемся на логике работы.
            </p>
            <p>
              Vue также предоставляет директиву <code>v-model</code>, которая
              реализует двустороннюю привязку между элементом формы и состоянием
              приложения:
            </p>
            <div class="language-html line-numbers-mode">
              <pre
                class="language-html"
              ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>two-way-binding<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><code v-pre>{{ message }}</code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
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
              ><code><span class="token keyword">const</span> TwoWayBinding <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      message<span class="token operator">:</span> <span class="token string">'Привет, Vue!'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span>TwoWayBinding<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#two-way-binding'</span><span class="token punctuation">)</span>
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
            <h2 class="mt-6">Условия и циклы</h2>
            <v-divider class="mb-6" />
            <p>Управлять присутствием элемента в DOM тоже просто:</p>
            <div class="language-html line-numbers-mode">
              <pre
                class="language-html"
              ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>conditional-rendering<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>seen<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Сейчас меня видно<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
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
              ><code><span class="token keyword">const</span> ConditionalRendering <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      seen<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span>ConditionalRendering<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#conditional-rendering'</span><span class="token punctuation">)</span>
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
              Пример выше демонстрирует возможность связывания данных не только
              с текстом и атрибутами, но и со структурой DOM. Кроме того, Vue
              имеет мощную систему анимаций, которая может автоматически
              применять эффекты переходов при добавлении, обновлении или
              удалении элементов.
            </p>
            <p>
              Есть и некоторое количество других директив, каждая из которых
              обладает своей особой функциональностью. Например, директиву
              <code>v-for</code>
              можно использовать для отображения списка элементов, используя
              данные из массива:
            </p>
            <div class="language-html line-numbers-mode">
              <pre
                class="language-html"
              ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list-rendering<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todo in todos<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <code v-pre>{{ todo.text }}</code>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
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
            <div class="language-js line-numbers-mode">
              <pre
                class="language-js"
              ><code><span class="token keyword">const</span> ListRendering <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      todos<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">'Learn JavaScript'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">'Learn Vue'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">'Build something awesome'</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span>ListRendering<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#list-rendering'</span><span class="token punctuation">)</span>
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
          </div>

          <div>
            <h2 class="mt-6">Композиция приложения из компонентов</h2>
            <v-divider class="mb-6" />
            <p>
              Компонентная система является ещё одной важной концепцией во Vue,
              потому что это абстракция, которая позволяет создавать большие
              приложения, состоящие из небольших, автономных и часто
              переиспользуемых компонентов. Если задуматься, то почти любой тип
              интерфейса приложения можно абстрактно представить в виде дерева
              компонентов:
            </p>
            <div class="d-flex justify-center">
              <v-img
                class="mb-4"
                max-width="800"
                src="https://v3.ru.vuejs.org/images/components.png"
              />
            </div>
            <p>
              Компонент во Vue — по сути экземпляр с предустановленными опциями.
              Его регистрация также проста: нужно создать объект компонента, как
              это уже делали с объектом <code>app</code>, и указать его в
              родительской опции <code>components</code>:
            </p>
            <div class="language-js line-numbers-mode">
              <pre
                class="language-js"
              ><code><span class="token keyword">const</span> TodoItem <span class="token operator">=</span> <span class="token punctuation">{</span>
  template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;li&gt;Это одна из задач&lt;/li&gt;</span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span>

<span class="token comment">// Создаём Vue-приложение</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    TodoItem <span class="token comment">// Регистрируем новый компонент</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span> <span class="token comment">// Остальные свойства для компонента</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// Монтируем приложение Vue</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>
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
              После этого можно использовать его в шаблоне другого компонента:
            </p>
            <div class="language-html line-numbers-mode">
              <pre
                class="language-html"
              ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Создание экземпляра компонента todo-item --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>todo-item</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>todo-item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
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
              Пока что во всех элементах списка будет один и тот же текст, что
              не очень-то интересно. Должна быть возможность передавать данные в
              дочерние компоненты из родительской области видимости. Доработаем
              компонент, чтобы он принимал входной параметр:
            </p>
            <div class="language-js line-numbers-mode">
              <pre
                class="language-js"
              ><code><span class="token keyword">const</span> TodoItem <span class="token operator">=</span> <span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'todo'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"><span class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token interpolation"><span class="token punctuation">{{</span><span class="token inline-js language-js"> todo<span class="token punctuation">.</span>text </span><span class="token punctuation">}}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span></span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span>
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
              Теперь можно передавать свой текст для каждого из компонентов с
              помощью <code>v-bind</code>:
            </p>
            <div class="language-html line-numbers-mode">
              <pre
                class="language-html"
              ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todo-list-app<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
      Теперь можно передавать каждому компоненту todo-item объект с информацией
      о задаче, который может динамически изменяться. Также каждому компоненту
      определяем "key", назначение которого разберём далее в руководстве.
    --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>todo-item</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in groceryList<span class="token punctuation">"</span></span>
      <span class="token attr-name"><span class="token namespace">v-bind:</span>todo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span>
      <span class="token attr-name"><span class="token namespace">v-bind:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>todo-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
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
            <div class="language-js line-numbers-mode">
              <pre
                class="language-js"
              ><code><span class="token keyword">const</span> TodoItem <span class="token operator">=</span> <span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'todo'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"><span class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token interpolation"><span class="token punctuation">{{</span><span class="token inline-js language-js"> todo<span class="token punctuation">.</span>text </span><span class="token punctuation">}}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span></span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> TodoList <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      groceryList<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">'Vegetables'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">'Cheese'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">'Whatever else humans are supposed to eat'</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    TodoItem
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span>TodoList<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#todo-list-app'</span><span class="token punctuation">)</span>
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
                ><br /><span class="line-number">23</span><br />
              </div>
            </div>
            <p>
              Конечно, это несколько надуманный пример, но приложение удалось
              разделить на два блока поменьше. Дочерний компонент достаточно
              хорошо изолирован от родительского интерфейсом входных параметров.
              Теперь можно дорабатывать компонент <code>&lt;todo-item></code>,
              изменяя его шаблон и логику и не затрагивать работу родительского
              приложения.
            </p>
            <p>
              В больших приложениях разделение на компоненты становится
              жизненной необходимостью для сохранения управляемости разработки.
              Гораздо подробнее с компонентами продолжим разбираться далее в
              руководстве, но и сейчас можно взглянуть на (вымышленный) пример
              того, как может выглядеть шаблон приложения, использующего
              компоненты:
            </p>
            <div class="language-html line-numbers-mode">
              <pre
                class="language-html"
              ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-nav</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-nav</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-sidebar</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-sidebar</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-content</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-content</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
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
            <h3 class="my-6">Отношение к пользовательским элементам</h3>
            <p>
              Можно заметить, что компоненты Vue похожи на пользовательские
              элементы, являющиеся частью спецификации веб-компонентов.
              Некоторые элементы дизайна компонентов Vue (например, API слотов)
              действительно разрабатывались под влиянием этой спецификации ещё
              до того, как она была реализована в браузерах.
            </p>
            <p>
              Но главное отличие в том, что компонентная модель Vue разработана
              как часть целостного фреймворка, предоставляющего множество
              дополнительных возможностей, необходимых при создании
              нетривиальных приложений, например, реактивный шаблонизатор и
              управление состоянием — оба этих аспекта не покрываются
              спецификацией.
            </p>
            <p>
              Vue также предоставляет отличную поддержку как для использования,
              так и для создания пользовательских элементов. Более подробную
              информацию можно найти в разделе Vue и веб-компоненты.
            </p>
          </div>

          <v-btn
            class="mt-6"
            color="success"
            nuxt
            to="/guide/[1.3] vue_instance"
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
  name: "GuideIntroduction",
  components: { SuccessAlert },
};
</script>
