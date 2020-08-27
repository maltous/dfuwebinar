function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6LzI2p2U66l":
        Script1();
        break;
      case "6m2bcaAwgIP":
        Script2();
        break;
      case "6cIncvStqt1":
        Script3();
        break;
      case "68XkZOABZeo":
        Script4();
        break;
      case "5leyyPj5RpJ":
        Script5();
        break;
      case "6YaZsONCeDK":
        Script6();
        break;
      case "6D05eHI5ALO":
        Script7();
        break;
      case "6rGHDYbGMmt":
        Script8();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script7()
{
  $("#tab-customlink").show();
}

function Script8()
{
  window.print();
}

