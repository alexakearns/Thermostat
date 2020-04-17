$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature();

    $('#temperature-up').on('click', function() {
        thermostat.up();
        updateTemperature();
    });

    $('#temperature-down').click(function() {
        thermostat.down();
        updateTemperature();
    });

    $('#temperature-reset').click(function() {
        thermostat.resetTemperature();
        updateTemperature();
    });

    $('#powersaving-on').click(function() {
        thermostat.switchPowerSavingModeOn();
        $('#power-saving').text('ON')
        updateTemperature();
    });

    $('#powersaving-off').click(function() {
        thermostat.switchPowerSavingModeOff();
        $('#power-saving').text('OFF')
        updateTemperature();
    });

    function updateTemperature() {
        $('#temperature').text(thermostat.temperature).attr('class', thermostat.energyUsage());
    };

    $('#select-city').submit(function(event) {
        event.preventDefault();
        var city = $('#current-city').val();
        displayWeather(city);
    });

    function displayWeather(city) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
        var token = '&appid=da6424f2d1b1c96b8ad2199aa0ac26e5';
        var units = '&units=metric';
        $.get(url + token + units, function(data) {
            $('#current-temperature').text(data.main.temp);
        });

    };

});
