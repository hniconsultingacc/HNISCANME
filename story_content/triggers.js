function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5spq7bVR8Nw":
        Script1();
        break;
      case "6U0Acl0mik6":
        Script2();
        break;
      case "5sgZydpwVcT":
        Script3();
        break;
      case "6dd7sOzvKE1":
        Script4();
        break;
      case "6BLlZC4PINb":
        Script5();
        break;
      case "5dDcIIZNBxW":
        Script6();
        break;
      case "68JPmSo9mre":
        Script7();
        break;
      case "6AbgTngq6vj":
        Script8();
        break;
      case "5ymLt02jwBR":
        Script9();
        break;
      case "65RVGU6U7bU":
        Script10();
        break;
      case "6eD2mx3IglC":
        Script11();
        break;
      case "6nFun2g8EI5":
        Script12();
        break;
      case "5oNUpwf6E7W":
        Script13();
        break;
      case "6O7gMstLesj":
        Script14();
        break;
      case "5qBewhXDUBx":
        Script15();
        break;
      case "6gKZKhxC3Jx":
        Script16();
        break;
      case "6CsQVOwDLIS":
        Script17();
        break;
      case "5a4UQMdEJfI":
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
