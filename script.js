const date = document.querySelector(".date")
const time = document.querySelector(".time")
const gun = document.querySelector(".gun")


const digitalClock = () => {

    let now = new Date()
    let guun = now.toLocaleDateString().split("/")[1]
    let ay = now.toLocaleDateString().split("/")[0]
    let yil = now.toLocaleDateString().split("/")[2]
    date.innerHTML = say(guun) + " " + say(ay) + ' ' + yil

    const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    gun.innerHTML = gunler[now.getDay()];

    time.innerHTML = say(now.toLocaleTimeString());
}

const say = (x) => {
    if (x < 10) {
        x = "0" + x;
    }
    return x;
}


const tiktak = () => {
    const tik = new Audio('tik.wav')
    tik.play()
}

setInterval(tiktak, 60000)
tiktak()
setInterval(digitalClock, 1000)
digitalClock()