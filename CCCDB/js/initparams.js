// script/initParams.js
export function parseParams() {
  const query = window.location.search.replace("?", "");
  const parts = query.split(",");
  if (parts.length < 3) return null;

  return {
    cycle: parts[0],         // e.g., "29d"
    left: parts[1],          // e.g., "AU250713"
    right: parts[2]          // e.g., "BR210322"
  };
}
