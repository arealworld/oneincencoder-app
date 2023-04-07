import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { read } from '@popperjs/core';
import * as oboe from 'oboe';

@Injectable({
  providedIn: 'root'
})
export class EncoderService {

  _url: string = 'https://oneincencoder-backend.azurewebsites.net/api/Encoder/';

  constructor() { }

  getBase64FromString(originalText: string) {

    var config = {
      'url': this._url + 'GetBase64FromString?originalText=' + originalText,
      'method': 'GET',
      'cached': false,
    }

    return oboe(config);
  }

}
