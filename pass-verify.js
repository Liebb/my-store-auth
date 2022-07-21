const bcrypt = require('bcrypt');

async function verifyPassword(){
  const myPass = 'admin 123 .202';
  const hash = '$2b$10$8tOEH0f0z4MYzYwfsVLDUOl5ankkM38XmPhkmMIhj/4xeOe8vdtJW';
  const isMatch = await bcrypt.compare(myPass, hash);
  console.log(isMatch);
}

verifyPassword();
