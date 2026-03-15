class apiError extends Error {
  constructor(
    statusCode,
    message = "something went wrong!!",
    error = [],
    statck = ""
  ){
    super(message)
    this.message = message
    this.statusCode = statusCode
    this.data = null
    this.success = false
    this.error = error

    if (stack) {
        this.stack = statck
    } else {
        Error.captureStackTrace(this , this.constructor)
    }

  }   
}


export{apiError}