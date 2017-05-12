export default {
    name: 'i18n',
    initialize: function (appInstance) {
        let i18n = appInstance.lookup('service:i18n');
        i18n.set('locale', calculateLocale(i18n.get('locales')));
    }
}

function calculateLocale(locales) {
    const locale = navigator.language || navigator.userLanguage;
    const language = locale.split('-')[0].toLowerCase();
    return locales.includes(language) ? language : 'en';
}
