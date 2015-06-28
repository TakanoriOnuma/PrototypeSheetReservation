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
  for(var i = 0; i < 5; i++) {
    var $week = $('<tr>');
    for(var j = 0; j < 7; j++) {
      if(date[i * 7 + j] === ' ' || GAME[month][date[i * 7 + j]].length === 0) {
        var $noGame = $('<td>').addClass('nogame');
        $noGame.append(($('<span>').addClass('day').html(date[i * 7 + j])));
        $week.append($noGame);
      }
      else {
        var $oneGame = $('<td>').addClass('game');
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
      var str = '以下の情報を削除してもよろしいですか？\n';
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
    .append($('<th>').html('登録・削除'));
  $revinfo.append($th);
  if(REV[date['month']][date['day']] !== null) {
    var revList = REV[date['month']][date['day']];
    for(var i = 0; i < revList.length; i++) {
      var $tr = $('<tr>');
      var name = (revList[i]['depart'] === '') ? '' : revList[i]['depart'] + ' ';
      name += (revList[i]['pos'] === '') ? '' : revList[i]['pos'] + ' ';
      name += revList[i]['name'];
      $reviseForm = $('<div>').addClass('reviseForm').attr('key', i);
      $reviseForm
        .append($('<input>').attr('type', 'password'))
        .append($('<input>').attr('type', 'button').val('編集'))
        .append($('<input>').attr('type', 'button').val('削除'));
      $tr
        .append($('<td>').html(name))
        .append($('<td>').html(revList[i]['sheet'] + '席'))
        .append($('<td>').html(revList[i]['date']))
        .append($('<td>').append($reviseForm));
      $revinfo.append($tr);
    }
  }

  $('.reviseForm input[type="button"]').click(function() {
    // password check
    var $reviseForm = $(this).parent();
    var key = $reviseForm.attr('key');
    var password = $('input[type="password"]', $reviseForm).val();
    if(revList[key]['password'] === password) {
      alert($(this).val());
    }
    else {
      alert('パスワードが正しくありません。');
    }
  });
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
    .append($('<th>').html('キャンセル'));
  $revinfo.append($th);
  if(REV[date['month']][date['day']] !== null) {
    var revList = REV[date['month']][date['day']];
    for(var i = 0; i < revList.length; i++) {
      var $tr = $('<tr>').attr('number', i);
      var name = (revList[i]['depart'] === '') ? '' : revList[i]['depart'] + ' ';
      name += (revList[i]['pos'] === '') ? '' : revList[i]['pos'] + ' ';
      name += revList[i]['name'];
      $tr
        .append($('<td>').html(name))
        .append($('<td>').html(revList[i]['sheet'] + '席'))
        .append($('<td>').html(revList[i]['date']))
        .append($('<td>').append($('<img>').attr('src', 'batsu.png').attr('number', i)));
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
  }
  else {
    $revNum.addClass('safe');
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

  $(window).on('resize', function() {
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