'use strict';

/**
 * Groups and sorts anagrams
 * @param {Array.<string>} anagramStrings
 * @returns {Array.<Array.<string>>}
 */
const anagram = (anagramStrings) => {
	return anagramStrings
		.reduce((accumulator, str) => {
			return addToGroup(accumulator, str);
		}, [])
		.filter(anagrams => {
			return anagrams.length > 1;
		})
		.map(anagrams => {
			return anagrams.sort();
		})
		.sort();
};

/**
 * Place newStr in a group of it's anagrams
 * @param {Array.<Array.<string>> | Array} groups
 * @param {string} newStr
 * @returns {Array.<Array.<string>>}
 */
const addToGroup = (groups, newStr) => {
	for (const anagrams of groups) {
		if (areAnagram(newStr, anagrams[0])) {
			anagrams.push(newStr);

			return groups;
		}
	}

	groups.push([newStr]);

	return groups;
};

/**
 * Check whether two strings are anagram of each other
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * If we start at a value of 0 and XOR all the characters of both strings,
 * we should return an end value of 0 if they are anagrams because there
 * would be an even occurrence of all characters in the anagram.
 * @param {string} firstStr
 * @param {string} secondStr
 * @returns {boolean}
 */
const areAnagram = (firstStr, secondStr) => {
	if (firstStr.length !== secondStr.length) {
		return false;
	}

	let value = 0;

	for (let i = 0; i < firstStr.length; ++i) {
		value = value ^ firstStr[i].charCodeAt(0);
		value = value ^ secondStr[i].charCodeAt(0);
	}

	return value === 0;
};
