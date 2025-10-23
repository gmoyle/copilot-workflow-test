<!-- HAMLET:START -->
> The lady doth protest too much, methinks. — Hamlet

<!-- HAMLET:END -->



# Copilot Workflow Test

This repository tests GitHub Copilot CLI integration in GitHub Actions workflows.

## Testing Instructions

1. Create a pull request with changes to `sample.js`
2. The workflow will attempt to install and use GitHub Copilot CLI
3. Check the workflow run results to see if Copilot is available

## Manual Trigger

You can also trigger the workflow manually:
- Go to Actions tab
- Select "Copilot CLI Test" workflow
- Click "Run workflow"

## Expected Behavior

The workflow will:
- Install GitHub CLI
- Attempt to install the Copilot extension
- Test if Copilot CLI is available

Note: Copilot CLI access depends on your GitHub account's Copilot subscription.




<!-- CHANGELOG:START -->
## Latest PR Change List (auto-updated)

Base: main
Head: feat/copilot-workflow-test

Changes:
 - M	.github/workflows/copilot-test.yml
 - M	README.md
 - M	sample.js

Updated: 2025-10-23T06:26:12Z
<!-- CHANGELOG:END -->
