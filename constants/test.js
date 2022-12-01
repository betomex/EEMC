export const testAnswers = [
  {
    answer: [1, 2, 3],
    question: 'Что можно разработать с использованием Vue?',
    answerText: 'На Vue с использованием нужных инструментов можно разработать всё из перечисленного'
  },
  {
    answer: 4,
    question: 'Как называется свойство, в котором прописываются все функции компонента?',
    answerText: 'methods'
  },
  {
    answer: [3, 5, 7],
    question: 'Как можно вывести значение переменной message в HTML?',
    answerText: 'Через mustache синтаксис или использовать директивы v-text / v-html'
  },
  {
    answer: [3, 5],
    question: 'Как установить атрибут title у тэга p?',
    answerText: 'С использованием директивы v-bind или её сокращения - :'
  },
  {
    answer: 2,
    question: 'Как получить данные из текстового поля?',
    answerText: '$event.target.value'
  },
  {
    answer: [1, 6],
    question: 'Как вызвать событие по клику на элемент?',
    answerText: 'С использованием директивы v-on или её сокращения - @'
  },
  {
    answer: 5,
    question: 'Какая директива используется для создания двунаправленной привязки данных?',
    answerText: 'v-model'
  },
  {
    answer: 1,
    question: 'Какой модификатор используется, если нужно вызвать обработчик события только один раз?',
    answerText: '.once'
  },
  {
    answer: [4, 2, 5, 3, 1, 8, 6, 7],
    question: 'Отметьте хуки жизненного цила Vue по очерёдности вызова',
    answerText: 'beforeCreate -> created -> beforeMount -> mounted -> beforeUpdate -> updated -> beforeDestroy -> destroyed'
  },
  {
    answer: 4,
    question: 'В чем разница между директивами v-show и v-if?',
    answerText: 'Все варианты ответов верны'
  },
  {
    answer: [2, 3, 6],
    question: 'Выберите модификаторы клавиш мыши',
    answerText: 'Есть только 3 модификатора: left, right, middle'
  },
  {
    answer: 8,
    question: 'Сколько во Vue представлено нативных конструкторов типов?',
    answerText: 'String, Number, Boolean, Array, Object, Date, Function, Symbol - 8 штук'
  },
  {
    answer: 3,
    question: 'Отметьте неправильный пример использования директивы v-for',
    answerText: 'v-for="let item in items" - так писать нельзя'
  },
  {
    answer: [1, 2, 4],
    question: 'Что верно относительно совместного использования директив v-for и v-if?',
    answerText: 'Не рекомендуется их совместное использование; v-if имеет больший приоритет, чем v-for; В условии v-if не будет доступа к переменным из области видимости v-for'
  },
  {
    answer: 7,
    question: 'Какой из перечисленных методов массивов не запускет обновление отображения',
    answerText: 'concat'
  },
  {
    answer: [5],
    question: 'Отметьте каких модификаторов клавиш не существует во Vue',
    answerText: 'Из перечисленных нет только .backspace. Нажатие на эту клавишу отлавливает .delete'
  },
  {
    answer: 5,
    question: 'Какая передача props в качестве входных параметров недопустима',
    answerText: 'Всё допустимо'
  },
  {
    answer: [1, 2, 3, 5],
    question: 'В каких случаях при передаче boolean свойства оно примет значение true?',
    answerText: 'Указание свойства, пустая строка, значение свойства в kebab-case и передача true'
  },
  {
    answer: 4,
    question: 'Как во Vue 3 выглядит кастомная реализация v-model?',
    answerText: ':modelValue="pageTitle" @update:modelValue="pageTitle = $event"'
  },
  {
    answer: 1,
    question: 'В чём заключается смысл однофайлового компонента?',
    answerText: 'Один такой компонент с его шаблоном, скриптом и стилями находится в одном файле'
  }
];

// nineth на порядок