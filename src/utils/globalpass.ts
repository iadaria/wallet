import { NativeModules, Platform } from 'react-native';

const RnGlobalpass =
  Platform.OS === 'ios' ? NativeModules.Globalpass : NativeModules.RnGlobalpass;

export async function buildKYCProd(screeningToken: string) {
  return RnGlobalpass.buildKYCProd(screeningToken);
}

export async function buildKYCDev(screeningToken: string) {
  return RnGlobalpass.buildKYCDev(screeningToken);
}

export async function buildIBProd(screeningToken: string) {
  return RnGlobalpass.buildIBProd(screeningToken);
}

export async function buildIBDev(screeningToken: string) {
  return RnGlobalpass.buildIBDev(screeningToken);
}
