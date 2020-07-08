import * as t from "io-ts";

import validate from "./validate";

function guardian<Args extends object, Result extends any>(
  argsSchema: t.Type<any>,
  resultSchema: t.Type<any>,
  method: (args: Args) => Promise<Result>
) {
  return async (args: Args): Promise<Result> => {
    validate(argsSchema, args, `TypeError. Method "${method.name}" [args]`);

    const result = await method(args);

    validate(
      resultSchema,
      result,
      `TypeError. Method "${method.name}" [result]`
    );

    return result;
  };
}

export default guardian;
