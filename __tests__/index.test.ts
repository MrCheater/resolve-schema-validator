import { Method } from "../src/types";
import handler from "../src/handler";

test("getItem should work correctly", async () => {
  const result = await handler({
    method: Method.GET_ITEM,
    args: {
      key: "key",
    },
  });

  expect(result).toEqual({ key: "key", value: 42 });
});

test("getItem should throw error", async () => {
  await expect(
    handler({
      method: Method.GET_ITEM,
      args: {
        yek: "yek",
      } as any,
    })
  ).rejects.toThrow();
});

test("setItem should work correctly", async () => {
  const result = await handler({
    method: Method.SET_ITEM,
    args: {
      key: "key",
      value: 42,
    },
  });

  expect(result).toEqual({ ok: true, key: "key", value: 42 });
});

test("setItem should throw error", async () => {
  await expect(
    handler({
      method: Method.SET_ITEM,
      args: {
        key: "key",
        value: null as any,
      },
    })
  ).rejects.toThrow();
});
