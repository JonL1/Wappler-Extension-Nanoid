const { nanoid: s, customAlphabet: custom_secure } = require('nanoid')
const { nanoid: ns, customAlphabet: custom_nonsecure } = require('nanoid/non-secure');
const { nanoid: as, customAlphabet: acustom_secure } = require('nanoid/async')

exports.nanoid = function (options) {
  switch (options.api) {
    case 'secure':
      return s(Number(options.size) || 21);
    case 'nonsecure':
      return ns(Number(options.size) || 21);
    case 'custom_secure':
      cs = custom_secure(this.parseRequired(options.alphabet ? String(options.alphabet) : null, 'string', 'parameter alphabet is required.'), Number(options.size) || 21)
      return cs();
    case 'custom_nonsecure':
      cns = custom_nonsecure(this.parseRequired(options.alphabet ? String(options.alphabet) : null, 'string', 'parameter alphabet is required.'), Number(options.size) || 21)
      return cns();
  }
};

exports.ananoid = async function (options) {
  switch (options.api) {
    case 'secure':
      return await as(Number(options.size) || 21);
    case 'custom_secure':
      acs = acustom_secure(this.parseRequired(options.alphabet ? String(options.alphabet) : null, 'string', 'parameter alphabet is required.'), Number(options.size) || 21)
      return await acs();
  }
};