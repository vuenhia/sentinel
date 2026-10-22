Sentinel
## Tech Stack

- **Frontend:** React, TypeScript
- **Backend:** Node.js, Express, TypeScript
- **Database:** PostgreSQL
- **Testing:** Vitest, Playwright
- **CI/CD:** GitHub Actions

  
An api tracker tracking api endpoints, monitor their health, and detect reliability issues.

## Roadmap

### v0.1 — Tracking
- [x] Register API endpoints
- [] Store endpoint information
- [x] Manually check endpoint health

### v0.2 — Monitoring
- [] Automatically poll registered endpoints
- [] Track response times and status codes
- [] Record health history

### v0.3 — Visibility
- [] Build a monitoring dashboard
- [] Display endpoint health and response history
- [] Surface failures and performance changes

### v0.4 — Intelligence
- [] Detect incidents
- [] Identify regressions and unusual behavior
- [] Correlate endpoint failures with monitoring data

### v0.5 — Reliability
- []Add unit and integration tests with Vitest
- []Add end-to-end tests with Playwright
- []Set up CI/CD with GitHub Actions

(GOAL)
### v1.0 — AI Explanation
- []Generate incident summaries using an LLM
- []Ground explanations in actual monitoring evidence
- []Explain what happened, why it may have happened, and what evidence supports the conclusion
