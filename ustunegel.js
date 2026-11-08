document.addEventListener('touchstart', function(e) {
  // If the user taps outside any tooltip word, remove focus to hide open tooltips
  if (!e.target.closest('.tooltip-word')) {
    document.activeElement.blur();
  }
});

