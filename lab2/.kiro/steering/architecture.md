# Architecture

## Service Boundaries
- Auth service: authentication, token management, session lifecycle
- Orders service: order creation, updates, status transitions, queries
- Services communicate via internal REST APIs, NOT shared database access

## API Design
- All responses use envelope format: `{ data: T | null, error: { code: string, message: string } | null }`
- HTTP status codes: 200 success, 201 created, 400 validation, 401 unauthorized, 404 not found, 500 server error
- All timestamps in ISO 8601 UTC

## Technology Stack
- Runtime: Node.js 20 with TypeScript 5.x
- Framework: Express.js
- Testing: Jest with ts-jest
- No ORM — raw SQL when a database is needed (currently in-memory)

## File Organization
- Source in `src/` by domain (auth/, orders/, utils/)
- Tests in `tests/` mirroring source structure
- Specs in `.kiro/specs/` — one file per feature/task
- Hooks in `.kiro/hooks/` — one file per automation rule
