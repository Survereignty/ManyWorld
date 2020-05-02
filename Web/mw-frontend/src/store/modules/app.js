export default {
    state: {
        APP_MOBILE:     /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent),
        ERROR:          false,
        ERROR_MASSAGE:  '',
        LOADING:        false,
        MENU:           false,
        NAV:            false,
    },
    mutations: {
        // Установить и показать ошибку
        SET_ERROR(state, text) {
            state.ERROR             = true;
            state.ERROR_MASSAGE     = text;
        },
        // Закрыть ошибку
        CLOSE_ERROR(state) {
            state.ERROR             = false;
        },
        // Включить или отключить загрузку
        CHANGE_LOADING(state, bool) {
            state.LOADING           = bool;
        },
        // Открыть или закрыть меню
        CHANGE_MENU(state, bool) {
            state.MENU              = bool;
        },
        // Открыть или закрыть навигацию
        CHANGE_NAV(state, bool) {
            state.NAV               = bool;
        }
    }
}