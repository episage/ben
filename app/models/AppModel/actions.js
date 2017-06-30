
import * as constants from './constants'

export function onInit() {
    return {
        type: constants.onInit
    }
}

export function onInitSuccess(actionResult) {
    return {
        type: constants.onInitSuccess,
        actionResult
    }
}

export function onInitFailure(actionResult) {
    return {
        type: constants.onInitFailure,
        actionResult
    }
}