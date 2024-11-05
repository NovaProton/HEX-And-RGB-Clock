let clock, colorHex, colorRgb;
clock = document.getElementById('clock');
colorHex = document.getElementById('color-hex');
colorRgb = document.getElementById('color-rgb');

function updateClock() {
    let time = new Date();
    let hours = time.getHours().toString().padStart(2, '0');
    let minutes = time.getMinutes().toString().padStart(2, '0');
    let seconds = time.getSeconds().toString().padStart(2, '0');
    let units = [hours, minutes, seconds];
    
    let hexColor = `#${hours}${minutes}${seconds}`;
    let rgbColor = `rgb(${parseInt(hours)}, ${parseInt(minutes)}, ${parseInt(seconds)})`;
    
    clock.textContent = `${hours}:${minutes}:${seconds}`;
    colorHex.textContent = hexColor;
    colorRgb.textContent = rgbColor;
    document.querySelector('.hex-content').style.backgroundColor = hexColor;
    document.querySelector('.rgb-content').style.backgroundColor = rgbColor;
}

setInterval(updateClock, 1000);
