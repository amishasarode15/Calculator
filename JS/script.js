let string="";
let buttons=document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
   button.addEventListener('click',(e)=>{
       if(e.target.innerHTML == '='){
           string=eval(string);
           document.querySelector('input').value=string;
       }

       else  if(e.target.innerHTML == 'AC'){
        string="";
        document.querySelector('input').value=string;
    }
       else{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
       }
      
   })
})








const img = document.getElementById('sun');
img.addEventListener('click', function onClick(event) {
    const box = document.getElementById('box');
    box.style.backgroundColor = 'white';

    const inpu = document.getElementById('in');
    inpu.style.backgroundColor='aliceblue';
    inpu.style.color="black";
    inpu.style.boxShadow='0 0 0';
    

    const button1 =document.getElementById('button1');
    button1.style.color="white";
    button1.style.backgroundColor = 'purple';
    button1.style.border='none';
    button1.style.boxShadow='0 0 0';

    const button2 =document.getElementById('button2');
    button2.style.color="white";
    button2.style.backgroundColor = 'purple';
    button2.style.border='none';
    button2.style.boxShadow='0 0 0';

    const button3 =document.getElementById('button3');
    button3.style.color="white";
    button3.style.backgroundColor = 'purple';
    button3.style.border='none';
    button3.style.boxShadow='0 0 0';

    const button4 =document.getElementById('button4');
    button4.style.color="white";
    button4.style.backgroundColor = 'purple';
    button4.style.border='none';
    button4.style.boxShadow='0 0 0';

    const button5 =document.getElementById('button5');
    button5.style.color="white";
    button5.style.backgroundColor = 'purple';
    button5.style.border='none';
    button5.style.boxShadow='0 0 0';

    const button6 =document.getElementById('button6');
    button6.style.color="white";
    button6.style.backgroundColor = 'purple';
    button6.style.border='none';
    button6.style.boxShadow='0 0 0';

    const button7 =document.getElementById('button7');
    button7.style.color="white";
    button7.style.backgroundColor = 'purple';
    button7.style.border='none';
    button7.style.boxShadow='0 0 0px black';

    const button8 =document.getElementById('button8');
    button8.style.color="white";
    button8.style.backgroundColor = 'purple';
    button8.style.border='none';
    button8.style.boxShadow='0 0 0px black';

    const button9 =document.getElementById('button9');
    button9.style.color="white";
    button9.style.backgroundColor = 'purple';
    button9.style.border='none';
    button9.style.boxShadow='0 0 0px black';

    const button10 =document.getElementById('button10');
    button10.style.color="white";
    button10.style.backgroundColor = 'purple';
    button10.style.border='none';
    button10.style.boxShadow='0 0 0px black';

    const button11 =document.getElementById('button11');
    button11.style.color="white";
    button11.style.backgroundColor = 'purple';
    button11.style.border='none';
    button11.style.boxShadow='0 0 6px black';

    const button12 =document.getElementById('button12');
    button12.style.color="white";
    button12.style.backgroundColor = 'purple';
    button12.style.border='none';
    button12.style.boxShadow='0 0 0px black';

    const button13 =document.getElementById('button13');
    button13.style.color="white";
    button13.style.backgroundColor = 'purple';
    button13.style.border='none';
    button13.style.boxShadow='0 0 0px black';

    const button14 =document.getElementById('button14');
    button14.style.color="white";
    button14.style.backgroundColor = 'purple';
    button14.style.border='none';
    button14.style.boxShadow='0 0 0px black';

    const button15 =document.getElementById('button15');
    button15.style.color="white";
    button15.style.backgroundColor = 'purple';
    button15.style.border='none';
    button15.style.boxShadow='0 0 0px black';

    const button16 =document.getElementById('button16');
    button16.style.color="white";
    button16.style.backgroundColor = 'purple';
    button16.style.border='none';
    button16.style.boxShadow='0 0 0px black';

    const button17 =document.getElementById('button17');
    button17.style.color="white";
    button17.style.backgroundColor = 'purple';
    button17.style.border='none';
    button17.style.boxShadow='0 0 0px black';

    const button18 =document.getElementById('button18');
    button18.style.color="white";
    button18.style.backgroundColor = 'purple';
    button18.style.border='none';
    button18.style.boxShadow='0 0 0px black';

    const button19 =document.getElementById('button19');
    button19.style.color="white";
    button19.style.backgroundColor = 'purple';
    button19.style.border='none';
    button19.style.boxShadow='0 0 0px black';

    const button20 =document.getElementById('button20');
    button20.style.color="white";
    button20.style.backgroundColor = 'purple';
    button20.style.border='none';
    button20.style.boxShadow='0 0 0px black';
   
});


const img1 = document.getElementById('moon');
img1.addEventListener('click', function onClick(event) {
    const box = document.getElementById('box');
  box.style.backgroundColor = 'rgb(49, 49, 49)';

  const inpu = document.getElementById('in');
  inpu.style.backgroundColor = 'black';
  inpu.style.color="white";
  inpu.style.border='1px solid rgba(128, 0, 128, 0.829)';
  inpu.style.boxShadow='0px 0px 15px purple';

  const button1 =document.getElementById('button1');
  button1.style.backgroundColor = 'white';
  button1.style.color="white";
  button1.style.backgroundColor = 'black';
  button1.style.border='none';
  button1.style.boxShadow='0 0 15px purple';

  const button2 =document.getElementById('button2');
  button2.style.backgroundColor = 'white';
  button2.style.color="white";
  button2.style.backgroundColor = 'black';
  button2.style.border='none';
  button2.style.boxShadow='0 0 15px purple';

  const button3 =document.getElementById('button3');
  button3.style.backgroundColor = 'white';
  button3.style.color="white";
  button3.style.backgroundColor = 'black';
  button3.style.border='none';
  button3.style.boxShadow='0 0 15px purple';

  const button4 =document.getElementById('button4');
  button4.style.backgroundColor = 'white';
  button4.style.color="white";
  button4.style.backgroundColor = 'black';
  button4.style.border='none';
  button4.style.boxShadow='0 0 15px purple';

  const button5 =document.getElementById('button5');
  button5.style.backgroundColor = 'white';
  button5.style.color="white";
  button5.style.backgroundColor = 'black';
  button5.style.border='none';
  button5.style.boxShadow='0 0 15px purple';

  const button6 =document.getElementById('button6');
  button6.style.backgroundColor = 'white';
  button6.style.color="white";
  button6.style.backgroundColor = 'black';
  button6.style.border='none';
  button6.style.boxShadow='0 0 15px purple';

  const button7 =document.getElementById('button7');
  button7.style.backgroundColor = 'white';
  button7.style.color="white";
  button7.style.backgroundColor = 'black';
  button7.style.border='none';
  button7.style.boxShadow='0 0 15px purple';

  const button8 =document.getElementById('button8');
  button8.style.backgroundColor = 'white';
  button8.style.color="white";
  button8.style.backgroundColor = 'black';
  button8.style.border='none';
  button8.style.boxShadow='0 0 15px purple';

  const button9 =document.getElementById('button9');
  button9.style.backgroundColor = 'white';
  button9.style.color="white";
  button9.style.backgroundColor = 'black';
  button9.style.border='none';
  button9.style.boxShadow='0 0 15px purple';

  const button10 =document.getElementById('button10');
  button10.style.backgroundColor = 'white';
  button10.style.color="white";
  button10.style.backgroundColor = 'black';
  button10.style.border='none';
  button10.style.boxShadow='0 0 15px purple';

  const button11 =document.getElementById('button11');
  button11.style.backgroundColor = 'white';
  button11.style.color="white";
  button11.style.backgroundColor = 'black';
  button11.style.border='none';
  button11.style.boxShadow='0 0 15px purple';

  const button12 =document.getElementById('button12');
  button12.style.backgroundColor = 'white';
  button12.style.color="white";
  button12.style.backgroundColor = 'black';
  button12.style.border='none';
  button12.style.boxShadow='0 0 15px purple';

  const button13 =document.getElementById('button13');
  button13.style.backgroundColor = 'white';
  button13.style.color="white";
  button13.style.backgroundColor = 'black';
  button13.style.border='none';
  button13.style.boxShadow='0 0 15px purple';

  const button14 =document.getElementById('button14');
  button14.style.backgroundColor = 'white';
  button14.style.color="white";
  button14.style.backgroundColor = 'black';
  button14.style.border='none';
  button14.style.boxShadow='0 0 15px purple';

  const button15 =document.getElementById('button15');
  button15.style.backgroundColor = 'white';
  button15.style.color="white";
  button15.style.backgroundColor = 'black';
  button15.style.border='none';
  button15.style.boxShadow='0 0 15px purple';

  const button16 =document.getElementById('button16');
  button16.style.backgroundColor = 'white';
  button16.style.color="white";
  button16.style.backgroundColor = 'black';
  button16.style.border='none';
  button16.style.boxShadow='0 0 15px purple';

  const button17 =document.getElementById('button17');
  button17.style.backgroundColor = 'white';
  button17.style.color="white";
  button17.style.backgroundColor = 'black';
  button17.style.border='none';
  button17.style.boxShadow='0 0 15px purple';

  const button18 =document.getElementById('button18');
  button18.style.backgroundColor = 'white';
  button18.style.color="white";
  button18.style.backgroundColor = 'black';
  button18.style.border='none';
  button18.style.boxShadow='0 0 15px purple';

  const button19 =document.getElementById('button19');
  button19.style.backgroundColor = 'white';
  button19.style.color="white";
  button19.style.backgroundColor = 'black';
  button19.style.border='none';
  button19.style.boxShadow='0 0 15px purple';

  const button20 =document.getElementById('button20');
  button20.style.backgroundColor = 'white';
  button20.style.color="white";
  button20.style.backgroundColor = 'black';
  button20.style.border='none';
  button20.style.boxShadow='0 0 15px purple';
});



function changeColor(){
    var button =document.getElementById('buttons').getElementsByTagName('input');
    for(var i=0;i<=button.length;i++){
        button[i].style.backgroundColor='white';
        button[i].style.background='white';
    }
}