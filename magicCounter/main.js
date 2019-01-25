$(document).ready(initializeApp)


function initializeApp(){
    addClickHandlerMenu();
    addClickHandlersGame();
};

//global Variables
let startingLife = null;
let numberOfPlayers = null;

function addClickHandlerMenu(){
    $('.players').on('click', selectNumberOfPlayers)
    $('.life').on('click', selectStartingLife)
    $('.start-match').on('click', setUpPage)
    $('.end-match').on('click', backToMenu)
}
function addClickHandlersGame(){
    $('.plus').on('click', increaseLifeTotal)
    $('.minus').on('click', decreaseLifetotal)
}

function setUpPage(){
    setPageBasedOnNumberOfPlayers();
    initializeLifePage();
}


function selectNumberOfPlayers(){

    numberOfPlayers = $(this).attr('players');
    $('.players').css({
        'background-color': '#311b92',
        'color': 'white'
    });
     $(this).css({
         'background-color':'yellow',
         'color': 'black'
        });

}

function setPageBasedOnNumberOfPlayers(){
    debugger;
    if(numberOfPlayers === '2'){
        $('.container').addClass('margin0');
        $('div.player-counter-1').addClass('twoPlayer');
        $('.text-holder-1').addClass('rotate270').addClass('text-1');
        $('.text-holder-2').addClass('rotate90').addClass('text-2');
        // $('.minus').addClass('rotate90')
        // $('div.life-total').addClass('rotate90')
        // $('div.plus').addClass('rotate90');
        $('div.player-counter-2').addClass('twoPlayer');
        $('div.player-counter-3').addClass('none')
        $('div.player-counter-4').addClass('none')
    }
    if(numberOfPlayers === '3'){
        $('div.player-counter-4').addClass('none')
        $('div.player-counter-1').removeClass('col s6').addClass('col s12')
    }

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

function visualizeNumberOfPlayers(){



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

