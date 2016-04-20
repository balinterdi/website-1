import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gem-agenda-item', 'Integration | Component | gem agenda item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gem-agenda-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#gem-agenda-item}}
      template block text
    {{/gem-agenda-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
