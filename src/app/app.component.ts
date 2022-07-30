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
    }
  };

  constructor(
    private exportAsService: ExportAsService
  ) { }

  exportAsString(type: SupportedExtensions, opt?: string) {
    this.config.elementIdOrContent = 'mytable';
    this.exportAs(type, opt);
  }

  exportAs(type: SupportedExtensions, opt?: string) {
    this.config.type = type;
    if (opt) {
      this.config.options.jsPDF.orientation = opt;
    }
    const filename = `dados_${new Date().toLocaleDateString()}`
    this.exportAsService.save(this.config, filename).subscribe(() => {
      // save started
    });
  }
}
