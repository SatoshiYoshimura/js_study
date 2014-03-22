//ユーザデータ
var userList = [
  'Sasoon',
  'Satoroll',
  'Satosu'
];

//メッセージを受信
self.onmessage = function(event){
  //受信メッセージから正規表現を生成
  var reg = new RegExp(event.data, 'i'),
    html = '';

  //正規表現にマッチするユーザを検索
  userList.forEach(function(user){
    if(reg.test(user)){
      html += '<li>' + user + '</li>';
    }
  })

  //検索結果のHTML表示
  self.postMessage(html);
};
