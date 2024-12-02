import dotenv from "dotenv";
import { z } from "zod";
import { DynamicStructuredTool } from "@langchain/core/tools";

dotenv.config();

const TLDEXPERT_API_ENDPOINT = process.env.TLDEXPERT_API_ENDPOINT ?? "https://localhost:5000";


export const tools = [
  new DynamicStructuredTool({
    name: "domain-info",
    description: "Domain information tool that uses Whois services",
    schema: z.object({
      domain: z.string().describe("The domain name to look up"),
    }),
    func: async ({ domain }) => {
        const response = await fetch(TLDEXPERT_API_ENDPOINT + '/DomainInfo?domain=' + domain, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return JSON.stringify(data);
    },
  }),
  new DynamicStructuredTool({
    name: "check-domains-availability",
    description: "Check if the list of domains are available for registration",
    schema: z.object({
      domains: z.array(z.string()).describe("The domain names to check the availability of"),
    }),
    func: async ({ domains }) => {
        const response = await fetch(TLDEXPERT_API_ENDPOINT + '/CheckDomainAvailability', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ domains: domains }),
        });
        const data = await response.json();
        return JSON.stringify(data);
    },
  }),
];


