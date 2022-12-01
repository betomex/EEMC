<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-sheet class="pa-4">
          <h1>Установка</h1>
          <hr class="my-3" />

          <div class="mt-6">
            <p>
              Vue.js изначально разрабатывался быть инкрементально адаптируемым.
              Это значит, что он может быть интегрирован в проект несколькими
              способами, в зависимости от требований.
            </p>
            <p>Есть четыре основных способа добавления Vue.js в проект:</p>
            <ol>
              <li>Импорт CDN пакета на странице</li>
              <li>Скачивание файлов JavaScript и их самостоятельный хостинг</li>
              <li>Установка с использованием npm</li>
              <li>
                Использование официального CLI для развёртывания проекта,
                предоставляющего продвинутые инструменты для создания
                современного рабочего процесса разработки фронтенда (например,
                горячая перезагрузка, линтинг при сохранении и многое другое).
              </li>
            </ol>

            <div>
              <h2 class="mt-6">CDN</h2>
              <v-divider class="mb-6" />
              <p>
                Для прототипов и в обучающих целях можно использовать последнюю
                версию с CDN:
              </p>
              <div class="language-html line-numbers-mode">
                <pre
                  class="language-html"
                ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/vue@next<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
                <div class="line-numbers-wrapper">
                  <span class="line-number">1</span><br />
                </div>
              </div>
              <p>
                Для production рекомендуется указывать конкретную версию и
                сборку, чтобы избежать неожиданных поломок при выходе новых
                версий.
              </p>
            </div>

            <div>
              <h2 class="mt-6">Скачивание и самостоятельный хостинг</h2>
              <v-divider class="mb-6" />
              <p>
                Если нужно избежать использования систем сборки, но нет
                возможности использовать CDN в production — в таком случае можно
                скачать соответствующий <code>.js</code> файл и разместить его
                на собственном веб-сервере. После чего подключать его, с помощью
                тега <code>&lt;script></code>, точно также, как и при
                подключении с CDN.
              </p>
              <p>
                Можно просматривать и скачивать файлы с CDN, например unpkg или
                jsDelivr. Различия файлов сборок подробнее объясняются ниже, но
                обычно потребуется загрузить обе сборки: для разработки и для
                production.
              </p>
            </div>
          </div>

          <div>
            <h2 class="mt-6">npm</h2>
            <v-divider class="mb-6" />
            <p>
              npm — рекомендованный способ установки при создании больших
              приложений на Vue. Он прекрасно сочетается с системами сборки,
              такими как webpack или Rollup.
            </p>
            <div class="language-bash line-numbers-mode">
              <pre
                class="language-bash"
              ><code><span class="token comment"># установка последней стабильной версии</span>
$ <span class="token function">npm</span> <span class="token function">install</span> vue@next
</code></pre>
              <div class="line-numbers-wrapper">
                <span class="line-number">1</span><br /><span
                  class="line-number"
                  >2</span
                ><br />
              </div>
            </div>
            <p>
              Также Vue предоставляет инструменты для создания однофайловых
              компонентов (также именуемых как SFC). Если хотите их
              использовать, то также потребуется установить
              <code>@vue/compiler-sfc</code>:
            </p>
            <div class="language-bash line-numbers-mode">
              <pre
                class="language-bash"
              ><code>$ <span class="token function">npm</span> <span class="token function">install</span> -D @vue/compiler-sfc
</code></pre>
              <div class="line-numbers-wrapper">
                <span class="line-number">1</span><br />
              </div>
            </div>
            <p>
              Обратите внимание, если выполняете миграцию с Vue 2, то
              <code>@vue/compiler-sfc</code> заменяет используемый ранее
              <code>vue-template-compiler</code>.
            </p>
            <p>
              Кроме <code>@vue/compiler-sfc</code> также понадобится подходящий
              загрузчик SFC или плагин для системы сборки. Более подробную
              информацию можно найти в разделе про однофайловые компоненты.
            </p>
            <p>
              В большинстве случаев предпочтительным способом создания сборки с
              webpack и минимальной конфигурацией будет использование Vue CLI.
            </p>
          </div>

          <div>
            <h2 class="mt-6">CLI</h2>
            <v-divider class="mb-6" />
            <p>
              Vue предоставляет официальный CLI для быстрого создания каркаса
              одностраничных приложений (SPA). Предлагаемые шаблоны содержат всё
              необходимое для организации современной фронтенд-разработки. За
              несколько минут можно получить работающую конфигурацию с горячей
              перезагрузкой модулей, линтингом кода при сохранении и настроенной
              конфигурацией production-сборки.
            </p>
            <div class="language-html line-numbers-mode">
              <pre
                class="language-html"
              ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/vue@next<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
              <div class="line-numbers-wrapper">
                <span class="line-number">1</span><br />
              </div>
            </div>
            <p>
              Для production рекомендуется указывать конкретную версию и сборку,
              чтобы избежать неожиданных поломок при выходе новых версий.
            </p>
            <SuccessAlert>
              Использование CLI предполагает наличие знаний о Node.js и
              связанных с ней инструментов сборки. Новичкам во Vue или в
              инструментах сборки фронтенда настоятельно рекомендуем сначала
              прочитать руководство без применения каких-либо систем сборки
              прежде чем начинать использовать CLI.
            </SuccessAlert>
            <p>
              Для Vue 3 требуется использовать Vue CLI v4.5, доступная в
              <code>npm</code> по имени <code>@vue/cli</code>. Для обновления
              необходимо переустановить последнюю версию
              <code>@vue/cli</code> глобально:
            </p>
            <div class="language-bash line-numbers-mode">
              <pre
                class="language-bash"
              ><code><span class="token function">yarn</span> global <span class="token function">add</span> @vue/cli
<span class="token comment"># ИЛИ</span>
<span class="token function">npm</span> <span class="token function">install</span> -g @vue/cli
</code></pre>
              <div class="line-numbers-wrapper">
                <span class="line-number">1</span><br /><span
                  class="line-number"
                  >2</span
                ><br /><span class="line-number">3</span><br />
              </div>
            </div>
            <p>После установки в проекте Vue необходимо выполнить:</p>
            <div class="language-bash line-numbers-mode">
              <pre class="language-bash"><code>vue upgrade --next
</code></pre>
              <div class="line-numbers-wrapper">
                <span class="line-number">1</span><br />
              </div>
            </div>
          </div>

          <v-btn
            class="mt-6"
            color="success"
            nuxt
            to="/guide/[1.2] introduction"
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
  name: "GuideInstallation",
  components: { SuccessAlert },
};
</script>
