"use server";

import { cookies } from "next/headers";
import { nanoid } from "nanoid";

export const setUid = () => {
  const uid = nanoid();
  cookies().set({
    name: "_uid",
    value: uid,
    httpOnly: true,
  });
  return uid;
};
