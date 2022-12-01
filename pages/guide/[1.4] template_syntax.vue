<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-sheet class="pa-4">
          <h1>Синтаксис шаблонов</h1>
          <hr class="my-3" />
          <p>
            Vue.js использует синтаксис шаблонов, основанный на HTML. Он
            позволяет декларативно связывать отрисованный DOM с данными
            экземпляра компонента. Все шаблоны Vue.js являются валидным
            HTML-кодом, который могут распарсить все HTML-парсеры и браузеры,
            соответствующие спецификациям.
          </p>
          <p>
            Под капотом Vue компилирует шаблоны в <code>render</code>-функции
            виртуального DOM. В сочетании с системой реактивности Vue может
            определять минимальное число компонентов для перерисовки и при
            изменениях состояния приложения выполняет минимальное количество
            манипуляций с DOM.
          </p>
          <p>
            Ну а если уже знакомы с концепцией виртуального DOM и предпочитаете
            использовать всю мощь JavaScript — вместо шаблонов можно писать
            render-функции напрямую, в том числе и с использованием JSX.
          </p>

          <div class="mt-6">
            <div>
              <h2>Интерполяции</h2>
              <v-divider class="mb-6" />
              <h3 class="my-4">Текст</h3>
              <p>
                Наиболее простой способ связывания данных — текстовая
                интерполяция с использованием «Mustache»-синтаксиса из двойных
                фигурных скобок:
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Сообщение: <code v-pre>{{ msg }}</code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                Такое выражение будет заменено значением свойства
                <code>msg</code> соответствующего экземпляра компонента. Также
                оно будет обновляться при любом изменении значения свойства
                <code>msg</code>.
              </p>
              <p>
                Интерполяцию можно выполнить и только один раз, с помощью
                директивы v-once — в таком случае при изменениях данных значение
                не обновится, но имейте в виду, что это повлияет и на любые
                другие привязки в рамках данного элемента:
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-once</span><span class="token punctuation">&gt;</span></span>Это сообщение никогда не изменится: <code v-pre>{{ msg }}</code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <h3 class="my-4">Сырой HTML</h3>
              <p>
                Значение выражения в двойных фигурных скобках обрабатывается как
                обычный текст, а не как HTML. Для вывода в виде HTML необходимо
                использовать директиву <code>v-html</code>:
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Двойные фигурные скобки: <code v-pre>{{ rawHtml }}</code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Директива v-html: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rawHtml<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                    class="line-number"
                    >2</span
                  ><br />
                </div>
              </div>
              <p>
                Содержимое тега <code>span</code> будет заменено значением
                свойства <code>rawHtml</code>, обработанного как обычный HTML —
                все привязки данных в нём будут проигнорированы. Запомните, что
                не получится скомпоновать итоговый шаблон из частей с помощью
                <code>v-html</code>, так как движок шаблонов Vue не основан на
                строках. Вместо этого следует использовать компоненты, как
                фундаментальную единицу для сочетания и переиспользования
                элементов UI.
              </p>
              <SuccessAlert>
                Динамическая отрисовка произвольного HTML-кода на сайте крайне
                опасна, так как может легко привести к XSS-уязвимостям.
                Используйте интерполяцию HTML только для доверенного
                содержимого, и никогда не передавайте туда содержимое, которое
                может указывать пользователь.
              </SuccessAlert>
              <h3 class="my-4">Атрибуты</h3>
              <p>
                Синтаксис двойных фигурных скобок нельзя использовать внутри
                HTML-атрибутов. Вместо него следует использовать директиву
                <code>v-bind</code>:
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamicId<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                Атрибут не добавится на элемент, если значением будет
                <code>null</code> или <code>undefined</code>.
              </p>
              <p>
                В случае с булевыми атрибутами, где само их наличие уже
                подразумевает значение <code>true</code>,
                <code>v-bind</code> будет работать немного иначе. Например:
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isButtonDisabled<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Кнопка<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                Атрибут <code>disabled</code> будет добавляться когда значение
                <code>isButtonDisabled</code> истинно. Он также будет
                добавляться если значением будет пустая строка, для сохранения
                консистентности с <code>&lt;button disabled=""></code>. При
                использовании других ложных значений атрибут будет опущен.
              </p>
              <h3 class="my-4">Использование выражений JavaScript</h3>
              <p>
                До сих пор данные со свойствами в шаблонах связывали только по
                простым ключам. Но на самом деле Vue поддерживает всю мощь
                выражений JavaScript внутри привязки к данным:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code v-pre>{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>list-<span class="token punctuation">'</span> + id<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
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
                Выражения будут выполняться как код JavaScript в области
                видимости текущего активного экземпляра. Единственное
                ограничение в том, что привязка может содержать лишь одно
                выражение, поэтому приведённый ниже код НЕ СРАБОТАЕТ:
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- НЕПРАВИЛЬНО --&gt;</span>
<span class="token comment">&lt;!-- это определение переменной, а не выражение: --&gt;</span>
<code v-pre>{{ var a = 1 }}</code>

<span class="token comment">&lt;!-- НЕПРАВИЛЬНО --&gt;</span>
<span class="token comment">&lt;!-- операторы условий не будут работать, но можно --&gt;</span>
<span class="token comment">&lt;!-- использовать условные операторы в тернарной форме: --&gt;</span>
<code v-pre>{{ if (ok) { return message } }}</code>
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
            </div>

            <div class="mt-6">
              <div>
                <h2>Директивы</h2>
                <v-divider class="mb-6" />
                <p>
                  Директивы — специальные атрибуты с префиксом <code>v-</code>.
                  В значении директивы ожидается одно выражение JavaScript (за
                  исключением <code>v-for</code> и <code>v-on</code>, о которых
                  поговорим далее). Задачей директивы является реактивное
                  применение изменений к DOM, когда изменится значение
                  выражения. Вернёмся к примеру из введения:
                </p>
                <div class="language-html line-numbers-mode">
                  <pre
                    class="language-html"
                  ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>seen<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Сейчас меня видно<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                  <div class="line-numbers-wrapper">
                    <span class="line-number">1</span><br />
                  </div>
                </div>
                <p>
                  В этом случае директива <code>v-if</code> будет удалять или
                  вставлять элемент <code>&lt;p></code> в зависимости от
                  истинности значения выражения <code>seen</code>.
                </p>
                <h3 class="my-4">Аргументы</h3>
                <p>
                  Некоторые директивы могут принимать «аргумент», отделяемый
                  двоеточием от названия директивы. Например, директиву
                  <code>v-bind</code>
                  можно использовать для реактивного обновления атрибутов HTML:
                </p>
                <div class="language-html line-numbers-mode">
                  <pre
                    class="language-html"
                  ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                  <div class="line-numbers-wrapper">
                    <span class="line-number">1</span><br />
                  </div>
                </div>
                <p>
                  В этом случае <code>href</code> будет аргументом, указывающим
                  директиве <code>v-bind</code> связать атрибут
                  <code>href</code> элемента со значением выражения
                  <code>url</code>.
                </p>
                <p>
                  Другим примером может быть директива <code>v-on</code>,
                  которая отслеживает события DOM:
                </p>
                <div class="language-html line-numbers-mode">
                  <pre
                    class="language-html"
                  ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                  <div class="line-numbers-wrapper">
                    <span class="line-number">1</span><br />
                  </div>
                </div>
                <p>
                  В таком случае аргумент будет определять тип прослушиваемого
                  события. Подробнее об обработке событий поговорим далее.
                </p>
                <h3 class="my-4">Динамические аргументы</h3>
                <p>
                  Можно использовать выражение JavaScript в аргументе директивы,
                  для этого потребуется обернуть его в квадратные скобки:
                </p>
                <div class="language-html line-numbers-mode">
                  <pre
                    class="language-html"
                  ><code><span class="token comment">&lt;!--
Обратите внимание, есть ограничения для выражений аргументов, подробнее
об этом ниже, в разделе «Ограничения значений динамического аргумента».
--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>[attributeName]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
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
                  Здесь <code>attributeName</code> будет рассматриваться как
                  выражение JavaScript, а его вычисленное значение
                  использоваться в качестве финального значения для аргумента.
                  Например, если в экземпляре компонента есть свойство данных
                  <code>attributeName</code> со значением <code>"href"</code>,
                  то это будет эквивалентно привязке <code>v-bind:href</code>.
                </p>
                <p>
                  Аналогичным образом можно использовать динамические аргументы
                  для создания обработчика событий, в котором имя события будет
                  определяться динамически:
                </p>
                <div class="language-html line-numbers-mode">
                  <pre
                    class="language-html"
                  ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-on:</span>[eventName]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                  <div class="line-numbers-wrapper">
                    <span class="line-number">1</span><br />
                  </div>
                </div>
                <p>
                  В этом примере, когда свойство в данных
                  <code>eventName</code> будет со значением
                  <code>"focus"</code> — итоговый обработчик будет эквивалентен
                  <code>v-on:focus</code>.
                </p>
                <h3 class="my-4">Модификаторы</h3>
                <p>
                  Модификаторы — специальные постфиксы, отделяемые точкой,
                  которые обозначают, что директива должна быть привязана
                  каким-то особенным образом. Например, модификатор
                  <code>.prevent</code> даёт указание директиве
                  <code>v-on</code> вызвать <code>event.preventDefault()</code>
                  при обработке произошедшего события:
                </p>
                <div class="language-html line-numbers-mode">
                  <pre
                    class="language-html"
                  ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name"><span class="token namespace">v-on:</span>submit.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmit<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                  <div class="line-numbers-wrapper">
                    <span class="line-number">1</span><br />
                  </div>
                </div>
                <p>
                  Другие примеры применения модификаторов увидим далее, когда
                  будем изучать подробнее возможности <code>v-on</code> и
                  <code>v-model</code>.
                </p>
              </div>
            </div>

            <div class="mt-6">
              <div>
                <h2>Сокращённая запись</h2>
                <v-divider class="mb-6" />
                <p>
                  Префикс <code>v-</code> нужен для визуального обозначения в
                  шаблонах Vue-специфичных атрибутов. Это особенно удобно, когда
                  Vue используется для добавления динамического поведения в
                  существующей разметке, но для часто используемых директив
                  может быть многословным. В то же время, потребность в
                  <code>v-</code> ещё меньше при создании одностраничных
                  приложений (SPA), где Vue управляет каждым шаблоном. Поэтому
                  есть сокращённая запись для двух наиболее часто используемых
                  директив <code>v-bind</code> и <code>v-on</code>:
                </p>
                <h3 class="my-4">Сокращение <code>v-bind</code></h3>
                <div class="language-html line-numbers-mode">
                  <pre
                    class="language-html"
                  ><code><span class="token comment">&lt;!-- полный синтаксис --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- сокращённая запись --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- сокращённая запись с динамическим именем аргумента --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:[key]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
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
                <h3 class="my-4">Сокращение <code>v-on</code></h3>
                <div class="language-html line-numbers-mode">
                  <pre
                    class="language-html"
                  ><code><span class="token comment">&lt;!-- полный синтаксис --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- сокращённая запись --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- сокращённая запись с динамическим именем события --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">@[event]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
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
                  Подобный вид записи несколько отличается от обычного
                  HTML-кода, но в именах атрибутов допускаются символы
                  <code>:</code> и <code>@</code>, а браузеры, поддерживающие
                  Vue, могут их корректно обработать. Кроме того, в итоговой
                  разметке их уже не будет. Сокращённый синтаксис полностью
                  опционален, но его лаконичность и удобство очевидны.
                </p>
                <h3 class="my-4">Ограничения</h3>
                <h4 class="my-4">
                  Ограничения значений динамического аргумента
                </h4>
                <p>
                  Ожидается, что динамический аргумент после вычисления будет
                  строкой, за исключением <code>null</code>. Специальное
                  значение <code>null</code> можно использовать для явного
                  удаления привязки. Использование любых других нестроковых
                  значений будет выбрасывать предупреждения.
                </p>
                <h4 class="my-4">Ограничения динамического выражения</h4>
                <p>
                  Для выражения динамического аргумента есть синтаксические
                  ограничения, потому что некоторые символы, такие как пробелы и
                  кавычки, не допускаются в именах атрибутов HTML. Например:
                </p>
                <div class="language-html line-numbers-mode">
                  <pre
                    class="language-html"
                  ><code><span class="token comment">&lt;!-- НЕПРАВИЛЬНО, это выбросит предупреждение компилятора. --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>['foo'</span> <span class="token attr-name">+</span> <span class="token attr-name">bar]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                  <div class="line-numbers-wrapper">
                    <span class="line-number">1</span><br /><span
                      class="line-number"
                      >2</span
                    ><br />
                  </div>
                </div>
                <p>
                  Рекомендуем выносить любые составные выражения в вычисляемые
                  свойства, одну из важных фундаментальных частей Vue, с которой
                  уже совсем скоро познакомимся.
                </p>
                <p>
                  При использовании шаблонов в DOM (шаблонов, написанных
                  непосредственно в HTML-файле), также следует избегать
                  прописных символов в именах ключей, потому что браузеры будут
                  принудительно приводить имена атрибутов к нижнему регистру:
                </p>
                <div class="language-html line-numbers-mode">
                  <pre
                    class="language-html"
                  ><code><span class="token comment">&lt;!--
В шаблонах DOM это преобразуется в v-bind:[someattr].
Если в экземпляре не окажется свойства "someattr", то этот код НЕ СРАБОТАЕТ.
--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>[someAttr]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
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
                <h4 class="my-4">JavaScript выражения</h4>
                <p>
                  Выражения в шаблонах ограничены песочницей и имеют доступ
                  только к ограниченному списку глобальных свойств, таких как
                  <code>Math</code> и <code>Date</code>. Не следует пытаться
                  получить доступ к пользовательским глобальным свойствам в
                  выражениях шаблонов.
                </p>
              </div>
            </div>
          </div>

          <v-btn
            class="mt-6"
            color="success"
            nuxt
            to="/guide/[1.5] data_and_methods"
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
  name: "GuideTemplateSyntax",
  components: { SuccessAlert },
};
</script>
