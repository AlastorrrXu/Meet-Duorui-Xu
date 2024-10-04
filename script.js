// Function to toggle play/pause and update the record animation
function togglePlay() {
    var audio = document.getElementById("audio");
    var record = document.getElementById("record");

    if (audio.paused) {
        audio.play();
        record.classList.add("spinning");
        console.log("Music is playing and record is spinning");
    } else {
        audio.pause();
        record.classList.remove("spinning");
        console.log("Music is paused and record has stopped spinning");
    }
}

// Ensure event listener is added after DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    var recordContainer = document.querySelector('.vinyl-container');
    recordContainer.addEventListener('click', togglePlay);
});
