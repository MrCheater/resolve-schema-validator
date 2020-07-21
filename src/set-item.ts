import { SetItemArgsType } from "./types";

async function setItem(
  args: SetItemArgsType
): Promise<{
  ok: boolean;
  key: string;
  value: number;
}> {
  return { ok: true, key: args.key, value: args.value };
}

export default setItem;
