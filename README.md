<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <script src="jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="XO.css">
</head>
<body>
     

<br>
    <section class="turn">
        <span>X</span> 's turn
    </section>
    <div class="game">
        <span class="tile" id="1" onclick="game(this.id)"></span>
        <span class="tile" id="2" onclick="game(this.id)"></span>
        <span class="tile" id="3" onclick="game(this.id)"></span>

        <span class="tile" id="4" onclick="game(this.id)"></span>
        <span class="tile" id="5" onclick="game(this.id)"></span>
        <span class="tile" id="6" onclick="game(this.id)"></span>

        <span class="tile" id="7" onclick="game(this.id)"></span>
        <span class="tile" id="8" onclick="game(this.id)"></span>
        <span class="tile" id="9" onclick="game(this.id)"></span>

        <button type="Reset" onclick="setTimeout(function(){location.reload()}, 3000)" 
        class="btn btn-outline-danger" data-toggle="tooltip" title="<b>Reset</b> the game">Reset</button>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="./XO.js"></script>
</body>
</html>
