function(instance, context) {
  function waitForMastra(callback, retries = 10) {
    if (window.Mastra && window.Mastra.Agent) {
      callback();
    } else if (retries > 0) {
      setTimeout(() => waitForMastra(callback, retries - 1), 300);
    } else {
      console.error("Mastraライブラリの読み込みに失敗しました。");
    }
  }

  waitForMastra(() => {
    instance.data.agent = new window.Mastra.Agent({
      name: "BubbleBot",
      prompt: "あなたは親切なアシスタントです。",
      model: "gpt-4",
      application: "bubble-app",
      openai: {
        apiKey: "sk-XXXXXXXXXXXXXXXX" // OpenAIキー
      }
    });
    console.log("✅ Mastra Agent 初期化完了:", instance.data.agent);
  });
}

