# akin-portfolio-mcp

[![npm version](https://img.shields.io/npm/v/akin-portfolio-mcp)](https://www.npmjs.com/package/akin-portfolio-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-green)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue)](https://www.typescriptlang.org)
[![MCP](https://img.shields.io/badge/MCP-compatible-purple)](https://modelcontextprotocol.io)

An **MCP (Model Context Protocol) server** that lets AI assistants — Claude Desktop, Claude Code, Cursor, and others — query information about **Akın Coşkun's** developer portfolio: projects, skills, and contact details. No API keys, no deployment — just `npx` and go.

---

## Tools

| Tool | Description |
|------|-------------|
| `get_about` | General info: name, title, location, summary |
| `get_skills` | Full tech stack, optionally filtered by category |
| `get_projects` | All projects with descriptions and links |
| `get_project_detail` | Deep-dive into a specific project by name |
| `search_projects` | Search projects by keyword (tech, feature, etc.) |
| `get_contact` | Email, GitHub, LinkedIn, portfolio URL |
| `get_experience_summary` | Quick stats: project count, key areas |

## Resources

| URI | Description |
|-----|-------------|
| `portfolio://about` | About data as JSON |
| `portfolio://skills` | Skills data as JSON |
| `portfolio://projects` | Projects data as JSON |

---

## Installation

### Option 1 — npx (no install needed)

```bash
npx akin-portfolio-mcp
```

### Option 2 — Global install

```bash
npm install -g akin-portfolio-mcp
akin-portfolio-mcp
```

---

## Claude Desktop Configuration

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "akin-portfolio": {
      "command": "npx",
      "args": ["-y", "akin-portfolio-mcp"]
    }
  }
}
```

**Config file locations:**
- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux:** `~/.config/Claude/claude_desktop_config.json`

---

## Claude Code / Cursor Configuration

Add to your MCP settings (`.claude/settings.json` or `~/.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "akin-portfolio": {
      "command": "npx",
      "args": ["-y", "akin-portfolio-mcp"]
    }
  }
}
```

---

## Example Questions

Once configured, ask your AI assistant:

- _"What are Akın's projects?"_
- _"Does Akın know N8N?"_
- _"What's Akın's most complex project?"_
- _"Show me Akın's AI-related projects."_
- _"What databases does Akın work with?"_
- _"Give me Akın's contact info."_
- _"How many production apps has Akın built?"_

---

## Testing with MCP Inspector

```bash
npx @modelcontextprotocol/inspector npx akin-portfolio-mcp
```

This opens an interactive UI to call each tool and inspect responses.

---

## Tech Stack

Built with:
- [MCP SDK](https://github.com/modelcontextprotocol/typescript-sdk) — official TypeScript SDK
- [Zod](https://zod.dev) — runtime input validation
- TypeScript (strict mode)
- Node.js 18+, stdio transport

---

## License

MIT © [Akın Coşkun](https://akin-coskun.web.app)
