export function dateMiddleware(req, res, next) {
    req.dateRequest = new Date();
    console.log(req.dateRequest);
    next();
}

export function dateLogging(req, res, next) {
    console.log(req.dateRequest, req.query);
    next();
}