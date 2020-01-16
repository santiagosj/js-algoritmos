var timer_start_id = 'input#timer_start';
var timer_time_id = 'input#timer_input_time';//input time
var timer_count_id = 'span#timer_count';//span
var timer_end_message = 'Tiempo Cumplido';

var timer_countdown = '';
var timer_status = 'stopped';
var timer_current = '';


function timer(action){
  
  if (action == 'start') {
    if (timer_status == 'stopped') {
      timer_update_value(timer_start_id, 'Pause');
      timer_status = 'running';
      timer_current = timer_countdown;
      timer_update_time(timer_count_id, timer_countdown);
    }
    else if (timer_status == 'running') {
      timer_update_value(timer_start_id, 'Resume');
      timer_status = 'paused';
    }
    else if (timer_status == 'paused') {
      timer_update_value(timer_start_id, 'Pause');
      timer_status = 'running';
    }
  }
  else if (action == 'stop') {
    timer_update_value(timer_start_id, 'Start');
    timer_status = 'stopped';
    timer_update_time(timer_count_id, timer_end_message);
  }
  else if (action == 'reset') {
    timer_update_value(timer_start_id, 'Start');
    timer_status = 'stopped';
    timer_update_time(timer_count_id, timer_countdown);
  }
  
  var a =  timer_current.split(":");
  var m = a[0];
  var s = (a[1] - 1);
  
  if (s < 0) {
    if (parseInt(m) == 0) {
      timer_update_value(timer_start_id, 'Start');
      timer_status = 'stopped';
      timer_update_time(timer_count_id, timer_end_message);
    }
    else {
      m = m - 1;
      s = 59;
    }
  }
  
  if(s >= 0){
    setTimeout(function(){
      if (timer_status == 'running') {
        m = (parseInt(m) < 10)? "0" + parseInt(m): m;
        s = (parseInt(s) < 10)? "0" + parseInt(s): s;
        timer_update_time(timer_count_id, m + ":" + s);
        timer_current = m + ":" + s;
        timer('');
      }
    }, 1000);
  }
}

function timer_update_value(selector, value) {
  if (selector != '') {
    $(selector).val(value);
  }
}


function timer_update_time(selector, value) {
  if (selector != '') {
    $(selector).text(value);
  }
}
//
$(document).ready(function() {

  timer_countdown = $(timer_time_id).val();

  timer_update_time(timer_count_id, timer_countdown);
  
  $(timer_time_id).keyup(function() {

    timer_countdown = $(timer_time_id).val();

    timer_update_time(timer_count_id, timer_countdown);

    timer_update_value(timer_start_id, 'Start');

    timer_status = 'stopped';

  });
});