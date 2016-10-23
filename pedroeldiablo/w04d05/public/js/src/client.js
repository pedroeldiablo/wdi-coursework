// $(function(){

  // loadLines();

  // $('form').on('submit', getLines);

// });

  const loadLines = () => {
    $.ajax({
      method:'GET',
      url: "http://localhost:8000/lines"
    })
    .done((res) => {
      console.log(res);
      $.each(res, (index, line) => {
        addLine(line);
      });
    });
  };

  loadLines();


  const addLine = (line) => {
    $('#lines').prepend(`<li>${line.name}</li>`);
  };



  // const getLines = (e) => {
  //   e.preventDefault();
  //   let linesearch = $('.linesearch').val();
  //   $.ajax({
  //     method:'GET',
  //     url: "http://localhost:8000/lines" + linesearch
  //   })
  //   .done((res) => {
  //     console.log(res.data);
  //     $.each(res.data, (index, line) => {
  //       addLine(line);
  //
  //     });
  //   });
  // };
