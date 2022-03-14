import {Grid} from './module.js';


let tabel = new Grid({
    columns:['Name', 'Email', 'Phone Number'],
    data: [
      ['John', 'john@example.com', '(353) 01 222 3333'],
      ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
    ]
  });
tabel.render(document.getElementById("tab"));


