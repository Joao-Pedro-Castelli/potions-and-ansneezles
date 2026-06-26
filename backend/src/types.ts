import zod from "zod";

export const potionValid = zod.object({
  name: zod.string().max(50).min(2),
  desc: zod.string().max(255),
  price: zod.coerce.number().nonnegative(),
  imgPath: zod.string().optional(),
});

export type Potion = zod.infer<typeof potionValid>;
