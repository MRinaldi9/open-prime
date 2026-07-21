import { Component } from '@angular/core';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';

@Component({
    selector: 'overview-doc',
    standalone: true,
    imports: [AppDocSectionText],
    template: `
        <app-docsectiontext>
            <p>
                Optimus UI is the open-source MIT licensed continuation of PrimeNG (now closed-source), rebranded due to trademark restrictions. Optimus UI v1 targets Angular 21 and is fully API-compatible with PrimeNG v21, so migrating is a rename
                rather than a rewrite. From v1 onward, Optimus UI evolves independently and future versions will diverge from PrimeNG, so v1 is the smoothest point to switch.
            </p>
            <p>Component selectors keep the <i>p-</i> prefix and icon classes keep the <i>pi-</i> prefix, so your templates are not affected by the migration.</p>
        </app-docsectiontext>
    `
})
export class OverviewDoc {}
