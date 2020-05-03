export default {
    state: {
        APP_MOBILE:     /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent),
        ERROR:          false,
        ERROR_MASSAGE:  '',
        LOADING:        false,
        MENU:           false,
        NAV:            false,
        EDIT_USER:      false,
        SELECT_USER:    {},
        WARNING:        false,
        WARNING_FUNC:   {
            name: "",
            obj: {}
        }
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
        },
        // Открыть или закрыть окно редактирование пользователя
        CHANGE_EDIT_USER(state, bool) {
            state.EDIT_USER         = bool;
        },
        // Выбрать пользователя на редактирование
        SET_SELECT_USER(state, obj) {
            state.SELECT_USER        = obj;
        },
        // Открыть или закрыть окно предупреждения
        CHANGE_WARNING(state, bool) {
            state.WARNING         = bool;
        },
        // Назначить функцию для окна предупреждения
        SET_WARNING(state, {name, obj}) {
            state.WARNING_FUNC      = {
                name,
                obj
            };
            state.WARNING           = true;
        },
    }
}