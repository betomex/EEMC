<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-sheet class="pa-4">
          <h1>Отрисовка списков</h1>
          <hr class="my-3" />

          <div class="mt-6">
            <div>
              <h2>Отображение элементов массива через <code>v-for</code></h2>
              <v-divider class="mb-6" />
              <p>
                Используйте директиву <code>v-for</code> для отрисовки списка
                элементов на основе массива данных. У директивы
                <code>v-for</code> специальный синтаксис:
                <code>item in items</code>, где <code>items</code> — исходный
                массив, а <code>item</code> — ссылка на итерируемый элемент
                массива:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>array-rendering<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span
    class="token attr-name">v-for</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in items<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <code v-pre>{{ item.message }}</code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span
    class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span
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
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>Vue<span
                class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      items<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> message<span class="token operator">:</span> <span
                  class="token string">'Foo'</span> <span class="token punctuation">}</span><span
                  class="token punctuation">,</span>
        <span class="token punctuation">{</span> message<span class="token operator">:</span> <span
                  class="token string">'Bar'</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span
                  class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#array-rendering'</span><span
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
                  ><br />
                </div>
              </div>
              <p>
                Внутри блока <code>v-for</code> доступны все свойства из области
                видимости родителя. Также может быть второй опциональный
                параметр у <code>v-for</code> с индексом текущего элемента.
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>array-with-index<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span
    class="token attr-name">v-for</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in items<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <code v-pre>{{ parentMessage }} - {{ index }} - {{ item.message }}</code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span
    class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span
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
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>Vue<span
                class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      parentMessage<span class="token operator">:</span> <span class="token string">'Родитель'</span><span
                  class="token punctuation">,</span>
      items<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> message<span class="token operator">:</span> <span
                  class="token string">'Foo'</span> <span class="token punctuation">}</span><span
                  class="token punctuation">,</span>
        <span class="token punctuation">{</span> message<span class="token operator">:</span> <span
                  class="token string">'Bar'</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span
                  class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#array-with-index'</span><span
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
                  ><br /><span class="line-number">11</span><br />
                </div>
              </div>
              <p>
                Можно использовать <code>of</code> в качестве разделителя вместо
                <code>in</code>, как в итераторах JavaScript:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">v-for</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item of items<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
                class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
            </div>

            <div>
              <h2>Отображение свойств объекта через <code>v-for</code></h2>
              <v-divider class="mb-6" />
              <p>
                Также можно использовать <code>v-for</code> для итерирования по
                свойствам объекта:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>v-for-object<span
                class="token punctuation">"</span></span> <span class="token attr-name">class</span><span
                class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>demo<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span
    class="token attr-name">v-for</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value in myObject<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <code v-pre>{{ value }}</code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span
    class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span
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
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>Vue<span
                class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      myObject<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'How to do lists in Vue'</span><span
                  class="token punctuation">,</span>
        author<span class="token operator">:</span> <span class="token string">'Jane Doe'</span><span
                  class="token punctuation">,</span>
        publishedAt<span class="token operator">:</span> <span class="token string">'2016-04-10'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span
                  class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#v-for-object'</span><span
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
                  ><br /><span class="line-number">11</span><br />
                </div>
              </div>
              <p>
                Можно указать второй аргумент для получения имени свойства
                (ключа объекта):
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span
                class="token attr-name">v-for</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(value, name) in myObject<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <code v-pre>{{ name }}: {{ value }}</code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span
  class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                    class="line-number"
                    >2</span
                  ><br /><span class="line-number">3</span><br />
                </div>
              </div>
              <p>И третий — для индекса:</p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span
                class="token attr-name">v-for</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(value, name, index) in myObject<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <code v-pre>{{ index }}. {{ name }}: {{ value }}</code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span
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
                При итерации по объекту порядок обхода свойств будет как и в
                <code>Object.keys()</code>. Консистентность не гарантируется для
                различных реализаций JavaScript-движков.
              </SuccessAlert>
            </div>

            <div>
              <h2>Сохранение состояния</h2>
              <v-divider class="mb-6" />
              <p>
                При обновлении Vue списка элементов, отрисованного директивой
                <code>v-for</code>, по умолчанию используется стратегия
                обновления «на месте». Если порядок элементов массива или
                объекта изменился, Vue не станет перемещать элементы DOM, а
                просто обновит каждый элемент «на месте», чтобы он отображал
                новые данные по соответствующему индексу.
              </p>
              <p>
                Режим по умолчанию эффективен, но применим только в случаях,
                когда результат отрисовки списка не полагается на состояние
                дочерних компонентов или временное состояние DOM (например,
                значения в полях форм).
              </p>
              <p>
                Чтобы подсказать Vue, как определять идентичность каждого
                элемента, и, таким образом, переиспользовать и упорядочивать
                существующие элементы, необходимо указать уникальный атрибут
                <code>key</code> для каждого элемента:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">v-for</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in items<span
                class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span
                class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- содержимое --&gt;</span>
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
              <p>
                Рекомендуется всегда указывать атрибут <code>key</code> с
                <code>v-for</code>, кроме случаев когда итерируемое содержимое
                DOM простое, или когда сознательно полагаетесь на стратегию
                обновления по умолчанию для улучшения производительности.
              </p>
              <p>
                Так как это общий механизм Vue для идентификации узлов, то
                использование <code>key</code> имеет и другие области
                применения, не связанные с <code>v-for</code>, которые изучим
                дальше в руководстве.
              </p>
              <SuccessAlert>
                Не используйте в качестве ключей
                <code>v-for</code> непримитивные значения, такие как объекты и
                массивы. Вместо этого указывайте строковые или числовые
                значения.
              </SuccessAlert>
            </div>

            <div>
              <h2>Отслеживание изменений в массивах</h2>
              <v-divider class="mb-6" />
              <h3 class="my-4">Методы изменения, мутирующие массив</h3>
              <p>
                У наблюдаемого массива Vue оборачивает мутирующие методы, чтобы
                вызывалось обновление представления при их использовании.
                Оборачиваются следующие методы:
              </p>
              <ul>
                <li><code>push()</code></li>
                <li><code>pop()</code></li>
                <li><code>shift()</code></li>
                <li><code>unshift()</code></li>
                <li><code>splice()</code></li>
                <li><code>sort()</code></li>
                <li><code>reverse()</code></li>
              </ul>
              <p>
                Можно попробовать в предыдущем примере изменять массив
                <code>items</code>, вызывая методы которые будут его мутировать,
                например: <code>example1.items.push({ message: 'Baz' })</code>.
              </p>
              <h3 class="my-4">Методы изменения с заменой массива</h3>
              <p>
                Методы, мутирующие массив, как следует из названия, будут
                изменять исходный массив, на котором они вызваны. Но существуют
                и другие методы, например <code>filter()</code>,
                <code>concat()</code> и <code>slice()</code>, которые не
                мутируют исходный массив, а всегда возвращают новый массив. При
                их использовании можно просто заменять старый массив на новый:
              </p>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>example1<span
                class="token punctuation">.</span>items <span class="token operator">=</span> example1<span
                class="token punctuation">.</span>items<span class="token punctuation">.</span><span
                class="token function">filter</span><span class="token punctuation">(</span><span
                class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span
                class="token punctuation">.</span>message<span class="token punctuation">.</span><span
                class="token function">match</span><span class="token punctuation">(</span><span
                class="token regex"><span class="token regex-delimiter">/</span><span
                class="token regex-source language-regex">Foo</span><span
                class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span
                class="token punctuation">)</span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                Может показаться, что в таких случаях Vue придётся выбросить
                существующий DOM и заново отрисовать весь список — к счастью,
                это не так. Во Vue есть умные эвристики для максимизации
                переиспользования элементов DOM, поэтому замена одного массива
                другим, в случае совпадения части элементов этих массивов, будет
                очень эффективной операцией.
              </p>
            </div>

            <div>
              <h2>Отображение отфильтрованных/отсортированных результатов</h2>
              <v-divider class="mb-6" />
              <p>
                Иногда может потребоваться отображать отфильтрованную или
                отсортированную версию массива, сохранив оригинальные данные. В
                таком случае можно создать вычисляемое свойство, которое будет
                возвращать отфильтрованный или отсортированный массив.
              </p>
              <p>Например:</p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span
                class="token attr-name">v-for</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>n in evenNumbers<span class="token punctuation">"</span></span> <span
                class="token attr-name">:key</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>n<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><code v-pre>{{
                  n
                }}</code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span
                class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token function">data</span><span
                class="token punctuation">(</span><span class="token punctuation">)</span> <span
                class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    numbers<span class="token operator">:</span> <span class="token punctuation">[</span> <span
                  class="token number">1</span><span class="token punctuation">,</span> <span
                  class="token number">2</span><span class="token punctuation">,</span> <span
                  class="token number">3</span><span class="token punctuation">,</span> <span
                  class="token number">4</span><span class="token punctuation">,</span> <span
                  class="token number">5</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
computed<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">evenNumbers</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span
                  class="token punctuation">.</span>numbers<span class="token punctuation">.</span><span
                  class="token function">filter</span><span class="token punctuation">(</span><span
                  class="token parameter">number</span> <span class="token operator">=&gt;</span> number <span
                  class="token operator">%</span> <span class="token number">2</span> <span
                  class="token operator">===</span> <span class="token number">0</span><span
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
                  ><br />
                </div>
              </div>
              <p>
                В ситуациях, когда вычисляемые свойства невозможно применить
                (например, внутри вложенных циклов <code>v-for</code>), можно
                использовать метод:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span
                class="token attr-name">v-for</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>numbers in sets<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span
    class="token attr-name">v-for</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>n in even(numbers)<span
    class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span
    class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>n<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><code
                  v-pre>{{
                    n
                  }}</code><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span
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
                ><code><span class="token function">data</span><span
                class="token punctuation">(</span><span class="token punctuation">)</span> <span
                class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    sets<span class="token operator">:</span> <span class="token punctuation">[</span><span
                  class="token punctuation">[</span> <span class="token number">1</span><span class="token punctuation">,</span> <span
                  class="token number">2</span><span class="token punctuation">,</span> <span
                  class="token number">3</span><span class="token punctuation">,</span> <span
                  class="token number">4</span><span class="token punctuation">,</span> <span
                  class="token number">5</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> <span
                  class="token punctuation">[</span><span class="token number">6</span><span
                  class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span
                  class="token number">8</span><span class="token punctuation">,</span> <span
                  class="token number">9</span><span class="token punctuation">,</span> <span
                  class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
methods<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">even</span><span class="token punctuation">(</span><span
                  class="token parameter">numbers</span><span class="token punctuation">)</span> <span
                  class="token punctuation">{</span>
    <span class="token keyword">return</span> numbers<span class="token punctuation">.</span><span
                  class="token function">filter</span><span class="token punctuation">(</span><span
                  class="token parameter">number</span> <span class="token operator">=&gt;</span> number <span
                  class="token operator">%</span> <span class="token number">2</span> <span
                  class="token operator">===</span> <span class="token number">0</span><span
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
                  ><br />
                </div>
              </div>
              <h3 class="my-4"><code>v-for</code> и диапазоны</h3>
              <p>
                Можно передавать целое число в <code>v-for</code> — шаблон будет
                повторяться указанное число раз.
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>range<span
                class="token punctuation">"</span></span> <span class="token attr-name">class</span><span
                class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>demo<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span
    class="token attr-name">v-for</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>n in 10<span
    class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span
    class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>n<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><code
                  v-pre>{{
                    n
                  }}</code><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
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
              <h3 class="my-4">
                <code>v-for</code> и <code>&lt;template></code>
              </h3>
              <p>
                Аналогично использованию с <code>v-if</code>, также можно
                использовать тег <code>&lt;template></code> с директивой
                <code>v-for</code> для отрисовки блоков из нескольких элементов.
                Например:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span
                class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span
    class="token attr-name">v-for</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in items<span
    class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span
    class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>item.msg<span class="token punctuation">"</span></span><span
    class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span
      class="token punctuation">&gt;</span></span><code v-pre>{{ item.msg }}</code><span class="token tag"><span
                  class="token tag"><span
                  class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span
      class="token attr-name">class</span><span class="token attr-value"><span
      class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>divider<span
      class="token punctuation">"</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span
      class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>presentation<span
      class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span
                  class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span
    class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span
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
                  ><br />
                </div>
              </div>
              <h3 class="my-4"><code>v-for</code> и <code>v-if</code></h3>
              <SuccessAlert>
                Обратите внимание, не рекомендуется использовать вместе
                <code>v-if</code> и <code>v-for</code>. Подробнее можно
                прочитать в разделе рекомендаций.
              </SuccessAlert>
              <p>
                Когда они указаны вместе на одном узле, у
                <code>v-if</code> будет больший приоритет, чем у
                <code>v-for</code>. И поэтому в условии <code>v-if</code> не
                будет доступа к переменным из области видимости
                <code>v-for</code>:
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- Будет ошибка, так как свойство "todo" не объявлено в экземпляре. --&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span
  class="token attr-name">v-for</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todo in todos<span
  class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span
  class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!todo.isComplete<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <code v-pre>{{ todo.name }}</code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span
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
                Это можно исправить переместив <code>v-for</code> на тег-обёртку
                <code>&lt;template></code>:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span
                class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>todo in todos<span class="token punctuation">"</span></span> <span
                class="token attr-name">:key</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todo.name<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span
    class="token attr-name">v-if</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!todo.isComplete<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <code v-pre>{{ todo.name }}</code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span
    class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span
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
              <h3 class="my-4"><code>v-for</code> и компоненты</h3>
              <p>
                Можно использовать <code>v-for</code> на пользовательских
                компонентах, как на обычных элементах:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-component</span> <span
                class="token attr-name">v-for</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in items<span
                class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span
                class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;/</span>my-component</span><span
                class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                Однако в компонент никакие данные автоматически передаваться не
                будут, поскольку у каждого будет своя изолированная область
                видимости. Чтобы передать итерируемые данные в компонент
                потребуется явно использовать входные параметры:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-component</span>
  <span class="token attr-name">v-for</span><span class="token attr-value"><span
                  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in items<span
                  class="token punctuation">"</span></span>
  <span class="token attr-name">:item</span><span class="token attr-value"><span
                  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span
                  class="token punctuation">"</span></span>
  <span class="token attr-name">:index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                  class="token punctuation">"</span>index<span class="token punctuation">"</span></span>
  <span class="token attr-name">:key</span><span class="token attr-value"><span
                  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span
                  class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;/</span>my-component</span><span
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
                  ><br />
                </div>
              </div>
              <p>
                Причина, почему не происходит автоматической передачи
                <code>item</code> в компонент заключается в том, что это сделает
                компонент жёстко связанным с тем, как работает
                <code>v-for</code>. Но явное указание на то, откуда поступают
                данные, позволит переиспользовать и в других ситуациях.
              </p>
              <p>
                Небольшой полноценный пример реализации простого списка задач:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>todo-list-example<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span
    class="token attr-name"><span class="token namespace">v-on:</span>submit.prevent</span><span
    class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>addNewTodo<span class="token punctuation">"</span></span><span
    class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span
      class="token attr-name">for</span><span class="token attr-value"><span
      class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>new-todo<span
      class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Добавить задачу<span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span
        class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>newTodoText<span
        class="token punctuation">"</span></span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span
        class="token punctuation">"</span>new-todo<span class="token punctuation">"</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span
        class="token punctuation attr-equals">=</span><span
        class="token punctuation">"</span>Например, покормить кота<span class="token punctuation">"</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span
      class="token punctuation">&gt;</span></span>Добавить<span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span
    class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span
    class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>todo-item</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span
        class="token punctuation attr-equals">=</span><span
        class="token punctuation">"</span>(todo, index) in todos<span class="token punctuation">"</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span
        class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todo.id<span
        class="token punctuation">"</span></span>
      <span class="token attr-name">:title</span><span class="token attr-value"><span
        class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todo.title<span
        class="token punctuation">"</span></span>
      <span class="token attr-name">@remove</span><span class="token attr-value"><span
        class="token punctuation attr-equals">=</span><span
        class="token punctuation">"</span>todos.splice(index, 1)<span class="token punctuation">"</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>todo-item</span><span
                  class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span
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
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">const</span> app <span
                class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      newTodoText<span class="token operator">:</span> <span class="token string">''</span><span
                  class="token punctuation">,</span>
      todos<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          id<span class="token operator">:</span> <span class="token number">1</span><span
                  class="token punctuation">,</span>
          title<span class="token operator">:</span> <span class="token string">'Do the dishes'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          id<span class="token operator">:</span> <span class="token number">2</span><span
                  class="token punctuation">,</span>
          title<span class="token operator">:</span> <span class="token string">'Take out the trash'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          id<span class="token operator">:</span> <span class="token number">3</span><span
                  class="token punctuation">,</span>
          title<span class="token operator">:</span> <span class="token string">'Mow the lawn'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      nextTodoId<span class="token operator">:</span> <span class="token number">4</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">addNewTodo</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span
                  class="token punctuation">.</span><span class="token function">push</span><span
                  class="token punctuation">(</span><span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token keyword">this</span><span
                  class="token punctuation">.</span>nextTodoId<span class="token operator">++</span><span
                  class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token keyword">this</span><span
                  class="token punctuation">.</span>newTodoText
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>newTodoText <span
                  class="token operator">=</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span
                  class="token string">'todo-item'</span><span class="token punctuation">,</span> <span
                  class="token punctuation">{</span>
  template<span class="token operator">:</span> <span class="token template-string"><span
                  class="token template-punctuation string">`</span><span class="token string"><span
                  class="language-html">
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span
      class="token punctuation">&gt;</span></span>
      <span class="token interpolation"><span class="token punctuation">{{</span><span
        class="token inline-js language-js"> title </span><span class="token punctuation">}}</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span
        class="token directive"><span class="token punctuation directive-shorthand">@</span><span
        class="token directive-modifier"><span class="token punctuation">c</span><span
        class="token punctuation">l</span><span class="token punctuation">i</span><span
        class="token punctuation">c</span><span class="token punctuation">k</span></span><span
        class="token directive-expression"><span class="token punctuation">=</span><span
        class="token punctuation">"</span><span class="token inline-js language-js"><span
        class="token function">$emit</span><span class="token punctuation">(</span><span
        class="token string">'remove'</span><span class="token punctuation">)</span></span><span
        class="token punctuation">"</span></span></span><span class="token punctuation">&gt;</span></span>Удалить<span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span
      class="token punctuation">&gt;</span></span>
  </span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  props<span class="token operator">:</span> <span class="token punctuation">[</span><span
                  class="token string">'title'</span><span class="token punctuation">]</span><span
                  class="token punctuation">,</span>
  emits<span class="token operator">:</span> <span class="token punctuation">[</span><span
                  class="token string">'remove'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span
                  class="token punctuation">(</span><span class="token string">'#todo-list-example'</span><span
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
                  ><br /><span class="line-number">37</span><br /><span
                    class="line-number"
                    >38</span
                  ><br /><span class="line-number">39</span><br /><span
                    class="line-number"
                    >40</span
                  ><br /><span class="line-number">41</span><br /><span
                    class="line-number"
                    >42</span
                  ><br /><span class="line-number">43</span><br /><span
                    class="line-number"
                    >44</span
                  ><br />
                </div>
              </div>
            </div>
          </div>

          <v-btn
            class="mt-6"
            color="success"
            nuxt
            to="/guide/[1.10] event_handling"
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
  name: "GuideListRendering",
  components: { SuccessAlert },
};
</script>
