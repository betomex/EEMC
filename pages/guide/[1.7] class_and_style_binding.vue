<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-sheet class="pa-4">
          <h1>Работа с классами и стилями</h1>
          <hr class="my-3" />
          <p>
            Наиболее часто возникает необходимость динамически управлять
            CSS-классами элемента и его инлайн-стилями. Поскольку оба случая
            связаны с атрибутами, то можно использовать <code>v-bind</code> для
            работы с ними: нужно лишь вычислить итоговую строку выражением.
            Однако заниматься конкатенацией строк жутко неудобно и может
            привести к ошибкам. По этой причине Vue предоставляет директиве
            <code>v-bind</code> специальные улучшения при работе с
            <code>class</code> и <code>style</code>. Кроме строк, выражения
            могут принимать массивы или объекты.
          </p>

          <div class="mt-6">
            <div>
              <h2>Связывание CSS-классов</h2>
              <v-divider class="mb-6" />
              <h3 class="my-4">Объектный синтаксис</h3>
              <p>
                Для динамической установки или удаления CSS-классов в директиву
                <code>:class</code> (сокращение для <code>v-bind:class</code>)
                можно передавать объект:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">:class</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ active: isActive }<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
                class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                Синтаксис выше означает, что наличие класса
                <code>active</code> на элементе будет определяться истинностью
                значения свойства <code>isActive</code>.
              </p>
              <p>
                Подобным образом можно управлять несколькими классами, добавляя
                в объект и другие поля. Кроме того, <code>:class</code> можно
                использовать совместно с обычным атрибутом <code>class</code>:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
  <span class="token attr-name">class</span><span class="token attr-value"><span
                  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>static<span
                  class="token punctuation">"</span></span>
  <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                  class="token punctuation">"</span>{ active: isActive, <span class="token punctuation">'</span>text-danger<span
                  class="token punctuation">'</span>: hasError }<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
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
              <p>Если данные будут такими:</p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token function">data</span><span
                class="token punctuation">(</span><span class="token punctuation">)</span> <span
                class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    isActive<span class="token operator">:</span> <span class="token boolean">true</span><span
                  class="token punctuation">,</span>
    hasError<span class="token operator">:</span> <span class="token boolean">false</span>
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
              <p>То в результате получится:</p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">class</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>static active<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
                class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                Классы будут обновлены при изменениях <code>isActive</code> или
                <code>hasError</code>. Например, <code>hasError</code> изменится
                в <code>true</code> и значение атрибута
                <code>class</code> станет
                <code>"static active text-danger"</code>.
              </p>
              <p>Объект необязательно указывать инлайн прямо в шаблоне:</p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">:class</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>classObject<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
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
    classObject<span class="token operator">:</span> <span class="token punctuation">{</span>
      active<span class="token operator">:</span> <span class="token boolean">true</span><span
                  class="token punctuation">,</span>
      <span class="token string">'text-danger'</span><span class="token operator">:</span> <span class="token boolean">false</span>
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
                  ><br />
                </div>
              </div>
              <p>
                Результат будет таким же. Также можно использовать вычисляемые
                свойства, которые будут возвращать итоговый объект — очень
                распространённый и мощный приём:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">:class</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>classObject<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
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
    isActive<span class="token operator">:</span> <span class="token boolean">true</span><span
                  class="token punctuation">,</span>
    error<span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
computed<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">classObject</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      active<span class="token operator">:</span> <span class="token keyword">this</span><span
                  class="token punctuation">.</span>isActive <span class="token operator">&amp;&amp;</span> <span
                  class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>error<span
                  class="token punctuation">,</span>
      <span class="token string">'text-danger'</span><span class="token operator">:</span> <span class="token keyword">this</span><span
                  class="token punctuation">.</span>error <span class="token operator">&amp;&amp;</span> <span
                  class="token keyword">this</span><span class="token punctuation">.</span>error<span
                  class="token punctuation">.</span>type <span class="token operator">===</span> <span
                  class="token string">'fatal'</span>
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
                  ><br /><span class="line-number">11</span><br /><span
                    class="line-number"
                    >12</span
                  ><br /><span class="line-number">13</span><br /><span
                    class="line-number"
                    >14</span
                  ><br />
                </div>
              </div>
              <h3 class="my-4">Синтаксис с массивом</h3>
              <p>
                Можно передать массив в <code>:class</code>, чтобы применить
                список классов:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">:class</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[activeClass, errorClass]<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
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
    activeClass<span class="token operator">:</span> <span class="token string">'active'</span><span
                  class="token punctuation">,</span>
    errorClass<span class="token operator">:</span> <span class="token string">'text-danger'</span>
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
              <p>В результате получим:</p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">class</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active text-danger<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
                class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                Переключать классы в массиве, в зависимости от некоторого
                условия, можно с помощью условного оператора в форме тернарного
                выражения:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">:class</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[isActive ? activeClass : <span
                class="token punctuation">'</span><span class="token punctuation">'</span>, errorClass]<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
                class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                К элементу будет всегда добавляться <code>errorClass</code>, но
                <code>activeClass</code> — только в случае истинности
                <code>isActive</code>.
              </p>
              <p>
                Однако, такая запись начинает выглядеть слегка громоздко,
                особенно если есть несколько классов, задаваемых по условию.
                Поэтому возможно использовать и смешанный синтаксис:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">:class</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[{ active: isActive }, errorClass]<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
                class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <h3 class="my-4">Использование с компонентами</h3>
              <p>
                При использовании атрибута <code>class</code> на
                пользовательском компоненте с одним корневым элементом, классы
                будут добавлены к этому корневому элементу. Существующие классы
                на этом элементе останутся и не будут перезаписаны.
              </p>
              <p>Возьмём, к примеру, такой компонент:</p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">const</span> app <span
                class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span><span
                class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span
                  class="token string">'my-component'</span><span class="token punctuation">,</span> <span
                  class="token punctuation">{</span>
  template<span class="token operator">:</span> <span class="token string">'<span class="language-html"><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span
                  class="token attr-name">class</span><span class="token attr-value"><span
                  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo bar<span
                  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Привет<span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span
                  class="token punctuation">&gt;</span></span></span>'</span>
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
              <p>Если добавить несколько классов на компонент:</p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-component</span> <span
    class="token attr-name">class</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>baz boo<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>my-component</span><span
                  class="token punctuation">&gt;</span></span>
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
              <p>То в результате отрисовки получим:</p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span
                class="token attr-name">class</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>foo bar baz boo<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span>Привет<span class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>То же самое справедливо для привязок классов:</p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-component</span> <span
                class="token attr-name">:class</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ active: isActive }<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;/</span>my-component</span><span
                class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                Если <code>isActive</code> истинно, то результирующий HTML
                будет:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span
                class="token attr-name">class</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>foo bar active<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span>Привет<span class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                Если у компонента несколько корневых элементов, то потребуется
                определить какой из них будет получать эти классы. Это
                реализуется добавлением свойства <code>$attrs</code> на элемент:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-component</span> <span
    class="token attr-name">class</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>baz<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>my-component</span><span
                  class="token punctuation">&gt;</span></span>
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
                <pre
                  class="language-js"
                ><code><span class="token keyword">const</span> app <span
                class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span
                class="token punctuation">(</span><span class="token punctuation">{</span><span
                class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span
                  class="token string">'my-component'</span><span class="token punctuation">,</span> <span
                  class="token punctuation">{</span>
  template<span class="token operator">:</span> <span class="token template-string"><span
                  class="token template-punctuation string">`</span><span class="token string"><span
                  class="language-html">
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span
      class="token directive"><span class="token punctuation directive-shorthand">:</span><span
      class="token directive-modifier"><span class="token punctuation">c</span><span
      class="token punctuation">l</span><span class="token punctuation">a</span><span class="token punctuation">s</span><span
      class="token punctuation">s</span></span><span class="token directive-expression"><span class="token punctuation">=</span><span
      class="token punctuation">"</span><span class="token inline-js language-js">$attrs<span class="token punctuation">.</span>class</span><span
      class="token punctuation">"</span></span></span><span class="token punctuation">&gt;</span></span>Привет!<span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span
                  class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span
      class="token punctuation">&gt;</span></span>Это дочерний компонент<span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
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
                Подробнее о наследовании атрибутов компонентов можно прочитать в
                разделе про передачу обычных атрибутов.
              </p>
            </div>

            <div>
              <h2>Связывание inline-стилей</h2>
              <v-divider class="mb-6" />
              <h3 class="my-4">Объектный синтаксис</h3>
              <p>
                Объектный синтаксис для <code>:style</code> выглядит почти как
                для CSS, за исключением того, что это объект JavaScript. Поэтому
                для указания имён свойств CSS можно использовать как camelCase,
                так и kebab-case (не забывайте про кавычки при использовании
                kebab-case):
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">:style</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ color: activeColor, fontSize: fontSize + <span
                class="token punctuation">'</span>px<span class="token punctuation">'</span> }<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
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
    activeColor<span class="token operator">:</span> <span class="token string">'red'</span><span
                  class="token punctuation">,</span>
    fontSize<span class="token operator">:</span> <span class="token number">30</span>
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
                Рекомендуется привязывать стили к объекту данных, чтобы сделать
                шаблон чище:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">:style</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>styleObject<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
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
    styleObject<span class="token operator">:</span> <span class="token punctuation">{</span>
      color<span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span>
      fontSize<span class="token operator">:</span> <span class="token string">'13px'</span>
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
                  ><br />
                </div>
              </div>
              <p>
                Аналогично можно использовать и вычисляемые свойства,
                возвращающие объект стилей.
              </p>
              <h3 class="my-4">Синтаксис с массивом</h3>
              <p>
                Синтаксис с массивом для <code>:style</code> позволяет применить
                несколько объектов стилей к одному и тому же элементу:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">:style</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[baseStyles, overridingStyles]<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
                class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <h3 class="my-4">Автоматические префиксы</h3>
              <p>
                Если использовать CSS-свойство, которое требует вендорного
                префикса в <code>:style</code>, Vue автоматически добавит
                соответствующий префикс. Во время выполнения будет проверять
                какие стилевые свойства поддерживаются в текущем браузере. Если
                определённое свойство не поддерживается браузером, то будут
                проверены различные варианты префиксов, чтобы попытаться найти
                тот, который поддерживается.
              </p>
              <h3 class="my-4">Множественные значения</h3>
              <p>
                Можно передать массив из нескольких (префиксных) значений в
                свойство style, например:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">:style</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ display: [<span
                class="token punctuation">'</span>-webkit-box<span class="token punctuation">'</span>, <span
                class="token punctuation">'</span>-ms-flexbox<span class="token punctuation">'</span>, <span
                class="token punctuation">'</span>flex<span class="token punctuation">'</span>] }<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
                class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                В этом случае будет выбрано только последнее значение в массиве,
                которое поддерживает браузер. Например,
                <code>display: flex</code> для браузеров с поддержкой flexbox
                без префиксов.
              </p>
            </div>
          </div>

          <v-btn
            class="mt-6"
            color="success"
            nuxt
            to="/guide/[1.8] conditional_rendering"
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
  name: "GuideClassStyleBinding",
  components: { SuccessAlert },
};
</script>
