function getId (id) {
    /* console.log("esto es value", document.getElementById(id).value) */
    return document.getElementById(id).value
}

function innerHTML (id, result) {
   /*  console.log("esto es html", document.getElementById(id).innerHTML=result) */
    return document.getElementById(id).innerHTML=result
}

function characterCounter () {

    setInterval(function (){
        var count = getId("text")
        console.log("esto es count", count)
        innerHTML("textView", count.length)
    },1000)
}