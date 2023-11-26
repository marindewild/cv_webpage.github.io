function showPopup(popupId) {
    closeAllPopups();
    document.getElementById(popupId).style.display = 'block';
  }
  
  function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
  }

  function closeAllPopups() {
    var popups = document.querySelectorAll('.popup');
    popups.forEach(function (popup) {
      popup.style.display = 'none';
    });
  }