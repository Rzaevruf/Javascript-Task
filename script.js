let BtnMinus = document.getElementById("BtnMinus")
let BtnPlus = document.getElementById("BtnPlus")

let ImpNumber = document.getElementById("ImpNumber")


ImpNumber.addEventListener("input", () => {
    
    if (ImpNumber.value>20) {
        console.log(ImpNumber.value)
        ImpNumber.value=20
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