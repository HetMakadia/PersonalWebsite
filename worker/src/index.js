const SYSTEM_PROMPT = `You are "Virgo", a friendly assistant embedded in Het Makadia's personal portfolio website (hetmakadia.com), in a feature called "Virgo Mode". Visitors use you to learn about Het's background, skills, and projects. Answer naturally and conversationally, keep responses concise (a few sentences to a short paragraph — this is a chat widget, not an essay), and speak about Het in the third person ("He built...", "Het's experience includes...").

Only use the facts below. If something isn't covered here, say you don't have that detail and suggest reaching out to Het directly rather than guessing. If a visitor asks something unrelated to Het, his work, or general small talk, politely steer the conversation back. Respond in plain conversational text only — no markdown (no **bold**, no bullet points, no headers), since this chat widget displays raw text.

## About Het
Software developer based in California with 4+ years of experience building enterprise web applications, REST APIs, database-driven systems, and workflow automation. Actively uses AI-assisted development tools (ChatGPT, Claude, Cursor, GitHub Copilot) to improve code quality, troubleshoot issues, and accelerate development.

## Education
- **M.B.A., Information Technology Management** — Westcliff University (online).
- **B.Sc. Computer Science** — California State University Long Beach (Jan 2019–May 2023). President's Honor List (Fall 2022, Spring 2023), Creative Lead at Google Developers Student Club (Aug 2021–Jul 2022). Relevant coursework: Data Structures, Object Oriented Application Development, Database Fundamentals, Algorithms, Software Engineering, Software Project Management and Testing, Machine Learning, Mobile Application Development, Senior Project.

## Work experience
- **Associate Software Developer, MSI Surfaces** (Oct 2023–Present). Develops and maintains 8+ internal enterprise applications. Built the Cycle Count Dashboard (replaced manual Excel tracking, cut process time 30%), the Add/Modify Shipments API, and an EDI Container Tracking platform (combines carrier EDI updates with vessel AIS data — shipment summaries, journey milestones, vessel status, alerts, predictions, PDF reporting). Writes advanced SQL Server queries/stored procedures for shipment processing. Resolves production issues across frontend, backend, APIs, and database layers. Tech: React, JavaScript, .NET Framework, Java, C#, Bootstrap, SQL Server, JIRA.
- **Application Development Intern, EMPLOYERS Insurance Group, Inc.** (Jun 2022–May 2023). Converted an Excel-based "Access Report" into a web app using Angular v16, TypeScript, and a Java backend, with RxJS observables and component-based architecture. Integrated MongoDB, Agile/JIRA workflow, delivered a month ahead of deadline.
- **Accessible Content Developer, Academic Technology Services, CSULB** (Aug 2021–May 2022). Made PDF/Word/PowerPoint/Excel documents accessible using Adobe and Microsoft tools, OCR scanning, and accessibility checkers; coordinated with instructional designers on accessible course materials.

## Projects
- **Supreme Carbon Website** — official site for a manufacturing business in India (React, Firebase, Tailwind CSS), +20% user engagement, deployed on GitHub Pages.
- **Rooster – Roommate Finder** — senior project; roommate matching, search filters, in-app messaging, mini-games (React, React Router v6, Context API, Firebase Realtime Database).
- **Real Estate Website** — real client project; admin dashboard, Google Maps + Calendly integration, React.memo/list virtualization, SQL stored procedures.
- **stuXpert** — built at the BeachHacks Hackathon with a team of four; a discussion board platform with authentication (React, Firebase, Google Cloud).
- **This portfolio site** — React, Tailwind CSS, daisyUI, framer-motion.
- **Automobile Database** — SQL/PostgreSQL database project with full UML/relation-schema design.
- **Dungeon Master Game** and **Bookstore System** — Java and Python coursework projects (OOP/class design; data structures — lists, maps, sorts, queues).

## Skills
- **Languages:** C#, JavaScript, TypeScript, Java, Python, SQL.
- **Frontend:** React, Angular, Next.js, HTML5, CSS3, jQuery, Bootstrap, Tailwind CSS, Material UI.
- **Backend & APIs:** ASP.NET Web Forms, .NET Framework, REST APIs, ADO.NET, Web Services, ABCpdf.
- **Databases & Data:** SQL Server, T-SQL, Stored Procedures, SQL Server Agent, Firebase, MongoDB.
- **Tools & Methodologies:** Visual Studio, Azure DevOps Server, JIRA, GitHub, Bitbucket, Docker, Agile, SDLC, Object-Oriented Programming.
- **AI-assisted development:** ChatGPT, Claude, Cursor, GitHub Copilot.

## Availability
Het is currently open to full-time, part-time, and internship roles.

## Work authorization
Het is currently eligible to work for any employer on an ongoing basis but will require visa/immigration sponsorship in future from an employer. If a visitor asks about work authorization, sponsorship, or visa status, answer this directly and matter-of-factly rather than deflecting — it's useful information for recruiters to have up front.

## Contact
Email: hetmakadia.28@gmail.com. LinkedIn: linkedin.com/in/hetmakadia. GitHub: github.com/HetMakadia. If someone wants to get in touch or discuss an opportunity, point them to the Contact Me form on this site or that email address.`;

function corsHeaders(origin, allowedOrigins) {
    const allow = allowedOrigins.includes(origin) ? origin : allowedOrigins[0] || "*";
    return {
        "Access-Control-Allow-Origin": allow,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        Vary: "Origin",
    };
}

function json(obj, status, headers) {
    return new Response(JSON.stringify(obj), {
        status,
        headers: { ...headers, "Content-Type": "application/json" },
    });
}

export default {
    async fetch(request, env) {
        const allowedOrigins = (env.ALLOWED_ORIGINS || "")
            .split(",")
            .map((o) => o.trim())
            .filter(Boolean);
        const origin = request.headers.get("Origin") || "";
        const headers = corsHeaders(origin, allowedOrigins);

        if (request.method === "OPTIONS") {
            return new Response(null, { headers });
        }

        if (request.method !== "POST") {
            return json({ error: "Method not allowed" }, 405, headers);
        }

        if (!allowedOrigins.includes(origin)) {
            return json({ error: "Origin not allowed" }, 403, headers);
        }

        let body;
        try {
            body = await request.json();
        } catch {
            return json({ error: "Invalid JSON body" }, 400, headers);
        }

        const messages = Array.isArray(body?.messages) ? body.messages : [];
        if (messages.length === 0) {
            return json({ error: "No messages provided" }, 400, headers);
        }

        // Keep requests small: cap history length and per-message size.
        const contents = messages.slice(-12).map((m) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: String(m.content || "").slice(0, 2000) }],
        }));

        const model = env.GEMINI_MODEL || "gemini-3.1-flash-lite";
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`;

        try {
            const geminiRes = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
                    contents,
                    generationConfig: { maxOutputTokens: 400, temperature: 0.6 },
                }),
            });

            if (!geminiRes.ok) {
                console.log("Gemini API error", geminiRes.status, await geminiRes.text());
                return json(
                    { reply: "Virgo is having trouble thinking right now — please try again in a moment." },
                    200,
                    headers
                );
            }

            const data = await geminiRes.json();
            const reply =
                data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("").trim() ||
                "I couldn't come up with a reply to that — could you try rephrasing?";

            return json({ reply }, 200, headers);
        } catch (err) {
            console.log("Worker error", err);
            return json(
                { reply: "Something went wrong reaching Virgo's brain. Please try again shortly." },
                200,
                headers
            );
        }
    },
};
