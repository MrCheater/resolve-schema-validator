import {
  Method,
  SetItemArgsSchema,
  GetItemArgsSchema,
  EventSchema,
} from "./types";
import validate from "./utils/validate";

import getItem from "./get-item";
import setItem from "./set-item";

/*

Basic rules:
1. Lambda Event has the 'unknown' type
2. No unions - validate specific type (primitive or object in specific switch branch).
   It helps to prevent weird error messages.
3. Validation function gets unknown value and returns value with casting type (or throws error)
4. All validations have to be done as high as possible in code (basically in handler)

*/
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
