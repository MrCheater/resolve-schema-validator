import {
  GetItemArgsSchema,
  GetItemArgsType,
  GetItemResultSchema,
  GetItemResultType,
} from "./types";
import guardian from "./utils/guardian";

async function getItem(args: GetItemArgsType): Promise<GetItemResultType> {
  return { value: 42 };
}

export default guardian(GetItemArgsSchema, GetItemResultSchema, getItem);
