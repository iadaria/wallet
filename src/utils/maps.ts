/* eslint-disable camelcase */
import i18n from './i18n';
import {
  CryptoAccountType,
  Fund,
  SavingFund,
  SolFund,
  WalletFund,
} from '@store/wallets/types';
import { iconColors } from '@constants/colors';
import { TFunction } from 'i18next';

export type Currency = 'btc' | 'eth' | 'usdt' | 'sol';
export type Ticker = 'BTC' | 'ETH' | 'USDT' | 'SOL' | 'AWT';

const fundToType: Record<WalletFund | SavingFund, CryptoAccountType> = {
  btc: 'bitcoin',
  eth: 'ethereum',
  usdt: 'usdt',
  eth_wallet: 'ethereum',
  btc_wallet: 'bitcoin',
  usdt_wallet: 'usdt',
};

export const fundToCurrency: Record<
  WalletFund | SavingFund | SolFund,
  Currency
> = {
  btc: 'btc',
  eth: 'eth',
  usdt: 'usdt',
  eth_wallet: 'eth',
  btc_wallet: 'btc',
  usdt_wallet: 'usdt',
  sol: 'sol',
};

export const fundToTicker: Record<
  WalletFund | SavingFund | SolFund | Fund,
  Ticker
> = {
  btc: 'BTC',
  eth: 'ETH',
  usdt: 'USDT',
  sol: 'SOL',
  eth_wallet: 'ETH',
  btc_wallet: 'BTC',
  usdt_wallet: 'USDT',
  awt_wallet: 'AWT',
};

const fundToColor: Record<WalletFund | SavingFund, string> = {
  btc: iconColors.btc,
  eth: iconColors.eth,
  usdt: iconColors.usdt,
  btc_wallet: iconColors.btc,
  eth_wallet: iconColors.eth,
  usdt_wallet: iconColors.usdt,
};

const fundToIcon: Record<
  WalletFund | SavingFund,
  'custom-bitcoin' | 'custom-ethereum' | 'custom-tether'
> = {
  btc: 'custom-bitcoin',
  eth: 'custom-ethereum',
  usdt: 'custom-tether',
  eth_wallet: 'custom-ethereum',
  btc_wallet: 'custom-bitcoin',
  usdt_wallet: 'custom-tether',
};

const txTypeToString: Record<string, string> = {
  input: i18n.t('txTypeToString:input'),
  income: i18n.t('txTypeToString:income'),
  commision_1: i18n.t('txTypeToString:commision1'),
  commision_2: i18n.t('txTypeToString:commision2'),
  commision_3: i18n.t('txTypeToString:commision3'),
  transfer_from: i18n.t('txTypeToString:transferFrom'),
  transfer_input: i18n.t('txTypeToString:transferInput'),
  transfer: i18n.t('txTypeToString:transfer'),
  bonus: i18n.t('txTypeToString:bonus'),
  stable_base: i18n.t('txTypeToString:stableBase'),
  stable_create: i18n.t('txTypeToString:stableCreate'),
  stable_refund: i18n.t('txTypeToString:stableRefund'),
  stable_income: i18n.t('txTypeToString:stableIncome'),
  stable_decrease: i18n.t('txTypeToString:stableDecrease'),
  withdraw: i18n.t('txTypeToString:withdraw'),
};

export default {
  fundToType,
  fundToCurrency,
  fundToTicker,
  fundToColor,
  fundToIcon,
  txTypeToString,
};

export const documentationLinksMap = (t: TFunction) => [
  {
    name: i18n.t('SettingsMenu:publicAgreement'),
    link:
      'https://drive.google.com/file/d/1Ut7YpTZGvKiMF7gyoqdViLzEne8gzknr/view',
  },
  {
    name: i18n.t('SettingsMenu:privacyPolicy'),
    link:
      'https://drive.google.com/file/d/1bsoKK6ta8JhADcb5zC7ZIHpSUzQckkJK/view',
  },
  {
    name: i18n.t('SettingsMenu:cookiePolicy'),
    link:
      'https://drive.google.com/file/d/1qpbn2aFjkk6aClawzVsH5hWcNs1Y-M-0/view',
  },
  {
    name: i18n.t('SettingsMenu:companyBenefits'),
    link:
      'https://drive.google.com/file/d/1dkm-CdUwCcwnI-UN0zh5hWjZxkqgNBdK/view',
  },
  {
    name: i18n.t('SettingsMenu:regulations'),
    link:
      'https://drive.google.com/file/d/1Eun2syS_buJLf7CAFPkHFdZAj16a1aaf/view',
  },
  {
    name: i18n.t('SettingsMenu:kycAmlPolicy'),
    link:
      'https://drive.google.com/file/d/12KamV9CnEDXyLciRCHn5rtI0ZDo-ovFj/view',
  },
  {
    name: i18n.t('SettingsMenu:stablePolicy'),
    link:
      'https://drive.google.com/file/d/1ZlY12FnbUz8wAMLrX5sVnc6izng-pRhy/view',
  },
  {
    name: i18n.t('SettingsMenu:riskProcedure'),
    link:
      'https://drive.google.com/file/d/1GW0NzU4B-c_9Wh8evze3dZ9iqSNZT0Zh/view',
  },
  {
    name: i18n.t('SettingsMenu:verification'),
    link:
      'https://drive.google.com/file/d/1nFvPtatPLKeWtCxz0E8tNYQpQdxxKl1u/view',
  },
  {
    name: i18n.t('SettingsMenu:riskNotification'),
    link:
      'https://drive.google.com/file/d/1xxVVK69iYzmN2oLkqzAd7kjOFGG5SsNo/view',
  },
  {
    name: i18n.t('SettingsMenu:personalDataConsent'),
    link:
      'https://drive.google.com/file/d/1qz3KNbA35x1RdXFVSiDLhsNSU2NgCeKo/view',
  },
];
