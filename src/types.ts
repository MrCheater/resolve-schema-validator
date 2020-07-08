import * as t from "io-ts";

export enum Method {
  GET_ITEM = "getItem",
  SET_ITEM = "setItem",
}

export const GetItemArgsSchema = t.type({
  key: t.string,
});
export type GetItemArgsType = t.TypeOf<typeof GetItemArgsSchema>;

export const GetItemResultSchema = t.type({
  value: t.number,
});
export type GetItemResultType = t.TypeOf<typeof GetItemResultSchema>;

export const SetItemArgsSchema = t.type({
  key: t.string,
  value: t.number,
});
export type SetItemArgsType = t.TypeOf<typeof SetItemArgsSchema>;

export const SetItemResultSchema = t.type({
  ok: t.boolean,
});
export type SetItemResultType = t.TypeOf<typeof SetItemResultSchema>;

export type LambdaEvent =
  | {
      method: Method.GET_ITEM;
      args: GetItemArgsType;
    }
  | {
      method: Method.SET_ITEM;
      args: SetItemArgsType;
    };
