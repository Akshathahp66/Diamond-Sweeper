import {
    Component
} from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: '../views/app.component.html',
    styleUrls: ['../sass_folder/style.scss']
})
export class AppComponent {

    table: any[] = [];
    counter: number;
    visible: boolean;
    score: number;

    constructor() {
        this.table = this.multiArray;
        this.counter = 0;
        this.visible = false;
        this.score = 64;
    }

    multiArray = [
 [{
                id: 1,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 2,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 3,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 4,
                diamond: true,
                hideOriginal: true
            },
            {
                id: 5,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 6,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 7,
                diamond: true,
                hideOriginal: true
            },
            {
                id: 8,
                diamond: false,
                hideOriginal: true
            }],
 [{
                id: 9,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 10,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 11,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 12,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 13,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 14,
                diamond: true,
                hideOriginal: true
            },
            {
                id: 15,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 16,
                diamond: false,
                hideOriginal: true
            }],
 [{
                id: 17,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 18,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 19,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 20,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 21,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 22,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 23,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 24,
                diamond: true,
                hideOriginal: true
            }],
 [{
                id: 25,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 26,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 27,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 28,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 29,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 30,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 31,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 32,
                diamond: false,
                hideOriginal: true
            }],
 [{
                id: 33,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 34,
                diamond: true,
                hideOriginal: true
            },
            {
                id: 35,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 36,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 37,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 38,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 39,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 40,
                diamond: false,
                hideOriginal: true
            }],
 [{
                id: 41,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 42,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 43,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 44,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 45,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 46,
                diamond: true,
                hideOriginal: true
            },
            {
                id: 47,
                diamond: true,
                hideOriginal: true
            },
            {
                id: 48,
                diamond: false,
                hideOriginal: true
            }],
 [{
                id: 49,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 50,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 51,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 52,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 53,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 54,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 55,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 56,
                diamond: false,
                hideOriginal: true
            }],
 [{
                id: 57,
                diamond: true,
                hideOriginal: true
            },
            {
                id: 58,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 59,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 60,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 61,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 62,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 63,
                diamond: false,
                hideOriginal: true
            },
            {
                id: 64,
                diamond: false,
                hideOriginal: true
            }]
 ];

    diamondFetch(i, j): void {
        setTimeout(() =>this.table[i][j].hideOriginal = false, 300); // hide ? and show diamond/empty box

        
        if (this.table[i][j].diamond === true) {
            this.counter++;// count when diamond found
        } else {
            this.score--;// deduct score when diamond not found
        }

        if (this.counter === 8) {
            this.show();// show modal

        }
    }

    show() {
        setTimeout(() => this.visible = true, 300);
    }

}
