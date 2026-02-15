async function listModels() {
    try {
        const response = await fetch("https://openrouter.ai/api/v1/models");
        const data = await response.json();
        const geminiModels = data.data.filter(m => m.id.includes('gemini') && m.id.includes('flash'));
        console.log('Gemini Flash models:', JSON.stringify(geminiModels.map(m => m.id), null, 2));
    } catch (e) {
        console.error(e);
    }
}
listModels();
