<?php

//Ouputs the header for the page and opening body tag
function outputHead($title)//Header Function
{
    echo '<!DOCTYPE html>';
    echo '<html>';
    echo '<head>';
    echo '<title>' . $title . '</title>';//title;
    echo '<!-- Link to external style sheet -->';
    echo '<link rel="stylesheet" type="text/css" href="../CSS/style.css">';// Calling Stylesheet
   
    echo '<link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">';//Font 
    echo'<link href="https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap" rel="stylesheet">';//Font 
    echo '</head>';
    echo '<body>';
}

/* Ouputs the banner and the navigation bar
    The selected class is applied to the page that matches the page name letiable */
function outputNavigation($pageName)//Navigation Function
{
    //Output banner and first part of navigation


    echo '<div class="navbar">';

    echo '<div class="logo">
            <img src="../IMG/Logo3.png" alt="Logo">
        </div>';

    //Array of pages to link to
    $linkNames = array("Home", "Play Game", "Ranking", "Contact Us", "About", "Login/Sign up");
    $linkAddresses = array("index.php", "PlayGame.php", "Ranking.php", "ContactUs.php", "About.php", "Login.php");
    echo '<ul>';
    //Output navigation bar
    for ($x = 0; $x < count($linkNames); $x++) {//For Loop for active class 
        echo '<li>';
        echo '<a ';
        if ($linkNames[$x] == $pageName) {
            echo 'class="active" ';
        }
        echo 'href="' . $linkAddresses[$x] . '">' . $linkNames[$x] . '</a>' . '</li>';
    } // for
    echo '</ul>';
    echo '</div>';
}


function outputFooter()//Footer Function
{
    echo '<footer>';

    echo '<span> Pack-Man Game Footer </span>';
    echo '</footer>';
    echo '</body>';
    echo '</html>';
}
