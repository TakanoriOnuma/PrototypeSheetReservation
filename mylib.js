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
  opp: '中日',
  start: '18:00'
};
GAME[6 - 1][13] = {
  opp: '中日',
  start: '18:00'
};
GAME[6 - 1][14] = {
  opp: '中日',
  start: '18:00'
};

// date: 7 * 5のカレンダーに表示するべき文字列
// $output: 出力するタグ
function makeCalendar(year, month, $output) {
  var weekTable = ['月', '火', '水', '木', '金', '土', '日'];
  $output.children().remove();

  var date = getCalendarList(year, month);

  var $table = $('<table border="1">');
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
        $week.append($('<td>').addClass('nogame').html(date[i * 7 + j]));
      }
      else {
        var $oneGame = $('<td>').addClass('game');
        $oneGame
          .append(date[i * 7 + j] + '<br>')
          .append(GAME[month][date[i * 7 + j]].opp + '<br>')
          .append(GAME[month][date[i * 7 + j]].start);
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