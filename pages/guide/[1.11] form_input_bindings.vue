<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-sheet class="pa-4">
          <h1>Работа с формами</h1>
          <hr class="my-3" />

          <div class="mt-6">
            <div>
              <h2>Обычное использование</h2>
              <v-divider class="mb-6" />
              <p>
                Можно использовать директиву <code>v-model</code> для создания
                двусторонней привязки данных с элементами форм: input, textarea
                и select. Она автоматически выбирает правильный способ
                обновления элемента в зависимости от его типа. Хоть
                <code>v-model</code> и выглядит как некая магия, по сути это
                лишь синтаксический сахар для обновления данных при вводе
                пользователем, плюс небольшие доработки для некоторых граничных
                случаев.
              </p>
              <SuccessAlert>
                <code>v-model</code> игнорирует начальное значение атрибутов
                <code>value</code>, <code>checked</code> или
                <code>selected</code> на любых элементах форм. Источником истины
                всегда считаются данные текущего активного экземпляра. Начальное
                значение нужно объявить на стороне JavaScript, внутри опции data
                компонента.
              </SuccessAlert>
              <p>
                Внутренне <code>v-model</code> использует разные свойства и
                генерирует разные события для различных элементов форм:
              </p>
              <ul class="mb-4">
                <li>
                  элементы для ввода текста и многострочного текста используют
                  свойство <code>value</code> и событие <code>input</code>;
                </li>
                <li>
                  чекбоксы и радиокнопки используют свойство
                  <code>checked</code> и событие <code>change</code>;
                </li>
                <li>
                  выпадающие списки используют свойство <code>value</code> и
                  событие <code>change</code>.
                </li>
              </ul>
              <SuccessAlert>
                Для языков, которые требуют IME (китайский, японский, корейский
                и т.д.), можно заметить, что <code>v-model</code> не обновляется
                во время IME-композиции. Если необходимо обрабатывать и эти
                обновления, используйте слушатель события <code>input</code> и
                привязку к <code>value</code> вместо использования
                <code>v-model</code>.
              </SuccessAlert>
              <h3 class="my-4">Текст</h3>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
                class="token attr-name">v-model</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message<span
                class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span
                class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>отредактируй меня<span class="token punctuation">"</span></span> <span
                class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span
  class="token punctuation">&gt;</span></span>Сообщение: <code v-pre>{{ message }}</code><span class="token tag"><span
                  class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                    class="line-number"
                    >2</span
                  ><br />
                </div>
              </div>
              <h3 class="my-4">Многострочный текст</h3>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span
                class="token punctuation">&gt;</span></span>Многострочное сообщение:<span class="token tag"><span
                class="token tag"><span class="token punctuation">&lt;/</span>span</span><span
                class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span
  class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span
  class="token value css language-css"><span class="token property">white-space</span><span
  class="token punctuation">:</span> pre-line<span class="token punctuation">;</span></span><span
  class="token punctuation">"</span></span></span><span class="token punctuation">&gt;</span></span><code
                  v-pre>{{ message }}</code><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span
                  class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span
  class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span
  class="token attr-name">v-model</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message<span
  class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span
  class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>введите несколько строчек<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>textarea</span><span
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
                Интерполяция внутри textarea не работают. Используйте директиву
                <code>v-model</code> вместо неё.
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- НЕ РАБОТАЕТ --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span><span
  class="token punctuation">&gt;</span></span><code v-pre>{{ text }}</code><span class="token tag"><span
                  class="token tag"><span
                  class="token punctuation">&lt;/</span>textarea</span><span
                  class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- ok --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span
  class="token attr-name">v-model</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>textarea</span><span
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
              <h3 class="my-4">Чекбоксы</h3>
              <p>Один чекбокс, привязанный к булевому значению:</p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
                class="token attr-name">type</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span
                class="token punctuation">"</span></span> <span class="token attr-name">id</span><span
                class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span
                class="token attr-name">v-model</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checked<span
                class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span
  class="token attr-name">for</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><code v-pre>{{
                    checked
                  }}</code><span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                    class="line-number"
                    >2</span
                  ><br />
                </div>
              </div>
              <p>Список чекбоксов, привязанных к одному массиву:</p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>v-model-multiple-checkboxes<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
    class="token attr-name">type</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span
    class="token punctuation">"</span></span> <span class="token attr-name">id</span><span
    class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>jack<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span
    class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>Джек<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span
    class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>checkedNames<span class="token punctuation">"</span></span> <span
    class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span
    class="token attr-name">for</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jack<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Джек<span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
    class="token attr-name">type</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span
    class="token punctuation">"</span></span> <span class="token attr-name">id</span><span
    class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>john<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span
    class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>Джон<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span
    class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>checkedNames<span class="token punctuation">"</span></span> <span
    class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span
    class="token attr-name">for</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>john<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Джон<span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
    class="token attr-name">type</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span
    class="token punctuation">"</span></span> <span class="token attr-name">id</span><span
    class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>mike<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span
    class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>Майк<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span
    class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>checkedNames<span class="token punctuation">"</span></span> <span
    class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span
    class="token attr-name">for</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mike<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Майк<span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span
    class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span
    class="token punctuation">&gt;</span></span>Отмеченные имена: <code v-pre>{{ checkedNames }}</code><span
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
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>Vue<span
                class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      checkedNames<span class="token operator">:</span> <span class="token punctuation">[</span><span
                  class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span
                  class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#v-model-multiple-checkboxes'</span><span
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
              <h3 class="my-4">Радиокнопки</h3>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>v-model-radiobutton<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
    class="token attr-name">type</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span
    class="token punctuation">"</span></span> <span class="token attr-name">id</span><span
    class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>one<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span
    class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>Один<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span
    class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>picked<span class="token punctuation">"</span></span> <span
    class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span
    class="token attr-name">for</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>one<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Один<span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span
    class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
    class="token attr-name">type</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span
    class="token punctuation">"</span></span> <span class="token attr-name">id</span><span
    class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>two<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span
    class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>Два<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span
    class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>picked<span class="token punctuation">"</span></span> <span
    class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span
    class="token attr-name">for</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>two<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Два<span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span
    class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span
    class="token punctuation">&gt;</span></span>Выбрано: <code v-pre>{{ picked }}</code><span class="token tag"><span
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
                  ><br /><span class="line-number">5</span><br /><span
                    class="line-number"
                    >6</span
                  ><br /><span class="line-number">7</span><br /><span
                    class="line-number"
                    >8</span
                  ><br /><span class="line-number">9</span><br />
                </div>
              </div>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>Vue<span
                class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      picked<span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span
                  class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#v-model-radiobutton'</span><span
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
              <h3 class="my-4">Выпадающие списки</h3>
              <p>Выбор одного варианта из списка:</p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>v-model-select<span class="token punctuation">"</span></span> <span
                class="token attr-name">class</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span
    class="token attr-name">v-model</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selected<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span
      class="token attr-name">disabled</span> <span class="token attr-name">value</span><span
      class="token attr-value"><span class="token punctuation attr-equals">=</span><span
      class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Выберите один из вариантов<span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span
      class="token punctuation">&gt;</span></span>А<span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span
      class="token punctuation">&gt;</span></span>Б<span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span
      class="token punctuation">&gt;</span></span>В<span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span
    class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span
    class="token punctuation">&gt;</span></span>Выбрано: <code v-pre>{{ selected }}</code><span class="token tag"><span
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
                  ><br /><span class="line-number">5</span><br /><span
                    class="line-number"
                    >6</span
                  ><br /><span class="line-number">7</span><br /><span
                    class="line-number"
                    >8</span
                  ><br /><span class="line-number">9</span><br />
                </div>
              </div>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>Vue<span
                class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      selected<span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span
                  class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#v-model-select'</span><span
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
                Если начальное значение выражения <code>v-model</code> не
                соответствует ни одному из вариантов списка, элемент
                <code>&lt;select></code> будет отображаться в «невыбранном»
                состоянии. В iOS это приведёт к тому, что пользователь не сможет
                выбрать первый элемент, потому что iOS не сгенерирует событие
                <code>change</code> в этом случае. Поэтому рекомендуется
                добавлять отключённый <code>disabled</code>-вариант выбора с
                пустым значением <code>value</code>, как показано в примере
                выше.
              </p>
              <p>
                Выбор нескольких вариантов из списка (с привязкой к массиву):
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span
                class="token attr-name">v-model</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selected<span
                class="token punctuation">"</span></span> <span class="token attr-name">multiple</span><span
                class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span
    class="token punctuation">&gt;</span></span>А<span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span
    class="token punctuation">&gt;</span></span>Б<span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span
    class="token punctuation">&gt;</span></span>В<span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span
  class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span
  class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span
  class="token punctuation">&gt;</span></span>Выбраны: <code v-pre>{{ selected }}</code><span class="token tag"><span
                  class="token tag"><span class="token punctuation">&lt;/</span>span</span><span
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
                Динамическое отображение списка опций с помощью
                <code>v-for</code>:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>v-model-select-dynamic<span
                class="token punctuation">"</span></span> <span class="token attr-name">class</span><span
                class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>demo<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span
    class="token attr-name">v-model</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selected<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span
      class="token attr-name">v-for</span><span class="token attr-value"><span
      class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>option in options<span
      class="token punctuation">"</span></span> <span class="token attr-name">:value</span><span
      class="token attr-value"><span class="token punctuation attr-equals">=</span><span
      class="token punctuation">"</span>option.value<span class="token punctuation">"</span></span><span
      class="token punctuation">&gt;</span></span>
      <code v-pre>{{ option.text }}</code>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span
      class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span
    class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span
    class="token punctuation">&gt;</span></span>Выбрано: <code v-pre>{{ selected }}</code><span class="token tag"><span
                  class="token tag"><span class="token punctuation">&lt;/</span>span</span><span
                  class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>div</span><span
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
      selected<span class="token operator">:</span> <span class="token string">'A'</span><span
                  class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">'Один'</span><span
                  class="token punctuation">,</span> value<span class="token operator">:</span> <span
                  class="token string">'A'</span> <span class="token punctuation">}</span><span
                  class="token punctuation">,</span>
        <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">'Два'</span><span
                  class="token punctuation">,</span> value<span class="token operator">:</span> <span
                  class="token string">'B'</span> <span class="token punctuation">}</span><span
                  class="token punctuation">,</span>
        <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">'Три'</span><span
                  class="token punctuation">,</span> value<span class="token operator">:</span> <span
                  class="token string">'C'</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span
                  class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#v-model-select-dynamic'</span><span
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
                  ><br />
                </div>
              </div>
            </div>

            <div>
              <h2>Привязка значений</h2>
              <v-divider class="mb-6" />
              <p>
                Для радиокнопок и выпадающих списков в качестве привязываемых
                значений <code>v-model</code> обычно будут статические строки
                (или булево для чекбокса):
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- `picked` будет строкой "a" при выборе --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
  class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span
  class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span
  class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>picked<span
  class="token punctuation">"</span></span> <span class="token attr-name">value</span><span
  class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a<span
  class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- `toggle` может принимать значение true или false --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
  class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span
  class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span
  class="token attr-name">v-model</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toggle<span
  class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- `selected` будет строкой "abc" при выборе первого пункта --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span
  class="token attr-name">v-model</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selected<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span
    class="token attr-name">value</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>abc<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>ABC<span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span
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
                  ><br />
                </div>
              </div>
              <p>
                Но иногда может потребоваться привязать значение к динамическому
                свойству текущего активного экземпляра. Для этого можно
                использовать <code>v-bind</code>. Кроме того, использование
                <code>v-bind</code> позволяет привязать значение поля с
                нестроковыми значениями.
              </p>
              <h3 class="my-4">Чекбокс</h3>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
                class="token attr-name">type</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span
                class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span
                class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>toggle<span class="token punctuation">"</span></span> <span
                class="token attr-name">true-value</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>да<span
                class="token punctuation">"</span></span> <span class="token attr-name">false-value</span><span
                class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>нет<span class="token punctuation">"</span></span> <span
                class="token punctuation">/&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token comment">// когда чекбокс выбран</span>
vm<span class="token punctuation">.</span>toggle <span class="token operator">===</span> <span
                  class="token string">'да'</span>

<span class="token comment">// когда чекбокс сброшен</span>
vm<span class="token punctuation">.</span>toggle <span class="token operator">===</span> <span class="token string">'нет'</span>
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
                Атрибуты <code>true-value</code> и <code>false-value</code> не
                влияют на атрибут <code>value</code> элемента
                <code>input</code>, потому что браузеры пропускают невыбранные
                чекбоксы при отправке форм. Чтобы гарантировать отправку одного
                из двух значений с формой (например, «да» или «нет») используйте
                радиокнопки.
              </SuccessAlert>
              <h3 class="my-4">Радиокнопки</h3>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
                class="token attr-name">type</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span
                class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span
                class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>pick<span class="token punctuation">"</span></span> <span
                class="token attr-name">:value</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a<span
                class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token comment">// когда выбран</span>
vm<span class="token punctuation">.</span>pick <span class="token operator">===</span> vm<span
                  class="token punctuation">.</span>a
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                    class="line-number"
                    >2</span
                  ><br />
                </div>
              </div>
              <h3 class="my-4">Выпадающие списки</h3>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span
                class="token attr-name">v-model</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selected<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- инлайновый объект с данными --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span
    class="token attr-name">:value</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ number: 123 }<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>123<span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span
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
                ><code><span class="token comment">// когда выбран</span>
<span class="token keyword">typeof</span> vm<span class="token punctuation">.</span>selected <span
                  class="token comment">// =&gt; 'object'</span>
vm<span class="token punctuation">.</span>selected<span class="token punctuation">.</span>number <span
                  class="token comment">// =&gt; 123</span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                    class="line-number"
                    >2</span
                  ><br /><span class="line-number">3</span><br />
                </div>
              </div>
            </div>

            <div>
              <h2>Модификаторы</h2>
              <v-divider class="mb-6" />
              <h3 class="my-4"><code>.lazy</code></h3>
              <p>
                По умолчанию <code>v-model</code> синхронизирует поле ввода с
                данными по событию <code>input</code> (кроме вышеупомянутых
                исключений для событий IME). Можно указать модификатор
                <code>lazy</code>, чтобы синхронизация происходила после события
                <code>change</code>:
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- синхронизация после события "change" вместо "input" --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
  class="token attr-name">v-model.lazy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span
  class="token punctuation">"</span>msg<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                    class="line-number"
                    >2</span
                  ><br />
                </div>
              </div>
              <h3 class="my-4"><code>.number</code></h3>
              <p>
                Для автоматического приведения введённого пользователем к числу
                можно добавить модификатор <code>number</code>:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
                class="token attr-name">v-model.number</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span
                class="token punctuation">"</span></span> <span class="token attr-name">type</span><span
                class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span
                class="token punctuation">/&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                Это часто бывает полезно при использовании полей с типом
                <code>text</code>. При указании типа поля <code>number</code> —
                Vue автоматически станет конвертировать строковое значение в
                число, добавлять модификатор <code>.number</code> к
                <code>v-model</code> не потребуется. Если значение не получится
                привести к числу с помощью <code>parseFloat()</code>, то будет
                возвращено исходное значение.
              </p>
              <h3 class="my-4"><code>.trim</code></h3>
              <p>
                Если необходимо, чтобы пробельные символы в начале и в конце
                строки автоматически обрезались, то можно добавить модификатор
                <code>trim</code> для полей ввода, управляемых через
                <code>v-model</code>:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
                class="token attr-name">v-model.trim</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
            </div>

            <div>
              <h2>Использование <code>v-model</code> с компонентами</h2>
              <v-divider class="mb-6" />
              <p>
                Встроенные в HTML элементы ввода не всегда соответствуют
                потребностям. К счастью, компоненты Vue позволяют создавать
                собственные аналоги с полностью настраиваемым поведением. Эти
                элементы тоже могут работать с директивой <code>v-model</code>!
              </p>
            </div>
          </div>

          <v-btn
            class="mt-6"
            color="success"
            nuxt
            to="/guide/[1.12] components_basics"
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
  name: "GuideFormInputBindings",
  components: { SuccessAlert },
};
</script>
