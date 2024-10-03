let currentSlide = 0;
 
function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
   
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
 
    const offset = -currentSlide * 100; // Ajusta a posição
    slides.style.transform = `translateX(${offset}%)`;
}
 
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}
 
// Inicializa o carrossel
showSlide(currentSlide);

// Quiz
function disableOptions(questionName){
    let options = document.getElementsByName (questionName);
    options.forEach(option => {
        if(!option.checked){
            option.disabled = true;
        }
    });
}
function playSound(){
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}
function submitQuiz(){

    let correctAnswers = {
        q1 : "C",
        q2 : "B",
        q3 : "C",
        q4 : "D",
        q5 : "D",
        q6 : "A",
        q7 : "D",
        q8 : "A",
        q9 : "C",
        q10 : "B",
    };
    let form = document.getElementById('quiz-form');
    let score = 0;

    for (let key in correctAnswers){
        let userAnswer = form.elements[key].value;
        if(userAnswer === correctAnswers[key]){
            score++;
        }
    }
    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas.`

    if(score === 10){
        let sucessSound = document.getElementById("venceusom");
        sucessSound.play();
    }else{
        let failSound = document.getElementById("perdeusom");
        failSound.play();
    }
    document.getElementById('enviar').disabled=true;
    document.getElementById('recomeco').disabled=false;
}
function recomecar(){
    let form = document.getElementById('quiz-form');
    form.reset();
    let options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled=false);
    score = 0;
    result.innerHTML = "";
    document.getElementById('enviar').disabled=false;
    document.getElementById('recomeco').disabled=true;
}