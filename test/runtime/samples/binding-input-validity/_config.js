export default {
	test({ assert, component, target, window }) {
		const input = target.querySelector('input');
		assert.equal(input.validity.valid, false);

		const event = new window.Event('input');

		input.value = 'test@example.com';
		input.dispatchEvent(event);

		assert.equal(input.validity.valid, true);
		assert.equal(component.emailValidity.valid, true);
	}
};
