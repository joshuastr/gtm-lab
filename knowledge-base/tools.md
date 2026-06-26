# GTM Tools

The source for the app's **Tools** section: the modern go-to-market stack, by category. For each tool:
what it does, what it is best for, and what to watch out for. This is a practitioner's map, not a ranking;
the right tool depends on your ACV, team, and motion. Currency note: pricing and positions shift; verify
before you commit budget.

Format (parsed by `app/scripts/build-data.mjs`): `## Category`, then `### Tool`, then `- what/best/watch:` lines.

## Data & enrichment
### Clay
- what: Orchestration plus waterfall enrichment across 100+ providers, with AI research columns. The hub most modern outbound runs through.
- best: Building targeted lists, multi-source enrichment, signal plays, and GTM engineering.
- watch: Real learning curve, credit cost climbs at scale, and it is a build tool, not plug-and-play.
### Apollo.io
- what: All-in-one contact database, sequencer, and dialer at a low price point.
- best: Startups and SMBs that want one affordable tool to find and email prospects.
- watch: Data freshness is uneven and the built-in sending has mediocre deliverability for cold volume.
### ZoomInfo
- what: The largest enterprise B2B database, with firmographics, org charts, and intent.
- best: Enterprise teams with budget that need deep, accurate account data.
- watch: Expensive, annual contracts, and a heavy sales process to buy.
### People Data Labs
- what: Raw person and company data delivered by API, not an app.
- best: Developers building custom enrichment or a proprietary dataset.
- watch: API-only, so you build the interface and the logic yourself.

## Email finding & verification
### Hunter
- what: Finds and verifies work emails by domain or name.
- best: Simple, reliable email finding and list verification.
- watch: Coverage gaps on smaller or niche companies.
### Waterfall finders (Prospeo, FindyMail, LeadMagic)
- what: Chase an email across several providers in sequence to maximize hit rate.
- best: Squeezing the most valid emails out of a list, usually wired inside Clay.
- watch: Costs stack across providers; quality varies by region.
### Verifiers (MillionVerifier, NeverBounce, ZeroBounce)
- what: Check addresses for validity and risk before you send.
- best: Cleaning a list to protect sender reputation and stay under spam thresholds.
- watch: They handle catch-all domains differently, so results disagree at the edges.

## Sending & outbound infrastructure
### Instantly
- what: High-volume cold email with inbox rotation, warmup, and deliverability tooling, cheaply.
- best: Scaled cold outbound across many mailboxes.
- watch: Deliverability still depends on your list and copy; shared infrastructure carries some risk.
### Smartlead
- what: Similar to Instantly with a stronger API and agency-friendly multi-client setup.
- best: Agencies and anyone who wants programmatic control of sending.
- watch: More moving parts, so the UI and setup are heavier.
### Outreach / Salesloft
- what: Enterprise sales engagement: sequences, dialer, and rep workflow at scale.
- best: Large outbound sales teams that need governance and reporting.
- watch: Expensive and heavy; overkill for a lean team.

## CRM
### HubSpot
- what: All-in-one CRM with marketing, sales, and service in one suite.
- best: Most B2B startups and mid-market teams; fast to adopt.
- watch: Costs balloon as contacts and premium add-ons grow.
### Salesforce
- what: The enterprise CRM standard, endlessly customizable.
- best: Enterprises with complex processes and admin resources.
- watch: Complex and pricey; needs dedicated admins to run well.
### Attio
- what: A modern, data-model-first CRM that plays well with Clay and automation.
- best: Startups that want a flexible, current CRM rather than legacy software.
- watch: Newer, so the integration ecosystem is still filling in.

## Signals & intent
### Common Room
- what: Captures buying signals across product, community, and web, resolved to people.
- best: Product-led and community-led teams acting on first-party signals.
- watch: Needs real setup and source connections to pay off.
### Visitor de-anonymization (RB2B, Vector, Warmly)
- what: Identifies the people behind anonymous website traffic, mostly in the US.
- best: Turning existing site traffic into warm outbound.
- watch: Coverage is partial and US-skewed; mind privacy and consent.
### Third-party intent (Bombora, G2)
- what: Signals that an account is researching your category across the web.
- best: Prioritizing accounts that are already in-market.
- watch: Account-level and noisy; treat as a prioritization hint, not proof.

## Orchestration & GTM engineering
### n8n
- what: Open-source workflow automation you can self-host, friendly to AI steps.
- best: Durable custom GTM workflows when you want control and low cost.
- watch: Technical to build and maintain.
### Zapier / Make
- what: No-code automation that connects apps with triggers and actions.
- best: Simple, fast connections between tools.
- watch: Brittle and costly at high volume or complex logic.
### trigger.dev
- what: Durable background jobs and long-running tasks for developers.
- best: Reliable, observable agentic or batch processes.
- watch: Code required; not for non-technical users.
### Claude Code / AI agents
- what: AI agents that research, parse, write, and orchestrate custom tooling in your terminal.
- best: Reasoning, research, and building bespoke GTM systems and skills.
- watch: Needs guardrails and validation; not a turnkey product.
