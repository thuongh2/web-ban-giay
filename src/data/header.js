import React, { useMemo } from "react";

export const headerItem = [
  {
    id: 1,
    name: "Men",
    src: "#",
  },
  {
    id: 1,
    name: "Women",
    src: "#",
  },
  {
    id: 1,
    name: "Accessories",
    src: "#",
  }
];

export const imageCarosel = [
  {
    id: 1,
    src: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/275834374_334149168732693_8006455162809208934_n.jpg?stp=dst-jpg_p600x600&_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ct84wlTLn54AX9zXL86&_nc_oc=AQkFDQzWsiuDiM5tb3_uTSjeXjKV5fQuTIfbrEoPMh2oGj3ezgcKzUjnmc_GX-sucbr4W63d44dH6Y2tlejc6wAq&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT-xj-0RAsG_lX7oKJzZjf3wGZacvbFJ-rUBU3RtoLo64w&oe=623466EB",
  },
  {
    id: 2,
    src: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/275834374_334149168732693_8006455162809208934_n.jpg?stp=dst-jpg_p600x600&_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ct84wlTLn54AX9zXL86&_nc_oc=AQkFDQzWsiuDiM5tb3_uTSjeXjKV5fQuTIfbrEoPMh2oGj3ezgcKzUjnmc_GX-sucbr4W63d44dH6Y2tlejc6wAq&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT-xj-0RAsG_lX7oKJzZjf3wGZacvbFJ-rUBU3RtoLo64w&oe=623466EB",
  },
  {
    id: 3,
    src: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/275834374_334149168732693_8006455162809208934_n.jpg?stp=dst-jpg_p600x600&_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ct84wlTLn54AX9zXL86&_nc_oc=AQkFDQzWsiuDiM5tb3_uTSjeXjKV5fQuTIfbrEoPMh2oGj3ezgcKzUjnmc_GX-sucbr4W63d44dH6Y2tlejc6wAq&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT-xj-0RAsG_lX7oKJzZjf3wGZacvbFJ-rUBU3RtoLo64w&oe=623466EB",
  },
  {
    id: 4,
    src: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/275834374_334149168732693_8006455162809208934_n.jpg?stp=dst-jpg_p600x600&_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ct84wlTLn54AX9zXL86&_nc_oc=AQkFDQzWsiuDiM5tb3_uTSjeXjKV5fQuTIfbrEoPMh2oGj3ezgcKzUjnmc_GX-sucbr4W63d44dH6Y2tlejc6wAq&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT-xj-0RAsG_lX7oKJzZjf3wGZacvbFJ-rUBU3RtoLo64w&oe=623466EB",
  },
];

export const products = [
  {
    id: 1,
    name: "Atom Oasis Red",
    src: "https://cdn.shopify.com/s/files/1/1241/4530/products/OasisRED2938copy_360x.png?v=1624431841",
    price: 150000,
  },
  {
    id: 2,
    name: "Materia Stone",
    src: "https://cdn.shopify.com/s/files/1/1241/4530/products/VolcanoWhitePerfil_360x.jpg?v=1538979057",
    price: 150000,
  },
  {
    id: 3,
    name: "Solar Black",
    src: "https://cdn.shopify.com/s/files/1/1241/4530/products/SOLARBLACK1_360x.jpg?v=1640349647",
    price: 150000,
  },
  {
    id: 4,
    name: "Alpha Neo Pink",
    src: "https://cdn.shopify.com/s/files/1/1241/4530/products/AlphaNEOPINKsilueta02_360x.jpg?v=1624939921",
    price: 150000,
  },
  {
    id: 5,
    name: "Atom Oasis Red",
    src: "https://cdn.shopify.com/s/files/1/1241/4530/products/OasisRED2938copy_360x.png?v=1624431841",
    price: 150000,
  },
  {
    id: 6,
    name: "Atom Oasis Red",
    src: "https://cdn.shopify.com/s/files/1/1241/4530/products/OasisRED2938copy_360x.png?v=1624431841",
    price: 150000,
  },
];

// export const columns =  useMemo(
//   () => [
//     {
//       Header: "Product table",
//       columns: [
//         {
//           Header: "code",
//           accessor: "show.code",
//         },
//         {
//           Header: "name",
//           accessor: "show.name",
//           // Cell method will provide the cell value; we pass it to render a custom component
//         },
//         {
//           Header: "price",
//           accessor: "show.price",
//           // Cell method will provide the value of the cell; we can create a custom element for the Cell
//         },
//         {
//           Header: "image",
//           accessor: "show.image",
//         },
//         {
//           Header: "category",
//           accessor: "show.category",
//         },
//       ],
//     },
//   ],
//   []
// );
// }
