const questions = [
    new Question("Que evento marca o início da Idade Contemporânea?", ["Tomada de Constantinopla", "A Revolução Francesa", "A Primeira Guerra Mundial", "A Reforma Protestante"], "A Revolução Francesa"),
    new Question("O feudalismo foi um sistema econômico, social e político durante a?", ["Pré-História", "Idade Moderna", "Idade Contemporânea", "Idade Média"], "Idade Média"),
    new Question("O período Paleolítico também é chamado de?", ["Idade do Gelo", "Período do Homo sapiens", "Idade dos Metais","Idade da Pedra Lascada"], "Idade da Pedra Lascada"),
    new Question("Qual a classe social responsável pelo movimento do Iluminismo?", ["Servos", "Clero","Burguesia", "Nobres"], "Burguesia"),
    new Question("Quem foi o idealizador da Reforma Protestante?", ["Martinho Lutero", "Henrique VIII", "Papa Nicolau II", "João Calvino"], "Martinho Lutero")
]

const quiz = new Quiz(questions)

function showQuestion() {
    if (quiz.hasEnded()) {
        showScores()
    } else {
        const questionElement = document.getElementById("quiz")
        const currentQuestion = quiz.getCurrentQuestion()
        questionElement.innerHTML = `
            <div class="question">${currentQuestion.text}</div>
            <ul class="options">
                ${currentQuestion.choices.map(choice => `<li><button onclick="guess('${choice}')">${choice}</button></li>`).join('')}
            </ul>
        `
    }
}

function guess(answer) {
    const currentQuestion = quiz.getCurrentQuestion();
    if (answer !== currentQuestion.answer) {
        alert(`Você errou! A resposta correta para a pergunta "${currentQuestion.text}" é "${currentQuestion.answer}".`);
    }
    quiz.guess(answer);
    showQuestion();
}

function showScores() {
    const quizElement = document.getElementById("quiz")
    quizElement.innerHTML = `
        <h2>Resultado</h2>
        <p>Você acertou ${quiz.score} de ${quiz.questions.length} perguntas.</p>
    `

    if (quiz.score === quiz.questions.length) {
        alert("Parabéns! Você acertou todas as perguntas!")
    } else {
        alert("Tente novamente! Você errou alguma pergunta.")
    }
}

document.getElementById("submit").addEventListener("click", showScores)

showQuestion()
