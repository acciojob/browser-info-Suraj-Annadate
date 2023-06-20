//your JS code here. If required.
function displayBrowserInfo() {
      var browserInfo = document.getElementById("browser-info");

      // Check if the browser supports the Navigator object
      if (navigator && navigator.userAgent) {
        var userAgent = navigator.userAgent;
        var browserName;
        var version;

        // Detect the browser name and version
        if (userAgent.indexOf("Chrome") != -1) {
          browserName = "Google Chrome";
          version = userAgent.substring(userAgent.indexOf("Chrome") + 7, userAgent.indexOf(" ", userAgent.indexOf("Chrome")));
        } else if (userAgent.indexOf("Firefox") != -1) {
          browserName = "Mozilla Firefox";
          version = userAgent.substring(userAgent.indexOf("Firefox") + 8, userAgent.indexOf(" ", userAgent.indexOf("Firefox")));
        } else if (userAgent.indexOf("Safari") != -1) {
          browserName = "Apple Safari";
          version = userAgent.substring(userAgent.indexOf("Version") + 8, userAgent.indexOf(" ", userAgent.indexOf("Version")));
        } else if (userAgent.indexOf("Opera") != -1 || userAgent.indexOf("OPR") != -1) {
          browserName = "Opera";
          version = userAgent.substring(userAgent.indexOf("OPR") + 4, userAgent.indexOf(" ", userAgent.indexOf("OPR")));
        } else if (userAgent.indexOf("Edge") != -1) {
          browserName = "Microsoft Edge";
          version = userAgent.substring(userAgent.indexOf("Edge") + 5, userAgent.indexOf(" ", userAgent.indexOf("Edge")));
        } else if (userAgent.indexOf("Trident") != -1) {
          browserName = "Internet Explorer";
          version = userAgent.substring(userAgent.indexOf("rv:") + 3, userAgent.indexOf(")", userAgent.indexOf("rv:")));
        } else {
          browserName = "Unknown Browser";
          version = "Unknown Version";
        }

        // Display the browser information on the webpage
        browserInfo.textContent = "You are using " + browserName + " version " + version;
      } else {
        browserInfo.textContent = "Browser information not available";
      }
    }