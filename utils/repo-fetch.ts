import { $fetch } from "ofetch";
export const $repo = $fetch.create({
  baseURL: "https://repo.extendedclip.com/api/maven",
  headers: {
    "User-Agent": "PlaceholderAPI Wiki Version Fetcher <https://github.com/PlaceholderAPI>",
    Accept: "application/json",
  },
});
