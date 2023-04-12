const loading = document.querySelector(".loading")

window.onload = (event) => {
    loading.style.display = "none"
};


const changeNum = document.querySelectorAll(".contentOneBoxerChangeBoxNum")
const changeLine = document.querySelectorAll(".contentOneBoxerChangeBoxLine")
const arr = [
    document.querySelectorAll(".contentOneMiniBox"),
    document.querySelectorAll(".contentTwoMiniBox"),
    document.querySelectorAll(".contentThreeMiniBox")
]

// document.addEventListener("mousemove", (e)=> {
//     console.log(e)
// })


changeNum.forEach((itemOne, indexOne)=> {
    itemOne.onclick = ()=> {
        changeNum.forEach(item=>{
            item.classList.remove("contentOneBoxerChangeBoxBefore")
        })
        arr.forEach((itemArrOne, indexArrOne)=> {
            if(indexOne === indexArrOne) {
                itemArrOne.forEach(itemArrTwo=> {
                    itemArrTwo.style.display = "block"
                })
            } else {
                itemArrOne.forEach(itemArrTwo=> {
                    itemArrTwo.style.display = "none"
                })
            }
        })
        itemOne.classList.toggle("contentOneBoxerChangeBoxBefore")
        changeLine.forEach((itemTwo,indexTwo) => {
            if(indexTwo === indexOne) {
                itemTwo.style.display = "block"
            } else {
                itemTwo.style.display = "none"
            }
        })
    }
})


const headerBox = document.querySelector("header")

window.addEventListener("scroll", ()=> {
    if(window.pageYOffset > 120) {
        headerBox.classList.add("toggleClassHeader");
    } else {
        headerBox.classList.remove("toggleClassHeader");
    }
})

const contentOne = document.querySelector(".contentOne")
const navigationBoxUlList = document.querySelectorAll(".navigationBoxUlList")


console.log(contentOne.clientHeight)

window.addEventListener("scroll", ()=> {
    if(window.pageYOffset > 0 && window.pageYOffset < contentOne.clientHeight-90) {
        navigationBoxUlList.forEach(item=> {
            item.style.background = "nonde"
        }) 
        navigationBoxUlList[0].style.background = "#24c1dd"
    }
})


const cursorOne = document.querySelector(".cursorOne")
const headerLogoBox = document.querySelector(".logoBox")

document.addEventListener("mousemove", (e)=> {
    cursorOne.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;"
})

document.addEventListener("mousemove", (e)=> {
    if(e.target.classList[0] === "navigationBoxUlList") {
        cursorOne.style.background = "gray"
        cursorOne.style.opacity = ".1"
        cursorOne.style.border = "none"
        cursorOne.style.width = "90px"
        cursorOne.style.height = "90px"
        cursorOne.style.transition = ".3s"
    } 
})

document.addEventListener("mousemove", (e)=> {
    if(e.target.classList[0] === "imgLogoBox") {
        cursorOne.style.background = "gray"
        cursorOne.style.opacity = ".1"
        cursorOne.style.border = "none"
        cursorOne.style.width = "90px"
        cursorOne.style.height = "90px"
        cursorOne.style.transition = ".3s"
    } 
})

document.addEventListener("mousemove", (e)=> {
    if(e.target.classList[0] === "navigationBoxUlBurgCursor") {
        cursorOne.style.opacity = ".2"
        cursorOne.style.width = "70px"
        cursorOne.style.height = "70px"
        cursorOne.style.transition = ".3s"
    } 
})

document.addEventListener("mousemove", (e)=> {
    if(e.target.classList[0] === "contentOneJoinUsBoxBttCursor") {
        cursorOne.style.display = "none"
    } 
})

document.addEventListener("mousemove", (e)=> {
    if(e.target.classList[0] === "contentOneIconCursor") {
        cursorOne.style.opacity = ".2"
        cursorOne.style.width = "55px"
        cursorOne.style.height = "55px"
        cursorOne.style.transition = ".3s"
    } 
})

document.addEventListener("mousemove", (e)=> {
    if(e.target.classList[0] === "contentOneBoxerChangeBoxCursor") {
        cursorOne.style.opacity = "0"
        cursorOne.style.width = "60px"
        cursorOne.style.height = "60px"
        cursorOne.style.transition = ".3s"
    } 
})

document.addEventListener("mousemove", (e)=> {
    if(e.pageY > contentOne.clientHeight) {
        cursorOne.style.display = "none"
    }
})
