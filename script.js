window.onload = function () {
    initPage();
}
let timekeeper = 3;
let elmChanging = 0 //0-4
let initPage = async function () {
    setTimeout(function () {
        if (elmChanging > 3) {
            elmChanging = 0;
        }
        if (timekeeper < 100 || elmChanging != 0) {
            console.log("elm: " + elmChanging);
            document.querySelector(".a"+elmChanging).textContent = Math.round(Math.random()*26).toString(26).toUpperCase()[0]
            timekeeper = timekeeper * 1.04;
            console.log(timekeeper);
            elmChanging += 1;
            initPage();
        }
        else{
            setTimeout(()=>{
            for (let i = 0; i < 4; i++) {
                setTimeout(() => {
                    document.querySelector(".a"+i).textContent = "ABHI"[i]
                }, i*250);
            }},100);
        } 
    }, timekeeper);
}
let refresh = function(){
    window.location.reload();
}
