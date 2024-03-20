const tabBtn = document.querySelectorAll(".tabs__nav");
const tabItems = document.querySelectorAll(".tabs__item");

tabBtn.forEach(function(item){
    item.addEventListener("click",function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if(!currentBtn.classList.contains("active")){
            tabBtn.forEach(function(item){
            item.classList.remove("active");
        });
        tabItems.forEach(function(item){
            item.classList.remove("active");
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
        };
    });
});

document.querySelector(".tabs__nav").click();

let checkbox = document.getElementById('one');  // урок 1
function fun1(){
if(checkbox.checked){
    alert('Выбран');
}
else{
    alert('Не выбран')
}
}

/* Radio */
let radio = document.getElementsByName("radio");
function fun2(){
    for(let i = 0; i < radio.length; i++ ){
        if (radio[i].checked){
            alert('Выбран ' + i + ' элемент')
        }
    }

}

/* Select */
function fun3() {
    let sel = document.getElementById('mySelect').selectedIndex;
    let options = document.getElementById('mySelect').options;
    alert('Выбрана опция ' + options[sel].text);
}

/* Range1 */
// function fun4(){
//     let range = document.getElementById("myRange");
//     let p = document.getElementById("one");
//     p.innerHTML = range.value;
// }

/* Range2 */
function fun5(){
    let range2 = document.getElementById("range2");
    let i2 = document.getElementById("two");
    i2.value = range2.value;
}

/*Example */
function fun6() {
    let test = document.getElementById("example");
    let range = document.getElementById("myRange");
    test.style.width = range.value + 'px';
}




// <---->



AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 2, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
