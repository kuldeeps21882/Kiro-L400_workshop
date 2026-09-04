# Kiro L400 Workshop — Labs

Lab repository for the **Reliable AI-Driven Development with Kiro** workshop (L400).

📖 **Start here: the [Wiki](../../wiki)** — setup instructions, lab guides, and a
copy-paste reference you'll use throughout the day.

## What's in here

| Folder | Used in |
|---|---|
| `lab1/` | Module 1 — diagnosis lab |
| `lab2/` | Module 2 onward — context experiment, tool exercises, and the afternoon deep lab |

## Quick setup

Do this **before** the workshop. Full instructions on the
[Before You Arrive](../../wiki/01-Before-You-Arrive) wiki page.

```bash
git clone https://github.com/kuldeeps-hub/Kiro-L400_workshop.git
cd Kiro-L400_workshop

cd lab2 && npm ci && cd ..
cd lab1 && npm ci && cd ..
```

Verify `lab2`:

```bash
cd lab2
npm run lint        # clean
npm run typecheck   # clean
npx jest            # Tests: 1 failed, 6 passed, 7 total
```

> **The one failing test in `lab2` is meant to be there.** It's the subject of an
> exercise later in the day. If you see `1 failed, 6 passed`, your setup is correct —
> don't fix it and don't report it.

## Opening in Kiro

Open **`lab1/` or `lab2/` as your workspace root**, not the repository root. Kiro
loads `.kiro/steering/` relative to the workspace, and each lab has its own.

## Branches

Some exercises use a specific branch. The wiki tells you which and when — you don't
need to switch anything to get started.

```bash
git checkout main    # back to the default at any time
```
