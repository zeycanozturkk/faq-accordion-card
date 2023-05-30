const questions = document.querySelectorAll(".que");

questions.forEach((que) => {
  que.addEventListener("click", () => {
    if (que.classList.contains("is-open")) {
      que.classList.remove("is-open");
    } else {
      const questionsWithIsopen = document.querySelectorAll(".is-open");
      questionsWithIsopen.forEach((questionsWithIsopen) => {
        questionsWithIsopen.classList.remove("is-open");
      });
      que.classList.add("is-open");
    }
  });
});