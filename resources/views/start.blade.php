<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <title>Home</title>
</head>
<body class="bg-background-cl px-7">

    <div>
        <br>
        <br>
        <img src="{{asset('../img/logoWit.png')}}" alt="logo" class="my-15" >
    </div>

    <br>
    <br>

    <h1 class="text-3xl text-white text-center">Hey pik!</h1>

    <p class="text-white text-center" >Welkom bij kunststroom</p>
    <br>
    <p class="text-white text-center">Kunststroom is een project waarmee de biodiversiteit gestimuleerd word om terug te keren naar de binnenstad van Rotterdam. </p>
    <br>
    
    <a class="" href="{{url('home')}}">
        <img class="" src="{{asset('../img/kunstStroom.png')}}" alt="logo" width="50%">
        <p class="text-xl mx-auto">Kunststroom</p>
    </a>

</body>
</html>

