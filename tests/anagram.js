'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно', assert => {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];

		const output = [
			['барокко', 'коробка'],
			['кот', 'ток'],
			['липа', 'пила'],
			['пост', 'стоп']
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция не выводит группы из менее двух слов', assert => {
		assert.deepEqual(anagram(['кот']), []);
	});
});