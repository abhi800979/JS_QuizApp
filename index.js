const question=[{
        'que':'question number 1',
        'a':'html',
        'b':'css',
        'c':'jss',
        'd':'python',
        'correct':'a'
},
{
     'que':'question',
     'a':'html',
     'b':'css',
     'c':'jss',
     'd':'python',
     'correct':'b' 
},
{
     'que':'question',
     'a':'html',
     'b':'css',
     'c':'jss',
     'd':'python',
     'correct':'c'
},
{
    'que':'question',
    'a':'html',
    'b':'css',
    'c':'jss',
    'd':'python',
    'correct':'a'
}
]
let index=0;
let total=question.length;
let right=0,
    wrong=0; 
const quesbox = document.getElementById("quesbox")
const optioninputs =document.querySelectorAll('input[type="radio"]');
// const Cname = document.querySelectorAll('[name="option"]');
// console.log(Cname)

const loadQuestion = () => {
    console.log(index)
    console.log(total)
    if(index === total){
        return endquiz();
    }
    reset();
    const data=question[index]
    // console.log(data)
    // const result = optioninputs[0].innerHTML = data.a
// console.log(result)
    quesbox.innerHTML=`${index+1}) ${data.que}`;
    optioninputs[0].nextElementSibling.innerText= data.a;
    optioninputs[1].nextElementSibling.innerText= data.b;
    optioninputs[2].nextElementSibling.innerText= data.c;   
    optioninputs[3].nextElementSibling.innerText= data.d;
}

console.log(optioninputs)
const submitquiz = () => {
    const data=question[index];
    const ans = getanswer()
    console.log('ans',ans)
    console.log('data',data)

    if(ans == data.correct){
        right++;

 
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getanswer = () => {
    let answer;
    optioninputs.forEach(
        (e) => {
            console.log(e)
            if(e.checked){
                answer = e.value;
                // console.log(answer)
                // console.log('inside')
            }
        }
    )
    return answer;
}
const reset = () =>{
    optioninputs.forEach(
        (input) => {
            input.checked=false;

        }
    )
}

const endquiz = () => {
    console.log('endquiz')
    document.getElementById("box").innerHTML = `
        <h3> thank you!</h3>
        <h2>${right}/ ${total} are correct</h2>
    `
}
loadQuestion();



