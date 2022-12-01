<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-sheet class="pa-4">
          <h1>Входные параметры</h1>
          <hr class="my-3" />

          <div class="mt-6">
            <div>
              <h2>Указание типа входных параметров</h2>
              <v-divider class="mb-6" />
              <p>
                До сих пор входные параметры видели только как перечисленные в
                виде массива строк:
              </p>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>props<span
                class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'title'</span><span
                class="token punctuation">,</span> <span class="token string">'likes'</span><span
                class="token punctuation">,</span> <span class="token string">'isPublished'</span><span
                class="token punctuation">,</span> <span class="token string">'commentIds'</span><span
                class="token punctuation">,</span> <span class="token string">'author'</span><span
                class="token punctuation">]</span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                Однако лучше, когда каждый входной параметр будет определённого
                типа. В этих случаях можно перечислить входные параметры
                объектом, где свойство и значение будут содержать информацию об
                имени входного параметра и его типе, соответственно:
              </p>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>props<span
                class="token operator">:</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> String<span class="token punctuation">,</span>
  likes<span class="token operator">:</span> Number<span class="token punctuation">,</span>
  isPublished<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  commentIds<span class="token operator">:</span> Array<span class="token punctuation">,</span>
  author<span class="token operator">:</span> Object<span class="token punctuation">,</span>
  callback<span class="token operator">:</span> Function<span class="token punctuation">,</span>
  contactsPromise<span class="token operator">:</span> Promise <span class="token comment">// или любой другой конструктор</span>
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
                Это не только документирует компонент, но также предупреждает
                пользователей в консоли JavaScript браузера, если они передают
                неправильный тип. Гораздо больше о проверках типов и других
                валидациях входных параметров узнаете дальше на этой странице.
              </p>
            </div>

            <div>
              <h2>Передача статических и динамических входных параметров</h2>
              <v-divider class="mb-6" />
              <p>
                До сих пор встречались с тем, что во входные параметры
                передавались статические значения, например:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;</span>blog-post</span> <span class="token attr-name">title</span><span
                class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>Как изучить Vue<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;/</span>blog-post</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                Также встречались входные параметры, связывающие динамическое
                значение с помощью <code>v-bind</code> или его сокращения
                <code>:</code>, например:
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- Динамически присваиваем значение переменной --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span> <span
  class="token attr-name">:title</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post.title<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blog-post</span><span
                  class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Динамически присваиваем значение комплексного выражения --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span> <span
  class="token attr-name">:title</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post.title + <span
  class="token punctuation">'</span> — автор <span class="token punctuation">'</span> + post.author.name<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blog-post</span><span
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
                В этих двух примерах передаются строковые значения, но могут
                передаваться значения любого типа во входной параметр.
              </p>
              <h3 class="my-4">Передача чисел</h3>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- Несмотря на то, что `42` статическое значение, нам нужен v-bind, --&gt;</span>
<span class="token comment">&lt;!-- чтобы сообщить Vue, что это выражение JavaScript, а не строка.   --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span> <span
  class="token attr-name">:likes</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>42<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blog-post</span><span
                  class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Динамическое присвоение значения переменной. --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span> <span
  class="token attr-name">:likes</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post.likes<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blog-post</span><span
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
              <h3 class="my-4">Передача булевых значений</h3>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- Указание входного параметра без значения будет означать `true`. --&gt;</span>
<span class="token comment">&lt;!-- Если во входных параметрах не указать тип is-published как Boolean, то вместо значения "true" будет пустая строка. --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span> <span
  class="token attr-name">is-published</span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blog-post</span><span
                  class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Несмотря на то, что `false` статическое значение, нам нужен v-bind --&gt;</span>
<span class="token comment">&lt;!-- чтобы сообщить Vue, что это выражение JavaScript, а не строка.     --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span> <span
  class="token attr-name">:is-published</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blog-post</span><span
                  class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Динамическое присвоение значения переменной. --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span> <span
  class="token attr-name">:is-published</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post.currentUserFavorited<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blog-post</span><span
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
              <h3 class="my-4">Передача массивов</h3>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- Несмотря на то, что указан статический массив, нам нужен v-bind, --&gt;</span>
<span class="token comment">&lt;!-- чтобы сообщить Vue, что это выражение JavaScript, а не строка.   --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span> <span
  class="token attr-name">:comment-ids</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span
  class="token punctuation">"</span>[234, 266, 273]<span class="token punctuation">"</span></span><span
  class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>blog-post</span><span
                  class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Динамическое присвоение значения переменной. --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span> <span
  class="token attr-name">:comment-ids</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span
  class="token punctuation">"</span>post.commentIds<span class="token punctuation">"</span></span><span
  class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>blog-post</span><span
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
              <h3 class="my-4">Передача объектов</h3>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token comment">&lt;!-- Несмотря на то, что указан статический объект, нам нужен v-bind, --&gt;</span>
<span class="token comment">&lt;!-- чтобы сообщить Vue, что это выражение JavaScript, а не строка.   --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span>
  <span class="token attr-name">:author</span><span class="token attr-value"><span
    class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ name: <span
    class="token punctuation">'</span>Veronica<span class="token punctuation">'</span>, company: <span
    class="token punctuation">'</span>Veridian Dynamics<span class="token punctuation">'</span> }<span
    class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>blog-post</span><span
                  class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Динамическое присвоение значения переменной. --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span> <span
  class="token attr-name">:author</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post.author<span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blog-post</span><span
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
              <h3 class="my-4">Передача свойств объекта</h3>
              <p>
                Если хотите передать все свойства объекта в качестве входных
                параметров, то можно использовать <code>v-bind</code> без
                аргументов (<code>v-bind</code> вместо
                <code>v-bind:prop-name</code>). Например, для объекта
                <code>post</code>:
              </p>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>post<span
                class="token operator">:</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  title<span class="token operator">:</span> <span class="token string">'Как изучить Vue'</span>
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
              <p>Следующий шаблон:</p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;</span>blog-post</span> <span class="token attr-name">v-bind</span><span
                class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>post<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;/</span>blog-post</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>Будет аналогичен такой записи:</p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;</span>blog-post</span> <span class="token attr-name"><span
                class="token namespace">v-bind:</span>id</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post.id<span
                class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-bind:</span>title</span><span
                class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>post.title<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;/</span>blog-post</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
            </div>

            <div>
              <h2>Однонаправленный поток данных</h2>
              <v-divider class="mb-6" />
              <p>
                Все входные параметры образуют одностороннюю привязку между
                дочерним свойством и родительским: когда родительское свойство
                обновляется — оно будет передаваться дочернему, но не наоборот.
                Это предотвращает случайное изменение дочерними компонентами
                родительского состояния, что может затруднить понимание потока
                данных приложения.
              </p>
              <p>
                Кроме того, каждый раз, когда обновляется родительский
                компонент, все входные параметры дочернего компонента будут
                обновлены актуальными значениями. Это означает, что не должны
                пытаться изменять входной параметр внутри дочернего компонента.
                Если это сделать, Vue отобразит предупреждение в консоли.
              </p>
              <p>
                Обычно встречаются два случая, когда возникает соблазн изменять
                входной параметр:
              </p>
              <ol>
                <li>
                  <p>
                    Входной параметр используется для передачи начального
                    значения; дочерний компонент хочет использовать его как
                    локальное свойство данных в дальнейшем. В этом случае лучше
                    всего определить локальное свойство в данных, которое
                    использует значение входного параметра в качестве
                    начального:
                  </p>
                  <div class="language-js line-numbers-mode">
                    <pre class="language-js"><code>props<span
                    class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'initialCounter'</span><span
                    class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span
                      class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    counter<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>initialCounter
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
                </li>
                <li>
                  <p>
                    Входной параметр передаётся как необработанное значение,
                    которое необходимо преобразовать. В таком случае лучше всего
                    объявить вычисляемое свойство с использованием входного
                    параметра:
                  </p>
                  <div class="language-js line-numbers-mode">
                    <pre class="language-js"><code>props<span
                    class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'size'</span><span
                    class="token punctuation">]</span><span class="token punctuation">,</span>
computed<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">normalizedSize</span><span class="token punctuation">(</span><span
                      class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span
                      class="token punctuation">.</span>size<span class="token punctuation">.</span><span
                      class="token function">trim</span><span class="token punctuation">(</span><span
                      class="token punctuation">)</span><span class="token punctuation">.</span><span
                      class="token function">toLowerCase</span><span class="token punctuation">(</span><span
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
                      ><br />
                    </div>
                  </div>
                </li>
              </ol>
              <WarningAlert>
                Обратите внимание, что объекты и массивы в JavaScript передаются
                по ссылке, поэтому если входной параметр массив или объект, то
                изменения внутри дочернего компонента этого объекта или массива
                будет влиять на состояние родителя и Vue не в состоянии
                предупредить об этом. Следует избегать любых мутаций входных
                параметров, в том числе объектов и массивов, так как
                игнорирование одностороннего связывания данных может привести к
                нежелательным результатам.
              </WarningAlert>
            </div>

            <div>
              <h2>Валидация входных параметров</h2>
              <v-divider class="mb-6" />
              <p>
                Компоненты могут указывать требования к своим входным
                параметрам, такие как определение типа, которые уже видели выше.
                Если эти требования не выполнены — Vue предупредит сообщением в
                JavaScript-консоли браузера. Это особенно полезно при разработке
                компонента, который предназначен для использования другими.
              </p>
              <p>
                Чтобы указать валидации входного параметра, можно предоставить в
                <code>props</code> объект с валидациями для проверки значения,
                вместо массива строк. Например:
              </p>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>app<span
                class="token punctuation">.</span><span class="token function">component</span><span
                class="token punctuation">(</span><span class="token string">'my-component'</span><span
                class="token punctuation">,</span> <span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Просто проверка типа (`null` и `undefined` проходят проверку для любого типа)</span>
    propA<span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token comment">// Несколько допустимых типов</span>
    propB<span class="token operator">:</span> <span class="token punctuation">[</span>String<span
                  class="token punctuation">,</span> Number<span class="token punctuation">]</span><span
                  class="token punctuation">,</span>
    <span class="token comment">// Обязательное значение строкового типа</span>
    propC<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> String<span class="token punctuation">,</span>
      required<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// Число со значением по умолчанию</span>
    propD<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span
                  class="token number">100</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// Объект со значением по умолчанию</span>
    propE<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> Object<span class="token punctuation">,</span>
      <span class="token comment">// Для объектов или массивов значения по умолчанию</span>
      <span class="token comment">// должны возвращаться из функции</span>
      <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span
                  class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> message<span
                  class="token operator">:</span> <span class="token string">'привет'</span> <span
                  class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// Пользовательская функция для валидации</span>
    propF<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">validator</span><span class="token punctuation">(</span><span
                  class="token parameter">value</span><span class="token punctuation">)</span> <span
                  class="token punctuation">{</span>
        <span class="token comment">// Значение должно соответствовать одной из этих строк</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'success'</span><span
                  class="token punctuation">,</span> <span class="token string">'warning'</span><span
                  class="token punctuation">,</span> <span class="token string">'danger'</span><span
                  class="token punctuation">]</span><span class="token punctuation">.</span><span
                  class="token function">includes</span><span class="token punctuation">(</span>value<span
                  class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// Функция с значением по умолчанию</span>
    propG<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> Function<span class="token punctuation">,</span>
      <span class="token comment">// В отличие от объекта или массива по умолчанию, это не фабричная функция — это функция, служащая в качестве значения по умолчанию</span>
      <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span
                  class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">'Функция по умолчанию'</span>
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
                  ><br />
                </div>
              </div>
              <p>
                Если валидация входного параметра заканчивается ошибкой, Vue
                выведет предупреждение в консоль (если используется сборка для
                разработки).
              </p>
              <SuccessAlert>
                Обратите внимание, что входные параметры будут валидироваться
                перед созданием экземпляра компонента, поэтому свойства
                экземпляра (например, <code>data</code>, <code>computed</code> и
                т.д.) будут недоступны внутри <code>default</code> или функций
                <code>validator</code>.
              </SuccessAlert>
              <h3 class="my-4">Проверка типа</h3>
              <p>
                Значением <code>type</code> может быть один из следующих
                нативных конструкторов:
              </p>
              <ul>
                <li>String</li>
                <li>Number</li>
                <li>Boolean</li>
                <li>Array</li>
                <li>Object</li>
                <li>Date</li>
                <li>Function</li>
                <li>Symbol</li>
              </ul>
              <p>
                Кроме того, <code>type</code> также может быть пользовательской
                функцией-конструктором и валидация будет выполняться проверкой с
                помощью <code>instanceof</code>. Например, если существует
                следующая функция-конструктор:
              </p>
              <div class="language-js line-numbers-mode">
                <pre
                  class="language-js"
                ><code><span class="token keyword">function</span> <span
                class="token function">Person</span><span class="token punctuation">(</span><span
                class="token parameter">firstName<span class="token punctuation">,</span> lastName</span><span
                class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> firstName
  <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span
                  class="token operator">=</span> lastName
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
              <p>То можно использовать следующим образом:</p>
              <div class="language-js line-numbers-mode">
                <pre class="language-js"><code>app<span
                class="token punctuation">.</span><span class="token function">component</span><span
                class="token punctuation">(</span><span class="token string">'blog-post'</span><span
                class="token punctuation">,</span> <span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    author<span class="token operator">:</span> Person
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
                Для проверки, что значение входного параметра
                <code>author</code> создано с помощью <code>new Person</code>.
              </p>
            </div>

            <div>
              <h2>Регистр в именах входных параметров</h2>
              <v-divider class="mb-6" />
              <p>
                Имена HTML-атрибутов не чувствительны к регистру, поэтому любые
                заглавные символы браузеры будут интерпретировать как строчные.
                Это значит, что при использовании шаблонов в DOM, входные
                параметры в camelCase должны быть указаны в kebab-case
                (разделённые дефисом) эквиваленте:
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
  <span class="token comment">// camelCase в JavaScript</span>
  props<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'postTitle'</span><span
                  class="token punctuation">]</span><span class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token string">'<span class="language-html"><span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span
                  class="token punctuation">&gt;</span></span><span class="token interpolation"><span
                  class="token punctuation">{{</span><span class="token inline-js language-js"> postTitle </span><span
                  class="token punctuation">}}</span></span><span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>h3</span><span
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
              <p>
                Опять же, при использовании строковых шаблонов это ограничение
                не применяется.
              </p>
            </div>
          </div>

          <v-btn class="mt-6" color="success" nuxt to="/guide/[2.3] attributes">
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
  name: "GuideProps",
  components: { SuccessAlert, InfoAlert, WarningAlert },
};
</script>
