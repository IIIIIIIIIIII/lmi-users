angular.module("main").factory("User", function($resource) {
  // helps the interaction with the RESTful API
  return $resource(
    "/api/users/:id",
    { id: "@_id" },
    { update: { method: "PUT" } }
  );
});