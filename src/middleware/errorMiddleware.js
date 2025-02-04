export function errorHandler(err, req, res, next) {
    // console.log("-------------------"+ err.message+"------------- "); // Log errors for debugging
  
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
      success: false,
      message: err.message || "Internal Server Error",
      error:err
    });
  }
  