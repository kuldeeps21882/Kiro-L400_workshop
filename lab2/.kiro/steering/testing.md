# Testing Strategy

## Coverage Requirements
- All exported functions must have at least one unit test
- All API endpoints must have integration tests covering success and error paths
- Bug fixes MUST include a regression test that would fail without the fix

## Test Structure
- `describe` blocks grouped by class/module
- `it` blocks named "should [behavior] when [condition]"
- Arrange-Act-Assert
- Setup in `beforeEach`, not inline

## Test Types
- Unit: individual functions in isolation, dependencies mocked
- Integration: API endpoints end-to-end with supertest
- No snapshot tests (too brittle for this project)

## Running Tests
- `npm test` — full suite
- `npm run test:related <file>` — tests related to a changed file
- CI runs the full suite on every PR
