import { parse } from "@std/yaml";

if (import.meta.main) {
  const text: string = await Deno.readTextFile("info.yaml");
  const data = parse(text);
  const jsonString = JSON.stringify(data, null, 2);

  Deno.writeTextFileSync("info.json", jsonString);
}
