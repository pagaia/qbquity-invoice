import { updateState } from "./FormHooks";

describe("testing updateState function", () => {
  test("updateState should update an object  with  deep structure", () => {
    const currentState = { company: { address: { name: "my name" } } };

    const newState = updateState(currentState, "company.address", {
      name: "New value",
    });

    const expected = { company: { address: { name: "New value" } } };
    expect(newState).toEqual(expected);
  });

  test("updateState should return a simple value", () => {
    const currentState = { name: "my name" };
    const newState = updateState(currentState, "name", "New value");

    const expected = { name: "New value" };
    expect(newState).toEqual(expected);
  });

  test("updateState should update an array with simple value", () => {
    const currentState = {
      company: [
        { name: "my name1" },
        { name: "my name2" },
        { name: "my name3" },
      ],
    };

    const newState = updateState(currentState, "company[1].name", "New value");

    const expected = {
      company: [
        { name: "my name1" },
        { name: "New value" },
        { name: "my name3" },
      ],
    };
    console.log(JSON.stringify(newState))
    expect(newState).toEqual(expected);
  });

  test("updateState should update an array with complex  object", () => {
    const currentState = {
      company: [
        {
          address: { name: "my name1", street: "my street1" },
        },
        {
          address: { name: "my name2", street: "my street2" },
        },
      ],
    };
    const newState = updateState(
      currentState,
      "company[1].address.name",
      "New value"
    );

    const expected = {
      company: [
        {
          address: { name: "my name1", street: "my street1" },
        },
        {
          address: { name: "New value", street: "my street2" },
        },
      ],
    };
    expect(newState).toEqual(expected);
  });
});
