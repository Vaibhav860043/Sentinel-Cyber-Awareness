// The catalog is served by the Node backend at /api/videos.
// This local fallback keeps the static index.html preview working too.
const fallbackVideos = [{"title":"How to Use a Password Manager","guideId":2,"description":"A presenter-led guide to managing unique passwords with a password manager.","alt":"A presenter demonstrates password manager use","publisher":"The Verge","id":"Q0GeMSFGIgI","featured":false},{"title":"Demystifying Cyber: Multi-Factor Authentication","guideId":3,"description":"CyberMaxx CISO Thomas Pioreck explains MFA and how to enable it.","alt":"Cybersecurity expert explaining MFA on camera","publisher":"CyberMaxx","id":"Af_iTddUlTE","featured":false},{"title":"Digital Banking Fraud Awareness","guideId":4,"description":"An English awareness film about protecting digital payments and banking details.","alt":"Digital banking fraud awareness film with real people","publisher":"NSDL Payments Bank","id":"HDpx3u5Uo-A","featured":false},{"title":"NCA Fraud Explained: Impersonation Fraud","guideId":5,"description":"A fraud explainer about criminals impersonating trusted people and organisations.","alt":"National Crime Agency impersonation fraud video","publisher":"National Crime Agency","id":"7sUCbB1rXM8","featured":false},{"title":"Set Automatic Updates on iPhone","guideId":6,"description":"A practical screen demonstration of enabling automatic security updates on an iPhone.","alt":"Screen demonstration of automatic updates on iPhone","publisher":"National Cybersecurity Alliance","id":"a4bq1vHKNZI","featured":false},{"title":"Public Wi-Fi Networks: Security Tips","guideId":7,"description":"FTC tips for safer use of public Wi-Fi networks.","alt":"FTC public Wi-Fi security video","publisher":"Federal Trade Commission","id":"bzoEy-t8Y-8","featured":false},{"title":"Online Shopping: Security Tips","guideId":8,"description":"FTC advice on checking sellers and avoiding online shopping scams.","alt":"FTC online shopping safety video","publisher":"Federal Trade Commission","id":"3w4t1dYCayM","featured":false},{"title":"NCA Fraud Explained: Payment Diversion Fraud","guideId":9,"description":"A fraud explainer about criminals redirecting business and supplier payments.","alt":"National Crime Agency payment diversion fraud video","publisher":"National Crime Agency","id":"J9QwS4x1IXk","featured":false},{"title":"Defend Against Ransomware Attacks","guideId":10,"description":"A recorded CISA awareness session on reducing ransomware impact and recovering.","alt":"CISA ransomware awareness session","publisher":"CISA","id":"8ElqWPpFw8I","featured":false},{"title":"Change Privacy and Security Settings on Instagram","guideId":11,"description":"A practical walkthrough of social media privacy and security settings.","alt":"Demonstration of Instagram privacy settings","publisher":"National Cybersecurity Alliance","id":"o44JF50rsJc","featured":false},{"title":"Kids vs Grown-ups: What Parents Think Kids Do Online","guideId":12,"description":"Real families discuss online habits, privacy and safety.","alt":"Parents and children discussing online privacy together","publisher":"UK Information Commissioners Office","id":"CYXkaG_pMjs","featured":false},{"title":"Beware of Deepfake Scams","guideId":13,"description":"A live-action awareness campaign about deepfake scams. Video language may be Hindi.","alt":"SBI deepfake scam awareness campaign","publisher":"State Bank of India","id":"eytn6fCYjeU","featured":false},{"title":"How to Protect Yourself from Cyber Crimes","guideId":14,"description":"An interview with Bengaluru City Police Commissioner on cybercrime and reporting.","alt":"Police commissioner discussing cybercrime prevention","publisher":"The News Minute","id":"Zxee95aZExM","featured":false},{"title":"NCA Fraud Explained: Investment Fraud","guideId":15,"description":"A fraud explainer about fake investments and warning signs.","alt":"National Crime Agency investment fraud video preview","publisher":"National Crime Agency","id":"xN90USivj08","featured":false},{"id":"4HmBZF_09V4","title":"DPC Cyber Security Awareness Campaign Videos","publisher":"DPC / VPS","description":"Cybersecurity awareness campaign video shared by the user.","alt":"DPC cybersecurity awareness campaign video preview","featured":true},{"id":"mJcV1agPz_s","guideId":1,"title":"Phishing Awareness Video","publisher":"YouTube video shared by the site owner","description":"Additional phishing awareness video. Open it on YouTube to view the creator’s full title and details.","alt":"Preview of an additional phishing awareness video","featured":false},{"id":"mI1s8W6Q0gg","title":"Cyber Security Awareness: Phishing and Online Safety","publisher":"Hasan Bishtawi","description":"A cybersecurity awareness presentation covering phishing, fake links, passwords, 2FA and safer browsing.","alt":"Cybersecurity awareness presentation about phishing and online safety","featured":true},{"id":"JlQovysQBn0","guideId":1,"title":"Recognize and Report Phishing","publisher":"CISA","description":"CISA guidance on recognizing phishing messages and reporting them.","alt":"CISA Recognize and Report Phishing video preview","featured":false},{"id":"Z3KFdNm5KQA","guideId":14,"title":"SBI Data Exposure: Awareness Video","publisher":"Video shared by site owner","description":"Video shared for awareness about the recent SBI data-exposure report. See the linked sources below for verified details.","alt":"Preview of an SBI data-exposure awareness video","featured":true},{"id":"Y95Ty9gjJ2Y","title":"Binance Security Incident: Awareness Video","guideId":14,"publisher":"YouTube video shared by the site owner","description":"Video shared for awareness about the Binance security incident.","alt":"Preview of a video about the Binance security incident","featured":true}];

const videoGrid = document.getElementById('video-grid');

function renderVideos(videos) {
  videoGrid.innerHTML = videos.filter(video => video.featured).map(video => `
    <article class="video-card">
      <div class="video-frame">
        <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg"
          onerror="this.onerror=null;this.src='assets/phishing-awareness.png'"
          loading="lazy" alt="${video.alt}">
        <button class="video-play" type="button" data-video="${video.id}"
          data-title="${video.title} | ${video.publisher}" aria-label="Play ${video.title} video"><span>▶</span></button>
        <span class="video-length">${video.publisher}</span>
      </div>
      <div class="video-copy"><h3>${video.title}</h3><p>${video.description}</p>
        <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank" rel="noopener">Watch on YouTube ↗</a>
      </div>
    </article>`).join('');

  const cards = [...videoGrid.querySelectorAll('.video-card')];
  cards.forEach(card => card.classList.add('reveal'));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    cards.forEach(card => observer.observe(card));
  } else {
    cards.forEach(card => card.classList.add('visible'));
  }

  document.querySelectorAll('.video-play').forEach(button => button.addEventListener('click', () => {
    if (location.protocol === 'file:') {
      window.open(`https://www.youtube.com/watch?v=${button.dataset.video}`, '_blank', 'noopener,noreferrer');
      return;
    }
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${button.dataset.video}?autoplay=1&rel=0&origin=${encodeURIComponent(location.origin)}`;
    frame.title = button.dataset.title;
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.allowFullscreen = true;
    button.closest('.video-frame').replaceChildren(frame);
  }));
}

async function loadVideoCatalog() {
  if (location.protocol === 'file:') return fallbackVideos;
  try {
    const response = await fetch('/api/videos', { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('Video API unavailable');
    const videos = await response.json();
    return Array.isArray(videos) ? videos : fallbackVideos;
  } catch {
    return fallbackVideos;
  }
}

loadVideoCatalog().then(renderVideos);






