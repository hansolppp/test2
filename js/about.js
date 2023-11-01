$(document).ready(function(){
  // function 함수이름(입력값1, 입력값2, ...){}  
  function skill(id, percent){
    var bar = new ProgressBar.Line(id, {
      strokeWidth: 4,
      trailWidth: 4,
      color: "#FF7360",
      duration: 2400,
      // step: (state, bar) => {
      step: function(state, bar){
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    bar.animate(percent)
  }
  skill("#Ae", 0.7)
  skill("#Pr", 0.9)
  skill("#Ps", 0.9)
  skill("#Ai", 0.7)
  skill("#FCP", 0.7)
  skill("#c4d", 0.6)
}) 
