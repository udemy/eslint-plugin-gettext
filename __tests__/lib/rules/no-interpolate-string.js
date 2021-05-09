'use strict';

const ruleNoInterpolateString = require('../../../lib/rules/no-interpolate-string');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();
const invalidMessage =
    'Unexpected argument, interpolate function does not allow string literals as arguments.';

ruleTester.run('no-interpolate-string', ruleNoInterpolateString, {
    valid: ["interpolate(gettext('hello'))", 'interpolate(hopefullyTranslatedVar)'],
    invalid: [
        {
            code: "interpolate('hello')",
            errors: [
                {
                    message: invalidMessage,
                    type: 'Literal',
                },
            ],
        },
    ],
});
