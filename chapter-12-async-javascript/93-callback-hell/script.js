const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200){
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if(request.readyState === 4){
      callback('could not fetch data', undefined);
    }
  });

  request.open('GET', resource);
  request.send();
};

getTodos('todos/eugene.json', (err, data) => {
  console.log(data);
  getTodos('todos/john.json', (err,data) => {
    console.log(data);
    getTodos('todos/mario.json', (err,data) => {
      console.log(data);
    });
  });
});