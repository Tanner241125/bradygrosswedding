export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) {
      // Handle regular API request...
    }
    return env.ASSETS.fetch(request);
  },
};