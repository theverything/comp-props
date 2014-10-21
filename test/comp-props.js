var assert = require('assert');
var util = require('util');
var compProps = require('../');

var multi = [
  {
    FirstName: "Jeff",
    LastName: "Horn"
  },
  {
    FirstName: "Kat",
    LastName: "Park"
  },
  {
    FirstName: "Ryan",
    LastName: "Horn"
  }
];

var single = {
  FirstName: "Jeff",
  LastName: "Horn"
};

describe('compProps', function () {
  describe('with an array', function () {
    before(function () {
      compProps(multi, {
        FullName: function () {
          return this.FirstName + " " + this.LastName;
        }
      });
    });

    it("returns an array", function () {
      assert(util.isArray(multi));
    });

    it("returns an array of 3", function () {
      assert.strictEqual(multi.length, 3);
    });

    it("extends the object with correct full name", function () {
      assert.strictEqual(multi[0].FullName, "Jeff Horn");
      assert.strictEqual(multi[1].FullName, "Kat Park");
      assert.strictEqual(multi[2].FullName, "Ryan Horn");
    });
  });
  describe('with an object', function () {
    before(function () {
      compProps(single, {
        FullName: function () {
          return this.FirstName + " " + this.LastName;
        }
      });
    });

    it("returns an object", function () {
      assert.strictEqual(typeof single, "object");
    });

    it("extends the object with correct full name", function () {
      assert.strictEqual(single.FullName, "Jeff Horn");
    });
  });
});
