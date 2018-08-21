
const STATUS_MSG = {
    ERROR: {
        USER_ALREADY_EXIST:{
            statusCode:400,
            customMessage: "User Already Exist with email id",
            type: "USER_ALREADY_EXIST"
        },

        MONGO_ERROR: {
            statusCode:400,
            customMessage: 'Error while performing DB query',
            type: "MONGO_ERROR"
        },
        CREATE_USER_ERROR: {
            statusCode:400,
            customMessage: 'Error while creating user',
            type: "MONGO_ERROR"
        }

    }
}

const APP_CONSTANTS = {
	STATUS_MSG:STATUS_MSG,
	};

module.exports = APP_CONSTANTS;