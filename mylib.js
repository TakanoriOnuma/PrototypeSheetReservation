// date: 7 * 5のカレンダーに表示するべき文字列
// $output: 出力するタグ
function makeCalendar(date, $output) {
  var weekTable = ['日', '月', '火', '水', '木', '金', '土'];
  $output.children().remove();

  var $table = $('<table border="1">');
  var $week = $('<tr>');
  for(var i = 0; i < 7; i++) {
    $week.append($('<td>').html(weekTable[i]));
  }
  $table.append($week);
  for(var i = 0; i < 5; i++) {
    var $week = $('<tr>');
    for(var j = 0; j < 7; j++) {
      $week.append($('<td>').html(date[i * 7 + j]));
    }
    $table.append($week);
  }
  $output.append($table);
}