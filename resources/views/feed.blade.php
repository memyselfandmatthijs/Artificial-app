<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
    <script defer type="text/javascript" src="{{ asset('../js/charts.js') }}"></script>
    
</head>
<body class="bg-background-cl px-7">
@include('layouts.navbar')

<div class="bg-black">
    <br>
    <br>
    <br>
    <p class="text-white text-center">Video placeholder</p>
    <br>
    <br>
    <br>
</div>
<br>
<canvas id="daily" class="bg-white px-5" width="300" height="200"> </canvas>
<br>
<canvas id="weekly" class="bg-white px-5" width="300" height="200"> </canvas>
    
</body>
</html>