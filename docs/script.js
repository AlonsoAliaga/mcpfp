/**
 * Dear programmer:
 * When I wrote this code, only god and 
 * I knew how it worked.
 * Now, only god knows it!
 * 
 * You have been warned.
 * 
 * For more information visit: https://alonsoaliaga.com/DearProgrammer
 */
const defaultGradients = {
  0:{
    identifier:"default",
    colors:["#00cdac", "#02aab0"],
  },
  1:{
    identifier:"rainbow",
    colors:["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"],
  },
  2:{
    identifier:"instagram",
    colors:["#833ab4", "#fd1d1d", "#fcb045"],
  },
  3:{
    identifier:"fire",
    colors:["#A10100", "#DA3604", "#FE650D", "#FFC11F", "#FFF75D"],
  },
  4:{
    identifier:"amethyst",
    colors:["#D93894","#B327BB", "#6E48AA"],
  },
  5:{
    identifier:"tiktok",
    colors:["#FF0050", "#4B0018", "#00F2EA"],
  },
  6:{
    identifier:"rose",
    colors:["#F4C4F3","#FC67FA"]
  }
}
const fonts = {
  "accent": {
    "name": "Accent",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ĀBÇÐÊFǴĦÎĴĶĿMŇήÖPQŘŞŢŬVŴXŸƵābčďéfǥĥɨĵķłmņŇǒpqřşŧùvŵxŷž⁰¹²³⁴⁵⁶⁷⁸⁹".split("")
    }
  },
  "big": {
    "name": "Big",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎÑOᑭᑫᖇᔕTᑌᐯᗯ᙭YᘔᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎñOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ0123456789".split("")
    }
  },
  "bubble": {
    "name": "Bubble",
    "processed": {},
    "data": {
      tosearch: "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⓪①②③④⑤⑥⑦⑧⑨".split("")
    }
  },
  "currency": {
    "name": "Currency",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦ÑØ₱QⱤ₴₮ɄV₩ӾɎⱫ₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦ñØ₱QⱤ₴₮ɄV₩ӾɎⱫ0123456789".split("")
    }
  },
  "cursed": {
    "name": "Cursed",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ԹՅՇԺȝԲԳɧɿʝƙʅʍՌՌԾρφՐՏԵՄעաՃՎՀԹՅՇԺȝԲԳɧɿʝƙʅʍՌՌԾρφՐՏԵՄעաՃՎՀ0123456789".split("")
    }
  },
  "elegant": {
    "name": "Elegant",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ąɓƈđε∱ɠɧïʆҡℓɱŋñσþҩŗşŧų√щхγẕąɓƈđε∱ɠɧïʆҡℓɱŋñσþҩŗşŧų√щхγẕ0123456789".split("")
    }
  },
  "greek": {
    "name": "Greek",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"αႦƈԃҽϝɠԋιʝƙʅɱɳñσρϙɾʂƚυʋɯxყȥαႦƈԃҽϝɠԋιʝƙʅɱɳñσρϙɾʂƚυʋɯxყȥ0123456789".split("")
    }
  },
  "knight": {
    "name": "Knight",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ḀḃḉḊḕḟḠḧḭjḲḶṁṆÑṏṖqṙṠṮṳṼẇẌẏẒḀḃḉḊḕḟḠḧḭjḲḶṁṆñṏṖqṙṠṮṳṼẇẌẏẒ0123456789".split("")
    }
  },
  "krypto": {
    "name": "Krypto",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"คც८ძ૯Բ૭ҺɿʆқՆɱՈÑ૦ƿҩՐς੮υ౮ω૪עઽคც८ძ૯Բ૭ҺɿʆқՆɱՈՈ૦ƿҩՐς੮υ౮ω૪עઽ0123456789".split("")
    }
  },
  "parenthesis": {
    "name": "Parenthesis",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⒪⑴⑵⑶⑷⑸⑹⑺⑻⑼".split("")
    }
  },
  "random": {
    "name": "Random",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁÑᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁñᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚ0123456789".split("")
    }
  },
  "small-caps": {
    "name": "Small caps 💎",
    "before": function(s) {
      return s.toLowerCase();
    },
    "processed": {},
    "data": {
      tosearch:"abcdefghijklmnñopqrstuvwxyzqæƀðʒǝɠɨłꟽɯœɔȣꝵʉγλπρψ0123456789-+".split(""),
      toreplace:"ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴñᴏᴘǫʀsᴛᴜᴠᴡxʏᴢǫᴁᴃᴆᴣⱻʛᵻᴌꟺꟺɶᴐᴕꝶᵾᴦᴧᴨᴩᴪ₀₁₂₃₄₅₆₇₈₉₋₊".split("")
    }
  },
  "spaced": {
    "name": "Spaced",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ＡＢＣＤＥＦＧＨＩＪＫＬＭＮÑＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎñｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９".split("")
    }
  },
  "superscript": {
    "name": "SuperScript",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺÑᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻᵃᵇᶜᵈᵉᶠᵍʰᶦʲᵏˡᵐⁿñᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹".split("")
    }
  },
  "tail": {
    "name": "Tail",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ƛƁƇƊЄƑƓӇƖʆƘԼMƝƝƠƤƢƦƧƬƲƔƜҲƳȤʌƅƈɗєƒʛɦɪʝƙʅɱɲɲơƥƣɾƨƭυvɯҳɣȥ0123456789".split("")
    }
  },
  "tailuppercase": {
    "name": "Tail Uppercase",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ƛƁƇƊЄƑƓӇƖʆƘԼMƝƝƠƤƢƦƧƬƲƔƜҲƳȤƛƁƇƊЄƑƓӇƖʆƘԼMƝÑƠƤƢƦƧƬƲƔƜҲƳȤ0123456789".split("")
    }
  },
  "taillowercase": {
    "name": "Tail Lowercase",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ʌƅƈɗєƒʛɦɪʝƙʅɱɲɲơƥƣɾƨƭυVɯҳɣȥʌƅƈɗєƒʛɦɪʝƙʅɱɲɲơƥƣɾƨƭυvɯҳɣȥ0123456789".split("")
    }
  },
  "upsidedown": {
    "name": "Upside down",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"∀ᙠƆᗡƎℲ⅁HIſ⋊˥WNÑOԀΌᴚS⊥∩ΛWX⅄Zɐqɔpǝɟɓɥıɾʞlɯuñopqɹsʇuʌʍxʎz0⇂ᄅƐㄣގ9ㄥ89".split("")
    }
  },
  "upsidedown2": {
    "name": "Upside down #2",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ɐqɔpǝɟɓɥıſʞๅɯuuodbɹsʇnʌʍxʎzɐqɔpǝɟɓɥıſʞๅɯuũodbɹsʇnʌʍxʎz0123456789".split("")
    }
  },
  "upsidedown3": {
    "name": "Upside down #3",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"∀ʙCᴅєɻƋʜǀๅĸΓWИÑObƠɩƧ⊥∏ΛMXλZɑʙcᴅєɻმʜιɿĸгwиñoƅϭʁƨ⊥nʌʍx⑃z0123456789".split("")
    }
  },
  "weird": {
    "name": "Weird",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ǟɮƈɖɛʄɢɦɨʝӄʟʍռñօքզʀֆȶʊʋաӼʏʐǟɮƈɖɛʄɢɦɨʝӄʟʍռñօքզʀֆȶʊʋաӼʏʐ0123456789".split("")
    }
  }
}
const defaultCooldown = 3;
let copiedTimeout;
function copyTextToClipboard(text) {
  let textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.bottom= 0;
  textArea.style.left= 0;

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  document.execCommand('copy');
  /*
  let copiedElement = document.createElement('copied-element');
  copiedElement.style.display = "inline-block"
  if(copiedTimeout) {
    clearTimeout(copiedTimeout);
  }

  copiedTimeout = setTimeout(()=>{

    copiedTimeout = undefined;
  },500);
  alert('You text was copied! Ready to paste!\n\nThanks for using our tool!\n- AlonsoAliaga');
  */
  alertCopied();
  document.body.removeChild(textArea);
}
function alertCopied() {
  if(copiedTimeout) {
    clearTimeout(copiedTimeout);
    var sb = document.getElementById("snackbar");
    sb.className = sb.className.replace("show", "");
  }
  var sb = document.getElementById("snackbar");

  //this is where the class name will be added & removed to activate the css
  sb.className = "show";

  copiedTimeout = setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
}
function markAll() {
  for(let errorType of Object.keys(errorsFormat)) {
    let errorTypeOption = document.getElementById(`${errorType}-option`);
    if(errorTypeOption) {
      errorTypeOption.checked = true;
    }
  }
}
function unmarkAll() {
  for(let errorType of Object.keys(errorsFormat)) {
    let errorTypeOption = document.getElementById(`${errorType}-option`);
    if(errorTypeOption) {
      errorTypeOption.checked = false;
    }
  }
}
function test() {
  console.log("TESTING WORKS!")
}
let  buttonsToToggleDarkMode = ["appearance","inputText","download-all","colors-amount","button-toggle-custom-gradient-div",
"button-remove-watermark-download-div","button-custom-background-div","button-revert-skin-div","button-shadow-div","button-no-background-div"];
function toggleDarkmode() {
    if (document.getElementById('darkmode').checked == true) {
      document.body.classList.add('dark');
      //document.getElementById('result').classList.add("darktextboxes");
      for(let n of   buttonsToToggleDarkMode) {
        let d = document.getElementById(n);
        if(d) {
          d.classList.remove("lightbuttonboxes");
          d.classList.add("darkbuttonboxes");
        }
      }
      let success = document.getElementById('success_message');
      if(success) {
        success.classList.remove("successlight");
        success.classList.add("successdark");
      }
    } else {
      document.body.classList.remove('dark');
      //document.getElementById('result').classList.remove("darktextboxes");
      //Buttons
      for(let n of   buttonsToToggleDarkMode) {
        let d = document.getElementById(n);
        if(d) {
          d.classList.remove("darkbuttonboxes");
          d.classList.add("lightbuttonboxes");
        }
      }
      let success = document.getElementById('success_message');
      if(success) {
        success.classList.remove("successdark");
        success.classList.add("successlight");
      }
    }
    //console.log("Dark mode is now: "+(document.getElementById('darkmode').checked))
}
function checkSite(window) {
  let search = window.location.search;
  if(typeof search !== "undefined" && search.length > 0) {
    let parts = atob(search.slice(1)).split("&");
    for(let part of parts) {
      let [k,v] = part.split("=");
      k = btoa(k);
      if(k == "dXNlcm5hbWU=") {
        if(v.match(/[a-z0-9_]/gi)) {
          setTimeout(()=>{
            usernameInput.value = v;
            processUsername();
          },500);
        }
      }
    }
  }
  setTimeout(()=>{
    let href = window.location.href;
    if(!href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw=="))) {
      try{document.title = `Page stolen from https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}`;}catch(e){}
      window.location = `https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}/mcpfp/`}
  });
}
function selectTab(evt, tabName, buttonName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  if(evt) {
    evt.currentTarget.className += " active";
  }else if(buttonName) {
    let b = document.getElementById(buttonName);
    if(b) b.className += " active";
  }
}
//const jsyaml = require("js-yaml");
function compareFiles() {
  clearResults();
  processed1 = undefined;
  processed2 = undefined;
  outputExtension = ".yml";
  let input1 = document.getElementById("current-config");
  let input2 = document.getElementById("new-config");
  let currentFile = input1.files[0];
  let newFile = input2.files[0];
  if(typeof currentFile == "undefined") {
    alert('Current configuration cannot be empty!');
    return;
  }
  let matchExtension = allowedExtensions.find(r=> currentFile.name.endsWith(r));
  if(!matchExtension) {
    alert(`Current configuration must be a valid yaml file!\nAllowed types: ${allowedExtensions.join(" ")}`);
    return;
  }
  if(typeof newFile == "undefined") {
    alert('New configuration cannot be empty!');
    return;
  }
  if(!allowedExtensions.find(r=> newFile.name.endsWith(r))) {
    alert(`New configuration must be a valid yaml file!\nAllowed types: ${allowedExtensions.join(" ")}`);
    return;
  }
  outputExtension = matchExtension;
  // console.log(`Attempting to compare '${currentFile.name}' & '${newFile.name}'`);
  input1.value = "";
  input2.value = "";
  var reader1 = new FileReader();
  //let schem1 = jsyaml.DEFAULT_SCHEMA;
  reader1.onloadend = function(event) {
    // console.log(`Starting load of ${currentFile.name}`)
    let result = event.target.result;
    // console.log(`Successfully result ${currentFile.name}`)
    //processed1 = result;
    //console.log(result);
    /*
    processed1 = jsyaml.load(result, { schem1 });
    console.log(`Successfully loaded ${currentFile.name}`)
    console.log(processed1)
    */
    //if(processed2) processComparator();

    //var reader2 = new FileReader();
    //let schem2 = jsyaml.DEFAULT_SCHEMA;
    reader1.onloadend = function(event2) {
      // console.log(`Starting load of ${newFile.name}`)
      let result2 = event2.target.result;
      // console.log(`Successfully result ${newFile.name}`)
      //processed2 = result2;
      //console.log(result2);
      //processed2 = jsyaml.load(result2, { schem2 });
      //console.log(`Successfully loaded ${newFile.name}`)
      //console.log(processed2)
      if(result) processComparator(result,result2);
    }

    reader1.readAsText(newFile)
  }
  reader1.readAsText(currentFile)
}
function mergeObjects(obj1, obj2) {
  const diff = {};
  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (
        typeof obj2[key] === "object" &&
        obj2[key] !== null &&
        typeof obj1[key] === "object" &&
        obj1[key] !== null && !Array.isArray(obj2[key])
      ) {
        const nestedDiff = mergeObjects(obj1[key], obj2[key]);
        if (Object.keys(nestedDiff).length > 0) {
          diff[key] = nestedDiff;
        }
      } else if (!obj1.hasOwnProperty(key)/* || obj1[key] !== obj2[key]*/) {
        diff[key] = obj2[key];
        obj1[key] = obj2[key];
      }
    }
  }
  return diff;
}
let processed1;
let processed2;
let outputExtension;
let allowedExtensions = [".yaml",".yml",".txt"]
function processComparator(processedCurrent,processedNew) {
  let schem = jsyaml.DEFAULT_SCHEMA;
  let first = jsyaml.load(processedCurrent,schem)
  let second = jsyaml.load(processedNew,schem)
  let firstToModify = jsyaml.load(processedCurrent,schem)
  // console.log(first)
  // console.log(second)
  // setTimeout(() => {
  //   first["love"] = "HOLAAAAAAAAAAAAAAAAA";
  //   second["love"] = "HOLAAAAAAAAAAAAAAAAA 2222222222222222222";
  // }, 5000);
  // console.log(`Both files were proccessed!`);
  // //console.log(jsyaml)
  // console.log(`This is processed #1:`)
  // console.log(processed1)
  // console.log(`Successfully loaded #1`)
  // //processed1 = jsyaml.load(processedCurrent,schem);
  // console.log(processed1)
  // console.log(`This is processed #2:`)
  // console.log(processed2)
  // console.log(`Successfully loaded #2`)
  // //processed2 = jsyaml.load("Hello: 10",schem);
  // console.log(processed2)
  let resultsFull = document.getElementById("results");
  if(resultsFull) {
    resultsFull.style.display = "block";
  }
  selectTab(null, 'fixed-config',"f-c-b");
  let difference = mergeObjects(firstToModify,second);
  // console.log(`This is the new yaml #1:`)
  // console.log(firstToModify);
  // console.log(`This is difference:`)
  // console.log(difference);
  let fixedYAML = jsyaml.dump(firstToModify,{skipInvalid:true,lineWidth:-1,noCompatMode:true})
  let differenceYAML;
  if(Object.keys(difference).length === 0) {
    differenceYAML = "#We couldn't find any missing option. Your config is up-to-date!";
  }else{
    differenceYAML = jsyaml.dump(difference,{skipInvalid:true,lineWidth:-1,noCompatMode:true})
  }
  processed1 = fixedYAML;
  processed2 = differenceYAML;
  document.getElementById("output-fixed").innerText = fixedYAML;
  document.getElementById("output-differences").innerText = differenceYAML;
  // console.log(fixedYAML);
  // console.log(differenceYAML);
  //console.log(YAML)
}
function downloadProfile() {
  let removeWatermark = document.getElementById("button-remove-watermark-download")
  if(removeWatermark && !removeWatermark.checked) {
    let context = markedCanvas.getContext("2d");
    context.clearRect(0, 0, 300, 300);
    context.drawImage(siteCanvas,0,0);
    var anchor = document.createElement("a");
    anchor.href = markedCanvas.toDataURL("image/png");
    let username = usernameInput?.value || "AlonsoAliaga";
    anchor.download = `MinecraftPFP-${username}.png`;
    anchor.click();
  }else{
    var anchor = document.createElement("a");
    anchor.href = siteCanvas.toDataURL("image/png");
    let username = usernameInput?.value || "AlonsoAliaga";
    anchor.download = `MinecraftPFP-${username}.png`;
    anchor.click();
  }
}
function toggleCustomGradientBox(event) {
  let customGradientBox = document.getElementById("custom-gradient-box");
  let customGradientsOpened = document.getElementById("button-toggle-custom-gradient").checked;
  if(customGradientsOpened) {
    if(event) backgroundType = 2;
    customGradientBox.classList.add("expanded");
    updateSkin(true);
  }else{
    backgroundType = 0;
    customGradientBox.classList.remove("expanded");
    updateSkin(true);
  }
}
function toggleWatermark(event) {
  let removeWatermark = document.getElementById("button-remove-watermark-download").checked;
  let downloadButton = document.getElementById("download-all-label");
  if(removeWatermark) {
    downloadButton.innerText = "Download your McPFP without watermark📥"
  }else{
    downloadButton.innerText = "Download your McPFP with watermark 📥"
  }
}
let colorsButton = document.getElementById("colors-amount");
const maxColorsAmount = 15;
function removeColor(event) {
  if(event) backgroundType = 2;
  let currentAmount = colorsButton.innerText;
  if(isNaN(currentAmount)) {
    currentAmount = 2;
    colorsButton.innerText = currentAmount;
  }else{
    currentAmount--;
    if(currentAmount < 2) {
      currentAmount = 2;
    }
    colorsButton.innerText = currentAmount;
  }
  //console.log(`Current amount: ${currentAmount}`);
  for(let i = maxColorsAmount; i >= currentAmount;i--) {
    let pickerToHide = document.getElementById(`color-picker-${i}`);
    //console.log(`Hiding color #${i}`);
    if(pickerToHide) {
      pickerToHide.style.display = "none";
    }
  }
  if(event) updateSkin(true);
}
function addColor(event) {
  backgroundType = 2;
  let currentAmount = colorsButton.innerText;
  if(isNaN(currentAmount)) {
    currentAmount = 2;
    colorsButton.innerText = currentAmount;
  }else{
    currentAmount++;
    if(currentAmount > maxColorsAmount) {
      currentAmount = maxColorsAmount;
    }
    colorsButton.innerText = currentAmount;
  }
  //console.log(`Current amount: ${currentAmount}`);
  for(let i = 0; i < currentAmount;i++) {
    let pickerToShow = document.getElementById(`color-picker-${i}`);
    //console.log(`Showing color #${i}`);
    if(pickerToShow) {
      pickerToShow.style.display = "";
    }
  }
  updateSkin(true);
}
function downloadProfile2() {
  let inputBox = document.getElementById(`inputText`);
  let content = `Original:\nUnknown input`;
  if(inputBox) content = `Original:\n${inputBox.value}\n\n`;
  let i = 1;
  for(let fontType of Object.keys(fonts)) {
    let data = fonts[fontType];
    let b = document.getElementById(`${fontType}-box`);
    if(b) {
      content+= `${i}. ${data.name}:\n${b.value}\n\n`;
    }
    i++;
  }
  content += `\n💎 Thanks for using our font generator tool! 👁‍🗨\n📩 File generated using https://alonsoaliaga.com/font-generator`
  const blob = new Blob([content], { type: 'text/text' });

  // Create a URL object with the Blob data
  const url = window.URL.createObjectURL(blob);
  
  // Create a link element with download attribute pointing to the URL object
  const link = document.createElement('a');
  link.download = `fonts-${Date.now().toString()}.txt`; // Set the download file name
  link.href = url; // Set the link href to the URL object
  
  // Append the link element to the document body
  document.body.appendChild(link);
  
  // Programmatically click the link to initiate the download of the YAML file
  link.click();

  // Remove the link element from the document body
  document.body.removeChild(link);

  // Revoke the URL object to free up system resources
  window.URL.revokeObjectURL(url);
}
function readFile(evt) {
  clearIssues();
  var files = evt.target.files;
  var file = files[0];    
  // console.log(`Attempting to read ${file}`);
  document.getElementById("log-file").value = "";
  var reader = new FileReader();
  reader.onload = function(event) {
    let result = event.target.result;
    processData(result);
  }
  reader.readAsText(file)
}
function checkYamlFile(evt) {
  var files = evt.target.files;
  var file = files[0];
  clearResults();
  processed1 = undefined;
  processed2 = undefined;
  document.getElementById("output-fixed").innerText = "Loading..";
  document.getElementById("output-differences").innerText = "Loading..";
  if(typeof file == "undefined") {
    let f = document.getElementById(evt.target.id);
    if(f) f.value = "";
    console.log(`Wrong! File is null: '${file.name}'`);
    alert('Configuration cannot be empty!');
    return;
  }
  let matchExtension = allowedExtensions.find(r=> file.name.endsWith(r));
  if(!matchExtension) {
    let f = document.getElementById(evt.target.id);
    if(f) f.value = "";
    console.log(`Wrong! File type not allowed: '${file.name}'`);
    alert(`Configuration must be a valid yaml file!\nAllowed types: ${allowedExtensions.join(" ")}`);
    return;
  }
  console.log(`Detected '${evt.target.id}' file!`);
}
window.onclick = function(event) {
  if (event.target == document.getElementById("error-full")) {
    clearIssues();
  }
}
let loadedSkinBuffer = undefined;
const usernameInput = document.getElementById('inputText');
const usernameInputDiv = document.getElementById('inputTextDiv');
const cacheSkins = new Map();
async function processUsername(order) {
  skinType = 0;
  if(order != "no-cooldown") blockUsername(defaultCooldown);
  let username = usernameInput?.value || "AlonsoAliaga";
  let fullSkin;
  let inCache = cacheSkins.has(username.toLowerCase());
  if(inCache) {
    fullSkin = cacheSkins.get(username.toLowerCase());
    loadedSkinBuffer = fullSkin;
  }else{
    let url = `https://minotar.net/skin/${username}.png`;
    try{
      fullSkin = await loadImage(url);
      loadedSkinBuffer = fullSkin;
    }catch(e) {
      //console.log(e);
      drawFailed();
      return;
    }
    cacheSkins.set(username.toLowerCase(),fullSkin);
  }
  //Fetch skin logic
  updateSkin(inCache);
}
function createGradient(ctx, colours) {
  if(!colours) {
    if(typeof defaultGradients[currentGradient] !== "undefined") {
      colours = defaultGradients[currentGradient].colors;
      //console.log(`Creating gradient.. ${defaultGradients[currentGradient].identifier}`)
    }else {
      colours = defaultGradients[0].colors;
      //console.log(`Creating gradient.. ${defaultGradients[0].identifier}`)
    }
  }else{
    //console.log(`Creating custom gradient.. ${colours}`)
  }
	const gradient = ctx.createLinearGradient(0, 0, 20,20);
	//const gradient = ctx.createLinearGradient(0, 0, 18.75, 18.75);

	let interval = 1;
	const decrement = 1 / (colours.length - 1);
	colours.forEach(colour => {
    //console.log(`Fixed: ${interval.toFixed(5)}`);
    //console.log(`Adding color stop interval: ${interval}${interval>1?` CAUTION GREATER+!`:``}${interval<0?` CAUTION LOWER-!`:``}`)
		gradient.addColorStop(Math.max(0,interval), colour);
		interval -= decrement;
	})
	ctx.fillStyle = gradient;
	//ctx.fillRect(0, 0, 18.75, 18.75);
	ctx.fillRect(0, 0, 20, 20);
  return ctx;
}
function previousGradient() {
  backgroundType = 0;
  if(typeof defaultGradients[currentGradient - 1] !== "undefined") {
    currentGradient--;
  }else currentGradient = Object.keys(defaultGradients).length - 1;
  let customGradientsOpened = document.getElementById("button-toggle-custom-gradient");
  if(customGradientsOpened.checked) {
    let customGradientBox = document.getElementById("custom-gradient-box");
    customGradientBox.classList.remove("expanded");
    customGradientsOpened.checked = false;
  }
  updateSkin(true);
}
function nextGradient() {
  backgroundType = 0;
  if(typeof defaultGradients[currentGradient + 1] !== "undefined") {
    currentGradient++;
  }else currentGradient = 0;
  let customGradientsOpened = document.getElementById("button-toggle-custom-gradient");
  if(customGradientsOpened.checked) {
    let customGradientBox = document.getElementById("custom-gradient-box");
    customGradientBox.classList.remove("expanded");
    customGradientsOpened.checked = false;
  }
  updateSkin(true);
}
let backgroundType = 0; //0 - gradient | 1 - image | 2 - custom gradient
let currentGradient = 0;
let skinType = 0; //0 - username | 1 - custom
function updateSkin(inCache = true) {
  let username = usernameInput?.value || "AlonsoAliaga";
  //
  let revertSkin = document.getElementById("button-revert-skin").checked;
  let shadow = document.getElementById("button-shadow").checked;
  let transparentBackground = document.getElementById("button-no-background").checked;
  //
  let finalCanvas = document.getElementById("final-canvas");
  let finalCtx = finalCanvas.getContext("2d");
  finalCtx.clearRect(0, 0, finalCanvas.width, finalCanvas.height);
  finalCtx.imageSmoothingEnabled = false;
  //
  let backgroundCtx = backgroundCanvas.getContext("2d");
  if(!transparentBackground) {
    finalCanvas.style.border = "1px solid #d3d3d3";
    if(backgroundType == 0) {
      backgroundCtx.clearRect(0, 0, backgroundCtx.canvas.width, backgroundCtx.canvas.height);
      createGradient(backgroundCtx);
      finalCtx.drawImage(backgroundCanvas,0,0);
    }else if(backgroundType == 1) {
      //console.log(`Writing custom background..`);
      finalCtx.drawImage(backgroundCanvas,0,0);
      //createGradient(backgroundCtx);
    }else{
      backgroundCtx.clearRect(0, 0, backgroundCtx.canvas.width, backgroundCtx.canvas.height);
      let currentAmount = isNaN(colorsButton.innerText) ? 2 : Math.max(2,Math.min(maxColorsAmount,parseInt(colorsButton.innerText)));
      createGradient(backgroundCtx,defaultColors.slice(0, currentAmount));
      finalCtx.drawImage(backgroundCanvas,0,0);
    }
  }else{
    finalCanvas.style.border = "none";
  }
  //siteCtx.fillStyle = "#FFFF00";
  //siteCtx.fillRect(0, 0,siteCanvas.width,siteCanvas.height);
  //console.log("Site canvas:",finalCanvas.width,finalCanvas.height);
  //let skinCanvas = document.getElementById("skin-canvas");
  let skinCtx = skinCanvas.getContext("2d");
  skinCtx.clearRect(0, 0, skinCanvas.width, skinCanvas.height);
  //startingCtx.fillStyle = "#FF0000";
  //startingCtx.fillRect(0, 0,startingCanvas.width,startingCanvas.height);
  skinCtx.imageSmoothingEnabled = false;
  //console.log("Starting canvas:",skinCanvas.width,skinCanvas.height);
  
  if(shadow) {
    skinCtx.drawImage(backdropBuffer, 0, 0, 20, 20);
  }
  //console.log(`Type of loadedSkinBuffer: ${typeof loadedSkinBuffer}`);
  if (loadedSkinBuffer.height === 32) {
    skinCtx.drawImage(loadedSkinBuffer, 8, 9, 7, 7, 8, 4, 7, 7); // Head (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 5, 9, 3, 7, 5, 4, 3, 7); // Head Side (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 44, 20, 3, 7, 12, 13, 3, 7); // Arm Right Side (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 21, 20, 6, 1, 7, 11, 6, 1); // Chest Neck Small Line (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 20, 21, 8, 8, 6, 12, 8, 8); // Chest Other (Bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 44, 20, 3, 7, 5, 13, 3, 7); // Arm Left Side (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 40, 9, 7, 7, 8, 4, 7, 7); // Head (top layer)
    skinCtx.drawImage(loadedSkinBuffer, 33, 9, 3, 7, 5, 4, 3, 7); // Head Side (top layer)

  } else {
    // * BOTTOM LAYER
    skinCtx.drawImage(loadedSkinBuffer, 8, 9, 7, 7, 8, 4, 7, 7); // Head (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 5, 9, 3, 7, 5, 4, 3, 7); // Head Side (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 36, 52, 3, 7, 12, 13, 3, 7); // Arm Right Side (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 21, 20, 6, 1, 7, 11, 6, 1); // Chest Neck Small Line (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 20, 21, 8, 8, 6, 12, 8, 8); // Chest Other (Bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 44, 20, 3, 7, 5, 13, 3, 7); // Arm Left Side (bottom layer)

    // * TOP LAYER
    skinCtx.drawImage(loadedSkinBuffer, 40, 9, 7, 7, 8, 4, 7, 7); // Head (top layer)
    skinCtx.drawImage(loadedSkinBuffer, 33, 9, 3, 7, 5, 4, 3, 7); // Head Side (top layer)
    skinCtx.drawImage(loadedSkinBuffer, 52, 52, 3, 7, 12, 13, 3, 7); // Arm Right Side (top layer)
    skinCtx.drawImage(loadedSkinBuffer, 52, 36, 3, 7, 5, 13, 3, 7); // Arm Left Side (top layer)
    skinCtx.drawImage(loadedSkinBuffer, 20, 37, 8, 8, 6, 12, 8, 8); // Chest Other (top layer)
    skinCtx.drawImage(loadedSkinBuffer, 21, 36, 6, 1, 7, 11, 6, 1); // Chest Neck Small Line (top layer)
  }
  skinCtx.drawImage(shadingBuffer, 0, 0, 20, 20);
  if(revertSkin) {
    finalCtx.save();
    finalCtx.scale(-1, 1);
    finalCtx.drawImage(skinCanvas, skinCtx.canvas.width * -1, 0, skinCtx.canvas.width, skinCtx.canvas.height);
    finalCtx.restore();
  }else{
    finalCtx.drawImage(skinCanvas,0,0,300,300)
  }

  //console.log(`Username: ${username}\nRevert skin: ${revertSkin}\nShadow: ${shadow}\nTransparent background: ${transparentBackground}\nIn cache: ${inCache}`);
}
const usernameInputCooldown = document.getElementById('inputTextCooldown');
let blockInterval;
function blockUsername(seconds = 3) {
  if(blockInterval) clearInterval(blockInterval);
  usernameInputDiv.style.display = "none"
  usernameInputCooldown.style.display = ""
  let i = Math.max(3,seconds);
  usernameInputCooldown.value = `${i} seconds left..`
  blockInterval = setInterval(()=> {
    i--;
    usernameInputCooldown.value = `${i} seconds left..`
    if(i <= 0) {
      usernameInputCooldown.style.display = "none"
      usernameInputDiv.style.display = ""
      clearInterval(blockInterval);
      blockInterval = undefined;
      return;
    }
  },1000);
}
const defaultColors = [];
let failedBuffer;
let backdropBuffer;
let shadingBuffer;
const backgroundCanvas = document.getElementById("background-canvas");
const skinCanvas = document.getElementById("skin-canvas");
const siteCanvas = document.getElementById("final-canvas");
const markedCanvas = document.getElementById("marked-canvas");
async function addListeners() {
	failedBuffer = await loadImage("https://raw.githubusercontent.com/AlonsoAliaga/mcpfp/main/assets/images/notFound.png");
	backdropBuffer = await loadImage("https://raw.githubusercontent.com/AlonsoAliaga/mcpfp/main/assets/images/backdropshading.png");
	shadingBuffer = await loadImage("https://raw.githubusercontent.com/AlonsoAliaga/mcpfp/main/assets/images/20x20pshading.png");
  backgroundCanvas.getContext("2d").scale(15, 15);
  skinCanvas.getContext("2d").scale(15, 15);
  usernameInput.addEventListener("keyup", function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        processUsername();
    }
  });
  let markedCtx = markedCanvas.getContext("2d");
  const text = "Generated on https://alonsoaliaga.com/minecraft-pfp";
  markedCtx.fillStyle = "#302a3b"; // Set the fill color to white
  markedCtx.fillRect(0, 300, 300, 20);
  let fontSize = 24; // Initial font size
  let textWidth = 0;
  do {
    fontSize--; // Decrease the font size
    markedCtx.font = `${fontSize}px MinecraftBold`; // Set the new font size
    textWidth = markedCtx.measureText(text).width;
  } while (textWidth > 290);
  markedCtx.fillStyle = "#ffffff"; // Set the fill color to gray
  markedCtx.font = `${fontSize}px MinecraftBold`; // Set the font style
  markedCtx.textAlign = "center"; // Set the text alignment to center
  markedCtx.textBaseline = "middle"; // Set the text baseline to middle
  markedCtx.fillText(text, markedCanvas.width / 2, 310); // Write the text at the center of the rectangle
  processUsername("no-cooldown");

  for(let i = 0; i < maxColorsAmount; i++) {
    if(defaultColors.length < maxColorsAmount) {
      let newColor = getRandomHexColor();
      //console.log(`Random color: ${newColor}${newColor.length != 7?` | CAUTION!`:``}`),
      defaultColors.push(newColor);
    }
    let colorsDiv = document.getElementById("colors-div");
    //console.log(`Creating color picker #${i}`);
    let p = document.createElement("input");
    p.type = "color";
    p.id = `color-picker-${i}`;
    p.index = i;
    p.value = defaultColors[i];
    p.addEventListener('change', function() {
      const color = this.value;
      //console.log(`Color picked: ${color} | ID: ${this.id} | Index: ${this.index}`);
      defaultColors[this.index] = color;
      updateSkin(true);
    });
    if(i != 0) {
      let s = document.createElement("span");
      s.innerText = " ";
      colorsDiv.appendChild(s);
    }
    colorsDiv.appendChild(p);
    //console.log(`Creating color picker #${i}! display="${p.style.display}"`)
  }
  removeColor();
  runDelayed();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random()*16777215).toString(16).toUpperCase().padStart(6, '0')}`;
}
function uploadCustomSkinTexture(event) {
  //console.log(event);
  //let imageContainer = document.getElementById("motd-icon");
  // Create a new input element
  const uploadInput = document.createElement('input');
  uploadInput.type = 'file';

  // Add event listener to handle file selection
  uploadInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    // Handle the file upload or further processing here
    
    // Create a FileReader object
    const reader = new FileReader();

    // Set up a load event listener on the FileReader
    reader.addEventListener('load', function() {
      // Update the image source with the uploaded image
      var img = new Image();
      img.src = reader.result;
      //console.log(`Processing custom image: ${file.name} | ${img.width}px x ${img.height}px`);
      img.onload = function () {
        if(img.width !== 64) {
          alertError(`<b>💎 Wrong skin texture! 💎</b><br><span style="font-size: small;">Skin must be 64px width!</span>`);
          return;
        }
        if(![64,32].includes(img.height)) {
          alertError(`<b>💎 Wrong skin texture! 💎</b><br><span style="font-size: small;">Skin must be 64px or 32px width!</span>`);
          return;
        }
        skinType = 1;
        loadedSkinBuffer = img;
        //console.log(`Uploaded custom image: ${file.name} | ${img.width}px x ${img.height}px`);
        updateSkin(true);
      };
    });

    // Read the uploaded file as a data URL
    reader.readAsDataURL(file);
  });

  // Append the input element to the image container
  document.body.appendChild(uploadInput);

  // Trigger a click event on the input element
  uploadInput.click();
  
  document.body.removeChild(uploadInput);
}
let errorTimeout = undefined;
function alertError(text = "Empty error.") {
  //console.log(`Alerting: ${text}`)
  if(errorTimeout) {
    clearTimeout(errorTimeout);
    var sb = document.getElementById("snackbar-error");
    sb.className = sb.className.replace("show", "");
  }
  var sb = document.getElementById("snackbar-error");
  sb.innerHTML = text;
  //this is where the class name will be added & removed to activate the css
  sb.className = "show";

  errorTimeout = setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
}
function uploadCustomBackground(event) {
  //console.log(event);
  //let imageContainer = document.getElementById("motd-icon");
  // Create a new input element
  const uploadInput = document.createElement('input');
  uploadInput.type = 'file';

  // Add event listener to handle file selection
  uploadInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    // Handle the file upload or further processing here
    
    // Create a FileReader object
    const reader = new FileReader();
    let backgroundCtx = backgroundCanvas.getContext("2d");
    backgroundCtx.clearRect(0, 0, backgroundCtx.canvas.width, backgroundCtx.canvas.height);

    // Set up a load event listener on the FileReader
    reader.addEventListener('load', function() {
      backgroundType = 1;
      
      let customGradientsOpened = document.getElementById("button-toggle-custom-gradient");
      if(customGradientsOpened.checked) {
        let customGradientBox = document.getElementById("custom-gradient-box");
        customGradientBox.classList.remove("expanded");
        customGradientsOpened.checked = false;
      }
      
      // Update the image source with the uploaded image
      var img = new Image();
      img.src = reader.result;
      img.onload = function () {
        backgroundCtx.save();
        //backgroundCtx.scale(1,1);
        backgroundCtx.drawImage(img,0,0,img.width,img.height,0,0,20,20);
        backgroundCtx.restore();
        //console.log(`Uploaded custom image: ${file.name}`,img.width,img.height);
        updateSkin(true);
      };
    });

    // Read the uploaded file as a data URL
    reader.readAsDataURL(file);
  });

  // Append the input element to the image container
  document.body.appendChild(uploadInput);

  // Trigger a click event on the input element
  uploadInput.click();
  
  document.body.removeChild(uploadInput);
}
function loadFonts() {
  let fontsTable = document.getElementById('fonts-table');
  if(fontsTable) {
    let s = "";
    let i = 1;
    for(let fontType of Object.keys(fonts)) {
      let fontData = fonts[fontType];
      s += `<div class="text-type"><div class="font-name-type ${(i % 2 === 0?"even":"odd")}">${i}. ${fontData.name}</div> <textarea readonly `+
        `id="${fontType}-box" class="fontsBoxes options" type="text" `+
        `checked id="${fontType}-option" onclick="copyTextToClipboard(this.textContent);"></textarea><label for="${fontType}-option" `+
        `></label><br></div>`
      fontData.processed = {};
      if(fontData.data && fontData.data.tosearch && fontData.data.toreplace &&
        fontData.data.tosearch.length == fontData.data.toreplace.length) {
          for (let i = 0; i < fontData.data.tosearch.length; i++) {
            fontData.processed[fontData.data.tosearch[i]] = fontData.data.toreplace[i];
          }
      }
      i++;
    }
    fontsTable.innerHTML = s;
  }
}
let times = 0;
function loadCounter() {
 let href = window.location.href;
 if(!href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw=="))) return;
 let link = atob("aHR0cHM6Ly9hbG9uc29hbGlhZ2EtcGFnZS1jb3VudC5nbGl0Y2gubWUvY291bnRlcj9zaXRlPTxzaXRlPiZrZXk9PGtleT4=")
  .replace(/<site>/g,"minecraft-pfp").replace(/<key>/g,"KEY-A");
 let counter = document.getElementById("visitor-counter");
 if(counter) {
   $.ajax({
     url: link,
     type: "GET", /* or type:"GET" or type:"PUT" */
     dataType: "json",
     data: {
     },
     success: function (result) {
       if(isNaN(result))
         document.getElementById("counter-amount").innerHTML = "Click to return!";
       else document.getElementById("counter-amount").innerHTML = `Visits: ${result}`;
     },
     error: function (e) {
       times++;
       document.getElementById("counter-amount").innerHTML = "Click to return!";
       if(times <= 1) {
        setTimeout(()=>{
          loadCounter();
        },1000*10);
       }
     }
   });
 }
}
function updateOutput(event) {
  //console.log(event)
  let inputText = document.getElementById("inputText");
  if(inputText) {
    //console.log(`Input: ${inputText.value}`)
    let theText;
    if(!inputText.value || inputText.value.length === 0) theText = "Type your text above"
    else theText = inputText.value;
    for(let identifier of Object.keys(fonts)) {
      let toUpdate = document.getElementById(`${identifier}-box`)
      if(toUpdate) {
        let fontData = fonts[identifier];
        let toModify = theText;
        let toUse = "";
        if(typeof fontData.before != "undefined") {
          toModify = fontData.before(toModify);
        }
        let processed = fontData.processed;
        for (let i = 0; i < toModify.length; i++) {
          toUse += processed[toModify[i]] || toModify[i];
        }
        if(typeof fontData.after != "undefined") {
          toUse = fontData.after(toUse);
        }
        toUpdate.innerText = toUse;
      }
    }
  }
}
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }
}
toggleDarkmode();
addListeners();
updateOutput();

//Canvas functions
async function loadImage(url) {
	return new Promise((resolve, reject) => {
		const img = new Image()
		img.crossOrigin = "Anonymous";
		img.src = url
		img.onload = () => {
			resolve(img)
		}
		img.onerror = e => {
			reject(e)
		}
	})
}

async function mergeCanvases(canvases) {
	const canvas = document.createElement("final-canvas");
	canvas.width = canvases[0].width;
	canvas.height = canvases[0].height;

	const ctx = canvas.getContext("2d");
	for (const c of canvases) {
		const imageVersion = new Image();
		await new Promise(r => {
			imageVersion.onload = r, imageVersion.src = c.toDataURL()
		})
		ctx.drawImage(imageVersion, 0, 0)
	}

	return canvas
}
async function drawFailed(ctx) {
	ctx.clearRect(0, 0, 300, 300);
	ctx.drawImage(backdropBuffer, 0, 0, 20, 20);
	ctx.resetTransform();
	ctx.drawImage(failedBuffer, 0, 0, 300, 300);
	ctx.scale(16, 16);
	//ctx.drawImage(shading, 0, 0, 20, 20)
}
function runDelayed() {
  /*
  setTimeout(()=>{
    document.getElementById("button-toggle-custom-gradient").checked = true;
    toggleCustomGradientBox();
  },500);
  */
}