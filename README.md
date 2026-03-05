# Monorepo Workspace Example (using tsdown)

A pnpm workspace demonstrating how to build multiple packages and apps with [tsdown](https://tsdown.dev).

## Getting Started

```bash
pnpm install
```

## Commands

```bash
pnpm run build      # Build all packages with tsdown
pnpm run dev        # Watch mode for development
pnpm run typecheck  # Type-check with tsgo (TypeScript)
pnpm run lint       # Lint with oxlint
pnpm run lint:fix   # Fix lint issues
pnpm run fmt        # Format with oxfmt
pnpm run fmt:check  # Check formatting
```

## Structure

- `apps/` - Application packages
- `libs/` - Shared library packages
