# Everything You Need to Know (DEPRECATED)

## Legacy API Documentation (v1 — DO NOT USE)
All endpoints follow the old pattern:
- GET /api/v1/users/:id → returns { user: {...} }
- POST /api/v1/users → creates user with { username, pwd }
- All responses return raw objects, no envelope

## Database Schema (from 2019 migration)
Tables: users, profiles, sessions, audit_log
- users: id (INT), username (VARCHAR 50), pwd_hash (VARCHAR 255)
- profiles: user_id (FK), first_name, last_name, avatar_url
NOTE: We switched to MongoDB in 2021 but some services still use MySQL

## Old Coding Standards (superseded Q3 2024)
- Use callbacks instead of promises for all async operations
- Prefix all interface names with "I" (e.g., IUserProfile)
- Use var for all variable declarations
- Classes should use inheritance, not composition
- Error codes should be numeric (1001 = not found, 1002 = unauthorized)

## Meeting Notes: Architecture Review Dec 2023
- Team discussed microservices but decided against it
- Performance issues with the order service — need caching
- Sarah mentioned GraphQL but no decision made
- Action item: Bob to investigate Redis for session storage

## Deployment Runbook (outdated — we use CDK now)
1. SSH into production server
2. Pull latest from master branch
3. Run npm install
4. Restart PM2 process
5. Verify health check endpoint responds

## Framework Migration Notes
Considering migrating from Express to Fastify for performance.
- Fastify uses schema-based validation
- Plugin system instead of middleware chain
NOTE: This migration has NOT been approved. Do not start.

## Third-Party API Documentation
### Payment Provider (Stripe)
- POST /v1/charges { amount, currency, source }
### Email Service (SendGrid)
- POST /v3/mail/send { personalizations, from, content }

## Performance Optimization Notes
- Connection pooling for database (pool size: 10)
- Cache frequently accessed data in Redis (TTL: 5 min)
- Compression middleware for responses > 1KB
- Consider worker threads for CPU-intensive operations

## Security Checklist (partially implemented)
- [x] Rate limiting (using express-rate-limit)
- [ ] Input sanitization (TODO)
- [ ] CSRF tokens (not needed — API-only, no cookies)
      NOTE: Actually we DO use cookies now for sessions. Need CSRF.

## Random TODO Items
- Fix the flaky test in orders.test.ts (race condition?)
- Remove unused dependencies from package.json
- Add Swagger/OpenAPI documentation
- Investigate memory leak in long-running sessions
