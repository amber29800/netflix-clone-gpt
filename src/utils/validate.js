const validateFormData = (email, password) => {

  const isEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  const isPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  if (!isEmail) {
    return "Email is invalid.";
  }
  if (!isPassword) {
    return "Password is invalid";
  }

  return null;
};
export default validateFormData;
