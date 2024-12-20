const { Configuration, OpenAIApi } = require('openai');

// OpenAI Configuration
const openai = new OpenAIApi({
    apiKey: process.env.OPENAI_API_KEY, // Replace with your OpenAI API Key
});

module.exports = { openai };
