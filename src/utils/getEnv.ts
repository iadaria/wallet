import {IS_PRODUCTION, RECAPTCHA_KEY, RECAPTCHA_KEY_TEST} from 'src/config';

export const IsDev = IS_PRODUCTION === 'false';
export const IsProd = IS_PRODUCTION === 'true';

export function getRecaptchaSiteKeyByMode() {
  const site_key = IsProd ? RECAPTCHA_KEY : RECAPTCHA_KEY_TEST;
  //logline('recaptcha key', { site_key, IS_PRODUCTION, IsProd, IsDev });
  return site_key;
}
