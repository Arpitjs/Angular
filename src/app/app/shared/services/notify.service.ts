import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotifyService {

    constructor(public toastr: ToastrService) {

    }

    showSuccess(str: string) {
        this.toastr.success(str);
    }
    showInfo(str: string) {
        this.toastr.info(str);
    }
    showWarning(str: string) {
        this.toastr.warning(str);
    }
    showError(error) {
        debugger;
        if (error.error) {
            if (error.error.message && typeof (error.error.message) == 'string') {
                this.error(error.error.message);
            }
            else if (error.error.message && typeof (error.error.message) == 'object') {
                this.error(error.error.message.errmsg);
            }
            else {
                this.error('something went wrong');
            }
        }
        // to be continued
        // this method is like error handling middleware (express);
        // 
        // step 1 check what comes in error 
        // step 2 parse appropriate error msg
        // dispaly them in toastr
    }

    private error(msg: string) {
        this.toastr.error(msg);
    }

}