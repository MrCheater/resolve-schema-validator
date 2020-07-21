import { GetItemArgsType } from "./types";

async function getItem(
  args: GetItemArgsType
): Promise<{
  key: string;
  value: number;
}> {
  return { value: 42, key: args.key };
}

export default getItem;
