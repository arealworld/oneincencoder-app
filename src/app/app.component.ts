import { Component } from '@angular/core';
import { EncoderService } from './services/encoder.service';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'encoder-frontend';
  txtResult: string = '';
  disableButton: boolean = false;

  constructor(private encoderService: EncoderService) {
  }

  get(txtOriginalText: string) {

    var thisComponent = this;

    if (txtOriginalText != '') {
      thisComponent.txtResult = '';
      thisComponent.disableButton = true;
      
      this.encoderService.getBase64FromString(txtOriginalText)
        .node('!.*', function (item: string) {
          thisComponent.txtResult += item;
        })
        .fail(function (error) {
          thisComponent.disableButton = false;
          console.log(error);
        })
        .done(function () {
          thisComponent.disableButton = false;
        });
    }

  }

  clear(txtOriginalText: any) {
    txtOriginalText.value = '';
    this.txtResult = '';
  }

}