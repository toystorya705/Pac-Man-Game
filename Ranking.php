<?php

include('common.php'); //Linking File
outputHead("Ranking"); // Calling Header Portion
outputNavigation("Ranking"); // Calling Navigation Bar
?>

<div class="ranking"><!--Rankng Table-->
    <table>
        <Thead><!--Heading-->
            <tr>
                <th>Name</th>
                <th>Score</th>
                <th>Rank</th>
                <th>Time</th>
            </tr>
        </Thead>
        <tbody>
            <tr><!--Table Data-->
                <td>Mihir</td>
                <td>1000</td>
                <td>1</td>
                <td>01:00</td>


            </tr>
            <tr><!--Table Data-->
                <td>Aryan</td>
                <td>700</td>
                <td>2</td>
                <td>02:00</td>


            </tr>
            <tr><!--Table Data-->
                <td>Arek</td>
                <td>600</td>
                <td>3</td>
                <td>03:00</td>


            </tr>
            <tr><!--Table Data-->
                <td>Tadas</td>
                <td>500</td>
                <td>4</td>
                <td>04:00</td>


            </tr>
            <tr><!--Table Data-->
                <td>Deep</td>
                <td>400</td>
                <td>5</td>
                <td>05:00</td>


            </tr>


        </tbody>
    </table>


</div>
<h1 class="rankingheading">Ranking</h1><!--Heading-->
<?php
outputFooter(); // Calling Footer

?>