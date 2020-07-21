import {
  Method,
  SetItemArgsSchema,
  GetItemArgsSchema,
  EventSchema,
} from "./types";
import validate from "./utils/validate";

import getItem from "./get-item";
import setItem from "./set-item";

async function handler(lambdaEvent: unknown): Promise<any> {
  const event = validate(EventSchema, lambdaEvent);
  switch (event.method) {
    case Method.GET_ITEM: {
      const args = validate(GetItemArgsSchema, event.args);
      return getItem(args);
    }
    case Method.SET_ITEM: {
      const args = validate(SetItemArgsSchema, event.args);
      return setItem(args);
    }
    default: {
      throw new Error("Unknown method");
    }
  }
}

export default handler;
