// varaibles
// var a=7;
// a=a+1
// var b=6;
// var c='hi';
// console.log(a+b+c)
// console.log(typeof a,typeof b,typeof c)
// const a1=2
// a1=a1+1
// {
//     let a=44;
//     console.log(a)
// }
// console.log(a)
// let x='hello';
// let y=5;
// let z=5.5;
// const p=true;
// let q=undefined;
// let r=null
// console.log(x,y,z,p,q,r)
// console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)
// let h={'name':'ishit','class':12}
// console.log(h)
// h.age=16
// console.log(h)


// if-else
// let age=34;
// if(age>18){
//     console.log('able to vote')
// }
// else if(age==0){
//     console.log('wrong age')
// }
// else{
//     console.log('cannot vote');
// }
// logical operators(&& and,|| or,! not)
// let a=8;
// let b=6;
// let c=b<a?(a-b):(b-a)
/*translates to
if(b<a){
    let c=a-b
}
else{
    let c=b-a    
}
*/
// console.log(c)


// loops
// let a=1;
// for (let i = 0; i < 100; i++) {
//     console.log(a+i)
// }
// let obj={"name":"ishit","class":12}
// for (const key in obj) {
//     const element = obj[key];
//     console.log(key,element)
// }
// for (const c of "ishit") {
//     console.log(c)    
// }
// let i=2
// while (i<5){
//     console.log(i)
//     i++
// }
// do {
//     console.log(i)
//     i++
// } while (i<1);


// functions
// function hi(name) {
//     console.log('hello '+name)
// }
// hi("ishit")
// function add(a,b,c=3) {
//     return a+b+c
// }
// let result=add(2,7)
// console.log(result)
// const fun=(x,y)=>{
//     console.log(x+y)
// }
// fun(10,6)


// string
// let a='name'
// console.log(a.length)
// console.log(a.toLowerCase())
// console.log(a.toUpperCase())
// console.log(a.slice(1,3))
// console.log(a.replace('a','1'))
// console.log(a.concat('hi','bye'))
// // .trim =removes whitespaces

// array
// let arr=[4,8,4,8]
// console.log(arr)
// console.log(arr.toString())
// console.log(arr.join(','))
// delete arr[1]
// let newarr=arr.map((e,index,array)=>{return e**2})



// DOM
// document.title='hello guys'
// document.body.style.backgroundColor='green'
// console.log(document.body.childNodes)
// console.log(document.body.firstElementChild)
// console.log(document.body.childNodes[66].parentElement)
// console.log(document.body.firstElementChild.childNodes)
// console.log(document.body.children)
// let abc = document.getElementsByClassName('RED')
// console.log(abc)
// abc[1].style.backgroundColor='red'
// document.getElementById("name").style.backgroundColor='red'
// document.querySelector(".YELLOW").style.backgroundColor='yellow'
// document.querySelectorAll(".RED").forEach(e=>{
//     e.style.backgroundColor='red'
// })
// let s=document.getElementsByTagName("div")
// console.log(s)
// console.log(s[0].matches("#FIRSTDIV"))
// console.log(s[0].closest("html"))
// console.log(document.querySelector(".RED").contains(s[0]))
// console.log(document.querySelector(".RED").contains(document.querySelector("body")))
// console.log(document.querySelector("body").contains(document.querySelector(".RED")))

// inserting and removing elements
// console.log(document.querySelector(".RED").innerHTML)
// console.log(document.querySelector("body").innerText)
// console.log(document.querySelector(".RED").outerHTML)
// console.log(document.querySelector(".RED").tagName)
// console.log(document.querySelector(".RED").nodeName)
// console.log(document.querySelector(".RED").textContent)
// console.log(document.querySelector("body").hidden)
// console.log(document.querySelector(".RED").innerHTML)
// document.querySelector(".RED").innerHTML='it is changed'
// console.log(document.querySelector(".RED").hasAttribute("class"))
// console.log(document.querySelector(".RED").getAttribute("class"))
// console.log(document.querySelector(".RED").getAttribute("style"))
// document.querySelector(".RED").setAttribute("style","display:flex")
// console.log(document.querySelector(".RED").getAttribute("style"))
// console.log(document.querySelector(".RED").removeAttribute("style"))
// console.log(document.querySelector(".RED").attributes)
// document.designMode='on'
// console.log(document.querySelector(".RED").dataset)
// let div=document.createElement("div")
// div.innerHTML="<h1>hi guys</h1>"
// div.setAttribute("class",'hi')
// document.querySelector('.RED').append(div)
// document.querySelector('.RED').prepend(div)
// document.querySelector('.RED').before(div)
// document.querySelector('.RED').after(div)
// document.querySelector('.RED').replaceWith(div)
// let con=document.querySelector(".RED")
// con.insertAdjacentHTML("afterbegin","<h1>hi guys</h1>")
// con.insertAdjacentHTML("beforeend","<h1>hi guys</h1>")
// con.insertAdjacentHTML("afterend","<h1>hi guys</h1>")
// con.insertAdjacentHTML("beforebegin","<h1>hi guys</h1>")
// document.querySelector(".RED").remove()
// console.log(document.querySelector(".red").classList)
// console.log(document.querySelector(".red").className)
// document.querySelector(".red").classList.add("blue")
// document.querySelector(".red").classList.remove("blue")
// document.querySelector(".red").classList.toggle("blue")

// //extras
// let boxes=document.querySelector("body").children
// function getrandomcolor(){
//     let v1=Math.ceil(Math.random()*255)
//     let v2=Math.ceil(Math.random()*255)
//     let v3=Math.ceil(Math.random()*255)
//     return `rgb(${v1},${v2},${v3})`
// }
// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor=getrandomcolor()
//     e.style.color=getrandomcolor()
// })

// events
// let button=document.getElementById("btn")
// button.addEventListener('click',()=>{alert("clicked")})
// button.addEventListener('dblclick',()=>{alert("double clicked")})
// button.addEventListener('contextmenu',()=>{alert("right clicked")})
// document.addEventListener('keydown',(e)=>{
//     console.log(e,e.key,e.keyCode)
// })

// event bubbling
// document.querySelector(".RED").addEventListener('click',(e)=>{e.stopPropagation();alert("red clicked")})
// document.querySelector(".YELLOW").addEventListener('click',(e)=>{e.stopPropagation();alert("yellow clicked")})
// document.querySelector("body").addEventListener('click',(e)=>{e.stopPropagation();alert("body clicked")})
// // also has removeevent listener
// a=setInterval(() => {
//     alert("clicked")
// }, 5000);
// clearInterval(a)
// a=setTimeout(() => {
//     alert("clicked")
// }, 5000);
// clearTimeout(a)

// callbacks and promises
// const callback=(arg)=>{console.log(arg)}
// const loadscript=(src,callback)=>{
//     let sc=document.createElement("script");
//     sc.src=src;
//     sc.onload=callback("hi");
//     document.head.append(sc);
// }
// loadscript('https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js',callback)
// let prom1 = new Promise((resolve, reject) => {
//     let r=Math.random()
//     if (r<0.5){
//         reject('no')
//     }
//     else {
//     setTimeout(() => {
//         console.log('done')
//         resolve('ok')
//     }, 3000);
// }
// })
// prom1.then((a) => {
//     console.log(a);
// }).catch((err)=>{console.log(err)})

// let prom1 = new Promise((resolve, reject) => {
//     let r = Math.random()
//     if (r < 0.5) {
//         reject('no')
//     }
//     else {
//         setTimeout(() => {
//             console.log('done')
//             resolve('ok')
//         }, 3000);
//     }
// })
// let prom2 = new Promise((resolve, reject) => {
//     let b = Math.random()
//     if (b < 0.5) {
//         reject('no 2')
//     }
//     else {
//         setTimeout(() => {
//             console.log('done 2')
//             resolve('ok 2')
//         }, 2000);
//     }
// })
// // prom3 = Promise.all([prom1, prom2])
// // prom3=Promise.allSettled([prom1,prom2])
// // prom3=Promise.race([prom1,prom2])
// prom3=Promise.any([prom1,prom2])
// prom3.then((a) => {
//     console.log(a);
// }).catch((err) => { console.log(err) })

// async and await
// async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(453)
//         }, 3500);
//     })
// }
// async function getdata() {
//     // simulating getting data from server
//     // let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // let data = await x.text()
//     let x=await fetch('https://jsonplaceholder.typicode.com/posts', {
//                     method: 'POST',
//                     body: JSON.stringify({
//                         title: 'foo',
//                         body: 'bar',
//                         userId: 1,
//                     }),
//                     headers: {
//                         'Content-type': 'application/json; charset=UTF-8',
//                     },
//                 })
//     let data = await x.json()
//     console.log(data);
//     return 453
// }
// async function main() {
//     console.log('loading');
//     console.log('something else');
//     console.log('load data');
//     let data = await getdata();
//     console.log(data);
//     console.log('process data');
//     console.log('task 2');
// }
// main()
// data.then((v) => {
//     console.log(data);
//     console.log('process data');
//     console.log('task 2');
// })

// catching errors
// let a=prompt("enter a first number");
// let b=prompt("enter a second number");
// if (isNaN(a) ||  isNaN(b)) {
//     throw SyntaxError('enter a number');
// }
// let sum=parseInt(a)+parseInt(b);
// console.log(sum);
// try {
//     console.log(sum*x);
    
// } catch (error) {
//     console.log('error');
    
// }
// finally{
//     console.log("files are closed");
// }

// object oriented programming
// let obj={
    // a:1,b:"hi"
// }
// console.log(obj);
// let animal={"eats":true}
// let rabbit={"jumps":true}
// rabbit.__proto__=animal
// class animal{
//     constructor(name){
//         this.name=name
//         console.log('created');
//     }
//     eats(){console.log('eating');}
//     jumps(){console.log('jumping');}
// }
// let a=new animal("bunny")
// console.log(a);
// class lion extends animal{
//     constructor(name){
//         super(name)
//         console.log("lion is created")
//     }
//     eats(){
//         super.eats()
//         console.log('eating deer');}

// }
// let l=new lion("lion")
// console.log(l);
// console.log(l instanceof lion);
// console.log(l instanceof animal);
// console.log(a instanceof lion);






































































