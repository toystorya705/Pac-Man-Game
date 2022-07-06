<?php

include('common.php'); //Linking File
outputHead("Play Game"); // Calling Header Portion
outputNavigation("Play Game"); // Calling Navigation Bar
?>



<div class="gamewhole" id="wrapper">
    <div id="game"></div>
    <div id="score"></div>
    <button id="start-button">Start Game</button>


</div>

<script type="module" src="../JavaScript/playgame.js"></script>

<?php
outputFooter(); // Calling Footer

?>