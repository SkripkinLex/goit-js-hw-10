import{s as a}from"./assets/x-octagon-85564809.js";import{i as t}from"./assets/vendor-77e16229.js";const n="/goit-js-hw-10/assets/check-circle-286069d5.svg",c=document.querySelector(".form");console.log(c);c.addEventListener("submit",f);function f(o){o.preventDefault();const s=o.target.delay.value,l=o.target.state.value,r=new Promise((e,i)=>{setTimeout(()=>{l==="fulfilled"?e(s):i(s)},s)});r.then(e=>{t.success({message:`Fulfilled promise in ${e}ms`,messageSize:"16",messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#326101",iconColor:"#fff",iconUrl:a})}).catch(e=>{t.error({message:`Rejected promise in ${e}ms`,messageSize:"16",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#ffbebe",iconUrl:n,iconColor:"#fff"})}),console.log(r)}
//# sourceMappingURL=commonHelpers2.js.map