
http_codes = {
    created: 201,
    ok: 200,
    unAuthorized: 401,
    dataNotFound: 404,
    forbidden: 403,
    badRequest: 400,
    internalError: 501
}

messages = {
    nameNotEmpty: "Name Is Empty Or Invalid.",
    internalError: "Internal Server Error",
    ok: "ok",
    dataNotFound: "Data Not Found",
    permissionDenied: "Permission Denied",
    unAuthAccess: "Unauthorize Access",
    deleted: "Deleted Successfully",
    invalidId: "Invalid Id"
}

// =====================================================EXPORT ========================================================================  

module.exports = {
    http_codes,
    messages
  
}