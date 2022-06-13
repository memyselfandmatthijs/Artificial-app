<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=	, initial-scale=1.0">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/hexBtns.css') }}" rel="stylesheet">
    <title>Document</title>
</head>
<body class="bg-background-cl px-7">
    @include('layouts.navbar')

    <h1 class="text-2xl text-white text-center"> Welkom! </h1>
    <br>
    <p class="text-sm text-white text-center">
        Wist jij dat Rotterdam al veel doet op het gebied van Duurzaamheid?
        <br>
        <br>
        Klik op de onderstaande knoppen om de initiatieven van de gemeente rotterdam te zien. Maar ook de locale producten, geschiedenis van de locatie van Kunststroom en tips over hoe jij duurzaam bezig kan zijn. 
        <br>
        <br>
        Vergeet natuurlijk het belangrijkste niet... Op de laatste pagina kan je informatie vinden over Artificial en waar wij voor staan.
    </p> 

    <div class="parent">
    <img class="bgImg" src="{{asset('../img/allImages.png')}}" alt="buttons">

        <a class="hexButton btnA" href ="{{url('feed')}}">
        <a class="hexButton btnB" href ="{{url('tips')}}">
        <a class="hexButton btnC" href ="{{url('tips')}}">
        <a class="hexButton btnD" href ="{{url('tips')}}">
        <a class="hexButton btnE" href ="{{url('tips')}}">
        <a class="hexButton btnF" href ="{{url('aboutUs')}}">
        <a class="hexButton btnG" href ="{{url('tips')}}">
    </div>
</body>
</html>

