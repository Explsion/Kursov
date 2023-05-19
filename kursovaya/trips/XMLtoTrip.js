
  // Создаем объект XMLHttpRequest
  var xhttp = new XMLHttpRequest();
  // Открываем XML файл
  var country = document.getElementById('ConrtyName').textContent;
  xhttp.open("GET", country+".xml", true);
  // Устанавливаем заголовок для отправки запроса
  xhttp.setRequestHeader("Content-type", "application/xml");
  // Обработчик события загрузки XML файла
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       
      // Получаем XML документ
      var xmlDoc = this.responseXML;
      // Получаем элементы <trip> из XML документа
      var trips = xmlDoc.getElementsByTagName("trip");
      // Получаем таблицу
      var table = document.getElementById("tripsTable");
      // Создаем строки таблицы и заполняем их данными из XML документа
      for (var i = 0; i < trips.length; i++) {
        var tripName = `${trips[i].getElementsByTagName("name")[0].textContent}`;
        var tripDuration = trips[i].getElementsByTagName("duration")[0].textContent;
        var tripDate = trips[i].getElementsByTagName("date")[0].textContent;
        var tripCost = trips[i].getElementsByTagName("cost")[0].textContent;
        var tripBought = `<form action="../index.html" target="_blank"><button class="button_tiket">Билет</button></form>`;
        var row = table.insertRow(i+1);
        row.insertCell(0).innerHTML = tripName;
        row.insertCell(1).innerHTML = tripDuration;
        row.insertCell(2).innerHTML = tripDate;
        row.insertCell(3).innerHTML = tripCost;
        row.insertCell(4).innerHTML= tripBought;
      }
    }
  };
  // Отправляем запрос на загрузку XML файла
  xhttp.send();



  
