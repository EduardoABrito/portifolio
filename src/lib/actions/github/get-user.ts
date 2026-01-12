import { createApiClient } from "@/lib/api/server";
import { environment } from "@/lib/environment";
import { ActionResult } from "next/dist/shared/lib/app-router-types";
import { UserGithubDto } from "./dto/user-github.dto";
import { convertCamelCaseKeys } from "@/utils/convert-camel-case.util";

export interface FetchUserGithubParams {
  username: string;
}

export async function fetchUserGithub(
  params: FetchUserGithubParams
): Promise<ActionResult> {
  const api = await createApiClient(environment.APIS.GITHUB_API);

  const res = await api.get<UserGithubDto>(`/users/${params.username}`);

  res.data = convertCamelCaseKeys(res.data);

  return res ?? {};
}
