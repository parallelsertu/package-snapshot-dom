"use strict";

/**
 * @typedef {Object} Options
 * @property {Boolean} skipEmptyValue - Skips node values that evaluate to false (undefined and zero-length strings)
 */

/**
 * Convert a DOM element to a simpler JSON tree.
 * @param  {Node} node
 * @param  {Options} options
 * @return {Object}
 */
function toJSON(node, options = {}) {
	const serialized = {};
	const isValid = typeof node === "object" && node !== null;
	if (isValid) {
		// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#Node_type_constants
		// serialized.nodeType = node.nodeType;
		if (node.tagName) {
			serialized.tagName = node.tagName.toLowerCase();
		} else if (node.nodeName) {
			serialized.nodeName = node.nodeName;
		}
		if (node.nodeValue) {
			serialized.nodeValue = node.nodeValue;
		}

		const attrs = node.attributes;
		if (attrs) {
			const l = attrs.length;
			if (l > 0) {
				const aggregated = {};
				for (let i = 0; i < l; i++) {
					const attr = attrs[i];
					const skip = options.skipEmptyValue && !attr.nodeValue;
					if (!skip) {
						aggregated[attr.nodeName] = attr.nodeValue;
					}
				}
				serialized.attributes = aggregated;
			}
		}

		const {childNodes} = node;
		if (childNodes) {
			const l = childNodes.length;
			if (l > 0) {
				const aggregated = new Array(l);
				for (let i = 0; i < l; i++) {
					aggregated[i] = toJSON(childNodes[i], options);
				}
				serialized.childNodes = aggregated;
			}
		}
	}
	return serialized;
}

module.exports.toJSON = toJSON;
