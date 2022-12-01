<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-sheet class="pa-4">
          <h1>Условная отрисовка</h1>
          <hr class="my-3" />

          <div class="mt-6">
            <div>
              <h2><code>v-if</code></h2>
              <v-divider class="mb-6" />
              <p>
                Для отрисовки блока по условию используется директива
                <code>v-if</code>. Блок будет отображаться только в случае, если
                выражение директивы возвращает значение, которое приводится к
                <code>true</code>.
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span
                class="token attr-name">v-if</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>awesome<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Vue восхитителен!<span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span
                class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                Также можно добавить блок «иначе», используя директиву
                <code>v-else</code>:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span
                class="token attr-name">v-if</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>awesome<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Vue восхитителен!<span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span
                class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span
  class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>О, нет 😢<span
                  class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span
                  class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br /><span
                    class="line-number"
                    >2</span
                  ><br />
                </div>
              </div>
              <h3 class="my-4">
                Условные группы с помощью <code>v-if</code> и
                <code>&lt;template></code>
              </h3>
              <p>
                Поскольку <code>v-if</code> является директивой, то она должна
                быть указана на одном элементе. Но что если потребуется
                управлять отображением сразу нескольких элементов? В этом случае
                можно использовать <code>v-if</code> на элементе
                <code>&lt;template></code>, который работает как невидимая
                обёртка и в результатах отрисовки не появится.
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span
                class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span
                class="token attr-value"><span class="token punctuation attr-equals">=</span><span
                class="token punctuation">"</span>ok<span class="token punctuation">"</span></span><span
                class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span
    class="token punctuation">&gt;</span></span>Заголовок<span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span
    class="token punctuation">&gt;</span></span>Абзац 1<span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span
    class="token punctuation">&gt;</span></span>Абзац 2<span class="token tag"><span class="token tag"><span
                  class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
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
              <h3 class="my-4"><code>v-else</code></h3>
              <p>
                Для указания блока «иначе» для <code>v-if</code> можно
                использовать директиву <code>v-else</code>:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">v-if</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Math.random() &gt; 0.5<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  Сейчас меня видно
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
  class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
  class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>
  А теперь — нет
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
                  ><br />
                </div>
              </div>
              <p>
                Элемент с директивой <code>v-else</code> должен следовать сразу
                за элементом с директивой <code>v-if</code> или
                <code>v-else-if</code> — иначе он не будет распознан.
              </p>
              <h3 class="my-4"><code>v-else-if</code></h3>
              <p>
                Как следует из названия, <code>v-else-if</code> служит в
                качестве блока «else if» директивы <code>v-if</code>. Её можно
                использовать для создания цепочек из условий:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
                class="token attr-name">v-if</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>type === <span
                class="token punctuation">'</span>A<span class="token punctuation">'</span><span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  A
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
  class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
  class="token attr-name">v-else-if</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>type === <span
  class="token punctuation">'</span>B<span class="token punctuation">'</span><span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  B
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
  class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
  class="token attr-name">v-else-if</span><span class="token attr-value"><span
  class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>type === <span
  class="token punctuation">'</span>C<span class="token punctuation">'</span><span
  class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  C
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
  class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span
  class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>
  Точно не A, B или C
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
                  ><br />
                </div>
              </div>
              <p>
                Как и <code>v-else</code>, <code>v-else-if</code> должен
                следовать сразу за элементом с <code>v-if</code> или
                <code>v-else-if</code>.
              </p>
            </div>

            <div>
              <h2><code>v-show</code></h2>
              <v-divider class="mb-6" />
              <p>
                Ещё одним вариантом условного отображения является директива
                <code>v-show</code>. Используется очень похоже:
              </p>
              <div class="language-html line-numbers-mode">
                <pre class="language-html"><code><span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span
                class="token attr-name">v-show</span><span class="token attr-value"><span
                class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ok<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Привет!<span
                class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span
                class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                Отличия в том, что элемент с <code>v-show</code> будет всегда
                отрисовываться и оставаться в DOM, а переключаться будет лишь
                его CSS свойство <code>display</code>.
              </p>
              <p>
                <code>v-show</code> нельзя использовать на элементе
                <code>&lt;template></code> и она не работает с
                <code>v-else</code>.
              </p>
            </div>

            <div>
              <h2><code>v-if</code> или <code>v-show</code></h2>
              <v-divider class="mb-6" />
              <p>
                <code>v-if</code> выполняет «настоящую» условную отрисовку, так
                как гарантирует, что слушатели событий и дочерние компоненты
                внутри блока должным образом уничтожаются и воссоздаются при
                переключениях условия.
              </p>
              <p>
                <code>v-if</code> также ленивый: если условие ложно на момент
                первоначальной отрисовки, то он ничего не сделает — условный
                блок не будет отрисован до тех пор, пока условие не станет
                истинным.
              </p>
              <p>
                Для сравнения, <code>v-show</code> намного проще — элемент
                всегда отрисовывается, вне зависимости от исходного состояния с
                переключением на основе CSS.
              </p>
              <p>
                В целом, у <code>v-if</code> выше затраты на переключение, в то
                время как <code>v-show</code> имеет больше затрат на первичную
                отрисовку. Так что используйте <code>v-show</code>, если
                переключения будут частыми, и предпочитайте <code>v-if</code>,
                если условие может и не измениться во время исполнения.
              </p>
            </div>

            <div>
              <h2><code>v-if</code> вместе с <code>v-for</code></h2>
              <v-divider class="mb-6" />
              <SuccessAlert>
                Совместное использование <code>v-if</code> и
                <code>v-for</code> не рекомендуется. Подробнее можно прочитать в
                разделе рекомендаций.
              </SuccessAlert>
              <p>
                При одновременном использовании <code>v-if</code> и
                <code>v-for</code> на одном элементе, <code>v-if</code> будет
                исполняться первым. Подробнее в разделе отрисовки списков.
              </p>
            </div>
          </div>

          <v-btn
            class="mt-6"
            color="success"
            nuxt
            to="/guide/[1.9] list_rendering"
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
  name: "GuideConditionalRendering",
  components: { SuccessAlert },
};
</script>
