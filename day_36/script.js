//Alarm Clock. Play sound after given time
async function playAudio() {
    
    async function alarm() {
        let time = document.getElementById("time").value;                       // Get time 
        let timeUnit = document.getElementById("timeUnit").value;              // Get time unit(minutes or seconds)

        let timeInSeconds;
        if (timeUnit === "minutes"){
            timeInSeconds = parseInt(time) * 60; 
        } else if (timeUnit === "seconds"){
            timeInSeconds = parseInt(time); 
        }
 
        if (isNaN(timeInSeconds) || timeInSeconds <= 0){                        // Check if the input is a number
            alert("Please enter a valid number for the time.");
            return;
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                var audio = document.getElementById("myAudio");
                audio.play();
                resolve("Alarm played");
            }, timeInSeconds * 1000); 
        });
    }

    let x = await alarm(); 
}