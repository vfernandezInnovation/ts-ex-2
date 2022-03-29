export function transform(letters: { [key: string]: string[] }) {
  let result: { [k: string]: number } = {};

  Object.entries(letters).forEach(([key, value]) => {
    console.log("Key " + key);
    for (let item of value) {
      result[item.toLocaleLowerCase()] = +key;
    }
  });

  console.log("Result: " + JSON.stringify(result));
  return result;
}
