"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async find(params, populate) {
    let paramsWithoutSort = { ...params };
    if (paramsWithoutSort._start) {
      delete paramsWithoutSort._start;
    }
    if (paramsWithoutSort._limit) {
      delete paramsWithoutSort._limit;
    }
    const data = await strapi.query("blogs").find(params, populate);
    const count = await strapi.query("blogs").count(paramsWithoutSort);
    const result = {
      data,
      count,
    };
    return result;
  },
};
