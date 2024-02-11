$(document).ready(function(){
    $('.heart-text').click(function(){
      $('.container').addClass('open');
      $('.small-button').hide();
    });

    $('.above-heart-text').click(function(){
        $('.container').addClass('open');
        $('.small-button').hide();
      });
    
    
    $('.close').click(function(){
      $('.container').removeClass('open');
      $('.small-button').show();
    });

    // Function to display the popup
    function displayPopup() {
        document.getElementById('popup-container').style.display = 'block';
    }
    
    // Function to close the popup
    function closePopup() {
        document.getElementById('popup-container').style.display = 'none';
    }
    
    // Event listener for the button click
    document.querySelector('.small-button').addEventListener('click', function() {
        displayPopup();
    });

    document.querySelector('.close-popup').addEventListener('click', function() {
        closePopup();
    });
  
  });