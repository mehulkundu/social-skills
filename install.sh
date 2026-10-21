#!/usr/bin/env bash
# Install social-skills into Claude Code.
#
#   curl -fsSL https://raw.githubusercontent.com/mehulkundu/social-skills/main/install.sh | bash
#   curl -fsSL https://raw.githubusercontent.com/mehulkundu/social-skills/main/install.sh | bash -s -- x linkedin
#
# No arguments installs all four platforms. Run it again to update.
set -euo pipefail

REPO="mehulkundu/social-skills"
MARKET="social-skills"
ALL="instagram linkedin x youtube"

if ! command -v claude >/dev/null 2>&1; then
  echo "Claude Code isn't installed. Get it first: https://claude.com/claude-code" >&2
  exit 1
fi

plugins="${*:-$ALL}"
for p in $plugins; do
  case " $ALL " in
    *" $p "*) ;;
    *) echo "Unknown platform: $p. Pick from: $ALL" >&2; exit 1 ;;
  esac
done

if claude plugin marketplace list 2>/dev/null | grep -q "$REPO"; then
  claude plugin marketplace update "$MARKET"
else
  claude plugin marketplace add "$REPO"
fi

for p in $plugins; do
  claude plugin install "$p@$MARKET"
done

command -v python3 >/dev/null 2>&1 ||
  echo "Note: the scoring tools need python3, which wasn't found. The skills still work without it."

echo
echo "Done. Restart Claude Code (or run /reload-plugins), then try /x-post or /li-post."
