# About TLD Virtual Assistant

TLD Virtual Assistant is a proof-of-concept application that demonstrates the advanced capabilities of Large Language Models (LLMs) to interact with tools like WHOIS services for both generic Top-Level Domains (gTLDs) and country-code Top-Level Domains (ccTLDs). It showcases how LLMs can not only fetch data but also infer useful insights about domain names using these external services. This functionality, known as function calling, allows AI models to interact with various tools and APIs in real-time.

## Important Notice: Demo Status

TLD Assistant is a demo application developed purely for research purposes as part of the National Core Project PN 23 38 01 01 at ICI Bucharest in 2023. As such, this tool is not guaranteed to be reliable nor is its availability ensured. The application is part of an ongoing experiment to benchmark the function calling capabilities of LLMs, and users should be aware that results may vary and should not be considered fully dependable for critical tasks.

A demo is setup at **[ICI TLD Assistant](https://tld-assistant.innolabs.ro)**

For more reliable and consistent performance, we recommend checking the OpenAI GPT Plugin, which provides domain name expertise with more robust availability. You can find the plugin at this link: **[Domain Name Expert Plugin](https://chatgpt.com/g/g-fPCABcUvp-domain-name-expert)**.

## Purpose and Goals

The development of TLD Assistant was driven by the need to evaluate the capabilities of LLMs in real-world applications, particularly in querying and interacting with WHOIS services. This tool is intended to offer insights into how AI can streamline tasks related to domain names.

## Setup Instructions

To set up TLD Assistant, follow these steps:

1. **Install Dependencies**  
   Run the following command to install all required dependencies:
   ```bash
   npm install
    ```
2. **Add Environment Variables**
    
    Create a .env file in the root directory of the project and add the following data:
    ```bash
    OPENAI_API_KEY="sk-proj-........."
    GPT_MODEL="gpt-4o-mini"
    LOG_LEVEL="info"
    TLDEXPERT_API_ENDPOINT="https://localhost:5000"
    ORIGIN="http://localhost:3005"
    HOST=127.0.0.1
    PORT=3005
    ```

3. **Set Up the WHOIS Service**

TLD Assistant requires the **[simple-whois-service](https://github.com/icilabs/simple-whois-service)** to fetch whois data. Clone the repository and follow its setup instructions to run the service. Ensure the service is accessible to the TLD Assistant.

## Technologies Used

- **SvelteKit**: A fast, modern framework for building web applications.
- **Node.js**: Server-side runtime environment for JavaScript.
- **TypeScript**: Type-safe JavaScript for improved code reliability and scalability.
- **Langchain**: A framework enabling LLMs to integrate with external tools, key for the function calling abilities of TLD Assistant.
- **OpenAI models**: This application uses the GPT-4o-mini, a powerful quantized language model optimized for chat-based interactions.
- **Ollama**: An open-source tool allowing users to run large language models (LLMs) like Llama 2 and Mistral directly on their own machines. TLD Assistant has been successfully tested with smaller models like Mistral and Llama 2.

## Understanding Function Calling

The concept of function calling allows LLMs to interface with external services, APIs, and databases. This extends beyond simple question-answering, enabling the assistant to perform real-time tasks like querying WHOIS data.

To learn more about function calling, you can explore the following resources:

- **[Function Calling by Google](https://ai.google.dev/docs/function_calling)**
- **[Benchmarking Agent Tool Use and Function Calling by Langchain](https://blog.langchain.dev/benchmarking-agent-tool-use/)**
- **[OpenAI's Function Calling](https://platform.openai.com/docs/guides/function-calling)**

## Acknowledgments

TLD Assistant was developed as part of the National Core Project PN 23 38 01 01 within the Complex System Engineering Department at ICI Bucharest. This project highlights the potential of LLMs for real-world applications, particularly in the field of domain management and analysis.

## Disclaimer

This project is not affiliated with, endorsed by, or in any way associated with OpenAI or ChatGPT. Any references to ChatGPT are for informational purposes only.

---
## License

This project is licensed under the MIT License. See the LICENSE file for details.
