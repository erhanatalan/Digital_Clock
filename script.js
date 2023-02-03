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
    setInterval(digitalClock, 1000)
}

const say =  (x) =>{
    if(x < 10){
        x = "0"+x;
    }
    return x; 
} 

digitalClock()