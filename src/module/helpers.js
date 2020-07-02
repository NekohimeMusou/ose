export const registerHelpers = async function () {
  // Handlebars template helpers
  Handlebars.registerHelper("eq", function (a, b) {
    return a == b;
  });

  Handlebars.registerHelper("add", function (lh, rh) {
    return parseInt(lh) + parseInt(rh);
  });

  Handlebars.registerHelper("subtract", function (lh, rh) {
    return parseInt(rh) - parseInt(lh);
  });

  Handlebars.registerHelper("counter", function (status, value, max) {
    return status ? Math.clamped((100.0 * value) / max, 0, 100) : Math.clamped(100 - (100.0 * value) / max, 0, 100);
  });
};
