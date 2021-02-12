var slider = document.getElementById('rangeslider');
var output = document.getElementById('value');
var views = document.getElementById('views');


slider.oninput = function () {
    output.innerHTML = (this.value * 4.00).toFixed(2);
    if (output.innerHTML == 4.00) {
        views.innerHTML = '1K PAGEVIEWS'
    }
    else if (output.innerHTML == 8.00) {
        views.innerHTML = '10K PAGEVIEWS'
    }
    else if (output.innerHTML == 12.00) {
        views.innerHTML = '50K PAGEVIEWS'
    }
    else if (output.innerHTML == 16.00) {
        views.innerHTML = '100K PAGEVIEWS'
    }
    else if (output.innerHTML == 20.00) {
        views.innerHTML = '250K PAGEVIEWS'
    }
    else if (output.innerHTML == 24.00) {
        views.innerHTML = '500K PAGEVIEWS'
    }
    else if (output.innerHTML == 28.00) {
        views.innerHTML = '750K PAGEVIEWS'
    }
    else if (output.innerHTML == 32.00) {
        views.innerHTML = '1M PAGEVIEWS'
    }

}

slider.addEventListener('mousemove', function () {
    var x = (this.value - this.min) * 100 / (this.max - this.min);
    var color = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + x + '%, hsl(224, 65%, 95%)' + x + '%, hsl(224, 65%, 95%) 100%)';
    slider.style.background = color;
})