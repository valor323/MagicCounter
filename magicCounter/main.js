$(document).ready(initializeApp)


function initializeApp(){
    addClickHandlers();
};

//global Variables
let startingLife = null;

function addClickHandlers(){
    $('.players').on('click', selectNumberOfPlayers)
    $('.life').on('click', selectStartingLife)
    $('.start-match').on('click', initializeLifePage)
    $('.end-match').on('click', backToMenu)
    $('.plus').on('click', increaseLifeTotal)
    $('.minus').on('click', decreaseLifetotal)
}


function selectNumberOfPlayers(){
    $('.players').css({
        'background-color': '#311b92',
        'color': 'white'
    });
     $(this).css({
         'background-color':'yellow',
         'color': 'black'
        });
}

function selectStartingLife(){

    startingLife = $(this).attr("life");
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
    $('.life-total').text(startingLife)
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

function increaseLifeTotal(){
    let parentElement = $(this).parent().find('div')[1]
    let playersLife = $(this).parent().find('div')[1].innerText
    playersLife++
    $(parentElement).text(playersLife)
    
}

function decreaseLifetotal(){
    let childElement = $(this).next()[0]
    let playersLife =  $(this).next()[0].innerText
    playersLife--
    $(childElement).text(playersLife)
}

