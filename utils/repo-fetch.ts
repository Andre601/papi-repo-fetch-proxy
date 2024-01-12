import { $fetch } from "ofetch";
export const $repo = $fetch.create({
  baseURL: "https://repo.extendedclip.com/service/local/artifact/maven",
  headers: {
    "User-Agent": "PlaceholderAPI Wiki Version Fetcher <https://github.com/PlaceholderAPI>",
    Accept: "application/json",
  },
});
