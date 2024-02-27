import _ from 'lodash';

const displayTree = (data1, data2) => {
  const sortedKeysArr = _.sortBy(Object.keys({ ...data1, ...data2 }));
  return sortedKeysArr.map((key) => {
    if (!Object.prototype.hasOwnProperty.call(data1, key)) {
      return {
        type: 'added',
        key,
        value: data2[key],
      };
    }

    if (!Object.prototype.hasOwnProperty.call(data2, key)) {
      return {
        type: 'deleted',
        key,
        value: data1[key],
      };
    }

    if (data1[key] !== data2[key]) {
      return {
        type: 'changed',
        key,
        value: {
          old: data1[key],
          new: data2[key],
        },
      };
    }

    return {
      type: 'unchanged',
      key,
      value: data1[key],
    };
  });
};

export default displayTree;
