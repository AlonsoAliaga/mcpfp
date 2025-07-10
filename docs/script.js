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
let movementBackgroundBoxDiv = document.getElementById("backgrounds-movement-box-div");
let movementBackgroundArrowsDiv = document.getElementById("backgrounds-movement");
let fitTypeButton = document.getElementById("fit-type-button");
const defaultCooldown = 3;
let copiedTimeout;
let tryAgainTimeout;
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
let selectedBackgroundIdentifier = undefined;
function alertMessage() {
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
function alertTryAgain() {
  if(tryAgainTimeout) {
    clearTimeout(tryAgainTimeout);
    var sb = document.getElementById("snackbar-2");
    sb.className = sb.className.replace("show", "");
  }
  var sb = document.getElementById("snackbar-2");

  //this is where the class name will be added & removed to activate the css
  sb.className = "show";

  tryAgainTimeout = setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
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
"button-remove-watermark-download-div","button-custom-background-div","button-revert-skin-div","button-shadow-div","button-no-background-div",
"customskindiv","button-pixelate-background-div"];
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
    let update = false;
    try{
      let parts = atob(search.slice(1)).split("&");
      for(let part of parts) {
        let [k,v] = part.split("=");
        console.log(k,v)
        try{
          k = btoa(k);
          if(k == "dXNlcm5hbWU=") {
            if(v.match(/[a-z0-9_]/gi)) {
              usernameInput.value = v;
            }
          }else if(k == "b3JuYW1lbnRz") {
            let oIds = v.split(",");
            let oIdsTwo = []
            for(let oId of oIds) {
              let parts = oId.split(".")
              let ornamentData = availableOrnaments[parts[0]];
              if(!ornamentData) continue;
              if(!ornamentData.locked) {
                for(let part of parts) {
                  if(part.toLowerCase().startsWith("x:")) {
                    if(typeof ornamentData.x != "undefined" && !isNaN(part.slice(2))) ornamentData.x = parseInt(part.slice(2));
                  }else if(part.toLowerCase().startsWith("y:")) {
                    if(typeof ornamentData.y != "undefined" && !isNaN(part.slice(2))) ornamentData.y = parseInt(part.slice(2));
                  }
                }
              }
              if(isNaN(part[1]))
              oIdsTwo.push(parts[0]);
            }
            updateOrnamentCards(oIdsTwo);
          }
        }catch(e){}
      }
    }catch(e){}
    if(update) {
      setTimeout(()=>{
        processUsername();
      },500);
    }
  }
  setTimeout(()=>{
    let href = window.location.href;
    if(!href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw=="))) {
      try{document.title = `Page stolen from https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}`;}catch(e){}
      window.location = `https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}/mcpfp/`}
  });
  fetch('https://raw.githubusercontent.com/AlonsoAliaga/AlonsoAliagaAPI/refs/heads/main/api/tools/tools-list.json')
    .then(res => res.json())
    .then(content => {
      let toolsData = content;
      let toolsArray = []
      for(let toolData of toolsData) {
        let clazz = typeof toolData.clazz == "undefined" ? "" : ` class="${toolData.clazz}"`;
        let style = typeof toolData.style == "undefined" ? "" : ` style="${toolData.style}"`;
        toolsArray.push(`<span>💠</span> <span${clazz}${style}><a title="${toolData.description}" id="tool-priority-${toolData.priority}" href="${toolData.link}">${toolData.name}</a></span>`);
      }
      document.getElementById("tools-for-you").innerHTML = toolsArray.join(`<br>`);
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
let smoothImage = undefined;
async function selectFrame(frameIdentifier) {
  let frameData = availableFrames[frameIdentifier];
  if(typeof frameData == "undefined") {
    frameRendered = undefined;
    smoothImage = undefined;
    updateSkin();
    return;
  }
  smoothImage = frameIdentifier;
  await renderFrame();
  updateSkin();
}
function downloadProfile() {
  let removeWatermark = document.getElementById("button-remove-watermark-download")
  if(removeWatermark && !removeWatermark.checked) {
    updateMark();
    let temp = document.createElement("canvas");
    let toPasteWidth = typeof frameRendered != "undefined" ? frameCanvas.width : siteCanvas.width;
    let toPasteHeight = typeof frameRendered != "undefined" ? frameCanvas.height : siteCanvas.height;
    temp.width = toPasteWidth;
    temp.height = toPasteHeight + markedCanvas.height
    let tempCtx = temp.getContext("2d");
    tempCtx.drawImage(siteCanvas,0,0);
    tempCtx.drawImage(markedCanvas,0,toPasteHeight);
    /*
    let context = markedCanvas.getContext("2d");
    context.clearRect(0, 0, siteCanvas.width, siteCanvas.height);
    context.drawImage(siteCanvas,0,0);
    */
    var anchor = document.createElement("a");
    anchor.href = temp.toDataURL("image/png");
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
    if(event) {
      backgroundType = 2;
      closeCustomBackgrounds();
    }
    customGradientBox.classList.add("expanded");
    updateSkin(true);
  }else{
    backgroundType = 0;
    customGradientBox.classList.remove("expanded");
    updateSkin(true);
  }
}
function toggleOrnamentsBox(event) {
  let theBox = document.getElementById("ornaments-box");
  let boxOpened = document.getElementById("button-toggle-ornaments").checked;
  if(boxOpened) {
    theBox.classList.add("expanded");
  }else{
    theBox.classList.remove("expanded");
    if(typeof frameRendered != "undefined") {
      frameRendered = undefined;
      updateSkin();
    }
  }
}
function toggleFrameBox(event) {
  let theBox = document.getElementById("frame-box");
  let boxOpened = document.getElementById("button-toggle-frame").checked;
  if(boxOpened) {
    theBox.classList.add("expanded");
  }else{
    theBox.classList.remove("expanded");
    if(typeof frameRendered != "undefined") {
      frameRendered = undefined;
      updateSkin();
    }
  }
}
function toggleBackgroundsBox(event) {
  let theBox = document.getElementById("background-box");
  let boxOpened = document.getElementById("button-toggle-background").checked;
  if(boxOpened) {
    theBox.classList.add("expanded");

  }else{
    theBox.classList.remove("expanded");
    if(typeof frameRendered != "undefined") {
      frameRendered = undefined;
      updateSkin();
    }
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
let lastFailed = false;
let lastSuccessUsernameForRenderShowcase = undefined;
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
      fullSkin = await loadImageWithCheck(url);
      loadedSkinBuffer = fullSkin;
      lastFailed = false;
      updateTest(username);
    }catch(e) {
      lastFailed = true;
      //console.log(`Detected error:`)
      //console.log(e);
      drawFailed();
      updateTest();
      return;
    }
    cacheSkins.set(username.toLowerCase(),fullSkin);
  }
  //Fetch skin logic
  updateSkin(inCache);
}
async function loadImageWithCheck(url) {
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load image: ${response.status} ${response.statusText}`);
  }
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Error loading image'));
    img.src = URL.createObjectURL(blob);
  });
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
  closeCustomGradient();
  closeCustomBackgrounds();
  updateSkin(true);
}
function nextGradient() {
  backgroundType = 0;
  if(typeof defaultGradients[currentGradient + 1] !== "undefined") {
    currentGradient++;
  }else currentGradient = 0;
  closeCustomGradient();
  closeCustomBackgrounds();
  updateSkin(true);
}
let backgroundType = 0; //0 - gradient | 1 - image | 2 - custom gradient | 3 - custom background
let currentGradient = 0;
let skinType = 0; //0 - username | 1 - custom
function togglePixelateBorderBox() {
  let effectBox = document.getElementById("pixelate-background-box");
  let effectOption = document.getElementById("button-pixelate-background").checked;
  if(effectOption) {
    //document.getElementById("button-pixelate-background").checked = false;
    effectBox.classList.add("expanded");
  }else{
    effectBox.classList.remove("expanded");
  }
}
function modifyPixelateBackgroundWidth(event,toAdd) {
  let customSize= document.getElementById("pixelate-background-size");
  let newSize = parseInt(customSize.innerText) + (toAdd  * ((event.ctrlKey||event.altKey) ? 2 : 1));
  if(newSize <= 1) {    
    customSize.innerText = 1;
  }else{
    customSize.innerText = Math.max(1,Math.min(100,newSize));
  }
  updateSkin(true);
}
function pixelateCtx(ctx) {
  let customSize= document.getElementById("pixelate-background-size");
  let size = parseInt(customSize.innerText);
  let c = ctx.canvas, w = c.width, h = c.height;
  let tmp = document.createElement("canvas");
  tmp.width = w/size; tmp.height = h/size;
  let tctx = tmp.getContext("2d");
  tctx.drawImage(c, 0, 0, tmp.width, tmp.height);
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, w, h);
  ctx.drawImage(tmp, 0, 0, w, h);
}
let addX = 0,addY = 0;
function moveIcon(direction,event) {
  let revertSkin = document.getElementById("button-revert-skin").checked;
  let toModify = event.altKey || event.shiftKey ? 5 : 1;
  toModify = ["left","right"].includes(direction) ? (revertSkin ? toModify * -1 : toModify) : toModify;
  if(direction == "left") addX = Math.max(-250,addX - toModify);
  else if(direction == "right") addX = Math.min(250,addX + toModify);
  else if(direction == "up") addY = Math.max(0,addY - toModify);
  else addY = Math.min(250,addY + toModify);
  updateSkin(true);
}
let logoBuffer;
async function updateTest(username) {
  return;
  if(document.getElementById("render-showcase-div").style.display == "none") {
    //console.log(`Render showcase is hidden. Ignoring..`)
    return;
  }
  if(!logoBuffer) {
    try{
      logoBuffer = await loadImage("https://raw.githubusercontent.com/AlonsoAliaga/alonsoaliaga.github.io/main/assets/img/apple-touch-icon.png");
    }catch(e){
      console.log(`Error loading logo buffer wtf? ${e.message}`);
    }
  }
  if(lastFailed || typeof username == "undefined") {
    username = "AlonsoAliaga";
  }
  //console.log(`Updating render showcase with username: ${username}`);
  let link = atob("aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9tYXJjaGluZy97dXNlcm5hbWV9L2ZhY2U=").replace(/{username}/g,username);
  const canvas = document.getElementById('test');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  const img = new Image();
  img.crossOrigin = 'anonymous'; // Enable CORS if the image is from another domain
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    ctx.globalAlpha = 0.05;
    ctx.drawImage(logoBuffer,15,15,64,53);
    ctx.drawImage(logoBuffer,canvas.width - 79, canvas.height - 68,64,53);
    ctx.globalAlpha = 0.03;
    ctx.drawImage(logoBuffer,canvas.width/2 - (256/2), canvas.height/2 - (214 / 2),256,214);
    ctx.globalAlpha = 1.0;
  }
  img.onerror = () => {
    //console.log(`Invalid username: ${username}`)
    updateTest("AlonsoAliaga");
  }
  img.src = link; // Replace with your image URL
}
let frameRendered = undefined;
async function updateSkin(inCache = true) {
  let username = usernameInput?.value || "AlonsoAliaga";
  //
  let pixelateBackground = document.getElementById("button-pixelate-background").checked;
  let revertSkin = document.getElementById("button-revert-skin").checked;
  let shadow = document.getElementById("button-shadow").checked;
  let transparentBackground = document.getElementById("button-no-background").checked;
  //
  let finalCanvas = document.getElementById("final-canvas");
  finalCanvas.width = 300;
  finalCanvas.height = 300;
  let finalCtx = finalCanvas.getContext("2d");
  finalCtx.clearRect(0, 0, finalCanvas.width, finalCanvas.height);
  //console.log(finalCanvas.width,finalCanvas.height)
  finalCtx.imageSmoothingEnabled = true;
  //
  let customBackgroundCanvas = undefined;
  let backgroundCtx = backgroundCanvas.getContext("2d");
  if(!transparentBackground) {
    finalCanvas.style.border = "1px solid #d3d3d3";
    if(backgroundType == 3 && typeof selectedBackgroundIdentifier == "undefined") {
      backgroundType = 0;
      closeCustomGradient();
      closeCustomBackgrounds();
    }
    if(backgroundType == 0) {
      backgroundCtx.clearRect(0, 0, backgroundCtx.canvas.width, backgroundCtx.canvas.height);
      createGradient(backgroundCtx);
      finalCtx.drawImage(backgroundCanvas,0,0);
    }else if(backgroundType == 1) {
      //console.log(`Writing custom background..`);
      finalCtx.drawImage(backgroundCanvas,0,0);
      //createGradient(backgroundCtx);
    }else if(backgroundType == 2) {
      backgroundCtx.clearRect(0, 0, backgroundCtx.canvas.width, backgroundCtx.canvas.height);
      let currentAmount = isNaN(colorsButton.innerText) ? 2 : Math.max(2,Math.min(maxColorsAmount,parseInt(colorsButton.innerText)));
      createGradient(backgroundCtx,defaultColors.slice(0, currentAmount));
      finalCtx.drawImage(backgroundCanvas,0,0);
    }else{
      customBackgroundCanvas = document.createElement("canvas");
      let customBackgroundCanvasCtx = customBackgroundCanvas.getContext("2d");
      customBackgroundCanvas.width = 300;
      customBackgroundCanvas.height = 300;
      backgroundCtx.clearRect(0, 0, backgroundCtx.canvas.width, backgroundCtx.canvas.height);
      //console.log(`🧪 Background canvas width: ${customBackgroundCanvas.width} | height: ${customBackgroundCanvas.height}`)
      //console.log(`🧪 Background canvas width: ${backgroundCanvas.width} | height: ${backgroundCanvas.height}`)
      //console.log(`🧪 Background canvas width: ${backgroundCtx.canvas.width} | height: ${backgroundCtx.canvas.height}`)
      await drawCustomBackground(customBackgroundCanvasCtx);
      finalCtx.drawImage(backgroundCanvas,0,0);
    }
    if(typeof customBackgroundCanvas == "undefined" && pixelateBackground) {
      pixelateCtx(finalCtx)
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
    skinCtx.drawImage(loadedSkinBuffer, 8,  9, 7, 7, 8, 4, 7, 7); // Head (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 5,  9, 3, 7, 5, 4, 3, 7); // Head Side (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 44, 20, 3, 7, 12, 13, 3, 7); // Arm Right Side (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 21, 20, 6, 1, 7, 11, 6, 1); // Chest Neck Small Line (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 20, 21, 8, 8, 6, 12, 8, 8); // Chest Other (Bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 44, 20, 3, 7, 5, 13, 3, 7); // Arm Left Side (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 40, 9, 7, 7, 8, 4, 7, 7); // Head (top layer)
    skinCtx.drawImage(loadedSkinBuffer, 33, 9, 3, 7, 5, 4, 3, 7); // Head Side (top layer)

  } else {
    // * BOTTOM LAYER
    skinCtx.drawImage(loadedSkinBuffer, 8,  9, 7, 7, 8, 4, 7, 7); // Head (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 5,  9, 3, 7, 5, 4, 3, 7); // Head Side (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 36, 52, 3, 7, 12, 13, 3, 7); // Arm Right Side (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 21, 20, 6, 1, 7, 11, 6, 1); // Chest Neck Small Line (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 20, 21, 8, 8, 6, 12, 8, 8); // Chest Other (Bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 44, 20, 3, 7, 5, 13, 3, 7); // Arm Left Side (bottom layer)
 addY +
    // * TOP LAYER addY +
    skinCtx.drawImage(loadedSkinBuffer, 40, 9, 7, 7, 8, 4, 7, 7); // Head (top layer)
    skinCtx.drawImage(loadedSkinBuffer, 33, 9, 3, 7, 5, 4, 3, 7); // Head Side (top layer)
    skinCtx.drawImage(loadedSkinBuffer, 52, 52, 3, 7, 12, 13, 3, 7); // Arm Right Side (top layer)
    skinCtx.drawImage(loadedSkinBuffer, 52, 36, 3, 7, 5, 13, 3, 7); // Arm Left Side (top layer)
    skinCtx.drawImage(loadedSkinBuffer, 20, 37, 8, 8, 6, 12, 8, 8); // Chest Other (top layer)
    skinCtx.drawImage(loadedSkinBuffer, 21, 36, 6, 1, 7, 11, 6, 1); // Chest Neck Small Line (top layer)
  }
  skinCtx.drawImage(shadingBuffer, 0 , 0, 20, 20);

  await addOrnaments(skinCtx);

  //if(customBackgroundCanvas) console.log("customBackgroundCanvas",customBackgroundCanvas.width,customBackgroundCanvas.height);
  //else console.log("customBackgroundCanvas undefined undefined");
  //console.log("backgroundCtx",backgroundCtx.canvas.width,backgroundCtx.canvas.height);
  //console.log("SkinCtx",skinCtx.canvas.width,skinCtx.canvas.height);
  //console.log("finalCtx",finalCtx.canvas.width,finalCtx.canvas.height);

  if(typeof customBackgroundCanvas != "undefined") {
    finalCtx.drawImage(customBackgroundCanvas,0,0);
    if(pixelateBackground) {
      pixelateCtx(finalCtx);
    }
  }
  if(revertSkin) {
    finalCtx.save();
    finalCtx.scale(-1, 1);
    finalCtx.drawImage(skinCanvas, addX + (skinCtx.canvas.width * -1), addY, skinCtx.canvas.width, skinCtx.canvas.height);
    finalCtx.restore();
  }else{
    finalCtx.drawImage(skinCanvas,addX,addY,300,300)
  }
  if(typeof frameRendered != "undefined") {
    let frameCtx = frameCanvas.getContext("2d");
    if(true) { //Frame on top
      let copy = document.createElement('canvas');
      copy.width = frameCanvas.width;
      copy.height = frameCanvas.height;
      let copyContext = copy.getContext("2d");
      copyContext.drawImage(finalCanvas,frameRendered[0],frameRendered[1],300,300);
      copyContext.drawImage(frameCanvas,0,0);

      finalCanvas.width = frameCanvas.width;
      finalCanvas.height = frameCanvas.height;
      let ctx = finalCanvas.getContext("2d");
      ctx.drawImage(copy,0,0);
      copy = null;
    }else{
      frameCtx.drawImage(finalCanvas,frameRendered[0],frameRendered[1],300,300);

      let copy = document.createElement('canvas');
      copy.width = frameCanvas.width;
      copy.height = frameCanvas.height;
      let copyContext = copy.getContext("2d");
      copyContext.drawImage(frameCanvas,0,0);

      finalCanvas.width = frameCanvas.width;
      finalCanvas.height = frameCanvas.height;
      let ctx = finalCanvas.getContext("2d");
      ctx.drawImage(copy,0,0);
      copy = null;
    }
    finalCanvas.style.border = "none";
  }
  
  //console.log(`Username: ${username}\nRevert skin: ${revertSkin}\nShadow: ${shadow}\nTransparent background: ${transparentBackground}\nIn cache: ${inCache}`);
}
let vFullBody = 500;
let vSuit = 650;
let vHeadShoulder = 750;
let vHead = 850;
let vOrnamentSmall = 999;
let vOrnamentHead = 1500;
let availableOrnaments = {
  "o-crown": {
    name: "Crown",
    featureName: "Crown Ornament",
    image: "https://i.imgur.com/vZRhGaz.png",
    z: vOrnamentHead,
    x: 0,
    y: 0,
    index: 15,
  },
  "o-sunglasses": {
    name: "Sunglasses",
    featureName: "Sunglasses Ornament",
    image: "https://i.imgur.com/ZtoOQLo.png",
    z: vOrnamentHead,
    x: 0,
    y: 0,
  },
  "o-duck-head-with-glasses": {
    name: "Duck Head with Sunglasses",
    featureName: "Duck Head with Sunglasses Ornament",
    image: "https://i.imgur.com/k7L6Eg8.png",
    z: vSuit,
  },
  "o-mcdonalds-hat": {
    name: "McDonalds Hat",
    featureName: "McDonalds Hat Ornament",
    image: "https://i.imgur.com/UI7Qshc.png",
    z: vOrnamentHead,
    x: 0,
    y: 0,
  },
  "o-mcdonalds-body": {
    name: "McDonalds Body",
    featureName: "McDonalds Body Ornament",
    image: "https://i.imgur.com/17JopEA.png",
    z: vSuit,
    index: 36,
  },
  "o-oxxo": {
    name: "Oxxo",
    featureName: "Oxxo Ornament",
    image: "https://i.imgur.com/TEfCo93.png",
    z: vOrnamentHead,
    x: 0,
    y: 0,
    index: 37,
  },
  "o-rose": {
    name: "Rose",
    featureName: "Rose Ornament",
    image: "https://i.imgur.com/VGvgZz0.png",
    z: vOrnamentSmall,
    x: 0,
    y: 0,
    live: "Rose",
  },
  "o-tuxedo-rose": {
    name: "Tuxedo & Rose",
    featureName: "Tuxedo & Rose",
    image: "https://i.imgur.com/xFjpWGE.png",
    z: vSuit,
    index: 38,
  },
  "o-tuxedo-1": {
    name: "Tuxedo #1",
    featureName: "Tuxedo #1 Ornament",
    image: "https://i.imgur.com/Cd5pJD9.png",
    z: vSuit,
  },
  "o-tuxedo-2": {
    name: "Tuxedo #2",
    featureName: "Tuxedo #2 Ornament",
    image: "https://i.imgur.com/El5bLbG.png",
    z: vSuit,
  },
  "o-turban-head": {
    name: "Turban Head",
    featureName: "Turban Head Ornament",
    image: "https://i.imgur.com/f0LFvTQ.png",
    z: vHead,
  },
  "o-turban-full": {
    name: "Turban Full",
    featureName: "Turban Full Ornament",
    image: "https://i.imgur.com/ZkriUwG.png",
    z: vHeadShoulder,
  },
  "o-turban-shoulders": {
    name: "Turban Shoulders",
    featureName: "Turban Shoulders Ornament",
    image: "https://i.imgur.com/WoXpvWv.png",
    z: vHeadShoulder,
  },
  "o-christmas-scarf": {
    name: "Christmas Scarf",
    featureName: "Christmas Scarf Ornament",
    image: "https://i.imgur.com/sUM6Exf.png",
    z: vHeadShoulder,
    live: "Christmas",
  },
  "o-shark-pijama": {
    name: "Shark Pijama",
    featureName: "Shark Pijama Ornament",
    image: "https://i.imgur.com/2UVRxdK.png",
    z: vSuit,
    index: 34,
  },
}
for(let id of Object.keys(availableOrnaments)) {
  let ornamentData = availableOrnaments[id];
  ornamentData.ornamentIdentifier = id;
  if(typeof ornamentData.x == "undefined" && typeof ornamentData.y == "undefined") {
    ornamentData.locked = true;
  }
}
async function addOrnaments(context) {
  let multiplier = 1;
  // let finalCanvas = document.getElementById("final-canvas");
  // let context = finalCanvas.getContext("2d");
  let ornamentsElements = Object.keys(availableOrnaments).map(n=>availableOrnaments[n]).sort((a,b)=> {
    return a.z > b.z ? 1 : -1;
  }).map(n=>document.getElementById(`ornament-${n.ornamentIdentifier}`)).filter(d=> {
    let oData = availableOrnaments[d.id.slice(9)];
    return d && d.dataset.enabled == "yes" && (!oData.index || d.dataset.loaded == "ornament");
  });
  /*
  let ornamentsElements = Object.keys(availableOrnaments).map(n=>availableOrnaments[n]).sort((a,b)=> {
    return a.z > b.z ? 1 : -1;
  }).map(n=>document.getElementById(`ornament-${n.ornamentIdentifier}`)).filter(d=> {
    let oData = availableOrnaments[d.id.slice(9)];
    if(d && d.dataset.enabled == "yes") {
      if(!oData.index || d.dataset.loaded == "ornament") {
        //console.log(`[✅] Adding ornament: ${oData.name}`);
        return true;
      }else{
        //console.log(`[❌] Removing ornament: ${oData.name}: ${oData.index} || ${d.dataset.loaded}`);
      }
    }else{
      //console.log(`[❌] No enabled tag: ${oData.name}`);
    }
    return false;
  });
  */
  //console.log(ornamentsElements)
  for(let ornamentElement of ornamentsElements) {
    let ornamentData = availableOrnaments[ornamentElement.dataset.ornamentIdentifier];
    //if(!ornamentData || !await checkOrnament(ornamentElement.dataset.ornamentIdentifier)) continue;
    //console.log(`[🎩] Loading ornament: ${ornamentData.name}`);
    if(typeof ornamentData.buffer == "undefined") {
      try{
        let buffer = await loadImage(ornamentData.image);
        ornamentData.buffer = buffer;
        //console.log(`[✅] Downloaded ornament: ${ornamentData.name} => ${ornamentData.image}`);
      }catch(e) {
        //console.log(`[❌] Error downloading ornament: ${ornamentData.name} => ${ornamentData.image}`);
        //console.log(e);
      }
    }
    let ornamentBuffer = ornamentData.buffer;
    if(typeof ornamentBuffer != "undefined") {
      //console.log(`[🪅] Drawing ornament: ${ornamentData.name}`);
      let addX = ornamentData.locked ? 0 : (ornamentData.x || 0) * multiplier;
      let addY = ornamentData.locked ? 0 : (ornamentData.y || 0) * multiplier;
      context.drawImage(ornamentBuffer,-5 * multiplier + addX, -5 * multiplier + addY,30 * multiplier,25 * multiplier);
    }else{
      //console.log(`[❌] Undefined! Not drawing ornament: ${ornamentData.name}`);
    }
  }
}
let availableFrames = {
  "f-basic":{
    name: "Basic",
    featureName: "Basic frame",
    image: "https://i.imgur.com/1b30TQ2.png",
    start: 5,
    end: 26
  },
  "f-basic-blue":{
    name: "Basic Blue",
    featureName: "Basic Blue frame",
    image: "https://i.imgur.com/7ucUhdA.png",
    start: 5,
    end: 26
  },
  "f-basic-redstone":{
    name: "Basic Redstone",
    featureName: "Basic Redstone frame",
    image: "https://i.imgur.com/AIhQkJ8.png",
    start: 5,
    end: 26
  },
  "f-basic-emerald":{
    name: "Basic Emerald",
    featureName: "Basic Emerald frame",
    image: "https://i.imgur.com/0wm61cd.png",
    start: 5,
    end: 26
  },
  "f-golden-greek":{
    name: "Golden Greek",
    featureName: "Golden Greek frame",
    image: "https://i.imgur.com/ZPjK6B2.png",
    start: 6,
    end: 56
  },
  "f-bronze-greek":{
    name: "Bronze Greek",
    featureName: "Bronze Greek frame",
    image: "https://i.imgur.com/Irw6mK4.png",
    start: 6,
    end: 56
  },
  "f-orange-greek":{
    name: "Orange Greek",
    featureName: "Orange Greek frame",
    image: "https://i.imgur.com/BeDvXMI.png",
    start: 6,
    end: 56
  },
  "f-quartz-greek":{
    name: "Quartz Greek",
    featureName: "Quartz Greek frame",
    image: "https://i.imgur.com/Wy5rUoP.png",
    start: 6,
    end: 56
  },
  "f-sky-greek":{
    name: "Sky Greek",
    featureName: "Sky Greek frame",
    image: "https://i.imgur.com/Bn6kGRK.png",
    start: 6,
    end: 56
  },
  "f-amethyst-greek":{
    name: "Amethyst Greek",
    featureName: "Amethyst Greek frame",
    image: "https://i.imgur.com/LurWi0k.png",
    start: 6,
    end: 56
  },
  "f-emerald-greek":{
    name: "Emerald Greek",
    featureName: "Emerald Greek frame",
    image: "https://i.imgur.com/T3nja0p.png",
    start: 6,
    end: 56
  },
  "f-obsidian-greek":{
    name: "Obsidian Greek",
    featureName: "Obsidian Greek frame",
    image: "https://i.imgur.com/pleRKw6.png",
    start: 6,
    end: 56
  },
  "f-elegant-golden":{
    name: "Elegant Golden",
    featureName: "Elegant Golden frame",
    image: "https://i.imgur.com/BEY6OOv.png",
    start: 7,
    end: 57
  },
  "f-elegant-blossom":{
    name: "Elegant Blossom",
    featureName: "Elegant Blossom frame",
    image: "https://i.imgur.com/swZiNMW.png",
    start: 7,
    end: 57
  },
  "f-elegant-sapphire":{
    name: "Elegant Sapphire",
    featureName: "Elegant Sapphire frame",
    image: "https://i.imgur.com/OOrcOqY.png",
    start: 7,
    end: 57
  },
  "f-elegant-slime":{
    name: "Elegant Slime",
    featureName: "Elegant Slime frame",
    image: "https://i.imgur.com/qrAOzWl.png",
    start: 7,
    end: 57
  },
  "f-obsidian":{
    name: "Obisidan",
    featureName: "Obisidan Frame",
    image: "https://i.imgur.com/WmCT2VV.png",
    start: 3,
    end: 27
  },
  "f-mossy-obsidian":{
    name: "Mossy Obisidan",
    featureName: "Mossy Obisidan Frame",
    image: "https://i.imgur.com/BmbusOH.png",
    start: 3,
    end: 27
  },
  "f-pink-obsidian":{
    name: "Pink Obisidan",
    featureName: "Pink Obisidan Frame",
    image: "https://i.imgur.com/aK1RAxA.png",
    start: 3,
    end: 27
  },
  "f-swamp-obsidian":{
    name: "Swamp Obisidan",
    featureName: "Swamp Obisidan Frame",
    image: "https://i.imgur.com/HdOG053.png",
    start: 3,
    end: 27
  },
  "f-brown-obsidian":{
    name: "Brown Obisidan",
    featureName: "Brown Obisidan Frame",
    image: "https://i.imgur.com/JrhLlJ6.png",
    start: 3,
    end: 27
  },
  "f-yellow-obsidian":{
    name: "Yellow Obisidan",
    featureName: "Yellow Obisidan Frame",
    image: "https://i.imgur.com/yxN4NY2.png",
    start: 3,
    end: 27
  },
  "f-blue-obsidian":{
    name: "Blue Obisidan",
    featureName: "Blue Obisidan Frame",
    image: "https://i.imgur.com/LxUgzpY.png",
    start: 3,
    end: 27
  },
  "f-white-obsidian":{
    name: "White Obisidan",
    featureName: "White Obisidan Frame",
    image: "https://i.imgur.com/2dwMGMJ.png",
    start: 3,
    end: 27
  },
  "f-futuristic":{
    name: "Futuristic",
    featureName: "Futuristic Frame",
    image: "https://i.imgur.com/xgRKCpk.png",
    start: 9,
    end: 39
  },
  "f-dark-futuristic":{
    name: "Dark Futuristic",
    featureName: "Dark Futuristic Frame",
    image: "https://i.imgur.com/nizqUGO.png",
    start: 9,
    end: 39
  },
  "f-pink-futuristic":{
    name: "Pink Futuristic",
    featureName: "Pink Futuristic Frame",
    image: "https://i.imgur.com/07nPAYQ.png",
    start: 9,
    end: 39
  },
  "f-red-futuristic":{
    name: "Red Futuristic",
    featureName: "Red Futuristic Frame",
    image: "https://i.imgur.com/Og3MBHN.png",
    start: 9,
    end: 39
  },
  "f-blue-weird":{
    name: "Blue Weird",
    featureName: "Blue Weird Frame",
    image: "https://i.imgur.com/el9h67R.png",
    start: 5,
    end: 35
  },
  "f-purple-weird":{
    name: "Purple Weird",
    featureName: "Purple Weird Frame",
    image: "https://i.imgur.com/uaHcIAy.png",
    start: 5,
    end: 35
  },
  "f-peach-weird":{
    name: "Peach Weird",
    featureName: "Peach Weird Frame",
    image: "https://i.imgur.com/qAdo1Da.png",
    start: 5,
    end: 35
  },
  "f-green-weird":{
    name: "Green Weird",
    featureName: "Green Weird Frame",
    image: "https://i.imgur.com/P87ZH4o.png",
    start: 5,
    end: 35
  },
  "f-iron-plate":{
    name: "Iron Plate",
    featureName: "Iron Plate Frame",
    image: "https://i.imgur.com/IdkXKj8.png",
    start: 5,
    end: 95
  },
  "f-gold-plate":{
    name: "Gold Plate",
    featureName: "Gold Plate Frame",
    image: "https://i.imgur.com/mP6QTZG.png",
    start: 5,
    end: 95
  },
  "f-diamond-plate":{
    name: "Diamond Plate",
    featureName: "Diamond Plate Frame",
    image: "https://i.imgur.com/Ya87Nqb.png",
    start: 5,
    end: 95
  },
  "f-emerald-plate":{
    name: "Emerald Plate",
    featureName: "Emerald Plate Frame",
    image: "https://i.imgur.com/5P6z6wY.png",
    start: 5,
    end: 95
  },
  "f-base-blue":{
    name: "Base Blue",
    featureName: "Base Blue Frame",
    image: "https://i.imgur.com/JUAbQyo.png",
    start: 7,
    end: 33
  },
  "f-base-orange":{
    name: "Base Orage",
    featureName: "Base Orange Frame",
    image: "https://i.imgur.com/Mm0Csz8.png",
    start: 7,
    end: 33
  },
  "f-base-lime":{
    name: "Base Lime",
    featureName: "Base Lime Frame",
    image: "https://i.imgur.com/AiYrjr2.png",
    start: 7,
    end: 33
  },
  "f-base-red":{
    name: "Base Red",
    featureName: "Base Red Frame",
    image: "https://i.imgur.com/pOBxwU5.png",
    start: 7,
    end: 33
  },
  "f-pixel-gold":{
    name: "Pixel Gold",
    featureName: "Pixel Gold Frame",
    image: "https://i.imgur.com/LzE8v9D.png",
    start: 4,
    end: 36
  },
  "f-pixel-pink":{
    name: "Pixel Pink",
    featureName: "Pixel Pink Frame",
    image: "https://i.imgur.com/JBXm7K0.png",
    start: 4,
    end: 36
  },
  "f-pixel-blue":{
    name: "Pixel Blue",
    featureName: "Pixel Blue Frame",
    image: "https://i.imgur.com/sYQ6b0C.png",
    start: 4,
    end: 36
  },
  "f-pixel-white":{
    name: "Pixel White",
    featureName: "Pixel White Frame",
    image: "https://i.imgur.com/8OrQgyi.png",
    start: 4,
    end: 36
  },
  "f-luxury-gold":{
    name: "Luxury Gold",
    featureName: "Luxury Gold Frame",
    image: "https://i.imgur.com/5l1hJPa.png",
    start: 6,
    end: 52
  },
  "f-luxury-emerald":{
    name: "Luxury Emerald",
    featureName: "Luxury Emerald Frame",
    image: "https://i.imgur.com/M3KeZW5.png",
    start: 6,
    end: 52
  },
  "f-luxury-obsidian":{
    name: "Luxury Obisidian",
    featureName: "Luxury Obisidian Frame",
    image: "https://i.imgur.com/suRxxDB.png",
    start: 6,
    end: 52
  },
  "f-luxury-Diamond":{
    name: "Luxury Diamond",
    featureName: "Luxury Diamond Frame",
    image: "https://i.imgur.com/DqiMcUD.png",
    start: 6,
    end: 52
  },
  "f-obsidian-sign":{
    name: "Obisidian Sign",
    featureName: "Obisidian Sign Frame",
    image: "https://i.imgur.com/fWFpJE1.png",
    start: [21,42],
    end: 76
  },
  "f-diamond-sign":{
    name: "Diamond Sign",
    featureName: "Diamond Sign Frame",
    image: "https://i.imgur.com/VkzaDk2.png",
    start: [21,42],
    end: 76
  },
  "f-gold-sign":{
    name: "Gold Sign",
    featureName: "Gold Sign Frame",
    image: "https://i.imgur.com/W3fmYj2.png",
    start: [21,42],
    end: 76
  },
  "f-emerald-sign":{
    name: "Emerald Sign",
    featureName: "Emerald Sign Frame",
    image: "https://i.imgur.com/Lq1ZJAi.png",
    start: [21,42],
    end: 76
  }
}
function loadFrames() {
  let frameDiv = document.getElementById("frame-picker");
  for(let frameIdentifier of Object.keys(availableFrames)) {
    let frameData = availableFrames[frameIdentifier];
    let element = document.createElement("div");
    element.classList.add("render-frame-card");
    //element.style.minWidth = "fit-content"
    element.id = `frame-${frameIdentifier}`
    element.style.margin = "2px"
    element.dataset.frameUrl = frameData.image;
    element.dataset.frameName = frameData.name;
    element.innerHTML = `
              <div style="display:inline-block;min-width:fit-content;margin-top:2px;font-size:15px;font-weight:bold;" class="render-label">${frameData.name}</div>
              <img style="image-rendering: pixelated" src="${frameData.image}" alt="${frameData.name}">`
    element.onclick = function(){selectFrame(frameIdentifier)}
    frameDiv.appendChild(element);
  }
  lockFramesWithMessage(`🔒 Unlock this frame!`)
}
let singleClickTimer = undefined;
function loadOrnaments() {
  let ornamentDiv = document.getElementById("ornaments-picker");
  for(let ornamentIdentifier of Object.keys(availableOrnaments)) {
    let ornamentData = availableOrnaments[ornamentIdentifier];
    let element = document.createElement("div");
    element.classList.add("render-ornament-card");
    //element.style.minWidth = "fit-content"
    element.id = `ornament-${ornamentIdentifier}`
    //element.ornamentIdentifier = `ornament-${ornamentIdentifier}`
    element.style.margin = "2px"
    element.dataset.ornamentIdentifier = ornamentIdentifier;
    element.dataset.frameUrl = ornamentData.image;
    element.dataset.frameName = ornamentData.name;
    element.innerHTML = `
              <div style="display:inline-block;min-width:fit-content;margin-top:2px;font-size:15px;font-weight:bold;" class="render-label">${ornamentData.name}</div>
              <img style="image-rendering: pixelated" src="${ornamentData.image}" alt="${ornamentData.name}">`
    element.onclick = function(){
      if(singleClickTimer) {
        clearTimeout(singleClickTimer);
        singleClickTimer = undefined;
        //console.log(`DOUBLE CLICK!`)
        selectOrnament(ornamentIdentifier, false);
        return;
      }
      singleClickTimer = setTimeout(function() {
        //console.log(`SINGLE CLICK!`)
        singleClickTimer = undefined;
        selectOrnament(ornamentIdentifier);
      }, 250);   
    };
    ornamentDiv.appendChild(element);
  }
  lockOrnamentsWithMessage(`🔒 Unlock this frame!`)
}
let singleClickTimerBackground = undefined;
function loadBackgrounds() {
  let backgroundDiv = document.getElementById("backgrounds-picker");
  for(let backgroundIdentifier of Object.keys(availableBackgrounds)) {
    let backgroundData = availableBackgrounds[backgroundIdentifier];
    let element = document.createElement("div");
    element.classList.add("render-background-card");
    element.id = `background-${backgroundIdentifier}`
    element.style.margin = "2px"
    element.dataset.backgroundIdentifier = backgroundIdentifier;
    element.dataset.frameUrl = backgroundData.image;
    element.dataset.frameName = backgroundData.name;
    element.innerHTML = `
              <div style="display:inline-block;min-width:fit-content;margin-top:2px;font-size:15px;font-weight:bold;" class="render-label">${backgroundData.name}</div>
              <img style="image-rendering: pixelated" src="${backgroundData.image}" alt="${backgroundData.name}">`
    element.onclick = function(){
      if(singleClickTimerBackground) {
        clearTimeout(singleClickTimerBackground);
        singleClickTimerBackground = undefined;
        //console.log(`DOUBLE CLICK!`)
        selectBackground(backgroundIdentifier, false);
        return;
      }
      singleClickTimerBackground = setTimeout(function() {
        //console.log(`SINGLE CLICK!`)
        singleClickTimerBackground = undefined;
        selectBackground(backgroundIdentifier);
      }, 250);   
    };
    backgroundDiv.appendChild(element);
  }
  lockBackgroundsWithMessage(`🔒 Unlock this background!`)
}
async function updateOrnamentCards(toEnable = []) {
  for(let ornamentIdentifier of Object.keys(availableOrnaments)) {
    let element = document.getElementById(`ornament-${ornamentIdentifier}`);
    if(toEnable.includes(ornamentIdentifier)) {
      element.dataset.enabled = "yes";
    }
    if(element.dataset.enabled == "yes") {
      element.classList.add("ornament-selected");
    }
  }
}
async function selectOrnament(ornamentIdentifier, shouldUpdateSkin = true) {
  let ornamentData = availableOrnaments[ornamentIdentifier];
  if(typeof ornamentData == "undefined") {
    return;
  }
  let element = document.getElementById(`ornament-${ornamentIdentifier}`);
  if(!element) return;
  //console.log(`[A] Selecting ${ornamentIdentifier}`)
  if(!await checkOrnament(ornamentIdentifier)) return;
  //console.log(`[B] Selecting ${ornamentIdentifier}`)
  if(shouldUpdateSkin) {
    if(typeof element.dataset.enabled == "undefined") {
      element.dataset.enabled = "yes";
      element.classList.add("ornament-selected");
    }else if(element.dataset.enabled == "no") {
      element.dataset.enabled = "yes";
      element.classList.add("ornament-selected");
    }else{
      element.dataset.enabled = "no";
      element.classList.remove("ornament-selected");
    }
  }else{
    if(typeof element.dataset.enabled == "undefined" || element.dataset.enabled == "no") {
      element.classList.add("ornament-selected");
      element.dataset.enabled = "yes";
      shouldUpdateSkin = true;
    }
  }
  let movementBoxDiv = document.getElementById("ornaments-movement-box-div");
  let movementArrowsDiv = document.getElementById("ornaments-movement");
  if(element.dataset.enabled == "yes") {
    if(ornamentData.locked) {
      movementBoxDiv.style.display = "none";
      //movementArrowsDiv.textContent = `You shouldn't be reading this..`
    }else{
      movementBoxDiv.style.display = null;
      movementArrowsDiv.dataset.movingOrnament = ornamentIdentifier;
      //movementArrowsDiv.textContent = `Loading arrows..`
      if(ornamentData.hasOwnProperty("x") && ornamentData.hasOwnProperty("y")) {
        movementArrowsDiv.innerHTML = `<button class="button-small" onclick="moveOrnament('up',event);">▲</button><br>
                    <div style="display: flex;margin: 10px;vertical-align: middle;align-items: center;">
                      <button class="button-small" style="display: inline;margin: 10px;vertical-align: middle" onclick="moveOrnament('left',event);">⯇</button>
                      <span style="font-weight: bold;">Move<br>${ornamentData.name}</span>
                      <button class="button-small" style="display: inline;margin: 10px;vertical-align: middle" onclick="moveOrnament('right',event);">⯈</button><br>
                    </div>
                    <button class="button-small" onclick="moveOrnament('down',event);">▼</button>`
      }else if(ornamentData.hasOwnProperty("x")) {
        movementArrowsDiv.innerHTML = `<div style="display: flex;margin: 10px;vertical-align: middle;align-items: center;">
                      <button class="button-small" style="display: inline;margin: 10px;vertical-align: middle" onclick="moveOrnament('left',event);">⯇</button>
                      <span style="font-weight: bold;">Move<br>${ornamentData.name}</span>
                      <button class="button-small" style="display: inline;margin: 10px;vertical-align: middle" onclick="moveOrnament('right',event);">⯈</button><br>
                    </div>`
      }else{
        movementArrowsDiv.innerHTML = `<button class="button-small" onclick="moveOrnament('up',event);">▲</button><br>
                    <span style="font-weight: bold;">Move<br>${ornamentData.name}</span><br>
                    <button class="button-small" onclick="moveOrnament('down',event);">▼</button>`
      }
    }
  }else{
    movementBoxDiv.style.display = "none";
    //movementArrowsDiv.textContent = `You shouldn't be reading this..`
  }
  if(shouldUpdateSkin) updateSkin();
}
function closeCustomBackgrounds() {
  let customBackgroundsOpened = document.getElementById("button-toggle-background");
  if(customBackgroundsOpened.checked) {
    let customBackgroundsBox = document.getElementById("background-box");
    customBackgroundsBox.classList.remove("expanded");
    customBackgroundsOpened.checked = false;
  }
}
function closeCustomGradient() {
  let customGradientsOpened = document.getElementById("button-toggle-custom-gradient");
  if(customGradientsOpened.checked) {
    let customGradientBox = document.getElementById("custom-gradient-box");
    customGradientBox.classList.remove("expanded");
    customGradientsOpened.checked = false;
  }
}
async function selectBackground(backgroundIdentifier, shouldUpdateSkin = true) {
  let backgroundData = availableBackgrounds[backgroundIdentifier];
  if(typeof backgroundData == "undefined") {
    return;
  }
  let element = document.getElementById(`background-${backgroundIdentifier}`);
  if(!element) return;
  //console.log(`[A] Selecting ${backgroundIdentifier}`)
  if(!await checkBackground(backgroundIdentifier)) return;
  //console.log(`[B] Selecting ${backgroundIdentifier}`)
  //close others:
  closeCustomGradient();
  if(shouldUpdateSkin) {
    if(selectedBackgroundIdentifier == backgroundIdentifier) {
      backgroundType = 0;
      selectedBackgroundIdentifier = undefined;
      shouldUpdateSkin = true;
    }else{
      selectedBackgroundIdentifier = backgroundIdentifier;
      backgroundType = 3;
      shouldUpdateSkin = true;
    }
  }else{
    backgroundType = 3;
    if(selectedBackgroundIdentifier !== backgroundIdentifier) {
      shouldUpdateSkin = true;
    }
    selectedBackgroundIdentifier = backgroundIdentifier;
  }
  //console.log(`🏜️ Final selected background is ${selectedBackgroundIdentifier}`)
  let backgrounds = [...document.querySelectorAll(".render-background-card")];
  for(let backgroundElement of backgrounds) {
    if(backgroundElement.dataset.backgroundIdentifier == selectedBackgroundIdentifier) {
      backgroundElement.classList.add("background-selected");
      //console.log(`Adding selected class to ${backgroundElement.dataset.backgroundIdentifier}`)
    }else{
      backgroundElement.classList.remove("background-selected");
      //console.log(`Removing selected class from ${backgroundElement.dataset.backgroundIdentifier}`)
    }
  }
  let movementBoxDiv = document.getElementById("backgrounds-movement-box-div");
  let movementArrowsDiv = document.getElementById("backgrounds-movement");
  movementBoxDiv.style.display = "none";
  /*
  if(typeof selectedBackgroundIdentifier != "undefined") {
    if(backgroundData.totalLocked) {
      movementBoxDiv.style.display = "none";
      //movementArrowsDiv.textContent = `You shouldn't be reading this..`
    }else{
      if(backgroundData.type == "force-fit") {
        
      }else if(backgroundData.type == "fit") {
        
      }else if(backgroundData.type == "original") {
        
      }
      movementBoxDiv.style.display = null;
      movementArrowsDiv.dataset.movingBackground = backgroundIdentifier;
      //movementArrowsDiv.textContent = `Loading arrows..`
      if(backgroundData.hasOwnProperty("x") && backgroundData.hasOwnProperty("y")) {
        movementArrowsDiv.innerHTML = `<button class="button-small" onclick="moveOrnament('up',event);">▲</button><br>
                    <div style="display: flex;margin: 10px;vertical-align: middle;align-items: center;">
                      <button class="button-small" style="display: inline;margin: 10px;vertical-align: middle" onclick="moveOrnament('left',event);">⯇</button>
                      <span style="font-weight: bold;">Move<br>${backgroundData.name}</span>
                      <button class="button-small" style="display: inline;margin: 10px;vertical-align: middle" onclick="moveOrnament('right',event);">⯈</button><br>
                    </div>
                    <button class="button-small" onclick="moveOrnament('down',event);">▼</button>`
      }else if(backgroundData.hasOwnProperty("x")) {
        movementArrowsDiv.innerHTML = `<div style="display: flex;margin: 10px;vertical-align: middle;align-items: center;">
                      <button class="button-small" style="display: inline;margin: 10px;vertical-align: middle" onclick="moveOrnament('left',event);">⯇</button>
                      <span style="font-weight: bold;">Move<br>${backgroundData.name}</span>
                      <button class="button-small" style="display: inline;margin: 10px;vertical-align: middle" onclick="moveOrnament('right',event);">⯈</button><br>
                    </div>`
      }else{
        movementArrowsDiv.innerHTML = `<button class="button-small" onclick="moveOrnament('up',event);">▲</button><br>
                    <span style="font-weight: bold;">Move<br>${backgroundData.name}</span><br>
                    <button class="button-small" onclick="moveOrnament('down',event);">▼</button>`
      }
    }
  }else{
    movementBoxDiv.style.display = "none";
    //movementArrowsDiv.textContent = `You shouldn't be reading this..`
  }
  */
  if(shouldUpdateSkin) updateSkin();
}
function moveOrnament(direction,event) {
  let movementArrowsDiv = document.getElementById("ornaments-movement");
  let currentOrnamentIdentifier = movementArrowsDiv.dataset.movingOrnament;
  if(!currentOrnamentIdentifier) return;
  let ornamentData = availableOrnaments[currentOrnamentIdentifier];
  if(!ornamentData) return;
  let revertSkin = document.getElementById("button-revert-skin").checked;
  let toModify = event.altKey || event.shiftKey ? 5 : 1;
  toModify = ["left","right"].includes(direction) ? (revertSkin ? toModify * -1 : toModify) : toModify;
  let modified = false;
  if(ornamentData.hasOwnProperty("x")) {
    if(direction == "left") {
      ornamentData.x = ornamentData.x - toModify;
      modified = true;
    }else if(direction == "right") {
      ornamentData.x = ornamentData.x + toModify;
      modified = true;
    }
  }
  if(ornamentData.hasOwnProperty("y")) {
    if(direction == "up") {
      ornamentData.y = ornamentData.y - toModify;
      modified = true;
    }else if(direction == "down") {
      ornamentData.y = ornamentData.y + toModify;
      modified = true;
    }
  }
  if(modified) updateSkin();
}
function moveBackground(direction,event) {
  if(!selectedBackgroundIdentifier) return;
  let backgroundData = availableBackgrounds[selectedBackgroundIdentifier];
  if(!backgroundData) return;
  if(backgroundData.totalLocked) return;
  //let revertSkin = document.getElementById("button-revert-skin").checked;
  let toModify = event.altKey || event.shiftKey ? 5 : 1;
  //toModify = ["left","right"].includes(direction) ? (revertSkin ? toModify * -1 : toModify) : toModify;
  let modified = false;
  if(backgroundData.hasOwnProperty("x")) {
    if(direction == "left") {
      backgroundData.x = backgroundData.x - toModify;
      modified = true;
    }else if(direction == "right") {
      backgroundData.x = backgroundData.x + toModify;
      modified = true;
    }
  }
  if(backgroundData.hasOwnProperty("y")) {
    if(direction == "up") {
      backgroundData.y = backgroundData.y - toModify;
      modified = true;
    }else if(direction == "down") {
      backgroundData.y = backgroundData.y + toModify;
      modified = true;
    }
  }
  if(modified) updateSkin();
}
async function drawCustomBackground(backgroundCtx) {
  movementBackgroundBoxDiv.style.display = "none";
  if(typeof selectedBackgroundIdentifier == "undefined") return;
  let backgroundData = availableBackgrounds[selectedBackgroundIdentifier];
  if(typeof backgroundData == "undefined") return;
  if(typeof backgroundData.buffer == "undefined") {
    try{
      let buffer = await loadImage(backgroundData.image);
      backgroundData.buffer = buffer;
      //console.log(`[✅] Downloaded background: ${backgroundData.name} => ${backgroundData.image}`);
    }catch(e) {
      //console.log(`[❌] Error downloading background: ${backgroundData.name} => ${backgroundData.image}`);
      //console.log(e);
    }
  }
  let multiplier = 1;
  let customBackgroundBuffer = backgroundData.buffer;
  if(typeof customBackgroundBuffer != "undefined") {
    //console.log(`[🪅] Drawing background: ${backgroundData.name}`);
    //console.log(`Custom background width: ${customBackgroundBuffer.width} | height: ${customBackgroundBuffer.height}`)
    //console.log(`Background canvas width: ${backgroundCtx.canvas.width} | height: ${backgroundCtx.canvas.height}`)
    let lockX = false;
    let lockY = false;
    if(backgroundData.type == "original") {
      backgroundCtx.drawImage(customBackgroundBuffer,backgroundData.x, backgroundData.y);
      //console.log(`[Unlocked] New width: ${customBackgroundBuffer.width} | New height: ${customBackgroundBuffer.height}`)
    }else if(backgroundData.type == "force-fit") {
      backgroundCtx.drawImage(customBackgroundBuffer,0, 0,backgroundCtx.canvas.width,backgroundCtx.canvas.height);
      lockX = true;
      lockY = true;
      //console.log(`[LockX & LockY] New width: ${backgroundCtx.canvas.width} | New height: ${backgroundCtx.canvas.height}`)
    }else if(backgroundData.type == "fit") {
      if(customBackgroundBuffer.width <= customBackgroundBuffer.height) {
        let proportion = 300 / customBackgroundBuffer.width
        let newWidth = proportion * customBackgroundBuffer.width
        let newHeight = proportion * customBackgroundBuffer.height
        backgroundCtx.drawImage(customBackgroundBuffer,backgroundData.x, backgroundData.y,newWidth,newHeight);
        //console.log(`[LockX] New width: ${newWidth} | New height: ${newHeight} | ${proportion}`)
        lockX = true;
        if(newWidth == 300 && newHeight == 300) {
          lockX = true;
          lockY = true;
        }
      }else{
        let proportion = 300 / customBackgroundBuffer.height
        let newWidth = proportion * customBackgroundBuffer.width
        let newHeight = proportion * customBackgroundBuffer.height
        backgroundCtx.drawImage(customBackgroundBuffer,backgroundData.x, backgroundData.y,newWidth,newHeight);
        //console.log(`[LockY] New width: ${newWidth} | New height: ${newHeight} | ${proportion}`)
        lockY = true;
        if(newWidth == 300 && newHeight == 300) {
          lockX = true;
          lockY = true;
        }
      }
    }
    if(backgroundData.totalLocked) {
      movementBackgroundBoxDiv.style.display = "none";
    }else{
      movementBackgroundBoxDiv.style.display = null;
      updateFitTypeButton(backgroundData.type);
      if(!lockX && !lockY) {
        movementBackgroundArrowsDiv.style.display = null;
        movementBackgroundArrowsDiv.dataset.movingBackground = selectedBackgroundIdentifier;
        movementBackgroundArrowsDiv.innerHTML = `<button class="button-small" onclick="moveBackground('up',event);">▲</button><br>
                    <div style="display: flex;margin: 10px;vertical-align: middle;align-items: center;">
                      <button class="button-small" style="display: inline;margin: 10px;vertical-align: middle" onclick="moveBackground('left',event);">⯇</button>
                      <span style="font-weight: bold;">Move<br>${backgroundData.name}</span>
                      <button class="button-small" style="display: inline;margin: 10px;vertical-align: middle" onclick="moveBackground('right',event);">⯈</button><br>
                    </div>
                    <button class="button-small" onclick="moveBackground('down',event);">▼</button>`
      }else if(!lockX) {
        movementBackgroundArrowsDiv.style.display = null;
        movementBackgroundArrowsDiv.innerHTML = `<div style="display: flex;margin: 10px;vertical-align: middle;align-items: center;">
                      <button class="button-small" style="display: inline;margin: 10px;vertical-align: middle" onclick="moveBackground('left',event);">⯇</button>
                      <span style="font-weight: bold;">Move<br>${backgroundData.name}</span>
                      <button class="button-small" style="display: inline;margin: 10px;vertical-align: middle" onclick="moveBackground('right',event);">⯈</button><br>
                    </div>`
      }else if(!lockY) {
        movementBackgroundArrowsDiv.style.display = null;
        movementBackgroundArrowsDiv.innerHTML = `<button class="button-small" onclick="moveBackground('up',event);">▲</button><br>
                    <span style="font-weight: bold;">Move<br>${backgroundData.name}</span><br>
                    <button class="button-small" onclick="moveBackground('down',event);">▼</button>`
      }else{
        movementBackgroundArrowsDiv.style.display = "none";
      }
    }
  }else{
    console.log(`[❌] Undefined! Not drawing background: ${ornamentData.name}`);
  }
}
//types: "original", "fit", "force-fit"
let availableBackgrounds = {
  "b-8-bit-game": {
    name: "8-bit Game",
    featureName: "8-bit Game Background",
    image: "https://i.imgur.com/vgW8pFD.png",
    // totalLocked: true,
    type: "fit",
    x: 0,
    y: 0,
    z: 0,
  },
  "b-8-bit-retro-game": {
    name: "8-bit Retro Game",
    featureName: "8-bit Retro Game Background",
    image: "https://i.imgur.com/nclem2H.png",
    // totalLocked: true,
    type: "fit",
    x: 0,
    y: 0,
    z: 15,
  },
  "b-cute-8-bit-retro-game": {
    name: "Cute 8-bit Retro Game",
    featureName: "Cute 8-bit Retro Game Background",
    image: "https://i.imgur.com/NYlGgzK.png",
    // totalLocked: true,
    type: "fit",
    x: 0,
    y: 0,
    z: 15,
  },
  "b-pixel-future-city": {
    name: "Pixel Future City",
    featureName: "Pixel Future City Background",
    image: "https://i.imgur.com/LVWrndL.png",
    // totalLocked: true,
    type: "fit",
    x: 0,
    y: 0,
    z: 15,
  },
  "b-pixel-bricks": {
    name: "Pixel Bricks",
    featureName: "Pixel Bricks Background",
    image: "https://i.imgur.com/YXAeE8G.png",
    totalLocked: true,
    type: "fit",
    x: 0,
    y: 0,
    z: 15,
  },
  "b-pixel-wood-planks": {
    name: "Pixel Wood Planks",
    featureName: "Pixel Wood Planks Background",
    image: "https://i.imgur.com/hFSLSi8.png",
    totalLocked: true,
    type: "fit",
    x: 0,
    y: 0,
    z: 15,
  },
  "b-pixel-water": {
    name: "Pixel Water",
    featureName: "Pixel Water Background",
    image: "https://i.imgur.com/XvCliXp.png",
    totalLocked: true,
    type: "fit",
    x: 0,
    y: 0,
    z: 15,
  },
  "b-pixel-lava": {
    name: "Pixel Lava",
    featureName: "Pixel Lava Background",
    image: "https://i.imgur.com/knQypL1.png",
    totalLocked: true,
    type: "fit",
    x: 0,
    y: 0,
    z: 15,
  },
  "b-pixel-old-city": {
    name: "Pixel Old City",
    featureName: "Pixel Old City Background",
    image: "https://i.imgur.com/VlvJ6xF.png",
    totalLocked: true,
    type: "fit",
    x: 0,
    y: 0,
    z: 15,
  },
  "b-pixel-moon-city": {
    name: "Pixel Moon City",
    featureName: "Pixel Moon City Background",
    image: "https://i.imgur.com/O2wUtpK.png",
    totalLocked: true,
    type: "fit",
    x: 0,
    y: 0,
    z: 15,
  },
  "b-minecraft": {
    name: "Minecraft",
    featureName: "Minecraft Background",
    image: "https://i.imgur.com/t9LqQ21.png",
    type: "fit",
    x: 0,
    y: 0,
    z: 15,
  },
  "b-minecraft-sky": {
    name: "Minecraft Sky",
    featureName: "Minecraft Sky Background",
    image: "https://i.imgur.com/gmE2oPl.png",
    type: "fit",
    x: 0,
    y: 0,
    z: 15,
  },
  "b-minecraft-nether": {
    name: "Minecraft Nether",
    featureName: "Minecraft Nether Background",
    image: "https://i.imgur.com/yP2kFJv.png",
    type: "fit",
    x: 0,
    y: 0,
    z: 15,
  },
  "b-minecraft-creeper": {
    name: "Minecraft Creeper",
    featureName: "Minecraft Creeper Background",
    image: "https://i.imgur.com/lryLQfg.png",
    type: "original",
    x: -132,
    y: -88,
    z: 15,
  },
  "b-minecraft-desert": {
    name: "Minecraft Desert",
    featureName: "Minecraft Desert Background",
    image: "https://i.imgur.com/BjvemqN.png",
    type: "fit",
    x: -43,
    y: 0,
    z: 15,
  },
}
function increaseValue() {
  let ornamentData = availableOrnaments[currentOrnamentIdentifier];
}
(()=>{
  async function minecraft(event) {
    if(event.data && event.data.d) {
      window.removeEventListener("message",minecraft);
      if(typeof event.data.d == "object" && Array.isArray(event.data.d)) {
        for(let [a,b] of event.data.d) {localStorage.setItem(a,b);}
        window.location.reload(true);
      }
    }
  }
  window.addEventListener("message",minecraft);
})();
async function checkFrame(smoothImage,location) {
  try {
    let element = document.getElementById(`frame-${smoothImage}`);
    if(!element) return;
    const storedUnlockData = localStorage.getItem(`lobbyFreim-${btoa(smoothImage)}`);
    if (!storedUnlockData) {
        return;
    }
    let json = {};
    try{
      json = JSON.parse(storedUnlockData);
    }catch(e) {}
    let { unlockedUntil, signature } = json;
    if (typeof unlockedUntil !== 'number' || typeof signature !== 'string') {
        localStorage.removeItem(`lobbyFreim-${btoa(smoothImage)}`);
        return;
    }
    const expectedSignature = await generateSha256Hash(unlockedUntil + "WhatTheHellAreYouLookingForHere?");
    let currentTime = Date.now(); 
    if (signature === expectedSignature && currentTime < unlockedUntil) {
      let remainingTimeMs = unlockedUntil - currentTime;
      let remainingHours = Math.floor(remainingTimeMs / (1000 * 60 * 60));
      let remainingMinutes = Math.floor((remainingTimeMs % (1000 * 60 * 60)) / (1000 * 60));
      if(location) {
        //console.warn("Unlocking..");
        element.innerHTML = element.innerHTML + `<p id="time-left-${smoothImage}" style="margin: 0px" class="unlock-text-frame">Unlocked for<br>${remainingHours}h ${remainingMinutes}m</p>`;
        element.classList.remove("adblockframe")
        element.querySelector(".overlay")?.remove();
        element.disabled = false;
        element.onclick = function(){
          selectFrame(smoothImage);
        };
        let timeLeftP = document.getElementById(`time-left-${smoothImage}`);
        if(timeLeftP) {
          let a = setInterval(()=>{
            if(currentTime >= unlockedUntil) {
              let card = document.getElementById(`frame-${smoothImage}`)
              if(!card) return;
              let frameData = availableFrames[smoothImage];
              card.classList.add('adlockedframe');
              const ov = document.createElement('div');
              timeLeftP.remove();
              ov.className = 'overlay';
              let frameUrl = card.dataset.frameUrl
              let frameName = card.dataset.frameName
              ov.innerHTML = `<span style="color: #ff8484;">${frameName}</span><img src="${frameUrl}"><span style="" class="toblink">Unlock this frame!</span>`;
              ov.onclick = function() {
                let opened = window.open(`./unlock.html`,`_blank`);
                if(opened) {
                  setTimeout(()=>{
                    let data = {feature:smoothImage,featureName:frameData.featureName,uuid:uniqueId,elementId:card.id}
                    opened.postMessage(data,"*");
                  },500);
                }
              }
              card.append(ov);
              localStorage.removeItem(`lobbyFreim-${btoa(smoothImage)}`)
              clearInterval(a);
              return;
            }
            currentTime = Date.now();
            remainingTimeMs = unlockedUntil - currentTime;
            remainingHours = Math.floor(remainingTimeMs / (1000 * 60 * 60));
            remainingMinutes = Math.floor((remainingTimeMs % (1000 * 60 * 60)) / (1000 * 60));
            let remainingSeconds = Math.floor((remainingTimeMs % (1000 * 60)) / 1000);
            if(remainingSeconds < 0) return;
            timeLeftP.innerHTML = `Unlocked for<br>${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s`;
          },1000)
        }
      }else {
        //console.warn("Unlocking but no location..");
      }
      return "Failed"
    } else {
      if (signature !== expectedSignature) {
          //console.warn("Unlock data tampered with! Signature mismatch.");
      }
      localStorage.removeItem(`lobbyFreim-${btoa(smoothImage)}`);
    }
  } catch (error) {
      localStorage.removeItem(`lobbyFreim-${btoa(smoothImage)}`);
      //console.warn(`Error checking frame: `,error);
  }
}
async function checkBackground(smoothImage,location) {
  try {
    let element = document.getElementById(`background-${smoothImage}`);
    if(!element) return;
    if(availableBackgrounds[smoothImage] && !availableBackgrounds[smoothImage].z) return smoothImage;
    const storedUnlockData = localStorage.getItem(`lobbyVakgraun-${btoa(smoothImage)}`);
    if (!storedUnlockData) {
        return;
    }
    let json = {};
    try{
      json = JSON.parse(storedUnlockData);
    }catch(e) {}
    let { unlockedUntil, signature } = json;
    if (typeof unlockedUntil !== 'number' || typeof signature !== 'string') {
        localStorage.removeItem(`lobbyVakgraun-${btoa(smoothImage)}`);
        return;
    }
    const expectedSignature = await generateSha256Hash(unlockedUntil + "WhatTheHellAreYouLookingForHere?");
    let currentTime = Date.now(); 
    if (signature === expectedSignature && currentTime < unlockedUntil) {
      let remainingTimeMs = unlockedUntil - currentTime;
      let remainingHours = Math.floor(remainingTimeMs / (1000 * 60 * 60));
      let remainingMinutes = Math.floor((remainingTimeMs % (1000 * 60 * 60)) / (1000 * 60));
      if(location) {
        console.warn("Unlocking..");
        element.innerHTML = element.innerHTML + `<p id="time-left-${smoothImage}" style="margin: 0px" class="unlock-text-frame">Unlocked for<br>${remainingHours}h ${remainingMinutes}m</p>`;
        element.classList.remove("adblockframe")
        element.querySelector(".overlay")?.remove();
        element.disabled = false;
        element.dataset.loaded = "background";
        element.onclick = function(){
          selectBackground(smoothImage);
        };
        let timeLeftP = document.getElementById(`time-left-${smoothImage}`);
        if(timeLeftP) {
          let a = setInterval(()=>{
            if(currentTime >= unlockedUntil) {
              let card = document.getElementById(`background-${smoothImage}`)
              if(!card) return;
              let frameData = availableFrames[smoothImage];
              card.classList.add('adlockedframe');
              const ov = document.createElement('div');
              timeLeftP.remove();
              ov.className = 'overlay';
              let frameUrl = card.dataset.frameUrl
              let frameName = card.dataset.frameName
              ov.innerHTML = `<span style="color: #ff8484;">${frameName}</span><img src="${frameUrl}"><span style="" class="toblink">Unlock this background!</span>`;
              ov.onclick = function() {
                let opened = window.open(`./unlock.html`,`_blank`);
                if(opened) {
                  setTimeout(()=>{
                    let data = {feature:smoothImage,featureName:frameData.featureName,uuid:uniqueId,elementId:card.id}
                    opened.postMessage(data,"*");
                  },500);
                }
              }
              card.append(ov);
              localStorage.removeItem(`lobbyVakgraun-${btoa(smoothImage)}`)
              clearInterval(a);
              return;
            }
            currentTime = Date.now();
            remainingTimeMs = unlockedUntil - currentTime;
            remainingHours = Math.floor(remainingTimeMs / (1000 * 60 * 60));
            remainingMinutes = Math.floor((remainingTimeMs % (1000 * 60 * 60)) / (1000 * 60));
            let remainingSeconds = Math.floor((remainingTimeMs % (1000 * 60)) / 1000);
            if(remainingSeconds < 0) return;
            timeLeftP.innerHTML = `Unlocked for<br>${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s`;
          },1000)
        }
      }else {
        console.warn("Unlocking but no location..");
      }
      return "Failed"
    } else {
      if (signature !== expectedSignature) {
          console.warn("Unlock data tampered with! Signature mismatch.");
      }
      localStorage.removeItem(`lobbyVakgraun-${btoa(smoothImage)}`);
    }
  } catch (error) {
      localStorage.removeItem(`lobbyVakgraun-${btoa(smoothImage)}`);
      console.warn(`Error checking frame: `,error);
  }
}
async function checkOrnament(smoothImage,location) {
  try {
    let element = document.getElementById(`ornament-${smoothImage}`);
    if(!element) return;
    if(availableOrnaments[smoothImage] && !availableOrnaments[smoothImage].index) return smoothImage;
    const storedUnlockData = localStorage.getItem(`lobbyUrna-${btoa(smoothImage)}`);
    if (!storedUnlockData) {
        return;
    }
    let json = {};
    try{
      json = JSON.parse(storedUnlockData);
    }catch(e) {}
    let { unlockedUntil, signature } = json;
    if (typeof unlockedUntil !== 'number' || typeof signature !== 'string') {
        localStorage.removeItem(`lobbyUrna-${btoa(smoothImage)}`);
        return;
    }
    const expectedSignature = await generateSha256Hash(unlockedUntil + "WhatTheHellAreYouLookingForHere?");
    let currentTime = Date.now(); 
    if (signature === expectedSignature && currentTime < unlockedUntil) {
      let remainingTimeMs = unlockedUntil - currentTime;
      let remainingHours = Math.floor(remainingTimeMs / (1000 * 60 * 60));
      let remainingMinutes = Math.floor((remainingTimeMs % (1000 * 60 * 60)) / (1000 * 60));
      if(location) {
        console.warn("Unlocking..");
        element.innerHTML = element.innerHTML + `<p id="time-left-${smoothImage}" style="margin: 0px" class="unlock-text-frame">Unlocked for<br>${remainingHours}h ${remainingMinutes}m</p>`;
        element.classList.remove("adblockframe")
        element.querySelector(".overlay")?.remove();
        element.disabled = false;
        element.dataset.loaded = "ornament";
        element.onclick = function(){
          selectOrnament(smoothImage);
        };
        let timeLeftP = document.getElementById(`time-left-${smoothImage}`);
        if(timeLeftP) {
          let a = setInterval(()=>{
            if(currentTime >= unlockedUntil) {
              let card = document.getElementById(`ornament-${smoothImage}`)
              if(!card) return;
              let frameData = availableFrames[smoothImage];
              card.classList.add('adlockedframe');
              const ov = document.createElement('div');
              timeLeftP.remove();
              ov.className = 'overlay';
              let frameUrl = card.dataset.frameUrl
              let frameName = card.dataset.frameName
              ov.innerHTML = `<span style="color: #ff8484;">${frameName}</span><img src="${frameUrl}"><span style="" class="toblink">Unlock this ornament!</span>`;
              ov.onclick = function() {
                let opened = window.open(`./unlock.html`,`_blank`);
                if(opened) {
                  setTimeout(()=>{
                    let data = {feature:smoothImage,featureName:frameData.featureName,uuid:uniqueId,elementId:card.id}
                    opened.postMessage(data,"*");
                  },500);
                }
              }
              card.append(ov);
              localStorage.removeItem(`lobbyUrna-${btoa(smoothImage)}`)
              clearInterval(a);
              return;
            }
            currentTime = Date.now();
            remainingTimeMs = unlockedUntil - currentTime;
            remainingHours = Math.floor(remainingTimeMs / (1000 * 60 * 60));
            remainingMinutes = Math.floor((remainingTimeMs % (1000 * 60 * 60)) / (1000 * 60));
            let remainingSeconds = Math.floor((remainingTimeMs % (1000 * 60)) / 1000);
            if(remainingSeconds < 0) return;
            timeLeftP.innerHTML = `Unlocked for<br>${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s`;
          },1000)
        }
      }else {
        console.warn("Unlocking but no location..");
      }
      return "Failed"
    } else {
      if (signature !== expectedSignature) {
          console.warn("Unlock data tampered with! Signature mismatch.");
      }
      localStorage.removeItem(`lobbyUrna-${btoa(smoothImage)}`);
    }
  } catch (error) {
      localStorage.removeItem(`lobbyUrna-${btoa(smoothImage)}`);
      console.warn(`Error checking frame: `,error);
  }
}
async function generateSha256Hash(message) {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  return hashHex;
}
async function renderFrame() {
  if(typeof smoothImage == "undefined") {
    frameRendered = undefined;
    return;
  }
  if(!await checkFrame(smoothImage)) {
    smoothImage = undefined;
    return
  }
  let frameData = availableFrames[smoothImage];
  if(!frameData) {
    frameRendered = undefined;
    smoothImage = undefined;
    return;
  }
  let realAllowedWidth;
  if(typeof frameData.start == "number") {
    realAllowedWidth = frameData.end - frameData.start;
  }else{
    realAllowedWidth = frameData.end - frameData.start[0];
  }
  let frameImage = await loadImage(frameData.image);
  let proportionValue = 300 / realAllowedWidth;
  let newFramWidth = proportionValue * frameImage.width;
  frameCanvas.width = Math.floor(newFramWidth);
  frameCanvas.height = Math.floor(proportionValue * frameImage.height);
  let frameCtx = frameCanvas.getContext("2d");
  let previousWebkitImageSmoothingEnabled = frameCtx.webkitImageSmoothingEnabled;
  let previousMozImageSmoothingEnabled = frameCtx.mozImageSmoothingEnabled;
  let previousImageSmoothingEnabled = frameCtx.imageSmoothingEnabled;
  frameCtx.webkitImageSmoothingEnabled = false;
  frameCtx.mozImageSmoothingEnabled = false;
  frameCtx.imageSmoothingEnabled = false;
  frameCtx.clearRect(0,0,frameCanvas.width,frameCanvas.height)
  frameCtx.drawImage(frameImage,0,0,frameCanvas.width,frameCanvas.height)
  let startX = Math.floor(frameData.start * proportionValue)
  let startY = Math.floor(frameData.start * proportionValue)
  if(typeof frameData.start == "number") {
    startX = Math.floor(frameData.start * proportionValue)
    startY = Math.floor(frameData.start * proportionValue)
  }else{
    startX = Math.floor(frameData.start[0] * proportionValue)
    startY = Math.floor(frameData.start[1] * proportionValue)
  }
  //console.log(`Proportion value: ${proportionValue}`)
  //console.log(`Start X & Y: ${start}`)
  frameCtx.webkitImageSmoothingEnabled = previousWebkitImageSmoothingEnabled;
  frameCtx.mozImageSmoothingEnabled = previousMozImageSmoothingEnabled;
  frameCtx.imageSmoothingEnabled = previousImageSmoothingEnabled;
  frameRendered = [startX,startY];
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
const frameCanvas = document.getElementById('frame-canvas');
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
  //updateMark();
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
  if(event.classList.contains("adlockedsmall")) return;
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
function loadChecking() {
 let href = window.location.href;
 if(!href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw=="))) return;
 let link = atob("aHR0cHM6Ly9hbG9uc29hcGkuZGlzY2xvdWQuYXBwL2NoZWNraW5nP3NpdGU9PHNpdGU+JmtleT08a2V5Pg==")
  .replace(/<site>/g,"minecraft-pfp").replace(/<key>/g,"KEY-A");
 let counter = document.getElementById("online-counter");
 if(counter) {
   $.ajax({
     url: link,
     type: "GET", /* or type:"GET" or type:"PUT" */
     dataType: "json",
     data: {
     },
     success: function (result) {
        //console.log(`Total fails: ${counter.dataset.failed}`)
        counter.dataset.failed = "0";
        counter.style.display = "flex";
        if(isNaN(result)) {
         counter.textContent = `🟡 You shouldn't be reading this. Report it on https://alonsoaliaga.com/discord`;
         counter.style.backgroundColor = "yellow";
        }else{
         //counter.textContent = `🟢 ${result} user${result==1?``:`s`} online using our Minecraft Profile Picture Generator!`;
         counter.textContent = `🟢 ${result} online using our Minecraft Profile Picture Generator!`;
         counter.style.backgroundColor = "green";
        }
     },
     error: function (e) {
      //console.log(`Total fails: ${counter.dataset.failed}`)
      if(counter.style.display != "none") {
        let currentFails = +counter.dataset.failed;
        if(currentFails >= 1){
          counter.style.display = "none"
        }else{
          counter.textContent = `🔴 Check your internet connection!`;
          counter.style.backgroundColor = "#7c0000";
          counter.dataset.failed = `${currentFails + 1}`
        }
      }
     }
   });
 }
}
let times = 0;
function loadCounter() {
 let href = window.location.href;
 if(!href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw=="))) return;
 let link = atob("aHR0cHM6Ly9hbG9uc29hcGkuZGlzY2xvdWQuYXBwL2NvdW50ZXI/c2l0ZT08c2l0ZT4ma2V5PTxrZXk+")
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
function updateMark() {
  markedCanvas.width = typeof frameRendered != "undefined" ? frameCanvas.width : siteCanvas.width;
  markedCanvas.height = 200;
  console.log(`Old markCanvas: ${markedCanvas.width}x${markedCanvas.height}`)
  let markedCtx = markedCanvas.getContext("2d");
  const text = "Generated on https://alonsoaliaga.com/minecraft-pfp";
  let fontSize = 24; // Initial font size
  let textWidth = 0;
  let finalHeight = 0;
  do {
    fontSize--; // Decrease the font size
    markedCtx.font = `${fontSize}px MinecraftBold`; // Set the new font size
    let sizes = markedCtx.measureText(text);
    textWidth = sizes.width;
    finalHeight = sizes.actualBoundingBoxAscent + sizes.actualBoundingBoxDescent;;
    console.log(`Text ${fontSize}px: ${textWidth}x${finalHeight}`)
  } while (textWidth > markedCanvas.width - 10);
  markedCanvas.height = Math.floor(finalHeight) + 10
  markedCtx = markedCanvas.getContext("2d");

  markedCtx.fillStyle = "#302a3b"; // Set the fill color to white
  markedCtx.fillRect(0, 0, markedCanvas.width, markedCanvas.height);

  markedCtx.fillStyle = "#ffffff"; // Set the fill color to gray
  markedCtx.font = `${fontSize}px MinecraftBold`; // Set the font style
  markedCtx.textAlign = "center"; // Set the text alignment to center
  markedCtx.textBaseline = "middle"; // Set the text baseline to middle
  markedCtx.fillText(text, markedCanvas.width / 2, markedCanvas.height / 2); // Write the text at the center of the rectangle
  console.log(`New markCanvas: ${markedCanvas.width}x${markedCanvas.height}`)
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
const uniqueId = crypto.randomUUID();
let loaded = false;
async function lockFramesWithMessage(message,iconUrl='https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/lock-icon.png') {
  if(loaded) return;
  loaded = true;
  for(let n of Object.keys(availableFrames)) {
    let card = document.getElementById(`frame-${n}`)
    if(!card) continue;
    if(await checkFrame(n,"undefined")) continue;
    let imageData = availableFrames[n];
    card.classList.add('adlockedframe');
    const ov = document.createElement('div');
    ov.className = 'overlay';
    let frameUrl = card.dataset.frameUrl
    let frameName = card.dataset.frameName
    ov.innerHTML = `<span style="color: #ff8484;">${frameName}</span><img src="${frameUrl}"><span style="" class="toblink">${message}</span>`;
    ov.onclick = function() {
      let opened = window.open(`./unlock.html`,`_blank`);
      if(opened) {
        setTimeout(()=>{
          let data = {feature:n,featureName:imageData.featureName,uuid:uniqueId,elementId:card.id}
          opened.postMessage(data,"*");
        },500);
      }
    }
    card.append(ov);
  }
}
let loadedOrnaments = false;
async function lockOrnamentsWithMessage(message,iconUrl='https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/lock-icon.png') {
  if(loadedOrnaments) return;
  loadedOrnaments = true;
  for(let n of Object.keys(availableOrnaments)) {
    let card = document.getElementById(`ornament-${n}`)
    let imageData = availableOrnaments[n];
    if(!card || !imageData.index) continue;
    if(await checkOrnament(n,"undefined")) {
      card.dataset.loaded = "ornament";
      continue;
    }
    card.classList.add('adlockedframe');
    card.dataset.enabled = "no";
    card.classList.remove("ornament-selected")
    const ov = document.createElement('div');
    ov.className = 'overlay';
    let frameUrl = card.dataset.frameUrl
    let frameName = card.dataset.frameName
    ov.innerHTML = `<span style="color: #ff8484;">${frameName}</span><img src="${frameUrl}"><span style="" class="toblink">${message}</span>`;
    ov.onclick = function() {
      let opened = window.open(`./unlock.html`,`_blank`);
      if(opened) {
        setTimeout(()=>{
          let data = {feature:n,featureName:imageData.featureName,uuid:uniqueId,elementId:card.id}
          opened.postMessage(data,"*");
        },500);
      }
    }
    card.append(ov);
  }
}
let loadedBackgrounds = false;
async function lockBackgroundsWithMessage(message,iconUrl='https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/lock-icon.png') {
  if(loadedBackgrounds) return;
  loadedBackgrounds = true;
  for(let n of Object.keys(availableBackgrounds)) {
    let card = document.getElementById(`background-${n}`)
    let imageData = availableBackgrounds[n];
    if(!card || !imageData.z) continue;
    if(await checkBackground(n,"undefined")) {
      card.dataset.loaded = "background";
      continue;
    }
    card.classList.add('adlockedframe');
    card.dataset.enabled = "no";
    card.classList.remove("background-selected")
    const ov = document.createElement('div');
    ov.className = 'overlay';
    let frameUrl = card.dataset.frameUrl
    let frameName = card.dataset.frameName
    ov.innerHTML = `<span style="color: #ff8484;">${frameName}</span><img src="${frameUrl}"><span style="" class="toblink">${message}</span>`;
    ov.onclick = function() {
      let opened = window.open(`./unlock.html`,`_blank`);
      if(opened) {
        setTimeout(()=>{
          let data = {feature:n,featureName:imageData.featureName,uuid:uniqueId,elementId:card.id}
          opened.postMessage(data,"*");
        },500);
      }
    }
    card.append(ov);
  }
}
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
async function drawFailed() {
	const canvas = document.getElementById("final-canvas");
	const ctx = canvas.getContext("2d");
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
function checkingDate() {
  for(let id of Object.keys(availableOrnaments)) {
    let oData = availableOrnaments[id];
    if(oData.live)
      lockElementWithMessage(document.getElementById(`ornament-${id}`),"adlockedframe",`Disable AdBlock to access ${oData.name}`,oData.image);
  }
}
function lockElementWithMessage(element,className,message,iconUrl='https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/lock-icon.png') {
  if(element) {
    if(typeof className == "object") className.forEach(e=>element.classList.add(e));
    else element.classList.add(className);
    const ov = document.createElement('div');
    ov.className = 'overlay';
    ov.innerHTML = `<img src="${iconUrl}"><span>${message}</span>`;
    ov.style.cssText = "cursor: not-allowed !important";
    element.append(ov);
    element.onclick = function(){};
  }
}
fitTypeButton.addEventListener("click",function(event) {
  if(typeof selectedBackgroundIdentifier == "undefined") return;
  let backgroundData = availableBackgrounds[selectedBackgroundIdentifier];
  if(!backgroundData) return;
  if(backgroundData.totalLocked) {
    alert("Playing with the code..");
    return;
  }
  if(!backgroundData.type) {
    backgroundData.type = "fit";
  }else if(backgroundData.type == "fit") {
    backgroundData.type = "force-fit";
  }else if(backgroundData.type == "force-fit") {
    backgroundData.type = "original";
  }else if(backgroundData.type == "original") {
    backgroundData.type = "fit";
  }else {
    backgroundData.type = "fit";
  }
  updateFitTypeButton(backgroundData.type);
  updateSkin(true)
})
function updateFitTypeButton(type){
  if(!type) {
    fitTypeButton.textContent = `Undefined 🧪`
  }else if(type == "fit") {
    fitTypeButton.textContent = `Fit 🧪`
  }else if(type == "force-fit") {
    fitTypeButton.textContent = `Force Fit 🧪`
  }else if(type == "original") {
    fitTypeButton.textContent = `Original 🧪`
  }else {
    fitTypeButton.textContent = `Unknown 🧪`
  }
}
document.addEventListener("DOMContentLoaded", () => {
  loadCounter();
  loadFrames();
  loadOrnaments();
  loadBackgrounds();
  checkSite(window);
  setTimeout(()=>{
    loadChecking();
    setInterval(()=>{
      loadChecking();
    },10000)
  },2500)
});
function processAds() {
  checkingDate();
  lockElementWithMessage(document.getElementById("arrows-div"),"adlocked",`Disable AdBlock to move avatar!`)
  lockElementWithMessage(document.getElementById("button-toggle-custom-gradient-div"),"adlockedfit",`Disable AdBlock to use custom gradients!`)
  lockElementWithMessage(document.getElementById("customskindiv"),"adlockedsmall",`Disable AdBlock to use custom skin texture!`)
  lockElementWithMessage(document.getElementById("unlock-features-div"),"adlockedunlockbutton",`Disable AdBlock to access new features!`)
}
setTimeout(()=>{
  return
  let success = false;
  for (const sheet of document.styleSheets) {
    console.log(sheet)
    if(success) break;
    try {
      for (const rule of sheet.cssRules) {
        console.log(rule)
        if (rule.selectorText === '.bliking-text') {
          let isRed = false;
          setInterval(()=>{
            if(isRed) {
                rule.style.color = 'white';
                isRed = false;
            }else{
                rule.style.color = 'red';
                isRed = true;
            }
          },500);
          success = true;
          break;
        }
      }
    } catch (e) {
      continue;
    }
  }
  console.log(`Success is ${success}`)
},2500);
let isRed = true;
setInterval(()=>{
  let toSwitch = document.querySelectorAll(".toblink")
  toSwitch.forEach((element,index)=>{
    //console.log(`Editing #${index} ${element.id} | isRed=${isRed}`)
    if(isRed){
      element.classList.remove("blinkingtext");
    }else {
      element.classList.add("blinkingtext");
    }
  })
  isRed = !isRed;
},500);