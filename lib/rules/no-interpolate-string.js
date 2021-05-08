'use strict';

const utils = require('../utils');

const errorMsg =
    'Unexpected argument, interpolate function does not allow string literals as arguments.';

const i18nMethodMap = {
    interpolate(context, node) {
        const keyTxt = node.arguments[0];
        if (utils.isStringLiteral(keyTxt)) {
            const reportNode = utils.getReportNode(keyTxt, node);
            context.report(reportNode, errorMsg);
            return true;
        }

        return false;
    },
};

module.exports = {
    meta: {
        docs: {
            description:
                'Should interpolate translated string. Plain string is not allowed',
            recommended: false,
        },
        fixable: null,
        schema: [],
    },

    create: function(context) {
        return {
            CallExpression(node) {
                Object.keys(i18nMethodMap).find(apiName => {
                    if (utils.isI18nAPICall(node, apiName)) {
                        return i18nMethodMap[apiName](context, node);
                    }

                    return false;
                });
            },
        };
    },
};
