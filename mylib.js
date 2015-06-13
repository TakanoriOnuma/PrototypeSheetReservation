// カレンダー情報
var GAME = new Array(12);
for(var i = 0; i < GAME.length; i++) {
  GAME[i] = new Array(32);
  for(var j = 1; j <= 31; j++) {
    GAME[i][j] = null;
  }
}
// monthは0から、dayは1から
GAME[6 - 1][9] = {
  opp: '横浜DeNA',
  start: '18:00'
};
GAME[6 - 1][10] = {
  opp: '横浜DeNA',
  start: '18:00'
};
GAME[6 - 1][11] = {
  opp: '横浜DeNA',
  start: '18:00'
};

GAME[6 - 1][12] = {
  opp: '中日ドラゴンズ',
  start: '18:00'
};
GAME[6 - 1][13] = {
  opp: '中日ドラゴンズ',
  start: '18:00'
};
GAME[6 - 1][14] = {
  opp: '中日ドラゴンズ',
  start: '18:00'
};

GAME[6 - 1][26] = {
  opp: '福岡ソフトバンク',
  start: '18:00'
};
GAME[6 - 1][27] = {
  opp: '福岡ソフトバンク',
  start: '14:00'
};
GAME[6 - 1][28] = {
  opp: '福岡ソフトバンク',
  start: '13:00'
};

GAME[7 - 1][4] = {
  opp: '北海道日本ハム',
  start: '18:00'
};
GAME[7 - 1][5] = {
  opp: '北海道日本ハム',
  start: '14:00'
};

GAME[7 - 1][10] = {
  opp: 'オリックス',
  start: '18:00'
};
GAME[7 - 1][11] = {
  opp: 'オリックス',
  start: '14:00'
};
GAME[7 - 1][12] = {
  opp: 'オリックス',
  start: '13:00'
};


// 登録情報
var REV = new Array(12);
for(var i = 0; i < REV.length; i++) {
  REV[i] = new Array(32);
  for(var j = 1; j <= 31; j++) {
    REV[i][j] = null;
  }
}

REV[6 - 1][12] = [];
REV[6 - 1][12].push({
  'name' : '田中裕太',
  'depart' : '営業部',
  'pos'  : '係長',
  'sheet' : 2,
  'date' : '2015-06-05 19:32'
});
REV[6 - 1][12].push({
  'name' : '佐藤祐樹',
  'depart' : 'システム開発部',
  'pos'  : '',
  'sheet' : 1,
  'date' : '2015-06-05 20:32'
});
REV[6 - 1][12].push({
  'name' : '山田愛',
  'depart' : '',
  'pos'  : '',
  'sheet' : 5,
  'date' : '2015-06-10 12:10'
});



// URLの?以降に書かれているパラメータを取得する
function getParams() {
  var url    = location.href;
  parameters = url.split("?");
  parameters = parameters[1].split("#");
  params     = parameters[0].split("&");
  var paramsArray = [];
  for ( i = 0; i < params.length; i++ ) {
    neet = params[i].split("=");
    paramsArray.push(neet[0]);
    paramsArray[neet[0]] = neet[1];
  }
  return paramsArray;
}

// date: 7 * 5のカレンダーに表示するべき文字列
// $output: 出力するタグ
function makeCalendar(year, month, $output) {
  var weekTable = ['月', '火', '水', '木', '金', '土', '日'];
  $output.children().remove();

  var date = getCalendarList(year, month);

  var $table = $('<table>');
  var $week = $('<tr>');
  for(var i = 0; i < 7; i++) {
    var $th = $('<th>').html(weekTable[i]);
    if(weekTable[i] === '土') {
      $th.addClass('saturday');
    }
    if(weekTable[i] === '日') {
      $th.addClass('sunday');
    }
    $week.append($th);
  }
  $table.append($week);
  for(var i = 0; i < 5; i++) {
    var $week = $('<tr>');
    for(var j = 0; j < 7; j++) {
      if(date[i * 7 + j] === ' ' || GAME[month][date[i * 7 + j]] === null) {
        var $noGame = $('<td>').addClass('nogame');
        $noGame.append(($('<span>').addClass('day').html(date[i * 7 + j])));
        $week.append($noGame);
      }
      else {
        var $oneGame = $('<td>').addClass('game');
        var $info = $('<div>').addClass('center');
        $info
          .append(GAME[month][date[i * 7 + j]].opp)
          .append('<br>')
          .append(GAME[month][date[i * 7 + j]].start);
        $oneGame
          .append(($('<span>').addClass('day').html(date[i * 7 + j])))
          .append('<br>')
          .append($info);
        $week.append($oneGame);
      }
    }
    $table.append($week);
  }
  $output.append($table);
}

// その月のカレンダーリストを取得する
// date:Dateオブジェクト
function getCalendarList(year, month) {
  var firstDate = new Date(year, month, 1);
  // 月曜日からスタート
  var firstWeek = firstDate.getDay() - 1;
  if(firstWeek < 0) {
    firstWeek = 6;
  }


  var maxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // うるう年なら2月を29日までにする
  if(year % 4 === 0 || (year % 100 === 0 && year % 400 !== 0)) {
    maxDays[1] = 29;
  }

  var calList = new Array(7 * 5);
  for(var i = 0; i < calList.length; i++) {
    calList[i] = ' ';
  }
  for(var i = 0; i < maxDays[month]; i++) {
    calList[i + firstWeek] = i + 1;
  }

  return calList;
}

// ====== game.htmlで使用 ===== //
// ゲーム情報をセットする
// date: year, month, dayが入っている
// $gameinfo: 入れるところ
function setGameinfo(date, $gameinfo) {
  var $date = $('<span>').html((date['month'] + 1) + '月' + date['day'] + '日');
  var game = GAME[date['month']][date['day']];
  var $opp  = $('<span>').html(game.opp);
  var $start = $('<span>').html(game.start);

  $gameinfo
    .append($date)
    .append(' VS ')
    .append($opp)
    .append(' ')
    .append($start);
}

// 登録状況をセットする
// date: year, month, dayが入っている
// $revinfo: 入れるところ
function setRevinfo(date, $revinfo) {
  var $th = $('<tr>').addClass('lightgray');
  $th
    .append($('<th>').html('予約者名'))
    .append($('<th>').html('予約席数'))
    .append($('<th>').html('登録日'));
  $revinfo.append($th);
  if(REV[date['month']][date['day']] !== null) {
    var revList = REV[date['month']][date['day']];
    for(var i = 0; i < revList.length; i++) {
      var $tr = $('<tr>');
      var name = (revList[i]['depart'] === '') ? '' : revList[i]['depart'] + ' ';
      name += (revList[i]['pos'] === '') ? '' : revList[i]['pos'] + ' ';
      name += revList[i]['name'];
      $tr
        .append($('<td>').html(name))
        .append($('<td>').html(revList[i]['sheet'] + '席'))
        .append($('<td>').html(revList[i]['date']));
      $revinfo.append($tr);
    }
  }
}
// ==== game.htmlで使用終了 === //