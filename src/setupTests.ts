import './store/app/init';
//import './store/api/init';
//import './store/auth/init';
//import './store/loginPIN/init';
import './store/settings/init';
//import './store/wallets/init';
//import './store/sollars/init';
import './store/stables/init';
import './store/stablesCreate/init';
//import './features/wallet/store/init';

// It's working
// jest.mock('sha256', () => (payload: string) => payload);

// It's woking
/* jest.mock('sha256', () => (payload: string) => {
  const sha256 = jest.requireActual('sha256');
  return sha256(payload);
}); */
