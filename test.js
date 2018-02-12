const test = 
{ 
  '1':[ { list_item: 'Casablanca',
      category_id: 1,
      item_id: 1,
      completed: false } ],
  '2':[ { list_item: 'Cafe Medina',
      category_id: 2,
      item_id: 4,
      completed: false } ],
  '3':[ { list_item: 'Kombucha',
      category_id: 3,
      item_id: 8,
      completed: false } ],
  '4':[ { list_item: 'Atlas Shrugged',
      category_id: 4,
      item_id: 11,
      completed: false } ],
  '5':[ { list_item: 'Wash car',
      category_id: 5,
      item_id: 10,
      completed: true } ] 
};

function findData(input) {
  for (const item in input) {
    for (const foo of input[item]) {
      if (foo.completed == true) {
        console.log(foo.item_id);
      }
    }
  }
}

findData(test);