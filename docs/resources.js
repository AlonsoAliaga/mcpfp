const hours = 12;
const allowReminder = true;
let adBlockEnabled = false;
function isAdBlockEnabled() {
  return adBlockEnabled;
}
async function detectAdBlock() {
  adBlockEnabled = false;
  const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  try {
      const keywordsToCheck = ['uBlock', "adblock",
        'height:1px!important', 'height:1px !important', 'display:none!important', 'display:none !important', 'height:1px!important', 'height:1px !important',
        'height: 1px!important', 'height: 1px !important', 'display: none!important', 'display: none !important', 'height: 1px!important', 'height: 1px !important'
      ];
      const response = await fetch(new Request(googleAdUrl));
      if (!response.headers.get('content-length')) {
          adBlockEnabled = true;
      }
      const responseText = await response.text();
      const adBlockDetected = keywordsToCheck.some(keyword => responseText.includes(keyword));
      if (adBlockDetected) {
          adBlockEnabled = true;
      }
  } catch (e) {
      adBlockEnabled = true;
  } finally {
      console.log(`AdBlock Enabled: ${adBlockEnabled}`);
  }
  return adBlockEnabled;
}
const hiddenBody = false
const isSpanishLanguage = navigator.language === 'es-ES' ? true : false;
const imagesCdnUrl = 'https://cdn.jsdelivr.net/gh/The-3Labs-Team/js-anti-adblock@main/assets'  
const body = document.querySelector('body')
window.onload = async () => {
  const adBlockEnabled = await detectAdBlock();
  if (adBlockEnabled) {
    processAds();
    if(!isTimeToRemember()) {
      return;
    }
    body.setAttribute('aria-hidden', 'true');
    if (hiddenBody) {
      body.innerHTML = '';
    }
    showBannerAdBlock();
  }
};
function showBannerAdBlock () {
  body.style.overflow = 'hidden'
  let reminder = allowReminder ? `<span onclick="remindMe();" style="width: 50%; height: 60px; padding: 10px; text-align: center; display: flex; justify-content: center; align-items:center; cursor: pointer; background-color: #ff5a5a; color: white; font-weight: bold; ">
                    ${isSpanishLanguage ? `Recuerdame en<br>${hours} horas` : `Remind me<br>in ${hours} hours`}
                  </span>` : ``
  body.innerHTML +=
        `
        <div style="${getRandomStyle()};">
        <!-- <div class="style"> -->
            <div style="width: 100%; max-width: 500px; margin: auto; background-color: white; border-radius: 1rem; overflow: hidden; position: relative;">
            <img src="${imagesCdnUrl}/logo-small.svg" style="position: absolute; top: 0; right: 0; background-color: #D9D9D9; padding: 2px; border-bottom-left-radius: 1rem;">
                <!-- Content -->
                <section id="content">
                  ${getContentFirstPage()}
                </section>
                <p style="color:rgb(68, 68, 68);text-align: center; margin: 5px 0; font-size: .9rem;">
                    ${isSpanishLanguage ? 'Porfavor, desactiva tu Ad-blocker para ayudar a' : 'Please, disable your Ad Blocker to support' } <br><a href="https://alonsoaliaga.com/site" target="_blank" style="font-weight: bold; text-decoration: none; color: black;">AlonsoAliaga Development</a>
                </p>
                <!-- Buttons -->
                <div style="display: flex; border-top: 1px solid #E5E7EB">
                  <span onclick="toggleContent()" id="how-to-remove" style="color:#000000;width: 50%; height: 60px; padding: 10px; text-align: center; display: flex; justify-content: center; align-items:center; cursor: pointer; background-color: #f7c92a; font-weight: bold; ">
                    ${getHowDisableButton()}
                  </span>
                  ${reminder}
                  <span onclick="location.reload()" style="width: 50%; height: 60px; padding: 10px; text-align: center; display: flex; justify-content: center; align-items:center; cursor: pointer; background-color: #46bb5e; color: white; font-weight: bold; ">
                    ${isSpanishLanguage ? 'Listo!<br>Ya lo hice!' : "Done!<br>I'm ready!"}
                  </span>
                </div>
            </div>  
        </div>
        <style>
        
        *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }
  
        #ad-icon-small{
                display: none;
            }
        @media screen and (max-width: 500px){
            #ad-icon{
                display: none;
            }
            #ad-icon-small{
                display: inline-block;
            }
            
        }
    </style>
`
  const script = document.createElement('script');
  script.textContent = `
    function toggleContent() {
      const content = document.getElementById('content');
      const button = document.getElementById('how-to-remove');
      if (content.innerHTML.includes('<div id="content-1"')) {
        content.innerHTML = \`${getContentSecondPage()}\`;
        button.innerHTML = \`${getReturnBackButton()}\`;
      } else {
        content.innerHTML = \`${getContentFirstPage()}\`;
        button.innerHTML = \`${getHowDisableButton()}\`;
      }
    }
  `;
  body.appendChild(script);
}
function getRandomStyle () {
  const styles = [
    {
      name: 'width',
      value: '100%'
    },
    {
      name: 'height',
      value: '100vh'
    },
    {
      name: 'padding',
      value: '10px'
    },
    {
      name: 'background-color',
      value: 'rgba(0,0,0,0.68)'
    },
    {
      name: 'position',
      value: 'fixed'
    },
    {
      name: 'top',
      value: '0'
    },
    {
      name: 'left',
      value: '0'
    },
    {
      name: 'z-index',
      value: '999999'
    },
    {
      name: 'display',
      value: 'flex'
    },
    {
      name: 'font-family',
      value: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol'
    },
    {
      name: 'backdrop-filter',
      value: 'blur(5px) grayscale(100%)'
    },
    
  ]
  const randomStyle = Array.from({ length: styles.length }, (_, index) => index)
    .sort(() => Math.random() - 0.5)
  return randomStyle.map(index => `${styles[index].name}: ${styles[index].value};`).join(' ')
}
function getContentFirstPage(){
  return `<div id="content-1" style="display: flex; padding: 30px 10px 5px; min-height: 305px;">
          <div style="margin-left: 10px;">
              <div style="color: #000000;display:flex; justify-content: space-between;">
                  <p style="font-size:20px">
                  <span style="font-size:20px;color: #000000;text-transform: uppercase;">${isSpanishLanguage ? 'Alto!':'Stop!'}</span> ${isSpanishLanguage ? 'Me parece que vi un...':'I thought I saw an...'}
                      <br>
                      <span style="color:rgb(68, 68, 68);font-size: 3rem; font-weight: bold; text-transform: uppercase;">Adblock!</span>
                  </p>
                  <img src="${imagesCdnUrl}/adIconSmall.png" id="ad-icon-small">
              </div>
              <p style="font-size: 1.1rem; color: rgb(107, 114, 128); line-height: 28px;">
                  ${isSpanishLanguage ? 'Los anuncios permiten seguir mejorando nuestras páginas.<br><br>Te pedimos que desactives tu bloqueador de anuncios, nuestros anuncios no te van a molestar. Gracias!' : 
                    'Ads allow us to keep improving our tools.<br><br>We ask you to disable your ad-blocker, our ads will not bother you. Thank you!'}
              </p>
          </div>
          <img src="${imagesCdnUrl}/adIcon.png" id="ad-icon" style="width: 100%; height: 100%;">
      </div> `;
    }
function getContentSecondPage(){
  return `<div id="content-2" style="padding: 30px 10px 5px; min-height: 305px">
        <div style="margin-left: 10px;color:#000000">
            <p style="font-weight: bold; font-size: 1.5rem; margin-bottom: 20px;">
            ${isSpanishLanguage ? '¿Como desactivar mi Ad Blocker?' : 'How to disable Ad Blocker?'}
            </p>
            <ol style="font-size: 1.1rem; color: rgb(107, 114, 128);">
                <li style="margin: 25px 20px;">
                  <span style="font-weight: bold;">${isSpanishLanguage ? "Clic en el icono de la extensión del Ad Blocker":"Click on the extension icon for the ad blocker"}</span>. ${isSpanishLanguage ? "Esta usualmente en la esquina superior derecha de la pantalla." : 'It is usually located in the top right corner of the screen.'}
                </li>   
                <li style="margin: 25px 20px;">
                  ${isSpanishLanguage ? 'Sigue las instrucciones para <span style="font-weight: bold;">desactivar el bloqueo de anuncios</span>.' : 'Follow the instructions to <span style="font-weight: bold;">disable ad blocking</span>.'}
                </li>
                <li style="margin: 25px 20px;">
                  ${isSpanishLanguage ? 'Recarga la pagina haciendo click en <span style="font-weight: bold;">"Listo! Ya lo hice!"</span>' : 'Refresh the page by clicking on <span style="font-weight: bold;">"Done! I\'m ready!"</span>'}
                </li>
            </ol>
        </div>
    </div>`;
}
function getHowDisableButton(){
  return `${isSpanishLanguage ? 'Como lo desactivo?' : 'How to disable?'}`;
}
function getReturnBackButton(){
  return `${isSpanishLanguage ? 'Atras' : 'Back'}`;
}
function isTimeToRemember() {
  let lastReminder = localStorage.getItem("reminder-time");
  if(typeof lastReminder != "undefined") {
    let endTimeToRemind = +lastReminder + (hours * 60 * 60 * 1000);
    if(endTimeToRemind > Date.now()) {
      //console.log(`Not yet time to remember! In ${formatMillis(endTimeToRemind - Date.now())}`)
      return false;
    }else{
      //console.log(`It's time to remember!`)
      return true;
    }
  }
  return true;
}
function remindMe() {
  localStorage.setItem("reminder-time",Date.now());
  location.reload();
}
function formatMillis(millis) {
  const date = new Date(millis);
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}