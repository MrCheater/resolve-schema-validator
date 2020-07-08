import { LambdaEvent, Method } from "./types";

import getItem from "./get-item";
import setItem from "./set-item";

function handler(event: LambdaEvent): Promise<any> {
  switch (event.method) {
    case Method.GET_ITEM: {
      return getItem(event.args);
    }
    case Method.SET_ITEM: {
      return setItem(event.args);
    }
    default: {
      throw new Error("Unknown method");
    }
  }
}

export default handler;
