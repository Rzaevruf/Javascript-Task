let BtnMinus = document.getElementById("BtnMinus")
let BtnPlus = document.getElementById("BtnPlus")

let ImpNumber = document.getElementById("ImpNumber")

ImpNumber.value = 1

ImpNumber.addEventListener("input", () => {
    typeof ImpNumber.value==='number'
    
    if (ImpNumber.value>15) {
        console.log(ImpNumber.value)
        ImpNumber.value=15
        return
    }

    
    if (ImpNumber.value<1) {
        console.log(ImpNumber.value)
        ImpNumber.value=1
        return
    }

    if(!Number(ImpNumber.value)){
        console.log(ImpNumber.value)
        console.log(typeof ImpNumber.value)
        ImpNumber.value=1
        return
    }
    



}

)



BtnMinus.addEventListener("click", () => {
    if (ImpNumber.value > 1) {
        ImpNumber.value--
    }

}
)

BtnPlus.addEventListener("click", () => {
    if (ImpNumber.value < 20) {
        ImpNumber.value++
    }
}
)