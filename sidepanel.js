// Dr. De SouzAI Architect v1.2.1 - Skill-Infused Logic Engine (Bug-Fixed)

document.getElementById('run-skill').addEventListener('click', () => {
  const skill = document.getElementById('skill-selector').value;
  const input = document.getElementById('user-input').value.trim();
  const resultText = document.getElementById('result-text');
  const resultArea = document.getElementById('result-area');
  const progCont = document.getElementById('prog-cont');
  const progBar = document.getElementById('prog-bar');

  if (!input) {
    resultText.innerText = 'Please paste some content first.';
    return;
  }

  // Reset and show progress bar
  resultText.innerText = 'Processing skill protocol...';
  resultArea.innerHTML = '<span id="result-text">Processing skill protocol...</span>';
  progCont.style.display = 'block';
  progBar.style.width = '0%';

  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      progCont.style.display = 'none';
      runSkill(skill, input, resultArea);
    } else {
      width += 8;
      progBar.style.width = width + '%';
    }
  }, 60);
});

function runSkill(skill, input, resultArea) {
  switch (skill) {

    case 'hook': {
      // Viral Hook: Shorten + Synonyms (v1.2.1 - strips punctuation too)
      let hook = input
        .replace(/Microsoft|Word|Tutorial|Guide|Professional|10-Step|How to|Step-by-Step/gi, '')
        .replace(/[:\-\u2013\u2014]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

      const synonyms = {
        'Formatting': 'BLUEPRINT',
        'Styles': 'MASTERY',
        'Legal': 'ELITE',
        'Document': 'ASSET',
        'Workflow': 'SYSTEM',
        'Efficiency': 'POWER',
        'Management': 'CONTROL'
      };

      for (const [key, val] of Object.entries(synonyms)) {
        const regex = new RegExp(key, 'gi');
        hook = hook.replace(regex, val);
      }

      const hookWords = hook.split(' ').filter(w => w.length > 1).slice(0, 4).join(' ').toUpperCase();
      resultArea.innerHTML =
        '<div style="font-size:1.4em;font-weight:900;color:#e74c3c;text-align:center;padding:10px;">' +
        (hookWords || 'VIRAL HOOK') +
        '</div>' +
        '<p style="font-size:0.75em;color:#7f8c8d;margin-top:8px;">Viral hook generated. Use as thumbnail headline.</p>';
      break;
    }

    case 'translate': {
      resultArea.innerHTML =
        '<p style="font-size:0.85em;color:#2c3e50;"><strong>Translation Protocol Active</strong></p>' +
        '<p style="font-size:0.8em;">Input detected. Target language options:</p>' +
        '<ul style="font-size:0.8em;padding-left:16px;">' +
        '<li>PT (Portuguese) - Pending API</li>' +
        '<li>ES (Spanish) - Pending API</li>' +
        '<li>EN (English) - Source detected</li>' +
        '</ul>' +
        '<p style="font-size:0.75em;color:#7f8c8d;">Connect a translation API (e.g. DeepL or Google Translate) in v2.0 to activate full translation.</p>';
      break;
    }

    case 'table': {
      const lines = input.split(/[.\n,;]/).filter(l => l.trim().length > 5).slice(0, 8);
      let rows = lines.map((line, i) =>
        '<tr><td>' + (i + 1) + '</td><td>' + line.trim() + '</td></tr>'
      ).join('');
      resultArea.innerHTML =
        '<table>' +
        '<tr><th>#</th><th>Key Point</th></tr>' +
        rows +
        '</table>' +
        '<p style="font-size:0.75em;color:#7f8c8d;margin-top:6px;">Structured summary complete.</p>';
      break;
    }

    case 'summary': {
      const sentences = input.split(/[.!?]/).filter(s => s.trim().length > 20);
      const core = sentences[0] ? sentences[0].trim() + '.' : input.substring(0, 120) + '...';
      resultArea.innerHTML =
        '<p style="font-size:0.85em;font-weight:bold;color:#2c3e50;">Executive Summary:</p>' +
        '<p style="font-size:0.9em;color:#212529;">' + core + '</p>' +
        '<p style="font-size:0.75em;color:#7f8c8d;">Lead idea extracted and front-loaded.</p>';
      break;
    }

    case 'hype': {
      // v1.2.1 fix: use word boundaries (\b) to avoid matching substrings
      let hyped = input
        .replace(/\bgood\b/gi, 'OUTSTANDING')
        .replace(/\bbetter\b/gi, 'SUPERIOR')
        .replace(/\bimportant\b/gi, 'CRITICAL')
        .replace(/\buseful\b/gi, 'GAME-CHANGING')
        .replace(/\blearn\b/gi, 'MASTER')
        .replace(/\buse\b/gi, 'UNLEASH')
        .replace(/\bhelp\b/gi, 'TRANSFORM')
        .toUpperCase();
      resultArea.innerHTML =
        '<p style="font-size:0.85em;font-weight:bold;color:#e74c3c;">HYPED VERSION:</p>' +
        '<p style="font-size:0.85em;color:#212529;">' + hyped + '</p>';
      break;
    }

    default:
      resultArea.innerHTML = '<span id="result-text">Unknown skill selected.</span>';
  }
}
