// Check if blocking is enabled
chrome.storage.local.get({ enabled: true }, (result) => {
  if (result.enabled) {
    blockYouTube();
  }
});

function blockYouTube() {
  // Block YouTube immediately
  document.documentElement.innerHTML = '';

  // Create the blocked page
  document.documentElement.innerHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Lock In</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #000;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .content {
          text-align: center;
          padding: 40px;
        }

        h1 {
          font-size: 4rem;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 12px;
          margin-bottom: 40px;
          font-weight: 300;
        }

        .painting {
          max-width: 90vw;
          max-height: 60vh;
          border: 2px solid #333;
        }

        .caption {
          color: #666;
          font-size: 0.9rem;
          margin-top: 20px;
          font-style: italic;
        }
      </style>
    </head>
    <body>
      <div class="content">
        <h1>Lock In</h1>
        <img class="painting" src="${chrome.runtime.getURL('Svolder,_by_Otto_Sinding.jpg')}" alt="Battle of Svolder by Otto Sinding">
        <p class="caption">Battle of Svolder - Otto Sinding (1884)</p>
      </div>
    </body>
    </html>
  `;
}
