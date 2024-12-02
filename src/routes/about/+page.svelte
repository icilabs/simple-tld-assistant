<div class="container mx-auto max-w-full lg:max-w-screen-lg flex flex-col flex-grow">  
    <h1 class="text-3xl font-bold text-white mb-6">About TLD Assistant</h1>

        <p class="mb-4">
            <strong>TLD Assistant</strong> is a proof-of-concept application that demonstrates the advanced capabilities of Large Language Models (LLMs) to interact with tools like WHOIS services for both generic Top-Level Domains (gTLDs) and country-code Top-Level Domains (ccTLDs). It showcases how LLMs can not only fetch data but also infer useful insights about domain names using these external services. This functionality, known as <strong>function calling</strong>, allows AI models to interact with various tools and APIs in real-time.
        </p>

        <h2 class="text-xl font-semibold text-gray-200 mb-2">Important Notice: Demo Status</h2>
        <p class="mb-4">
            TLD Assistant is a demo application developed purely for research purposes as part of the <strong>National Core Project PN 23 38 01 01</strong> at <strong>ICI Bucharest</strong> in 2023. As such, this tool is <strong>not guaranteed to be reliable</strong> nor is its <strong>availability ensured</strong>. The application is part of an ongoing experiment to benchmark the function calling capabilities of LLMs, and users should be aware that <strong>results may vary</strong> and should not be considered fully dependable for critical tasks.
        </p>
        <p class="mb-4">
            For more reliable and consistent performance, we recommend checking the OpenAI GPT Plugin, which provides domain name expertise with more robust availability. You can find the plugin at this link: <a href="https://chatgpt.com/g/g-fPCABcUvp-domain-name-expert" class="text-blue-600 underline">Domain Name Expert Plugin</a>.
        </p>

        <h2 class="text-xl font-semibold text-gray-200 mb-2">Purpose and Goals</h2>
        <p class="mb-4">
            The development of TLD Assistant was driven by the need to evaluate the capabilities of LLMs in real-world applications, particularly in querying and interacting with WHOIS services. This tool is intended to offer insights into how AI can streamline tasks related to domain names.
        </p>

        <h2 class="text-xl font-semibold text-gray-200 mb-2">Core Features</h2>
        <ul class="list-disc list-inside mb-4">
            <li><strong>SEO-Friendly Domain Name Generation</strong>: Offers creative and SEO-optimized domain name suggestions to help users find suitable names for their projects.</li>
            <li><strong>Domain Availability Check</strong>: Utilizes public WHOIS services for gTLDs and ccTLDs to check the availability of domain names.</li>
            <li><strong>Insightful WHOIS Data Analysis</strong>: Beyond simple queries, the assistant can infer meaningful information from WHOIS data, such as registration and expiration dates, and domain ownership details.</li>
            <li><strong>Domain-Specific Focus</strong>: TLD Assistant is limited to domain-related queries to ensure its accuracy within this focused area.</li>
        </ul>

        <h2 class="text-xl font-semibold text-gray-200 mb-2">Technologies Used</h2>
        <ul class="list-disc list-inside mb-4">
            <li><strong>SvelteKit</strong>: A fast, modern framework for building web applications.</li>
            <li><strong>Node.js</strong>: Server-side runtime environment for JavaScript.</li>
            <li><strong>TypeScript</strong>: Type-safe JavaScript for improved code reliability and scalability.</li>
            <li><strong>Langchain</strong>: A framework enabling LLMs to integrate with external tools, key for the function calling abilities of TLD Assistant.</li>
            <li><strong>OpenAI models</strong>: This application uses the GPT-4o-mini, which is a powerful quantized language model, optmized for chat-based interactions.</li>
            <li><strong>Ollama</strong>: Ollama is an open-source tool that allows users to run large language models (LLMs) like Llama 2 and other models, such as Mistral, directly on their own machines. The TLD Assistant application has been successfully tested with smaller models like Mistral and Llama 2.</li>
        </ul>

        <h2 class="text-xl font-semibold text-gray-200 mb-2">Understanding Function Calling</h2>
        <p class="mb-4">
            The concept of <strong>function calling</strong> allows LLMs to interface with external services, APIs, and databases. This extends beyond simple question-answering, enabling the assistant to perform real-time tasks like querying WHOIS data.
        </p>
        <p class="mb-4">
            To learn more about function calling, you can explore the following resources:
        </p>
        <ul class="list-disc list-inside mb-4">
            <li><a href="https://ai.google.dev/docs/function_calling" class="text-blue-600 underline">Function Calling by Google</a></li>
            <li><a href="https://blog.langchain.dev/benchmarking-agent-tool-use/" class="text-blue-600 underline">Benchmarking Agent Tool Use and Function Calling by Langchain</a></li>
            <li><a href="https://platform.openai.com/docs/guides/function-calling" class="text-blue-600 underline">OpenAI's Function Calling</a></li>
        </ul>

        <h2 class="text-xl font-semibold text-gray-200 mb-2">Acknowledgments</h2>
        <p class="mb-4">
            TLD Assistant was developed as part of the National Core Project PN 23 38 01 01 within the <strong>Complex System Engineering Department</strong> at <strong>ICI Bucharest</strong>. This project highlights the potential of LLMs for real-world applications, particularly in the field of domain management and analysis.
        </p>
</div>