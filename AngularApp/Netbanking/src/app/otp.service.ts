import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {GetDetailsService} from './get-details.service';
@Injectable()
export class OtpService {

  constructor(public http:Http, public service:GetDetailsService) { }

  api_key='49f8611e-703c-11e7-94da-0200cd936042';
  sendOtp(phone_number){
       
        console.log("OTP SENT");
        return this.http.get(`https://2factor.in/API/V1/${this.api_key}/SMS/+91${phone_number}/AUTOGEN`).map(res=>res.json());
 
  }

  validateOtp(session_id,otp_input){

    console.log("OTP Verfied");
     return this.http.get(`https://2factor.in/API/V1/${this.api_key}/SMS/VERIFY/${session_id}/${otp_input}`).map(res=>res.json());
 
  }

}
