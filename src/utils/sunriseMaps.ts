// default program icons
import { noneStatus } from '@components/SunriseLevelInfo/img/noneStatus';
import { beginner } from '@components/SunriseLevelInfo/img/beginner';
import { smart } from '@components/SunriseLevelInfo/img/smart';
import { confident } from '@components/SunriseLevelInfo/img/confident';
import { experienced } from '@components/SunriseLevelInfo/img/experienced';
import { advanced } from '@components/SunriseLevelInfo/img/advanced';

// sunrise program icons
import { noneStatusSunrise } from '@components/SunriseLevelInfo/img/noneStatusSunrise';
import { spark } from '@components/SunriseLevelInfo/img/spark';
import { ray } from '@components/SunriseLevelInfo/img/ray';
import { light } from '@components/SunriseLevelInfo/img/light';
import { sun } from '@components/SunriseLevelInfo/img/sun';
import { shine } from '@components/SunriseLevelInfo/img/shine';

// ambassador program icons
import { ambassador } from '@components/SunriseLevelInfo/img/ambassador';
import { regAmbassador } from '@components/SunriseLevelInfo/img/regAmbassador';
import { intAmbassador } from '@components/SunriseLevelInfo/img/intAmbassador';
import { topAmbassador } from '@components/SunriseLevelInfo/img/topAmbassador';
import { boardMember } from '@components/SunriseLevelInfo/img/boardMember';

// token sale radio buttons map:
export const sunriseItems = [
  { value: 'all', label: 'Sunrise Program' },
  { value: 'zero', label: 'Zero' },
  { value: 'bronze', label: 'Spark' },
  { value: 'silver', label: 'Ray' },
  { value: 'gold', label: 'Light' },
  { value: 'platinum', label: 'Shine' },
  { value: 'brilliant', label: 'Sun' },
];

export const ambassadorItems = [
  { value: 'all', label: 'Ambassador Program' },
  { value: 100, label: 'Ambassador (A)' },
  { value: 200, label: 'Regional Ambassador (R.A.)' },
  { value: 300, label: 'International Ambassador (I.A.)' },
  { value: 400, label: 'TOP Ambassador (T.A.)' },
  { value: 500, label: 'Board Ambassador (B.M.)' },
];

// since backend send old statuses (e.g. 'brilliant') -> convert them into new ones
export const sunriseNewStatusMap = {
  zero: 'zero',
  bronze: 'spark',
  silver: 'ray',
  gold: 'light',
  platinum: 'shine',
  brilliant: 'sun',
};

export const ambassadorStatusMap = {
  0: 'Ambassador',
  100: 'Ambassador',
  200: 'Regional Ambassador',
  300: 'International Ambassador',
  400: 'Top Ambassador',
  500: 'Board Member',
};

// map to avoid passing props because of useTranslation bug (explanation below)
export const sunriseProgramsMap: Record<
  SunriseProgramNames,
  SunriseProgramInfo[]
> = {
  default: [
    { level: 0, name: 'zero', icon: noneStatus },
    { level: 10, name: 'spark', icon: beginner },
    { level: 20, name: 'ray', icon: smart },
    { level: 30, name: 'light', icon: confident },
    { level: 40, name: 'shine', icon: experienced },
    { level: 50, name: 'sun', icon: advanced },
  ],

  sunrise: [
    { level: 0, name: 'zero', icon: noneStatusSunrise },
    { level: 10, name: 'spark', icon: spark },
    { level: 20, name: 'ray', icon: ray },
    { level: 30, name: 'light', icon: light },
    { level: 40, name: 'shine', icon: shine },
    { level: 50, name: 'sun', icon: sun },
  ],

  ambassador: [
    { level: 0, name: 'Ambassador', icon: ambassador },
    { level: 100, name: 'Ambassador', icon: ambassador },
    { level: 200, name: 'Regional Ambassador', icon: regAmbassador },
    { level: 300, name: 'International Ambassador', icon: intAmbassador },
    { level: 400, name: 'TOP Ambassador', icon: topAmbassador },
    { level: 500, name: 'Board Member', icon: boardMember },
  ],
};

// useTranslation bug solved: useTranslation doesn't translate to russian if we apply to 18next from function-component to the ordinary non-function object (map)

export const sunriseProgramsFullMap = (
  t: (a: string) => any
): SunriseProgramsFullMap => ({
  default: [
    // "default" means "loyalty program" or user has no program at all
    {
      level: 10,
      icon: beginner,
      privileges: t('SunriseProgramsFullMap:none'),
      privelegesHidden: t('SunriseProgramsFullMap:none'),
      gifts: t('SunriseProgramsFullMap:none'),
      giftsHidden: t('SunriseProgramsFullMap:none'),
      name: 'Spark',
      deposit: '100 USDT+',
    },
    {
      level: 20,
      icon: smart,
      privileges: t('SunriseProgramsFullMap:privelegeAccess'),
      privelegesHidden: t('SunriseProgramsFullMap:privelegeAccess'),
      gifts: t('SunriseProgramsFullMap:none'),
      giftsHidden: t('SunriseProgramsFullMap:none'),
      name: 'Ray',
      deposit: '1 000 USDT+',
    },
    {
      level: 30,
      icon: confident,
      privileges: t('SunriseProgramsFullMap:loyaltyLight'),
      privelegesHidden: t('SunriseProgramsFullMap:privelegeAccess'),
      gifts: t('SunriseProgramsFullMap:none'),
      giftsHidden: t('SunriseProgramsFullMap:hiddenGifts1'),
      name: 'Light',
      deposit: '10 000 USDT+',
    },
    {
      level: 40,
      icon: experienced,
      privileges: t('SunriseProgramsFullMap:loyaltyShine'),
      privelegesHidden: t('SunriseProgramsFullMap:privelegeAccess'),
      gifts: t('SunriseProgramsFullMap:giftDefaultLight'),
      giftsHidden: t('SunriseProgramsFullMap:hiddenGifts2'),
      name: 'Shine',
      deposit: '100 000 USDT+',
    },
    {
      level: 50,
      icon: advanced,
      privileges: t('SunriseProgramsFullMap:loyaltySun'),
      privelegesHidden: t('SunriseProgramsFullMap:privelegeAccess'),
      gifts: t('SunriseProgramsFullMap:giftDefaultSun'),
      giftsHidden: t('SunriseProgramsFullMap:hiddenGifts3'),
      name: 'Sun',
      deposit: '500 000 USDT+',
    },
  ],
  sunrise: [
    {
      level: 10,
      icon: spark,
      privileges: t('SunriseProgramsFullMap:none'),
      privelegesHidden: t('SunriseProgramsFullMap:none'),
      gifts: t('SunriseProgramsFullMap:none'),
      giftsHidden: t('SunriseProgramsFullMap:none'),
      name: 'Spark',
      deposit: '100 USDT+',
      conditions: t('SunriseProgramsFullMap:none'),
      income: t('SunriseProgramsFullMap:incomeLineSpark'),
    },
    {
      level: 20,
      icon: ray,
      privileges: t('SunriseProgramsFullMap:privelegeAccess'),
      privelegesHidden: t('SunriseProgramsFullMap:privelegeAccess'),
      gifts: t('SunriseProgramsFullMap:giftSunriseRay'),
      giftsHidden: t('SunriseProgramsFullMap:giftSunriseRay'),
      name: 'Ray',
      deposit: '250 USDT+',
      conditions: t('SunriseProgramsFullMap:conditionRay'),
      income: t('SunriseProgramsFullMap:incomeLineRay'),
    },
    {
      level: 30,
      icon: light,
      privileges: t('SunriseProgramsFullMap:privelegeAccess'),
      privelegesHidden: t('SunriseProgramsFullMap:privelegeAccess'),
      gifts: t('SunriseProgramsFullMap:giftSunriseLight'),
      giftsHidden: t('SunriseProgramsFullMap:giftSunriseLight'),
      name: 'Light',
      deposit: '2 500 USDT+',
      conditions: t('SunriseProgramsFullMap:conditionLight'),
      income: t('SunriseProgramsFullMap:incomeLineLight'),
    },
    {
      level: 40,
      icon: shine,
      privileges: t('SunriseProgramsFullMap:privelegeAccess'),
      privelegesHidden: t('SunriseProgramsFullMap:privelegeAccess'),
      gifts: t('SunriseProgramsFullMap:giftSunriseShine'),
      giftsHidden: t('SunriseProgramsFullMap:giftSunriseShine'),
      name: 'Shine',
      deposit: '10 000 USDT+',
      conditions: t('SunriseProgramsFullMap:conditionShine'),
      income: t('SunriseProgramsFullMap:incomeLineShine'),
    },
    {
      level: 50,
      icon: sun,
      privileges: t('SunriseProgramsFullMap:privelegeAccess'),
      privelegesHidden: t('SunriseProgramsFullMap:privelegeAccess'),
      gifts: t('SunriseProgramsFullMap:giftSunriseSun'),
      giftsHidden: t('SunriseProgramsFullMap:giftSunriseSun'),
      name: 'Sun',
      deposit: '50 000 USDT+',
      conditions: t('SunriseProgramsFullMap:conditionSun'),
      income: t('SunriseProgramsFullMap:incomeLineSun'),
    },
  ],
  ambassador: [
    {
      level: 100,
      icon: ambassador,
      privileges: t('SunriseProgramsFullMap:privelegeAmbassador'),
      privelegesHidden: t('SunriseProgramsFullMap:privelegeCoursesSimple'),
      gifts: t('SunriseProgramsFullMap:giftDefaultSun'),
      giftsHidden: t('SunriseProgramsFullMap:hiddenGifts3'),
      name: 'Ambassador (A.)',
      conditions: t('SunriseProgramsFullMap:none'),
      minLevel: 'Shine',
      monthlyReward: t('SunriseProgramsFullMap:none'),
    },
    {
      level: 200,
      icon: regAmbassador,
      privileges: t('SunriseProgramsFullMap:privelegeRegAmbassador'),
      privelegesHidden: t('SunriseProgramsFullMap:privelegeCoursesExtended'),
      gifts: t('SunriseProgramsFullMap:giftDefaultSun'),
      giftsHidden: t('SunriseProgramsFullMap:hiddenGifts3'),
      name: 'Regional Ambassador (R.A.)',
      conditions: t('SunriseProgramsFullMap:conditionsRegAmbassador'),
      minLevel: 'Shine',
      monthlyReward: t('SunriseProgramsFullMap:regAmbassadorReward'),
    },
    {
      level: 300,
      icon: intAmbassador,
      privileges: t('SunriseProgramsFullMap:privelegeIntAmbassador'),
      privelegesHidden: t('SunriseProgramsFullMap:privelegeCoursesExtended'),
      gifts: t('SunriseProgramsFullMap:giftDefaultSun'),
      giftsHidden: t('SunriseProgramsFullMap:hiddenGifts3'),
      name: 'International Ambassador (I.A.)',
      conditions: t('SunriseProgramsFullMap:conditionsIntAmbassador'),
      minLevel: 'Sun',
      monthlyReward: t('SunriseProgramsFullMap:intAmbassadorReward'),
    },
    {
      level: 400,
      icon: topAmbassador,
      privileges: t('SunriseProgramsFullMap:privelegeTopAmbassador'),
      privelegesHidden: t('SunriseProgramsFullMap:privelegeCoursesExtended'),
      gifts: t('SunriseProgramsFullMap:giftDefaultSun'),
      giftsHidden: t('SunriseProgramsFullMap:hiddenGifts3'),
      name: 'TOP Ambassador (T.A.)',
      conditions: t('SunriseProgramsFullMap:conditionsTopAmbassador'),
      minLevel: 'Sun',
      monthlyReward: t('SunriseProgramsFullMap:topAmbassadorReward'),
    },
    {
      level: 500,
      icon: boardMember,
      privileges: t('SunriseProgramsFullMap:privelegeBoardMember'),
      privelegesHidden: t('SunriseProgramsFullMap:privelegeCoursesExtended'),
      gifts: t('SunriseProgramsFullMap:giftDefaultSun'),
      giftsHidden: t('SunriseProgramsFullMap:hiddenGifts3'),
      name: 'Board Member (B.M.)',
      conditions: t('SunriseProgramsFullMap:conditionsBoardMember'),
      minLevel: 'Sun',
      monthlyReward: t('SunriseProgramsFullMap:boardMemberReward'),
    },
  ],
});

/** types */

export type BaseProgramInfo = {
  level: number;
  icon: string;
  privileges: string;
  gifts: string;
  name: string;
  deposit?: string;
  conditions?: string;
  //for ambassadors only
  minLevel?: string;
  monthlyReward?: string;
  //for sunrise only
  income?: string;
  //hidden priveleges & gifts (shown only if user already has membership)
  privelegesHidden: string;
  giftsHidden: string;
};

export type SunriseProgramsFullMap = {
  sunrise: BaseProgramInfo[];
  default: BaseProgramInfo[];
  ambassador: BaseProgramInfo[];
};

export interface SunriseProgramInfo {
  level: number;
  name: string;
  icon: string;
}

export type SunriseProgramNames = 'default' | 'sunrise' | 'ambassador';
