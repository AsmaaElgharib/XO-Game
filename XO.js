
$(document).ready(function() {
    //tooltip
    $('[data-toggle="tooltip"]').tooltip({
        delay: {show: 1000, hide: 3000},
        html: true,
        placement: 'bottom',
    });
})
var player = 'X';
let gameplayer = document.querySelector('span');
let divs = [];
let winnerText = document.querySelector('.turn');
let resetbtn = document.querySelector('#btn');
// let forPrevent = document.querySelector('.tile');

let game = function (id) {
    let element = document.getElementById(id);
    if(player == 'X' && element.innerHTML== ''){
        element.innerHTML = 'X';
        player = 'O';
        gameplayer.innerHTML = 'O'
        // setInterval(function(){},1000);
    }

    else if(player == 'O' && element.innerHTML== ''){
        element.innerHTML = 'O';
        player = 'X';
        gameplayer.innerHTML = 'X';
    }
    winner();
}
let winner = function(){
    console.log("w");
    for (let i = 1; i < 10; i++) {
        divs[i] = document.getElementById(i).innerHTML;
    }

    if(divs[1] == divs[2] && divs[2] == divs[3] && divs[1] != ''){
        winnerText.innerHTML = ` <b>${divs[1]}</b> is the winner`;
        
    }
    else if(divs[4] == divs[5] && divs[5] == divs[5] && divs[4] != ''){
        winnerText.innerHTML = ` <b>${divs[5]}</b> is the winner`;
    }
    else if(divs[7] == divs[8] && divs[8] == divs[9] && divs[9] != ''){
        winnerText.innerHTML = ` <b>${divs[9]}</b> is the winner`;
    }

    else if(divs[1] == divs[4] && divs[4] == divs[7] && divs[7] != ''){
        winnerText.innerHTML = ` <b>${divs[7]}</b> is the winner`;
    }
    else if(divs[2] == divs[5] && divs[5] == divs[8] && divs[8] != ''){
        winnerText.innerHTML = ` <b>${divs[8]}</b> is the winner`;
    }
    else if(divs[3] == divs[6] && divs[6] == divs[9] && divs[9] != ''){
        winnerText.innerHTML = ` <b>${divs[9]}</b> is the winner`;
    }

    else if(divs[1] == divs[5] && divs[5] == divs[9] && divs[9] != ''){
        winnerText.innerHTML = ` <b>${divs[9]}</b> is the winner...`;
    }
    else if(divs[3] == divs[5] && divs[5] == divs[7] && divs[7] != ''){
        winnerText.innerHTML = ` <b>${divs[7]}</b> is the winner...`;
    }
    // setTimeout(function(){location.reload()}, 3000)
}

