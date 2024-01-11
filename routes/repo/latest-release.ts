export default defineCachedEventHandler(
  async (e) => {
    setHeader(e, "Access-Control-Allow-Origin", "*");

    const { data } = await $repo("/resolve?r=placeholderapi&v=LATEST&g=me.clip&a=placeholderapi");

    return {
      name: data.version,
    };
  },
  {
    name: "repo-last-release",
    maxAge: 60 * 30,
  }
);
