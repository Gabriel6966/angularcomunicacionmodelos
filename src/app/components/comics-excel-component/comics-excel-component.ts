import { Component, ChangeDetectorRef } from '@angular/core';
import * as XLSX from 'xlsx';
import { Comic } from '../../models/comic';
@Component({
  selector: 'app-comics-excel-component',
  standalone: false,
  styleUrl: './comics-excel-component.css',
  templateUrl: './comics-excel-component.html',
})
export class ComicsExcelComponent {
  public arrayComics: Array<any>;

  constructor(private _cdr: ChangeDetectorRef) {
    this.arrayComics = [];
  }


  cargarComics(): void {
    let path = "./assets/comics.xlsx";
    fetch(path).then((response) => response.arrayBuffer()).then((buffer) => {
      //leer el archivo excel
      let workbook = XLSX.read(buffer, { type: "array" });
      //recuperamos las hojas del libro se hace con name de la hoja
      let sheetName = workbook.SheetNames[0];
      //recuperar la hoja
      let sheet = workbook.Sheets[sheetName];
      //convertir la hoja a json
      let data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      console.log(data);
      this.arrayComics= data.map((row: any) => {
        return new Comic(row[0], row[1], row[2]);
      });
      this._cdr.detectChanges();

    })
  }

}
