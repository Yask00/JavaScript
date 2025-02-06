function setupHelp() {
    for (var i = 0; i < helpText.length; i++) {
      // Culprit is the use of `var` on this line
      setTimeout(() => {
        console.log(i);
      }, 0);
    }
  }
  
  setupHelp();