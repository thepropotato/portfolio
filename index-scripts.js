function showPage() {
    document.querySelector('.pages').style.display = 'block';
    document.querySelector('.alternative').style.display = 'none';
}

function scrollToPage1() {
    var menu = document.getElementById("side-menu");
    menu.style.display="none"
    // Show popup
    var popup = document.getElementById('popup');
    popup.style.display = 'block';

    // Automatically disappear after 2 seconds
    setTimeout(function() {
        popup.style.display = 'none';
    }, 2000);
}

function scrollToPage2() {
    var menu = document.getElementById("side-menu");
    menu.style.display="none"
    var page2 = document.getElementById('page2');
    page2.scrollIntoView({ behavior: 'smooth' });
}

function scrollToPage3() {
    var menu = document.getElementById("side-menu");
    menu.style.display="none"
    var page2 = document.getElementById('page3');
    page2.scrollIntoView({ behavior: 'smooth' });
}

function scrollToPage4() {
    var menu = document.getElementById("side-menu");
    menu.style.display="none"
    var page2 = document.getElementById('page4');
    page2.scrollIntoView({ behavior: 'smooth' });
}

function scrollToPage5() {
    var menu = document.getElementById("side-menu");
    menu.style.display="none"
    var page2 = document.getElementById('page5');
    page2.scrollIntoView({ behavior: 'smooth' });
}

function scrollToPage6() {
    var menu = document.getElementById("side-menu");
    menu.style.display="none"
    var page2 = document.getElementById('page6');
    page2.scrollIntoView({ behavior: 'smooth' });
}

function updateButtons() {
    var dropdown = document.getElementById("pages");
    var currentIndex = dropdown.selectedIndex;

    // Reset all circles' background color
    var circles = document.querySelectorAll('.circle');
    circles.forEach(function(circle) {
        circle.style.backgroundColor = '';
        circle.style.color='white'; // Reset to default
    });

    // Update the color of the circle corresponding to the selected index
    var circleId = (currentIndex + 1).toString();
    var circle = document.getElementById(circleId);
    if (circle) {
        circle.style.backgroundColor = 'rgb(130,130,130)';
        circle.style.color = 'rgb(0,0,0)'; // Change color to red
    }

    // Previous button
    var previousButton = document.getElementById("previous");
    previousButton.disabled = currentIndex === 0;
    previousButton.classList.toggle("faded", currentIndex === 0);

    // Next button
    var nextButton = document.getElementById("next");
    nextButton.disabled = currentIndex === dropdown.options.length - 1;
    nextButton.classList.toggle("faded", currentIndex === dropdown.options.length - 1);
}


function changePlaylist(direction) {
    var dropdown = document.getElementById("pages");
    var currentIndex = dropdown.selectedIndex;

    if (direction === 'previous' && currentIndex > 0) {
        dropdown.selectedIndex = currentIndex - 1;
    } else if (direction === 'next' && currentIndex < dropdown.options.length - 1) {
        dropdown.selectedIndex = currentIndex + 1;
    }

    updateButtons();
}

function playButton() {

    var circles = document.querySelectorAll('.circle');
    circles.forEach(function(circle) {
        circle.style.backgroundColor = 'black'; // Reset to default
    });
    
    var dropdown = document.getElementById("pages");
    var selectedOption = dropdown.options[dropdown.selectedIndex].text;
    

    switch (selectedOption) {

        case "Home":
            scrollToPage1();
            var c = document.getElementById("1")
            c.style.backgroundColor = "white";
            break;

        case "About Me":
            scrollToPage2();
            var c = document.getElementById("2")
            c.style.backgroundColor = "white";
            break;

        case "Projects":
            scrollToPage3();
            var c = document.getElementById("3")
            c.style.backgroundColor = "white";
            break;

        case "Writings":
            scrollToPage4();
            var c = document.getElementById("4")
            c.style.backgroundColor = "white";
            break;

        case "Edits":
            scrollToPage5();
            var c = document.getElementById("5")
            c.style.backgroundColor = "white";
            break;

        case "Contact Me":
            scrollToPage6();
            var c = document.getElementById("6")
            c.style.backgroundColor = "white";
            break;

        default:
            break;
    }
}

var c = document.getElementById("1")
c.style.backgroundColor = "white";

function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    
    // Toggle the display mode of the side menu
    if (sideMenu.style.display === 'none' || sideMenu.style.display === '') {
      sideMenu.style.display = 'flex'; // Show the side menu
    } else {
      sideMenu.style.display = 'none'; // Hide the side menu
    }
  }

  function closeMenu() {
    const sideMenu = document.getElementById('side-menu');
    
    // Toggle the display mode of the side menu
    if (sideMenu.style.display === 'flex' || sideMenu.style.display === '') {
      sideMenu.style.display = 'none'; // Show the side menu
    } else {
      sideMenu.style.display = 'flex'; // Hide the side menu
    }
  }