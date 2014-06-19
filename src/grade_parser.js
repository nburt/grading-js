window.GradeParser = {

  getMovements: function (grades) {
    var array = [];
    for (i = 0; i < grades.length; i++) {
      if (grades[i] < grades[i - 1]) {
        array.push('down');
      } else if (grades[i] > grades[i - 1]) {
        array.push('up');
      } else {
        array.push('even')
      }
    }
    array.shift();
    return array;
  },

  getTrend: function (grades) {
    var movements = GradeParser.getMovements(grades);
    var consecutive_decline = 0;
    for (i = 0; i < movements.length; i++) {
      if (movements[i] === 'up') {
        consecutive_decline = 0;
      } else if (movements[i] === 'down') {
        consecutive_decline += 1;
      }
    }
    if (consecutive_decline > 2) {
      return 'in decline';
    } else {
      return 'not in decline';
    }
  }
};