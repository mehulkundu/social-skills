#!/usr/bin/env bash
# Install social-skills into Claude Code.
#
#   curl -fsSL https://raw.githubusercontent.com/mehulkundu/social-skills/main/install.sh | bash
#   curl -fsSL https://raw.githubusercontent.com/mehulkundu/social-skills/main/install.sh | bash -s -- x linkedin
#   curl -fsSL https://raw.githubusercontent.com/mehulkundu/social-skills/main/install.sh | bash -s -- video
#
# No arguments installs all four platforms. The video add-on is only installed
# when named, because it needs Node. Run it again to update.
set -euo pipefail

REPO="mehulkundu/social-skills"
MARKET="social-skills"
ALL="instagram linkedin x youtube"
ADDONS="video"

if ! command -v claude >/dev/null 2>&1; then
  echo "Claude Code isn't installed. Get it first: https://claude.com/claude-code" >&2
  exit 1
fi

plugins="${*:-$ALL}"
for p in $plugins; do
  case " $ALL $ADDONS " in
    *" $p "*) ;;
    *) echo "Unknown plugin: $p. Pick from: $ALL $ADDONS" >&2; exit 1 ;;
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

case " $plugins " in
  *" video "*) command -v node >/dev/null 2>&1 ||
    echo "Note: /video needs Node 18 or newer, which wasn't found: https://nodejs.org" ;;
esac

echo
echo "Done. Restart Claude Code (or run /reload-plugins), then try /x-post or /li-post."
