class Grid{
    constructor(input){
        this.input=input;
    }
    generateHeader(columns){
        let open = "<head><tr>";
        let close = "</tr></head>";
        columns.forEach((d) => {
          open += `<th>${d}</th>`;
        });
  
        return open + close;
      }
      generateData(data){
        let open = "<body>";
        let close = "<body>";
  
        data.forEach((d) => {
         open += `
            <tr>
              <td>${d[0]}</td>
              <td>${d[1]}</td>
              <td>${d[2]}</td>
              </tr>
           `;
          });
        return open + close;
      }
      render(element){
      let data = this.generateData(this.input.data);
      let column = this.generateHeader(this.input.columns);
      let isi = "<table class='table table-hover'>"+column+data+"</table>";
       element.innerHTML = isi;
      }
}

export {Grid};