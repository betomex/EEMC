<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-sheet class="pa-4">
          <h1>Передача обычных атрибутов</h1>
          <hr class="my-3" />
          <p>
            Обычный атрибут для компонента — атрибут или слушатель события,
            который передаётся в компонент, но не имеет соответствующего
            свойства указанного в <code>props</code> или <code>emits</code>.
            Частыми примерами подобного являются атрибуты <code>class</code>,
            <code>style</code> и <code>id</code>. Доступ к этим атрибутам можно
            получить через свойство <code>$attrs</code>.
          </p>

          <div class="mt-6">
            <div>
              <h2>Наследование атрибутов</h2>
              <v-divider class="mb-6" />
              <p>
                Если в компоненте один корневой элемент, то обычные атрибуты
                будут добавляться к этому элементу автоматически. Например, для
                экземпляра компонента выбора даты:
              </p>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>app<span
                class="token punctuation">.</span><span class="token function">component</span><span
                class="token punctuation">(</span><span class="token string">'date-picker'</span><span
                class="token punctuation">,</span> <span class="token punctuation">{</span>
  template<span class="token operator">:</span> <span class="token template-string"><span
                  class="token template-punctuation string">`</span><span class="token string"><span
                  class="language-html">
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
      class="token attr-name">class</span><span class="token attr-value"><span
      class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date-picker<span
      class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
        class="token attr-name">type</span><span class="token attr-value"><span
        class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>datetime-local<span
        class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
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
                  ><br /><span class="line-number">7</span><br />
                </div>
              </div>
              <p>
                Если потребуется определять статус компонента выбора даты через
                атрибут <code>data-status</code>, значение будет добавлено к
                корневому элементу (т.е. к <code>div.date-picker</code>).
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- Компонент выбора даты с обычным атрибутом --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>date-picker</span> <span
  class="token attr-name">data-status</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activated<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>date-picker</span><span
                  class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Отрисованный компонент выбора даты --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
  class="token attr-name">class</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date-picker<span
  class="token punctuation">"</span></span> <span class="token attr-name">data-status</span><span
  class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activated<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
    class="token attr-name">type</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>datetime-local<span
    class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
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
              <p>Аналогично правило применяется и для обработчиков событий:</p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>date-picker</span> <span
                class="token attr-name">@change</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submitChange<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>date-picker</span><span
                class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>app<span
                class="token punctuation">.</span><span class="token function">component</span><span
                class="token punctuation">(</span><span class="token string">'date-picker'</span><span
                class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span
                  class="token punctuation">(</span><span class="token keyword">this</span><span
                  class="token punctuation">.</span>$attrs<span class="token punctuation">)</span> <span
                  class="token comment">// { onChange: () =&gt; {}  }</span>
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
                  ><br /><span class="line-number">5</span><br />
                </div>
              </div>
              <p>
                Это удобно, когда корневым элементом компонента
                <code>date-picker</code> будет HTML-элемент, генерирующий
                событие <code>change</code>.
              </p>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>app<span
                class="token punctuation">.</span><span class="token function">component</span><span
                class="token punctuation">(</span><span class="token string">'date-picker'</span><span
                class="token punctuation">,</span> <span class="token punctuation">{</span>
  template<span class="token operator">:</span> <span class="token template-string"><span
                  class="token template-punctuation string">`</span><span class="token string"><span
                  class="language-html">
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span><span
      class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span
        class="token attr-name">value</span><span class="token attr-value"><span
        class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span
        class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Вчера<span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span
        class="token attr-name">value</span><span class="token attr-value"><span
        class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span
        class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Сегодня<span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span
        class="token attr-name">value</span><span class="token attr-value"><span
        class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span
        class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Завтра<span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span
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
                  ><br /><span class="line-number">9</span><br />
                </div>
              </div>
              <p>
                Обработчик события <code>change</code> будет передан из
                родительского компонента в дочерний и станет вызываться при
                нативном событии <code>change</code> на корневом элементе
                <code>&lt;select></code>. При таком подходе не потребуется явно
                генерировать событие внутри <code>date-picker</code>:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date-picker<span
                class="token punctuation">"</span></span> <span class="token attr-name">class</span><span
                class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>demo<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>date-picker</span> <span
    class="token attr-name">@change</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showChange<span
    class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>date-picker</span><span
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
                class="token punctuation">(</span><span class="token punctuation">{</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">showChange</span><span class="token punctuation">(</span><span class="token parameter">event</span><span
                  class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span
                  class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span
                  class="token punctuation">.</span>value<span class="token punctuation">)</span> <span
                  class="token comment">// выведет значение выбранного варианта</span>
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
                  ><br /><span class="line-number">7</span><br />
                </div>
              </div>
            </div>

            <div>
              <h2>Отключение наследования атрибутов</h2>
              <v-divider class="mb-6" />
              <p>
                При необходимости отключить автоматическое наследование обычных
                атрибутов компонентом это можно сделать с помощью опции
                <code>inheritAttrs: false</code>.
              </p>
              <p>
                Популярная причина, когда требуется отключать наследование
                атрибутов — необходимость добавления атрибутов на другой элемент
                вместо корневого.
              </p>
              <p>
                Установив опцию <code>inheritAttrs</code> в <code>false</code>,
                добавлять атрибуты к выбранному элементу можно с помощью
                свойства <code>$attrs</code>, в нём будут все атрибуты, не
                указанные в свойствах <code>props</code> и
                <code>emits</code> (например, <code>class</code>,
                <code>style</code>, обработчики <code>v-on</code>, и т.д.).
              </p>
              <p>
                Используя компонент для выбора дат из предыдущей главы, изменим
                добавление обычных атрибутов на элемент <code>input</code>,
                вместо корневого элемента <code>div</code>. Для этого
                воспользуемся сокращённой записью <code>v-bind</code>:
              </p>
              <div class="language-js line-numbers-mode">
                <div class="highlight-lines">
                  <br />
                  <div class="highlighted">&nbsp;</div>
                  <br /><br />
                  <div class="highlighted">&nbsp;</div>
                  <br /><br /><br /><br />
                </div>
                <pre
                  class="language-js"
                ><code>app<span class="token punctuation">.</span><span class="token function">component</span><span
                  class="token punctuation">(</span><span class="token string">'date-picker'</span><span
                  class="token punctuation">,</span> <span class="token punctuation">{</span>
  inheritAttrs<span class="token operator">:</span> <span class="token boolean">false</span><span
                    class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span
                    class="token template-punctuation string">`</span><span class="token string"><span
                    class="language-html">
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
      class="token attr-name">class</span><span class="token attr-value"><span
      class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date-picker<span
      class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
        class="token attr-name">type</span><span class="token attr-value"><span
        class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>datetime-local<span
        class="token punctuation">"</span></span> <span class="token directive"><span
        class="token identifier directive-name">v-bind</span><span class="token directive-expression"><span
        class="token punctuation">=</span><span class="token punctuation">"</span><span
        class="token inline-js language-js">$attrs</span><span class="token punctuation">"</span></span></span> <span
        class="token punctuation">/&gt;</span></span>
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
                В таком случае обычный атрибут <code>data-status</code> будет
                добавляться на элемент <code>input</code>!
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- Компонент выбора даты с обычным атрибутом --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>date-picker</span> <span
  class="token attr-name">data-status</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activated<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>date-picker</span><span
                  class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Отрисованный компонент выбора даты --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
  class="token attr-name">class</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date-picker<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span
    class="token attr-name">type</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>datetime-local<span
    class="token punctuation">"</span></span> <span class="token attr-name">data-status</span><span
    class="token attr-value"><span class="token punctuation attr-equals">=</span><span
    class="token punctuation">"</span>activated<span class="token punctuation">"</span></span> <span
    class="token punctuation">/&gt;</span></span>
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
            </div>

            <div>
              <h2>Наследование атрибутов при нескольких корневых элементах</h2>
              <v-divider class="mb-6" />
              <p>
                В отличие от компонентов с одним корневым элементом, для
                компонентов с несколькими корневыми элементами не будет
                автоматического наследования атрибутов. Если
                <code>$attrs</code> не привязать к элементу явно, то это
                приведёт к предупреждению во время выполнения.
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;</span>custom-layout</span> <span class="token attr-name">id</span><span
                class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>custom-layout<span class="token punctuation">"</span></span> <span
                class="token attr-name">@click</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeValue<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;/</span>custom-layout</span><span
                class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token comment">// НЕПРАВИЛЬНО, будет выведено предупреждение</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span
                  class="token string">'custom-layout'</span><span class="token punctuation">,</span> <span
                  class="token punctuation">{</span>
  template<span class="token operator">:</span> <span class="token template-string"><span
                  class="token template-punctuation string">`</span><span class="token string">
    &lt;header&gt;...&lt;/header&gt;
    &lt;main&gt;...&lt;/main&gt;
    &lt;footer&gt;...&lt;/footer&gt;
  </span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// ПРАВИЛЬНО, $attrs передаются на элемент &lt;main&gt;</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span
                  class="token string">'custom-layout'</span><span class="token punctuation">,</span> <span
                  class="token punctuation">{</span>
  template<span class="token operator">:</span> <span class="token template-string"><span
                  class="token template-punctuation string">`</span><span class="token string"><span
                  class="language-html">
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span
      class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span
      class="token directive"><span class="token identifier directive-name">v-bind</span><span
      class="token directive-expression"><span class="token punctuation">=</span><span
      class="token punctuation">"</span><span class="token inline-js language-js">$attrs</span><span
      class="token punctuation">"</span></span></span><span class="token punctuation">&gt;</span></span>...<span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span
                  class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span
      class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
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
                  ><br /><span class="line-number">17</span><br />
                </div>
              </div>
            </div>
          </div>

          <v-btn class="mt-6" color="success" nuxt to="/guide/[2.4] summary">
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
  name: "GuideAttributes",
  components: { SuccessAlert, InfoAlert, WarningAlert },
};
</script>
