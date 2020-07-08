import {
  SetItemArgsSchema,
  SetItemArgsType,
  SetItemResultSchema,
  SetItemResultType,
} from "./types";
import guardian from "./utils/guardian";

async function setItem(args: SetItemArgsType): Promise<SetItemResultType> {
  return { ok: true };
}

export default guardian(SetItemArgsSchema, SetItemResultSchema, setItem);
