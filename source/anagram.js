'use strict';

/**
 * Groups and sorts anagrams
 * @param {string[]} inputArray
 * @returns {string[][]}
 */
const anagram = inputArray => {
	const result = {};

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

	return Object.values(result)
		.filter(anagrams => anagrams.length > 1)
		.map(anagrams => anagrams.sort())
		.sort();
};
