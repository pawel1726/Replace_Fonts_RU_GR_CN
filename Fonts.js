var myDocument = app.activeDocument;
var w = new Window ("dialog");
var maingroup = w.add ("panel", undefined, "Language");
//maingroup.add ("statictext", undefined, "Lęgłydż?");
var rusBtn = maingroup.add ("button", undefined, "RUSSIAN");
var greBtn = maingroup.add ("button", undefined, "GREEK");
var chinBtn = maingroup.add ("button", undefined, "CHT/JP/KO");
var  kwit = w.add ("button", undefined, "Cancel");
var LANG = 0;

function masz(){
alert ("OK")
}

rusBtn.onClick = function (){
    
    
   LANG = 1;
  
   //alert (LANG)
   
   w.close();
    }

greBtn.onClick = function (){
    
    
   LANG = 2;
  
   //alert (LANG)
   
   w.close();
    }

chinBtn.onClick = function (){
    
    
   LANG = 3;
  
   //alert (LANG)
   
   w.close();
    }

kwit.onClick = function (){
    
    
   LANG = 4;
  
   //alert (LANG)
   
   w.close();
    }
w.show ();

function clearAfter() {
        //Clear the find/change preferences after the search.
        app.findGrepPreferences = NothingEnum.nothing;
        app.changeGrepPreferences = NothingEnum.nothing;
    }

function clearBefore() {
        //Clear the find/change grep preferences.
        app.findGrepPreferences = NothingEnum.nothing;
        app.changeGrepPreferences = NothingEnum.nothing;
        //Set the find options.
        app.findChangeGrepOptions.includeFootnotes = false;
        app.findChangeGrepOptions.includeHiddenLayers = false;
        app.findChangeGrepOptions.includeLockedLayersForFind = false;
        app.findChangeGrepOptions.includeLockedStoriesForFind = false;
        app.findChangeGrepOptions.includeMasterPages = false;
}


if(LANG == 1) {

// xxxxxxxxx 1 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "230 Thin";

app.changeGrepPreferences.appliedFont = "HelveticaNeue LT Cyr 35 Thin";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 2 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "240 Thin Extended";

app.changeGrepPreferences.appliedFont = "HelveticaNeue LT Cyr 35 Thin";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 3 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "330 Light";

app.changeGrepPreferences.appliedFont = "HelveticaNeue LT Cyr 45 Light";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 4 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "340 Light Extended";

app.changeGrepPreferences.appliedFont = "HelveticaNeue LT Cyr 45 Light";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 5 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "331 Light Italic";

app.changeGrepPreferences.appliedFont = "HelveticaNeue LT Cyr 45 Light";
app.changeGrepPreferences.fontStyle = "Italic";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 6 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "430 Regular";

app.changeGrepPreferences.appliedFont = "HelveticaNeue LT Cyr 55 Roman";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 7 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "440 Extended";

app.changeGrepPreferences.appliedFont = "HelveticaNeue LT Cyr 55 Roman";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 8 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "431 Italic";

app.changeGrepPreferences.appliedFont = "HelveticaNeue LT Cyr 55 Roman";
app.changeGrepPreferences.fontStyle = "Italic";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 9 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "530 Medium";

app.changeGrepPreferences.appliedFont = "HelveticaNeue LT Cyr 65 Medium";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 10 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "540 Medium Extended";

app.changeGrepPreferences.appliedFont = "HelveticaNeue LT Cyr 65 Medium";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 11 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "630 Bold";

app.changeGrepPreferences.appliedFont = "HelveticaNeue LT Cyr 55 Roman";
app.changeGrepPreferences.fontStyle = "Bold";
myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 12 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "640 Bold Extended";

app.changeGrepPreferences.appliedFont = "HelveticaNeue LT Cyr 55 Roman";
app.changeGrepPreferences.fontStyle = "Bold";
myDocument.changeGrep();
clearAfter()

 masz()
}



if(LANG == 2) { 
    
clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "230 Thin";

app.changeGrepPreferences.appliedFont = "Proxima Nova";
app.changeGrepPreferences.fontStyle = "Thin";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 2 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "240 Thin Extended";

app.changeGrepPreferences.appliedFont = "Proxima Nova";
app.changeGrepPreferences.fontStyle = "Thin";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 3 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "330 Light";

app.changeGrepPreferences.appliedFont = "Proxima Nova";
app.changeGrepPreferences.fontStyle = "Light";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 4 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "340 Light Extended";

app.changeGrepPreferences.appliedFont = "Proxima Nova";
app.changeGrepPreferences.fontStyle = "Light";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 5 xxxxxxxxxx  EEEEEEEEEEEEEE

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "331 Light Italic";

app.changeGrepPreferences.appliedFont = "Proxima Nova";
app.changeGrepPreferences.fontStyle = "Light";
app.changeGrepPreferences.skew = 15;



myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 6 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "430 Regular";

app.changeGrepPreferences.appliedFont = "Proxima Nova";
app.changeGrepPreferences.fontStyle = "Regular";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 7 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "440 Extended";

app.changeGrepPreferences.appliedFont = "Proxima Nova";
app.changeGrepPreferences.fontStyle = "Regular";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 8 xxxxxxxxxx  EEEEEEE

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "431 Italic";

app.changeGrepPreferences.appliedFont = "Proxima Nova";
app.changeGrepPreferences.fontStyle = "Regular";
app.changeGrepPreferences.skew = 15;

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 9 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "530 Medium";

app.changeGrepPreferences.appliedFont = "Proxima Nova";
app.changeGrepPreferences.fontStyle = "Semibold";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 10 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "540 Medium Extended";

app.changeGrepPreferences.appliedFont = "Proxima Nova";
app.changeGrepPreferences.fontStyle = "Semibold";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 11 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "630 Bold";

app.changeGrepPreferences.appliedFont = "Proxima Nova";
app.changeGrepPreferences.fontStyle = "Bold";
myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 12 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "640 Bold Extended";

app.changeGrepPreferences.appliedFont = "Proxima Nova";
app.changeGrepPreferences.fontStyle = "Bold";
myDocument.changeGrep();
clearAfter()
    
    masz()
    
    }
if(LANG == 3) { 
    
clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "230 Thin";
app.findGrepPreferences.findWhat = "([\\x{2E00}-\\x{FAFF}]|[\\x{FF00}-\\x{FFEF}])";

app.changeGrepPreferences.appliedFont = "NimbusSansGlobal";
app.changeGrepPreferences.fontStyle = "Light";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 2 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "240 Thin Extended";
app.findGrepPreferences.findWhat = "([\\x{2E00}-\\x{FAFF}]|[\\x{FF00}-\\x{FFEF}])";

app.changeGrepPreferences.appliedFont = "NimbusSansGlobal";
app.changeGrepPreferences.fontStyle = "Light";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 3 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "330 Light";
app.findGrepPreferences.findWhat = "([\\x{2E00}-\\x{FAFF}]|[\\x{FF00}-\\x{FFEF}])";

app.changeGrepPreferences.appliedFont = "NimbusSansGlobal";
app.changeGrepPreferences.fontStyle = "Light";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 4 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "340 Light Extended";
app.findGrepPreferences.findWhat = "([\\x{2E00}-\\x{FAFF}]|[\\x{FF00}-\\x{FFEF}])";

app.changeGrepPreferences.appliedFont = "NimbusSansGlobal";
app.changeGrepPreferences.fontStyle = "Light";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 5 xxxxxxxxxx  EEEEEEEEEEEEEE

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "331 Light Italic";
app.findGrepPreferences.findWhat = "([\\x{2E00}-\\x{FAFF}]|[\\x{FF00}-\\x{FFEF}])";

app.changeGrepPreferences.appliedFont = "NimbusSansGlobal";
app.changeGrepPreferences.fontStyle = "Light";
app.changeGrepPreferences.skew = 15;



myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 6 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "430 Regular";
app.findGrepPreferences.findWhat = "([\\x{2E00}-\\x{FAFF}]|[\\x{FF00}-\\x{FFEF}])";

app.changeGrepPreferences.appliedFont = "NimbusSansGlobal";
app.changeGrepPreferences.fontStyle = "Regular";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 7 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "440 Extended";
app.findGrepPreferences.findWhat = "([\\x{2E00}-\\x{FAFF}]|[\\x{FF00}-\\x{FFEF}])";

app.changeGrepPreferences.appliedFont = "NimbusSansGlobal";
app.changeGrepPreferences.fontStyle = "Regular";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 8 xxxxxxxxxx  EEEEEEE

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "431 Italic";
app.findGrepPreferences.findWhat = "([\\x{2E00}-\\x{FAFF}]|[\\x{FF00}-\\x{FFEF}])";

app.changeGrepPreferences.appliedFont = "NimbusSansGlobal";
app.changeGrepPreferences.fontStyle = "Regular";
app.changeGrepPreferences.skew = 15;

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 9 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "530 Medium";
app.findGrepPreferences.findWhat = "([\\x{2E00}-\\x{FAFF}]|[\\x{FF00}-\\x{FFEF}])";

app.changeGrepPreferences.appliedFont = "NimbusSansGlobal";
app.changeGrepPreferences.fontStyle = "Medium";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 10 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "540 Medium Extended";
app.findGrepPreferences.findWhat = "([\\x{2E00}-\\x{FAFF}]|[\\x{FF00}-\\x{FFEF}])";

app.changeGrepPreferences.appliedFont = "NimbusSansGlobal";
app.changeGrepPreferences.fontStyle = "Medium";

myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 11 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "630 Bold";
app.findGrepPreferences.findWhat = "([\\x{2E00}-\\x{FAFF}]|[\\x{FF00}-\\x{FFEF}])";

app.changeGrepPreferences.appliedFont = "NimbusSansGlobal";
app.changeGrepPreferences.fontStyle = "Bold";
myDocument.changeGrep();
clearAfter()

// xxxxxxxxx 12 xxxxxxxxxx  

clearBefore()
app.findGrepPreferences.appliedFont = app.fonts.item("Linotype Univers");
app.findGrepPreferences.fontStyle = "640 Bold Extended";
app.findGrepPreferences.findWhat = "([\\x{2E00}-\\x{FAFF}]|[\\x{FF00}-\\x{FFEF}])";

app.changeGrepPreferences.appliedFont = "NimbusSansGlobal";
app.changeGrepPreferences.fontStyle = "Bold";
myDocument.changeGrep();
clearAfter()
    
    masz()
    }
