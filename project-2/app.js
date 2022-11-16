
let data = [
    {
      name: 'Beao',
      age: '7'
    },
    {
      name: 'Grey',
      age: '7'
    },
    {
      name: 'Todd',
      age: '2'
    },
    {
      name: 'Bungus',
      age: '2'
    },
    {
      name: 'Mishka',
      age: 'little baby'
    },
    {
      name: 'Kodah',
      age: '8'
    }
  ];
  
  const info = document.querySelector('#info');
  
  let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
  });
  
  info.innerHTML = details.join('\n');