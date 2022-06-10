
      var dKey = document.createElement('div');
      dKey.style.position = 'fixed';
      dKey.style.bottom = '10px';
      dKey.style.right = '10px';
      dKey.style.width = '10px';
      dKey.style.height = '10px';
      dKey.style.color = 'White';
      dKey.style.background = 'Black';
      dKey.style.textAlign = 'Center';
      dKey.style.padding = '5px 7px 10px 5px';
      dKey.innerText = 'D';
      document.body.appendChild(dKey);

      var sKey = document.createElement('div');
      sKey.style.position = 'fixed';
      sKey.style.bottom = '10px';
      sKey.style.right = '35px';
      sKey.style.width = '10px';
      sKey.style.height = '10px';
      sKey.style.color = 'White';
      sKey.style.background = 'Black';
      sKey.style.textAlign = 'Center';
      sKey.style.padding = '5px 7px 10px 5px';
      sKey.innerText = 'S';
      document.body.appendChild(sKey);

      var aKey = document.createElement('div');
      aKey.style.position = 'fixed';
      aKey.style.bottom = '10px';
      aKey.style.right = '60px';
      aKey.style.width = '10px';
      aKey.style.height = '10px';
      aKey.style.color = 'White';
      aKey.style.background = 'Black';
      aKey.style.textAlign = 'Center';
      aKey.style.padding = '5px 7px 10px 5px';
      aKey.innerText = 'A';
      document.body.appendChild(aKey);

      var wKey = document.createElement('div');
      wKey.style.position = 'fixed';
      wKey.style.bottom = '40px';
      wKey.style.right = '35px';
      wKey.style.width = '10px';
      wKey.style.height = '10px';
      wKey.style.color = 'White';
      wKey.style.background = 'Black';
      wKey.style.textAlign = 'Center';
      wKey.style.padding = '5px 7px 10px 5px';
      wKey.innerText = 'w';
      document.body.appendChild(wKey);

      document.addEventListener("keydown", function(e) {
          if(e.which === 87 || e.keyCode === 87) {
              wKey.style.background = 'grey';
          };});
      document.addEventListener("keyup", function(e) {
          if(e.which === 87 || e.keyCode === 87) {
              wKey.style.background = 'black';
          }});


      document.addEventListener("keydown", function(e) {
          if(e.which === 65 || e.keyCode === 65) {
              aKey.style.background = 'grey';
          };});
      document.addEventListener("keyup", function(e) {
          if(e.which === 65 || e.keyCode === 65) {
              aKey.style.background = 'black';
          }});


      document.addEventListener("keydown", function(e) {
          if(e.which === 83 || e.keyCode === 83) {
              sKey.style.background = 'grey';
          };});
      document.addEventListener("keyup", function(e) {
          if(e.which === 83 || e.keyCode === 83) {
              sKey.style.background = 'black';
          }});


      document.addEventListener("keydown", function(e) {
          if(e.which === 68 || e.keyCode === 68) {
              dKey.style.background = 'grey';
          };});
      document.addEventListener("keyup", function(e) {
          if(e.which === 68 || e.keyCode === 68) {
              dKey.style.background = 'black';
          }});
