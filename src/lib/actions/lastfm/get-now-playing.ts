/* eslint-disable @typescript-eslint/no-explicit-any */

import { createApiClient } from "@/lib/api/server";
import { environment } from "@/lib/environment";
import { ActionResult } from "next/dist/shared/lib/app-router-types";

export async function fetchNowPlayingMusic(): Promise<ActionResult> {
  const api = await createApiClient(environment.APIS.LASTFM_API);

  const res = await api.get<any>("/2.0", {
    params: {
      method: "user.getrecenttracks",
      user: environment.SOCIAL.LASTFM_USERNAME,
      api_key: environment.APIS.LASTFM_API_KEY,
      format: "json",
      limit: 1,
    },
  });

  const track = res?.data?.recenttracks?.track?.[0];
  console.log(res.data);
  if (!track) return {};

  res.data = {
    isPlaying: track["@attr"]?.nowplaying === "true",
    title: track.name,
    artist: track.artist?.["#text"] ?? "",
    album: track.album?.["#text"] ?? "",
    albumImageUrl:
      track.image?.find((img: any) => img.size === "large")?.["#text"] ??
      track.image?.find((img: any) => img.size === "medium")?.["#text"] ??
      "",
    songUrl: track.url,
  };

  return res;
}
