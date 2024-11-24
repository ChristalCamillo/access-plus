document.addEventListener('DOMContentLoaded', () => {
  const resultsDiv = document.getElementById('results');
  const readButton = document.getElementById('readButton');
  const copyButton = document.getElementById('copyButton');

  const API_URL = 'https://api.openai.com/v1/chat/completions';

  // Captura o HTML da aba ativa
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.scripting.executeScript(
      {
        target: { tabId: activeTab.id },
        func: () => document.documentElement.outerHTML // Captura o HTML completo
      },
      (results) => {
        if (results && results[0]) {
          analyzeHTML(results[0].result);
        } else {
          resultsDiv.textContent = 'Erro ao capturar o conteúdo da aba.';
        }
      }
    );
  });

  // Função para enviar o HTML à API e obter sugestões
  function analyzeHTML(html) {
    const openAiKey = document?.querySelector?.("#openAiKey")?.value;
    resultsDiv.textContent = 'Analisando HTML... Por favor, aguarde.';
    const requestData = {
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'Você é um especialista em acessibilidade web chamado Acess+.'
        },
        {
          role: 'user',
          content: `Analise os elementos do HTML abaixo e sugira melhorias com base nas diretrizes WCAG:\n\n${html}`
        }
      ],
      max_tokens: 2000,
      temperature: 0.7
    };

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openAiKey}`
      },
      body: JSON.stringify(requestData)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na API: ${response.statusText} (status ${response.status})`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.choices && data.choices[0].message.content) {
          resultsDiv.textContent = data.choices[0].message.content;
        } else {
          throw new Error('A API não retornou uma resposta válida.');
        }
      })
      .catch((error) => {
        resultsDiv.textContent = `Erro ao processar a resposta da API: ${error.message}`;
        console.error('Erro na análise:', error);
      });
  }

  // Lê as sugestões em voz alta
  readButton.addEventListener('click', () => {
    const results = resultsDiv.innerText;
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(results);
      utterance.lang = 'pt-BR';
      utterance.rate = 1;
      utterance.pitch = 1;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    } else {
      alert('A API de síntese de fala não é suportada neste navegador.');
    }
  });

  // Copia sugestões para a área de transferência
  copyButton.addEventListener('click', () => {
    const results = resultsDiv.innerText;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(results).then(() => {
        alert('Resultados copiados para a área de transferência!');
      }).catch(() => {
        alert('Falha ao copiar resultados.');
      });
    } else {
      alert('A API de cópia não é suportada neste navegador.');
    }
  });
});
