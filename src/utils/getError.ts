import { Fail } from '@store/api/types';

export function getErrorName(data: Fail): string | undefined {

  const simpleName = typeof data === 'string' ? String(data) : data.message;

  let errorName;
  if (typeof data?.error === 'string') {
    errorName = data.error;
  }
  if (typeof data?.error === 'object') {
    errorName = data.error?.root?.message || data.error?.message;
  }

  return simpleName || errorName;
}
// For exapmle

/** 07.09.21
 *
 * data {
    "code": "error",
    "error": {
        "status": 500,
        "root": {
            "message": "p2p_user_not_verified",
            "stack": "Error: p2p_user_not_verified\n    at exports.getP2PTranferToAccount (/srv/fund/server/services/transferWithdrawService.js:1520:11)\n    at <anonymous>"
        },
        "message": "internal_error"
    }
}
 */

/* const errorName =
  data?.error?.message || data?.message || data?.error?.root?.message; // || 'default_error'; */

/*
const { message: errorName, error: errorName2 } = data;
const title = i18n.t(`${domainErrors}:${errorName || errorName2}`);
const message = i18n.t(
  `${domainErrors}:${errorName || errorName2}_message`
); */

// Backend
/**
 * ctx.status = 503
   ctx.body = { 
    code: 'error', 
    message: error.message 
   }
  
 * const response = {
    code: CODE_ERROR,
    error: {
      ...error,
      message: error.message,
    },
  };

  * error.root = {
      message: e.message,
      stack: e.stack,
  };

  * ctx.body = { status: 'failed', error: 'not_found' }
 
  * ctx.status = 503
    ctx.body = { code: 'error', error: e }
*/

/*** Samples *****
 * 
 * error.response = { data: 'invalid_sign', status: 401 }
 * error.response = { data: {
        "code": "error",
        "message": "Can't get kyc token for the verified account"
    },} 
*  error.response = { data: { 
    "code": "error",
    "message": "Validation error",
    "fields": [
    {
        "message": "\"quantity\" must be larger than or equal to 0",
        "field": "quantity"
    }
] */
