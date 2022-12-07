'use strict';

function validator(request, response, next) {
  if (request.body.foodName || request.body.clothesName)
    next();
  if (!request.body.foodName || !request.body.clothesName)
    next('No name on request');
}

module.exports = validator;
