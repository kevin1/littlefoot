import test from 'tape';
import classList from 'dom-classlist';
import littlefoot from '../src/';
import simulant from 'simulant';
import { setup, sleep, teardown } from './helper';

test('littlefoot setup with activateOnHover=true', (t) => {
  setup('default.html');

  const lf = littlefoot({ activateOnHover: true });

  const activateDelay = lf.getSetting('activateDelay');
  const footnote      = document.body.querySelector('button[data-footnote-id="1"]');

  simulant.fire(footnote, 'mouseover');

  sleep(activateDelay)
    .then(() => {
      t.ok(classList(footnote).contains('is-hovered'),
        'adds the is-hovered class to the popover');

      t.ok(classList(footnote).contains('is-active'),
        'adds the is-active class to the popover');

      teardown();
      t.end();
    });
});
