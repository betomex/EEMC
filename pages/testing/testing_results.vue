<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-sheet class="pa-4">
          <h1>Итоги тестирования - {{ result }} / 20</h1>
          <hr class="my-3" />

          <div class="mt-6 d-flex flex-column align-center">
            <v-card
              width="800"
              elevation="4"
              v-for="(answer, index) in answers"
              :key="index"
              class="pa-4 my-4 grey darken-1 rounded-lg"
            >
              <h4 class="mb-2">{{ answer.question }}</h4>
              <v-alert
                border="left"
                colored-border
                color="orange accent-4"
                class="grey black--text pl-6"
                elevation="2"
                >{{ answer.answerText }}</v-alert
              >
              <v-chip :class="`${answer.isCorrect ? 'green' : 'red'}`">{{
                answer.isCorrect ? "Правильно" : "Не правильно"
              }}</v-chip>
            </v-card>
          </div>
        </v-sheet>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { testAnswers } from "~/constants/test";
import { isEqual } from "lodash";

export default {
  name: "TestingResultsPage",
  computed: {
    answers() {
      const userAnswers = this.$store.state.answers;

      return testAnswers.map((answer, index) => ({
        ...answer,
        isCorrect: isEqual(answer.answer, userAnswers[index]),
      }));
    },
    result() {
      return this.answers.filter((answer) => answer.isCorrect).length;
    },
  },
};
</script>
