export const ERROR_ADD = 'ERROR_ADD'
export const ERROR_CLEAR_ALL = 'ERROR_CLEAR_ALL'

export const addError = ({status, statusText}) => ({
    type: ERROR_ADD,
    error: {status, statusText}
})

export const clearErrors = () => ({
    type: ERROR_CLEAR_ALL
})