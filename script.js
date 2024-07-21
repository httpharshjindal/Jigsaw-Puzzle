
var startbtn = document.querySelector("#startbtn")
var changebtn = document.querySelector("#changebtn")

var imgs = document.querySelectorAll("#img img")    
var moves = document.querySelector("#score h1 span")
var timerel = document.querySelector("#timer span")
var result = document.querySelector("#result")
var restext = document.querySelector("#restext")
var resmoves = document.querySelector("#resmoves span")

var arr = []
var verifyarr =[]
var verifycounter = 0;
var count=0;
var timer
var toggleres = 0
var timerinterval 
var imgarr = [];
var puzznum = 0;
var started = 0;
var whiteelem;
var arrimg =[]

function changepattern(num){
    arrimg = [
        {index:0, src:`img/puz${num +1 }/image_part_001.jpg` , srclong:`http://127.0.0.1:5500/img/puz${num + 1}/image_part_001.jpg`},
        {index:1, src:`img/puz${num + 1 }/image_part_002.jpg` , srclong:`http://127.0.0.1:5500/img/puz${num + 1}/image_part_002.jpg`},
        {index:2, src:`img/puz${num + 1 }/image_part_003.jpg` , srclong:`http://127.0.0.1:5500/img/puz${num + 1}/image_part_003.jpg`},
        {index:3, src:`img/puz${num + 1 }/image_part_004.jpg` , srclong:`http://127.0.0.1:5500/img/puz${num + 1}/image_part_004.jpg`},
        {index:4, src:`img/puz${num + 1 }/image_part_005.jpg` , srclong:`http://127.0.0.1:5500/img/puz${num + 1}/image_part_005.jpg`},
        {index:5, src:`img/puz${num + 1 }/image_part_006.jpg` , srclong:`http://127.0.0.1:5500/img/puz${num + 1}/image_part_006.jpg`},
        {index:6, src:`img/puz${num + 1 }/image_part_007.jpg` , srclong:`http://127.0.0.1:5500/img/puz${num + 1}/image_part_007.jpg`},
        {index:7, src:`img/puz${num + 1 }/image_part_008.jpg` , srclong:`http://127.0.0.1:5500/img/puz${num + 1}/image_part_008.jpg`},
        {index:8, src:`img/puz${num + 1 }/white.png`, srclong:`http://127.0.0.1:5500/img/puz${num + 1}/white.png`},
    ]
    puzznum = num;
    imgarr = arrimg;
    imgs.forEach(function(elem,index){
        elem.src = imgarr[index].src
    })
}

function timerfun(){
    timerinterval = setInterval(function(){
        verify();
        timerel.textContent = timer;
        timer--;
        started = 1
    },1000)
    
}

function whiteboxfind(){
    imgs.forEach(function(elem){
            if(elem.src == `http://127.0.0.1:5500/img/puz${puzznum + 1 }/white.png`){
                whiteelem = elem
            }   
    })
}


function verify(){
    console.log(verifycounter)
    verifycounter = 0
    imgs.forEach(function(elem,index){
        if(elem.src === imgarr[index].srclong){
            verifycounter++
        }

    }) 
    if(verifycounter == 9){
        clearInterval(timerinterval)
            restext.textContent = "Congratulations! You Won😎"
            result.classList.toggle("hidden")
            restext.classList.replace("text-5xl", "text-2xl")
            resmoves.textContent = count;
            startbtn.textContent ="Restart..."
            toggleres = 1
    }

    if(timer<0){   
        clearInterval(timerinterval)
        result.classList.toggle("hidden");
        startbtn.textContent ="Restart..."
        resmoves.textContent = count;
        toggleres = 1
    }

}

imgs.forEach(function(elem, index){
    elem.addEventListener("click",function(){
        whiteboxfind();
        moves.textContent = ++count
        temp = whiteelem.src
        whiteelem.src = elem.src
        elem.src = temp
    })  
})


startbtn.addEventListener("click", function(){
    if(toggleres == 1){
        result.classList.toggle("hidden")
        toggleres = 0;
        startbtn.textContent ="Start"
    }     
    clearInterval(timerinterval)
    startbtn.textContent ="Start"
    moves.textContent = 0;
    count=0;
    timer=60;
    verifycounter = 0;
    arr = [];
    imgs.forEach(function(elem,index){
        var ind = Math.floor(Math.random() * 9)
        arr.push(ind);
        for(let i = 0; i<arr.length ; i++){
            var flag = true
            // console.log(i)

            for(var j = 0; j<arr.length; j++){
                // console.log(j)
                flag = true;
                while(flag){
                    if(arr[i] == arr[j] && j != i){
                        var ind = Math.floor(Math.random() * 9)
                        arr[i] = ind;
                        j=0;
                    }
                    else{
                        flag = false;
                    }
                }
            
            }
        }
    })
    imgs.forEach(function(elem,index){
        elem.src = imgarr[arr[index]].src
    })
    timerfun()
});



changebtn.addEventListener("click",function(){
    if(started){
        location.reload()
        started = 0;
    }
    else{
        changepattern(Math.floor(Math.random() * 4));
    }
    
})

changepattern(0)























//     if(i == 0){
            //         imgs[i + 2].classList.add("pointer-events-none")
            //         imgs[i + 3].classList.add("pointer-events-none")
            //         imgs[i + 4].classList.add("pointer-events-none")
            //         imgs[i + 5].classList.add("pointer-events-none")
            //         imgs[i + 6].classList.add("pointer-events-none")
            //         imgs[i + 7].classList.add("pointer-events-none")
            //         imgs[i + 8].classList.add("pointer-events-none") 
            //     }

            //     else if(i == 1){
            //         imgs[i + 2].classList.add("pointer-events-none")
            //         imgs[i + 4].classList.add("pointer-events-none")
            //         imgs[i + 5].classList.add("pointer-events-none")
            //         imgs[i + 6].classList.add("pointer-events-none")
            //         imgs[i + 7].classList.add("pointer-events-none")
            //     }
            //     else if(i == 2){
            //         imgs[i + 1].classList.add("pointer-events-none")
            //         imgs[i + 2].classList.add("pointer-events-none")
            //         imgs[i + 4].classList.add("pointer-events-none")
            //         imgs[i + 5].classList.add("pointer-events-none")
            //         imgs[i + 6].classList.add("pointer-events-none")
            //         imgs[i - 2].classList.add("pointer-events-none")

            //     }
            //     else if(i == 3){
            //         imgs[i + 2].classList.add("pointer-events-none")
            //         imgs[i + 4].classList.add("pointer-events-none")
            //         imgs[i + 5].classList.add("pointer-events-none")
            //         imgs[i - 2].classList.add("pointer-events-none")
            //         imgs[i - 1].classList.add("pointer-events-none")
            //     }
            //     else if(i == 4){
            //         imgs[i + 2].classList.add("pointer-events-none")
            //         imgs[i - 2].classList.add("pointer-events-none")
            //         imgs[i + 4].classList.add("pointer-events-none")
            //         imgs[i - 4].classList.add("pointer-events-none")
            //     }
            //     else if(i == 5){
            //         imgs[i + 2].classList.add("pointer-events-none")
            //         imgs[i + 1].classList.add("pointer-events-none")
            //         imgs[i - 4].classList.add("pointer-events-none")
            //         imgs[i - 5].classList.add("pointer-events-none")
            //         imgs[i - 2].classList.add("pointer-events-none")
            //     }
            //     else if(i == 6){
            //         imgs[i + 2].classList.add("pointer-events-none")
            //         imgs[i - 2].classList.add("pointer-events-none")
            //         imgs[i - 4].classList.add("pointer-events-none")
            //         imgs[i - 5].classList.add("pointer-events-none")
            //         imgs[i - 6].classList.add("pointer-events-none")
            //         imgs[i - 1].classList.add("pointer-events-none")
            //     }
            //     else if(i == 7){
            //         imgs[i - 2].classList.add("pointer-events-none")
            //         imgs[i - 4].classList.add("pointer-events-none")
            //         imgs[i - 5].classList.add("pointer-events-none")
            //         imgs[i - 6].classList.add("pointer-events-none")
            //         imgs[i - 7].classList.add("pointer-events-none")
            //     }
            //     else if(i == 8){
            //         imgs[i - 2].classList.add("pointer-events-none")
            //         imgs[i - 4].classList.add("pointer-events-none")
            //         imgs[i - 5].classList.add("pointer-events-none")
            //         imgs[i - 6].classList.add("pointer-events-none")
            //         imgs[i - 7].classList.add("pointer-events-none")
            //         imgs[i - 8].classList.add("pointer-events-none")
            //     }