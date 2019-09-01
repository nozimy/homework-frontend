'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно', function (assert) {
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

	QUnit.test('Функция не выводит группы из менее двух слов', function (assert) {
		assert.deepEqual(anagram(['кот']), []);
	});
});


QUnit.module('Тестируем функцию areAnagram', function () {
	QUnit.test('Если входные значения - анаграммы, то возвращает true', function (assert) {
		const first = 'барокко';
		const second = 'коробка';

		assert.strictEqual(areAnagram(first, second), true, `${first} ${second}`);
	});

	QUnit.test('Если подать на вход не анаграммы, то возвращает false', function (assert) {
		const first = 'барокко';
		const second = 'кот';
		const third = 'пила';
		const fourth = 'стоп';

		assert.strictEqual(areAnagram(first, second), false, `${first} ${second}`);
		assert.strictEqual(areAnagram(third, fourth), false, `${third} ${fourth}`);
	});
});

QUnit.module('Тестируем функцию addToGroup', function () {
	QUnit.test('Функция работает правильно. Группирует анаграммы без фильтрации и сортировки', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];
		const output = [
			["кот", "ток"],
			["пила", "липа"],
			["барокко", "коробка"],
			["стоп", "пост"],
			["кошка"]
		];
		let result = [];

		input.forEach(str => {
			result = addToGroup(result, str);
		});

		assert.deepEqual(result, output);
	});
});