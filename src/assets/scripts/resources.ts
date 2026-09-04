import raw_entries from "../data/resources.yaml";

import type { Entry } from "../types/entry.ts";

function is_entry(value: unknown): value is Entry {
  if (!value || typeof value !== "object") {
    return false;
  }

  const entry = value as Record<string, unknown>;

  return (
    (entry.title == undefined || typeof entry.title === "string") &&
    (entry.url == undefined || typeof entry.url === "string") &&
    (entry.address == undefined || typeof entry.address === "string") &&
    (entry.categories == undefined || Array.isArray(entry.categories)) &&
    (entry.regions == undefined || Array.isArray(entry.regions))
  );
}

function validate_yaml(raw_entries: unknown) {
  if (!Array.isArray(raw_entries) || !raw_entries.every(is_entry)) {
    throw new Error("Invalid entries.yaml format");
  }
}

export default function get_entries(): Entry[] {
  validate_yaml(raw_entries);

  const entries = raw_entries as Entry[];

  return entries.map((entry: Entry) => ({
    title: entry.title ?? "",
    categories: entry.categories ?? [],
    regions: entry.regions ?? [],
    url: entry.url ?? "",
    address: entry.address ?? "",
    description: entry.description ?? "",
  }));
}
