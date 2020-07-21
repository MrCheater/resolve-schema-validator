import * as t from "io-ts";

export enum Method {
  GET_ITEM = "getItem",
  SET_ITEM = "setItem",
}

export const EventSchema = t.type({
  method: t.string,
  args: t.unknown,
});

export const GetItemArgsSchema = t.type({
  key: t.string,
});
export type GetItemArgsType = t.TypeOf<typeof GetItemArgsSchema>;

export const SetItemArgsSchema = t.type({
  key: t.string,
  value: t.number,
});
export type SetItemArgsType = t.TypeOf<typeof SetItemArgsSchema>;
