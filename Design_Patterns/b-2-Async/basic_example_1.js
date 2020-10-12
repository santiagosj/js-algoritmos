const uno = () => {
    console.log("uno") 
}

const dos = () => {
    setTimeout(()=>{
        console.log("ahá!")
    },2000)
    console.log("dos")
}

const tres = () => {
    console.log("tres")
}

uno()
dos()
tres()