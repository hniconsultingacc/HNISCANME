function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5oVKOAjbCv8":
        Script1();
        break;
      case "60fl3qabooD":
        Script2();
        break;
      case "5rC3mlnqOQw":
        Script3();
        break;
      case "69xnvJXaq9k":
        Script4();
        break;
      case "5lSjG6L1SWA":
        Script5();
        break;
      case "5snpMC1q98V":
        Script6();
        break;
      case "5fqFq1Cmqfh":
        Script7();
        break;
      case "5xDjtOcPWN1":
        Script8();
        break;
      case "5qnHLu7OZUZ":
        Script9();
        break;
      case "6XMYsm1vVsm":
        Script10();
        break;
      case "6HbH7RgY2dB":
        Script11();
        break;
      case "6doGMnaJz7H":
        Script12();
        break;
      case "6bne4sBD5ch":
        Script13();
        break;
      case "5mLEsJtuQt8":
        Script14();
        break;
      case "5qVUQg36Z8D":
        Script15();
        break;
      case "5WHP84WtXXc":
        Script16();
        break;
      case "6XZb5W3of9F":
        Script17();
        break;
      case "62PBsv8RJQh":
        Script18();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5uHIMSE4xxo');
const duration = 5000;
const easing = 'linear';
const id = '6bcRH8Qdk6n';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
