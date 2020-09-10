const list = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((list) => {
    return (document.getElementById("list").innerHTML = list
      .map((item) => `<li>${item.title}</li>`)
      .join(""));
  });

// console.log('a', todoArr)
