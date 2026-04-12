type Fn3 = (y: number, z: number, w: number) => number;
type StepArgs = [number, number, number];
interface Md5State { a: number; b: number; c: number; d: number; }

const F: Fn3 = (y, z, w) => (y & z) | (~y & w);
const G: Fn3 = (y, z, w) => (y & w) | (z & ~w);
const H: Fn3 = (y, z, w) => y ^ z ^ w;
const I: Fn3 = (y, z, w) => z ^ (y | ~w);

function rotL(n: number, s: number): number {
  return (n << s) | (n >>> (32 - s));
}

function step(s: Md5State, fn: Fn3, args: StepArgs): Md5State {
  const [x, sh, k] = args;
  const v = rotL((s.a + fn(s.b, s.c, s.d) + x + k) | 0, sh) + s.b;
  return { a: s.d, b: v, c: s.b, d: s.c };
}

function round1(s: Md5State, x: number[]): Md5State {
  s = step(s, F, [x[0], 7, -680876936]);
  s = step(s, F, [x[1], 12, -389564586]);
  s = step(s, F, [x[2], 17, 606105819]);
  s = step(s, F, [x[3], 22, -1044525330]);
  s = step(s, F, [x[4], 7, -176418897]);
  s = step(s, F, [x[5], 12, 1200080426]);
  s = step(s, F, [x[6], 17, -1473231341]);
  s = step(s, F, [x[7], 22, -45705983]);
  s = step(s, F, [x[8], 7, 1770035416]);
  s = step(s, F, [x[9], 12, -1958414417]);
  s = step(s, F, [x[10], 17, -42063]);
  s = step(s, F, [x[11], 22, -1990404162]);
  s = step(s, F, [x[12], 7, 1804603682]);
  s = step(s, F, [x[13], 12, -40341101]);
  s = step(s, F, [x[14], 17, -1502002290]);
  s = step(s, F, [x[15], 22, 1236535329]);
  return s;
}

function round2(s: Md5State, x: number[]): Md5State {
  s = step(s, G, [x[1], 5, -165796510]);
  s = step(s, G, [x[6], 9, -1069501632]);
  s = step(s, G, [x[11], 14, 643717713]);
  s = step(s, G, [x[0], 20, -373897302]);
  s = step(s, G, [x[5], 5, -701558691]);
  s = step(s, G, [x[10], 9, 38016083]);
  s = step(s, G, [x[15], 14, -660478335]);
  s = step(s, G, [x[4], 20, -405537848]);
  s = step(s, G, [x[9], 5, 568446438]);
  s = step(s, G, [x[14], 9, -1019803690]);
  s = step(s, G, [x[3], 14, -187363961]);
  s = step(s, G, [x[8], 20, 1163531501]);
  s = step(s, G, [x[13], 5, -1444681467]);
  s = step(s, G, [x[2], 9, -51403784]);
  s = step(s, G, [x[7], 14, 1735328473]);
  s = step(s, G, [x[12], 20, -1926607734]);
  return s;
}

function round3(s: Md5State, x: number[]): Md5State {
  s = step(s, H, [x[5], 4, -378558]);
  s = step(s, H, [x[8], 11, -2022574463]);
  s = step(s, H, [x[11], 16, 1839030562]);
  s = step(s, H, [x[14], 23, -35309556]);
  s = step(s, H, [x[1], 4, -1530992060]);
  s = step(s, H, [x[4], 11, 1272893353]);
  s = step(s, H, [x[7], 16, -155497632]);
  s = step(s, H, [x[10], 23, -1094730640]);
  s = step(s, H, [x[13], 4, 681279174]);
  s = step(s, H, [x[0], 11, -358537222]);
  s = step(s, H, [x[3], 16, -722521979]);
  s = step(s, H, [x[6], 23, 76029189]);
  s = step(s, H, [x[9], 4, -640364487]);
  s = step(s, H, [x[12], 11, -421815835]);
  s = step(s, H, [x[15], 16, 530742520]);
  s = step(s, H, [x[2], 23, -995338651]);
  return s;
}

function round4(s: Md5State, x: number[]): Md5State {
  s = step(s, I, [x[0], 6, -198630844]);
  s = step(s, I, [x[7], 10, 1126891415]);
  s = step(s, I, [x[14], 15, -1416354905]);
  s = step(s, I, [x[5], 21, -57434055]);
  s = step(s, I, [x[12], 6, 1700485571]);
  s = step(s, I, [x[3], 10, -1894986606]);
  s = step(s, I, [x[10], 15, -1051523]);
  s = step(s, I, [x[1], 21, -2054922799]);
  s = step(s, I, [x[8], 6, 1873313359]);
  s = step(s, I, [x[15], 10, -30611744]);
  s = step(s, I, [x[6], 15, -1560198380]);
  s = step(s, I, [x[13], 21, 1309151649]);
  s = step(s, I, [x[4], 6, -145523070]);
  s = step(s, I, [x[11], 10, -1120210379]);
  s = step(s, I, [x[2], 15, 718787280]);
  s = step(s, I, [x[9], 21, -343485551]);
  return s;
}

function prepareInput(str: string): number[] {
  const x: number[] = [];
  const bytes = Array.from(new TextEncoder().encode(str));
  for (let i = 0; i < bytes.length; i++) {
    x[i >> 2] |= bytes[i] << ((i % 4) * 8);
  }
  x[bytes.length >> 2] |= 0x80 << ((bytes.length % 4) * 8);
  x[(((bytes.length + 8) >> 6) << 4) + 14] = bytes.length * 8;
  return x;
}

function processBlock(init: Md5State, x: number[]): Md5State {
  let s = round1(init, x);
  s = round2(s, x);
  s = round3(s, x);
  s = round4(s, x);
  return { a: (s.a + init.a) | 0, b: (s.b + init.b) | 0, c: (s.c + init.c) | 0, d: (s.d + init.d) | 0 };
}

function stateToHex(state: Md5State): string {
  const hexChars = '0123456789abcdef';
  const vals = [state.a, state.b, state.c, state.d];
  let hex = '';
  for (const n of vals) {
    for (let j = 0; j < 4; j++) {
      hex += hexChars[(n >> (j * 8 + 4)) & 0x0f] + hexChars[(n >> (j * 8)) & 0x0f];
    }
  }
  return hex;
}

export function md5(str: string): string {
  const x = prepareInput(str);
  let state: Md5State = { a: 1732584193, b: -271733879, c: -1732584194, d: 271733878 };
  for (let i = 0; i < x.length; i += 16) {
    state = processBlock(state, x.slice(i, i + 16));
  }
  return stateToHex(state);
}
