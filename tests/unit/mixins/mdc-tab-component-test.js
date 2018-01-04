import EmberObject from '@ember/object';
import MdcTabComponentMixin from 'ember-material-components-web/mixins/mdc-tab-component';
import { module, test } from 'qunit';

module('Unit | Mixin | mdc tab component');

// Replace this with your real tests.
test('it works', function(assert) {
  let MdcTabComponentObject = EmberObject.extend(MdcTabComponentMixin);
  let subject = MdcTabComponentObject.create();
  assert.ok(subject);
});
