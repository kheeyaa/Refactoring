export const spaceship: {
  owner: { firstName: string; lastName: string } | null;
} = {
  owner: null,
};

export let defaultOwner = { firstName: "마틴", lastName: "파울러" };

// spaceship.owner = defaultOwner;
// defaultOwner = { firstName: "레베카", lastName: "파슨스" };
