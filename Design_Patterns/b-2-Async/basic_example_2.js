const uno = () => {
    return "uno"
}

/*const dos = () => {
    setTimeout(()=>{
        return "dos"
    },2000)
}*/

const dos = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("dos")
        },2000)
    })
}


const tres = () => {
    return "tres"
}

const callMe = async () => {
   let valOne = uno()
   console.log(valOne)

   let valTwo = await dos()
   console.log(valTwo)

   let valThree = tres()
   console.log(valThree)
}

callMe()