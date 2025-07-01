class badRequest extends Error{
    constructor(propetyMissing){
        const errorMessage = `${propetyMissing} is missing from the request body`
        super(errorMessage)
        this.statusCode = 400
        this.errorMessage = errorMessage
    }

}

module.exports = {
    badRequest
}