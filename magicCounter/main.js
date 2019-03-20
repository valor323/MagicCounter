$(document).ready(initializeApp)


function initializeApp(){
    addClickHandlerMenu();
    addClickHandlersGame();
    $('.dropdown-trigger').dropdown();
};

//global Variables
let startingLife = null;
let numberOfPlayers = null;
let playerPoisened = null;
let amountPoisened = null;
let player1Poisened = false;
let player2Poisened = false;
let player3Poisened = false;
let player4Poisened = false;


function addClickHandlerMenu(){
    $('.players').on('click', selectNumberOfPlayers)
    $('.life').on('click', selectStartingLife)
    $('.start-match').on('click', setUpPage)
    $('.end-match').on('click', backToMenu)
    $('.menu').on('click', menu)
    $('.poisen-picker-1>li').on('click', poisenPicker1);
    $('.poisen-picker-2>li').on('click', poisenPicker2);
    $('.submit-poisen').on('click', submitPoisen);
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
    if(numberOfPlayers === '2'){
        $('.container').addClass('margin0');
        $('div.player-counter-1').addClass('twoPlayer');
        $('.text-holder-1').addClass('rotate270').addClass('text-1');
        $('.text-holder-2').addClass('rotate90').addClass('text-2');
        $('div.player-counter-2').addClass('twoPlayer');
        $('div.player-counter-3').addClass('none')
        $('div.player-counter-4').addClass('none')
    }
    if(numberOfPlayers === '3'){
        $('div.player-counter-4').addClass('none')
        $('div.player-counter-1').removeClass('col s6').addClass('col s12')
        $('.text-holder-1').addClass('player3');
        $('.container').addClass('margin0');
    }
    if(numberOfPlayers === '4'){
        $('.container').addClass('margin0');
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
    $('.container').removeClass('margin0');
    $('div.player-counter-1').removeClass('twoPlayer');
    $('.text-holder-1').removeClass('rotate270').removeClass('text-1');
    $('.text-holder-2').removeClass('rotate90').removeClass('text-2');
    $('div.player-counter-2').removeClass('twoPlayer');
    $('div.player-counter-3').removeClass('none')
    $('div.player-counter-4').removeClass('none')
    $('div.player-counter-1').removeClass('col s12').addClass('col s6')
    $('.text-holder-1').removeClass('player3');
    if(!$('.poisen-button').hasClass('none')){
        $('.nav-menu').css('width', '9%');
        $('.poisen-button').addClass('none');
        $('.end-match').addClass('none');
    }
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


function menu(){
    if($('.poisen-button').hasClass('none')){
        $('.nav-menu').css('width', '24%');
        $('.poisen-button').removeClass('none');
        $('.end-match').removeClass('none');
    }else{
        $('.nav-menu').css('width', '9%');
        $('.poisen-button').addClass('none');
        $('.end-match').addClass('none');
    }
  
}

function poisenPicker1(){
    $('.poisen-picker-1>li').removeClass('poisen-select');
    playerPoisened = $(this)[0].textContent;
    console.log('playerPoisened', playerPoisened);
    $(this).addClass('poisen-select');
}

function poisenPicker2(){
    $('.poisen-picker-2>li').removeClass('poisen-select');
    amountPoisened = $(this)[0].textContent;
    $(this).addClass('poisen-select');
    console.log('amountPoisened', amountPoisened);
}


function submitPoisen(){
    let poisenDiv = $('<div>').text(amountPoisened).addClass('poisenDisplay');
    let poisenImg = $('<img>',
    {
        class: "poisenImgDisplay",
        src: 'images/poisen counter.svg',
        width: '3vw'
    }
    );
    if(playerPoisened === 'Player 1' && !player1Poisened){
        player1Poisened = true;
        $('.player-counter-1').append(poisenImg).append(poisenDiv);
    }
    if(playerPoisened === 'Player 2' && !player2Poisened){
        player2Poisened = true;
        $('.player-counter-2').append(poisenImg).append(poisenDiv);
    }
    if(playerPoisened === 'Player 3' && !player3Poisened){
        player3Poisened = true;
        $('.player-counter-3').append(poisenImg).append(poisenDiv);
    }
    if(playerPoisened === 'Player 4' && !player4Poisened){
        player4Poisened = true;
        $('.player-counter-4').append(poisenImg).append(poisenDiv);
    }
    if(playerPoisened === 'Player 1' && player1Poisened){
        $('.player-counter-1 > .poisenDisplay').text(amountPoisened);
    }
    if(playerPoisened === 'Player 2' && player2Poisened){
        $('.player-counter-2 > .poisenDisplay').text(amountPoisened);
    }
    if(playerPoisened === 'Player 3' && player3Poisened){
        $('.player-counter-3 > .poisenDisplay').text(amountPoisened);
    }
    if(playerPoisened === 'Player 4' && player4Poisened){
        $('.player-counter-4 > .poisenDisplay').text(amountPoisened);
    }
}

