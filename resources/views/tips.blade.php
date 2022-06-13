<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <title>Tips Page</title>
</head>
<body class="bg-background-cl px-7">
@include('layouts.navbar')

<h1 class="text-3xl text-white text-center">Duurzame informatie voor jou!</h1>

<p class="text-white text-center" >Welkom bij kunststroom</p>
<br>
{{-- de 10 van 010 --}}
    <button id="thuisButton" class="text-white text-center">De 10 van 010 ▾</button>
        <div id="thuis" class="hidden">
            @include('tips.metselbij')
            <br>
            @include('tips.zanglijster')
            <br>
            @include('tips.laatvlieger')
            <br>
            @include('tips.zoeteKers')
            <br>
            @include('tips.zwanenbloem')
            <br>
            @include('tips.egel')
            <br>
            @include('tips.vuurvlinder')
            <br>
            @include('tips.varen')
            <br>
            @include('tips.snoek')
            <br>
            @include('tips.vos')
            <br>
        </div>
<br>
{{-- Geschiedenis --}}
    <button id="dagelijksButton" class="text-white text-center">Geschiedenis van de lijnbaan en kunststroom ▾</button>
        <div id="dagelijks" class="hidden">
            @include('tips.geschiedenis')
        </div>
<br>
{{-- Tips --}}
    <button id="alternatiefButton" class="text-white text-center">Tips voor jou! ▾</button>
        <div id="alternatief" class="hidden">
            @include('tips.tips')
        </div>
<script type="text/javascript" src="{{asset('js/tips.js')}}"></script>
</body>
</html>
