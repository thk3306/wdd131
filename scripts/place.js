let tempC = 10;
let windSpeedKmh = 5; 

function calculateWindChill(tempC, windSpeedKmh) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windSpeedKmh, 0.16) + 0.3965 * tempC * Math.pow(windSpeedKmh, 0.16);
}

document.addEventListener("DOMContentLoaded", function() {
    const windchillSpan = document.getElementById("windchill");
    let windChillText = "N/A";
    if (tempC <= 10 && windSpeedKmh > 4.8) {
        let windChill = calculateWindChill(tempC, windSpeedKmh);
        windChillText = `${windChill.toFixed(1)}°c`;
    }
    windchillSpan.textContent = windChillText;
});
