alert("Приветствую, я подготовил для тебя сайт шутку. ")
const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

const btn2 = document.querySelector('#btn2');

btn2.addEventListener('mouseenter', () => {
    btn2.style.left = `${random(0, 90)}%`;
    btn2.style.top = `${random(0, 90)}%`;
});
btn2.addEventListener('click', () => {
    alert('Хорошо, ты доказал что ты умный человек');
});
function change(){
    var elem = document.getElementById("heading");
    if (elem.innerHTML=="Ничего удивительного, опять глупец"){
        elem.innerHTML = "Можешь прочитать книжки, говорят полезно";
    }
    else{
        elem.innerHTML = "Ничего удивительного, опять глупец";
    }
}





























// // функция рандом
// const random = (min, max) => {
//   const rand = min + Math.random() * (max - min + 1);
//   return Math.floor(rand);
// };

// // убегающая кнопка
// const btn = document.querySelector('#btn');
// btn.addEventListener('mouseenter', () => {
//     btn.style.left = `${random(0, 90)}%`;
//     btn.style.top = `${random(0, 90)}%`;
// });

// // победа
// btn.addEventListener('click',
//   () => alert('Congratulations! You hit the button! What are you doing with your life?')
// );