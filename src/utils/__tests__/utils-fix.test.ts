import { logline } from '@utils/debug';
import { bn } from '@utils/numbers/bn';
import { fix } from '@utils/numbers/fix';

describe('utils/fix points', () => {
  it('sollar 0.12 => 0', () => {
    const fixed = fix('0.12', { currency: 'sol' });
    expect(fixed).toBe('0');
  });

  it('btc 0.1234567(81) => 0.1234567(8) ', () => {
    const fixed = fix('0.123456781', { currency: 'btc' });
    expect(fixed).toBe('0.12345678');
  });

  it('eth 0.12345678901234567(81) => 0.12345678901234567(8)', () => {
    const fixed = fix('0.1234567890123456781', { currency: 'eth' });
    expect(fixed).toBe('0.123456789012345678');
  });
  it('usdt 0.123 => 0.12', () => {
    const fixed = fix('0.123', { currency: 'usdt' });
    expect(fixed).toBe('0.12');
  });
});

describe('utils/fix points with around', () => {
  it('sollar 0.199 => 0.20', () => {
    const fixed = fix('0.20', { currency: 'sol' });
    expect(fixed).toBe('0');
  });

  it('btc 0.1234567(89) => 0.1234567(9) ', () => {
    const fixed = fix('0.123456789', { currency: 'btc' });
    expect(fixed).toBe('0.12345679');
  });

  it('eth 0.12345678901234567(89) => 0.12345678901234567(9)', () => {
    const fixed = fix('0.1234567890123456789', { currency: 'eth' });
    expect(fixed).toBe('0.123456789012345679');
  });

  it('usdt 0.129 => 0.13', () => {
    const fixed = fix('0.129', { currency: 'usdt' });
    expect(fixed).toBe('0.13');
  });
});

describe('utils/fix 0 => 0', () => {
  it('sollar 1.00 => 1', () => {
    const fixed = fix('1.00', { currency: 'sol' });
    expect(fixed).toBe('1');
  });

  it('btc 0 => 0', () => {
    const fixed = fix('0', { currency: 'btc' });
    expect(fixed).toBe('0');
  });

  it('eth 0 => 0', () => {
    const fixed = fix('0', { currency: 'eth' });
    expect(fixed).toBe('0');
  });

  it('usdt 0 => 0', () => {
    const fixed = fix('0', { currency: 'usdt' });
    expect(fixed).toBe('0');
  });
});

describe('utils/fix 50.1 => 50', () => {
  it('sollar 50.1 => 50', () => {
    const fixed = fix('50.1', { currency: 'sol' });
    expect(fixed).toBe('50');
  });

  it('btc 50.1 => 50.1', () => {
    const fixed = fix('50.1', { currency: 'btc' });
    expect(fixed).toBe('50.1');
  });

  it('eth 50.1 => 50.1', () => {
    const fixed = fix('50.1', { currency: 'eth' });
    expect(fixed).toBe('50.1');
  });

  it('usdt 50.1 => 50.1', () => {
    const fixed = fix('50.1', { currency: 'usdt' });
    expect(fixed).toBe('50.1');
  });
});

describe('utils/fix 50.11 => 50.11', () => {
  it('sollar 50.11 => 50.11', () => {
    const fixed = fix('50.11', { currency: 'sol' });
    expect(fixed).toBe('50');
  });

  it('btc 50.11 => 50.11', () => {
    const fixed = fix('50.11', { currency: 'btc' });
    expect(fixed).toBe('50.11');
  });

  it('eth 50.11 => 50.11', () => {
    const fixed = fix('50.11', { currency: 'eth' });
    expect(fixed).toBe('50.11');
  });

  it('usdt 50.11 => 50.11', () => {
    const fixed = fix('50.11', { currency: 'usdt' });
    expect(fixed).toBe('50.11');
  });
});

describe('utils/fix 50 => 50', () => {
  it('sollar 50 => 50', () => {
    const fixed = fix('50', { currency: 'sol' });
    expect(fixed).toBe('50');
  });

  it('btc 50 => 50', () => {
    const fixed = fix('50', { currency: 'btc' });
    expect(fixed).toBe('50');
  });

  it('eth 50 => 50', () => {
    const fixed = fix('50', { currency: 'eth' });
    expect(fixed).toBe('50');
  });

  it('usdt 50 => 50', () => {
    const fixed = fix('50', { currency: 'usdt' });
    expect(fixed).toBe('50');
  });
});

describe('utils/fix 55 => 55', () => {
  it('sollar 55 => 55', () => {
    const fixed = fix('55', { currency: 'sol' });
    expect(fixed).toBe('55');
  });

  it('btc 55 => 55', () => {
    const fixed = fix('55', { currency: 'btc' });
    expect(fixed).toBe('55');
  });

  it('eth 55 => 55', () => {
    const fixed = fix('55', { currency: 'eth' });
    expect(fixed).toBe('55');
  });

  it('usdt 55 => 55', () => {
    const fixed = fix('55', { currency: 'usdt' });
    expect(fixed).toBe('55');
  });
});

describe('utils/fix 0.0000155 => 0.0000155', () => {
  it('sollar 0.0000155 => 0', () => {
    const fixed = fix('0.0000155', { currency: 'sol' });
    expect(fixed).toBe('0');
  });

  it('btc 0.0000155 => 0.0000155', () => {
    const fixed = fix('0.0000155', { currency: 'btc' });
    expect(fixed).toBe('0.0000155');
  });

  it('eth 0.0000155 => 0.0000155', () => {
    const fixed = fix('0.0000155', { currency: 'eth' });
    expect(fixed).toBe('0.0000155');
  });

  it('usdt 0.0000155 => 0', () => {
    const fixed = fix('0.0000155', { currency: 'usdt' });
    expect(fixed).toBe('0');
  });
});

describe('sollar with a few zeros', () => {
  it('sollar bn(100) => 100', () => {
    const fixed = fix(bn(100), { currency: 'sol' });
    expect(fixed).toBe('100');
  });

  it('sollar bn(900) => 900', () => {
    const fixed = fix(bn(900), { currency: 'sol' });
    expect(fixed).toBe('900');
  });

  it('sollar "100" => 100', () => {
    const fixed = fix('100', { currency: 'sol' });
    expect(fixed).toBe('100');
  });
  it('sollar "900" => 900', () => {
    const fixed = fix('900', { currency: 'sol' });
    expect(fixed).toBe('900');
  });

  it('sollar bn(100.0) => 100', () => {
    const fixed = fix(bn(100.0), { currency: 'sol' });
    expect(fixed).toBe('100');
  });
  it('sollar bn(900.0) => 900', () => {
    const fixed = fix(bn(900.0), { currency: 'sol' });
    expect(fixed).toBe('900');
  });
  it('sollar "100.00" => 100', () => {
    const fixed = fix('100.00', { currency: 'sol' });
    expect(fixed).toBe('100');
  });
  it('sollar "900.00" => 900', () => {
    const fixed = fix('900.00', { currency: 'sol' });
    expect(fixed).toBe('900');
  });
});

describe('btc with a few zeros', () => {
  it('btc bn(100) => 100', () => {
    const fixed = fix(bn(100), { currency: 'btc' });
    expect(fixed).toBe('100');
  });

  it('btc bn(900) => 900', () => {
    const fixed = fix(bn(900), { currency: 'btc' });
    expect(fixed).toBe('900');
  });

  it('btc "100" => 100', () => {
    const fixed = fix('100', { currency: 'btc' });
    expect(fixed).toBe('100');
  });
  it('btc "900" => 900', () => {
    const fixed = fix('900', { currency: 'btc' });
    expect(fixed).toBe('900');
  });

  it('btc bn(100.0) => 100', () => {
    const fixed = fix(bn(100.0), { currency: 'btc' });
    expect(fixed).toBe('100');
  });
  it('btc bn(900.0) => 900', () => {
    const fixed = fix(bn(900.0), { currency: 'btc' });
    expect(fixed).toBe('900');
  });
  it('btc "100.00" => 100', () => {
    const fixed = fix('100.00', { currency: 'btc' });
    expect(fixed).toBe('100');
  });
  it('btc "900.00" => 900', () => {
    const fixed = fix('900.00', { currency: 'btc' });
    expect(fixed).toBe('900');
  });
});

describe('without currency', () => {
  it('sollar bn(900) => 900', () => {
    const fixed = fix('900', {});
    expect(fixed).toBe('900.00');
  });
});
