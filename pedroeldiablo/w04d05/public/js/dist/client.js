'use strict';

$(function () {
  loadLines();

  $('form').on('submit', getLines);
});

var loadLines = function loadLines() {
  $.ajax({
    method: 'GET',
    url: "http://localhost:8000/lines"
  }).done(function (res) {
    console.log(res.data);
    $.each(res.data, function (index, line) {
      addLine(line);
    });
  });
};

var addLine = function addLine(line) {
  $('#lines').prepend('<li>"$line.name"</li>');
};

var getLines = function getLines(e) {
  e.preventDefault();
  var linesearch = $('.linesearch').val();
  $.ajax({
    method: 'GET',
    url: "http://localhost:8000" + linesearch
  }).done(function (res) {
    console.log(res.data);
    $.each(res.data, function (index, line) {
      addLine(line);
    });
  });
};