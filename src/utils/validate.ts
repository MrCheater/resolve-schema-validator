import { EOL } from "os";
import * as t from "io-ts";
import { PathReporter } from "io-ts/lib/PathReporter";
import { isRight } from "fp-ts/lib/Either";

function validate(schema: t.Type<any>, params: any, errorName?: string) {
  const validationResult = schema.decode(params);
  if (!isRight(validationResult)) {
    const messages = PathReporter.report(validationResult);
    const error = new Error(messages.join(EOL));
    error.stack = "";
    if (errorName != null) {
      error.name = errorName;
    }
    throw error;
  }
}

export default validate;
