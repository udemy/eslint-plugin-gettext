'use strict';

module.exports = {
    rules: {
        'no-variable-string': require('./lib/rules/no-variable-string'),
        'no-interpolate-string': require('./lib/rules/no-interpolate-string'),
        'required-positional-markers-for-multiple-variables': require('./lib/rules/required-positional-markers-for-multiple-variables'),
    },
    rulesConfig: {
        'no-variable-string': 0,
        'no-interpolate-string': 0,
    },
};
