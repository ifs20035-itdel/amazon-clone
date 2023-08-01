export const config = () => ({
  port: Number(process.env.PORT),
  secret: process.env.HASH_KEY,
});
