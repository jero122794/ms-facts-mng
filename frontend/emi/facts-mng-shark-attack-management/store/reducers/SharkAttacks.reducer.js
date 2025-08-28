import * as Actions from '../actions';

const initialState = {
    data: [],
    totalDataCount: 0,
    page: 0,
    rowsPerPage: 10,
    order: {
        direction: 'asc',
        id: null
    },
    filters: {
        name: '',
        active: null,
        organizationId: undefined,
        country: '',
        type: '',
        species: ''
    }
};

const sharkAttacksReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.SET_SHARK_ATTACKS:
            {
                const { listing, queryTotalResultCount } = action.payload;
                return {
                    ...state,
                    data: listing,
                    totalDataCount: queryTotalResultCount ? queryTotalResultCount : state.totalDataCount,
                };
            }
        case Actions.SET_SHARK_ATTACKS_PAGE:
            {
                return {
                    ...state,
                    page: action.page
                };
            }
        case Actions.SET_SHARK_ATTACKS_ROWS_PER_PAGE:
            {
                return {
                    ...state,
                    rowsPerPage: action.rowsPerPage
                };
            }
        case Actions.SET_SHARK_ATTACKS_ORDER:
            {
                return {
                    ...state,
                    order: action.order
                };
            }
        case Actions.SET_SHARK_ATTACKS_FILTERS_ORGANIZATION_ID:
            {
                return {
                    ...state,
                    filters: { ...state.filters, organizationId: action.organizationId }
                };
            }
        case Actions.SET_SHARK_ATTACKS_FILTERS_NAME:
            {
                return {
                    ...state,
                    filters: { ...state.filters, name: action.name }
                };
            }
        case Actions.SET_SHARK_ATTACKS_FILTERS_ACTIVE:
            {
                return {
                    ...state,
                    filters: { ...state.filters, active: action.active }
                };
            }
        case Actions.SET_SHARK_ATTACKS_FILTERS_COUNTRY:
            {
                return {
                    ...state,
                    filters: { ...state.filters, country: action.country }
                };
            }
        case Actions.SET_SHARK_ATTACKS_FILTERS_TYPE:
            {
                return {
                    ...state,
                    filters: { ...state.filters, type: action.attackType }
                };
            }
        case Actions.SET_SHARK_ATTACKS_FILTERS_SPECIES:
            {
                return {
                    ...state,
                    filters: { ...state.filters, species: action.species }
                };
            }
        default:
            {
                return state;
            }
    }
};

export default sharkAttacksReducer;
