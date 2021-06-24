function doFirst(){
  loadButton = document.getElementById('loadButton');
  feedback = document.getElementById('loadButton');
}


loadButton.addEventListener('click',function(){
  //step 1: 建立AJAX物件(xhr)
  xhr = new XMLHttpRequest();
  xhr.addEventListener('readystatechange',callState);//readystatechange事件，偵測
  //STEP2: 發出請求
  //語法:xhr.open(METHOD, url, true);
  let url = './XML_JSON_CSV/travellocationCHINESE.xml';
  xhr.open('GET', url, true);
  xhr.send();
})

function callState(){
  if(xhr.readyState === 4){
    if(xhr.status === 200){ //http status code 的狀態瑪: 1xx, 2xx回傳成功, 3xx重新導向 ,4xx client端的錯, 5xx sever的錯 IIS錯 
    let xmlData = xhr. reponseXML;
    // console.log(xmlData.querySelectorAll('Section').length);
    // console.log(xmlData.querySelector('stitle').firstChild.nodeValue);

    Section = xmlData.querySelectorAll('Section');
    for(let i = 0; i<5; i++){
      stitle = Section[i].querySelector('stitle').firstChild.nodeValue;
      if(Section[i].querySelector('st'))

    }

    }else{
      feedback.

    }
  }
}
window.addEventListener('load',doFirst)