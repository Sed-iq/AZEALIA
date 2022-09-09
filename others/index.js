 
            

setInterval(function(){
 
let arr = ['Evolution', 'orbit', 'Visual', 'Revolve', 'wheel', 'vibration', 'Brand'];
let b = arr[Math.floor(Math.random(arr) * 7)];
document.getElementById('change').textContent = b; 
b.style.transition = '2s';

}, 1000);
 
function read(){

let read1 = document.getElementById('read').innerHTML;
 
let speak = new SpeechSynthesisUtterance(); 
speak.text = read1; 
window.speechSynthesis.speak(speak); 
 
}
 
function read22(){
 let lar = document.getElementById('reada').innerHTML;
 
let spk = new SpeechSynthesisUtterance(); 
 spk.text = lar; 
 
window.speechSynthesis.speak(spk); 
 
}
 