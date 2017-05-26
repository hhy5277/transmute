import curry from "./curry";

/**
 * Sort `subject` according to the value returned by `getSortValue`.
 *
 * @example
 * // returns List [ 2, 1, 3 ]
 * sortBy(
 *   (n) => n % 2,
 *   List.of(1, 2, 3)
 * );
 *
 * @example
 * // returns OrderedMap { "one" => 1, "two" => 2, "three" => 3 }
 * sortBy(
 *   (n) => n % 2,
 *   Map({three: 3, one: 1, two: 2})
 * );
 *
 * @param  {Function} getSortValue returns a value to sort on for each item in `subject`.
 * @param  {Iterable} subject the thing to sort.
 * @return {Iterable} an ordered version of `subject` (e.g. sorting a `Map` returns an `OrderedMap`).
 */
function sortBy(getSortValue, subject) {
  return subject.sortBy(getSortValue);
}

export default curry(sortBy);