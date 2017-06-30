import * as constants from './constants';

export const defaultUrl = (state) => state.getIn([constants.domain, 'defaultUrl']);

export const currentUserId = (state) => state.getIn([constants.domain, 'currentUserId']);
export const currentOrganizationId = (state) => state.getIn([constants.domain, 'currentOrganizationId']);

export const hasStateLoaded = (state) => state.getIn([constants.domain, 'hasStateLoaded']);

