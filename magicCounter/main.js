$(document).ready(initializeApp)


function initializeApp(){
    addClickHandlers();
};

function addClickHandlers(){
    $('.players').on('click', selectNumberOfPlayers)
    $('.life').on('click', selectNumberOfPlayers)
    $('.start-match').on('click', initializeLifePage)
    $('.end-match').on('click', backToMenu)
}


function selectNumberOfPlayers(){
    $('.players').css({
        'background-color': '#311b92',
        'color': 'white'
    });
    $('.life').css({
        'background-color': '#311b92',
        'color': 'white'
    });
     $(this).css({
         'background-color':'yellow',
         'color': 'black'
        });
}

function initializeLifePage(){
    $('.setup-container').removeClass('visible')
    $('.setup-container').addClass('none')
    $('.life-counter-container').addClass('visible')
}

function backToMenu(){
    $('.life-counter-container').removeClass('visible')
    $('.life-counter-container').addClass('none')
    $('.setup-container').addClass('visible')
    addClickHandlers();
}

