// カレンダー情報
var GAME = new Array(12);
for(var i = 0; i < GAME.length; i++) {
  GAME[i] = new Array(32);
  for(var j = 1; j <= 31; j++) {
    GAME[i][j] = [];
  }
}
// monthは0から、dayは1から
GAME[6 - 1][9].push({
  opp: '横浜DeNAベイスターズ',
  start: '18:00'
});
GAME[6 - 1][10].push({
  opp: '横浜DeNAベイスターズ',
  start: '18:00'
});
GAME[6 - 1][11].push({
  opp: '横浜DeNAベイスターズ',
  start: '18:00'
});

GAME[6 - 1][12].push({
  opp: '中日ドラゴンズ',
  start: '18:00'
});
GAME[6 - 1][13].push({
  opp: '中日ドラゴンズ',
  start: '18:00'
});
GAME[6 - 1][14].push({
  opp: '中日ドラゴンズ',
  start: '18:00'
});

GAME[6 - 1][26].push({
  opp: '福岡ソフトバンクホークス',
  start: '18:00'
});
GAME[6 - 1][27].push({
  opp: '福岡ソフトバンクホークス',
  start: '14:00'
});
GAME[6 - 1][28].push({
  opp: '福岡ソフトバンクホークス',
  start: '13:00'
});

GAME[7 - 1][4].push({
  opp: '北海道日本ハムファイターズ',
  start: '18:00'
});
GAME[7 - 1][5].push({
  opp: '北海道日本ハムファイターズ',
  start: '14:00'
});

GAME[7 - 1][10].push({
  opp: 'オリックス・バファローズ',
  start: '18:00'
});
GAME[7 - 1][11].push({
  opp: 'オリックス・バファローズ',
  start: '14:00'
});
GAME[7 - 1][12].push({
  opp: 'オリックス・バファローズ',
  start: '13:00'
});

GAME[7 - 1][24].push({
  opp: '東京ヤクルトスワローズ',
  start: '18:00'
});
GAME[7 - 1][25].push({
  opp: '東京ヤクルトスワローズ',
  start: '18:00'
});
GAME[7 - 1][26].push({
  opp: '東京ヤクルトスワローズ',
  start: '17:00'
});


// 登録情報
var REV = new Array(12);
for(var i = 0; i < REV.length; i++) {
  REV[i] = new Array(32);
  for(var j = 1; j <= 31; j++) {
    REV[i][j] = null;
  }
}

REV[6 - 1][10] = [];
REV[6 - 1][10].push({
  'name' : '佐藤裕太',
  'depart' : '',
  'pos' : '',
  'sheet' : 2,
  'date' : '2015-06-05 19:05',
  'password' : 'sato'
});
REV[6 - 1][10].push({
  'name' : '長瀬仁',
  'depart' : '',
  'pos' : '',
  'sheet' : 4,
  'date' : '2015-06-06 20:05',
  'password' : 'nagase'
});
REV[6 - 1][10].push({
  'name' : '山口明子',
  'depart' : '',
  'pos' : '',
  'sheet' : 2,
  'date' : '2015-06-07 08:25',
  'password' : 'yamaguchi'
});

REV[6 - 1][11] = [];
REV[6 - 1][11].push({
  'name' : '阿部大樹',
  'depart' : '',
  'pos' : '',
  'sheet' : 2,
  'date' : '2015-06-05 08:25',
  'password' : 'abe'
});
REV[6 - 1][11].push({
  'name' : '名川健二',
  'depart' : '',
  'pos' : '',
  'sheet' : 1,
  'date' : '2015-06-06 14:25',
  'password' : 'nagawa'
});


REV[6 - 1][12] = [];
REV[6 - 1][12].push({
  'name' : '田中裕太',
  'depart' : '営業部',
  'pos'  : '係長',
  'sheet' : 2,
  'date' : '2015-06-05 19:32',
  'password' : 'tanaka'
});
REV[6 - 1][12].push({
  'name' : '佐藤祐樹',
  'depart' : 'システム開発部',
  'pos'  : '',
  'sheet' : 1,
  'date' : '2015-06-05 20:32',
  'password' : 'sato'
});
REV[6 - 1][12].push({
  'name' : '山田愛',
  'depart' : '',
  'pos'  : '',
  'sheet' : 5,
  'date' : '2015-06-10 12:10',
  'password' : 'yamada'
});

REV[7 - 1][12] = [];
REV[7 - 1][12].push({
  'name' : '田中裕太',
  'depart' : '営業部',
  'pos'  : '係長',
  'sheet' : 2,
  'date' : '2015-07-05 19:32',
  'password' : 'tanaka'
});
REV[7 - 1][12].push({
  'name' : '佐藤祐樹',
  'depart' : 'システム開発部',
  'pos'  : '',
  'sheet' : 1,
  'date' : '2015-07-05 20:32',
  'password' : 'sato'
});
REV[7 - 1][12].push({
  'name' : '山田愛',
  'depart' : '',
  'pos'  : '',
  'sheet' : 5,
  'date' : '2015-07-10 12:10',
  'password' : 'yamada'
});

// シート数
var SHEET = 5;
// 最大予約人数
var MAXNUM = 10;

// 対戦相手
var OPPS = [
  // パ・リーグ
  '福岡ソフトバンクホークス',
  '北海道日本ハムファイターズ',
  '埼玉西武ライオンズ',
  'オリックス・バファローズ',
  '千葉ロッテマリーンズ',
  // セ・リーグ
  '中日ドラゴンズ',
  '東京ヤクルトスワローズ',
  '読売ジャイアンツ',
  '阪神タイガース',
  '広島東洋カープ',
  '横浜DeNAベイスターズ'
];

// 略称
var ABBR = {
  // パ・リーグ
  '福岡ソフトバンクホークス' : 'ソフトバンク',
  '北海道日本ハムファイターズ' : '日本ハム',
  '埼玉西武ライオンズ' : '西武',
  'オリックス・バファローズ' : 'オリックス',
  '千葉ロッテマリーンズ' : 'ロッテ',
  // セ・リーグ
  '中日ドラゴンズ' : '中日',
  '東京ヤクルトスワローズ' : 'ヤクルト',
  '読売ジャイアンツ' : '巨人',
  '阪神タイガース' : '阪神',
  '広島東洋カープ' : '広島',
  '横浜DeNAベイスターズ' : '横浜DeNA'
};

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
  var isToday = function(year, month, day) {
    var today = new Date();
    return (year === today.getFullYear() &&
      month === today.getMonth() &&
      day === today.getDate());
  };
  for(var i = 0; i < 5; i++) {
    var $week = $('<tr>');
    for(var j = 0; j < 7; j++) {
      if(date[i * 7 + j] === ' ' || GAME[month][date[i * 7 + j]].length === 0) {
        var $noGame = $('<td>').addClass('nogame');
        if(isToday(year, month, date[i * 7 + j])) {
          $noGame.addClass('today');
        }
        $noGame.append(($('<span>').addClass('day').html(date[i * 7 + j])));
        $week.append($noGame);
      }
      else {
        var $oneGame = $('<td>').addClass('game');
        if(isToday(year, month, date[i * 7 + j])) {
          $oneGame.addClass('today');
        }
        var $info = $('<div>').addClass('center');
        $info
          .append(ABBR[GAME[month][date[i * 7 + j]][0].opp])
          .append('<br>')
          .append(GAME[month][date[i * 7 + j]][0].start);
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
// game.htmlでやること
function gameInitial() {
  var date = getParams();
  date['year'] = parseInt(date['year']);
  date['month'] = parseInt(date['month']);
  date['day'] = parseInt(date['day']);

  setGameinfo(date, $('.gameinfo'));
  setRevinfo(date, $('#revinfo'));
  setSheetNum(date);
  setRevNum(date);

  var $sheet = $('#sheet');
  for(var i = 0; i < SHEET; i++) {
    $sheet.append($('<option value="' + (i + 1) + '">').html(i + 1));
  }

  $('#revform').submit(function() {
    var name = $('#name').val();
    var sheet = $('#sheet').val();
    var depart = $('#depart').val();
    var pos = $('#pos').val();
    var password = $('#password').val();
    $('.error').children().remove();
    if(name === '') {
      alert('名前を入力してください');
      return false;
    }
    if(REV[date['month']][date['day']] !== null && REV[date['month']][date['day']].length >= MAXNUM) {
      alert('これ以上予約することは出来ません。');
      return false;
    }

    if(REV[date['month']][date['day']] === null) {
      REV[date['month']][date['day']] = [];
    }
    REV[date['month']][date['day']].push({
      name : name,
      depart : depart,
      pos : pos,
      sheet : parseInt(sheet),
      date : parseDate(new Date()),
      password : password
    });

    setRevinfo(date, $('#revinfo'));
    setSheetNum(date);
    setRevNum(date);
    return false;
  });


  $(document).on('click', '.reviseForm input[type="button"]', function() {
    // password check
    var $reviseForm = $(this).parent();
    var key = $reviseForm.attr('key');
    var password = $('input[type="password"]', $reviseForm).val();
    if(REV[date['month']][date['day']][key]['password'] === password) {
      if($(this).val() === '編集') {
        $('#revinfo input').attr('disabled', 'disabled');
        $('#revform input, select').attr('disabled', 'disabled');
        $('#revinfo tr').addClass('gray');
        $('#revinfo tr th').parent().removeClass('gray');
        $(this).parent().parent().parent().removeClass('gray');
        $(this)
          .removeAttr('disabled')
          .val('保存');
        var $sheet = $('.sheet', $('#revinfo div[key="' + key + '"]').parent().parent());
        $sheet.parent().parent().addClass('selected');
        var sheet = $sheet.html();
        var $sheetList = $('<select>');
        for(var i = 0; i < SHEET; i++) {
          $sheetList.append($('<option value="' + (i + 1) + '">').html(i + 1));
        }
        $sheetList
          .val(sheet)
          .addClass('sheet');
        $sheet.replaceWith($sheetList);
      }
      else if($(this).val() === '削除') {
        var str = '予約情報\n';
        var rev = REV[date['month']][date['day']][key];
        var name = (rev['depart'] === '') ? '' : rev['depart'] + ' ';
        name += (rev['pos'] === '') ? '' : rev['pos'] + ' ';
        name += rev['name'];
        str += '予約者名：' + name + '\n';
        str += '予約席数：' + rev['sheet'] + '席\n';
        str += '登録日：' + rev['date'] + '\n\n';
        str += 'この予約を本当に削除しますか？';
        if(confirm(str)) {
          REV[date['month']][date['day']].splice(key, 1);
          setRevinfo(date, $('#revinfo'));
          setSheetNum(date);
          setRevNum(date);
        }
      }
      else if($(this).val() === '保存') {
        var $sheet = $('.sheet', $('#revinfo div[key="' + key + '"]').parent().parent());
        $sheet.parent().parent().removeClass('selected');
        $('#revinfo tr').removeClass('gray');
        REV[date['month']][date['day']][key]['sheet'] = parseInt($sheet.val());
        $('#revinfo input').removeAttr('disabled');
        $('#revform input, select').removeAttr('disabled');
        $sheet.replaceWith($('<span>').html(REV[date['month']][date['day']][key]['sheet']).addClass('sheet'));
        $(this).val('編集');
        setSheetNum(date);
      }
    }
    else {
      alert('パスワードが正しくありません。');
    }
  });

}

// adminバージョンの初期設定
function gameInitial_admin() {
  var date = getParams();
  date['year'] = parseInt(date['year']);
  date['month'] = parseInt(date['month']);
  date['day'] = parseInt(date['day']);

  setGameinfo(date, $('.gameinfo'));
  setRevinfo_admin(date, $('#revinfo'));
  setSheetNum(date);
  setRevNum(date);

  var $sheet = $('#sheet');
  for(var i = 0; i < SHEET; i++) {
    $sheet.append($('<option value="' + (i + 1) + '">').html(i + 1));
  }

  $('#revform').submit(function() {
    var name = $('#name').val();
    var sheet = $('#sheet').val();
    var depart = $('#depart').val();
    var pos = $('#pos').val();
    $('.error').children().remove();
    if(name === '') {
      alert('名前を入力してください');
      return false;
    }
    if(REV[date['month']][date['day']] !== null && REV[date['month']][date['day']].length >= MAXNUM) {
      alert('これ以上予約することは出来ません。');
      return false;
    }

    if(REV[date['month']][date['day']] === null) {
      REV[date['month']][date['day']] = [];
    }
    REV[date['month']][date['day']].push({
      name : name,
      depart : depart,
      pos : pos,
      sheet : parseInt(sheet),
      date : parseDate(new Date())
    });

    setRevinfo_admin(date, $('#revinfo'));
    setSheetNum(date);
    setRevNum(date);
    return false;
  });

  // adminバージョンの追加部分
  $(document)
    .on('mouseover', '#revinfo img', function() {
      $(this).attr('src', 'batsu_on.png');
    })
    .on('mouseleave', '#revinfo img', function() {
      $(this).attr('src', 'batsu.png');
    })
    .on('click', '#revinfo img', function() {
      var number = $(this).attr('number');
      var str = '以下の情報を削除しますか？\n';
      var rev = REV[date['month']][date['day']][number];
      var name = (rev['depart'] === '') ? '' : rev['depart'] + ' ';
      name += (rev['pos'] === '') ? '' : rev['pos'] + ' ';
      name += rev['name'];
      str += '予約者名：' + name + '\n';
      str += '予約席数：' + rev['sheet'] + '席\n';
      str += '登録日：' + rev['date'] + '\n';
      if(confirm(str)) {
        REV[date['month']][date['day']].splice(number, 1);
        setRevinfo_admin(date, $('#revinfo'));
        setSheetNum(date);
        setRevNum(date);
      }
    });

  $(document).on('click', '.reviseForm input[type="button"]', function() {
    // password check
    var $reviseForm = $(this).parent();
    var key = $reviseForm.attr('key');
    if($(this).val() === '編集') {
      $('#revinfo input').attr('disabled', 'disabled');
      $('#revform input, select').attr('disabled', 'disabled');
      $('#revinfo tr').addClass('gray');
      $('#revinfo tr th').parent().removeClass('gray');
      $(this).parent().parent().parent().removeClass('gray');
      $(this)
        .removeAttr('disabled')
        .val('保存');
      var $sheet = $('.sheet', $('#revinfo div[key="' + key + '"]').parent().parent());
      $sheet.parent().parent().addClass('selected');
      var sheet = $sheet.html();
      var $sheetList = $('<select>');
      for(var i = 0; i < SHEET; i++) {
        $sheetList.append($('<option value="' + (i + 1) + '">').html(i + 1));
      }
      $sheetList
        .val(sheet)
        .addClass('sheet');
      $sheet.replaceWith($sheetList);
    }
    else if($(this).val() === '削除') {
      var str = '予約情報\n';
      var rev = REV[date['month']][date['day']][key];
      var name = (rev['depart'] === '') ? '' : rev['depart'] + ' ';
      name += (rev['pos'] === '') ? '' : rev['pos'] + ' ';
      name += rev['name'];
      str += '予約者名：' + name + '\n';
      str += '予約席数：' + rev['sheet'] + '席\n';
      str += '登録日：' + rev['date'] + '\n\n';
      str += 'この予約を本当に削除しますか？';
      if(confirm(str)) {
        REV[date['month']][date['day']].splice(key, 1);
        setRevinfo_admin(date, $('#revinfo'));
        setSheetNum(date);
        setRevNum(date);
      }
    }
    else if($(this).val() === '保存') {
      var $sheet = $('.sheet', $('#revinfo div[key="' + key + '"]').parent().parent());
      $sheet.parent().parent().removeClass('selected');
      $('#revinfo tr').removeClass('gray');
      REV[date['month']][date['day']][key]['sheet'] = parseInt($sheet.val());
      $('#revinfo input').removeAttr('disabled');
      $('#revform input, select').removeAttr('disabled');
      $sheet.replaceWith($('<span>').html(REV[date['month']][date['day']][key]['sheet']).addClass('sheet'));
      $(this).val('編集');
      setSheetNum(date);
    }
  });


}


// ゲーム情報をセットする
// date: year, month, dayが入っている
// $gameinfo: 入れるところ
function setGameinfo(date, $gameinfo) {
  var $date = $('<span>').html((date['month'] + 1) + '月' + date['day'] + '日');
  var game = GAME[date['month']][date['day']][0];
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
  $revinfo.children().remove();
  var $th = $('<tr>').addClass('lightgray');
  $th
    .append($('<th>').html('予約者名'))
    .append($('<th>').html('予約席数'))
    .append($('<th>').html('登録日'))
    .append($('<th>').html('編集・削除'));
  $revinfo.append($th);
  if(REV[date['month']][date['day']] !== null) {
    var revList = REV[date['month']][date['day']];
    for(var i = 0; i < revList.length; i++) {
      var $tr = $('<tr>');
      var name = (revList[i]['depart'] === '') ? '' : revList[i]['depart'] + '<br>';
      name += (revList[i]['pos'] === '') ? '' : revList[i]['pos'] + '<br>';
      name += revList[i]['name'];
      $reviseForm = $('<div>').addClass('reviseForm').attr('key', i);
      var $pass = $('<input>').css('width', '100px');
      setWatermarkPassword($pass, 'パスワード');
      $reviseForm
        .append($pass)
        .append($('<input>').attr('type', 'button').val('編集'))
        .append($('<input>').attr('type', 'button').val('削除'));

      var $name = $('<td>').html(name);
      $tr
        .append($name)
        .append($('<td>')
          .append($('<span>').html(revList[i]['sheet']).addClass('sheet'))
          .append($('<span>').html('席')))
        .append($('<td>').html(revList[i]['date']))
        .append($('<td>').append($reviseForm));
      $revinfo.append($tr);
    }
  }

}

// adminバージョンの登録状況をセットする
// date: year, month, dayが入っている
// $revinfo: 入れるところ
function setRevinfo_admin(date, $revinfo) {
  $revinfo.children().remove();
  var $th = $('<tr>').addClass('lightgray');
  $th
    .append($('<th>').html('予約者名'))
    .append($('<th>').html('予約席数'))
    .append($('<th>').html('登録日'))
    .append($('<th>').html('編集・削除'));
  $revinfo.append($th);
  if(REV[date['month']][date['day']] !== null) {
    var revList = REV[date['month']][date['day']];
    for(var i = 0; i < revList.length; i++) {
      var $tr = $('<tr>');
      var name = (revList[i]['depart'] === '') ? '' : revList[i]['depart'] + '<br>';
      name += (revList[i]['pos'] === '') ? '' : revList[i]['pos'] + '<br>';
      name += revList[i]['name'];
      $reviseForm = $('<div>').addClass('reviseForm').attr('key', i);
      $reviseForm
        .append($('<input>').attr('type', 'button').val('編集'))
        .append($('<input>').attr('type', 'button').val('削除'));

      var $name = $('<td>').append(name);
      $tr
        .append($name)
        .append($('<td>')
          .append($('<span>').html(revList[i]['sheet']).addClass('sheet'))
          .append($('<span>').html('席')))
        .append($('<td>').html(revList[i]['date']))
        .append($('<td>').append($reviseForm));
      $revinfo.append($tr);
    }
  }

}


// 予約席数を数える
// date: year, month, dayが入っている
function calcSheetNum(date) {
  if(REV[date['month']][date['day']] === null) {
    return 0;
  }
  var num = 0;
  for(var i = 0; i < REV[date['month']][date['day']].length; i++) {
    num += REV[date['month']][date['day']][i].sheet;
  }
  return num;
}

// シート数を表示する
function setSheetNum(date) {
  $('.sheet-info').html('');
  $('.sheet-info').children().remove();
  var sheetNum = calcSheetNum(date);
  var $sheetNum = $('<span>').html(sheetNum);
  if(sheetNum >= SHEET) {
    $sheetNum.addClass('danger');
  }
  else {
    $sheetNum.addClass('safe');
  }
  $('.sheet-info')
    .append('(席数： ')
    .append($sheetNum)
    .append('/' + SHEET + ')');
}

// 残り予約人数を表示する
function setRevNum(date) {
  $('.rev-info').html('');
  $('.rev-info').children().remove();
  var revNum = MAXNUM - ((REV[date['month']][date['day']] === null) ? 0 : REV[date['month']][date['day']].length);
  var $revNum = $('<span>').html(revNum);
  if(revNum <= 0) {
    $revNum.addClass('danger');
    $('#revform input, #revform select').attr('disabled', 'disabled');
    $('#revform input[type="submit"]').val('これ以上登録できません');
  }
  else {
    $revNum.addClass('safe');
    $('#revform input, #revform select').removeAttr('disabled', 'disabled');
    $('#revform input[type="submit"]').val('登録');
  }
  $('.rev-info')
    .append('(あと ')
    .append($revNum)
    .append('人予約可能)');
}

// 日付を文字列に変える
function parseDate(date) {
  var str = date.getFullYear() + '-';
  str += ('0' + (date.getMonth() + 1)).slice(-2) + '-';
  str += ('0' + date.getDate()).slice(-2) + ' ';
  str += ('0' + date.getHours()).slice(-2) + ':';
  str += ('0' + date.getMinutes()).slice(-2);
  return str;
}
// ==== game.htmlで使用終了 === //

// config.htmlで使う値のセット
function valueSet() {
  $('#sheetnum').html(SHEET);
  $('#max-revnum').html(MAXNUM);
}


// gameinfo.htmlで使う初期化関数
function initGameinfo() {
  var $opp = $('#opp');
  for(var i = 0; i < OPPS.length; i++) {
    $opp.append($('<option>').html(OPPS[i]));
  }

  $(window).on('load resize', function() {
    var pos = $('#state').position();
    $('#notice-rev-info').css({
      'top' : pos.top + 80,
      'left' : pos.left + 300
    });
  });

  setRegGameinfo();

  $('#gameinfo').submit(function() {
    var month = parseInt($('#month').val());
    var day = parseInt($('#day').val());
    var opp = $('#opp').val();
    var hour = parseInt($('#hour').val());
    var minute = parseInt($('#minute').val());
    if(isNaN(month) || month < 1 || month > 12) {
      alert('月の入力エラー');
      return false;
    }
    if(isNaN(day) || day < 1 || day > 31) {
      alert('日の入力エラー');
      return false;
    }
    if(isNaN(hour) || hour < 0 || hour > 24) {
      alert('時の入力エラー');
      return false;
    }
    if(isNaN(minute) || minute < 0 || minute > 60) {
      alert('分の入力エラー');
      return false;
    }

    if($('#gameinfo input[type="submit"]').val() === '登録') {
      GAME[month - 1][day].push({
        'opp' : opp,
        'start' : ('0' + hour).slice(-2) + ':' + ('0' + minute).slice(-2)
      });
    }
    else if($('#gameinfo input[type="submit"]').val() === '編集') {
      GAME[month - 1][day].push({
        'opp' : opp,
        'start' : ('0' + hour).slice(-2) + ':' + ('0' + minute).slice(-2)
      });

      var row = $('#state').attr('revise');
      var $button = $('#' + row + ' input');

      var oldMonth = $button.attr('month');
      var oldDay = $button.attr('day');
      var oldIdx = $button.attr('idx');
      GAME[oldMonth][oldDay].splice(oldIdx, 1);

      location.hash = '';
      location.hash = row;
    }
    setRegGameinfo();

    return false;
  });
  $('#cancel').click(function() {
    location.hash = '';
    location.hash = $('#state').attr('revise');
    setRegGameinfo();
  });
  $('#delete').click(function() {
    if(confirm('削除してもよろしいですか？')) {
      var row = $('#state').attr('revise');
      var $button = $('#' + row + ' input');

      var oldMonth = $button.attr('month');
      var oldDay = $button.attr('day');
      var oldIdx = $button.attr('idx');
      GAME[oldMonth][oldDay].splice(oldIdx, 1);
      setRegGameinfo();
    }
  })

  $(document)
    .on('change', '#monthfilter, #oppfilter, #hourfilter', function() {
      setRegGameinfo();
    });
}

function initGameinfo2() {
  var $opp = $('#opp');
  var $central = $('<optgroup label="セ・リーグ">');
  var i = 0;
  for( ; i < 5; i++) {
    $central.append($('<option>').html(OPPS[i]));
  }
  var $pacific = $('<optgroup label="パ・リーグ">');
  for( ; i < OPPS.length; i++) {
    $pacific.append($('<option>').html(OPPS[i]));
  }
  $opp
    .append($central)
    .append($pacific);

  $(window).on('load resize', function() {
    var pos = $('#state').position();
    $('#notice-rev-info').css({
      'top' : pos.top + 80,
      'left' : pos.left + 300
    });
  });

  setRegGameinfo2();

  $('#gameinfo').submit(function() {
    var month = parseInt($('#month').val());
    var day = parseInt($('#day').val());
    var opp = $('#opp').val();
    var hour = parseInt($('#hour').val());
    var minute = parseInt($('#minute').val());
    if(isNaN(month) || month < 1 || month > 12) {
      alert('月の入力エラー');
      return false;
    }
    if(isNaN(day) || day < 1 || day > 31) {
      alert('日の入力エラー');
      return false;
    }
    if(isNaN(hour) || hour < 0 || hour > 24) {
      alert('時の入力エラー');
      return false;
    }
    if(isNaN(minute) || minute < 0 || minute > 60) {
      alert('分の入力エラー');
      return false;
    }

    if($('#gameinfo input[type="submit"]').val() === '登録') {
      GAME[month - 1][day].push({
        'opp' : opp,
        'start' : ('0' + hour).slice(-2) + ':' + ('0' + minute).slice(-2)
      });
    }
    else if($('#gameinfo input[type="submit"]').val() === '編集') {
      GAME[month - 1][day].push({
        'opp' : opp,
        'start' : ('0' + hour).slice(-2) + ':' + ('0' + minute).slice(-2)
      });

      var row = $('#state').attr('revise');
      var $button = $('#' + row + ' input');

      var oldMonth = $button.attr('month');
      var oldDay = $button.attr('day');
      var oldIdx = $button.attr('idx');
      GAME[oldMonth][oldDay].splice(oldIdx, 1);

      location.hash = '';
      location.hash = row;
    }
    setRegGameinfo2();

    return false;
  });

  $(document)
    .on('change', '#monthfilter, #oppfilter, #hourfilter', function() {
      setRegGameinfo2();
    });
}

// 登録済み試合情報を列挙する
function setRegGameinfo() {
  // フィルター情報を取得
  var monthfilter = ($('#monthfilter').val() === undefined) ? '日付' : $('#monthfilter').val();
  var oppfilter = ($('#oppfilter').val() === undefined) ? '対戦相手' : $('#oppfilter').val();
  var hourfilter = ($('#hourfilter').val() === undefined) ? '開始時間' : $('#hourfilter').val();

  $('#cancel').hide();
  $('#delete').hide();
  $('#notice-rev-info').hide();
  $('#state').html('試合情報の登録');
  $('#gameinfo-submit').val('登録');

  var $game = $('#reg-game');
  $game.children().remove();
  var $th = $('<tr>').addClass('lightgray');
  var $monthfilter = $('<select id="monthfilter">');
  $monthfilter
    .append($('<option>').html('日付'));
  for(var i = 1; i <= 12; i++) {
    $monthfilter.append($('<option>').html(i + '月'));
  }
  var $oppfilter = $('<select id="oppfilter">').append($('<option>').html('対戦相手'));
  for(var i = 0; i < OPPS.length; i++) {
    $oppfilter.append($('<option>').html(OPPS[i]));
  }
  var $hourfilter = $('<select id="hourfilter">').append($('<option>').html('開始時間'));
  $hourfilter
    .append($('<option>').html('～18:00'))
    .append($('<option>').html('18:00～'));

  $monthfilter.val(monthfilter);
  $oppfilter.val(oppfilter);
  $hourfilter.val(hourfilter);
  $th
    .append($('<th>').append($monthfilter))
    .append($('<th>').append($oppfilter))
    .append($('<th>').append($hourfilter))
    .append($('<th>').html('予約状況'))
    .append($('<th>').html('編集'));
  $game.append($th);
  var idx = 0;
  for(var i = 0; i < GAME.length; i++) {
    if(monthfilter !== undefined && monthfilter !== '日付') {
      var monthfil = parseInt(monthfilter.slice(0, -1)) - 1;
      if(monthfil !== i) {
        continue;
      }
    }
    for(var j = 1; j <= 31; j++) {
      for(var k = 0; k < GAME[i][j].length; k++) {
        if(oppfilter !== undefined && oppfilter !== '対戦相手') {
          if(oppfilter !== GAME[i][j][k].opp) {
            continue;
          }
        }
        if(hourfilter !== undefined && hourfilter !== '開始時間') {
          if(hourfilter.charAt(0) === '～') {
            var hourfil = parseInt(hourfilter.slice(1, 3));
            if(hourfil <= parseInt(GAME[i][j][k].start.slice(0, 2))) {
              continue;
            }
          }
          else {
            var hourfil = parseInt(hourfilter.slice(0, 2));
            if(hourfil > parseInt(GAME[i][j][k].start.slice(0, 2))) {
              continue;
            }
          }
        }


        var $tr = $('<tr id="row' + idx + '">').addClass('center');
        var num = calcSheetNum({'year': 2015, 'month': i, 'day': j});
        var $button = $('<input>');
        $button
          .attr('type', 'button')
          .attr('row', 'row' + idx)
          .attr('month', i)
          .attr('day', j)
          .attr('idx', k)
          .val('編集');
        $tr
          .append($('<td>').html((i + 1) + '月 ' + j + '日'))
          .append($('<td>').html(GAME[i][j][k].opp))
          .append($('<td>').html(GAME[i][j][k].start))
          .append($('<td>').html(num + ' / ' + SHEET))
          .append($('<td>').html($button));

        $game.append($tr);
        idx += 1;
      }
    }
  }

  $('#reg-game input').click(function() {
    var row = $(this).attr('row');
    var month = parseInt($(this).attr('month'));
    var day = $(this).attr('day');
    var idx = $(this).attr('idx');
    $('#reg-game tr').each(function(idx, elem) {
      if($(this).attr('id') === row) {
        $(this).addClass('selected');
        $('input', this).val('編集中');
      }
      else {
        $(this).removeClass('selected');
        $('input', this).val('編集');
      }
    })
    $('#state')
      .html('試合情報の編集')
      .attr('revise', row);
    $('#gameinfo input[type="submit"]').val('編集');

    $('#month').val(month + 1);
    $('#day').val(day);
    $('#opp').val(GAME[month][day][idx].opp);
    $('#hour').val(GAME[month][day][idx].start.slice(0, 2));
    $('#minute').val(GAME[month][day][idx].start.slice(-2));

    $('#notice-rev-info').hide();
    $('#notice-rev-info ol').children().remove();
    if(REV[month][day] !== null) {
      for(var i = 0; i < REV[month][day].length; i++) {
        var name = '';
        name += (REV[month][day][i].depart === '') ? '' : REV[month][day][i].depart + ' ';
        name += (REV[month][day][i].pos === '') ? '' : REV[month][day][i].pos + ' ';
        name += REV[month][day][i].name;
        $('#notice-rev-info ol').append($('<li>').html(name));
      }
      $('#notice-rev-info').show();
    }

    $('#cancel').show();
    $('#delete').show();

    location.hash = '';
    location.hash = 'state';
  })
}

// 基本的に変更点は削除の列が出来たところのみ
function setRegGameinfo2() {
  // フィルター情報を取得
  var monthfilter = ($('#monthfilter').val() === undefined) ? '日付' : $('#monthfilter').val();
  var oppfilter = ($('#oppfilter').val() === undefined) ? '対戦相手' : $('#oppfilter').val();
  var hourfilter = ($('#hourfilter').val() === undefined) ? '開始時間' : $('#hourfilter').val();

  $('#cancel').hide();
  $('#delete').hide();
  $('#notice-rev-info').hide();
  $('#state').html('試合情報の登録');
  $('#gameinfo-submit').val('登録');

  var $game = $('#reg-game');
  $game.children().remove();
  var $th = $('<tr>').addClass('lightgray');
  var $monthfilter = $('<select id="monthfilter">');
  $monthfilter
    .append($('<option>').html('日付'));
  for(var i = 1; i <= 12; i++) {
    $monthfilter.append($('<option>').html(i + '月'));
  }
  var $oppfilter = $('<select id="oppfilter">').append($('<option>').html('対戦相手'));
  var $central = $('<optgroup label="セ・リーグ">');
  i = 0;
  for( ; i < 5; i++) {
    $central.append($('<option>').html(OPPS[i]));
  }
  var $pacific = $('<optgroup label="パ・リーグ">');
  for( ; i < OPPS.length; i++) {
    $pacific.append($('<option>').html(OPPS[i]));
  }
  $oppfilter
    .append($central)
    .append($pacific);
  var $hourfilter = $('<select id="hourfilter">').append($('<option>').html('開始時間'));
  $hourfilter
    .append($('<option>').html('～18:00'))
    .append($('<option>').html('18:00～'));

  $monthfilter.val(monthfilter);
  $oppfilter.val(oppfilter);
  $hourfilter.val(hourfilter);
  $th
    .append($('<th>').append($monthfilter))
    .append($('<th>').append($oppfilter))
    .append($('<th>').append($hourfilter))
    .append($('<th>').html('予約状況'))
    .append($('<th>').html('編集・削除'));
  $game.append($th);
  var idx = 0;
  for(var i = 0; i < GAME.length; i++) {
    if(monthfilter !== undefined && monthfilter !== '日付') {
      var monthfil = parseInt(monthfilter.slice(0, -1)) - 1;
      if(monthfil !== i) {
        continue;
      }
    }
    for(var j = 1; j <= 31; j++) {
      for(var k = 0; k < GAME[i][j].length; k++) {
        if(oppfilter !== undefined && oppfilter !== '対戦相手') {
          if(oppfilter !== GAME[i][j][k].opp) {
            continue;
          }
        }
        if(hourfilter !== undefined && hourfilter !== '開始時間') {
          if(hourfilter.charAt(0) === '～') {
            var hourfil = parseInt(hourfilter.slice(1, 3));
            if(hourfil <= parseInt(GAME[i][j][k].start.slice(0, 2))) {
              continue;
            }
          }
          else {
            var hourfil = parseInt(hourfilter.slice(0, 2));
            if(hourfil > parseInt(GAME[i][j][k].start.slice(0, 2))) {
              continue;
            }
          }
        }


        var $tr = $('<tr id="row' + idx + '">').addClass('center');
        var num = calcSheetNum({'year': 2015, 'month': i, 'day': j});
        var $button = $('<input>');
        $button
          .attr('type', 'button')
          .attr('row', 'row' + idx)
          .attr('month', i)
          .attr('day', j)
          .attr('idx', k)
          .val('編集');
        var $batsu = $('<input>');
        $batsu
          .attr('type', 'button')
          .attr('row', 'row' + idx)
          .attr('month', i)
          .attr('day', j)
          .attr('idx', k)
          .val('削除');
        $tr
          .append($('<td>').html((i + 1) + '月 ' + j + '日'))
          .append($('<td>').html(GAME[i][j][k].opp))
          .append($('<td>').html(GAME[i][j][k].start))
          .append($('<td>').html(num + ' / ' + SHEET))
          .append($('<td>').append($button).append($batsu));

        $game.append($tr);
        idx += 1;
      }
    }
  }

  // 予約者一覧の削除
  $('#notice-rev-info').hide();
  $('#notice-rev-info ol').children().remove();

  $('#reg-game input').click(function() {
    var row = $(this).attr('row');
    var month = parseInt($(this).attr('month'));
    var day = $(this).attr('day');
    var idx = $(this).attr('idx');
    if($(this).val() === '編集') {
      $('#gameinfo input, select').attr('disabled', 'disabled');
      $(this).val('保存');
      $('#reg-game tr').each(function(idx, elem) {
        if($(this).attr('id') === row) {
          $(this).addClass('selected');
          $('input', this).next().attr('disabled', 'disabled');
        }
        else {
          $(this).removeClass('selected');
          $(this).addClass('gray');
          $('input', this).attr('disabled', 'disabled');
        }
      });
      // 日付のフォーム
      var $day = $(this).parent().prev().prev().prev().prev();
      var $dayForm = $('<td>');
      $dayForm
        .append($('<input>').attr('type', 'text').val(month + 1).addClass('sizefix').addClass('right'))
        .append($('<span>').html('月'))
        .append($('<input>').attr('type', 'text').val(day).addClass('sizefix').addClass('right'))
        .append($('<span>').html('日'));
      $day.replaceWith($dayForm);

      // 対戦相手のフォーム
      var $oppForm = $('<select>');
      var $central = $('<optgroup label="セ・リーグ">');
      var i = 0;
      for( ; i < 5; i++) {
        $central.append($('<option>').html(OPPS[i]));
      }
      var $pacific = $('<optgroup label="パ・リーグ">');
      for( ; i < OPPS.length; i++) {
        $pacific.append($('<option>').html(OPPS[i]));
      }
      $oppForm
        .append($central)
        .append($pacific)
        .val(GAME[month][day][idx].opp);
      var $opp = $(this).parent().prev().prev().prev();
      $opp.replaceWith($('<td>').append($oppForm));

      // 開始時間のフォーム
      var $startForm = $('<td>');
      var startTime = GAME[month][day][idx].start;
      $startForm
        .append($('<input>').attr('type', 'input').val(startTime.substr(0, 2)).addClass('sizefix').addClass('right'))
        .append($('<span>').html('：'))
        .append($('<input>').attr('type', 'input').val(startTime.substr(startTime.length - 2, 2)).addClass('sizefix').addClass('right'));
      var $start = $(this).parent().prev().prev();
      $start.replaceWith($startForm);

      // 予約者一覧の表示
      if(REV[month][day] !== null) {
        for(var i = 0; i < REV[month][day].length; i++) {
          var name = '';
          name += (REV[month][day][i].depart === '') ? '' : REV[month][day][i].depart + ' ';
          name += (REV[month][day][i].pos === '') ? '' : REV[month][day][i].pos + ' ';
          name += REV[month][day][i].name;
          $('#notice-rev-info ol').append($('<li>').html(name));
        }
        var pos = $(this).parent().prev().prev().position();
        var height = $(this).parent().prev().prev().outerHeight();
        var revHeight = $('#notice-rev-info').outerHeight();
        var documentHeight = $('body').outerHeight();
        alert(documentHeight + ', ' + (pos.top + height) + ', ' + revHeight);
        if(pos.top + height + revHeight > documentHeight - 30) {
          $('#notice-rev-info')
            .css({
              top : pos.top - revHeight,
              left : pos.left
            })
            .show();
        }
        else {
          $('#notice-rev-info')
            .css({
              top : pos.top + height,
              left : pos.left
            })
            .show();
        }
      }
    }
    else if($(this).val() === '保存') {
      $('input, select').removeAttr('disabled');
      $(this).val('編集');

      // 情報の保存
      // 日付のフォーム
      var $_dayForm = $(this).parent().prev().prev().prev().prev();
      var $_month = $('input', $_dayForm);
      var _month = parseInt($_month.val());
      var $_day = $_month.next().next();
      var _day = parseInt($_day.val());

      // 対戦相手のフォーム
      var $_oppForm = $(this).parent().prev().prev().prev();
      var _opp = $('select', $_oppForm).val();

      // 開始時間のフォーム
      var $_startForm = $(this).parent().prev().prev();
      var $_hour = $('input', $_startForm);
      var _hour = $_hour.val();
      var _minute = $_hour.next().next().val();

      _month = _month - 1;
      if(month !== _month || day !== _day) {
        GAME[month][day].splice(idx, 1);
        GAME[_month][_day].push({
          opp : _opp,
          start : _hour + ':' + _minute
        });
      }
      else {
        GAME[month][day][idx].opp = _opp;
        GAME[month][day][idx].start = _hour + '：' + _minute;
      }

      setRegGameinfo2();
    }
    else if($(this).val() === '削除') {
      var row = $(this).attr('row');
      var month = parseInt($(this).attr('month'));
      var day = parseInt($(this).attr('day'));
      var idx = parseInt($(this).attr('idx'));
      var str = '試合情報\n';
      str += '日付：' + (month + 1) + '月' + day + '日\n';
      str += '対戦相手：' + GAME[month][day][idx].opp + '\n';
      str += '開始時間：' + GAME[month][day][idx].start + '\n\n';
      str += 'この試合を本当に削除しますか？';
      if(confirm(str)) {
        GAME[month][day].splice(idx, 1);
        setRegGameinfo2();
      }
    }
  });
}

function initRevList() {
  setRevList();

  $('#contents input[type="button"]').click(function() {
    if(confirm('チェックした項目を削除してもよろしいですか？')) {
      $($('#rev-list input[type="checkbox"]:checked').get().reverse()).each(function(idx, elem) {
        var month = parseInt($(this).attr('month'));
        var day = parseInt($(this).attr('day'));
        var index = parseInt($(this).attr('idx'));
        REV[month][day].splice(index, 1);
      })
      setRevList();
    }
  });

  $(document)
    .on('change', '#monthfilter, #dayfilter, #namefilter, #oppfilter, #hourfilter', function() {
      setRevList();
    });
}

// 予約登録者をセットする
function setRevList() {
  // フィルター情報を取得
  var monthfilter = ($('#monthfilter').val() === undefined) ? '月' : $('#monthfilter').val();
  var dayfilter = ($('#dayfilter').val() === undefined) ? '日' : $('#dayfilter').val();
  var namefilter = ($('#namefilter').val() === undefined) ? '予約者名' : $('#namefilter').val();
  var oppfilter = ($('#oppfilter').val() === undefined) ? '対戦相手' : $('#oppfilter').val();
  var hourfilter = ($('#hourfilter').val() === undefined) ? '開始時間' : $('#hourfilter').val();

  var $revlist = $('#rev-list');
  $revlist.children().remove();
  var $th = $('<tr>').addClass('lightgray');
  var $monthfilter = $('<select id="monthfilter">');
  $monthfilter
    .append($('<option>').html('月'));
  for(var i = 1; i <= 12; i++) {
    $monthfilter.append($('<option>').html(i + '月'));
  }
  var $dayfilter = $('<select id="dayfilter">');
  $dayfilter
    .append($('<option>').html('日'));
  for(var i = 1; i <= 31; i++) {
    $dayfilter.append($('<option>').html(i + '日'));
  }
  var $namefilter = $('<select id="namefilter">').append($('<option>').html('予約者名'));

  var $oppfilter = $('<select id="oppfilter">').append($('<option>').html('対戦相手'));
  for(var i = 0; i < OPPS.length; i++) {
    $oppfilter.append($('<option>').html(OPPS[i]));
  }
  var $hourfilter = $('<select id="hourfilter">').append($('<option>').html('開始時間'));
  $hourfilter
    .append($('<option>').html('～18:00'))
    .append($('<option>').html('18:00～'));

  $monthfilter.val(monthfilter);
  $dayfilter.val(dayfilter);
  $namefilter.val(namefilter);
  $oppfilter.val(oppfilter);
  $hourfilter.val(hourfilter);
  $th
    .append($('<th>').append($monthfilter))
    .append($('<th>').append($dayfilter))
    .append($('<th>').append($namefilter))
    .append($('<th>').append($oppfilter))
    .append($('<th>').append($hourfilter))
    .append($('<th>').html('キャンセル'));
  $revlist.append($th);

  var idx = 0;
  for(var i = 0; i < REV.length; i++) {
    if(monthfilter !== undefined && monthfilter !== '月') {
      var monthfil = parseInt(monthfilter.slice(0, -1)) - 1;
      if(monthfil !== i) {
        continue;
      }
    }
    for(var j = 1; j <= 31; j++) {
      if(REV[i][j] === null) {
        continue;
      }
      if(dayfilter !== undefined && dayfilter !== '日') {
        var dayfil = parseInt(dayfilter.slice(0, -1));
        if(dayfil !== j) {
          continue;
        }
      }
      for(var k = 0; k < REV[i][j].length; k++) {
        if(oppfilter !== undefined && oppfilter !== '対戦相手') {
          if(oppfilter !== GAME[i][j][0].opp) {
            continue;
          }
        }
        if(hourfilter !== undefined && hourfilter !== '開始時間') {
          if(hourfilter.charAt(0) === '～') {
            var hourfil = parseInt(hourfilter.slice(1, 3));
            if(hourfil <= parseInt(GAME[i][j][0].start.slice(0, 2))) {
              continue;
            }
          }
          else {
            var hourfil = parseInt(hourfilter.slice(0, 2));
            if(hourfil > parseInt(GAME[i][j][0].start.slice(0, 2))) {
              continue;
            }
          }
        }

        var $tr = $('<tr id="row' + idx + '">').addClass('center');
        var name = (REV[i][j][k].depart === '') ? '' : REV[i][j][k].depart + ' ';
        name += (REV[i][j][k].pos === '') ? '' : REV[i][j][k].pos + ' ';
        name += REV[i][j][k].name;
        var $checkbox = $('<input>');
        $checkbox
          .attr('type', 'checkbox')
          .attr('row', 'row' + idx)
          .attr('month', i)
          .attr('day', j)
          .attr('idx', k)
          .val('編集');
        $tr
          .append($('<td>').html((i + 1) + '月'))
          .append($('<td>').html(j + '日'))
          .append($('<td>').html(name))
          .append($('<td>').html(GAME[i][j][0].opp))
          .append($('<td>').html(GAME[i][j][0].start))
          .append($('<td>').html($checkbox));

        $revlist.append($tr);
        idx += 1;
      }
    }
  }

}


function setWatermarkPassword($textbox, msg) {
  $textbox
    .css('background-image', 'url("password.png")')
    .css('background-repeat', 'no-repeat')
    .attr('msg', msg)
    .attr('type', 'password')
    .focus(function() {
      $(this).css('background-image', '');
      if($(this).val() === msg) {
        $(this).val('');
      }
      $(this).attr('type', 'password');
    })
    .blur(function() {
      if($(this).val() === '') {
        $(this).css('background-image', 'url("password.png")')
      }
    })
    .submit(function() {
      if($(this).val() === msg) {
        $(this).val('');
      }
    });
}