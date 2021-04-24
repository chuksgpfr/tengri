const { Model } = require('objection');

class TengriWatch extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'tengri_watch';
  }
}

module.exports = TengriWatch;