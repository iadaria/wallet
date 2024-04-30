/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const longToShort = {
  ethereum: 'eth',
  bitcoin: 'btc',
  tether: 'usdt',
};

class NotFoundCourse extends Error {}

const normlaizeMeasuremenent = (name) => {
  const lowerCaseName = name.split('_')[0].toLowerCase();
  if (longToShort[lowerCaseName]) {
    return longToShort[lowerCaseName];
  }
  return lowerCaseName;
};

const normalizeCourse = (course) => {
  const normalizedCourse = {};
  for (const courseName in course) {
    const [fromCourse, toCourse] = courseName.split('_');
    const [normalizedFromCourse, normalizedToCourse] = [
      normlaizeMeasuremenent(fromCourse),
      normlaizeMeasuremenent(toCourse),
    ];
    if (!normalizedCourse[normalizedFromCourse]) {
      normalizedCourse[normalizedFromCourse] = {};
    }
    normalizedCourse[normalizedFromCourse][normalizedToCourse] =
      course[courseName];
  }
  for (const courseFrom in normalizedCourse) {
    for (const courseTo in normalizedCourse[courseFrom]) {
      if (!normalizedCourse[courseTo]) {
        normalizedCourse[courseTo] = {};
      }
      if (!normalizedCourse[courseTo][courseFrom]) {
        normalizedCourse[courseTo][courseFrom] =
          1 / normalizedCourse[courseFrom][courseTo];
      }
    }
  }
  return normalizedCourse;
};

const convertationWithFee = (from, to, courses, feeRate) => {
  const normalizeFrom = normlaizeMeasuremenent(from);
  const normalizeTo = normlaizeMeasuremenent(to);

  if (normalizeFrom === normalizeTo) return 1;

  const normalizedCourse = normalizeCourse(courses);

  const actualCourse = normalizedCourse[normalizeFrom][normalizeTo];

  if (!actualCourse) {
    throw new NotFoundCourse('not found course');
  }

  return actualCourse * (1 - feeRate);
};

const getActualCourse = (from, to, courses) => {
  const normalizeFrom = normlaizeMeasuremenent(from);
  const normalizeTo = normlaizeMeasuremenent(to);

  if (normalizeFrom === normalizeTo) return 1;

  const normalizedCourse = normalizeCourse(courses);

  const actualCourse = normalizedCourse[normalizeFrom][normalizeTo];

  if (!actualCourse) {
    throw new NotFoundCourse('not found course');
  }

  return actualCourse;
};

module.exports = {
  normlaizeMeasuremenent,
  convertationWithFee,
  getActualCourse,
};
