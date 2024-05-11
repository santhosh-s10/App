let countdownInterval;

function startCountdown() {
    const countdownDate = new Date(document.getElementById("countdown-date").value).getTime();

    if (isNaN(countdownDate)) {
        alert("Please enter a valid date.");
        return;
    }

    countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = formatTime(days);
        document.getElementById("hours").innerHTML = formatTime(hours);
        document.getElementById("minutes").innerHTML = formatTime(minutes);
        document.getElementById("seconds").innerHTML = formatTime(seconds);

        if (distance < 0) {
            clearInterval(countdownInterval);
            Swal.fire({
                title: "The countdown is over!",
                showConfirmButton: true,
                confirmButtonText: "Reset",
                allowOutsideClick: false
            }).then((result) => {
                if (result.isConfirmed) {
                    resetCountdown();
                }
            });
            resetCountdown();
        }
    }, 0);
}

function stopCountdown() {
    clearInterval(countdownInterval);
}

function resetCountdown() {
    clearInterval(countdownInterval);
    document.getElementById("countdown-date").value = "";
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}