let time = 1500;
let timer;

function startTimer(){

    clearInterval(timer);

    timer = setInterval(()=>{

        let m = Math.floor(time/60);
        let s = time%60;

        document.getElementById("timer").innerHTML =
        String(m).padStart(2,'0') + ":" +
        String(s).padStart(2,'0');

        if(time<=0){
            clearInterval(timer);
            alert("🎉 Study Session Completed!");
        }

        time--;

    },1000);

}

function resetTimer(){

    clearInterval(timer);

    time = 1500;

    document.getElementById("timer").innerHTML="25:00";

}

function addTask(){

    let input=document.getElementById("taskInput");

    if(input.value=="") return;

    let li=document.createElement("li");

    li.innerHTML=
    `<span>${input.value}</span>
     <input type="checkbox" onchange="progress()">`;

    document.getElementById("taskList").appendChild(li);

    input.value="";

    progress();

}

function progress(){

    let total=document.querySelectorAll("#taskList input").length;

    let done=document.querySelectorAll("#taskList input:checked").length;

    let percent=0;

    if(total>0)
        percent=(done/total)*100;

    document.getElementById("bar").style.width=percent+"%";

}
const player = document.getElementById("musicPlayer");

function playMusic(type){

    if(type=="rain"){
        player.src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
    }

    else if(type=="ocean"){
        player.src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";
    }

    else if(type=="cafe"){
        player.src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3";
    }

    player.play();

}

function stopMusic(){

    player.pause();
    player.currentTime=0;

}
function toggleTheme(){

    document.body.classList.toggle("dark");

    let btn=document.getElementById("themeBtn");

    if(document.body.classList.contains("dark")){
        btn.innerHTML="☀️ Light Mode";
    }
    else{
        btn.innerHTML="🌙 Dark Mode";
    }

}
const quotes=[

"Success is the sum of small efforts repeated daily.",

"Dream big. Start small. Act now.",

"Discipline beats motivation.",

"Believe in yourself and all that you are.",

"Small progress is still progress.",

"The future depends on what you do today.",

"Consistency creates success."

];

function showQuote(){

    let random=Math.floor(Math.random()*quotes.length);

    document.getElementById("quote").innerHTML=quotes[random];

}

showQuote();
let points = Number(localStorage.getItem("points")) || 0;
let rewardDate = localStorage.getItem("rewardDate");

document.getElementById("points").innerHTML = "⭐ Points: " + points;

checkReward();

function claimReward(){

    let today = new Date().toDateString();

    if(rewardDate === today){
        alert("🎉 You have already claimed today's reward!");
        return;
    }

    points += 20;

    localStorage.setItem("points", points);

    localStorage.setItem("rewardDate", today);

    document.getElementById("points").innerHTML =
    "⭐ Points: " + points;

    document.getElementById("claimBtn").disabled = true;

    document.getElementById("claimBtn").innerHTML =
    "✅ Claimed Today";

    alert("🎁 You earned 20 points!");
}

function checkReward(){

    let today = new Date().toDateString();

    if(rewardDate === today){

        document.getElementById("claimBtn").disabled = true;

        document.getElementById("claimBtn").innerHTML =
        "✅ Claimed Today";
    }
}
// Load saved mood
let savedMood = localStorage.getItem("mood");

if(savedMood){
    showMood(savedMood);
}

function setMood(mood){

    localStorage.setItem("mood", mood);

    showMood(mood);
}

function showMood(mood){

    document.getElementById("selectedMood").innerHTML = mood;

    let message = "";

    if(mood === "😊 Happy"){
        message = "Keep up the positive energy! 🌟";
    }
    else if(mood === "😎 Motivated"){
        message = "You're ready to achieve today's goals! 💪";
    }
    else if(mood === "😴 Tired"){
        message = "Take a short break, then come back stronger. ☕";
    }
    else if(mood === "😔 Stressed"){
        message = "Try a 5-minute breathing break before studying. 🌿";
    }
    else{
        message = "Every study session counts. Keep going! 📚";
    }

    document.getElementById("moodMessage").innerHTML = message;
}