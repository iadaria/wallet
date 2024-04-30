import { PasswordPolicy, charsets } from 'password-sheriff';

const specialCharactersAllowed = {
  explain: () => ({
    message: 'only these special characters (e.g. !@#$%^&*)',
    code: 'specialCharactersAllowed',
  }),
  test: (password: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d,!@#$%^&*]{8,}$/.test(password),
};

export const passwordPolicy = new PasswordPolicy({
  length: { minLength: 8 },
  contains: {
    expressions: [
      charsets.lowerCase,
      charsets.upperCase,
      charsets.numbers,
      specialCharactersAllowed,
    ],
  },
  identicalChars: {
    max: 3,
  },
});
