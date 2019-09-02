'use strict';

/**
 * Groups and sorts anagrams
 * @param {string[]} inputArray
 * @returns {string[][]}
 */
const anagram = inputArray => {
	let result = {};

	inputArray.forEach((elem) => {
		const sortedElem = elem
			.split('')
			.sort()
			.join('');

		if (result[sortedElem]) {
			return result[sortedElem].push(elem);
		}

		result[sortedElem] = [elem];
	});

	result = Object.values(result);

	result = result
		.filter(anagrams => anagrams.length > 1)
		.map(anagrams => anagrams.sort())
		.sort();

	return result;
};
