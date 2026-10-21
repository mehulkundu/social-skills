#!/usr/bin/env bash
# Copy the video studio into the user's own workspace and install it there.
#
#   bash setup.sh <workspace>/video
#
# Safe to run again: an existing studio is never overwritten, because the user's
# brand, props and scenes live in it. Refuses to install inside the plugin, since
# plugin updates replace that folder.
set -euo pipefail

dest=${1:?usage: setup.sh <workspace>/video}
here=$(cd "$(dirname "$0")" && pwd)

command -v node >/dev/null || { echo "Node 18 or newer is needed: https://nodejs.org" >&2; exit 1; }
major=$(node -p 'process.versions.node.split(".")[0]')
[ "$major" -ge 18 ] || { echo "Node 18 or newer is needed, found $(node -v)" >&2; exit 1; }

mkdir -p "$dest"
abs=$(cd "$dest" && pwd)
case "$abs/" in
  "$here"/* | */.claude/plugins/*)
    echo "Refusing to set up in $abs: that is inside the plugin. Use a folder in the user's workspace." >&2
    rmdir "$abs" 2>/dev/null || true
    exit 1 ;;
esac

if [ -e "$abs/package.json" ]; then
  echo "Studio already at $abs, leaving its files as they are."
else
  cp -R "$here/template/." "$abs/"
  echo "Copied the studio template to $abs"
fi

cd "$abs"
npm install --no-audit --no-fund
echo "Studio ready at $abs"
