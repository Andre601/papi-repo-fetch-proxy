export default defineCachedEventHandler(
  async (e) => {
    setHeader(e, "Access-Control-Allow-Origin", "*");

    const { data } = await $repo("/latest/version/releases/me/clip/placeholderapi");

    return {
      name: data.version,
    };
  },
  {
    name: "repo-last-release",
    maxAge: 60 * 30,
  }
);
