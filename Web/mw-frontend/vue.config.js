const NODE_ENV = process.env.NODE_ENV === 'development'
    ? 'development'
    : 'production';

module.exports = {
    pluginOptions: {
        i18n: {
        locale: 'ru',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: true
        }
    },
    css: {
        extract: NODE_ENV === 'production',
        loaderOptions: {
            sass: {
                prependData: ` @import "~@/styles/env-${NODE_ENV}.scss";`,
            },
        },
    }
}
