const Create = require('./create');
const createTests = require('./create.tests');

describe('Create', function() {
  createTests(function() {
    let args = [Create];
    args.push.apply(args, arguments);
    let create = new (Create.bind.apply(Create, args))();
    return create.toString();
  });
});
