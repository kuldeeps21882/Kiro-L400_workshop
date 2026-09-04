# Conventions

## Naming
- Files: kebab-case (`order-service.ts`)
- Classes: PascalCase (`OrderService`)
- Functions: camelCase (`createOrder`)
- Constants: UPPER_SNAKE_CASE (`MAX_RETRY_ATTEMPTS`)
- Interfaces: PascalCase, no "I" prefix (`Order`, not `IOrder`)

## Code Style
- Use `async/await` over raw promises
- Prefer `const` over `let`; never use `var`
- Explicit return types on all exported functions
- No `any` types in production code (test mocks only)
- Maximum function length: 30 lines

## Error Handling
- Never throw raw errors — wrap in typed error objects
- Standard envelope: `{ code: string, message: string }`
- Log errors at point of origin using `src/utils/logger.ts`
- Return appropriate HTTP status codes; do not default to 500

## Git & PR
- Commits: `<type>(<scope>): <description>` e.g. `feat(auth): add rate limiting`
- Branches: `feat/`, `fix/`, `refactor/`, `chore/` prefixes
- One logical change per commit
