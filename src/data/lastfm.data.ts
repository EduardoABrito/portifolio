import { NowPlayingMusicDto } from "@/lib/actions/lastfm/dto/now-playing-music.dto";
import { fetchNowPlayingMusic } from "@/lib/actions/lastfm/get-now-playing";

export const getNowPlaying = async (): Promise<NowPlayingMusicDto> => {
  const user = await fetchNowPlayingMusic();

  const { data } = user;

  return data ?? {};
};
