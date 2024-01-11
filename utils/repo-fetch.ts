import { $fetch } from "ofetch";
export const $repo = $fetch.create({
  baseURL: "https://repo.extendedclip.com/service/local/artifact/maven/resolve?r=placeholderapi&v=LATEST&g=me.clip&a=placeholderapi",
  headers: {
    "User-Agent": "PlaceholderAPI Wiki Version Fetcher <https://github.com/PlaceholderAPI>",
    Accept: "application/json",
  },
});
