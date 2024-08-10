import { Customer } from "../types/Customer";

// mock customer data
function makeCustomers(total: number = 1000) {
  const res: Customer[] = [];
  for (let i = 0; i < total; ++i) {
    const data: Customer = {
      name: `Customer ${i}`,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit velit, pellentesque a pretium nec, pretium ac dui. Duis bibendum lectus eget est feugiat eleifend. Maecenas purus sapien, aliquet at tellus vel, laoreet fringilla ipsum. Vivamus bibendum justo in ligula suscipit, ac convallis justo bibendum. Etiam luctus condimentum sem, nec convallis enim. Aliquam semper tempus pellentesque. Nunc nec rutrum augue, in consequat enim. Donec id orci elementum, ullamcorper eros ut, dignissim massa. Maecenas ut aliquam lacus. Ut fringilla eget metus non malesuada. Nulla ut velit pretium, consectetur diam in, sollicitudin nisl. Vivamus rutrum lacus vitae mauris condimentum venenatis. Proin a consequat elit. Donec aliquam lacus diam, nec efficitur neque ullamcorper eu",
      address: `Address ${i} Elm Street, Springfield, IL 62701, USA`,
    };
    res.push(data);
  }
  return res;
}
export { makeCustomers };
