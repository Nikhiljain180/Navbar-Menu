const dropDownOptions = [
  {
    id: 1,
    label: "A",
    selected: true,
    childrens: [
      {
        id: 2,
        label: "B",
        childrens: [
          {
            id: 10,
            label: "E"
          }
        ]
      },
      {
        id: 3,
        label: "C",
        selected: true,
        childrens: [
          {
            id: 5,
            label: "E"
          }
        ]
      }
    ]
  },
  { id: 4, label: "D", selected: true }
];

export function fetchData() {
  return new Promise((res) => {
    setTimeout(res, 100, dropDownOptions);
  });
}
