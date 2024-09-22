const prisma = require("../db");
const { passwordHash } = require("./utils");

(async () => {
  const username = "admin";
  const password = "admin12345";
  const fullname = "admin";
  const email = "admin@admin.com";
  const phone = "081111111111";

  const hashPassword = await passwordHash(password);

  try {
    const user = await prisma.user.create({
      data: {
        username: username,
        password: hashPassword,
        fullname: fullname,
        phone: phone,
        email: email,
        role: "ADMIN",
      },
    });
  } catch (err) {
    console.log(err);
  }
})();
