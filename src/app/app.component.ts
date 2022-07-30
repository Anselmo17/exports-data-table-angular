import { Component } from '@angular/core';
// import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import { ExportAsService, ExportAsConfig, SupportedExtensions } from 'ngx-export-as';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'export-data-table';

  rows = Array(10).fill(0).map((x, i) => i);


  config: ExportAsConfig = {
    type: 'pdf',
    elementIdOrContent: 'mytable',
    options: {
      jsPDF: {
        orientation: 'landscape'
      },
      // pdfCallbackFn: this.pdfCallbackFn // to add header and footer
    }
  };

  constructor(
    private exportAsService: ExportAsService
  ) { }

  exportAsString(type: SupportedExtensions, opt?: string) {
    this.config.elementIdOrContent = 'mytable';
    this.exportAs(type, opt);
    /*setTimeout(() => {
      this.config.elementIdOrContent = 'mytable';
    }, 1000);*/
  }

  exportAs(type: SupportedExtensions, opt?: string) {
    this.config.type = type;
    if (opt) {
      this.config.options.jsPDF.orientation = opt;
    }
    this.exportAsService.save(this.config, 'myFile').subscribe(() => {
      // save started
    });
    // this.exportAsService.get(this.config).subscribe(content => {
    //   const link = document.createElement('a');
    //   const fileName = 'export.pdf';

    //   link.href = content;
    //   link.download = fileName;
    //   link.click();
    //   console.log(content);
    // });
  }
}
