function ExecuteScript(strId)
{
  switch (strId)
  {
      case "67ztjXwu73p":
        Script1();
        break;
      case "6G4BASZikMQ":
        Script2();
        break;
      case "6KkfUjTbos7":
        Script3();
        break;
      case "6mxK89WN2bw":
        Script4();
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
const target = object('5VAalnabjrW');
const duration = 750;
const easing = 'linear';
const id = '5dKYgwuMqvn';
const growAmount = 0.3;
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

window.Script2 = function()
{
  player.once(() => {
const target = object('6H5HmzSHHqu');
const duration = 750;
const easing = 'ease-out';
const id = '5rre92KKz7Z';
const growAmount = 0.2;
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

window.Script3 = function()
{
  const target = object('6H5HmzSHHqu');
const duration = 1750;
const easing = 'ease-out';
const id = '5oWjl4VJAUe';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  player.once(() => {
const target = object('6Sa4wQynAEp');
const duration = 750;
const easing = 'ease-out';
const id = '5oWjl4VJAUe';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
