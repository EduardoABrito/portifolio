import { UserGithubDto } from "@/lib/actions/github/dto/user-github.dto"
import { fetchUserGithub, FetchUserGithubParams } from "@/lib/actions/github/get-user"

export const getUserGithub = async (params: FetchUserGithubParams): Promise<UserGithubDto> => {
  const user = await fetchUserGithub(params)

  const { data } = user

  return data ?? {}
}
