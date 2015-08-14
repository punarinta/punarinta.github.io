var clock =
{
  show: function(min, sec)
  {
    this.digit(3, Math.floor(min / 10))
    this.digit(2, Math.floor(min % 10))
    this.digit(1, Math.floor(sec / 10))
    this.digit(0, Math.floor(sec % 10))
  },

  digit: function(depth, value)
  {
    var bc = document.getElementById('clock'),
        top = bc.children[0],
        bottom = bc.children[1]

    for (var i = 0; i < 4; i++)
    {
      if (depth >= i)
      {
        top = top.children[0]
        bottom = bottom.children[0]
      }
    }

    var off = 'black', on = ['cyan', 'lime', 'yellow', 'magenta'], flags =
    [
      [1,1,1,1,1,1],
      [0,1,1,0,0,0],
      [1,1,0,1,1,0],
      [1,1,1,1,0,0],
      [0,1,1,0,0,1],
      [1,0,1,1,0,1],
      [1,0,1,1,1,1],
      [1,1,1,0,0,0],
      [1,0,0,1,0,0],
      [1,1,1,1,0,1]
    ]

    top.style.borderTopColor = flags[value][0] ? on[depth] : off
    top.style.borderRightColor = flags[value][1] ? on[depth] : off
    bottom.style.borderRightColor = flags[value][2] ? on[depth] : off
    bottom.style.borderBottomColor = flags[value][3] ? on[depth] : off
    bottom.style.borderLeftColor = flags[value][4] ? on[depth] : off
    top.style.borderLeftColor = flags[value][5] ? on[depth] : off
  }
}