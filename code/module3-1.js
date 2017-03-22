<!doctype html>
<html>
    
    <head>
        <meta charset="utf-8">
        <title>STFP</title>

        <script src="../../src/gladiator.js"></script>
        <script src="js/stfp-lib.js"></script>
        <script src="js/stfp.js"></script>
        <script src="js/stfp-scenes.js"></script>

        <style>
            .ge-mainscreen {
                border: solid 1px;
                display: inline-block;
            }        
            .ge-minimap {
                display: inline;
            }
            .ge-minimap canvas {
                border: solid 1px;
            }
        </style>

    </head>
    
    <body onload="stfp.main.init()">
    
        <div class="ge-debug" id="debug"></div>
        <canvas class="ge-mainscreen" id="screen"></canvas>    
        <div class="ge-minimap" id="minimap"></div>

    </body>
</html>
Contact GitHub API Training Shop Blog About
