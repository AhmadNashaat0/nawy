import { toast } from "sonner";
import { env } from "@/config/env";

type RequestOptions = {
  method?: string;
  body?: any;
  params?: Record<string, string | number | boolean | undefined | null>;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};

function buildUrlWithParams(
  url: string,
  params?: RequestOptions["params"]
): string {
  if (!params) return url;
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null
    )
  );
  if (Object.keys(filteredParams).length === 0) return url;
  const queryString = new URLSearchParams(
    filteredParams as Record<string, string>
  ).toString();
  return `${url}?${queryString}`;
}

async function fetchApi<T>(
  url: string,
  options: RequestOptions = {}
): Promise<T | undefined> {
  const { method = "GET", body, params, cache = "no-store", next } = options;

  const fullUrl = buildUrlWithParams(`${env.API_URL}${url}`, params);

  const response = await fetch(fullUrl, {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
    credentials: "include",
    cache,
    next,
  });

  if (!response.ok) {
    const message = (await response.json()) || response.statusText;
    console.error(message);
    return undefined;
  }

  return response.json();
}

export const api = {
  get<T>(url: string, options?: RequestOptions): Promise<T | undefined> {
    return fetchApi<T>(url, { ...options, method: "GET" });
  },
  post<T>(
    url: string,
    body?: any,
    options?: RequestOptions
  ): Promise<T | undefined> {
    return fetchApi<T>(url, { ...options, method: "POST", body });
  },
  put<T>(
    url: string,
    body?: any,
    options?: RequestOptions
  ): Promise<T | undefined> {
    return fetchApi<T>(url, { ...options, method: "PUT", body });
  },
  patch<T>(
    url: string,
    body?: any,
    options?: RequestOptions
  ): Promise<T | undefined> {
    return fetchApi<T>(url, { ...options, method: "PATCH", body });
  },
  delete<T>(url: string, options?: RequestOptions): Promise<T | undefined> {
    return fetchApi<T>(url, { ...options, method: "DELETE" });
  },
};
